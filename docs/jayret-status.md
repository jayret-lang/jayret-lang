# Jayret implementation status

A current-snapshot view of the Jayret implementation: what's built,
what's still deferred, and what works end-to-end. For language
reference, see [jayret-spec.md](./jayret-spec.md). For where Jayret
lives and how it is released, see
[jayret-distribution.md](./jayret-distribution.md). For a
feature-by-feature parity comparison against pyret.org's "Major
Features" list, see [jayret-vs-pyret-features.md](./jayret-vs-pyret-features.md).

Status legend: ✅ supported  •  ⚠️ partial / via Pyret runtime  •  ❌ deferred

## Compatibility with DCIC

A walk-through of every chapter of [DCIC](https://dcic-world.org)
(Data-Centric Introduction to Computing) — what language features the
chapter actually uses in its code blocks, and whether Jayret supports
each one. Source: the Jayret fork of DCIC at
[jayret-lang/dcic](https://github.com/jayret-lang/dcic), where 91% of
code blocks have been mechanically translated and chapters 1–6 plus
testing.md have been hand-audited for authentic Jayret style.

### Part II — Introduction to Programming (Foundations)

**§3.1 Getting Started** — ✅
Numbers, strings, image library calls (`circle(50, "solid", "red")`),
arithmetic, basic types (`int`, `String`). Pure expression evaluation.

**§3.2 Naming Values** — ✅
Top-level let bindings: `int x = 5;`. No new language features.

**§3.3 From Repeated Expressions to Functions** — ✅
Function declarations with type annotations
(`Image makeFlag(int w) { ... }`), doc strings as `/* ... */` block
comments, `@Check` for example-driven testing.

**§3.4 Conditionals and Booleans** — ✅
`if`/`else if`/`else`, boolean operators (`&&`, `||`, `!`), comparison
operators, function composition.

### Part III — Tabular Data

**§4.1 Introduction to Tabular Data** — ✅
Literal `table { String name, int age; row: ...; }`, column ops
(`sieve`, `order`, `extend`, `select`, `extract`), arrow lambdas
(`(r) -> r.x + 1`), `@Check`. Phases 11, 16a, 16b.

**§4.2 Processing Tables (Cleaning Data)** — ✅
`loadTable(cols).source(src).withSanitizer(col, fn).load()` from
both CSV files and Google Sheets, with the `data-source` sanitizers
(`string-sanitizer`, `num-sanitizer`, …). Phase 17.
Google Sheets requires OAuth and only works in the playground
(code.jayret.org); CSV loading works in both CLI and playground.

### Part IV — Lists

**§5.1 Tables to Lists** — ✅
`loadTable` (as in §4.2), arrow lambdas, the column-op DSL for moving
between table and list representations.

**§5.2 Processing Lists** — ✅
`data List { Empty; Link(...); }` (variant names capitalised per
Jayret convention), `switch (l) { case Empty: ...; case Link(f, r): ...; }`
pattern matching, recursion, `block { ... }` for expression-position
sequencing (Phase 14), `@Check`.

**§5.3 Recursive Data** — ✅
User-declared `data` with recursive variants, `switch`/`case`, block
expressions.

### Part V — Structured Data

**§6.1 Introduction to Structured Data** — ✅
`data Shape { Circle(double r); Rectangle(double w, double h); ... }`,
`switch`/`case` with constructor patterns.

### Part VI — Trees

**§7.1 Trees** — ✅
Recursive `data` declarations, `switch`/`case`, arrow lambdas, `block`.

### Part VII — Bonus Foundations

**§8.1 Functions as Data** — ✅
Functions as first-class values, `rec` bindings (Phase 13) for
self-referential function values, `for map` comprehension.

**§8.2 Queues from Lists** — ⚠️ §8.2.4 deferred
Most of the chapter (data declarations, `switch`/`case`, `@Check`)
runs on Jayret unchanged. **§8.2.4 "Using Tuples" depends on tuple
literals and tuple-binding**, which are deferred (see [Still
deferred](#still-deferred)). The DCIC fork marks each tuple block
with a `TODO(pyret2jayret)` comment so they render but don't claim
to evaluate.

**§8.3 Testing** — ✅
`@Check void testName() { ... }` annotated test blocks, `where { }`
inline-example blocks, `assertEquals` / `assertTrue` / `assertRaises`
/ `assertSatisfies` / `assertRoughlyEquals`.

### Part VIII — Pyret to Python (Booklet III)

§9 (intro-python), §10 (pandas-reshape-tables), §11 (python-fileio) —
**N/A for Jayret status.** These chapters teach the Python side of
the bilingual DCIC; the Jayret fork keeps the original Pyret-to-Python
exposition intact.

### Part IX — Reasoning About State

**§12.1 Mutating Structures** — ❌ uses `ref` fields and `!` mutation
The chapter teaches in-place mutation via Pyret's `ref` field
declaration (`ref balance :: Number`) and the `acct ! { balance: ... }`
mutation operator. **Both are deferred in Jayret** (no surface syntax;
reachable through the runtime). DCIC blocks here either rely on these
features or substitute `var` + reassignment where the substitution
preserves the chapter's pedagogical point.

**§12.2 Unified Equality** — ✅ (runtime equality)
`==` (structural), `===` (identity), `=~` (rough-equality on
roughnums). All inherited from the Pyret runtime unchanged.

**§12.3 Unified Lists & Memory** — ⚠️
Discussion of memory semantics; the live code uses `ref`-flavoured
examples from §12.1 and so inherits the same caveat.

**§12.4 Unified Cyclic Data** — ⚠️
Builds on cyclic refs and the `!` mutation operator. `rec` bindings
work for *immutable* cyclic data; mutable cycles need `ref` (deferred).

### Part XI — Algorithmic Analysis

**§14 Predicting Growth** — ✅
`switch`/`case` on lists, recursion, no new features.

**§15 Amortized Analysis** — ✅
`data Queue { ... }`, `switch`/`case`, `var int` + `:=` for mutable
counters, `block { ... }`, `^` operator (Pyret pipe, accepted via the
runtime).

### Part XII — DAGs / Graphs / Sets

**§16.2 The Size of a DAG** — ⚠️ uses tuples
Core graph traversal (`data`, `switch`, `block`, `@Check`) is supported;
the chapter's accumulator-pattern variant uses **tuple values**
(deferred). Workaround: substitute a small record / data variant.

**§17.1 Introduction to Graphs** — ✅
`data` graph representations, `for filter` / `for map` comprehensions
(Phase 15), `rec` for shared structure, `switch`/`case`. No deferred
features in the code.

**§17.2–17.5 Basic Graph Traversal, Weighted Graphs, Lightest Paths, MST** — ✅
All run on the same toolkit: `data`, `switch`/`case`, comprehensions,
`@Check`. No deferred features.

**§18.1 Sets from Lists** — ✅
`switch`/`case`, `extend` table op, `@Check`, var-and-reassign.

**§18.2 Sets from Trees** — ✅
Tree `data`, `switch`/`case`, `block`.

**§18.3 Union-Find** — ❌ uses `ref` fields and `!` mutation
The classic union-find implementation needs in-place parent-pointer
updates: declared as `ref` fields, updated with `!`. Both deferred in
Jayret. (The high-level algorithm and its tree representation are
implementable; only the mutation idiom is unavailable.)

**§18.4 Hash Set / Key-Value** — ✅
`data`, `switch`/`case`, `extend`, `for filter`, arrow lambdas, `@Check`.

**§18.5 Orderability** — ✅
Arrow lambdas, `@Check`, polymorphic comparisons.

**§18.6 Sets Case Study** — ✅
Prose chapter; no new code constructs.

### Part XIII — Advanced

**§19 State in Pyret** — ❌
By design this chapter introduces Pyret's `ref` and `!` mutation
primitives in depth. Deferred in Jayret on the same grounds as §12.1.

**§20 Recursion from Mutation** — ❌
Builds cyclic structures with `rec` + `ref` + `!`. The `rec` half
works in Jayret; the mutation half does not.

**§21 Cycle Detection** — ⚠️ uses `!`
Algorithm itself is straightforward (`data`, `@Check`); the chapter's
example uses `!` to introduce a cycle.

**§22 Avoiding Recomputation (Memoisation)** — ✅
`data`, `switch`, `var`/`:=`, `for fold`, `block`, `rec`, `@Check`.
All supported.

**§23 Partial Domains** — ✅
`data Option { ... }`, `switch`/`case`, arrow lambdas, `block`.

**§24 Staging** — ✅
`data`, `switch`/`case`, lambdas, `@Check`.

**§25 Factoring Numbers** — ✅
`switch`/`case`, `for map`.

**§26 Deconstructing Loops** — ⚠️ uses tuples
General-form discussion of loop accumulators; some intermediate
examples use **tuples** (deferred). Specialised examples and the
final result are tuple-free.

**§27 Games (Reactive)** — ❌
Pyret's `reactor: init: ..., on-key: ..., ... end` is **deferred in
Jayret** (no surface syntax). DCIC tags the five reactor blocks as
`` ```pyret-deferred `` so they render labelled "Pyret (deferred in
Jayret)" and link to the deferred-features registry.

**§29 Pyret vs Python** / **§30 HtDP vs DCIC** / **§32 Glossary** — N/A
Prose only.

### Summary

Of the ~30 Jayret-side DCIC chapters:
- **24 chapters run end-to-end on Jayret today** with no deferred
  features in their code.
- **4 chapters are partially impacted by tuples** (§8.2.4, §16.2,
  §26 in places) — a single deferred feature affects all three.
- **5 chapters depend on `ref` + `!`** for their core idea (§12.1,
  §12.4, §18.3, §19, §20) and partially in §21. These are not
  syntactically reachable from Jayret today.
- **§27** depends on `reactor:`.

The bottom line: **a DCIC fork using Jayret can render every chapter
and run every code block that doesn't touch tuples, `ref` fields, the
`!` mutation operator, or `reactor:`.** Of the four, the `ref`/`!`
pair is the most-cited blocker.

## Implementation phases

| # | Title | Commit |
|---|---|---|
| 1 | spec | `47cdbae51` |
| 2–4 | tokenizer + BNF grammar + parse-test harness | `90da9a0a4` |
| 5 | translator (.jrt → Pyret AST) + locator + 7 examples + unit tests | `a75b7b7d5` |
| 6 | end-to-end runtime test (compile + run + check) | `36047da7c` |
| — | rename source extension `.jarr` → `.jrt` (avoid clash with Pyret bundles) | `4e0b24f23` |
| 7 | multi-module Jayret programs (`provide *` default + `import as M` fix) + CI integration | `f22a246a8` |
| 8 | `spy(x, y, …)` debugging | `ee7ec1840` |
| 9 | `new ClassName(…)` constructor sugar | `411a327f4` |
| 10 | `ask { c → e; … otherwise → e; }` multi-branch conditional | `e93b0a7fa` |
| 11 | literal tables `table { headers; row: …; … }` | `d6f0944d0` |
| 12 | anonymous record / object literals `{key: val}` | `66c094985` |
| 13 | `rec` bindings (cyclic data) | `1a9ba645d` |
| — | port `test-lists.arr` + `test-binops.arr` from Pyret regression suite | `c180a613f` |
| 14 | `block { … }` expression form | `437969f67` |
| 15 | `for filter` / `for fold` / explicit-op comprehensions | `7c8ebbfc4` |
| 16a | `sieve` (table filter with column scope) | `9b3c599ba` |
| 16b | `order` / `extend` / `select` / `extract` column ops | `8ffc0476c` |
| 17 | `loadTable` builder API (CSV / Google Sheets external loading) | `d4b36e8c1` |

## Test suites

All three suites are exercised by `make jayret-test`.

| Suite | Specs | What it covers |
|---|---|---|
| `java-parse-test`    | **106** | BNF coverage — every grammar form has a positive test, several have negative tests |
| `java-translate-test` | **14** | Translator unit tests against a mock runtime — produces an `s-program` for each construct |
| `java-runtime-test`  | **21** | End-to-end: compile each `examples/jayret/*.jrt` and `examples/jayret/*/main.jrt` via phaseA and check the `@Check` runner reports `"Looks shipshape"` |

The end-to-end programs include `load-table-builder.jrt` (10
assertions exercising the loader-builder error paths and a CSV
happy path) and two direct ports of files from Pyret's own
`tests/pyret/tests/` regression suite (`pyret-test-lists.jrt`,
`pyret-test-binops.jrt`), so list ops, lambdas, records, and
arithmetic are tested against the same semantics the Pyret compiler
itself is tested against. In aggregate the runtime corpus contains
~150 `@Check` assertions.

Three runtime specs currently fail and are tracked as pre-existing
issues unrelated to language features:

- `checks.jrt` and `typed.jrt` — name-shadow conflicts against the
  auto-imported `image` module (`square`, `Point`); surfaced when
  `jrt-extra-imports` started auto-importing the image library for
  every `.jrt` file.
- `multi/main.jrt` — a module-naming mismatch in the multi-file
  fixture.

These do not affect the language features in the table above.

## Still deferred

| Feature | Pyret form | Notes |
|---|---|---|
| Tuples | `{a; b; c}` literals; `{a; b; c} = expr` binding | Used by DCIC §8.2.4, §16.2, §26. Workaround: small data variant or record `{a: …, b: …}`. |
| `ref` fields on data variants | `data D { D(ref x :: T) }` | Used by DCIC §12.1, §18.3, §19, §20, §21. Reachable through runtime; no Jayret surface syntax. |
| `!` field-mutation operator | `obj ! {field: newVal}` | Pair to `ref`; same chapters. |
| Reactors | `reactor: init: …, on-tick: … end` | Used by DCIC §27 (games). Tagged `pyret-deferred` in source. |
| `sharing:` methods on `data` | `data D: D() sharing: m(self): … end end` | Not used in DCIC. Method-style polymorphism on ADTs. |
| Refinement type annotations | `pred-ann` | Use dynamic `assertSatisfies` for now. |
| `provide` / `provide-types` granularity | `provide foo, bar end` | Top-level defs are implicitly `provide *`; finer control deferred. |
| Mid-loop / mid-block `return` | _(requires CPS)_ | Use `if`/`else`; see §14 Tier 3 of the spec. |
| `while` loops | _(not in Pyret either)_ | Use recursion or comprehensions. |
| C-style `for (int i = 0; i < n; i++)` | _(not in Pyret either)_ | Use `for map` / `for fold` or recursion. |

## Known issues

| Issue | Workaround / status |
|---|---|
| `expr is expr;` followed by a stmt that starts with unary `-` parses ambiguously (e.g. `1 + 1 is 2; 10 - 3 is 7;`) | Use `assertEquals(…, …);` or parenthesise the LHS of the next statement. The `pyret-test-binops.jrt` port demonstrates the workaround. |
| Image-library auto-import shadows user names (`checks.jrt:square`, `typed.jrt:Point`) | The `jrt-extra-imports` in `java-file.arr` brings image symbols into every `.jrt`. Pre-existing; affects user code that defines names colliding with `image` exports. |
| Bare `name = expr;` (no type annotation) is a parse error | Jayret requires `T name = expr;` or `var T name = expr;`. Pyret's annotation-free let is intentionally not surfaced. |
| The `.jarr` extension is also Pyret's compiled-bundle extension | Jayret sources use `.jrt`. Documented in the source rename commit. |
