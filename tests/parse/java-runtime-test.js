/**
 * End-to-end runtime test for Jarret example programs.
 *
 * For each examples/jarret/*.jrt file:
 *   1. Compile it via build/phaseA/pyret.jarr
 *   2. Run the compiled JS bundle with node
 *   3. Verify the output contains "Looks shipshape" (= all @Check tests passed)
 *
 * Run from the repo root: node tests/parse/java-runtime-test.js
 */
var Jasmine = require('jasmine');
var jazz = new Jasmine();
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var REPO = path.resolve(__dirname, '../..');
var PYRET = path.join(REPO, 'build/phaseA/pyret.jarr');
var EX_DIR = path.join(REPO, 'examples/jarret');
var BUILTIN_JS = path.join(REPO, 'src/js/trove/');
var BUILTIN_ARR = path.join(REPO, 'src/arr/trove/');
var COMPILED_DIR = path.join(REPO, 'tests/compiled/jarret/');
var OUT_DIR = path.join(REPO, 'tests/compiled/jarret-runnable/');
var CONFIG = path.join(REPO, 'src/scripts/standalone-configA.json');

if (!fs.existsSync(OUT_DIR))      fs.mkdirSync(OUT_DIR, { recursive: true });
if (!fs.existsSync(COMPILED_DIR)) fs.mkdirSync(COMPILED_DIR, { recursive: true });

function compileAndRun(srcPath) {
  // Disambiguate output filenames across subdirs (multi-module examples)
  // so e.g. examples/jarret/multi/main.jrt doesn't clobber a sibling main.
  var rel = path.relative(EX_DIR, srcPath);
  var base = rel.replace(/\.jrt$/, '').replace(/[\/\\]/g, '_');
  var outPath = path.join(OUT_DIR, base + '.js');
  var args = [
    '-max-old-space-size=8192', PYRET,
    '--build-runnable', srcPath,
    '--outfile', outPath,
    '--builtin-js-dir', BUILTIN_JS,
    '--builtin-arr-dir', BUILTIN_ARR,
    '--compiled-dir', COMPILED_DIR,
    '--require-config', CONFIG,
  ];
  var compile = child_process.spawnSync('node', args, { cwd: REPO, encoding: 'utf8' });
  if (compile.status !== 0) {
    return { compileFailed: true, stdout: compile.stdout, stderr: compile.stderr };
  }
  var run = child_process.spawnSync('node', [outPath], { cwd: REPO, encoding: 'utf8' });
  return { compileFailed: false, exit: run.status, stdout: run.stdout, stderr: run.stderr };
}

describe("Jarret end-to-end", function() {
  // Single-file examples: each *.jrt directly in examples/jarret/.
  var singles = fs.readdirSync(EX_DIR)
    .filter(function(f) { return f.endsWith('.jrt'); })
    .map(function(f) { return { label: f, src: path.join(EX_DIR, f) }; });

  // Multi-module examples: subdirectories of examples/jarret/, each with
  // a main.jrt entry point that imports siblings.
  var multis = fs.readdirSync(EX_DIR)
    .filter(function(d) { return fs.statSync(path.join(EX_DIR, d)).isDirectory(); })
    .map(function(d) {
      return { label: d + '/main.jrt', src: path.join(EX_DIR, d, 'main.jrt') };
    })
    .filter(function(e) { return fs.existsSync(e.src); });

  [].concat(singles, multis).forEach(function(e) {
    it("runs " + e.label + " and all @Check blocks pass", function() {
      var r = compileAndRun(e.src);
      if (r.compileFailed) {
        fail(e.label + ": compile failed\n" + (r.stderr || r.stdout));
        return;
      }
      // The Pyret check-runner prints "Looks shipshape" when every test
      // in every check block passes.
      var ok = /Looks shipshape/.test(r.stdout);
      if (!ok) {
        fail(e.label + ": tests did not all pass\n--stdout--\n" + r.stdout +
             "\n--stderr--\n" + r.stderr);
        return;
      }
      expect(ok).toBe(true);
    });
  });
});

jazz.execute();
