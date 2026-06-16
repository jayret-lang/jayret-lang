provide *

import builtin-modules as B
import parse-pyret as PP
import file("../compile-lib.arr") as CL
import file("../compile-structs.arr") as CS
import file("../js-of-pyret.arr") as JSP
import file as F
import pathlib as P

# Mirrors the image exports in starter2024.arr so DCIC-style intro
# programs (triangle, circle, overlay, ...) work in .arr files without
# an explicit `import image as I`. Scoped to user-written Pyret
# programs only — adding image to CS.standard-imports would shadow
# names like `line` in compiler internals (js-ast.arr).
arr-extra-imports = CS.extra-imports(
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

# Still unsure if just a path is the right input for this.
#data FileLocator:
#  | file-locator(path :: String, cenv :: CS.CompileEnv)
#    with:

fun mockable-file-locator(file-ops):
  lam(path, globals):
    var ast = nothing
    {
      path: path,
      globals: globals,
      method get-uncached(self): none end,
      method get-modified-time(self):
        file-ops.file-times(path).mtime
      end,
      method get-options(self, options):
        options
      end,
      method get-module(self) block:
        when ast == nothing block:
          when not(file-ops.file-exists(self.path)):
            raise("File " + self.path + " does not exist")
          end
          f = file-ops.input-file(self.path)
          str = f.read-file()
          f.close-file()
          # spy "Parsing": uri: self.uri() end
          ast := CL.pyret-ast(PP.surface-parse(str, self.uri()))
        end
        ast
      end,
      method get-dependencies(self):
        CL.get-dependencies(self.get-module(), self.uri()) +
        arr-extra-imports.imports.map(_.dependency)
      end,
      method get-native-modules(self):
        [list:]
      end,
      method get-extra-imports(self):
        arr-extra-imports
      end,
      method get-globals(self): self.globals end,
      method set-compiled(self, cr, deps) block:
        ast := nothing
        nothing
      end,
      method needs-compile(self, provides):
        true
      end,
      method get-compiled(self):
        none
      end,
      method uri(self): "file://" + string-replace(file-ops.real-path(self.path), P.path-sep, "/") end,
      method name(self): P.basename(self.path, "") end,
      method _equals(self, other, eq): eq(self.uri(), other.uri()) end
    }
  end
end

file-locator = mockable-file-locator({
    input-file: F.input-file,
    output-file: F.output-file(_, false),
    file-exists: F.file-exists,
    file-times: F.file-times,
    real-path: F.real-path
})
