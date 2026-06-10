const R = require('requirejs');
const fs = require('fs');
const path = require('path');
const build = process.env['PHASE'] || 'build/phaseA';
R.config({
  waitSeconds: 15000,
  paths: {
    'trove': '../../' + build + '/trove',
    'js': '../../' + build + '/js',
    'compiler': '../../' + build + '/arr/compiler',
    'jglr': '../../lib/jglr',
    'pyret-base': '../../' + build
  }
});
R(['pyret-base/js/java-tokenizer', 'pyret-base/js/java-parser'], function(T, G) {
  const examples = fs.readdirSync('../../examples/jarret').filter(f => f.endsWith('.jarr'));
  let pass = 0, fail = 0;
  examples.forEach(function(fname) {
    const src = fs.readFileSync('../../examples/jarret/' + fname, 'utf8');
    try {
      const toks = T.Tokenizer;
      toks.tokenizeFrom(src);
      const parsed = G.JavaGrammar.parse(toks);
      if (!parsed) { 
        console.error('FAIL (no parse):', fname); fail++; return;
      }
      const n = G.JavaGrammar.countAllParses(parsed);
      if (n === 1) {
        console.log('OK:', fname);
        pass++;
      } else {
        console.error('AMBIGUOUS (' + n + '):', fname);
        fail++;
      }
    } catch(e) { console.error('ERROR:', fname, e.message); fail++; }
  });
  console.log('\n' + pass + '/' + (pass+fail) + ' passed');
  process.exit(fail > 0 ? 1 : 0);
}, function(err) { console.error('load error:', err.message.slice(0,200)); process.exit(1); });
