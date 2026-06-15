# Jayret handoff

State of the project for a future session. Snapshot date: 2026-06-15.

## What Jayret is

Jayret (rhymes with Pyret) is a Java-flavored surface syntax that
compiles to the same Pyret AST and reuses Pyret's runtime unchanged.
It is a **hard fork** of brownplt/pyret-lang — upstream declined the
patches (issue #1871), so Jayret lives in its own org.

- File extension: `.jrt`
- Surface form: Java-style braces, semicolons, type-before-name
  declarations, `@Check` annotations.
- Underneath: untouched Pyret runtime + libraries + DCIC ecosystem.

## GitHub layout

Everything lives under the **`jayret-lang`** GitHub org.

| Repo | Role | Notes |
|---|---|---|
| `jayret-lang/jayret-lang` | Language source (compiler + grammar + translator + tests + docs) | Default branch `main`. Tag `jayret-v0.1.0`. |
| `jayret-lang/jayret-npm` | CLI (`jayret` command) | Publishes to npm as `jayret-npm`. |
| `jayret-lang/code` | In-browser playground (CPO fork) | Default branch `horizon` (inherited from upstream). Deploys to Pages at `jayret-lang.github.io/code/`. |
| `jayret-lang/jayret-parley-vscode` | VSCode extension | Default branch `main`. Publishes to Marketplace under publisher `ulysses4ever`. |
| `jayret-lang/jayret-lang.github.io` | Landing page (one static HTML page) | Default branch `main`. Pages root: `jayret-lang.github.io/`. |

## Local clones

| Path | Tracks | Default local branch |
|---|---|---|
| `/home/artem/Dev/pyret/pyret-lang` | `jayret-lang/jayret-lang` (via `fork` remote) | `jarett` (typo from the pre-rename name; remote tracks `main`) |
| `/home/artem/Dev/pyret/code.jayret.org` | `jayret-lang/code` | `horizon` |
| `/home/artem/Dev/pyret/jayret-npm` | `jayret-lang/jayret-npm` | `main` |
| `/home/artem/Dev/pyret/jayret-parley-vscode` | `jayret-lang/jayret-parley-vscode` | `main` |
| `/home/artem/Dev/pyret/jayret-lang-landing` | `jayret-lang/jayret-lang.github.io` | `main` |

Two local-dir names are intentionally **legacy**:

- `pyret-lang/` (the language source) is named after the upstream
  fork, not the current language name. Don't rename — the symlink
  chain in jayret-npm and jayret-parley-vscode depends on stable
  local paths.
- `code.jayret.org/` (the playground source) is named after a
  previous GitHub repo name. Same reason: leave alone.

## Published artefacts

| Surface | Where | Latest published |
|---|---|---|
| npm registry | https://www.npmjs.com/package/jayret-npm | `jayret-npm@0.1.1` (`jarret-npm@0.1.0` deprecated with pointer) |
| VSCode Marketplace | https://marketplace.visualstudio.com/items?itemName=ulysses4ever.jayret-parley | `0.1.2` last confirmed; 0.1.4 / 0.1.5 may be queued for upload — check `~/Dev/pyret/jayret-parley-vscode/*.vsix` for newest local VSIX |
| Landing page | https://jayret-lang.github.io/ | one static HTML page from `jayret-lang.github.io` repo |
| Playground | https://jayret-lang.github.io/code/ | CPO fork deployed by GitHub Action from `jayret-lang/code` |

## Architecture cheat-sheet

The whole Jayret stack is a thin patch layer over Pyret:

1. **Tokenizer + grammar + translator** live as JS modules in
   `pyret-lang/src/js/`:
   - `src/js/base/java-tokenizer.js`, `java-parser.js`,
     `java-grammar.bnf` / `java-grammar.js` (parser generated from the BNF).
   - `src/js/trove/parse-java.js` — the translator that produces a
     Pyret AST from the Jayret parse tree.

2. **Dispatch**: `.jrt` sources are routed through `parse-java`
   instead of `parse-pyret` via:
   - `pyret-lang/src/arr/compiler/cli-module-loader.arr` →
     `ends-with-jrt` checks the URI and picks `java-file-locator`.
   - `pyret-lang/src/arr/compiler/locators/java-file.arr` → calls
     `parse-java.surface-parse`.
   - `pyret-lang/src/arr/compiler/repl.arr` → `import parse-java as P`
     (patched specifically so the in-browser REPL and the
     code.jayret.org Run flow both go through parse-java; the CLI
     still routes via the locator).

3. **The Java surface name is intentional**: even after the
   `Jarret → Jayret` rename, every parser-side identifier kept the
   `java` prefix (`parse-java`, `java-tokenizer`, `java-parser`,
   `java-grammar`, `java-parse-test`, `java-translate-test`,
   `java-runtime-test`, `JavaGrammar`, etc.). They describe the
   *surface syntax flavour*, not the brand. Don't rename them.

4. **Build chain**:
   - `jayret-lang`: `make phaseA` produces `build/phaseA/pyret.jarr`,
     which is the standalone compiler bundle that includes
     `parse-java`. `make jayret-test` runs 105 + 14 + 20 specs.
   - `jayret-npm`: `npm run build` clones `jayret-lang` at the
     `jayret-v0.1.0` tag, runs `make phaseA libA`, ships the
     resulting `jayret-lang/build/phaseA/*` inside the npm tarball.
     The local working `jayret-lang/` is a symlink to
     `../pyret-lang` for dev convenience; before `npm publish` it
     must be replaced with a real directory because npm pack does
     not follow symlinks.
   - `code` (the playground): `npm install` pulls jayret-lang as a
     git dependency, `make link-pyret` symlinks
     `node_modules/pyret-lang/` into `pyret/`, then
     `make web-local` builds the CPO web bundle (40 MB
     `cpo-main.jarr.js`, plus assets totalling ~166 MB).
   - `jayret-parley-vscode`: `build/` is a symlink to
     `../code.jayret.org/build`; webpack's `CopyPlugin` copies it
     into `dist/web/build/`. `vsce package` rolls everything up
     into a ~19 MB VSIX.

5. **CPO-side patches** (in `jayret-lang/code`) that make the
   browser playground speak Jayret:
   - `src/web/js/cpo-main.js`, `cpo-ide-hooks.js`, `output-ui.js`:
     `"parse-pyret"` → `"parse-java"` in the requires lists.
   - `cpo-config.json`: `raw-js` map gets entries for
     `pyret-base/js/java-tokenizer` and `pyret-base/js/java-parser`
     so the standalone bundler inlines them.
   - `src/web/js/events.js` and `src/web/js/beforePyret.js`:
     `CONTEXT_FOR_NEW_FILES` no longer seeds editor buffers with
     `use context starter2024` (Jayret has no `use context` syntax;
     parse-java rejected it).
   - `img/pyret-logo.png` and `img/pyret-icon.png`: replaced with
     Jayret bluejay-pirate artwork (filenames kept to avoid
     touching every HTML / CSS reference).

## Naming history

The language was originally called **Jarret** (with the double-r),
renamed to **Jayret** on 2026-06-13:

- Rationale: rhymes with Pyret to signal lineage; avoids the awkward
  doubled consonant; still keeps the leading "J-" suggesting Java.
- All package names, repo names, identifiers, docs, comments, and
  example file headers were sed-converted from `Jarret`/`jarret` to
  `Jayret`/`jayret`.
- Five GitHub repos were renamed (`jarret-lang` → `jayret-lang`, etc.)
  and a sixth (`code.jarret.org` → `code.jayret.org` → finally just
  `code`) followed the same trail.
- The four canonical repos were then moved from `ulysses4ever/` to
  the new `jayret-lang/` GitHub org on 2026-06-14.
- The local branch in pyret-lang is still named `jarett` (literal
  spelling typo from the original "Jarret"). Pushes are mapped via
  refspec `jarett:main`. Don't rename the local branch without
  updating the push commands documented in the per-repo READMEs.

## Logo

The current logo is a bluejay pirate (red coat, blue body, Java
coffee-cup emblem on the hat, cutlass, peg-leg) using the Pyret
palette (`#EE1E10` red, `#0C46FF` blue, white). User-provided from
an AI image tool; lives in three places:

- `pyret-lang/img/pyret-logo.png` + `pyret-icon.png` (501x488 and
  32x32; filenames intentionally still "pyret-*" so all the inherited
  HTML/CSS references work)
- `jayret-parley-vscode/media/jayret-logo-128.png` (128x128, used as
  the extension icon and webview tab icon)
- `jayret-lang-landing/{logo.png,favicon.png}` (256x256 and 32x32)

## Open follow-ups (rough priority)

1. **Pages CDN/cache** sometimes lags after the playground rebuild.
   The most recent fix (`beforePyret.js` removing `use context` from
   `CONTEXT_FOR_NEW_FILES`) should be live by now; if the user
   reports seeing it again, the cause is browser cache (instruct
   hard-refresh) rather than a missed substitution.
2. **VSCode 0.1.5 marketplace upload** is queued — the VSIX is at
   `jayret-parley-vscode/jayret-parley-0.1.5.vsix`. If the user
   hasn't uploaded it yet, they need to do that manually via the
   Marketplace publisher UI (no API publish set up).
3. **`use context` as Jayret syntax** is unimplemented — programs
   that need a non-default Pyret context (essentials2024, dcic2024,
   etc.) currently have no way to opt in. Add a directive form to
   the grammar before any DCIC-Jayret work that depends on a
   specific context.
4. **DCIC fork** for a Jayret-flavoured textbook. The Programming
   Tools chapter on dcic-world.org talks specifically about CPO and
   the Pyret VSCode plugin — those references need to swap to
   `jayret-lang.github.io/code/` and `ulysses4ever.jayret-parley`.
   The user has not started this yet.
5. **Marketplace publisher rename** from `ulysses4ever` to a
   `jayret-lang` publisher (to match the GitHub org). One-shot:
   create new publisher in Marketplace UI, republish under it,
   deprecate the old. Not blocking anything.
6. **Tuples**, **Reactors**, **`load-table`** are the three
   deferred features per `jayret-status.md` and
   `jayret-vs-pyret-features.md`. Implementation order is open;
   `load-table` is most useful for DCIC.

## Known gotchas

- The `~/.npm-global/` prefix is set per-user so `npm install -g`
  works on this NixOS host without root. Future installs of
  `jayret-npm` should `PATH=~/.npm-global/bin:$PATH` to find the
  `jayret` binary.
- The CLI uses a long-lived **Parley compile server** (Pyret's
  bundled server mode). If a previous run leaves an orphan, kill
  with `pkill -9 -f "pyret.jarr"` and `rm -rf /tmp/parley-artem/`
  before retrying.
- npm packing for `jayret-npm`: the `jayret-lang/build/phaseA/*`
  files in `package.json#files` are not followed through a symlink;
  before publish, replace `jayret-npm/jayret-lang` (the symlink)
  with a real copy of the build, then restore the symlink afterward
  for dev convenience.
- The VSCode Marketplace caches aggressively; new versions
  occasionally take 30+ min to appear on the public listing even
  after they show as "Verified" on the publisher dashboard.
- Local `jayret-parley-vscode/build` is a relative symlink to
  `../code.jayret.org/build`. If `code.jayret.org/` is ever
  renamed locally, that symlink and the webpack copy step break.

## Reference docs

Three docs in `pyret-lang/docs/` cover everything relevant:

- `jayret-spec.md` — language reference (what the syntax is)
- `jayret-status.md` — implementation snapshot, phases, test suites
- `jayret-distribution.md` — where artefacts live, release process
- `jayret-vs-pyret-features.md` — feature parity vs pyret.org's
  "Major Features" list (14 ✅ / 6 ⚠️ / 3 ❌)
- `jayret-handoff.md` (this file)

The deployment plan that drove every release decision is in the
user's plans directory at
`~/.claude/plans/recursive-wibbling-river.md` and was followed
faithfully through Phase 4.
