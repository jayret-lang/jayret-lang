provide *
import ast as A
import base as _
import either as E
import load-lib as L
import parse-java as P
import string-dict as SD
import runtime-lib as R
import sets as S
import file("./ast-util.arr") as U
import file("./resolve-scope.arr") as RN
import file("./compile-structs.arr") as CS
import file("./compile-lib.arr") as CL
import file("./type-structs.arr") as TS
import file("./ast-util.arr") as AU

# Mirrors the image exports in starter2024.arr so DCIC-style intro
# programs (triangle, circle, overlay, ...) work at the REPL without
# an explicit `import image as I`. Scoped to user-written REPL code
# only — adding these to CS.standard-imports would shadow names like
# `line` in compiler internals (js-ast.arr) and break the build.
repl-extra-imports = CS.extra-imports(
  CS.standard-imports.imports +
  [list:
    CS.extra-import(CS.builtin("image"), "image", [list:
        "above", "above-align", "above-align-list", "above-list",
        "add-line", "below", "below-align", "below-align-list",
        "below-list", "beside", "beside-align", "beside-align-list",
        "beside-list", "center-pinhole", "circle", "color-at-position",
        "color-list-to-bitmap", "color-list-to-image", "color-named",
        "crop", "draw-pinhole", "ellipse", "empty-color-scene",
        "empty-image", "empty-scene", "ff-decorative", "ff-default",
        "ff-modern", "ff-roman", "ff-script", "ff-swiss", "ff-symbol",
        "ff-system", "flip-horizontal", "flip-vertical", "frame",
        "fs-italic", "fs-normal", "fs-slant", "fw-bold", "fw-light",
        "fw-normal", "image-baseline", "image-height", "image-pinhole-x",
        "image-pinhole-y", "image-to-color-list", "image-url",
        "image-width", "images-difference", "images-equal", "is-angle",
        "is-image", "is-image-color", "is-mode-fade", "is-mode-outline",
        "is-mode-solid", "isosceles-triangle", "line", "mode-fade",
        "mode-outline", "mode-solid", "move-pinhole", "name-to-color",
        "overlay", "overlay-align", "overlay-align-list", "overlay-list",
        "overlay-onto-offset", "overlay-xy", "place-image",
        "place-image-align", "place-pinhole", "point", "point-polar",
        "point-polygon", "point-xy", "put-image", "radial-star",
        "rectangle", "regular-polygon", "rhombus", "right-triangle",
        "rotate", "scale", "scale-xy", "scene-line", "square", "star",
        "star-polygon", "star-sized", "text", "text-font", "triangle",
        "triangle-aas", "triangle-asa", "triangle-ass", "triangle-saa",
        "triangle-sas", "triangle-ssa", "triangle-sss", "underlay",
        "underlay-align", "underlay-align-list", "underlay-list",
        "underlay-xy", "wedge", "x-center", "x-left", "x-middle",
        "x-pinhole", "x-right", "y-baseline", "y-bottom", "y-center",
        "y-middle", "y-pinhole", "y-top"
      ],
      [list:
        "FillMode", "FontFamily", "FontStyle", "FontWeight", "Image",
        "Point", "XPlace", "YPlace"
      ])
  ])

fun make-provide-for-repl(p :: A.Program):
  cases(A.Program) p:
    | s-program(l, _use, _, _, existing-provides, imports, body) =>
      A.s-program(l,
          _use,
          A.s-provide-none(l),
          A.s-provide-types-none(l),
          existing-provides + [list: A.s-provide-block(l, empty, [list:
            A.s-provide-name(l, A.s-star(l, empty)),
            A.s-provide-type(l, A.s-star(l, empty)),
            A.s-provide-module(l, A.s-star(l, empty))
            # Adding s-provide-data for imports would be redundant because the
            # name/type exports will refer to the data anyway
            ])],
          imports,
          body)
  end
end

fun add-globals-from-env(post-env :: CS.ComputedEnvironment, g :: CS.Globals) -> CS.Globals:
  module-env = post-env.module-env
  val-env = post-env.env
  type-env = post-env.type-env

  module-globals = for fold(mg from g.modules, k from module-env.keys-list()):
    mg.set(k, module-env.get-value(k).origin)
  end
  val-globals = for fold(vg from g.values, k from val-env.keys-list()):
    vg.set(k, val-env.get-value(k).origin)
  end
  type-globals = for fold(tg from g.types, k from type-env.keys-list()):
    tg.set(k, type-env.get-value(k).origin)
  end

  CS.globals(module-globals, val-globals, type-globals)
end

fun make-repl<a>(
    runtime :: R.Runtime,
    modules :: SD.MutableStringDict<CS.Loadable>,
    realm :: L.Realm,
    compile-context :: a,
    make-finder :: (-> (a, CS.Dependency -> CL.Located<a>))):

  var globals = CS.standard-globals
  var current-compile-options = CS.default-compile-options.{ checks: "main" }
  var current-modules = modules
  var current-realm = realm
  var locator-cache = SD.make-mutable-string-dict()
  var current-interaction = 0
  var current-finder = make-finder()

  finder = lam(context, dep):
    if CS.is-dependency(dep):
      cases(Option) locator-cache.get-now(dep.arguments.first):
        | some(l) => CL.located(l, context)
        | none => current-finder(context, dep)
      end
    else:
      current-finder(context, dep)
    end
  end

  fun update-env(result, loc, cr) block:
    dep = CS.dependency("repl", [list: loc.uri()])

    new-globals = add-globals-from-env(cr.post-compile-env, globals)
    globals := new-globals

    locator-cache.set-now(loc.uri(), loc)
    current-realm := L.get-result-realm(result)

  end
  fun restart-interactions(defs-locator :: CL.Locator, options :: CS.CompileOptions) block:
    current-interaction := 0
    current-compile-options := options
    current-realm := realm
    locator-cache := SD.make-mutable-string-dict()
    current-modules := modules.freeze().unfreeze() # Make a copy
    current-finder := make-finder()
    globals := defs-locator.get-globals()
    run-interaction(defs-locator)
  end

  fun run-interaction(locator :: CL.Locator) block:
    worklist = CL.compile-worklist-known-modules(finder, locator, compile-context, current-modules)
    compiled = CL.compile-program-with(worklist, current-modules, current-compile-options)
    for SD.each-key-now(k from compiled.modules) block:
      current-modules.set-now(k, compiled.modules.get-value-now(k))
    end
    result = CL.run-program(worklist, compiled, current-realm, runtime, current-compile-options)
    cases(E.Either) result:
      | right(answer) =>
        when L.is-success-result(answer):
          update-env(answer, locator, compiled.loadables.last())
        end
      | left(err) =>
        nothing
    end
    result
  end

  fun make-interaction-locator(get-interactions) block:
    current-interaction := current-interaction + 1
    this-interaction = current-interaction
    uri = "interactions://" + num-to-string(this-interaction)
    var ast = nothing
    fun get-ast() block:
      when ast == nothing block:
        interactions = get-interactions()
        parsed = P.surface-parse(interactions, uri)
        ast := make-provide-for-repl(parsed)
      end
      ast
    end
    globals-now = globals
    {
      method get-uncached(self): none end,
      method needs-compile(self, provs): true end,
      method get-modified-time(self): 0 end,
      method get-options(self, options): options end,
      method get-native-modules(self): [list:] end,
      method get-module(self): CL.pyret-ast(get-ast()) end,
      method get-extra-imports(self): CS.extra-imports(empty) end,
      method get-dependencies(self):
        mod-deps = CL.get-dependencies(self.get-module(), self.uri())
        mod-deps + self.get-extra-imports().imports.map(_.dependency)
      end,
      method get-globals(self): globals-now end,
      method update-compile-context(self, ctxt): ctxt end,
      method uri(self): uri end,
      method name(self): "interactions" + num-to-string(this-interaction) end,
      method set-compiled(self, env, result): nothing end,
      method get-compiled(self): none end,
      method _equals(self, that, rec-eq): rec-eq(self.uri(), that.uri()) end
    }
  end

  fun make-definitions-locator(get-defs, shadow globals):
    var ast = nothing
    fun get-ast() block:
      when ast == nothing block:
        initial-definitions = get-defs()
        parsed = P.surface-parse(initial-definitions, "definitions://")
        ast := make-provide-for-repl(parsed)
      end
      ast
    end
    {
      method get-uncached(self): none end,
      method needs-compile(self, provs): true end,
      method get-modified-time(self): 0 end,
      method get-options(self, options): options end,
      method get-native-modules(self): [list:] end,
      method get-module(self): CL.pyret-ast(get-ast()) end,
      method get-extra-imports(self): repl-extra-imports end,
      method get-dependencies(self):
        CL.get-standard-dependencies(self.get-module(), self.uri())
      end,
      method get-globals(self): globals end,
      method uri(self): "definitions://" end,
      method name(self): "definitions" end,
      method set-compiled(self, env, result): nothing end,
      method get-compiled(self): none end,
      method _equals(self, that, rec-eq): rec-eq(self.uri(), that.uri()) end
    }
  end

  {
    restart-interactions: restart-interactions,
    make-interaction-locator: make-interaction-locator,
    make-definitions-locator: make-definitions-locator,
    run-interaction: run-interaction,
    runtime: runtime
  }
end
