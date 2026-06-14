# Jayret distribution

This document captures where Jayret lives, how it is released, and how
the language reaches end users. It is the entry point for anyone
considering packaging, hosting, or shipping a downstream artefact based
on Jayret.

For the language itself, see [jayret-spec.md](./jayret-spec.md). For
implementation progress, see [jayret-status.md](./jayret-status.md).

## Why a separate fork?

Jayret is a Java-flavored surface syntax for Pyret, implemented as a
non-trivial patch on top of brownplt/pyret-lang. The upstream
maintainers declined to carry it (brownplt/pyret-lang#1871), so Jayret
maintains its own fork. The fork tracks upstream `horizon` so that
Pyret-side bug fixes and compiler improvements continue to flow in.

## Source of truth

- **Canonical repository**: https://github.com/ulysses4ever/jayret-lang
- **Default branch**: `main` (the historical `jarett` branch from the
  original fork point)
- **Upstream tracking branch**: `horizon-sync` — a long-lived branch
  that periodically rebases against `brownplt/pyret-lang:horizon` so
  upstream fixes can be cherry-picked or merged into `main`.

## Release process

Jayret tags are namespaced (`jayret-v0.1.0`, `jayret-v0.2.0`, …) to
avoid clashing with Pyret's own `v0.1` / `v0.5` tags inherited from
the fork history.

A release is a commit on `main` plus a signed annotated tag. The
release is meaningful only inasmuch as downstream artefacts pin
against it; see the next section.

To cut a release:

```
git tag -a jayret-v0.X.0 -m "Jayret v0.X.0: <one-line summary>"
git push origin jayret-v0.X.0
```

## Delivery surfaces (downstream consumers)

Jayret reaches users through artefacts published from this repo. None
of these surfaces currently exist; this list is the roadmap.

| Surface | Status | Consumer of this repo |
|---|---|---|
| `jayret-npm` CLI on npm | not yet built | bundles `build/phaseA/pyret.jarr` from a tagged release |
| Jayret VSCode extension | not yet built | shells out to `jayret-npm` |
| `code.jayret.org` web IDE | not yet built | hosts the phase-C browser bundle |

The compiler bundle `build/phaseA/pyret.jarr` (built via `make phaseA`)
already includes the Jayret translator — verified by
`make jayret-test`. Every downstream surface above is a thin packaging
layer over that bundle plus
`src/scripts/standalone-configA.json`.

Reference invocation (used by `tests/parse/java-runtime-test.js`):

```
node build/phaseA/pyret.jarr \
    --build-runnable foo.jrt \
    --outfile foo-out.js \
    --builtin-js-dir src/js/trove/ \
    --builtin-arr-dir src/arr/trove/ \
    --compiled-dir /tmp/jayret-cache/ \
    --require-config src/scripts/standalone-configA.json
node foo-out.js
```

The `--build-runnable foo.jrt` form is what dispatches to the Jayret
translator: `src/arr/compiler/cli-module-loader.arr` checks
`ends-with-jrt` and routes `.jrt` files to
`src/arr/compiler/locators/java-file.arr`, which calls
`src/js/trove/parse-java.js` to translate Jayret source into a Pyret
`s-program` AST. From there the normal Pyret compile pipeline takes
over.

## Syncing from upstream Pyret

Pyret-side improvements (compiler fixes, runtime additions, etc.) are
pulled in via the `horizon-sync` branch:

```
git fetch upstream                       # upstream = brownplt/pyret-lang
git checkout horizon-sync
git rebase upstream/horizon              # bring horizon-sync to upstream tip
# review the rebased commits, then merge selectively into main:
git checkout main
git merge horizon-sync                   # or cherry-pick individual commits
make jayret-test                         # confirm Jayret still compiles and runs
```

Cadence: re-sync at least once per Jayret release. If `parse-java.js`,
`cli-module-loader.arr`, or the locators conflict with upstream
changes, that's the signal that upstream has touched the same modules
Jayret patched, and the conflict resolution is the integration work.

## Pinning policy for downstream consumers

Downstream artefacts (npm package, VSCode extension, hosted IDE)
**must** pin to a Jayret release tag, never to `main`. The bundle
shipped with `jayret-v0.X.0` is the contract; `main` can change at any
time.

## Setup history

The fork was bootstrapped from the `jarett` branch of
brownplt/pyret-lang. The initial setup created the GitHub repository,
pushed `jarett` as the new `main` branch, set up `horizon-sync` to
track `brownplt/pyret-lang:horizon`, and tagged `jayret-v0.1.0`.

Recommended local remote configuration for contributors:

```
git clone https://github.com/ulysses4ever/jayret-lang.git
cd jayret-lang
git remote add upstream https://github.com/brownplt/pyret-lang.git
git fetch upstream
```

`upstream` is `brownplt/pyret-lang` (the parent project, used only for
pulling in compiler/runtime fixes via `horizon-sync`). `origin` is the
Jayret fork itself.
