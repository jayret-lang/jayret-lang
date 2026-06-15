# Jayret vs Pyret: feature parity

A walk-through of every "Major Feature" listed on [pyret.org](https://pyret.org),
mapping it to Jayret's current state (as of `jayret-v0.1.0`).

Status legend: ✅ supported  •  ⚠️ partial / via Pyret runtime  •  ❌ deferred

Jayret compiles to the same Pyret AST and reuses the Pyret runtime
unchanged, so any feature that lives entirely in the runtime is
inherited for free. Where a feature has surface-syntax implications,
the entries below show the Jayret form.

1. **Images** — ✅
   The `image` library is available unchanged. Constructor calls are
   Java-syntax: `Image c = circle(50, "solid", "red");`

2. **Rationals** — ✅
   Pyret's exact-rational arithmetic comes through verbatim.
   `0.1 + 0.2 == 0.3` holds; `tostring` prints `3/10`. Roughnums use
   the same `~` prefix as Pyret: `~3.14`.

3. **Examples** — ⚠️
   Pyret's standalone `examples:` block isn't a separate Jayret form;
   Jayret folds it into `@Check`. A `where:`-equivalent inline-example
   block is also supported:
   `int sq(int n) { return n*n; } where: assertEquals(sq(3), 9);`

4. **Tables** — ✅
   Literal tables (`table { String name, int age; row: "Alice", 30; ... }`)
   plus the full column-scoped DSL: `sieve`, `order`, `extend`,
   `select`, `extract`. `load-table` from CSV / Google Sheets is
   **deferred**.

5. **Data Structures** — ✅
   `data Shape { Circle(double r); Rectangle(double w, double h); }`
   plus `switch (s) { case Circle(r): yield ...; }` pattern matching.

6. **Type Annotations** — ✅
   Java-style type-before-name declarations: `int x = 6;
   String greet(String name) { ... }`. Dynamically checked at runtime
   (same as Pyret). Annotations are **optional everywhere**.

7. **Testing** — ✅
   `@Check void testFoo() { assertEquals(...); assertTrue(...);
   assertRaises(() -> ..., "msg"); }`. Anonymous `@Check { ... }`
   blocks supported. ~140 assertions across the example corpus.

8. **Reactors** — ❌
   Deferred. The runtime `reactor:` library is reachable but no
   Jayret surface syntax.

9. **Spies** — ✅
   `spy(x, y, ...);` prints labelled values inline.

10. **Lambdas** — ✅
    Arrow syntax: `(int x) -> x * 2`, with optional types:
    `(x, y) -> x + y`. Block-bodied lambdas via
    `(int x) -> { ... return ...; }`.

11. **Loops** — ⚠️
    Pyret-style `for` comprehensions are first-class:
    `[for filter(int x : xs) { yield x > 0; }]`, `for map`, `for fold`.
    Java's C-style `for (int i = 0; i < n; i++)` is **not** supported;
    use recursion or comprehensions (same as Pyret).

12. **Sets** — ✅
    Pyret's `sets` library is importable: `import sets as S;` and
    `S.list-to-set([list: 1, 2, 3])` works as written.

13. **Constructors** — ⚠️
    `data` variants give automatic constructors; `new ClassName(args)`
    sugar is supported. Custom user-defined constructor types (Pyret's
    first-class constructor objects) inherit from the runtime but
    have no Jayret-specific syntax.

14. **Tuples** — ❌
    Deferred; not in `jayret-v0.1.0`. Use records
    (`{x: 1, y: 2}`) as a workaround.

15. **Mutation and State** — ✅
    `var int n = 0; n := n + 1;` for mutable bindings (Pyret's `var`
    keyword). Pyret's `ref` fields on data variants are reachable
    through the runtime but have no Jayret syntax yet.

16. **Contexts** — ⚠️
    The Pyret runtime supports `use context starter2024` /
    `essentials2024` / etc. Jayret does not yet expose a surface
    form for this; the default context is whichever the surrounding
    code.jayret.org configuration sets.

17. **Equality** — ✅
    Inherited unchanged. `==` is structural equality on records /
    data variants; `===` is identity. Roughnums compare with `=~`.

18. **Modules** — ✅
    `import file("math-utils.jrt") as M; M.sq(5)` works across files.
    Default `provide *` (all top-level defs exported). Finer-grained
    `provide` control is **deferred**.

19. **Partial Functions** — ✅
    The `Option<T>` type is importable and works with pattern matching:
    `switch (lookup(k)) { case some(v): ...; case none(): ...; }`.
    Raising exceptions uses the runtime's `raise` from inside a
    method body.

20. **External Data** — ❌
    `load-table` is deferred. CSV / Google-Sheet loaders aren't
    accessible from Jayret syntax; only the literal `table { … }`
    form is.

21. **Property-Based Testing** — ✅
    `assertSatisfies(value, (T x) -> predicate(x))` is the Jayret
    form of Pyret's `satisfies`.

22. **Object-Oriented Programming** — ⚠️
    Records-as-objects work:
    `Object p = {x: 3, y: 4, dist: () -> sqrt(x*x + y*y)}; p.dist()`.
    **Sharing methods on data variants** (Pyret's `sharing:` block)
    is **deferred** — for now, hoist methods out as free functions
    that pattern-match on the variant.

## Summary

- ✅ Supported — 14
- ⚠️ Partial / runtime-reachable — 6
- ❌ Deferred — 3

The three deferred items (Reactors, Tuples, External Data via
`load-table`) match the deferral list in
[jayret-status.md](./jayret-status.md). The six partial items are
all *runtime-available* but lack first-class Jayret surface
syntax — they're reachable if you don't mind writing the call as
"Pyret-the-runtime exposed through Jayret-the-syntax".

For an exhaustive list of what works syntactically, see
[jayret-spec.md](./jayret-spec.md).
