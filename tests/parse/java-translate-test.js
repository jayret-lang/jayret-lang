/**
 * Smoke test for the Jayret AST translator (parse-java.js).
 * Uses a lightweight mock runtime to verify the translator produces
 * s-program nodes without errors.
 */
var Jasmine = require('jasmine');
var jazz = new Jasmine();
const R = require("requirejs");
const build = process.env["PHASE"] || "build/phaseA";

R.config({
  waitSeconds: 15000,
  paths: { "jglr": "../../lib/jglr", "pyret-base": "../../" + build }
});

R(["pyret-base/js/java-tokenizer", "pyret-base/js/java-parser"], function(T, G) {
  var fs = require('fs');
  var path = require('path');

  // Node factory: wraps constructor calls for introspection
  function node(name) {
    return { app: function() { return { __name: name, __args: Array.from(arguments) }; } };
  }

  // Minimal mock runtime
  var RT = {
    makeString: function(s) { return s; },
    makeNumber: function(n) { return n; },
    makeBoolean: function(b) { return b; },
    makeNumberFromString: function(s) { return Number(s); },
    makeFunction: function(f, n) { return { __fn: f, __fname: n, app: f }; },
    makeModuleReturn: function(vals) { return { values: vals }; },
    checkString: function(s) { return s; },
    unwrap: function(x) { return x; },
    ffi: {
      makeNone: function() { return null; },
      makeSome: function(v) { return { some: v }; },
      toArray: function(s) { return [s]; },
      checkArity: function(n, args, name, isMethod) { /* no-op */ },
      throwParseErrorNextToken: function(p) { throw new Error("ParseError: " + JSON.stringify(p)); },
      makePyretPos: function(n, p) { return { pos: p }; },
      combinePyretPos: function(n, p1, p2) { return { pos: [p1, p2] }; },
    },
    getField: function(obj, field) {
      if (obj === RT._astValues)  return node(field);
      if (obj === RT._astLib)     return { values: RT._astValues };
      if (obj === RT._listsLib) {
        if (field === 'values') return RT._listsValues;
        if (field === 'link')   return { app: function(a,b){return {__name:'link',head:a,tail:b};} };
        if (field === 'empty')  return {__name:'empty'};
      }
      if (obj === RT._listsValues) {
        if (field === 'link')  return { app: function(a,b){return {__name:'link',head:a,tail:b};} };
        if (field === 'empty') return {__name:'empty'};
      }
      if (obj === RT._srclocLib) return {};
      // Generic: return a node factory for the field
      return node(field);
    },
    _astValues: { __type: 'astValues' },
    _astLib:    { __type: 'astLib' },
    _listsLib:  { __type: 'listsLib' },
    _listsValues: { __type: 'listsValues' },
    _srclocLib: { __type: 'srclocLib' },
  };
  RT.ffi.makePyretPos = function(n, p) { return { file: n, pos: p }; };
  RT.ffi.combinePyretPos = function(n, p1, p2) { return { file: n, pos: [p1, p2] }; };

  function runTranslator(src) {
    var srcText = fs.readFileSync(path.join(__dirname, '../../src/js/trove/parse-java.js'), 'utf8');
    var factory = eval('(' + srcText + ')');
    var mod = factory.theModule(RT, {}, "test", RT._srclocLib, RT._astLib, RT._listsLib, T, G);
    return mod.values["surface-parse"].app(src, "test.jrt");
  }

  describe("Jayret AST translator", function() {

    it("should translate a simple function", function() {
      var r = runTranslator('int sq(int n) { return n * n; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a data declaration", function() {
      var r = runTranslator('data Color { Red; Green; Blue; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a check block", function() {
      var r = runTranslator('@Check void test() { assertEquals(1 + 1, 2); }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a let binding", function() {
      var r = runTranslator('void f() { int x = 5; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate an import", function() {
      var r = runTranslator('import lists; void f() { }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a switch expression", function() {
      var r = runTranslator(
        'data Shape { Circle(double r); }' +
        'double area(Shape s) { return switch (s) { case Circle(r): yield r * r; }; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a lambda expression", function() {
      var r = runTranslator('void f() { var Number y = applyTwice(3, (int n) -> n * 2); }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a list literal", function() {
      var r = runTranslator('void f() { var List<Number> xs = [list: 1, 2, 3]; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a for-each statement", function() {
      var r = runTranslator('void f(List<Number> xs) { for (int x : xs) { print(x); } }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a map comprehension", function() {
      var r = runTranslator('void f() { var List<Number> doubled = [for (int n : xs) { yield n * 2; }]; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate guard-clause return lifting", function() {
      var r = runTranslator('int f(int n) { if (n < 0) { return -n; } return n; }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a function type annotation", function() {
      var r = runTranslator('int applyToFive(int n, (int -> int) f) { return f(n); }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate a where clause", function() {
      var r = runTranslator('int sq(int n) { return n * n; } where { assertEquals(sq(3), 9); }');
      expect(r.__name).toBe('s-program');
    });

    it("should translate all 7 example programs", function() {
      var exDir = path.join(__dirname, '../../examples/jayret');
      var files = fs.readdirSync(exDir).filter(function(f) { return f.endsWith('.jrt'); });
      files.forEach(function(fname) {
        var src = fs.readFileSync(path.join(exDir, fname), 'utf8');
        var result;
        try {
          result = runTranslator(src);
        } catch(e) {
          fail(fname + ": " + e.message + "\n" + e.stack);
          return;
        }
        expect(result.__name).toBe('s-program');
      });
    });

  });

  jazz.execute();
}, function(err) { console.error("Load error:", err); process.exit(1); });
