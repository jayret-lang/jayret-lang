# Jayret

Jayret is a Java-flavored surface syntax for [Pyret](https://pyret.org).
It parses Java-style declarations and statements, translates them to
the Pyret AST, and reuses the full Pyret compiler and runtime
unchanged.

This repository is a fork of
[brownplt/pyret-lang](https://github.com/brownplt/pyret-lang) — the
underlying compiler is Pyret's. Jayret adds the `.jrt` source
extension, a tokenizer, a grammar, and a translator to the existing
Pyret pipeline.

## Documentation

- [docs/jayret-spec.md](./docs/jayret-spec.md) — language reference
- [docs/jayret-status.md](./docs/jayret-status.md) — implementation
  snapshot and DCIC compatibility
- [docs/jayret-distribution.md](./docs/jayret-distribution.md) — where
  Jayret lives, how it is released, and how it reaches users

## Build and test

Requires Node.js >= 6.

```
npm install
make
make jayret-test
```

`make` builds the Pyret compiler (which includes the Jayret
translator) into `build/phaseA/pyret.jarr`. `make jayret-test` runs
the three Jayret test suites (parse / translator / runtime — 105 + 14
+ 20 specs covering ~140 `@Check` assertions across the example
corpus).

## Running a Jayret program

```
node build/phaseA/pyret.jarr \
    --build-runnable examples/jayret/hello.jrt \
    --outfile /tmp/hello.js \
    --builtin-js-dir src/js/trove/ \
    --builtin-arr-dir src/arr/trove/ \
    --compiled-dir /tmp/jayret-cache/ \
    --require-config src/scripts/standalone-configA.json
node /tmp/hello.js
```

The `.jrt` extension triggers dispatch to the Jayret translator (see
[docs/jayret-distribution.md](./docs/jayret-distribution.md) for the
pipeline). Everything past parsing is the standard Pyret compile flow.

Example programs live in [`examples/jayret/`](./examples/jayret/).

## Pyret build phases

Because Jayret reuses Pyret's compiler, the same self-hosted phase 0 /
A / B / C build cycle applies. See the [upstream Pyret
README](https://github.com/brownplt/pyret-lang/blob/horizon/README.md)
for that workflow — nothing in it changes for Jayret.
