/**
 * End-to-end runtime test for Jarret example programs.
 *
 * For each examples/jarret/*.jarr file:
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
  var base = path.basename(srcPath, '.jarr');
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
  var files = fs.readdirSync(EX_DIR).filter(function(f) { return f.endsWith('.jarr'); });

  files.forEach(function(fname) {
    it("runs " + fname + " and all @Check blocks pass", function() {
      var r = compileAndRun(path.join(EX_DIR, fname));
      if (r.compileFailed) {
        fail(fname + ": compile failed\n" + (r.stderr || r.stdout));
        return;
      }
      // The Pyret check-runner prints "Looks shipshape" when every test
      // in every check block passes.
      var ok = /Looks shipshape/.test(r.stdout);
      if (!ok) {
        fail(fname + ": tests did not all pass\n--stdout--\n" + r.stdout +
             "\n--stderr--\n" + r.stderr);
        return;
      }
      expect(ok).toBe(true);
    });
  });
});

jazz.execute();
