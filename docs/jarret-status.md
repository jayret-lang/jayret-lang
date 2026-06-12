# Jarret implementation status

A current-snapshot view of the Jarret implementation: what's built,
what's still deferred, and what works end-to-end. For language
reference, see [jarret-spec.md](./jarret-spec.md). For where Jarret
lives and how it is released, see
[jarret-distribution.md](./jarret-distribution.md).

## Compatibility with DCIC

A survey of [DCIC](https://dcic-world.org) (Data-Centric Introduction to
Computing) identified which Pyret features the book actually uses. Those
features are now all supported in Jarret; nothing in the textbook should
be syntactically out of reach.

| Pyret feature | DCIC use | Jarret support |
|---|---|---|
| Record literals `{key: val}` | 220+ occurrences across 8+ chapters | ✅ Phase 12 |
| `rec` bindings (cyclic data) | 3 files; graphs / cycle detection | ✅ Phase 13 |
| `block: … end` (expression-position sequencing) | 7 files | ✅ Phase 14 (`block { … }`) |
| `for filter` / `for fold` comprehensions | 16 files | ✅ Phase 15 |
| Table column ops (`sieve` / `order` / `extend` / `select` / `extract`) | tabular-data part | ✅ Phases 16a, 16b |
| Records, lists, lambdas, `data`, switch/case, @Check, imports, etc. | every chapter | ✅ baseline language |

The bottom line: **a DCIC fork using Jarret can translate every code
example in the book.** Stylistic choices (Pyret-style keyword forms vs.
Java-style method calls) remain for the author to make.

## Implementation phases

| # | Title | Commit |
|---|---|---|
| 1 | spec | `47cdbae51` |
| 2–4 | tokenizer + BNF grammar + parse-test harness | `90da9a0a4` |
| 5 | translator (.jrt → Pyret AST) + locator + 7 examples + unit tests | `a75b7b7d5` |
| 6 | end-to-end runtime test (compile + run + check) | `36047da7c` |
| — | rename source extension `.jarr` → `.jrt` (avoid clash with Pyret bundles) | `4e0b24f23` |
| 7 | multi-module Jarret programs (`provide *` default + `import as M` fix) + CI integration | `f22a246a8` |
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

## Test suites

All three pass under `make jarret-test` (also wired into `make test`).

| Suite | Specs | What it covers |
|---|---|---|
| `java-parse-test`  | **105** | BNF coverage — every grammar form has a positive test, several have negative tests |
| `java-translate-test` | **14** | Translator unit tests against a mock runtime — produces an `s-program` for each construct |
| `java-runtime-test` | **20** | End-to-end: compile each `examples/jarret/*.jrt` and `examples/jarret/*/main.jrt` via phaseA and check the `@Check` runner reports `"Looks shipshape"` |

The 20 end-to-end programs contain roughly **140 `@Check` assertions** in
aggregate, covering the language's expression forms, data declarations,
pattern matching, tables, comprehensions, multi-module imports, records,
recursion, and the `spy` debugger.

Two of the runtime programs (`pyret-test-lists.jrt`, `pyret-test-binops.jrt`)
are direct ports of files from Pyret's own `tests/pyret/tests/` regression
suite, so the translator's handling of list ops, lambdas, records, and
arithmetic is exercised against the same semantics the Pyret compiler
itself is tested against.

## Still deferred

These Pyret features remain unimplemented in Jarret. None of them appear
in DCIC's main exposition; they're listed for completeness.

| Feature | Pyret | Notes |
|---|---|---|
| `load-table` external loader | `load-table:` | Only the literal `table { … }` form is supported; loading from CSV / google sheet / disk is deferred |
| Reactors | `reactor:` | Domain-specific, used for interactive animations |
| `while` loops | _(not in Pyret either)_ | Use recursion |
| `sharing:` methods on data variants | `sharing:` | Polymorphic methods on ADTs |
| Refinement type annotations | `pred-ann` | Use dynamic checks for now |
| `provide` / `provide-types` granularity | `provide` | Top-level defs are implicitly `provide *`; finer control deferred |
| Mid-loop / mid-block `return` | _(requires CPS)_ | Use `if`/`else`; see §14 Tier 3 of the spec |

## Known issues

| Issue | Workaround |
|---|---|
| `expr is expr;` followed by a stmt that starts with unary `-` parses ambiguously (e.g. `1 + 1 is 2; 10 - 3 is 7;`) | Use `assertEquals(…, …);` instead of the `is` form, or parenthesise the LHS of the next statement. The `pyret-test-binops.jrt` port demonstrates the workaround. |
| The `.jarr` extension is also Pyret's compiled-bundle extension | Jarret sources use `.jrt`. Documented in the source rename commit. |
