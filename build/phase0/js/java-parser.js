define('pyret-base/js/java-parser', ['jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "version": 1,
    "start": "START",
    "name": "JavaGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "rulesByOldId": {
      "0": {
        "name": "program",
        "symbols": [
          "@prelude",
          "@top-block"
        ]
      },
      "1": {
        "name": "prelude",
        "symbols": [
          "@prelude_I0*"
        ]
      },
      "2": {
        "name": "prelude_I0*",
        "symbols": []
      },
      "3": {
        "name": "prelude_I0*",
        "symbols": [
          "@prelude_I0*",
          "@prelude_I0"
        ]
      },
      "4": {
        "name": "prelude_I0",
        "symbols": [
          "@import-stmt"
        ]
      },
      "5": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'SEMI"
        ]
      },
      "6": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "7": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "8": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "9": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'SEMI"
        ]
      },
      "10": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "11": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "12": {
        "name": "top-block",
        "symbols": [
          "@top-block_I0*"
        ]
      },
      "13": {
        "name": "top-block_I0*",
        "symbols": []
      },
      "14": {
        "name": "top-block_I0*",
        "symbols": [
          "@top-block_I0*",
          "@top-block_I0"
        ]
      },
      "15": {
        "name": "top-block_I0",
        "symbols": [
          "@top-stmt"
        ]
      },
      "16": {
        "name": "top-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "17": {
        "name": "top-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "18": {
        "name": "top-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "19": {
        "name": "top-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "20": {
        "name": "top-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "21": {
        "name": "top-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "22": {
        "name": "top-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "23": {
        "name": "block",
        "symbols": [
          "'LBRACE",
          "@block_I1*",
          "'RBRACE"
        ]
      },
      "24": {
        "name": "block_I1*",
        "symbols": []
      },
      "25": {
        "name": "block_I1*",
        "symbols": [
          "@block_I1*",
          "@block_I1"
        ]
      },
      "26": {
        "name": "block_I1",
        "symbols": [
          "@block-stmt"
        ]
      },
      "27": {
        "name": "block-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "28": {
        "name": "block-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "29": {
        "name": "block-stmt",
        "symbols": [
          "@if-stmt"
        ]
      },
      "30": {
        "name": "block-stmt",
        "symbols": [
          "@for-stmt"
        ]
      },
      "31": {
        "name": "block-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "32": {
        "name": "block-stmt",
        "symbols": [
          "@return-stmt"
        ]
      },
      "33": {
        "name": "block-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "34": {
        "name": "block-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "35": {
        "name": "block-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "36": {
        "name": "block-stmt",
        "symbols": [
          "@yield-stmt"
        ]
      },
      "37": {
        "name": "block-stmt",
        "symbols": [
          "@spy-stmt"
        ]
      },
      "38": {
        "name": "block-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "39": {
        "name": "spy-stmt",
        "symbols": [
          "'SPY",
          "'PARENSPACE",
          "'NAME",
          "@spy-stmt_I3*",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "40": {
        "name": "spy-stmt_I3*",
        "symbols": []
      },
      "41": {
        "name": "spy-stmt_I3*",
        "symbols": [
          "@spy-stmt_I3*",
          "@spy-stmt_I3"
        ]
      },
      "42": {
        "name": "spy-stmt_I3",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "43": {
        "name": "fun-decl",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'PARENNOSPACE",
          "@fun-decl_I3?",
          "'RPAREN",
          "@block",
          "@fun-decl_I6?"
        ]
      },
      "44": {
        "name": "fun-decl_I3?",
        "symbols": []
      },
      "45": {
        "name": "fun-decl_I3?",
        "symbols": [
          "@fun-decl_I3"
        ]
      },
      "46": {
        "name": "fun-decl_I3",
        "symbols": [
          "@param",
          "@fun-decl_I3_I1*"
        ]
      },
      "47": {
        "name": "fun-decl_I3_I1*",
        "symbols": []
      },
      "48": {
        "name": "fun-decl_I3_I1*",
        "symbols": [
          "@fun-decl_I3_I1*",
          "@fun-decl_I3_I1"
        ]
      },
      "49": {
        "name": "fun-decl_I3_I1",
        "symbols": [
          "'COMMA",
          "@param"
        ]
      },
      "50": {
        "name": "fun-decl_I6?",
        "symbols": []
      },
      "51": {
        "name": "fun-decl_I6?",
        "symbols": [
          "@fun-decl_I6"
        ]
      },
      "52": {
        "name": "fun-decl_I6",
        "symbols": [
          "@where-clause"
        ]
      },
      "53": {
        "name": "param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "54": {
        "name": "where-clause",
        "symbols": [
          "'WHERE",
          "'LBRACE",
          "@where-clause_I2*",
          "'RBRACE"
        ]
      },
      "55": {
        "name": "where-clause_I2*",
        "symbols": []
      },
      "56": {
        "name": "where-clause_I2*",
        "symbols": [
          "@where-clause_I2*",
          "@where-clause_I2"
        ]
      },
      "57": {
        "name": "where-clause_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "58": {
        "name": "where-clause_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "59": {
        "name": "type-ann",
        "symbols": [
          "'INT"
        ]
      },
      "60": {
        "name": "type-ann",
        "symbols": [
          "'LONG"
        ]
      },
      "61": {
        "name": "type-ann",
        "symbols": [
          "'DOUBLE"
        ]
      },
      "62": {
        "name": "type-ann",
        "symbols": [
          "'FLOAT"
        ]
      },
      "63": {
        "name": "type-ann",
        "symbols": [
          "'BOOLEAN"
        ]
      },
      "64": {
        "name": "type-ann",
        "symbols": [
          "'VOID"
        ]
      },
      "65": {
        "name": "type-ann",
        "symbols": [
          "'NAME",
          "@type-ann_A6_I1?"
        ]
      },
      "66": {
        "name": "type-ann_A6_I1?",
        "symbols": []
      },
      "67": {
        "name": "type-ann_A6_I1?",
        "symbols": [
          "@type-ann_A6_I1"
        ]
      },
      "68": {
        "name": "type-ann_A6_I1",
        "symbols": [
          "'LT",
          "@type-ann",
          "@type-ann_A6_I1_I2*",
          "'GT"
        ]
      },
      "69": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": []
      },
      "70": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": [
          "@type-ann_A6_I1_I2*",
          "@type-ann_A6_I1_I2"
        ]
      },
      "71": {
        "name": "type-ann_A6_I1_I2",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "72": {
        "name": "type-ann",
        "symbols": [
          "'PARENSPACE",
          "@type-ann_A7_I1?",
          "'THINARROW",
          "@type-ann",
          "'RPAREN"
        ]
      },
      "73": {
        "name": "type-ann_A7_I1?",
        "symbols": []
      },
      "74": {
        "name": "type-ann_A7_I1?",
        "symbols": [
          "@type-ann_A7_I1"
        ]
      },
      "75": {
        "name": "type-ann_A7_I1",
        "symbols": [
          "@type-ann",
          "@type-ann_A7_I1_I1*"
        ]
      },
      "76": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": []
      },
      "77": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": [
          "@type-ann_A7_I1_I1*",
          "@type-ann_A7_I1_I1"
        ]
      },
      "78": {
        "name": "type-ann_A7_I1_I1",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "79": {
        "name": "data-decl",
        "symbols": [
          "'DATA",
          "'NAME",
          "'LBRACE",
          "@variant-decl",
          "@data-decl_I4*",
          "@data-decl_I5?",
          "'RBRACE"
        ]
      },
      "80": {
        "name": "data-decl_I4*",
        "symbols": []
      },
      "81": {
        "name": "data-decl_I4*",
        "symbols": [
          "@data-decl_I4*",
          "@data-decl_I4"
        ]
      },
      "82": {
        "name": "data-decl_I4",
        "symbols": [
          "'SEMI",
          "@variant-decl"
        ]
      },
      "83": {
        "name": "data-decl_I5?",
        "symbols": []
      },
      "84": {
        "name": "data-decl_I5?",
        "symbols": [
          "@data-decl_I5"
        ]
      },
      "85": {
        "name": "data-decl_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "86": {
        "name": "variant-decl",
        "symbols": [
          "'NAME",
          "'PARENNOSPACE",
          "@variant-decl_A0_I2?",
          "'RPAREN"
        ]
      },
      "87": {
        "name": "variant-decl_A0_I2?",
        "symbols": []
      },
      "88": {
        "name": "variant-decl_A0_I2?",
        "symbols": [
          "@variant-decl_A0_I2"
        ]
      },
      "89": {
        "name": "variant-decl_A0_I2",
        "symbols": [
          "@variant-member",
          "@variant-decl_A0_I2_I1*"
        ]
      },
      "90": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": []
      },
      "91": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": [
          "@variant-decl_A0_I2_I1*",
          "@variant-decl_A0_I2_I1"
        ]
      },
      "92": {
        "name": "variant-decl_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@variant-member"
        ]
      },
      "93": {
        "name": "variant-decl",
        "symbols": [
          "'NAME"
        ]
      },
      "94": {
        "name": "variant-member",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "95": {
        "name": "if-stmt",
        "symbols": [
          "'IF",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "@block",
          "@if-stmt_I5*",
          "@if-stmt_I6?"
        ]
      },
      "96": {
        "name": "if-stmt_I5*",
        "symbols": []
      },
      "97": {
        "name": "if-stmt_I5*",
        "symbols": [
          "@if-stmt_I5*",
          "@if-stmt_I5"
        ]
      },
      "98": {
        "name": "if-stmt_I5",
        "symbols": [
          "'ELSE",
          "'IF",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "@block"
        ]
      },
      "99": {
        "name": "if-stmt_I6?",
        "symbols": []
      },
      "100": {
        "name": "if-stmt_I6?",
        "symbols": [
          "@if-stmt_I6"
        ]
      },
      "101": {
        "name": "if-stmt_I6",
        "symbols": [
          "'ELSE",
          "@block"
        ]
      },
      "102": {
        "name": "for-stmt",
        "symbols": [
          "'FOR",
          "'PARENSPACE",
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr",
          "'RPAREN",
          "@block"
        ]
      },
      "103": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "@full-expr",
          "'SEMI"
        ]
      },
      "104": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "'SEMI"
        ]
      },
      "105": {
        "name": "let-stmt",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@let-stmt_I4?"
        ]
      },
      "106": {
        "name": "let-stmt_I4?",
        "symbols": []
      },
      "107": {
        "name": "let-stmt_I4?",
        "symbols": [
          "@let-stmt_I4"
        ]
      },
      "108": {
        "name": "let-stmt_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "109": {
        "name": "var-stmt",
        "symbols": [
          "'VAR",
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@var-stmt_I5?"
        ]
      },
      "110": {
        "name": "var-stmt_I5?",
        "symbols": []
      },
      "111": {
        "name": "var-stmt_I5?",
        "symbols": [
          "@var-stmt_I5"
        ]
      },
      "112": {
        "name": "var-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "113": {
        "name": "assign-stmt",
        "symbols": [
          "'NAME",
          "'COLONEQUALS",
          "@full-expr",
          "@assign-stmt_I3?"
        ]
      },
      "114": {
        "name": "assign-stmt_I3?",
        "symbols": []
      },
      "115": {
        "name": "assign-stmt_I3?",
        "symbols": [
          "@assign-stmt_I3"
        ]
      },
      "116": {
        "name": "assign-stmt_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "117": {
        "name": "expr-stmt",
        "symbols": [
          "@full-expr",
          "@expr-stmt_I1?"
        ]
      },
      "118": {
        "name": "expr-stmt_I1?",
        "symbols": []
      },
      "119": {
        "name": "expr-stmt_I1?",
        "symbols": [
          "@expr-stmt_I1"
        ]
      },
      "120": {
        "name": "expr-stmt_I1",
        "symbols": [
          "'SEMI"
        ]
      },
      "121": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'VOID",
          "'NAME",
          "'PARENNOSPACE",
          "'RPAREN",
          "'LBRACE",
          "@check-block_A0_I6*",
          "'RBRACE"
        ]
      },
      "122": {
        "name": "check-block_A0_I6*",
        "symbols": []
      },
      "123": {
        "name": "check-block_A0_I6*",
        "symbols": [
          "@check-block_A0_I6*",
          "@check-block_A0_I6"
        ]
      },
      "124": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "125": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "126": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'LBRACE",
          "@check-block_A1_I2*",
          "'RBRACE"
        ]
      },
      "127": {
        "name": "check-block_A1_I2*",
        "symbols": []
      },
      "128": {
        "name": "check-block_A1_I2*",
        "symbols": [
          "@check-block_A1_I2*",
          "@check-block_A1_I2"
        ]
      },
      "129": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "130": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "131": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTEQUALS",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A0_I6?"
        ]
      },
      "132": {
        "name": "assert-stmt_A0_I6?",
        "symbols": []
      },
      "133": {
        "name": "assert-stmt_A0_I6?",
        "symbols": [
          "@assert-stmt_A0_I6"
        ]
      },
      "134": {
        "name": "assert-stmt_A0_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "135": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTNOTEQUALS",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A1_I6?"
        ]
      },
      "136": {
        "name": "assert-stmt_A1_I6?",
        "symbols": []
      },
      "137": {
        "name": "assert-stmt_A1_I6?",
        "symbols": [
          "@assert-stmt_A1_I6"
        ]
      },
      "138": {
        "name": "assert-stmt_A1_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "139": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTTRUE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A2_I4?"
        ]
      },
      "140": {
        "name": "assert-stmt_A2_I4?",
        "symbols": []
      },
      "141": {
        "name": "assert-stmt_A2_I4?",
        "symbols": [
          "@assert-stmt_A2_I4"
        ]
      },
      "142": {
        "name": "assert-stmt_A2_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "143": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTFALSE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A3_I4?"
        ]
      },
      "144": {
        "name": "assert-stmt_A3_I4?",
        "symbols": []
      },
      "145": {
        "name": "assert-stmt_A3_I4?",
        "symbols": [
          "@assert-stmt_A3_I4"
        ]
      },
      "146": {
        "name": "assert-stmt_A3_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "147": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTSATISFIES",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A4_I6?"
        ]
      },
      "148": {
        "name": "assert-stmt_A4_I6?",
        "symbols": []
      },
      "149": {
        "name": "assert-stmt_A4_I6?",
        "symbols": [
          "@assert-stmt_A4_I6"
        ]
      },
      "150": {
        "name": "assert-stmt_A4_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "151": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTRAISES",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A5_I6?"
        ]
      },
      "152": {
        "name": "assert-stmt_A5_I6?",
        "symbols": []
      },
      "153": {
        "name": "assert-stmt_A5_I6?",
        "symbols": [
          "@assert-stmt_A5_I6"
        ]
      },
      "154": {
        "name": "assert-stmt_A5_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "155": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'IS",
          "@full-expr",
          "@assert-stmt_A6_I3?"
        ]
      },
      "156": {
        "name": "assert-stmt_A6_I3?",
        "symbols": []
      },
      "157": {
        "name": "assert-stmt_A6_I3?",
        "symbols": [
          "@assert-stmt_A6_I3"
        ]
      },
      "158": {
        "name": "assert-stmt_A6_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "159": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'ISNOT",
          "@full-expr",
          "@assert-stmt_A7_I3?"
        ]
      },
      "160": {
        "name": "assert-stmt_A7_I3?",
        "symbols": []
      },
      "161": {
        "name": "assert-stmt_A7_I3?",
        "symbols": [
          "@assert-stmt_A7_I3"
        ]
      },
      "162": {
        "name": "assert-stmt_A7_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "163": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'SATISFIES",
          "@full-expr",
          "@assert-stmt_A8_I3?"
        ]
      },
      "164": {
        "name": "assert-stmt_A8_I3?",
        "symbols": []
      },
      "165": {
        "name": "assert-stmt_A8_I3?",
        "symbols": [
          "@assert-stmt_A8_I3"
        ]
      },
      "166": {
        "name": "assert-stmt_A8_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "167": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'RAISES",
          "@full-expr",
          "@assert-stmt_A9_I3?"
        ]
      },
      "168": {
        "name": "assert-stmt_A9_I3?",
        "symbols": []
      },
      "169": {
        "name": "assert-stmt_A9_I3?",
        "symbols": [
          "@assert-stmt_A9_I3"
        ]
      },
      "170": {
        "name": "assert-stmt_A9_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "171": {
        "name": "switch-expr",
        "symbols": [
          "'SWITCH",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "'LBRACE",
          "@switch-expr_I5*",
          "@switch-expr_I6?",
          "'RBRACE"
        ]
      },
      "172": {
        "name": "switch-expr_I5*",
        "symbols": []
      },
      "173": {
        "name": "switch-expr_I5*",
        "symbols": [
          "@switch-expr_I5*",
          "@switch-expr_I5"
        ]
      },
      "174": {
        "name": "switch-expr_I5",
        "symbols": [
          "@case-branch"
        ]
      },
      "175": {
        "name": "switch-expr_I6?",
        "symbols": []
      },
      "176": {
        "name": "switch-expr_I6?",
        "symbols": [
          "@switch-expr_I6"
        ]
      },
      "177": {
        "name": "switch-expr_I6",
        "symbols": [
          "@default-branch"
        ]
      },
      "178": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'PARENNOSPACE",
          "@case-branch_A0_I3?",
          "'RPAREN",
          "'COLON",
          "@switch-body"
        ]
      },
      "179": {
        "name": "case-branch_A0_I3?",
        "symbols": []
      },
      "180": {
        "name": "case-branch_A0_I3?",
        "symbols": [
          "@case-branch_A0_I3"
        ]
      },
      "181": {
        "name": "case-branch_A0_I3",
        "symbols": [
          "'NAME",
          "@case-branch_A0_I3_I1*"
        ]
      },
      "182": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": []
      },
      "183": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": [
          "@case-branch_A0_I3_I1*",
          "@case-branch_A0_I3_I1"
        ]
      },
      "184": {
        "name": "case-branch_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "185": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'COLON",
          "@switch-body"
        ]
      },
      "186": {
        "name": "default-branch",
        "symbols": [
          "'DEFAULT",
          "'COLON",
          "@switch-body"
        ]
      },
      "187": {
        "name": "switch-body",
        "symbols": [
          "@switch-body_I0*",
          "@yield-stmt"
        ]
      },
      "188": {
        "name": "switch-body_I0*",
        "symbols": []
      },
      "189": {
        "name": "switch-body_I0*",
        "symbols": [
          "@switch-body_I0*",
          "@switch-body_I0"
        ]
      },
      "190": {
        "name": "switch-body_I0",
        "symbols": [
          "@block-stmt"
        ]
      },
      "191": {
        "name": "yield-stmt",
        "symbols": [
          "'YIELD",
          "@full-expr",
          "@yield-stmt_I2?"
        ]
      },
      "192": {
        "name": "yield-stmt_I2?",
        "symbols": []
      },
      "193": {
        "name": "yield-stmt_I2?",
        "symbols": [
          "@yield-stmt_I2"
        ]
      },
      "194": {
        "name": "yield-stmt_I2",
        "symbols": [
          "'SEMI"
        ]
      },
      "195": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENSPACE",
          "@lambda-expr_A0_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "196": {
        "name": "lambda-expr_A0_I1?",
        "symbols": []
      },
      "197": {
        "name": "lambda-expr_A0_I1?",
        "symbols": [
          "@lambda-expr_A0_I1"
        ]
      },
      "198": {
        "name": "lambda-expr_A0_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A0_I1_I1*"
        ]
      },
      "199": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": []
      },
      "200": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": [
          "@lambda-expr_A0_I1_I1*",
          "@lambda-expr_A0_I1_I1"
        ]
      },
      "201": {
        "name": "lambda-expr_A0_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "202": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENNOSPACE",
          "@lambda-expr_A1_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "203": {
        "name": "lambda-expr_A1_I1?",
        "symbols": []
      },
      "204": {
        "name": "lambda-expr_A1_I1?",
        "symbols": [
          "@lambda-expr_A1_I1"
        ]
      },
      "205": {
        "name": "lambda-expr_A1_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A1_I1_I1*"
        ]
      },
      "206": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": []
      },
      "207": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": [
          "@lambda-expr_A1_I1_I1*",
          "@lambda-expr_A1_I1_I1"
        ]
      },
      "208": {
        "name": "lambda-expr_A1_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "209": {
        "name": "lambda-param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "210": {
        "name": "lambda-param",
        "symbols": [
          "'NAME"
        ]
      },
      "211": {
        "name": "full-expr",
        "symbols": [
          "@lambda-expr"
        ]
      },
      "212": {
        "name": "full-expr",
        "symbols": [
          "@binop-expr"
        ]
      },
      "213": {
        "name": "binop-expr",
        "symbols": [
          "@unop-expr",
          "@binop-expr_I1*"
        ]
      },
      "214": {
        "name": "binop-expr_I1*",
        "symbols": []
      },
      "215": {
        "name": "binop-expr_I1*",
        "symbols": [
          "@binop-expr_I1*",
          "@binop-expr_I1"
        ]
      },
      "216": {
        "name": "binop-expr_I1",
        "symbols": [
          "@binop",
          "@unop-expr"
        ]
      },
      "217": {
        "name": "binop",
        "symbols": [
          "'PLUS"
        ]
      },
      "218": {
        "name": "binop",
        "symbols": [
          "'DASH"
        ]
      },
      "219": {
        "name": "binop",
        "symbols": [
          "'TIMES"
        ]
      },
      "220": {
        "name": "binop",
        "symbols": [
          "'SLASH"
        ]
      },
      "221": {
        "name": "binop",
        "symbols": [
          "'PERCENT"
        ]
      },
      "222": {
        "name": "binop",
        "symbols": [
          "'EQUALEQUAL"
        ]
      },
      "223": {
        "name": "binop",
        "symbols": [
          "'NEQ"
        ]
      },
      "224": {
        "name": "binop",
        "symbols": [
          "'LEQ"
        ]
      },
      "225": {
        "name": "binop",
        "symbols": [
          "'GEQ"
        ]
      },
      "226": {
        "name": "binop",
        "symbols": [
          "'LT"
        ]
      },
      "227": {
        "name": "binop",
        "symbols": [
          "'GT"
        ]
      },
      "228": {
        "name": "binop",
        "symbols": [
          "'AND"
        ]
      },
      "229": {
        "name": "binop",
        "symbols": [
          "'OR"
        ]
      },
      "230": {
        "name": "unop-expr",
        "symbols": [
          "'BANG",
          "@unop-expr"
        ]
      },
      "231": {
        "name": "unop-expr",
        "symbols": [
          "'DASH",
          "@unop-expr"
        ]
      },
      "232": {
        "name": "unop-expr",
        "symbols": [
          "@app-or-access"
        ]
      },
      "233": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'PARENNOSPACE",
          "@app-or-access_A0_I2?",
          "'RPAREN"
        ]
      },
      "234": {
        "name": "app-or-access_A0_I2?",
        "symbols": []
      },
      "235": {
        "name": "app-or-access_A0_I2?",
        "symbols": [
          "@app-or-access_A0_I2"
        ]
      },
      "236": {
        "name": "app-or-access_A0_I2",
        "symbols": [
          "@full-expr",
          "@app-or-access_A0_I2_I1*"
        ]
      },
      "237": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": []
      },
      "238": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": [
          "@app-or-access_A0_I2_I1*",
          "@app-or-access_A0_I2_I1"
        ]
      },
      "239": {
        "name": "app-or-access_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "240": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'DOT",
          "'NAME"
        ]
      },
      "241": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'LBRACK",
          "@binop-expr",
          "'RBRACK"
        ]
      },
      "242": {
        "name": "app-or-access",
        "symbols": [
          "@prim-expr"
        ]
      },
      "243": {
        "name": "prim-expr",
        "symbols": [
          "'NUMBER"
        ]
      },
      "244": {
        "name": "prim-expr",
        "symbols": [
          "'STRING"
        ]
      },
      "245": {
        "name": "prim-expr",
        "symbols": [
          "'TRUE"
        ]
      },
      "246": {
        "name": "prim-expr",
        "symbols": [
          "'FALSE"
        ]
      },
      "247": {
        "name": "prim-expr",
        "symbols": [
          "'NULL"
        ]
      },
      "248": {
        "name": "prim-expr",
        "symbols": [
          "'NAME"
        ]
      },
      "249": {
        "name": "prim-expr",
        "symbols": [
          "'PARENSPACE",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "250": {
        "name": "prim-expr",
        "symbols": [
          "'PARENAFTERBRACE",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "251": {
        "name": "prim-expr",
        "symbols": [
          "@switch-expr"
        ]
      },
      "252": {
        "name": "prim-expr",
        "symbols": [
          "@construct-expr"
        ]
      },
      "253": {
        "name": "prim-expr",
        "symbols": [
          "@map-for-expr"
        ]
      },
      "254": {
        "name": "prim-expr",
        "symbols": [
          "@new-expr"
        ]
      },
      "255": {
        "name": "prim-expr",
        "symbols": [
          "@ask-expr"
        ]
      },
      "256": {
        "name": "ask-expr",
        "symbols": [
          "'ASK",
          "'LBRACE",
          "@ask-branch",
          "'SEMI",
          "@ask-expr_A0_I4*",
          "'RBRACE"
        ]
      },
      "257": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "258": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "259": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "260": {
        "name": "ask-expr",
        "symbols": [
          "'ASK",
          "'LBRACE",
          "@ask-branch",
          "'SEMI",
          "@ask-expr_A1_I4*",
          "@otherwise-branch",
          "'SEMI",
          "'RBRACE"
        ]
      },
      "261": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "262": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "263": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "264": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "265": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "266": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "267": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "268": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "269": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "270": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "271": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "272": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "273": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "274": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "275": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "276": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "277": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "278": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "279": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "280": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "281": {
        "name": "map-for-expr",
        "symbols": [
          "'LBRACK",
          "'FOR",
          "'PARENSPACE",
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr",
          "'RPAREN",
          "@block",
          "'RBRACK"
        ]
      },
      "282": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "366": {
        "position": 1,
        "like": 0
      },
      "419": {
        "position": 1,
        "like": 1
      },
      "689": {
        "position": 2,
        "like": 0
      },
      "691": {
        "position": 1,
        "like": 12
      },
      "2307": {
        "position": 2,
        "like": 3
      },
      "2335": {
        "position": 1,
        "like": 4
      },
      "2560": {
        "position": 1,
        "like": 65
      },
      "2561": {
        "position": 1,
        "like": 248
      },
      "2664": {
        "position": 1,
        "like": 244
      },
      "2704": {
        "position": 2,
        "like": 14
      },
      "2730": {
        "position": 1,
        "like": 15
      },
      "2756": {
        "position": 1,
        "like": 16
      },
      "2782": {
        "position": 1,
        "like": 17
      },
      "2808": {
        "position": 1,
        "like": 18
      },
      "2834": {
        "position": 1,
        "like": 19
      },
      "2860": {
        "position": 1,
        "like": 20
      },
      "2886": {
        "position": 1,
        "like": 21
      },
      "2912": {
        "position": 1,
        "like": 22
      },
      "3109": {
        "position": 1,
        "like": 59
      },
      "3111": {
        "position": 1,
        "like": 60
      },
      "3113": {
        "position": 1,
        "like": 61
      },
      "3115": {
        "position": 1,
        "like": 62
      },
      "3117": {
        "position": 1,
        "like": 63
      },
      "3119": {
        "position": 1,
        "like": 64
      },
      "3147": {
        "position": 1,
        "like": 117
      },
      "3326": {
        "position": 1,
        "like": 251
      },
      "3406": {
        "position": 1,
        "like": 211
      },
      "3433": {
        "position": 1,
        "like": 212
      },
      "3460": {
        "position": 1,
        "like": 213
      },
      "3641": {
        "position": 1,
        "like": 232
      },
      "3920": {
        "position": 1,
        "like": 242
      },
      "3960": {
        "position": 1,
        "like": 243
      },
      "4000": {
        "position": 1,
        "like": 245
      },
      "4040": {
        "position": 1,
        "like": 246
      },
      "4080": {
        "position": 1,
        "like": 247
      },
      "4160": {
        "position": 1,
        "like": 252
      },
      "4200": {
        "position": 1,
        "like": 253
      },
      "4240": {
        "position": 1,
        "like": 254
      },
      "4280": {
        "position": 1,
        "like": 255
      },
      "4636": {
        "position": 2,
        "like": 65
      },
      "4638": {
        "position": 1,
        "like": 67
      },
      "4676": {
        "position": 1,
        "like": 210
      },
      "4682": {
        "position": 1,
        "like": 205
      },
      "4715": {
        "position": 1,
        "like": 204
      },
      "4730": {
        "position": 1,
        "like": 75
      },
      "4750": {
        "position": 1,
        "like": 74
      },
      "4781": {
        "position": 1,
        "like": 197
      },
      "4783": {
        "position": 1,
        "like": 198
      },
      "4932": {
        "position": 1,
        "like": 120
      },
      "4958": {
        "position": 2,
        "like": 117
      },
      "4984": {
        "position": 1,
        "like": 119
      },
      "5204": {
        "position": 2,
        "like": 213
      },
      "5490": {
        "position": 2,
        "like": 231
      },
      "5529": {
        "position": 2,
        "like": 230
      },
      "5831": {
        "position": 2,
        "like": 280
      },
      "6060": {
        "position": 3,
        "like": 5
      },
      "6172": {
        "position": 3,
        "like": 9
      },
      "6273": {
        "position": 3,
        "like": 113
      },
      "6374": {
        "position": 2,
        "like": 209
      },
      "6377": {
        "position": 2,
        "like": 205
      },
      "6420": {
        "position": 2,
        "like": 75
      },
      "6464": {
        "position": 2,
        "like": 198
      },
      "6471": {
        "position": 3,
        "like": 249
      },
      "8445": {
        "position": 1,
        "like": 226
      },
      "8460": {
        "position": 1,
        "like": 227
      },
      "8475": {
        "position": 2,
        "like": 215
      },
      "8553": {
        "position": 1,
        "like": 217
      },
      "8568": {
        "position": 1,
        "like": 218
      },
      "8583": {
        "position": 1,
        "like": 219
      },
      "8598": {
        "position": 1,
        "like": 220
      },
      "8613": {
        "position": 1,
        "like": 221
      },
      "8628": {
        "position": 1,
        "like": 222
      },
      "8643": {
        "position": 1,
        "like": 223
      },
      "8658": {
        "position": 1,
        "like": 224
      },
      "8673": {
        "position": 1,
        "like": 225
      },
      "8688": {
        "position": 1,
        "like": 228
      },
      "8703": {
        "position": 1,
        "like": 229
      },
      "8723": {
        "position": 1,
        "like": 236
      },
      "8782": {
        "position": 1,
        "like": 235
      },
      "8800": {
        "position": 3,
        "like": 240
      },
      "8997": {
        "position": 3,
        "like": 250
      },
      "9339": {
        "position": 1,
        "like": 116
      },
      "9365": {
        "position": 4,
        "like": 113
      },
      "9391": {
        "position": 1,
        "like": 115
      },
      "9420": {
        "position": 2,
        "like": 207
      },
      "9453": {
        "position": 2,
        "like": 77
      },
      "9499": {
        "position": 2,
        "like": 200
      },
      "9531": {
        "position": 1,
        "like": 45
      },
      "9533": {
        "position": 1,
        "like": 46
      },
      "9539": {
        "position": 4,
        "like": 105
      },
      "9641": {
        "position": 1,
        "like": 93
      },
      "9762": {
        "position": 1,
        "like": 27
      },
      "9799": {
        "position": 1,
        "like": 28
      },
      "9836": {
        "position": 1,
        "like": 31
      },
      "9873": {
        "position": 1,
        "like": 33
      },
      "9910": {
        "position": 1,
        "like": 34
      },
      "9947": {
        "position": 1,
        "like": 35
      },
      "9984": {
        "position": 1,
        "like": 38
      },
      "10021": {
        "position": 4,
        "like": 126
      },
      "10047": {
        "position": 1,
        "like": 129
      },
      "10084": {
        "position": 1,
        "like": 29
      },
      "10121": {
        "position": 1,
        "like": 30
      },
      "10158": {
        "position": 1,
        "like": 32
      },
      "10195": {
        "position": 1,
        "like": 36
      },
      "10232": {
        "position": 1,
        "like": 37
      },
      "10362": {
        "position": 1,
        "like": 130
      },
      "10791": {
        "position": 2,
        "like": 128
      },
      "11617": {
        "position": 2,
        "like": 216
      },
      "11656": {
        "position": 2,
        "like": 236
      },
      "11663": {
        "position": 4,
        "like": 233
      },
      "11703": {
        "position": 4,
        "like": 241
      },
      "11745": {
        "position": 1,
        "like": 276
      },
      "11793": {
        "position": 1,
        "like": 275
      },
      "11977": {
        "position": 1,
        "like": 269
      },
      "12023": {
        "position": 1,
        "like": 268
      },
      "12025": {
        "position": 5,
        "like": 6
      },
      "12109": {
        "position": 5,
        "like": 10
      },
      "12168": {
        "position": 4,
        "like": 68
      },
      "12170": {
        "position": 2,
        "like": 70
      },
      "12173": {
        "position": 2,
        "like": 208
      },
      "12176": {
        "position": 5,
        "like": 202
      },
      "12203": {
        "position": 2,
        "like": 78
      },
      "12206": {
        "position": 5,
        "like": 72
      },
      "12208": {
        "position": 5,
        "like": 195
      },
      "12235": {
        "position": 2,
        "like": 201
      },
      "12238": {
        "position": 2,
        "like": 53
      },
      "12293": {
        "position": 2,
        "like": 46
      },
      "12300": {
        "position": 1,
        "like": 108
      },
      "12326": {
        "position": 5,
        "like": 105
      },
      "12352": {
        "position": 1,
        "like": 107
      },
      "12420": {
        "position": 5,
        "like": 109
      },
      "12816": {
        "position": 2,
        "like": 104
      },
      "13112": {
        "position": 2,
        "like": 191
      },
      "13332": {
        "position": 2,
        "like": 238
      },
      "13335": {
        "position": 2,
        "like": 276
      },
      "13342": {
        "position": 5,
        "like": 273
      },
      "13422": {
        "position": 3,
        "like": 264
      },
      "13567": {
        "position": 2,
        "like": 269
      },
      "13574": {
        "position": 5,
        "like": 266
      },
      "13614": {
        "position": 6,
        "like": 7
      },
      "13670": {
        "position": 6,
        "like": 11
      },
      "13698": {
        "position": 2,
        "like": 71
      },
      "13701": {
        "position": 6,
        "like": 43
      },
      "13917": {
        "position": 2,
        "like": 48
      },
      "13926": {
        "position": 1,
        "like": 88
      },
      "13928": {
        "position": 1,
        "like": 89
      },
      "13935": {
        "position": 1,
        "like": 85
      },
      "13965": {
        "position": 2,
        "like": 81
      },
      "13968": {
        "position": 1,
        "like": 84
      },
      "13970": {
        "position": 1,
        "like": 112
      },
      "13996": {
        "position": 6,
        "like": 109
      },
      "14022": {
        "position": 1,
        "like": 111
      },
      "14126": {
        "position": 3,
        "like": 155
      },
      "14271": {
        "position": 3,
        "like": 159
      },
      "14416": {
        "position": 3,
        "like": 163
      },
      "14561": {
        "position": 3,
        "like": 167
      },
      "14743": {
        "position": 3,
        "like": 103
      },
      "15002": {
        "position": 1,
        "like": 194
      },
      "15039": {
        "position": 3,
        "like": 191
      },
      "15076": {
        "position": 1,
        "like": 193
      },
      "15268": {
        "position": 2,
        "like": 239
      },
      "15274": {
        "position": 2,
        "like": 278
      },
      "15317": {
        "position": 6,
        "like": 256
      },
      "15373": {
        "position": 2,
        "like": 258
      },
      "15445": {
        "position": 2,
        "like": 262
      },
      "15466": {
        "position": 2,
        "like": 271
      },
      "15497": {
        "position": 7,
        "like": 43
      },
      "15523": {
        "position": 1,
        "like": 51
      },
      "15549": {
        "position": 1,
        "like": 52
      },
      "15689": {
        "position": 2,
        "like": 49
      },
      "15692": {
        "position": 2,
        "like": 94
      },
      "15695": {
        "position": 4,
        "like": 86
      },
      "15698": {
        "position": 2,
        "like": 89
      },
      "15705": {
        "position": 2,
        "like": 82
      },
      "15708": {
        "position": 7,
        "like": 79
      },
      "15826": {
        "position": 1,
        "like": 158
      },
      "15863": {
        "position": 4,
        "like": 155
      },
      "15900": {
        "position": 1,
        "like": 157
      },
      "15937": {
        "position": 1,
        "like": 162
      },
      "15974": {
        "position": 4,
        "like": 159
      },
      "16011": {
        "position": 1,
        "like": 161
      },
      "16048": {
        "position": 1,
        "like": 166
      },
      "16085": {
        "position": 4,
        "like": 163
      },
      "16122": {
        "position": 1,
        "like": 165
      },
      "16159": {
        "position": 1,
        "like": 170
      },
      "16196": {
        "position": 4,
        "like": 167
      },
      "16233": {
        "position": 1,
        "like": 169
      },
      "16381": {
        "position": 4,
        "like": 139
      },
      "16526": {
        "position": 4,
        "like": 143
      },
      "16920": {
        "position": 2,
        "like": 173
      },
      "16924": {
        "position": 1,
        "like": 174
      },
      "16928": {
        "position": 1,
        "like": 176
      },
      "16930": {
        "position": 1,
        "like": 177
      },
      "16942": {
        "position": 2,
        "like": 279
      },
      "16985": {
        "position": 2,
        "like": 259
      },
      "17001": {
        "position": 2,
        "like": 263
      },
      "17059": {
        "position": 2,
        "like": 272
      },
      "17062": {
        "position": 8,
        "like": 8
      },
      "17188": {
        "position": 3,
        "like": 23
      },
      "17215": {
        "position": 2,
        "like": 25
      },
      "17246": {
        "position": 1,
        "like": 26
      },
      "17280": {
        "position": 2,
        "like": 91
      },
      "17320": {
        "position": 2,
        "like": 41
      },
      "17326": {
        "position": 5,
        "like": 95
      },
      "17561": {
        "position": 1,
        "like": 142
      },
      "17598": {
        "position": 5,
        "like": 139
      },
      "17635": {
        "position": 1,
        "like": 141
      },
      "17672": {
        "position": 1,
        "like": 146
      },
      "17709": {
        "position": 5,
        "like": 143
      },
      "17746": {
        "position": 1,
        "like": 145
      },
      "17857": {
        "position": 8,
        "like": 121
      },
      "17883": {
        "position": 1,
        "like": 124
      },
      "17920": {
        "position": 1,
        "like": 125
      },
      "17957": {
        "position": 2,
        "like": 123
      },
      "17994": {
        "position": 8,
        "like": 171
      },
      "18144": {
        "position": 8,
        "like": 260
      },
      "18184": {
        "position": 3,
        "like": 265
      },
      "18321": {
        "position": 2,
        "like": 92
      },
      "18324": {
        "position": 6,
        "like": 39
      },
      "18361": {
        "position": 2,
        "like": 42
      },
      "18364": {
        "position": 6,
        "like": 95
      },
      "18621": {
        "position": 6,
        "like": 131
      },
      "18766": {
        "position": 6,
        "like": 135
      },
      "18911": {
        "position": 6,
        "like": 147
      },
      "19056": {
        "position": 6,
        "like": 151
      },
      "19214": {
        "position": 3,
        "like": 186
      },
      "19318": {
        "position": 4,
        "like": 54
      },
      "19344": {
        "position": 1,
        "like": 57
      },
      "19381": {
        "position": 2,
        "like": 56
      },
      "19418": {
        "position": 1,
        "like": 58
      },
      "19455": {
        "position": 7,
        "like": 95
      },
      "19492": {
        "position": 2,
        "like": 97
      },
      "19605": {
        "position": 1,
        "like": 100
      },
      "19679": {
        "position": 1,
        "like": 134
      },
      "19716": {
        "position": 7,
        "like": 131
      },
      "19753": {
        "position": 1,
        "like": 133
      },
      "19790": {
        "position": 1,
        "like": 138
      },
      "19827": {
        "position": 7,
        "like": 135
      },
      "19864": {
        "position": 1,
        "like": 137
      },
      "19901": {
        "position": 1,
        "like": 150
      },
      "19938": {
        "position": 7,
        "like": 147
      },
      "19975": {
        "position": 1,
        "like": 149
      },
      "20012": {
        "position": 1,
        "like": 154
      },
      "20049": {
        "position": 7,
        "like": 151
      },
      "20086": {
        "position": 1,
        "like": 153
      },
      "20123": {
        "position": 1,
        "like": 181
      },
      "20133": {
        "position": 1,
        "like": 180
      },
      "20135": {
        "position": 4,
        "like": 185
      },
      "20143": {
        "position": 1,
        "like": 190
      },
      "20173": {
        "position": 2,
        "like": 187
      },
      "20175": {
        "position": 2,
        "like": 189
      },
      "20205": {
        "position": 10,
        "like": 281
      },
      "20245": {
        "position": 2,
        "like": 101
      },
      "20320": {
        "position": 8,
        "like": 102
      },
      "20357": {
        "position": 2,
        "like": 181
      },
      "20409": {
        "position": 2,
        "like": 183
      },
      "20454": {
        "position": 2,
        "like": 184
      },
      "20457": {
        "position": 7,
        "like": 178
      },
      "20499": {
        "position": 6,
        "like": 98
      }
    },
    "actionsByOldId": {
      "0": "dA",
      "1": "dA",
      "2": "Inline",
      "3": [
        "ListSnoc",
        "prelude_I0*",
        "prelude_I0",
        true
      ],
      "4": "Inline",
      "5": "dA",
      "6": "dA",
      "7": "dA",
      "8": "dA",
      "9": "dA",
      "10": "dA",
      "11": "dA",
      "12": "dA",
      "13": "Inline",
      "14": [
        "ListSnoc",
        "top-block_I0*",
        "top-block_I0",
        true
      ],
      "15": "Inline",
      "16": "dA",
      "17": "dA",
      "18": "dA",
      "19": "dA",
      "20": "dA",
      "21": "dA",
      "22": "dA",
      "23": "dA",
      "24": "Inline",
      "25": [
        "ListSnoc",
        "block_I1*",
        "block_I1",
        true
      ],
      "26": "Inline",
      "27": "dA",
      "28": "dA",
      "29": "dA",
      "30": "dA",
      "31": "dA",
      "32": "dA",
      "33": "dA",
      "34": "dA",
      "35": "dA",
      "36": "dA",
      "37": "dA",
      "38": "dA",
      "39": "dA",
      "40": "Inline",
      "41": [
        "ListSnoc",
        "spy-stmt_I3*",
        "spy-stmt_I3",
        true
      ],
      "42": "Inline",
      "43": "dA",
      "44": "Inline",
      "45": "Inline",
      "46": "Inline",
      "47": "Inline",
      "48": [
        "ListSnoc",
        "fun-decl_I3_I1*",
        "fun-decl_I3_I1",
        true
      ],
      "49": "Inline",
      "50": "Inline",
      "51": "Inline",
      "52": "Inline",
      "53": "dA",
      "54": "dA",
      "55": "Inline",
      "56": [
        "ListSnoc",
        "where-clause_I2*",
        "where-clause_I2",
        true
      ],
      "57": "Inline",
      "58": "Inline",
      "59": "dA",
      "60": "dA",
      "61": "dA",
      "62": "dA",
      "63": "dA",
      "64": "dA",
      "65": "dA",
      "66": "Inline",
      "67": "Inline",
      "68": "Inline",
      "69": "Inline",
      "70": [
        "ListSnoc",
        "type-ann_A6_I1_I2*",
        "type-ann_A6_I1_I2",
        true
      ],
      "71": "Inline",
      "72": "dA",
      "73": "Inline",
      "74": "Inline",
      "75": "Inline",
      "76": "Inline",
      "77": [
        "ListSnoc",
        "type-ann_A7_I1_I1*",
        "type-ann_A7_I1_I1",
        true
      ],
      "78": "Inline",
      "79": "dA",
      "80": "Inline",
      "81": [
        "ListSnoc",
        "data-decl_I4*",
        "data-decl_I4",
        true
      ],
      "82": "Inline",
      "83": "Inline",
      "84": "Inline",
      "85": "Inline",
      "86": "dA",
      "87": "Inline",
      "88": "Inline",
      "89": "Inline",
      "90": "Inline",
      "91": [
        "ListSnoc",
        "variant-decl_A0_I2_I1*",
        "variant-decl_A0_I2_I1",
        true
      ],
      "92": "Inline",
      "93": "dA",
      "94": "dA",
      "95": "dA",
      "96": "Inline",
      "97": [
        "ListSnoc",
        "if-stmt_I5*",
        "if-stmt_I5",
        true
      ],
      "98": "Inline",
      "99": "Inline",
      "100": "Inline",
      "101": "Inline",
      "102": "dA",
      "103": "dA",
      "104": "dA",
      "105": "dA",
      "106": "Inline",
      "107": "Inline",
      "108": "Inline",
      "109": "dA",
      "110": "Inline",
      "111": "Inline",
      "112": "Inline",
      "113": "dA",
      "114": "Inline",
      "115": "Inline",
      "116": "Inline",
      "117": "dA",
      "118": "Inline",
      "119": "Inline",
      "120": "Inline",
      "121": "dA",
      "122": "Inline",
      "123": [
        "ListSnoc",
        "check-block_A0_I6*",
        "check-block_A0_I6",
        true
      ],
      "124": "Inline",
      "125": "Inline",
      "126": "dA",
      "127": "Inline",
      "128": [
        "ListSnoc",
        "check-block_A1_I2*",
        "check-block_A1_I2",
        true
      ],
      "129": "Inline",
      "130": "Inline",
      "131": "dA",
      "132": "Inline",
      "133": "Inline",
      "134": "Inline",
      "135": "dA",
      "136": "Inline",
      "137": "Inline",
      "138": "Inline",
      "139": "dA",
      "140": "Inline",
      "141": "Inline",
      "142": "Inline",
      "143": "dA",
      "144": "Inline",
      "145": "Inline",
      "146": "Inline",
      "147": "dA",
      "148": "Inline",
      "149": "Inline",
      "150": "Inline",
      "151": "dA",
      "152": "Inline",
      "153": "Inline",
      "154": "Inline",
      "155": "dA",
      "156": "Inline",
      "157": "Inline",
      "158": "Inline",
      "159": "dA",
      "160": "Inline",
      "161": "Inline",
      "162": "Inline",
      "163": "dA",
      "164": "Inline",
      "165": "Inline",
      "166": "Inline",
      "167": "dA",
      "168": "Inline",
      "169": "Inline",
      "170": "Inline",
      "171": "dA",
      "172": "Inline",
      "173": [
        "ListSnoc",
        "switch-expr_I5*",
        "switch-expr_I5",
        true
      ],
      "174": "Inline",
      "175": "Inline",
      "176": "Inline",
      "177": "Inline",
      "178": "dA",
      "179": "Inline",
      "180": "Inline",
      "181": "Inline",
      "182": "Inline",
      "183": [
        "ListSnoc",
        "case-branch_A0_I3_I1*",
        "case-branch_A0_I3_I1",
        true
      ],
      "184": "Inline",
      "185": "dA",
      "186": "dA",
      "187": "dA",
      "188": "Inline",
      "189": [
        "ListSnoc",
        "switch-body_I0*",
        "switch-body_I0",
        true
      ],
      "190": "Inline",
      "191": "dA",
      "192": "Inline",
      "193": "Inline",
      "194": "Inline",
      "195": "dA",
      "196": "Inline",
      "197": "Inline",
      "198": "Inline",
      "199": "Inline",
      "200": [
        "ListSnoc",
        "lambda-expr_A0_I1_I1*",
        "lambda-expr_A0_I1_I1",
        true
      ],
      "201": "Inline",
      "202": "dA",
      "203": "Inline",
      "204": "Inline",
      "205": "Inline",
      "206": "Inline",
      "207": [
        "ListSnoc",
        "lambda-expr_A1_I1_I1*",
        "lambda-expr_A1_I1_I1",
        true
      ],
      "208": "Inline",
      "209": "dA",
      "210": "dA",
      "211": "dA",
      "212": "dA",
      "213": "dA",
      "214": "Inline",
      "215": [
        "ListSnoc",
        "binop-expr_I1*",
        "binop-expr_I1",
        true
      ],
      "216": "Inline",
      "217": "dA",
      "218": "dA",
      "219": "dA",
      "220": "dA",
      "221": "dA",
      "222": "dA",
      "223": "dA",
      "224": "dA",
      "225": "dA",
      "226": "dA",
      "227": "dA",
      "228": "dA",
      "229": "dA",
      "230": "dA",
      "231": "dA",
      "232": "dA",
      "233": "dA",
      "234": "Inline",
      "235": "Inline",
      "236": "Inline",
      "237": "Inline",
      "238": [
        "ListSnoc",
        "app-or-access_A0_I2_I1*",
        "app-or-access_A0_I2_I1",
        true
      ],
      "239": "Inline",
      "240": "dA",
      "241": "dA",
      "242": "dA",
      "243": "dA",
      "244": "dA",
      "245": "dA",
      "246": "dA",
      "247": "dA",
      "248": "dA",
      "249": "dA",
      "250": "dA",
      "251": "dA",
      "252": "dA",
      "253": "dA",
      "254": "dA",
      "255": "dA",
      "256": "dA",
      "257": "Inline",
      "258": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "259": "Inline",
      "260": "dA",
      "261": "Inline",
      "262": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "263": "Inline",
      "264": "dA",
      "265": "dA",
      "266": "dA",
      "267": "Inline",
      "268": "Inline",
      "269": "Inline",
      "270": "Inline",
      "271": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "272": "Inline",
      "273": "dA",
      "274": "Inline",
      "275": "Inline",
      "276": "Inline",
      "277": "Inline",
      "278": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "279": "Inline",
      "280": "dA",
      "281": "dA",
      "282": "dA"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      72,
      66,
      67,
      68,
      69,
      70,
      71,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      93,
      87,
      88,
      89,
      90,
      91,
      92,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      126,
      122,
      123,
      124,
      125,
      127,
      128,
      129,
      130,
      131,
      135,
      139,
      143,
      147,
      151,
      155,
      159,
      163,
      167,
      132,
      133,
      134,
      136,
      137,
      138,
      140,
      141,
      142,
      144,
      145,
      146,
      148,
      149,
      150,
      152,
      153,
      154,
      156,
      157,
      158,
      160,
      161,
      162,
      164,
      165,
      166,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      185,
      179,
      180,
      181,
      182,
      183,
      184,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      202,
      196,
      197,
      198,
      199,
      200,
      201,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      240,
      241,
      242,
      234,
      235,
      236,
      237,
      238,
      239,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      260,
      257,
      258,
      259,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      280,
      274,
      275,
      276,
      277,
      278,
      279,
      281,
      282
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      366,
      4,
      12,
      4,
      13,
      5,
      419,
      0,
      689,
      0,
      691,
      0,
      2307,
      0,
      2335,
      0,
      2561,
      0,
      2560,
      12,
      66,
      12,
      203,
      46,
      2664,
      0,
      2704,
      0,
      2730,
      0,
      2756,
      0,
      2782,
      0,
      2808,
      0,
      2834,
      0,
      2860,
      0,
      2886,
      0,
      2912,
      0,
      196,
      44,
      73,
      14,
      3109,
      0,
      3111,
      0,
      3113,
      0,
      3115,
      0,
      3117,
      0,
      3119,
      0,
      3147,
      25,
      118,
      25,
      3326,
      0,
      3406,
      0,
      3433,
      0,
      3460,
      48,
      214,
      48,
      3641,
      0,
      3920,
      0,
      3960,
      0,
      4000,
      0,
      4040,
      0,
      4080,
      0,
      4160,
      0,
      4200,
      0,
      4240,
      0,
      4280,
      0,
      4636,
      0,
      4638,
      0,
      4676,
      0,
      4682,
      47,
      206,
      47,
      4715,
      0,
      76,
      15,
      4730,
      15,
      4750,
      0,
      4781,
      0,
      4783,
      45,
      199,
      45,
      4932,
      0,
      4958,
      0,
      4984,
      0,
      127,
      27,
      5204,
      0,
      5490,
      0,
      5529,
      0,
      234,
      49,
      5831,
      0,
      6060,
      0,
      6172,
      0,
      69,
      13,
      6273,
      24,
      114,
      24,
      6374,
      0,
      6377,
      0,
      6420,
      0,
      6464,
      0,
      6471,
      0,
      44,
      8,
      8445,
      0,
      8460,
      0,
      8475,
      0,
      8553,
      0,
      8568,
      0,
      8583,
      0,
      8598,
      0,
      8613,
      0,
      8628,
      0,
      8643,
      0,
      8658,
      0,
      8673,
      0,
      8688,
      0,
      8703,
      0,
      8723,
      50,
      237,
      50,
      8782,
      0,
      8800,
      0,
      274,
      55,
      8997,
      0,
      267,
      53,
      9339,
      0,
      9365,
      0,
      9391,
      0,
      9420,
      0,
      9453,
      0,
      9499,
      0,
      9531,
      0,
      9533,
      9,
      47,
      9,
      9539,
      22,
      106,
      22,
      9641,
      0,
      80,
      16,
      9762,
      0,
      9799,
      0,
      9836,
      0,
      9873,
      0,
      9910,
      0,
      9947,
      0,
      9984,
      0,
      10021,
      0,
      10047,
      0,
      10084,
      0,
      10121,
      0,
      10158,
      0,
      10195,
      0,
      10232,
      0,
      10362,
      0,
      10791,
      0,
      11617,
      0,
      11656,
      0,
      11663,
      0,
      11703,
      0,
      277,
      56,
      11745,
      56,
      11793,
      0,
      257,
      51,
      261,
      52,
      11977,
      54,
      270,
      54,
      12023,
      0,
      12025,
      0,
      12109,
      0,
      12168,
      0,
      12170,
      0,
      12173,
      0,
      12176,
      0,
      12203,
      0,
      12206,
      0,
      12208,
      0,
      12235,
      0,
      12238,
      0,
      12293,
      0,
      12300,
      0,
      12326,
      0,
      12352,
      0,
      87,
      18,
      83,
      17,
      12420,
      23,
      110,
      23,
      12816,
      0,
      13112,
      43,
      192,
      43,
      172,
      38,
      13332,
      0,
      13335,
      0,
      13342,
      0,
      13422,
      0,
      13567,
      0,
      13574,
      0,
      13614,
      0,
      13670,
      0,
      13698,
      0,
      13701,
      10,
      50,
      10,
      24,
      6,
      13917,
      0,
      13926,
      0,
      13928,
      19,
      90,
      19,
      13935,
      0,
      13965,
      0,
      13968,
      0,
      13970,
      0,
      13996,
      0,
      14022,
      0,
      40,
      7,
      14126,
      34,
      156,
      34,
      14271,
      35,
      160,
      35,
      14416,
      36,
      164,
      36,
      14561,
      37,
      168,
      37,
      14743,
      0,
      15002,
      0,
      15039,
      0,
      15076,
      0,
      122,
      26,
      175,
      39,
      15268,
      0,
      15274,
      0,
      15317,
      0,
      15373,
      0,
      15445,
      0,
      15466,
      0,
      15497,
      0,
      15523,
      0,
      15549,
      0,
      15689,
      0,
      15692,
      0,
      15695,
      0,
      15698,
      0,
      15705,
      0,
      15708,
      0,
      15826,
      0,
      15863,
      0,
      15900,
      0,
      15937,
      0,
      15974,
      0,
      16011,
      0,
      16048,
      0,
      16085,
      0,
      16122,
      0,
      16159,
      0,
      16196,
      0,
      16233,
      0,
      16381,
      30,
      140,
      30,
      16526,
      31,
      144,
      31,
      16920,
      0,
      16924,
      0,
      16928,
      0,
      16930,
      0,
      16942,
      0,
      16985,
      0,
      17001,
      0,
      17059,
      0,
      17062,
      0,
      55,
      11,
      17188,
      0,
      17215,
      0,
      17246,
      0,
      17280,
      0,
      17320,
      0,
      17326,
      58,
      96,
      20,
      17561,
      0,
      17598,
      0,
      17635,
      0,
      17672,
      0,
      17709,
      0,
      17746,
      0,
      17857,
      0,
      17883,
      0,
      17920,
      0,
      17957,
      0,
      17994,
      0,
      188,
      42,
      18144,
      0,
      18184,
      0,
      18321,
      0,
      18324,
      0,
      18361,
      0,
      18364,
      21,
      99,
      21,
      18621,
      28,
      132,
      28,
      18766,
      29,
      136,
      29,
      18911,
      32,
      148,
      32,
      19056,
      33,
      152,
      33,
      179,
      40,
      19214,
      0,
      19318,
      0,
      19344,
      0,
      19381,
      0,
      19418,
      0,
      19455,
      0,
      19492,
      0,
      19605,
      0,
      19679,
      0,
      19716,
      0,
      19753,
      0,
      19790,
      0,
      19827,
      0,
      19864,
      0,
      19901,
      0,
      19938,
      0,
      19975,
      0,
      20012,
      0,
      20049,
      0,
      20086,
      0,
      20123,
      41,
      182,
      41,
      20133,
      0,
      20135,
      0,
      20143,
      0,
      20173,
      0,
      20175,
      0,
      20205,
      0,
      20245,
      0,
      20320,
      0,
      20357,
      0,
      20409,
      0,
      20454,
      0,
      20457,
      0,
      20499,
      0
    ],
    "rnTable": [
      {
        "program": [
          1
        ],
        "prelude": [
          2
        ],
        "prelude_I0*": [
          3
        ],
        "$": [
          -1,
          0,
          2,
          4
        ],
        "'IMPORT": [
          -1,
          4
        ],
        "'NAME": [
          -1,
          2,
          4
        ],
        "'PARENNOSPACE": [
          -1,
          2,
          4
        ],
        "'STRING": [
          -1,
          2,
          4
        ],
        "'INCLUDE": [
          -1,
          4
        ],
        "'PARENSPACE": [
          -1,
          2,
          4
        ],
        "'INT": [
          -1,
          2,
          4
        ],
        "'LONG": [
          -1,
          2,
          4
        ],
        "'DOUBLE": [
          -1,
          2,
          4
        ],
        "'FLOAT": [
          -1,
          2,
          4
        ],
        "'BOOLEAN": [
          -1,
          2,
          4
        ],
        "'VOID": [
          -1,
          2,
          4
        ],
        "'DATA": [
          -1,
          2,
          4
        ],
        "'VAR": [
          -1,
          2,
          4
        ],
        "'ATCHECK": [
          -1,
          2,
          4
        ],
        "'SWITCH": [
          -1,
          2,
          4
        ],
        "'DASH": [
          -1,
          2,
          4
        ],
        "'BANG": [
          -1,
          2,
          4
        ],
        "'LBRACK": [
          -1,
          2,
          4
        ],
        "'NUMBER": [
          -1,
          2,
          4
        ],
        "'TRUE": [
          -1,
          2,
          4
        ],
        "'FALSE": [
          -1,
          2,
          4
        ],
        "'NULL": [
          -1,
          2,
          4
        ],
        "'PARENAFTERBRACE": [
          -1,
          2,
          4
        ],
        "'ASK": [
          -1,
          2,
          4
        ],
        "'NEW": [
          -1,
          2,
          4
        ]
      },
      {
        "$": [
          -1,
          -1
        ]
      },
      {
        "top-block": [
          4
        ],
        "top-block_I0*": [
          5
        ],
        "$": [
          -1,
          6,
          8,
          10
        ],
        "'NAME": [
          -1,
          10
        ],
        "'PARENNOSPACE": [
          -1,
          10
        ],
        "'STRING": [
          -1,
          10
        ],
        "'PARENSPACE": [
          -1,
          10
        ],
        "'INT": [
          -1,
          10
        ],
        "'LONG": [
          -1,
          10
        ],
        "'DOUBLE": [
          -1,
          10
        ],
        "'FLOAT": [
          -1,
          10
        ],
        "'BOOLEAN": [
          -1,
          10
        ],
        "'VOID": [
          -1,
          10
        ],
        "'DATA": [
          -1,
          10
        ],
        "'VAR": [
          -1,
          10
        ],
        "'ATCHECK": [
          -1,
          10
        ],
        "'SWITCH": [
          -1,
          10
        ],
        "'DASH": [
          -1,
          10
        ],
        "'BANG": [
          -1,
          10
        ],
        "'LBRACK": [
          -1,
          10
        ],
        "'NUMBER": [
          -1,
          10
        ],
        "'TRUE": [
          -1,
          10
        ],
        "'FALSE": [
          -1,
          10
        ],
        "'NULL": [
          -1,
          10
        ],
        "'PARENAFTERBRACE": [
          -1,
          10
        ],
        "'ASK": [
          -1,
          10
        ],
        "'NEW": [
          -1,
          10
        ]
      },
      {
        "prelude_I0": [
          6
        ],
        "import-stmt": [
          7
        ],
        "'IMPORT": [
          8
        ],
        "'INCLUDE": [
          9
        ],
        "$": [
          -1,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'PARENNOSPACE": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'INT": [
          -1,
          12
        ],
        "'LONG": [
          -1,
          12
        ],
        "'DOUBLE": [
          -1,
          12
        ],
        "'FLOAT": [
          -1,
          12
        ],
        "'BOOLEAN": [
          -1,
          12
        ],
        "'VOID": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'ATCHECK": [
          -1,
          12
        ],
        "'SWITCH": [
          -1,
          12
        ],
        "'DASH": [
          -1,
          12
        ],
        "'BANG": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'NULL": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'NEW": [
          -1,
          12
        ]
      },
      {
        "$": [
          -1,
          14
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "top-block_I0": [
          13
        ],
        "top-stmt": [
          14
        ],
        "fun-decl": [
          15
        ],
        "data-decl": [
          16
        ],
        "check-block": [
          17
        ],
        "let-stmt": [
          18
        ],
        "var-stmt": [
          19
        ],
        "assign-stmt": [
          20
        ],
        "expr-stmt": [
          21
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "full-expr": [
          31
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "$": [
          -1,
          16
        ]
      },
      {
        "$": [
          -1,
          18
        ],
        "'IMPORT": [
          -1,
          18
        ],
        "'NAME": [
          -1,
          18
        ],
        "'PARENNOSPACE": [
          -1,
          18
        ],
        "'STRING": [
          -1,
          18
        ],
        "'INCLUDE": [
          -1,
          18
        ],
        "'PARENSPACE": [
          -1,
          18
        ],
        "'INT": [
          -1,
          18
        ],
        "'LONG": [
          -1,
          18
        ],
        "'DOUBLE": [
          -1,
          18
        ],
        "'FLOAT": [
          -1,
          18
        ],
        "'BOOLEAN": [
          -1,
          18
        ],
        "'VOID": [
          -1,
          18
        ],
        "'DATA": [
          -1,
          18
        ],
        "'VAR": [
          -1,
          18
        ],
        "'ATCHECK": [
          -1,
          18
        ],
        "'SWITCH": [
          -1,
          18
        ],
        "'DASH": [
          -1,
          18
        ],
        "'BANG": [
          -1,
          18
        ],
        "'LBRACK": [
          -1,
          18
        ],
        "'NUMBER": [
          -1,
          18
        ],
        "'TRUE": [
          -1,
          18
        ],
        "'FALSE": [
          -1,
          18
        ],
        "'NULL": [
          -1,
          18
        ],
        "'PARENAFTERBRACE": [
          -1,
          18
        ],
        "'ASK": [
          -1,
          18
        ],
        "'NEW": [
          -1,
          18
        ]
      },
      {
        "$": [
          -1,
          20
        ],
        "'IMPORT": [
          -1,
          20
        ],
        "'NAME": [
          -1,
          20
        ],
        "'PARENNOSPACE": [
          -1,
          20
        ],
        "'STRING": [
          -1,
          20
        ],
        "'INCLUDE": [
          -1,
          20
        ],
        "'PARENSPACE": [
          -1,
          20
        ],
        "'INT": [
          -1,
          20
        ],
        "'LONG": [
          -1,
          20
        ],
        "'DOUBLE": [
          -1,
          20
        ],
        "'FLOAT": [
          -1,
          20
        ],
        "'BOOLEAN": [
          -1,
          20
        ],
        "'VOID": [
          -1,
          20
        ],
        "'DATA": [
          -1,
          20
        ],
        "'VAR": [
          -1,
          20
        ],
        "'ATCHECK": [
          -1,
          20
        ],
        "'SWITCH": [
          -1,
          20
        ],
        "'DASH": [
          -1,
          20
        ],
        "'BANG": [
          -1,
          20
        ],
        "'LBRACK": [
          -1,
          20
        ],
        "'NUMBER": [
          -1,
          20
        ],
        "'TRUE": [
          -1,
          20
        ],
        "'FALSE": [
          -1,
          20
        ],
        "'NULL": [
          -1,
          20
        ],
        "'PARENAFTERBRACE": [
          -1,
          20
        ],
        "'ASK": [
          -1,
          20
        ],
        "'NEW": [
          -1,
          20
        ]
      },
      {
        "'NAME": [
          55
        ]
      },
      {
        "'NAME": [
          56
        ]
      },
      {
        "type-ann_A6_I1?": [
          57
        ],
        "type-ann_A6_I1": [
          58
        ],
        "'LT": [
          59,
          22
        ],
        "'COLONEQUALS": [
          60
        ],
        "$": [
          -1,
          22
        ],
        "'NAME": [
          -1,
          24,
          22,
          26
        ],
        "'SEMI": [
          -1,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'STRING": [
          -1,
          22
        ],
        "'RBRACE": [
          -1,
          22
        ],
        "'SPY": [
          -1,
          22
        ],
        "'PARENSPACE": [
          -1,
          22
        ],
        "'INT": [
          -1,
          22
        ],
        "'LONG": [
          -1,
          22
        ],
        "'DOUBLE": [
          -1,
          22
        ],
        "'FLOAT": [
          -1,
          22
        ],
        "'BOOLEAN": [
          -1,
          22
        ],
        "'VOID": [
          -1,
          22
        ],
        "'GT": [
          -1,
          22
        ],
        "'DATA": [
          -1,
          22
        ],
        "'IF": [
          -1,
          22
        ],
        "'FOR": [
          -1,
          22
        ],
        "'RETURN": [
          -1,
          22
        ],
        "'VAR": [
          -1,
          22
        ],
        "'ATCHECK": [
          -1,
          22
        ],
        "'ASSERTEQUALS": [
          -1,
          22
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          22
        ],
        "'ASSERTTRUE": [
          -1,
          22
        ],
        "'ASSERTFALSE": [
          -1,
          22
        ],
        "'ASSERTSATISFIES": [
          -1,
          22
        ],
        "'ASSERTRAISES": [
          -1,
          22
        ],
        "'IS": [
          -1,
          22
        ],
        "'ISNOT": [
          -1,
          22
        ],
        "'SATISFIES": [
          -1,
          22
        ],
        "'RAISES": [
          -1,
          22
        ],
        "'SWITCH": [
          -1,
          22
        ],
        "'YIELD": [
          -1,
          22
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'BANG": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ],
        "'NUMBER": [
          -1,
          22
        ],
        "'TRUE": [
          -1,
          22
        ],
        "'FALSE": [
          -1,
          22
        ],
        "'NULL": [
          -1,
          22
        ],
        "'PARENAFTERBRACE": [
          -1,
          22
        ],
        "'ASK": [
          -1,
          22
        ],
        "'NEW": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          61
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          63
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "lambda-param": [
          64
        ],
        "lambda-expr_A1_I1?": [
          65
        ],
        "lambda-expr_A1_I1": [
          66
        ],
        "'RPAREN": [
          -1,
          28
        ]
      },
      {
        "$": [
          -1,
          30
        ],
        "'NAME": [
          -1,
          30
        ],
        "'SEMI": [
          -1,
          30
        ],
        "'PARENNOSPACE": [
          -1,
          30
        ],
        "'STRING": [
          -1,
          30
        ],
        "'RPAREN": [
          -1,
          30
        ],
        "'RBRACE": [
          -1,
          30
        ],
        "'SPY": [
          -1,
          30
        ],
        "'PARENSPACE": [
          -1,
          30
        ],
        "'COMMA": [
          -1,
          30
        ],
        "'INT": [
          -1,
          30
        ],
        "'LONG": [
          -1,
          30
        ],
        "'DOUBLE": [
          -1,
          30
        ],
        "'FLOAT": [
          -1,
          30
        ],
        "'BOOLEAN": [
          -1,
          30
        ],
        "'VOID": [
          -1,
          30
        ],
        "'LT": [
          -1,
          30
        ],
        "'GT": [
          -1,
          30
        ],
        "'THINARROW": [
          -1,
          30
        ],
        "'DATA": [
          -1,
          30
        ],
        "'IF": [
          -1,
          30
        ],
        "'FOR": [
          -1,
          30
        ],
        "'RETURN": [
          -1,
          30
        ],
        "'VAR": [
          -1,
          30
        ],
        "'ATCHECK": [
          -1,
          30
        ],
        "'ASSERTEQUALS": [
          -1,
          30
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          30
        ],
        "'ASSERTTRUE": [
          -1,
          30
        ],
        "'ASSERTFALSE": [
          -1,
          30
        ],
        "'ASSERTSATISFIES": [
          -1,
          30
        ],
        "'ASSERTRAISES": [
          -1,
          30
        ],
        "'IS": [
          -1,
          30
        ],
        "'ISNOT": [
          -1,
          30
        ],
        "'SATISFIES": [
          -1,
          30
        ],
        "'RAISES": [
          -1,
          30
        ],
        "'SWITCH": [
          -1,
          30
        ],
        "'CASE": [
          -1,
          30
        ],
        "'DEFAULT": [
          -1,
          30
        ],
        "'YIELD": [
          -1,
          30
        ],
        "'PLUS": [
          -1,
          30
        ],
        "'DASH": [
          -1,
          30
        ],
        "'TIMES": [
          -1,
          30
        ],
        "'SLASH": [
          -1,
          30
        ],
        "'PERCENT": [
          -1,
          30
        ],
        "'EQUALEQUAL": [
          -1,
          30
        ],
        "'NEQ": [
          -1,
          30
        ],
        "'LEQ": [
          -1,
          30
        ],
        "'GEQ": [
          -1,
          30
        ],
        "'AND": [
          -1,
          30
        ],
        "'OR": [
          -1,
          30
        ],
        "'BANG": [
          -1,
          30
        ],
        "'DOT": [
          -1,
          30
        ],
        "'LBRACK": [
          -1,
          30
        ],
        "'RBRACK": [
          -1,
          30
        ],
        "'NUMBER": [
          -1,
          30
        ],
        "'TRUE": [
          -1,
          30
        ],
        "'FALSE": [
          -1,
          30
        ],
        "'NULL": [
          -1,
          30
        ],
        "'PARENAFTERBRACE": [
          -1,
          30
        ],
        "'ASK": [
          -1,
          30
        ],
        "'NEW": [
          -1,
          30
        ]
      },
      {
        "$": [
          -1,
          32
        ],
        "'NAME": [
          -1,
          32
        ],
        "'PARENNOSPACE": [
          -1,
          32
        ],
        "'STRING": [
          -1,
          32
        ],
        "'PARENSPACE": [
          -1,
          32
        ],
        "'INT": [
          -1,
          32
        ],
        "'LONG": [
          -1,
          32
        ],
        "'DOUBLE": [
          -1,
          32
        ],
        "'FLOAT": [
          -1,
          32
        ],
        "'BOOLEAN": [
          -1,
          32
        ],
        "'VOID": [
          -1,
          32
        ],
        "'DATA": [
          -1,
          32
        ],
        "'VAR": [
          -1,
          32
        ],
        "'ATCHECK": [
          -1,
          32
        ],
        "'SWITCH": [
          -1,
          32
        ],
        "'DASH": [
          -1,
          32
        ],
        "'BANG": [
          -1,
          32
        ],
        "'LBRACK": [
          -1,
          32
        ],
        "'NUMBER": [
          -1,
          32
        ],
        "'TRUE": [
          -1,
          32
        ],
        "'FALSE": [
          -1,
          32
        ],
        "'NULL": [
          -1,
          32
        ],
        "'PARENAFTERBRACE": [
          -1,
          32
        ],
        "'ASK": [
          -1,
          32
        ],
        "'NEW": [
          -1,
          32
        ]
      },
      {
        "$": [
          -1,
          34
        ],
        "'NAME": [
          -1,
          34
        ],
        "'PARENNOSPACE": [
          -1,
          34
        ],
        "'STRING": [
          -1,
          34
        ],
        "'PARENSPACE": [
          -1,
          34
        ],
        "'INT": [
          -1,
          34
        ],
        "'LONG": [
          -1,
          34
        ],
        "'DOUBLE": [
          -1,
          34
        ],
        "'FLOAT": [
          -1,
          34
        ],
        "'BOOLEAN": [
          -1,
          34
        ],
        "'VOID": [
          -1,
          34
        ],
        "'DATA": [
          -1,
          34
        ],
        "'VAR": [
          -1,
          34
        ],
        "'ATCHECK": [
          -1,
          34
        ],
        "'SWITCH": [
          -1,
          34
        ],
        "'DASH": [
          -1,
          34
        ],
        "'BANG": [
          -1,
          34
        ],
        "'LBRACK": [
          -1,
          34
        ],
        "'NUMBER": [
          -1,
          34
        ],
        "'TRUE": [
          -1,
          34
        ],
        "'FALSE": [
          -1,
          34
        ],
        "'NULL": [
          -1,
          34
        ],
        "'PARENAFTERBRACE": [
          -1,
          34
        ],
        "'ASK": [
          -1,
          34
        ],
        "'NEW": [
          -1,
          34
        ]
      },
      {
        "$": [
          -1,
          36
        ],
        "'NAME": [
          -1,
          36
        ],
        "'PARENNOSPACE": [
          -1,
          36
        ],
        "'STRING": [
          -1,
          36
        ],
        "'PARENSPACE": [
          -1,
          36
        ],
        "'INT": [
          -1,
          36
        ],
        "'LONG": [
          -1,
          36
        ],
        "'DOUBLE": [
          -1,
          36
        ],
        "'FLOAT": [
          -1,
          36
        ],
        "'BOOLEAN": [
          -1,
          36
        ],
        "'VOID": [
          -1,
          36
        ],
        "'DATA": [
          -1,
          36
        ],
        "'VAR": [
          -1,
          36
        ],
        "'ATCHECK": [
          -1,
          36
        ],
        "'SWITCH": [
          -1,
          36
        ],
        "'DASH": [
          -1,
          36
        ],
        "'BANG": [
          -1,
          36
        ],
        "'LBRACK": [
          -1,
          36
        ],
        "'NUMBER": [
          -1,
          36
        ],
        "'TRUE": [
          -1,
          36
        ],
        "'FALSE": [
          -1,
          36
        ],
        "'NULL": [
          -1,
          36
        ],
        "'PARENAFTERBRACE": [
          -1,
          36
        ],
        "'ASK": [
          -1,
          36
        ],
        "'NEW": [
          -1,
          36
        ]
      },
      {
        "$": [
          -1,
          38
        ],
        "'NAME": [
          -1,
          38
        ],
        "'PARENNOSPACE": [
          -1,
          38
        ],
        "'STRING": [
          -1,
          38
        ],
        "'PARENSPACE": [
          -1,
          38
        ],
        "'INT": [
          -1,
          38
        ],
        "'LONG": [
          -1,
          38
        ],
        "'DOUBLE": [
          -1,
          38
        ],
        "'FLOAT": [
          -1,
          38
        ],
        "'BOOLEAN": [
          -1,
          38
        ],
        "'VOID": [
          -1,
          38
        ],
        "'DATA": [
          -1,
          38
        ],
        "'VAR": [
          -1,
          38
        ],
        "'ATCHECK": [
          -1,
          38
        ],
        "'SWITCH": [
          -1,
          38
        ],
        "'DASH": [
          -1,
          38
        ],
        "'BANG": [
          -1,
          38
        ],
        "'LBRACK": [
          -1,
          38
        ],
        "'NUMBER": [
          -1,
          38
        ],
        "'TRUE": [
          -1,
          38
        ],
        "'FALSE": [
          -1,
          38
        ],
        "'NULL": [
          -1,
          38
        ],
        "'PARENAFTERBRACE": [
          -1,
          38
        ],
        "'ASK": [
          -1,
          38
        ],
        "'NEW": [
          -1,
          38
        ]
      },
      {
        "$": [
          -1,
          40
        ],
        "'NAME": [
          -1,
          40
        ],
        "'PARENNOSPACE": [
          -1,
          40
        ],
        "'STRING": [
          -1,
          40
        ],
        "'PARENSPACE": [
          -1,
          40
        ],
        "'INT": [
          -1,
          40
        ],
        "'LONG": [
          -1,
          40
        ],
        "'DOUBLE": [
          -1,
          40
        ],
        "'FLOAT": [
          -1,
          40
        ],
        "'BOOLEAN": [
          -1,
          40
        ],
        "'VOID": [
          -1,
          40
        ],
        "'DATA": [
          -1,
          40
        ],
        "'VAR": [
          -1,
          40
        ],
        "'ATCHECK": [
          -1,
          40
        ],
        "'SWITCH": [
          -1,
          40
        ],
        "'DASH": [
          -1,
          40
        ],
        "'BANG": [
          -1,
          40
        ],
        "'LBRACK": [
          -1,
          40
        ],
        "'NUMBER": [
          -1,
          40
        ],
        "'TRUE": [
          -1,
          40
        ],
        "'FALSE": [
          -1,
          40
        ],
        "'NULL": [
          -1,
          40
        ],
        "'PARENAFTERBRACE": [
          -1,
          40
        ],
        "'ASK": [
          -1,
          40
        ],
        "'NEW": [
          -1,
          40
        ]
      },
      {
        "$": [
          -1,
          42
        ],
        "'NAME": [
          -1,
          42
        ],
        "'PARENNOSPACE": [
          -1,
          42
        ],
        "'STRING": [
          -1,
          42
        ],
        "'PARENSPACE": [
          -1,
          42
        ],
        "'INT": [
          -1,
          42
        ],
        "'LONG": [
          -1,
          42
        ],
        "'DOUBLE": [
          -1,
          42
        ],
        "'FLOAT": [
          -1,
          42
        ],
        "'BOOLEAN": [
          -1,
          42
        ],
        "'VOID": [
          -1,
          42
        ],
        "'DATA": [
          -1,
          42
        ],
        "'VAR": [
          -1,
          42
        ],
        "'ATCHECK": [
          -1,
          42
        ],
        "'SWITCH": [
          -1,
          42
        ],
        "'DASH": [
          -1,
          42
        ],
        "'BANG": [
          -1,
          42
        ],
        "'LBRACK": [
          -1,
          42
        ],
        "'NUMBER": [
          -1,
          42
        ],
        "'TRUE": [
          -1,
          42
        ],
        "'FALSE": [
          -1,
          42
        ],
        "'NULL": [
          -1,
          42
        ],
        "'PARENAFTERBRACE": [
          -1,
          42
        ],
        "'ASK": [
          -1,
          42
        ],
        "'NEW": [
          -1,
          42
        ]
      },
      {
        "$": [
          -1,
          44
        ],
        "'NAME": [
          -1,
          44
        ],
        "'PARENNOSPACE": [
          -1,
          44
        ],
        "'STRING": [
          -1,
          44
        ],
        "'PARENSPACE": [
          -1,
          44
        ],
        "'INT": [
          -1,
          44
        ],
        "'LONG": [
          -1,
          44
        ],
        "'DOUBLE": [
          -1,
          44
        ],
        "'FLOAT": [
          -1,
          44
        ],
        "'BOOLEAN": [
          -1,
          44
        ],
        "'VOID": [
          -1,
          44
        ],
        "'DATA": [
          -1,
          44
        ],
        "'VAR": [
          -1,
          44
        ],
        "'ATCHECK": [
          -1,
          44
        ],
        "'SWITCH": [
          -1,
          44
        ],
        "'DASH": [
          -1,
          44
        ],
        "'BANG": [
          -1,
          44
        ],
        "'LBRACK": [
          -1,
          44
        ],
        "'NUMBER": [
          -1,
          44
        ],
        "'TRUE": [
          -1,
          44
        ],
        "'FALSE": [
          -1,
          44
        ],
        "'NULL": [
          -1,
          44
        ],
        "'PARENAFTERBRACE": [
          -1,
          44
        ],
        "'ASK": [
          -1,
          44
        ],
        "'NEW": [
          -1,
          44
        ]
      },
      {
        "$": [
          -1,
          46
        ],
        "'NAME": [
          -1,
          46
        ],
        "'PARENNOSPACE": [
          -1,
          46
        ],
        "'STRING": [
          -1,
          46
        ],
        "'PARENSPACE": [
          -1,
          46
        ],
        "'INT": [
          -1,
          46
        ],
        "'LONG": [
          -1,
          46
        ],
        "'DOUBLE": [
          -1,
          46
        ],
        "'FLOAT": [
          -1,
          46
        ],
        "'BOOLEAN": [
          -1,
          46
        ],
        "'VOID": [
          -1,
          46
        ],
        "'DATA": [
          -1,
          46
        ],
        "'VAR": [
          -1,
          46
        ],
        "'ATCHECK": [
          -1,
          46
        ],
        "'SWITCH": [
          -1,
          46
        ],
        "'DASH": [
          -1,
          46
        ],
        "'BANG": [
          -1,
          46
        ],
        "'LBRACK": [
          -1,
          46
        ],
        "'NUMBER": [
          -1,
          46
        ],
        "'TRUE": [
          -1,
          46
        ],
        "'FALSE": [
          -1,
          46
        ],
        "'NULL": [
          -1,
          46
        ],
        "'PARENAFTERBRACE": [
          -1,
          46
        ],
        "'ASK": [
          -1,
          46
        ],
        "'NEW": [
          -1,
          46
        ]
      },
      {
        "$": [
          -1,
          48
        ],
        "'NAME": [
          -1,
          48
        ],
        "'PARENNOSPACE": [
          -1,
          48
        ],
        "'STRING": [
          -1,
          48
        ],
        "'PARENSPACE": [
          -1,
          48
        ],
        "'INT": [
          -1,
          48
        ],
        "'LONG": [
          -1,
          48
        ],
        "'DOUBLE": [
          -1,
          48
        ],
        "'FLOAT": [
          -1,
          48
        ],
        "'BOOLEAN": [
          -1,
          48
        ],
        "'VOID": [
          -1,
          48
        ],
        "'DATA": [
          -1,
          48
        ],
        "'VAR": [
          -1,
          48
        ],
        "'ATCHECK": [
          -1,
          48
        ],
        "'SWITCH": [
          -1,
          48
        ],
        "'DASH": [
          -1,
          48
        ],
        "'BANG": [
          -1,
          48
        ],
        "'LBRACK": [
          -1,
          48
        ],
        "'NUMBER": [
          -1,
          48
        ],
        "'TRUE": [
          -1,
          48
        ],
        "'FALSE": [
          -1,
          48
        ],
        "'NULL": [
          -1,
          48
        ],
        "'PARENAFTERBRACE": [
          -1,
          48
        ],
        "'ASK": [
          -1,
          48
        ],
        "'NEW": [
          -1,
          48
        ]
      },
      {
        "'NAME": [
          67
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          69
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "type-ann_A7_I1?": [
          70
        ],
        "type-ann_A7_I1": [
          71
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr_A0_I1?": [
          72
        ],
        "lambda-expr_A0_I1": [
          73
        ],
        "lambda-param": [
          74
        ],
        "binop-expr": [
          75
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "'RPAREN": [
          -1,
          50
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          76
        ]
      },
      {
        "'NAME": [
          -1,
          54
        ],
        "'RPAREN": [
          -1,
          54
        ],
        "'COMMA": [
          -1,
          54
        ],
        "'GT": [
          -1,
          54
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          -1,
          56
        ],
        "'RPAREN": [
          -1,
          56
        ],
        "'COMMA": [
          -1,
          56
        ],
        "'GT": [
          -1,
          56
        ],
        "'THINARROW": [
          -1,
          56
        ]
      },
      {
        "'NAME": [
          -1,
          58
        ],
        "'RPAREN": [
          -1,
          58
        ],
        "'COMMA": [
          -1,
          58
        ],
        "'GT": [
          -1,
          58
        ],
        "'THINARROW": [
          -1,
          58
        ]
      },
      {
        "'NAME": [
          -1,
          60
        ],
        "'RPAREN": [
          -1,
          60
        ],
        "'COMMA": [
          -1,
          60
        ],
        "'GT": [
          -1,
          60
        ],
        "'THINARROW": [
          -1,
          60
        ]
      },
      {
        "'NAME": [
          -1,
          62
        ],
        "'RPAREN": [
          -1,
          62
        ],
        "'COMMA": [
          -1,
          62
        ],
        "'GT": [
          -1,
          62
        ],
        "'THINARROW": [
          -1,
          62
        ]
      },
      {
        "'NAME": [
          -1,
          64
        ],
        "'RPAREN": [
          -1,
          64
        ],
        "'COMMA": [
          -1,
          64
        ],
        "'GT": [
          -1,
          64
        ],
        "'THINARROW": [
          -1,
          64
        ]
      },
      {
        "'NAME": [
          77
        ]
      },
      {
        "'SEMI": [
          78
        ],
        "expr-stmt_I1?": [
          79
        ],
        "expr-stmt_I1": [
          80
        ],
        "$": [
          -1,
          66,
          68
        ],
        "'NAME": [
          -1,
          66,
          68
        ],
        "'PARENNOSPACE": [
          -1,
          66,
          68
        ],
        "'STRING": [
          -1,
          66,
          68
        ],
        "'RBRACE": [
          -1,
          66,
          68
        ],
        "'SPY": [
          -1,
          66,
          68
        ],
        "'PARENSPACE": [
          -1,
          66,
          68
        ],
        "'INT": [
          -1,
          66,
          68
        ],
        "'LONG": [
          -1,
          66,
          68
        ],
        "'DOUBLE": [
          -1,
          66,
          68
        ],
        "'FLOAT": [
          -1,
          66,
          68
        ],
        "'BOOLEAN": [
          -1,
          66,
          68
        ],
        "'VOID": [
          -1,
          66,
          68
        ],
        "'DATA": [
          -1,
          66,
          68
        ],
        "'IF": [
          -1,
          66,
          68
        ],
        "'FOR": [
          -1,
          66,
          68
        ],
        "'RETURN": [
          -1,
          66,
          68
        ],
        "'VAR": [
          -1,
          66,
          68
        ],
        "'ATCHECK": [
          -1,
          66,
          68
        ],
        "'SWITCH": [
          -1,
          66,
          68
        ],
        "'YIELD": [
          -1,
          66,
          68
        ],
        "'DASH": [
          -1,
          66,
          68
        ],
        "'BANG": [
          -1,
          66,
          68
        ],
        "'LBRACK": [
          -1,
          66,
          68
        ],
        "'NUMBER": [
          -1,
          66,
          68
        ],
        "'TRUE": [
          -1,
          66,
          68
        ],
        "'FALSE": [
          -1,
          66,
          68
        ],
        "'NULL": [
          -1,
          66,
          68
        ],
        "'PARENAFTERBRACE": [
          -1,
          66,
          68
        ],
        "'ASK": [
          -1,
          66,
          68
        ],
        "'NEW": [
          -1,
          66,
          68
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          82
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'LBRACE": [
          83
        ],
        "'VOID": [
          84
        ]
      },
      {
        "$": [
          -1,
          70
        ],
        "'NAME": [
          -1,
          70
        ],
        "'SEMI": [
          -1,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          70
        ],
        "'STRING": [
          -1,
          70
        ],
        "'RPAREN": [
          -1,
          70
        ],
        "'RBRACE": [
          -1,
          70
        ],
        "'SPY": [
          -1,
          70
        ],
        "'PARENSPACE": [
          -1,
          70
        ],
        "'COMMA": [
          -1,
          70
        ],
        "'INT": [
          -1,
          70
        ],
        "'LONG": [
          -1,
          70
        ],
        "'DOUBLE": [
          -1,
          70
        ],
        "'FLOAT": [
          -1,
          70
        ],
        "'BOOLEAN": [
          -1,
          70
        ],
        "'VOID": [
          -1,
          70
        ],
        "'LT": [
          -1,
          70
        ],
        "'GT": [
          -1,
          70
        ],
        "'THINARROW": [
          -1,
          70
        ],
        "'DATA": [
          -1,
          70
        ],
        "'IF": [
          -1,
          70
        ],
        "'FOR": [
          -1,
          70
        ],
        "'RETURN": [
          -1,
          70
        ],
        "'VAR": [
          -1,
          70
        ],
        "'ATCHECK": [
          -1,
          70
        ],
        "'ASSERTEQUALS": [
          -1,
          70
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          70
        ],
        "'ASSERTTRUE": [
          -1,
          70
        ],
        "'ASSERTFALSE": [
          -1,
          70
        ],
        "'ASSERTSATISFIES": [
          -1,
          70
        ],
        "'ASSERTRAISES": [
          -1,
          70
        ],
        "'IS": [
          -1,
          70
        ],
        "'ISNOT": [
          -1,
          70
        ],
        "'SATISFIES": [
          -1,
          70
        ],
        "'RAISES": [
          -1,
          70
        ],
        "'SWITCH": [
          -1,
          70
        ],
        "'CASE": [
          -1,
          70
        ],
        "'DEFAULT": [
          -1,
          70
        ],
        "'YIELD": [
          -1,
          70
        ],
        "'PLUS": [
          -1,
          70
        ],
        "'DASH": [
          -1,
          70
        ],
        "'TIMES": [
          -1,
          70
        ],
        "'SLASH": [
          -1,
          70
        ],
        "'PERCENT": [
          -1,
          70
        ],
        "'EQUALEQUAL": [
          -1,
          70
        ],
        "'NEQ": [
          -1,
          70
        ],
        "'LEQ": [
          -1,
          70
        ],
        "'GEQ": [
          -1,
          70
        ],
        "'AND": [
          -1,
          70
        ],
        "'OR": [
          -1,
          70
        ],
        "'BANG": [
          -1,
          70
        ],
        "'DOT": [
          -1,
          70
        ],
        "'LBRACK": [
          -1,
          70
        ],
        "'RBRACK": [
          -1,
          70
        ],
        "'NUMBER": [
          -1,
          70
        ],
        "'TRUE": [
          -1,
          70
        ],
        "'FALSE": [
          -1,
          70
        ],
        "'NULL": [
          -1,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          70
        ],
        "'ASK": [
          -1,
          70
        ],
        "'NEW": [
          -1,
          70
        ]
      },
      {
        "'PARENSPACE": [
          85
        ]
      },
      {
        "$": [
          -1,
          72
        ],
        "'NAME": [
          -1,
          72
        ],
        "'SEMI": [
          -1,
          72
        ],
        "'PARENNOSPACE": [
          -1,
          72
        ],
        "'STRING": [
          -1,
          72
        ],
        "'RPAREN": [
          -1,
          72
        ],
        "'RBRACE": [
          -1,
          72
        ],
        "'SPY": [
          -1,
          72
        ],
        "'PARENSPACE": [
          -1,
          72
        ],
        "'COMMA": [
          -1,
          72
        ],
        "'INT": [
          -1,
          72
        ],
        "'LONG": [
          -1,
          72
        ],
        "'DOUBLE": [
          -1,
          72
        ],
        "'FLOAT": [
          -1,
          72
        ],
        "'BOOLEAN": [
          -1,
          72
        ],
        "'VOID": [
          -1,
          72
        ],
        "'DATA": [
          -1,
          72
        ],
        "'IF": [
          -1,
          72
        ],
        "'FOR": [
          -1,
          72
        ],
        "'RETURN": [
          -1,
          72
        ],
        "'VAR": [
          -1,
          72
        ],
        "'ATCHECK": [
          -1,
          72
        ],
        "'ASSERTEQUALS": [
          -1,
          72
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          72
        ],
        "'ASSERTTRUE": [
          -1,
          72
        ],
        "'ASSERTFALSE": [
          -1,
          72
        ],
        "'ASSERTSATISFIES": [
          -1,
          72
        ],
        "'ASSERTRAISES": [
          -1,
          72
        ],
        "'IS": [
          -1,
          72
        ],
        "'ISNOT": [
          -1,
          72
        ],
        "'SATISFIES": [
          -1,
          72
        ],
        "'RAISES": [
          -1,
          72
        ],
        "'SWITCH": [
          -1,
          72
        ],
        "'CASE": [
          -1,
          72
        ],
        "'DEFAULT": [
          -1,
          72
        ],
        "'YIELD": [
          -1,
          72
        ],
        "'DASH": [
          -1,
          72
        ],
        "'BANG": [
          -1,
          72
        ],
        "'LBRACK": [
          -1,
          72
        ],
        "'RBRACK": [
          -1,
          72
        ],
        "'NUMBER": [
          -1,
          72
        ],
        "'TRUE": [
          -1,
          72
        ],
        "'FALSE": [
          -1,
          72
        ],
        "'NULL": [
          -1,
          72
        ],
        "'PARENAFTERBRACE": [
          -1,
          72
        ],
        "'ASK": [
          -1,
          72
        ],
        "'NEW": [
          -1,
          72
        ]
      },
      {
        "$": [
          -1,
          74
        ],
        "'NAME": [
          -1,
          74
        ],
        "'SEMI": [
          -1,
          74
        ],
        "'PARENNOSPACE": [
          -1,
          74
        ],
        "'STRING": [
          -1,
          74
        ],
        "'RPAREN": [
          -1,
          74
        ],
        "'RBRACE": [
          -1,
          74
        ],
        "'SPY": [
          -1,
          74
        ],
        "'PARENSPACE": [
          -1,
          74
        ],
        "'COMMA": [
          -1,
          74
        ],
        "'INT": [
          -1,
          74
        ],
        "'LONG": [
          -1,
          74
        ],
        "'DOUBLE": [
          -1,
          74
        ],
        "'FLOAT": [
          -1,
          74
        ],
        "'BOOLEAN": [
          -1,
          74
        ],
        "'VOID": [
          -1,
          74
        ],
        "'DATA": [
          -1,
          74
        ],
        "'IF": [
          -1,
          74
        ],
        "'FOR": [
          -1,
          74
        ],
        "'RETURN": [
          -1,
          74
        ],
        "'VAR": [
          -1,
          74
        ],
        "'ATCHECK": [
          -1,
          74
        ],
        "'ASSERTEQUALS": [
          -1,
          74
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          74
        ],
        "'ASSERTTRUE": [
          -1,
          74
        ],
        "'ASSERTFALSE": [
          -1,
          74
        ],
        "'ASSERTSATISFIES": [
          -1,
          74
        ],
        "'ASSERTRAISES": [
          -1,
          74
        ],
        "'IS": [
          -1,
          74
        ],
        "'ISNOT": [
          -1,
          74
        ],
        "'SATISFIES": [
          -1,
          74
        ],
        "'RAISES": [
          -1,
          74
        ],
        "'SWITCH": [
          -1,
          74
        ],
        "'CASE": [
          -1,
          74
        ],
        "'DEFAULT": [
          -1,
          74
        ],
        "'YIELD": [
          -1,
          74
        ],
        "'DASH": [
          -1,
          74
        ],
        "'BANG": [
          -1,
          74
        ],
        "'LBRACK": [
          -1,
          74
        ],
        "'RBRACK": [
          -1,
          74
        ],
        "'NUMBER": [
          -1,
          74
        ],
        "'TRUE": [
          -1,
          74
        ],
        "'FALSE": [
          -1,
          74
        ],
        "'NULL": [
          -1,
          74
        ],
        "'PARENAFTERBRACE": [
          -1,
          74
        ],
        "'ASK": [
          -1,
          74
        ],
        "'NEW": [
          -1,
          74
        ]
      },
      {
        "binop-expr_I1*": [
          86
        ],
        "$": [
          -1,
          76,
          78
        ],
        "'NAME": [
          -1,
          76,
          78
        ],
        "'SEMI": [
          -1,
          76,
          78
        ],
        "'PARENNOSPACE": [
          -1,
          76,
          78
        ],
        "'STRING": [
          -1,
          76,
          78
        ],
        "'RPAREN": [
          -1,
          76,
          78
        ],
        "'RBRACE": [
          -1,
          76,
          78
        ],
        "'SPY": [
          -1,
          76,
          78
        ],
        "'PARENSPACE": [
          -1,
          76,
          78
        ],
        "'COMMA": [
          -1,
          76,
          78
        ],
        "'INT": [
          -1,
          76,
          78
        ],
        "'LONG": [
          -1,
          76,
          78
        ],
        "'DOUBLE": [
          -1,
          76,
          78
        ],
        "'FLOAT": [
          -1,
          76,
          78
        ],
        "'BOOLEAN": [
          -1,
          76,
          78
        ],
        "'VOID": [
          -1,
          76,
          78
        ],
        "'LT": [
          -1,
          78
        ],
        "'GT": [
          -1,
          78
        ],
        "'THINARROW": [
          -1,
          76,
          78
        ],
        "'DATA": [
          -1,
          76,
          78
        ],
        "'IF": [
          -1,
          76,
          78
        ],
        "'FOR": [
          -1,
          76,
          78
        ],
        "'RETURN": [
          -1,
          76,
          78
        ],
        "'VAR": [
          -1,
          76,
          78
        ],
        "'ATCHECK": [
          -1,
          76,
          78
        ],
        "'ASSERTEQUALS": [
          -1,
          76,
          78
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          76,
          78
        ],
        "'ASSERTTRUE": [
          -1,
          76,
          78
        ],
        "'ASSERTFALSE": [
          -1,
          76,
          78
        ],
        "'ASSERTSATISFIES": [
          -1,
          76,
          78
        ],
        "'ASSERTRAISES": [
          -1,
          76,
          78
        ],
        "'IS": [
          -1,
          76,
          78
        ],
        "'ISNOT": [
          -1,
          76,
          78
        ],
        "'SATISFIES": [
          -1,
          76,
          78
        ],
        "'RAISES": [
          -1,
          76,
          78
        ],
        "'SWITCH": [
          -1,
          76,
          78
        ],
        "'CASE": [
          -1,
          76,
          78
        ],
        "'DEFAULT": [
          -1,
          76,
          78
        ],
        "'YIELD": [
          -1,
          76,
          78
        ],
        "'PLUS": [
          -1,
          78
        ],
        "'DASH": [
          -1,
          76,
          78
        ],
        "'TIMES": [
          -1,
          78
        ],
        "'SLASH": [
          -1,
          78
        ],
        "'PERCENT": [
          -1,
          78
        ],
        "'EQUALEQUAL": [
          -1,
          78
        ],
        "'NEQ": [
          -1,
          78
        ],
        "'LEQ": [
          -1,
          78
        ],
        "'GEQ": [
          -1,
          78
        ],
        "'AND": [
          -1,
          78
        ],
        "'OR": [
          -1,
          78
        ],
        "'BANG": [
          -1,
          76,
          78
        ],
        "'LBRACK": [
          -1,
          76,
          78
        ],
        "'RBRACK": [
          -1,
          76,
          78
        ],
        "'NUMBER": [
          -1,
          76,
          78
        ],
        "'TRUE": [
          -1,
          76,
          78
        ],
        "'FALSE": [
          -1,
          76,
          78
        ],
        "'NULL": [
          -1,
          76,
          78
        ],
        "'PARENAFTERBRACE": [
          -1,
          76,
          78
        ],
        "'ASK": [
          -1,
          76,
          78
        ],
        "'NEW": [
          -1,
          76,
          78
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "unop-expr": [
          89
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "unop-expr": [
          90
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'PARENNOSPACE": [
          91,
          80
        ],
        "'DOT": [
          92
        ],
        "'LBRACK": [
          93,
          80
        ],
        "$": [
          -1,
          80
        ],
        "'NAME": [
          -1,
          80
        ],
        "'SEMI": [
          -1,
          80
        ],
        "'STRING": [
          -1,
          80
        ],
        "'RPAREN": [
          -1,
          80
        ],
        "'RBRACE": [
          -1,
          80
        ],
        "'SPY": [
          -1,
          80
        ],
        "'PARENSPACE": [
          -1,
          80
        ],
        "'COMMA": [
          -1,
          80
        ],
        "'INT": [
          -1,
          80
        ],
        "'LONG": [
          -1,
          80
        ],
        "'DOUBLE": [
          -1,
          80
        ],
        "'FLOAT": [
          -1,
          80
        ],
        "'BOOLEAN": [
          -1,
          80
        ],
        "'VOID": [
          -1,
          80
        ],
        "'LT": [
          -1,
          80
        ],
        "'GT": [
          -1,
          80
        ],
        "'THINARROW": [
          -1,
          80
        ],
        "'DATA": [
          -1,
          80
        ],
        "'IF": [
          -1,
          80
        ],
        "'FOR": [
          -1,
          80
        ],
        "'RETURN": [
          -1,
          80
        ],
        "'VAR": [
          -1,
          80
        ],
        "'ATCHECK": [
          -1,
          80
        ],
        "'ASSERTEQUALS": [
          -1,
          80
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          80
        ],
        "'ASSERTTRUE": [
          -1,
          80
        ],
        "'ASSERTFALSE": [
          -1,
          80
        ],
        "'ASSERTSATISFIES": [
          -1,
          80
        ],
        "'ASSERTRAISES": [
          -1,
          80
        ],
        "'IS": [
          -1,
          80
        ],
        "'ISNOT": [
          -1,
          80
        ],
        "'SATISFIES": [
          -1,
          80
        ],
        "'RAISES": [
          -1,
          80
        ],
        "'SWITCH": [
          -1,
          80
        ],
        "'CASE": [
          -1,
          80
        ],
        "'DEFAULT": [
          -1,
          80
        ],
        "'YIELD": [
          -1,
          80
        ],
        "'PLUS": [
          -1,
          80
        ],
        "'DASH": [
          -1,
          80
        ],
        "'TIMES": [
          -1,
          80
        ],
        "'SLASH": [
          -1,
          80
        ],
        "'PERCENT": [
          -1,
          80
        ],
        "'EQUALEQUAL": [
          -1,
          80
        ],
        "'NEQ": [
          -1,
          80
        ],
        "'LEQ": [
          -1,
          80
        ],
        "'GEQ": [
          -1,
          80
        ],
        "'AND": [
          -1,
          80
        ],
        "'OR": [
          -1,
          80
        ],
        "'BANG": [
          -1,
          80
        ],
        "'RBRACK": [
          -1,
          80
        ],
        "'NUMBER": [
          -1,
          80
        ],
        "'TRUE": [
          -1,
          80
        ],
        "'FALSE": [
          -1,
          80
        ],
        "'NULL": [
          -1,
          80
        ],
        "'PARENAFTERBRACE": [
          -1,
          80
        ],
        "'ASK": [
          -1,
          80
        ],
        "'NEW": [
          -1,
          80
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'FOR": [
          95
        ],
        "'RBRACK": [
          96
        ]
      },
      {
        "$": [
          -1,
          82
        ],
        "'NAME": [
          -1,
          82
        ],
        "'SEMI": [
          -1,
          82
        ],
        "'PARENNOSPACE": [
          -1,
          82
        ],
        "'STRING": [
          -1,
          82
        ],
        "'RPAREN": [
          -1,
          82
        ],
        "'RBRACE": [
          -1,
          82
        ],
        "'SPY": [
          -1,
          82
        ],
        "'PARENSPACE": [
          -1,
          82
        ],
        "'COMMA": [
          -1,
          82
        ],
        "'INT": [
          -1,
          82
        ],
        "'LONG": [
          -1,
          82
        ],
        "'DOUBLE": [
          -1,
          82
        ],
        "'FLOAT": [
          -1,
          82
        ],
        "'BOOLEAN": [
          -1,
          82
        ],
        "'VOID": [
          -1,
          82
        ],
        "'LT": [
          -1,
          82
        ],
        "'GT": [
          -1,
          82
        ],
        "'THINARROW": [
          -1,
          82
        ],
        "'DATA": [
          -1,
          82
        ],
        "'IF": [
          -1,
          82
        ],
        "'FOR": [
          -1,
          82
        ],
        "'RETURN": [
          -1,
          82
        ],
        "'VAR": [
          -1,
          82
        ],
        "'ATCHECK": [
          -1,
          82
        ],
        "'ASSERTEQUALS": [
          -1,
          82
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          82
        ],
        "'ASSERTTRUE": [
          -1,
          82
        ],
        "'ASSERTFALSE": [
          -1,
          82
        ],
        "'ASSERTSATISFIES": [
          -1,
          82
        ],
        "'ASSERTRAISES": [
          -1,
          82
        ],
        "'IS": [
          -1,
          82
        ],
        "'ISNOT": [
          -1,
          82
        ],
        "'SATISFIES": [
          -1,
          82
        ],
        "'RAISES": [
          -1,
          82
        ],
        "'SWITCH": [
          -1,
          82
        ],
        "'CASE": [
          -1,
          82
        ],
        "'DEFAULT": [
          -1,
          82
        ],
        "'YIELD": [
          -1,
          82
        ],
        "'PLUS": [
          -1,
          82
        ],
        "'DASH": [
          -1,
          82
        ],
        "'TIMES": [
          -1,
          82
        ],
        "'SLASH": [
          -1,
          82
        ],
        "'PERCENT": [
          -1,
          82
        ],
        "'EQUALEQUAL": [
          -1,
          82
        ],
        "'NEQ": [
          -1,
          82
        ],
        "'LEQ": [
          -1,
          82
        ],
        "'GEQ": [
          -1,
          82
        ],
        "'AND": [
          -1,
          82
        ],
        "'OR": [
          -1,
          82
        ],
        "'BANG": [
          -1,
          82
        ],
        "'DOT": [
          -1,
          82
        ],
        "'LBRACK": [
          -1,
          82
        ],
        "'RBRACK": [
          -1,
          82
        ],
        "'NUMBER": [
          -1,
          82
        ],
        "'TRUE": [
          -1,
          82
        ],
        "'FALSE": [
          -1,
          82
        ],
        "'NULL": [
          -1,
          82
        ],
        "'PARENAFTERBRACE": [
          -1,
          82
        ],
        "'ASK": [
          -1,
          82
        ],
        "'NEW": [
          -1,
          82
        ]
      },
      {
        "$": [
          -1,
          84
        ],
        "'NAME": [
          -1,
          84
        ],
        "'SEMI": [
          -1,
          84
        ],
        "'PARENNOSPACE": [
          -1,
          84
        ],
        "'STRING": [
          -1,
          84
        ],
        "'RPAREN": [
          -1,
          84
        ],
        "'RBRACE": [
          -1,
          84
        ],
        "'SPY": [
          -1,
          84
        ],
        "'PARENSPACE": [
          -1,
          84
        ],
        "'COMMA": [
          -1,
          84
        ],
        "'INT": [
          -1,
          84
        ],
        "'LONG": [
          -1,
          84
        ],
        "'DOUBLE": [
          -1,
          84
        ],
        "'FLOAT": [
          -1,
          84
        ],
        "'BOOLEAN": [
          -1,
          84
        ],
        "'VOID": [
          -1,
          84
        ],
        "'LT": [
          -1,
          84
        ],
        "'GT": [
          -1,
          84
        ],
        "'THINARROW": [
          -1,
          84
        ],
        "'DATA": [
          -1,
          84
        ],
        "'IF": [
          -1,
          84
        ],
        "'FOR": [
          -1,
          84
        ],
        "'RETURN": [
          -1,
          84
        ],
        "'VAR": [
          -1,
          84
        ],
        "'ATCHECK": [
          -1,
          84
        ],
        "'ASSERTEQUALS": [
          -1,
          84
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          84
        ],
        "'ASSERTTRUE": [
          -1,
          84
        ],
        "'ASSERTFALSE": [
          -1,
          84
        ],
        "'ASSERTSATISFIES": [
          -1,
          84
        ],
        "'ASSERTRAISES": [
          -1,
          84
        ],
        "'IS": [
          -1,
          84
        ],
        "'ISNOT": [
          -1,
          84
        ],
        "'SATISFIES": [
          -1,
          84
        ],
        "'RAISES": [
          -1,
          84
        ],
        "'SWITCH": [
          -1,
          84
        ],
        "'CASE": [
          -1,
          84
        ],
        "'DEFAULT": [
          -1,
          84
        ],
        "'YIELD": [
          -1,
          84
        ],
        "'PLUS": [
          -1,
          84
        ],
        "'DASH": [
          -1,
          84
        ],
        "'TIMES": [
          -1,
          84
        ],
        "'SLASH": [
          -1,
          84
        ],
        "'PERCENT": [
          -1,
          84
        ],
        "'EQUALEQUAL": [
          -1,
          84
        ],
        "'NEQ": [
          -1,
          84
        ],
        "'LEQ": [
          -1,
          84
        ],
        "'GEQ": [
          -1,
          84
        ],
        "'AND": [
          -1,
          84
        ],
        "'OR": [
          -1,
          84
        ],
        "'BANG": [
          -1,
          84
        ],
        "'DOT": [
          -1,
          84
        ],
        "'LBRACK": [
          -1,
          84
        ],
        "'RBRACK": [
          -1,
          84
        ],
        "'NUMBER": [
          -1,
          84
        ],
        "'TRUE": [
          -1,
          84
        ],
        "'FALSE": [
          -1,
          84
        ],
        "'NULL": [
          -1,
          84
        ],
        "'PARENAFTERBRACE": [
          -1,
          84
        ],
        "'ASK": [
          -1,
          84
        ],
        "'NEW": [
          -1,
          84
        ]
      },
      {
        "$": [
          -1,
          86
        ],
        "'NAME": [
          -1,
          86
        ],
        "'SEMI": [
          -1,
          86
        ],
        "'PARENNOSPACE": [
          -1,
          86
        ],
        "'STRING": [
          -1,
          86
        ],
        "'RPAREN": [
          -1,
          86
        ],
        "'RBRACE": [
          -1,
          86
        ],
        "'SPY": [
          -1,
          86
        ],
        "'PARENSPACE": [
          -1,
          86
        ],
        "'COMMA": [
          -1,
          86
        ],
        "'INT": [
          -1,
          86
        ],
        "'LONG": [
          -1,
          86
        ],
        "'DOUBLE": [
          -1,
          86
        ],
        "'FLOAT": [
          -1,
          86
        ],
        "'BOOLEAN": [
          -1,
          86
        ],
        "'VOID": [
          -1,
          86
        ],
        "'LT": [
          -1,
          86
        ],
        "'GT": [
          -1,
          86
        ],
        "'THINARROW": [
          -1,
          86
        ],
        "'DATA": [
          -1,
          86
        ],
        "'IF": [
          -1,
          86
        ],
        "'FOR": [
          -1,
          86
        ],
        "'RETURN": [
          -1,
          86
        ],
        "'VAR": [
          -1,
          86
        ],
        "'ATCHECK": [
          -1,
          86
        ],
        "'ASSERTEQUALS": [
          -1,
          86
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          86
        ],
        "'ASSERTTRUE": [
          -1,
          86
        ],
        "'ASSERTFALSE": [
          -1,
          86
        ],
        "'ASSERTSATISFIES": [
          -1,
          86
        ],
        "'ASSERTRAISES": [
          -1,
          86
        ],
        "'IS": [
          -1,
          86
        ],
        "'ISNOT": [
          -1,
          86
        ],
        "'SATISFIES": [
          -1,
          86
        ],
        "'RAISES": [
          -1,
          86
        ],
        "'SWITCH": [
          -1,
          86
        ],
        "'CASE": [
          -1,
          86
        ],
        "'DEFAULT": [
          -1,
          86
        ],
        "'YIELD": [
          -1,
          86
        ],
        "'PLUS": [
          -1,
          86
        ],
        "'DASH": [
          -1,
          86
        ],
        "'TIMES": [
          -1,
          86
        ],
        "'SLASH": [
          -1,
          86
        ],
        "'PERCENT": [
          -1,
          86
        ],
        "'EQUALEQUAL": [
          -1,
          86
        ],
        "'NEQ": [
          -1,
          86
        ],
        "'LEQ": [
          -1,
          86
        ],
        "'GEQ": [
          -1,
          86
        ],
        "'AND": [
          -1,
          86
        ],
        "'OR": [
          -1,
          86
        ],
        "'BANG": [
          -1,
          86
        ],
        "'DOT": [
          -1,
          86
        ],
        "'LBRACK": [
          -1,
          86
        ],
        "'RBRACK": [
          -1,
          86
        ],
        "'NUMBER": [
          -1,
          86
        ],
        "'TRUE": [
          -1,
          86
        ],
        "'FALSE": [
          -1,
          86
        ],
        "'NULL": [
          -1,
          86
        ],
        "'PARENAFTERBRACE": [
          -1,
          86
        ],
        "'ASK": [
          -1,
          86
        ],
        "'NEW": [
          -1,
          86
        ]
      },
      {
        "$": [
          -1,
          88
        ],
        "'NAME": [
          -1,
          88
        ],
        "'SEMI": [
          -1,
          88
        ],
        "'PARENNOSPACE": [
          -1,
          88
        ],
        "'STRING": [
          -1,
          88
        ],
        "'RPAREN": [
          -1,
          88
        ],
        "'RBRACE": [
          -1,
          88
        ],
        "'SPY": [
          -1,
          88
        ],
        "'PARENSPACE": [
          -1,
          88
        ],
        "'COMMA": [
          -1,
          88
        ],
        "'INT": [
          -1,
          88
        ],
        "'LONG": [
          -1,
          88
        ],
        "'DOUBLE": [
          -1,
          88
        ],
        "'FLOAT": [
          -1,
          88
        ],
        "'BOOLEAN": [
          -1,
          88
        ],
        "'VOID": [
          -1,
          88
        ],
        "'LT": [
          -1,
          88
        ],
        "'GT": [
          -1,
          88
        ],
        "'THINARROW": [
          -1,
          88
        ],
        "'DATA": [
          -1,
          88
        ],
        "'IF": [
          -1,
          88
        ],
        "'FOR": [
          -1,
          88
        ],
        "'RETURN": [
          -1,
          88
        ],
        "'VAR": [
          -1,
          88
        ],
        "'ATCHECK": [
          -1,
          88
        ],
        "'ASSERTEQUALS": [
          -1,
          88
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          88
        ],
        "'ASSERTTRUE": [
          -1,
          88
        ],
        "'ASSERTFALSE": [
          -1,
          88
        ],
        "'ASSERTSATISFIES": [
          -1,
          88
        ],
        "'ASSERTRAISES": [
          -1,
          88
        ],
        "'IS": [
          -1,
          88
        ],
        "'ISNOT": [
          -1,
          88
        ],
        "'SATISFIES": [
          -1,
          88
        ],
        "'RAISES": [
          -1,
          88
        ],
        "'SWITCH": [
          -1,
          88
        ],
        "'CASE": [
          -1,
          88
        ],
        "'DEFAULT": [
          -1,
          88
        ],
        "'YIELD": [
          -1,
          88
        ],
        "'PLUS": [
          -1,
          88
        ],
        "'DASH": [
          -1,
          88
        ],
        "'TIMES": [
          -1,
          88
        ],
        "'SLASH": [
          -1,
          88
        ],
        "'PERCENT": [
          -1,
          88
        ],
        "'EQUALEQUAL": [
          -1,
          88
        ],
        "'NEQ": [
          -1,
          88
        ],
        "'LEQ": [
          -1,
          88
        ],
        "'GEQ": [
          -1,
          88
        ],
        "'AND": [
          -1,
          88
        ],
        "'OR": [
          -1,
          88
        ],
        "'BANG": [
          -1,
          88
        ],
        "'DOT": [
          -1,
          88
        ],
        "'LBRACK": [
          -1,
          88
        ],
        "'RBRACK": [
          -1,
          88
        ],
        "'NUMBER": [
          -1,
          88
        ],
        "'TRUE": [
          -1,
          88
        ],
        "'FALSE": [
          -1,
          88
        ],
        "'NULL": [
          -1,
          88
        ],
        "'PARENAFTERBRACE": [
          -1,
          88
        ],
        "'ASK": [
          -1,
          88
        ],
        "'NEW": [
          -1,
          88
        ]
      },
      {
        "$": [
          -1,
          90
        ],
        "'NAME": [
          -1,
          90
        ],
        "'SEMI": [
          -1,
          90
        ],
        "'PARENNOSPACE": [
          -1,
          90
        ],
        "'STRING": [
          -1,
          90
        ],
        "'RPAREN": [
          -1,
          90
        ],
        "'RBRACE": [
          -1,
          90
        ],
        "'SPY": [
          -1,
          90
        ],
        "'PARENSPACE": [
          -1,
          90
        ],
        "'COMMA": [
          -1,
          90
        ],
        "'INT": [
          -1,
          90
        ],
        "'LONG": [
          -1,
          90
        ],
        "'DOUBLE": [
          -1,
          90
        ],
        "'FLOAT": [
          -1,
          90
        ],
        "'BOOLEAN": [
          -1,
          90
        ],
        "'VOID": [
          -1,
          90
        ],
        "'LT": [
          -1,
          90
        ],
        "'GT": [
          -1,
          90
        ],
        "'THINARROW": [
          -1,
          90
        ],
        "'DATA": [
          -1,
          90
        ],
        "'IF": [
          -1,
          90
        ],
        "'FOR": [
          -1,
          90
        ],
        "'RETURN": [
          -1,
          90
        ],
        "'VAR": [
          -1,
          90
        ],
        "'ATCHECK": [
          -1,
          90
        ],
        "'ASSERTEQUALS": [
          -1,
          90
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          90
        ],
        "'ASSERTTRUE": [
          -1,
          90
        ],
        "'ASSERTFALSE": [
          -1,
          90
        ],
        "'ASSERTSATISFIES": [
          -1,
          90
        ],
        "'ASSERTRAISES": [
          -1,
          90
        ],
        "'IS": [
          -1,
          90
        ],
        "'ISNOT": [
          -1,
          90
        ],
        "'SATISFIES": [
          -1,
          90
        ],
        "'RAISES": [
          -1,
          90
        ],
        "'SWITCH": [
          -1,
          90
        ],
        "'CASE": [
          -1,
          90
        ],
        "'DEFAULT": [
          -1,
          90
        ],
        "'YIELD": [
          -1,
          90
        ],
        "'PLUS": [
          -1,
          90
        ],
        "'DASH": [
          -1,
          90
        ],
        "'TIMES": [
          -1,
          90
        ],
        "'SLASH": [
          -1,
          90
        ],
        "'PERCENT": [
          -1,
          90
        ],
        "'EQUALEQUAL": [
          -1,
          90
        ],
        "'NEQ": [
          -1,
          90
        ],
        "'LEQ": [
          -1,
          90
        ],
        "'GEQ": [
          -1,
          90
        ],
        "'AND": [
          -1,
          90
        ],
        "'OR": [
          -1,
          90
        ],
        "'BANG": [
          -1,
          90
        ],
        "'DOT": [
          -1,
          90
        ],
        "'LBRACK": [
          -1,
          90
        ],
        "'RBRACK": [
          -1,
          90
        ],
        "'NUMBER": [
          -1,
          90
        ],
        "'TRUE": [
          -1,
          90
        ],
        "'FALSE": [
          -1,
          90
        ],
        "'NULL": [
          -1,
          90
        ],
        "'PARENAFTERBRACE": [
          -1,
          90
        ],
        "'ASK": [
          -1,
          90
        ],
        "'NEW": [
          -1,
          90
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          97
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "$": [
          -1,
          92
        ],
        "'NAME": [
          -1,
          92
        ],
        "'SEMI": [
          -1,
          92
        ],
        "'PARENNOSPACE": [
          -1,
          92
        ],
        "'STRING": [
          -1,
          92
        ],
        "'RPAREN": [
          -1,
          92
        ],
        "'RBRACE": [
          -1,
          92
        ],
        "'SPY": [
          -1,
          92
        ],
        "'PARENSPACE": [
          -1,
          92
        ],
        "'COMMA": [
          -1,
          92
        ],
        "'INT": [
          -1,
          92
        ],
        "'LONG": [
          -1,
          92
        ],
        "'DOUBLE": [
          -1,
          92
        ],
        "'FLOAT": [
          -1,
          92
        ],
        "'BOOLEAN": [
          -1,
          92
        ],
        "'VOID": [
          -1,
          92
        ],
        "'LT": [
          -1,
          92
        ],
        "'GT": [
          -1,
          92
        ],
        "'THINARROW": [
          -1,
          92
        ],
        "'DATA": [
          -1,
          92
        ],
        "'IF": [
          -1,
          92
        ],
        "'FOR": [
          -1,
          92
        ],
        "'RETURN": [
          -1,
          92
        ],
        "'VAR": [
          -1,
          92
        ],
        "'ATCHECK": [
          -1,
          92
        ],
        "'ASSERTEQUALS": [
          -1,
          92
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          92
        ],
        "'ASSERTTRUE": [
          -1,
          92
        ],
        "'ASSERTFALSE": [
          -1,
          92
        ],
        "'ASSERTSATISFIES": [
          -1,
          92
        ],
        "'ASSERTRAISES": [
          -1,
          92
        ],
        "'IS": [
          -1,
          92
        ],
        "'ISNOT": [
          -1,
          92
        ],
        "'SATISFIES": [
          -1,
          92
        ],
        "'RAISES": [
          -1,
          92
        ],
        "'SWITCH": [
          -1,
          92
        ],
        "'CASE": [
          -1,
          92
        ],
        "'DEFAULT": [
          -1,
          92
        ],
        "'YIELD": [
          -1,
          92
        ],
        "'PLUS": [
          -1,
          92
        ],
        "'DASH": [
          -1,
          92
        ],
        "'TIMES": [
          -1,
          92
        ],
        "'SLASH": [
          -1,
          92
        ],
        "'PERCENT": [
          -1,
          92
        ],
        "'EQUALEQUAL": [
          -1,
          92
        ],
        "'NEQ": [
          -1,
          92
        ],
        "'LEQ": [
          -1,
          92
        ],
        "'GEQ": [
          -1,
          92
        ],
        "'AND": [
          -1,
          92
        ],
        "'OR": [
          -1,
          92
        ],
        "'BANG": [
          -1,
          92
        ],
        "'DOT": [
          -1,
          92
        ],
        "'LBRACK": [
          -1,
          92
        ],
        "'RBRACK": [
          -1,
          92
        ],
        "'NUMBER": [
          -1,
          92
        ],
        "'TRUE": [
          -1,
          92
        ],
        "'FALSE": [
          -1,
          92
        ],
        "'NULL": [
          -1,
          92
        ],
        "'PARENAFTERBRACE": [
          -1,
          92
        ],
        "'ASK": [
          -1,
          92
        ],
        "'NEW": [
          -1,
          92
        ]
      },
      {
        "$": [
          -1,
          94
        ],
        "'NAME": [
          -1,
          94
        ],
        "'SEMI": [
          -1,
          94
        ],
        "'PARENNOSPACE": [
          -1,
          94
        ],
        "'STRING": [
          -1,
          94
        ],
        "'RPAREN": [
          -1,
          94
        ],
        "'RBRACE": [
          -1,
          94
        ],
        "'SPY": [
          -1,
          94
        ],
        "'PARENSPACE": [
          -1,
          94
        ],
        "'COMMA": [
          -1,
          94
        ],
        "'INT": [
          -1,
          94
        ],
        "'LONG": [
          -1,
          94
        ],
        "'DOUBLE": [
          -1,
          94
        ],
        "'FLOAT": [
          -1,
          94
        ],
        "'BOOLEAN": [
          -1,
          94
        ],
        "'VOID": [
          -1,
          94
        ],
        "'LT": [
          -1,
          94
        ],
        "'GT": [
          -1,
          94
        ],
        "'THINARROW": [
          -1,
          94
        ],
        "'DATA": [
          -1,
          94
        ],
        "'IF": [
          -1,
          94
        ],
        "'FOR": [
          -1,
          94
        ],
        "'RETURN": [
          -1,
          94
        ],
        "'VAR": [
          -1,
          94
        ],
        "'ATCHECK": [
          -1,
          94
        ],
        "'ASSERTEQUALS": [
          -1,
          94
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          94
        ],
        "'ASSERTTRUE": [
          -1,
          94
        ],
        "'ASSERTFALSE": [
          -1,
          94
        ],
        "'ASSERTSATISFIES": [
          -1,
          94
        ],
        "'ASSERTRAISES": [
          -1,
          94
        ],
        "'IS": [
          -1,
          94
        ],
        "'ISNOT": [
          -1,
          94
        ],
        "'SATISFIES": [
          -1,
          94
        ],
        "'RAISES": [
          -1,
          94
        ],
        "'SWITCH": [
          -1,
          94
        ],
        "'CASE": [
          -1,
          94
        ],
        "'DEFAULT": [
          -1,
          94
        ],
        "'YIELD": [
          -1,
          94
        ],
        "'PLUS": [
          -1,
          94
        ],
        "'DASH": [
          -1,
          94
        ],
        "'TIMES": [
          -1,
          94
        ],
        "'SLASH": [
          -1,
          94
        ],
        "'PERCENT": [
          -1,
          94
        ],
        "'EQUALEQUAL": [
          -1,
          94
        ],
        "'NEQ": [
          -1,
          94
        ],
        "'LEQ": [
          -1,
          94
        ],
        "'GEQ": [
          -1,
          94
        ],
        "'AND": [
          -1,
          94
        ],
        "'OR": [
          -1,
          94
        ],
        "'BANG": [
          -1,
          94
        ],
        "'DOT": [
          -1,
          94
        ],
        "'LBRACK": [
          -1,
          94
        ],
        "'RBRACK": [
          -1,
          94
        ],
        "'NUMBER": [
          -1,
          94
        ],
        "'TRUE": [
          -1,
          94
        ],
        "'FALSE": [
          -1,
          94
        ],
        "'NULL": [
          -1,
          94
        ],
        "'PARENAFTERBRACE": [
          -1,
          94
        ],
        "'ASK": [
          -1,
          94
        ],
        "'NEW": [
          -1,
          94
        ]
      },
      {
        "$": [
          -1,
          96
        ],
        "'NAME": [
          -1,
          96
        ],
        "'SEMI": [
          -1,
          96
        ],
        "'PARENNOSPACE": [
          -1,
          96
        ],
        "'STRING": [
          -1,
          96
        ],
        "'RPAREN": [
          -1,
          96
        ],
        "'RBRACE": [
          -1,
          96
        ],
        "'SPY": [
          -1,
          96
        ],
        "'PARENSPACE": [
          -1,
          96
        ],
        "'COMMA": [
          -1,
          96
        ],
        "'INT": [
          -1,
          96
        ],
        "'LONG": [
          -1,
          96
        ],
        "'DOUBLE": [
          -1,
          96
        ],
        "'FLOAT": [
          -1,
          96
        ],
        "'BOOLEAN": [
          -1,
          96
        ],
        "'VOID": [
          -1,
          96
        ],
        "'LT": [
          -1,
          96
        ],
        "'GT": [
          -1,
          96
        ],
        "'THINARROW": [
          -1,
          96
        ],
        "'DATA": [
          -1,
          96
        ],
        "'IF": [
          -1,
          96
        ],
        "'FOR": [
          -1,
          96
        ],
        "'RETURN": [
          -1,
          96
        ],
        "'VAR": [
          -1,
          96
        ],
        "'ATCHECK": [
          -1,
          96
        ],
        "'ASSERTEQUALS": [
          -1,
          96
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          96
        ],
        "'ASSERTTRUE": [
          -1,
          96
        ],
        "'ASSERTFALSE": [
          -1,
          96
        ],
        "'ASSERTSATISFIES": [
          -1,
          96
        ],
        "'ASSERTRAISES": [
          -1,
          96
        ],
        "'IS": [
          -1,
          96
        ],
        "'ISNOT": [
          -1,
          96
        ],
        "'SATISFIES": [
          -1,
          96
        ],
        "'RAISES": [
          -1,
          96
        ],
        "'SWITCH": [
          -1,
          96
        ],
        "'CASE": [
          -1,
          96
        ],
        "'DEFAULT": [
          -1,
          96
        ],
        "'YIELD": [
          -1,
          96
        ],
        "'PLUS": [
          -1,
          96
        ],
        "'DASH": [
          -1,
          96
        ],
        "'TIMES": [
          -1,
          96
        ],
        "'SLASH": [
          -1,
          96
        ],
        "'PERCENT": [
          -1,
          96
        ],
        "'EQUALEQUAL": [
          -1,
          96
        ],
        "'NEQ": [
          -1,
          96
        ],
        "'LEQ": [
          -1,
          96
        ],
        "'GEQ": [
          -1,
          96
        ],
        "'AND": [
          -1,
          96
        ],
        "'OR": [
          -1,
          96
        ],
        "'BANG": [
          -1,
          96
        ],
        "'DOT": [
          -1,
          96
        ],
        "'LBRACK": [
          -1,
          96
        ],
        "'RBRACK": [
          -1,
          96
        ],
        "'NUMBER": [
          -1,
          96
        ],
        "'TRUE": [
          -1,
          96
        ],
        "'FALSE": [
          -1,
          96
        ],
        "'NULL": [
          -1,
          96
        ],
        "'PARENAFTERBRACE": [
          -1,
          96
        ],
        "'ASK": [
          -1,
          96
        ],
        "'NEW": [
          -1,
          96
        ]
      },
      {
        "$": [
          -1,
          98
        ],
        "'NAME": [
          -1,
          98
        ],
        "'SEMI": [
          -1,
          98
        ],
        "'PARENNOSPACE": [
          -1,
          98
        ],
        "'STRING": [
          -1,
          98
        ],
        "'RPAREN": [
          -1,
          98
        ],
        "'RBRACE": [
          -1,
          98
        ],
        "'SPY": [
          -1,
          98
        ],
        "'PARENSPACE": [
          -1,
          98
        ],
        "'COMMA": [
          -1,
          98
        ],
        "'INT": [
          -1,
          98
        ],
        "'LONG": [
          -1,
          98
        ],
        "'DOUBLE": [
          -1,
          98
        ],
        "'FLOAT": [
          -1,
          98
        ],
        "'BOOLEAN": [
          -1,
          98
        ],
        "'VOID": [
          -1,
          98
        ],
        "'LT": [
          -1,
          98
        ],
        "'GT": [
          -1,
          98
        ],
        "'THINARROW": [
          -1,
          98
        ],
        "'DATA": [
          -1,
          98
        ],
        "'IF": [
          -1,
          98
        ],
        "'FOR": [
          -1,
          98
        ],
        "'RETURN": [
          -1,
          98
        ],
        "'VAR": [
          -1,
          98
        ],
        "'ATCHECK": [
          -1,
          98
        ],
        "'ASSERTEQUALS": [
          -1,
          98
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          98
        ],
        "'ASSERTTRUE": [
          -1,
          98
        ],
        "'ASSERTFALSE": [
          -1,
          98
        ],
        "'ASSERTSATISFIES": [
          -1,
          98
        ],
        "'ASSERTRAISES": [
          -1,
          98
        ],
        "'IS": [
          -1,
          98
        ],
        "'ISNOT": [
          -1,
          98
        ],
        "'SATISFIES": [
          -1,
          98
        ],
        "'RAISES": [
          -1,
          98
        ],
        "'SWITCH": [
          -1,
          98
        ],
        "'CASE": [
          -1,
          98
        ],
        "'DEFAULT": [
          -1,
          98
        ],
        "'YIELD": [
          -1,
          98
        ],
        "'PLUS": [
          -1,
          98
        ],
        "'DASH": [
          -1,
          98
        ],
        "'TIMES": [
          -1,
          98
        ],
        "'SLASH": [
          -1,
          98
        ],
        "'PERCENT": [
          -1,
          98
        ],
        "'EQUALEQUAL": [
          -1,
          98
        ],
        "'NEQ": [
          -1,
          98
        ],
        "'LEQ": [
          -1,
          98
        ],
        "'GEQ": [
          -1,
          98
        ],
        "'AND": [
          -1,
          98
        ],
        "'OR": [
          -1,
          98
        ],
        "'BANG": [
          -1,
          98
        ],
        "'DOT": [
          -1,
          98
        ],
        "'LBRACK": [
          -1,
          98
        ],
        "'RBRACK": [
          -1,
          98
        ],
        "'NUMBER": [
          -1,
          98
        ],
        "'TRUE": [
          -1,
          98
        ],
        "'FALSE": [
          -1,
          98
        ],
        "'NULL": [
          -1,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          98
        ],
        "'ASK": [
          -1,
          98
        ],
        "'NEW": [
          -1,
          98
        ]
      },
      {
        "'LBRACE": [
          98
        ]
      },
      {
        "'NAME": [
          99
        ]
      },
      {
        "'SEMI": [
          100
        ],
        "'AS": [
          101
        ],
        "'PARENNOSPACE": [
          102
        ]
      },
      {
        "'SEMI": [
          103
        ],
        "'AS": [
          104
        ],
        "'PARENNOSPACE": [
          105
        ]
      },
      {
        "'NAME": [
          -1,
          100
        ],
        "'RPAREN": [
          -1,
          100
        ],
        "'COMMA": [
          -1,
          100
        ],
        "'GT": [
          -1,
          100
        ],
        "'THINARROW": [
          -1,
          100
        ]
      },
      {
        "'NAME": [
          -1,
          102
        ],
        "'RPAREN": [
          -1,
          102
        ],
        "'COMMA": [
          -1,
          102
        ],
        "'GT": [
          -1,
          102
        ],
        "'THINARROW": [
          -1,
          102
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          106
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          108
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "type-ann_A6_I1?": [
          57
        ],
        "type-ann_A6_I1": [
          58
        ],
        "'LT": [
          59
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          104
        ],
        "'COMMA": [
          -1,
          104
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          109
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "type-ann_A7_I1?": [
          70
        ],
        "type-ann_A7_I1": [
          71
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          110
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          111
        ],
        "'RPAREN": [
          -1,
          106,
          108
        ],
        "'COMMA": [
          -1,
          108
        ]
      },
      {
        "'RPAREN": [
          112
        ]
      },
      {
        "'RPAREN": [
          -1,
          110
        ]
      },
      {
        "type-ann_A6_I1?": [
          57
        ],
        "type-ann_A6_I1": [
          58
        ],
        "'LT": [
          59,
          22
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          104,
          22
        ],
        "'COMMA": [
          -1,
          24,
          104,
          26
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          113
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          109
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "type-ann_A7_I1?": [
          70
        ],
        "type-ann_A7_I1": [
          71
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          75
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          110
        ],
        "type-ann_A7_I1_I1*": [
          114
        ],
        "'COMMA": [
          -1,
          112
        ],
        "'THINARROW": [
          -1,
          114,
          112
        ]
      },
      {
        "'THINARROW": [
          115
        ]
      },
      {
        "'THINARROW": [
          -1,
          116
        ]
      },
      {
        "'RPAREN": [
          116
        ]
      },
      {
        "'RPAREN": [
          -1,
          118
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          117
        ],
        "'RPAREN": [
          -1,
          120,
          122
        ],
        "'COMMA": [
          -1,
          122
        ]
      },
      {
        "'RPAREN": [
          118
        ]
      },
      {
        "'PARENNOSPACE": [
          119
        ],
        "'EQUALS": [
          120
        ]
      },
      {
        "'LBRACE": [
          121
        ]
      },
      {
        "$": [
          -1,
          124
        ],
        "'NAME": [
          -1,
          124
        ],
        "'PARENNOSPACE": [
          -1,
          124
        ],
        "'STRING": [
          -1,
          124
        ],
        "'RBRACE": [
          -1,
          124
        ],
        "'SPY": [
          -1,
          124
        ],
        "'PARENSPACE": [
          -1,
          124
        ],
        "'INT": [
          -1,
          124
        ],
        "'LONG": [
          -1,
          124
        ],
        "'DOUBLE": [
          -1,
          124
        ],
        "'FLOAT": [
          -1,
          124
        ],
        "'BOOLEAN": [
          -1,
          124
        ],
        "'VOID": [
          -1,
          124
        ],
        "'DATA": [
          -1,
          124
        ],
        "'IF": [
          -1,
          124
        ],
        "'FOR": [
          -1,
          124
        ],
        "'RETURN": [
          -1,
          124
        ],
        "'VAR": [
          -1,
          124
        ],
        "'ATCHECK": [
          -1,
          124
        ],
        "'ASSERTEQUALS": [
          -1,
          124
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          124
        ],
        "'ASSERTTRUE": [
          -1,
          124
        ],
        "'ASSERTFALSE": [
          -1,
          124
        ],
        "'ASSERTSATISFIES": [
          -1,
          124
        ],
        "'ASSERTRAISES": [
          -1,
          124
        ],
        "'SWITCH": [
          -1,
          124
        ],
        "'YIELD": [
          -1,
          124
        ],
        "'DASH": [
          -1,
          124
        ],
        "'BANG": [
          -1,
          124
        ],
        "'LBRACK": [
          -1,
          124
        ],
        "'NUMBER": [
          -1,
          124
        ],
        "'TRUE": [
          -1,
          124
        ],
        "'FALSE": [
          -1,
          124
        ],
        "'NULL": [
          -1,
          124
        ],
        "'PARENAFTERBRACE": [
          -1,
          124
        ],
        "'ASK": [
          -1,
          124
        ],
        "'NEW": [
          -1,
          124
        ]
      },
      {
        "$": [
          -1,
          126
        ],
        "'NAME": [
          -1,
          126
        ],
        "'PARENNOSPACE": [
          -1,
          126
        ],
        "'STRING": [
          -1,
          126
        ],
        "'RBRACE": [
          -1,
          126
        ],
        "'SPY": [
          -1,
          126
        ],
        "'PARENSPACE": [
          -1,
          126
        ],
        "'INT": [
          -1,
          126
        ],
        "'LONG": [
          -1,
          126
        ],
        "'DOUBLE": [
          -1,
          126
        ],
        "'FLOAT": [
          -1,
          126
        ],
        "'BOOLEAN": [
          -1,
          126
        ],
        "'VOID": [
          -1,
          126
        ],
        "'DATA": [
          -1,
          126
        ],
        "'IF": [
          -1,
          126
        ],
        "'FOR": [
          -1,
          126
        ],
        "'RETURN": [
          -1,
          126
        ],
        "'VAR": [
          -1,
          126
        ],
        "'ATCHECK": [
          -1,
          126
        ],
        "'ASSERTEQUALS": [
          -1,
          126
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          126
        ],
        "'ASSERTTRUE": [
          -1,
          126
        ],
        "'ASSERTFALSE": [
          -1,
          126
        ],
        "'ASSERTSATISFIES": [
          -1,
          126
        ],
        "'ASSERTRAISES": [
          -1,
          126
        ],
        "'SWITCH": [
          -1,
          126
        ],
        "'YIELD": [
          -1,
          126
        ],
        "'DASH": [
          -1,
          126
        ],
        "'BANG": [
          -1,
          126
        ],
        "'LBRACK": [
          -1,
          126
        ],
        "'NUMBER": [
          -1,
          126
        ],
        "'TRUE": [
          -1,
          126
        ],
        "'FALSE": [
          -1,
          126
        ],
        "'NULL": [
          -1,
          126
        ],
        "'PARENAFTERBRACE": [
          -1,
          126
        ],
        "'ASK": [
          -1,
          126
        ],
        "'NEW": [
          -1,
          126
        ]
      },
      {
        "$": [
          -1,
          128
        ],
        "'NAME": [
          -1,
          128
        ],
        "'PARENNOSPACE": [
          -1,
          128
        ],
        "'STRING": [
          -1,
          128
        ],
        "'RBRACE": [
          -1,
          128
        ],
        "'SPY": [
          -1,
          128
        ],
        "'PARENSPACE": [
          -1,
          128
        ],
        "'INT": [
          -1,
          128
        ],
        "'LONG": [
          -1,
          128
        ],
        "'DOUBLE": [
          -1,
          128
        ],
        "'FLOAT": [
          -1,
          128
        ],
        "'BOOLEAN": [
          -1,
          128
        ],
        "'VOID": [
          -1,
          128
        ],
        "'DATA": [
          -1,
          128
        ],
        "'IF": [
          -1,
          128
        ],
        "'FOR": [
          -1,
          128
        ],
        "'RETURN": [
          -1,
          128
        ],
        "'VAR": [
          -1,
          128
        ],
        "'ATCHECK": [
          -1,
          128
        ],
        "'ASSERTEQUALS": [
          -1,
          128
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          128
        ],
        "'ASSERTTRUE": [
          -1,
          128
        ],
        "'ASSERTFALSE": [
          -1,
          128
        ],
        "'ASSERTSATISFIES": [
          -1,
          128
        ],
        "'ASSERTRAISES": [
          -1,
          128
        ],
        "'SWITCH": [
          -1,
          128
        ],
        "'YIELD": [
          -1,
          128
        ],
        "'DASH": [
          -1,
          128
        ],
        "'BANG": [
          -1,
          128
        ],
        "'LBRACK": [
          -1,
          128
        ],
        "'NUMBER": [
          -1,
          128
        ],
        "'TRUE": [
          -1,
          128
        ],
        "'FALSE": [
          -1,
          128
        ],
        "'NULL": [
          -1,
          128
        ],
        "'PARENAFTERBRACE": [
          -1,
          128
        ],
        "'ASK": [
          -1,
          128
        ],
        "'NEW": [
          -1,
          128
        ]
      },
      {
        "type-ann_A6_I1?": [
          57
        ],
        "type-ann_A6_I1": [
          58
        ],
        "'LT": [
          59
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          24,
          26
        ],
        "'COMMA": [
          -1,
          24,
          26
        ],
        "'GT": [
          -1,
          24,
          26
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ]
      },
      {
        "'NAME": [
          122
        ]
      },
      {
        "check-block_A1_I2*": [
          123
        ],
        "'NAME": [
          -1,
          130
        ],
        "'PARENNOSPACE": [
          -1,
          130
        ],
        "'STRING": [
          -1,
          130
        ],
        "'RBRACE": [
          -1,
          130
        ],
        "'SPY": [
          -1,
          130
        ],
        "'PARENSPACE": [
          -1,
          130
        ],
        "'INT": [
          -1,
          130
        ],
        "'LONG": [
          -1,
          130
        ],
        "'DOUBLE": [
          -1,
          130
        ],
        "'FLOAT": [
          -1,
          130
        ],
        "'BOOLEAN": [
          -1,
          130
        ],
        "'VOID": [
          -1,
          130
        ],
        "'DATA": [
          -1,
          130
        ],
        "'IF": [
          -1,
          130
        ],
        "'FOR": [
          -1,
          130
        ],
        "'RETURN": [
          -1,
          130
        ],
        "'VAR": [
          -1,
          130
        ],
        "'ATCHECK": [
          -1,
          130
        ],
        "'ASSERTEQUALS": [
          -1,
          130
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          130
        ],
        "'ASSERTTRUE": [
          -1,
          130
        ],
        "'ASSERTFALSE": [
          -1,
          130
        ],
        "'ASSERTSATISFIES": [
          -1,
          130
        ],
        "'ASSERTRAISES": [
          -1,
          130
        ],
        "'SWITCH": [
          -1,
          130
        ],
        "'YIELD": [
          -1,
          130
        ],
        "'DASH": [
          -1,
          130
        ],
        "'BANG": [
          -1,
          130
        ],
        "'LBRACK": [
          -1,
          130
        ],
        "'NUMBER": [
          -1,
          130
        ],
        "'TRUE": [
          -1,
          130
        ],
        "'FALSE": [
          -1,
          130
        ],
        "'NULL": [
          -1,
          130
        ],
        "'PARENAFTERBRACE": [
          -1,
          130
        ],
        "'ASK": [
          -1,
          130
        ],
        "'NEW": [
          -1,
          130
        ]
      },
      {
        "'NAME": [
          124
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          125
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'LT": [
          126
        ],
        "'GT": [
          127
        ],
        "binop-expr_I1": [
          128
        ],
        "binop": [
          129
        ],
        "'PLUS": [
          130
        ],
        "'DASH": [
          131,
          132
        ],
        "'TIMES": [
          132
        ],
        "'SLASH": [
          133
        ],
        "'PERCENT": [
          134
        ],
        "'EQUALEQUAL": [
          135
        ],
        "'NEQ": [
          136
        ],
        "'LEQ": [
          137
        ],
        "'GEQ": [
          138
        ],
        "'AND": [
          139
        ],
        "'OR": [
          140
        ],
        "$": [
          -1,
          132
        ],
        "'NAME": [
          -1,
          132
        ],
        "'SEMI": [
          -1,
          132
        ],
        "'PARENNOSPACE": [
          -1,
          132
        ],
        "'STRING": [
          -1,
          132
        ],
        "'RPAREN": [
          -1,
          132
        ],
        "'RBRACE": [
          -1,
          132
        ],
        "'SPY": [
          -1,
          132
        ],
        "'PARENSPACE": [
          -1,
          132
        ],
        "'COMMA": [
          -1,
          132
        ],
        "'INT": [
          -1,
          132
        ],
        "'LONG": [
          -1,
          132
        ],
        "'DOUBLE": [
          -1,
          132
        ],
        "'FLOAT": [
          -1,
          132
        ],
        "'BOOLEAN": [
          -1,
          132
        ],
        "'VOID": [
          -1,
          132
        ],
        "'THINARROW": [
          -1,
          132
        ],
        "'DATA": [
          -1,
          132
        ],
        "'IF": [
          -1,
          132
        ],
        "'FOR": [
          -1,
          132
        ],
        "'RETURN": [
          -1,
          132
        ],
        "'VAR": [
          -1,
          132
        ],
        "'ATCHECK": [
          -1,
          132
        ],
        "'ASSERTEQUALS": [
          -1,
          132
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          132
        ],
        "'ASSERTTRUE": [
          -1,
          132
        ],
        "'ASSERTFALSE": [
          -1,
          132
        ],
        "'ASSERTSATISFIES": [
          -1,
          132
        ],
        "'ASSERTRAISES": [
          -1,
          132
        ],
        "'IS": [
          -1,
          132
        ],
        "'ISNOT": [
          -1,
          132
        ],
        "'SATISFIES": [
          -1,
          132
        ],
        "'RAISES": [
          -1,
          132
        ],
        "'SWITCH": [
          -1,
          132
        ],
        "'CASE": [
          -1,
          132
        ],
        "'DEFAULT": [
          -1,
          132
        ],
        "'YIELD": [
          -1,
          132
        ],
        "'BANG": [
          -1,
          132
        ],
        "'LBRACK": [
          -1,
          132
        ],
        "'RBRACK": [
          -1,
          132
        ],
        "'NUMBER": [
          -1,
          132
        ],
        "'TRUE": [
          -1,
          132
        ],
        "'FALSE": [
          -1,
          132
        ],
        "'NULL": [
          -1,
          132
        ],
        "'PARENAFTERBRACE": [
          -1,
          132
        ],
        "'ASK": [
          -1,
          132
        ],
        "'NEW": [
          -1,
          132
        ]
      },
      {
        "$": [
          -1,
          22
        ],
        "'NAME": [
          -1,
          22
        ],
        "'SEMI": [
          -1,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'STRING": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          22
        ],
        "'RBRACE": [
          -1,
          22
        ],
        "'SPY": [
          -1,
          22
        ],
        "'PARENSPACE": [
          -1,
          22
        ],
        "'COMMA": [
          -1,
          22
        ],
        "'INT": [
          -1,
          22
        ],
        "'LONG": [
          -1,
          22
        ],
        "'DOUBLE": [
          -1,
          22
        ],
        "'FLOAT": [
          -1,
          22
        ],
        "'BOOLEAN": [
          -1,
          22
        ],
        "'VOID": [
          -1,
          22
        ],
        "'LT": [
          -1,
          22
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          22
        ],
        "'DATA": [
          -1,
          22
        ],
        "'IF": [
          -1,
          22
        ],
        "'FOR": [
          -1,
          22
        ],
        "'RETURN": [
          -1,
          22
        ],
        "'VAR": [
          -1,
          22
        ],
        "'ATCHECK": [
          -1,
          22
        ],
        "'ASSERTEQUALS": [
          -1,
          22
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          22
        ],
        "'ASSERTTRUE": [
          -1,
          22
        ],
        "'ASSERTFALSE": [
          -1,
          22
        ],
        "'ASSERTSATISFIES": [
          -1,
          22
        ],
        "'ASSERTRAISES": [
          -1,
          22
        ],
        "'IS": [
          -1,
          22
        ],
        "'ISNOT": [
          -1,
          22
        ],
        "'SATISFIES": [
          -1,
          22
        ],
        "'RAISES": [
          -1,
          22
        ],
        "'SWITCH": [
          -1,
          22
        ],
        "'CASE": [
          -1,
          22
        ],
        "'DEFAULT": [
          -1,
          22
        ],
        "'YIELD": [
          -1,
          22
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'BANG": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ],
        "'RBRACK": [
          -1,
          22
        ],
        "'NUMBER": [
          -1,
          22
        ],
        "'TRUE": [
          -1,
          22
        ],
        "'FALSE": [
          -1,
          22
        ],
        "'NULL": [
          -1,
          22
        ],
        "'PARENAFTERBRACE": [
          -1,
          22
        ],
        "'ASK": [
          -1,
          22
        ],
        "'NEW": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          75
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "$": [
          -1,
          134
        ],
        "'NAME": [
          -1,
          134
        ],
        "'SEMI": [
          -1,
          134
        ],
        "'PARENNOSPACE": [
          -1,
          134
        ],
        "'STRING": [
          -1,
          134
        ],
        "'RPAREN": [
          -1,
          134
        ],
        "'RBRACE": [
          -1,
          134
        ],
        "'SPY": [
          -1,
          134
        ],
        "'PARENSPACE": [
          -1,
          134
        ],
        "'COMMA": [
          -1,
          134
        ],
        "'INT": [
          -1,
          134
        ],
        "'LONG": [
          -1,
          134
        ],
        "'DOUBLE": [
          -1,
          134
        ],
        "'FLOAT": [
          -1,
          134
        ],
        "'BOOLEAN": [
          -1,
          134
        ],
        "'VOID": [
          -1,
          134
        ],
        "'LT": [
          -1,
          134
        ],
        "'GT": [
          -1,
          134
        ],
        "'THINARROW": [
          -1,
          134
        ],
        "'DATA": [
          -1,
          134
        ],
        "'IF": [
          -1,
          134
        ],
        "'FOR": [
          -1,
          134
        ],
        "'RETURN": [
          -1,
          134
        ],
        "'VAR": [
          -1,
          134
        ],
        "'ATCHECK": [
          -1,
          134
        ],
        "'ASSERTEQUALS": [
          -1,
          134
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          134
        ],
        "'ASSERTTRUE": [
          -1,
          134
        ],
        "'ASSERTFALSE": [
          -1,
          134
        ],
        "'ASSERTSATISFIES": [
          -1,
          134
        ],
        "'ASSERTRAISES": [
          -1,
          134
        ],
        "'IS": [
          -1,
          134
        ],
        "'ISNOT": [
          -1,
          134
        ],
        "'SATISFIES": [
          -1,
          134
        ],
        "'RAISES": [
          -1,
          134
        ],
        "'SWITCH": [
          -1,
          134
        ],
        "'CASE": [
          -1,
          134
        ],
        "'DEFAULT": [
          -1,
          134
        ],
        "'YIELD": [
          -1,
          134
        ],
        "'PLUS": [
          -1,
          134
        ],
        "'DASH": [
          -1,
          134
        ],
        "'TIMES": [
          -1,
          134
        ],
        "'SLASH": [
          -1,
          134
        ],
        "'PERCENT": [
          -1,
          134
        ],
        "'EQUALEQUAL": [
          -1,
          134
        ],
        "'NEQ": [
          -1,
          134
        ],
        "'LEQ": [
          -1,
          134
        ],
        "'GEQ": [
          -1,
          134
        ],
        "'AND": [
          -1,
          134
        ],
        "'OR": [
          -1,
          134
        ],
        "'BANG": [
          -1,
          134
        ],
        "'LBRACK": [
          -1,
          134
        ],
        "'RBRACK": [
          -1,
          134
        ],
        "'NUMBER": [
          -1,
          134
        ],
        "'TRUE": [
          -1,
          134
        ],
        "'FALSE": [
          -1,
          134
        ],
        "'NULL": [
          -1,
          134
        ],
        "'PARENAFTERBRACE": [
          -1,
          134
        ],
        "'ASK": [
          -1,
          134
        ],
        "'NEW": [
          -1,
          134
        ]
      },
      {
        "$": [
          -1,
          136
        ],
        "'NAME": [
          -1,
          136
        ],
        "'SEMI": [
          -1,
          136
        ],
        "'PARENNOSPACE": [
          -1,
          136
        ],
        "'STRING": [
          -1,
          136
        ],
        "'RPAREN": [
          -1,
          136
        ],
        "'RBRACE": [
          -1,
          136
        ],
        "'SPY": [
          -1,
          136
        ],
        "'PARENSPACE": [
          -1,
          136
        ],
        "'COMMA": [
          -1,
          136
        ],
        "'INT": [
          -1,
          136
        ],
        "'LONG": [
          -1,
          136
        ],
        "'DOUBLE": [
          -1,
          136
        ],
        "'FLOAT": [
          -1,
          136
        ],
        "'BOOLEAN": [
          -1,
          136
        ],
        "'VOID": [
          -1,
          136
        ],
        "'LT": [
          -1,
          136
        ],
        "'GT": [
          -1,
          136
        ],
        "'THINARROW": [
          -1,
          136
        ],
        "'DATA": [
          -1,
          136
        ],
        "'IF": [
          -1,
          136
        ],
        "'FOR": [
          -1,
          136
        ],
        "'RETURN": [
          -1,
          136
        ],
        "'VAR": [
          -1,
          136
        ],
        "'ATCHECK": [
          -1,
          136
        ],
        "'ASSERTEQUALS": [
          -1,
          136
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          136
        ],
        "'ASSERTTRUE": [
          -1,
          136
        ],
        "'ASSERTFALSE": [
          -1,
          136
        ],
        "'ASSERTSATISFIES": [
          -1,
          136
        ],
        "'ASSERTRAISES": [
          -1,
          136
        ],
        "'IS": [
          -1,
          136
        ],
        "'ISNOT": [
          -1,
          136
        ],
        "'SATISFIES": [
          -1,
          136
        ],
        "'RAISES": [
          -1,
          136
        ],
        "'SWITCH": [
          -1,
          136
        ],
        "'CASE": [
          -1,
          136
        ],
        "'DEFAULT": [
          -1,
          136
        ],
        "'YIELD": [
          -1,
          136
        ],
        "'PLUS": [
          -1,
          136
        ],
        "'DASH": [
          -1,
          136
        ],
        "'TIMES": [
          -1,
          136
        ],
        "'SLASH": [
          -1,
          136
        ],
        "'PERCENT": [
          -1,
          136
        ],
        "'EQUALEQUAL": [
          -1,
          136
        ],
        "'NEQ": [
          -1,
          136
        ],
        "'LEQ": [
          -1,
          136
        ],
        "'GEQ": [
          -1,
          136
        ],
        "'AND": [
          -1,
          136
        ],
        "'OR": [
          -1,
          136
        ],
        "'BANG": [
          -1,
          136
        ],
        "'LBRACK": [
          -1,
          136
        ],
        "'RBRACK": [
          -1,
          136
        ],
        "'NUMBER": [
          -1,
          136
        ],
        "'TRUE": [
          -1,
          136
        ],
        "'FALSE": [
          -1,
          136
        ],
        "'NULL": [
          -1,
          136
        ],
        "'PARENAFTERBRACE": [
          -1,
          136
        ],
        "'ASK": [
          -1,
          136
        ],
        "'NEW": [
          -1,
          136
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          141
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "app-or-access_A0_I2?": [
          142
        ],
        "app-or-access_A0_I2": [
          143
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "'RPAREN": [
          -1,
          138
        ]
      },
      {
        "'NAME": [
          144
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          145
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'COLON": [
          146
        ]
      },
      {
        "'PARENSPACE": [
          147
        ]
      },
      {
        "$": [
          -1,
          140
        ],
        "'NAME": [
          -1,
          140
        ],
        "'SEMI": [
          -1,
          140
        ],
        "'PARENNOSPACE": [
          -1,
          140
        ],
        "'STRING": [
          -1,
          140
        ],
        "'RPAREN": [
          -1,
          140
        ],
        "'RBRACE": [
          -1,
          140
        ],
        "'SPY": [
          -1,
          140
        ],
        "'PARENSPACE": [
          -1,
          140
        ],
        "'COMMA": [
          -1,
          140
        ],
        "'INT": [
          -1,
          140
        ],
        "'LONG": [
          -1,
          140
        ],
        "'DOUBLE": [
          -1,
          140
        ],
        "'FLOAT": [
          -1,
          140
        ],
        "'BOOLEAN": [
          -1,
          140
        ],
        "'VOID": [
          -1,
          140
        ],
        "'LT": [
          -1,
          140
        ],
        "'GT": [
          -1,
          140
        ],
        "'THINARROW": [
          -1,
          140
        ],
        "'DATA": [
          -1,
          140
        ],
        "'IF": [
          -1,
          140
        ],
        "'FOR": [
          -1,
          140
        ],
        "'RETURN": [
          -1,
          140
        ],
        "'VAR": [
          -1,
          140
        ],
        "'ATCHECK": [
          -1,
          140
        ],
        "'ASSERTEQUALS": [
          -1,
          140
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          140
        ],
        "'ASSERTTRUE": [
          -1,
          140
        ],
        "'ASSERTFALSE": [
          -1,
          140
        ],
        "'ASSERTSATISFIES": [
          -1,
          140
        ],
        "'ASSERTRAISES": [
          -1,
          140
        ],
        "'IS": [
          -1,
          140
        ],
        "'ISNOT": [
          -1,
          140
        ],
        "'SATISFIES": [
          -1,
          140
        ],
        "'RAISES": [
          -1,
          140
        ],
        "'SWITCH": [
          -1,
          140
        ],
        "'CASE": [
          -1,
          140
        ],
        "'DEFAULT": [
          -1,
          140
        ],
        "'YIELD": [
          -1,
          140
        ],
        "'PLUS": [
          -1,
          140
        ],
        "'DASH": [
          -1,
          140
        ],
        "'TIMES": [
          -1,
          140
        ],
        "'SLASH": [
          -1,
          140
        ],
        "'PERCENT": [
          -1,
          140
        ],
        "'EQUALEQUAL": [
          -1,
          140
        ],
        "'NEQ": [
          -1,
          140
        ],
        "'LEQ": [
          -1,
          140
        ],
        "'GEQ": [
          -1,
          140
        ],
        "'AND": [
          -1,
          140
        ],
        "'OR": [
          -1,
          140
        ],
        "'BANG": [
          -1,
          140
        ],
        "'DOT": [
          -1,
          140
        ],
        "'LBRACK": [
          -1,
          140
        ],
        "'RBRACK": [
          -1,
          140
        ],
        "'NUMBER": [
          -1,
          140
        ],
        "'TRUE": [
          -1,
          140
        ],
        "'FALSE": [
          -1,
          140
        ],
        "'NULL": [
          -1,
          140
        ],
        "'PARENAFTERBRACE": [
          -1,
          140
        ],
        "'ASK": [
          -1,
          140
        ],
        "'NEW": [
          -1,
          140
        ]
      },
      {
        "'RPAREN": [
          148
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          149
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "ask-branch": [
          150
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'PARENNOSPACE": [
          151
        ]
      },
      {
        "$": [
          -1,
          142
        ],
        "'IMPORT": [
          -1,
          142
        ],
        "'NAME": [
          -1,
          142
        ],
        "'PARENNOSPACE": [
          -1,
          142
        ],
        "'STRING": [
          -1,
          142
        ],
        "'INCLUDE": [
          -1,
          142
        ],
        "'PARENSPACE": [
          -1,
          142
        ],
        "'INT": [
          -1,
          142
        ],
        "'LONG": [
          -1,
          142
        ],
        "'DOUBLE": [
          -1,
          142
        ],
        "'FLOAT": [
          -1,
          142
        ],
        "'BOOLEAN": [
          -1,
          142
        ],
        "'VOID": [
          -1,
          142
        ],
        "'DATA": [
          -1,
          142
        ],
        "'VAR": [
          -1,
          142
        ],
        "'ATCHECK": [
          -1,
          142
        ],
        "'SWITCH": [
          -1,
          142
        ],
        "'DASH": [
          -1,
          142
        ],
        "'BANG": [
          -1,
          142
        ],
        "'LBRACK": [
          -1,
          142
        ],
        "'NUMBER": [
          -1,
          142
        ],
        "'TRUE": [
          -1,
          142
        ],
        "'FALSE": [
          -1,
          142
        ],
        "'NULL": [
          -1,
          142
        ],
        "'PARENAFTERBRACE": [
          -1,
          142
        ],
        "'ASK": [
          -1,
          142
        ],
        "'NEW": [
          -1,
          142
        ]
      },
      {
        "'NAME": [
          152
        ]
      },
      {
        "'STRING": [
          153
        ]
      },
      {
        "$": [
          -1,
          144
        ],
        "'IMPORT": [
          -1,
          144
        ],
        "'NAME": [
          -1,
          144
        ],
        "'PARENNOSPACE": [
          -1,
          144
        ],
        "'STRING": [
          -1,
          144
        ],
        "'INCLUDE": [
          -1,
          144
        ],
        "'PARENSPACE": [
          -1,
          144
        ],
        "'INT": [
          -1,
          144
        ],
        "'LONG": [
          -1,
          144
        ],
        "'DOUBLE": [
          -1,
          144
        ],
        "'FLOAT": [
          -1,
          144
        ],
        "'BOOLEAN": [
          -1,
          144
        ],
        "'VOID": [
          -1,
          144
        ],
        "'DATA": [
          -1,
          144
        ],
        "'VAR": [
          -1,
          144
        ],
        "'ATCHECK": [
          -1,
          144
        ],
        "'SWITCH": [
          -1,
          144
        ],
        "'DASH": [
          -1,
          144
        ],
        "'BANG": [
          -1,
          144
        ],
        "'LBRACK": [
          -1,
          144
        ],
        "'NUMBER": [
          -1,
          144
        ],
        "'TRUE": [
          -1,
          144
        ],
        "'FALSE": [
          -1,
          144
        ],
        "'NULL": [
          -1,
          144
        ],
        "'PARENAFTERBRACE": [
          -1,
          144
        ],
        "'ASK": [
          -1,
          144
        ],
        "'NEW": [
          -1,
          144
        ]
      },
      {
        "'NAME": [
          154
        ]
      },
      {
        "'STRING": [
          155
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          156
        ],
        "'COMMA": [
          -1,
          146
        ],
        "'GT": [
          -1,
          146
        ]
      },
      {
        "'NAME": [
          67
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          63
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr_A0_I1?": [
          72
        ],
        "lambda-expr_A0_I1": [
          73
        ],
        "lambda-param": [
          74
        ],
        "binop-expr": [
          75
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "'RPAREN": [
          -1,
          50
        ]
      },
      {
        "'SEMI": [
          157
        ],
        "assign-stmt_I3?": [
          158
        ],
        "assign-stmt_I3": [
          159
        ],
        "$": [
          -1,
          148,
          150
        ],
        "'NAME": [
          -1,
          148,
          150
        ],
        "'PARENNOSPACE": [
          -1,
          148,
          150
        ],
        "'STRING": [
          -1,
          148,
          150
        ],
        "'RBRACE": [
          -1,
          148,
          150
        ],
        "'SPY": [
          -1,
          148,
          150
        ],
        "'PARENSPACE": [
          -1,
          148,
          150
        ],
        "'INT": [
          -1,
          148,
          150
        ],
        "'LONG": [
          -1,
          148,
          150
        ],
        "'DOUBLE": [
          -1,
          148,
          150
        ],
        "'FLOAT": [
          -1,
          148,
          150
        ],
        "'BOOLEAN": [
          -1,
          148,
          150
        ],
        "'VOID": [
          -1,
          148,
          150
        ],
        "'DATA": [
          -1,
          148,
          150
        ],
        "'IF": [
          -1,
          148,
          150
        ],
        "'FOR": [
          -1,
          148,
          150
        ],
        "'RETURN": [
          -1,
          148,
          150
        ],
        "'VAR": [
          -1,
          148,
          150
        ],
        "'ATCHECK": [
          -1,
          148,
          150
        ],
        "'ASSERTEQUALS": [
          -1,
          148,
          150
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          148,
          150
        ],
        "'ASSERTTRUE": [
          -1,
          148,
          150
        ],
        "'ASSERTFALSE": [
          -1,
          148,
          150
        ],
        "'ASSERTSATISFIES": [
          -1,
          148,
          150
        ],
        "'ASSERTRAISES": [
          -1,
          148,
          150
        ],
        "'SWITCH": [
          -1,
          148,
          150
        ],
        "'YIELD": [
          -1,
          148,
          150
        ],
        "'DASH": [
          -1,
          148,
          150
        ],
        "'BANG": [
          -1,
          148,
          150
        ],
        "'LBRACK": [
          -1,
          148,
          150
        ],
        "'NUMBER": [
          -1,
          148,
          150
        ],
        "'TRUE": [
          -1,
          148,
          150
        ],
        "'FALSE": [
          -1,
          148,
          150
        ],
        "'NULL": [
          -1,
          148,
          150
        ],
        "'PARENAFTERBRACE": [
          -1,
          148,
          150
        ],
        "'ASK": [
          -1,
          148,
          150
        ],
        "'NEW": [
          -1,
          148,
          150
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          114
        ],
        "'COMMA": [
          -1,
          112
        ],
        "'THINARROW": [
          -1,
          114,
          112
        ]
      },
      {
        "'RPAREN": [
          -1,
          152
        ],
        "'COMMA": [
          -1,
          152
        ]
      },
      {
        "'COMMA": [
          160
        ],
        "lambda-expr_A1_I1_I1": [
          161
        ],
        "'RPAREN": [
          -1,
          154
        ]
      },
      {
        "'THINARROW": [
          162
        ]
      },
      {
        "type-ann_A6_I1?": [
          57
        ],
        "type-ann_A6_I1": [
          58
        ],
        "'LT": [
          59,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          22
        ],
        "'COMMA": [
          -1,
          24,
          26
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ]
      },
      {
        "'COMMA": [
          163
        ],
        "type-ann_A7_I1_I1": [
          164
        ],
        "'THINARROW": [
          -1,
          156
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          165
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'THINARROW": [
          166
        ]
      },
      {
        "'COMMA": [
          167
        ],
        "lambda-expr_A0_I1_I1": [
          168
        ],
        "'RPAREN": [
          -1,
          158
        ]
      },
      {
        "$": [
          -1,
          160
        ],
        "'NAME": [
          -1,
          160
        ],
        "'SEMI": [
          -1,
          160
        ],
        "'PARENNOSPACE": [
          -1,
          160
        ],
        "'STRING": [
          -1,
          160
        ],
        "'RPAREN": [
          -1,
          160
        ],
        "'RBRACE": [
          -1,
          160
        ],
        "'SPY": [
          -1,
          160
        ],
        "'PARENSPACE": [
          -1,
          160
        ],
        "'COMMA": [
          -1,
          160
        ],
        "'INT": [
          -1,
          160
        ],
        "'LONG": [
          -1,
          160
        ],
        "'DOUBLE": [
          -1,
          160
        ],
        "'FLOAT": [
          -1,
          160
        ],
        "'BOOLEAN": [
          -1,
          160
        ],
        "'VOID": [
          -1,
          160
        ],
        "'LT": [
          -1,
          160
        ],
        "'GT": [
          -1,
          160
        ],
        "'THINARROW": [
          -1,
          160
        ],
        "'DATA": [
          -1,
          160
        ],
        "'IF": [
          -1,
          160
        ],
        "'FOR": [
          -1,
          160
        ],
        "'RETURN": [
          -1,
          160
        ],
        "'VAR": [
          -1,
          160
        ],
        "'ATCHECK": [
          -1,
          160
        ],
        "'ASSERTEQUALS": [
          -1,
          160
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          160
        ],
        "'ASSERTTRUE": [
          -1,
          160
        ],
        "'ASSERTFALSE": [
          -1,
          160
        ],
        "'ASSERTSATISFIES": [
          -1,
          160
        ],
        "'ASSERTRAISES": [
          -1,
          160
        ],
        "'IS": [
          -1,
          160
        ],
        "'ISNOT": [
          -1,
          160
        ],
        "'SATISFIES": [
          -1,
          160
        ],
        "'RAISES": [
          -1,
          160
        ],
        "'SWITCH": [
          -1,
          160
        ],
        "'CASE": [
          -1,
          160
        ],
        "'DEFAULT": [
          -1,
          160
        ],
        "'YIELD": [
          -1,
          160
        ],
        "'PLUS": [
          -1,
          160
        ],
        "'DASH": [
          -1,
          160
        ],
        "'TIMES": [
          -1,
          160
        ],
        "'SLASH": [
          -1,
          160
        ],
        "'PERCENT": [
          -1,
          160
        ],
        "'EQUALEQUAL": [
          -1,
          160
        ],
        "'NEQ": [
          -1,
          160
        ],
        "'LEQ": [
          -1,
          160
        ],
        "'GEQ": [
          -1,
          160
        ],
        "'AND": [
          -1,
          160
        ],
        "'OR": [
          -1,
          160
        ],
        "'BANG": [
          -1,
          160
        ],
        "'DOT": [
          -1,
          160
        ],
        "'LBRACK": [
          -1,
          160
        ],
        "'RBRACK": [
          -1,
          160
        ],
        "'NUMBER": [
          -1,
          160
        ],
        "'TRUE": [
          -1,
          160
        ],
        "'FALSE": [
          -1,
          160
        ],
        "'NULL": [
          -1,
          160
        ],
        "'PARENAFTERBRACE": [
          -1,
          160
        ],
        "'ASK": [
          -1,
          160
        ],
        "'NEW": [
          -1,
          160
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          169
        ],
        "fun-decl_I3?": [
          170
        ],
        "fun-decl_I3": [
          171
        ],
        "param": [
          172
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'RPAREN": [
          -1,
          162
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          173
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          174
        ],
        "variant-decl": [
          175
        ]
      },
      {
        "'EQUALS": [
          176
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          177
        ],
        "data-decl": [
          178
        ],
        "check-block": [
          179
        ],
        "let-stmt": [
          180
        ],
        "var-stmt": [
          181
        ],
        "assign-stmt": [
          182
        ],
        "expr-stmt": [
          183
        ],
        "'RBRACE": [
          184
        ],
        "block-stmt": [
          185
        ],
        "if-stmt": [
          186
        ],
        "for-stmt": [
          187
        ],
        "return-stmt": [
          188
        ],
        "yield-stmt": [
          189
        ],
        "spy-stmt": [
          190
        ],
        "'SPY": [
          191
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "assert-stmt": [
          192
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "'IF": [
          193
        ],
        "full-expr": [
          194
        ],
        "'FOR": [
          195
        ],
        "'RETURN": [
          196
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "check-block_A1_I2": [
          197
        ],
        "'ASSERTEQUALS": [
          198
        ],
        "'ASSERTNOTEQUALS": [
          199
        ],
        "'ASSERTTRUE": [
          200
        ],
        "'ASSERTFALSE": [
          201
        ],
        "'ASSERTSATISFIES": [
          202
        ],
        "'ASSERTRAISES": [
          203
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "'YIELD": [
          204
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'PARENNOSPACE": [
          205
        ]
      },
      {
        "'RPAREN": [
          206
        ]
      },
      {
        "'NAME": [
          -1,
          164
        ],
        "'STRING": [
          -1,
          164
        ],
        "'PARENSPACE": [
          -1,
          164
        ],
        "'SWITCH": [
          -1,
          164
        ],
        "'DASH": [
          -1,
          164
        ],
        "'BANG": [
          -1,
          164
        ],
        "'LBRACK": [
          -1,
          164
        ],
        "'NUMBER": [
          -1,
          164
        ],
        "'TRUE": [
          -1,
          164
        ],
        "'FALSE": [
          -1,
          164
        ],
        "'NULL": [
          -1,
          164
        ],
        "'PARENAFTERBRACE": [
          -1,
          164
        ],
        "'ASK": [
          -1,
          164
        ],
        "'NEW": [
          -1,
          164
        ]
      },
      {
        "'NAME": [
          -1,
          166
        ],
        "'STRING": [
          -1,
          166
        ],
        "'PARENSPACE": [
          -1,
          166
        ],
        "'SWITCH": [
          -1,
          166
        ],
        "'DASH": [
          -1,
          166
        ],
        "'BANG": [
          -1,
          166
        ],
        "'LBRACK": [
          -1,
          166
        ],
        "'NUMBER": [
          -1,
          166
        ],
        "'TRUE": [
          -1,
          166
        ],
        "'FALSE": [
          -1,
          166
        ],
        "'NULL": [
          -1,
          166
        ],
        "'PARENAFTERBRACE": [
          -1,
          166
        ],
        "'ASK": [
          -1,
          166
        ],
        "'NEW": [
          -1,
          166
        ]
      },
      {
        "$": [
          -1,
          168
        ],
        "'NAME": [
          -1,
          168
        ],
        "'SEMI": [
          -1,
          168
        ],
        "'PARENNOSPACE": [
          -1,
          168
        ],
        "'STRING": [
          -1,
          168
        ],
        "'RPAREN": [
          -1,
          168
        ],
        "'RBRACE": [
          -1,
          168
        ],
        "'SPY": [
          -1,
          168
        ],
        "'PARENSPACE": [
          -1,
          168
        ],
        "'COMMA": [
          -1,
          168
        ],
        "'INT": [
          -1,
          168
        ],
        "'LONG": [
          -1,
          168
        ],
        "'DOUBLE": [
          -1,
          168
        ],
        "'FLOAT": [
          -1,
          168
        ],
        "'BOOLEAN": [
          -1,
          168
        ],
        "'VOID": [
          -1,
          168
        ],
        "'LT": [
          -1,
          168
        ],
        "'GT": [
          -1,
          168
        ],
        "'THINARROW": [
          -1,
          168
        ],
        "'DATA": [
          -1,
          168
        ],
        "'IF": [
          -1,
          168
        ],
        "'FOR": [
          -1,
          168
        ],
        "'RETURN": [
          -1,
          168
        ],
        "'VAR": [
          -1,
          168
        ],
        "'ATCHECK": [
          -1,
          168
        ],
        "'ASSERTEQUALS": [
          -1,
          168
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          168
        ],
        "'ASSERTTRUE": [
          -1,
          168
        ],
        "'ASSERTFALSE": [
          -1,
          168
        ],
        "'ASSERTSATISFIES": [
          -1,
          168
        ],
        "'ASSERTRAISES": [
          -1,
          168
        ],
        "'IS": [
          -1,
          168
        ],
        "'ISNOT": [
          -1,
          168
        ],
        "'SATISFIES": [
          -1,
          168
        ],
        "'RAISES": [
          -1,
          168
        ],
        "'SWITCH": [
          -1,
          168
        ],
        "'CASE": [
          -1,
          168
        ],
        "'DEFAULT": [
          -1,
          168
        ],
        "'YIELD": [
          -1,
          168
        ],
        "'PLUS": [
          -1,
          168
        ],
        "'DASH": [
          -1,
          168
        ],
        "'TIMES": [
          -1,
          168
        ],
        "'SLASH": [
          -1,
          168
        ],
        "'PERCENT": [
          -1,
          168
        ],
        "'EQUALEQUAL": [
          -1,
          168
        ],
        "'NEQ": [
          -1,
          168
        ],
        "'LEQ": [
          -1,
          168
        ],
        "'GEQ": [
          -1,
          168
        ],
        "'AND": [
          -1,
          168
        ],
        "'OR": [
          -1,
          168
        ],
        "'BANG": [
          -1,
          168
        ],
        "'LBRACK": [
          -1,
          168
        ],
        "'RBRACK": [
          -1,
          168
        ],
        "'NUMBER": [
          -1,
          168
        ],
        "'TRUE": [
          -1,
          168
        ],
        "'FALSE": [
          -1,
          168
        ],
        "'NULL": [
          -1,
          168
        ],
        "'PARENAFTERBRACE": [
          -1,
          168
        ],
        "'ASK": [
          -1,
          168
        ],
        "'NEW": [
          -1,
          168
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "unop-expr": [
          207
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          -1,
          170
        ],
        "'STRING": [
          -1,
          170
        ],
        "'PARENSPACE": [
          -1,
          170
        ],
        "'SWITCH": [
          -1,
          170
        ],
        "'DASH": [
          -1,
          170
        ],
        "'BANG": [
          -1,
          170
        ],
        "'LBRACK": [
          -1,
          170
        ],
        "'NUMBER": [
          -1,
          170
        ],
        "'TRUE": [
          -1,
          170
        ],
        "'FALSE": [
          -1,
          170
        ],
        "'NULL": [
          -1,
          170
        ],
        "'PARENAFTERBRACE": [
          -1,
          170
        ],
        "'ASK": [
          -1,
          170
        ],
        "'NEW": [
          -1,
          170
        ]
      },
      {
        "'NAME": [
          -1,
          172
        ],
        "'STRING": [
          -1,
          172
        ],
        "'PARENSPACE": [
          -1,
          172
        ],
        "'SWITCH": [
          -1,
          172
        ],
        "'DASH": [
          -1,
          172
        ],
        "'BANG": [
          -1,
          172
        ],
        "'LBRACK": [
          -1,
          172
        ],
        "'NUMBER": [
          -1,
          172
        ],
        "'TRUE": [
          -1,
          172
        ],
        "'FALSE": [
          -1,
          172
        ],
        "'NULL": [
          -1,
          172
        ],
        "'PARENAFTERBRACE": [
          -1,
          172
        ],
        "'ASK": [
          -1,
          172
        ],
        "'NEW": [
          -1,
          172
        ]
      },
      {
        "'NAME": [
          -1,
          174
        ],
        "'STRING": [
          -1,
          174
        ],
        "'PARENSPACE": [
          -1,
          174
        ],
        "'SWITCH": [
          -1,
          174
        ],
        "'DASH": [
          -1,
          174
        ],
        "'BANG": [
          -1,
          174
        ],
        "'LBRACK": [
          -1,
          174
        ],
        "'NUMBER": [
          -1,
          174
        ],
        "'TRUE": [
          -1,
          174
        ],
        "'FALSE": [
          -1,
          174
        ],
        "'NULL": [
          -1,
          174
        ],
        "'PARENAFTERBRACE": [
          -1,
          174
        ],
        "'ASK": [
          -1,
          174
        ],
        "'NEW": [
          -1,
          174
        ]
      },
      {
        "'NAME": [
          -1,
          176
        ],
        "'STRING": [
          -1,
          176
        ],
        "'PARENSPACE": [
          -1,
          176
        ],
        "'SWITCH": [
          -1,
          176
        ],
        "'DASH": [
          -1,
          176
        ],
        "'BANG": [
          -1,
          176
        ],
        "'LBRACK": [
          -1,
          176
        ],
        "'NUMBER": [
          -1,
          176
        ],
        "'TRUE": [
          -1,
          176
        ],
        "'FALSE": [
          -1,
          176
        ],
        "'NULL": [
          -1,
          176
        ],
        "'PARENAFTERBRACE": [
          -1,
          176
        ],
        "'ASK": [
          -1,
          176
        ],
        "'NEW": [
          -1,
          176
        ]
      },
      {
        "'NAME": [
          -1,
          178
        ],
        "'STRING": [
          -1,
          178
        ],
        "'PARENSPACE": [
          -1,
          178
        ],
        "'SWITCH": [
          -1,
          178
        ],
        "'DASH": [
          -1,
          178
        ],
        "'BANG": [
          -1,
          178
        ],
        "'LBRACK": [
          -1,
          178
        ],
        "'NUMBER": [
          -1,
          178
        ],
        "'TRUE": [
          -1,
          178
        ],
        "'FALSE": [
          -1,
          178
        ],
        "'NULL": [
          -1,
          178
        ],
        "'PARENAFTERBRACE": [
          -1,
          178
        ],
        "'ASK": [
          -1,
          178
        ],
        "'NEW": [
          -1,
          178
        ]
      },
      {
        "'NAME": [
          -1,
          180
        ],
        "'STRING": [
          -1,
          180
        ],
        "'PARENSPACE": [
          -1,
          180
        ],
        "'SWITCH": [
          -1,
          180
        ],
        "'DASH": [
          -1,
          180
        ],
        "'BANG": [
          -1,
          180
        ],
        "'LBRACK": [
          -1,
          180
        ],
        "'NUMBER": [
          -1,
          180
        ],
        "'TRUE": [
          -1,
          180
        ],
        "'FALSE": [
          -1,
          180
        ],
        "'NULL": [
          -1,
          180
        ],
        "'PARENAFTERBRACE": [
          -1,
          180
        ],
        "'ASK": [
          -1,
          180
        ],
        "'NEW": [
          -1,
          180
        ]
      },
      {
        "'NAME": [
          -1,
          182
        ],
        "'STRING": [
          -1,
          182
        ],
        "'PARENSPACE": [
          -1,
          182
        ],
        "'SWITCH": [
          -1,
          182
        ],
        "'DASH": [
          -1,
          182
        ],
        "'BANG": [
          -1,
          182
        ],
        "'LBRACK": [
          -1,
          182
        ],
        "'NUMBER": [
          -1,
          182
        ],
        "'TRUE": [
          -1,
          182
        ],
        "'FALSE": [
          -1,
          182
        ],
        "'NULL": [
          -1,
          182
        ],
        "'PARENAFTERBRACE": [
          -1,
          182
        ],
        "'ASK": [
          -1,
          182
        ],
        "'NEW": [
          -1,
          182
        ]
      },
      {
        "'NAME": [
          -1,
          184
        ],
        "'STRING": [
          -1,
          184
        ],
        "'PARENSPACE": [
          -1,
          184
        ],
        "'SWITCH": [
          -1,
          184
        ],
        "'DASH": [
          -1,
          184
        ],
        "'BANG": [
          -1,
          184
        ],
        "'LBRACK": [
          -1,
          184
        ],
        "'NUMBER": [
          -1,
          184
        ],
        "'TRUE": [
          -1,
          184
        ],
        "'FALSE": [
          -1,
          184
        ],
        "'NULL": [
          -1,
          184
        ],
        "'PARENAFTERBRACE": [
          -1,
          184
        ],
        "'ASK": [
          -1,
          184
        ],
        "'NEW": [
          -1,
          184
        ]
      },
      {
        "'NAME": [
          -1,
          186
        ],
        "'STRING": [
          -1,
          186
        ],
        "'PARENSPACE": [
          -1,
          186
        ],
        "'SWITCH": [
          -1,
          186
        ],
        "'DASH": [
          -1,
          186
        ],
        "'BANG": [
          -1,
          186
        ],
        "'LBRACK": [
          -1,
          186
        ],
        "'NUMBER": [
          -1,
          186
        ],
        "'TRUE": [
          -1,
          186
        ],
        "'FALSE": [
          -1,
          186
        ],
        "'NULL": [
          -1,
          186
        ],
        "'PARENAFTERBRACE": [
          -1,
          186
        ],
        "'ASK": [
          -1,
          186
        ],
        "'NEW": [
          -1,
          186
        ]
      },
      {
        "'NAME": [
          -1,
          188
        ],
        "'STRING": [
          -1,
          188
        ],
        "'PARENSPACE": [
          -1,
          188
        ],
        "'SWITCH": [
          -1,
          188
        ],
        "'DASH": [
          -1,
          188
        ],
        "'BANG": [
          -1,
          188
        ],
        "'LBRACK": [
          -1,
          188
        ],
        "'NUMBER": [
          -1,
          188
        ],
        "'TRUE": [
          -1,
          188
        ],
        "'FALSE": [
          -1,
          188
        ],
        "'NULL": [
          -1,
          188
        ],
        "'PARENAFTERBRACE": [
          -1,
          188
        ],
        "'ASK": [
          -1,
          188
        ],
        "'NEW": [
          -1,
          188
        ]
      },
      {
        "'NAME": [
          -1,
          190
        ],
        "'STRING": [
          -1,
          190
        ],
        "'PARENSPACE": [
          -1,
          190
        ],
        "'SWITCH": [
          -1,
          190
        ],
        "'DASH": [
          -1,
          190
        ],
        "'BANG": [
          -1,
          190
        ],
        "'LBRACK": [
          -1,
          190
        ],
        "'NUMBER": [
          -1,
          190
        ],
        "'TRUE": [
          -1,
          190
        ],
        "'FALSE": [
          -1,
          190
        ],
        "'NULL": [
          -1,
          190
        ],
        "'PARENAFTERBRACE": [
          -1,
          190
        ],
        "'ASK": [
          -1,
          190
        ],
        "'NEW": [
          -1,
          190
        ]
      },
      {
        "app-or-access_A0_I2_I1*": [
          208
        ],
        "'RPAREN": [
          -1,
          192,
          194
        ],
        "'COMMA": [
          -1,
          194
        ]
      },
      {
        "'RPAREN": [
          209
        ]
      },
      {
        "'RPAREN": [
          -1,
          196
        ]
      },
      {
        "$": [
          -1,
          198
        ],
        "'NAME": [
          -1,
          198
        ],
        "'SEMI": [
          -1,
          198
        ],
        "'PARENNOSPACE": [
          -1,
          198
        ],
        "'STRING": [
          -1,
          198
        ],
        "'RPAREN": [
          -1,
          198
        ],
        "'RBRACE": [
          -1,
          198
        ],
        "'SPY": [
          -1,
          198
        ],
        "'PARENSPACE": [
          -1,
          198
        ],
        "'COMMA": [
          -1,
          198
        ],
        "'INT": [
          -1,
          198
        ],
        "'LONG": [
          -1,
          198
        ],
        "'DOUBLE": [
          -1,
          198
        ],
        "'FLOAT": [
          -1,
          198
        ],
        "'BOOLEAN": [
          -1,
          198
        ],
        "'VOID": [
          -1,
          198
        ],
        "'LT": [
          -1,
          198
        ],
        "'GT": [
          -1,
          198
        ],
        "'THINARROW": [
          -1,
          198
        ],
        "'DATA": [
          -1,
          198
        ],
        "'IF": [
          -1,
          198
        ],
        "'FOR": [
          -1,
          198
        ],
        "'RETURN": [
          -1,
          198
        ],
        "'VAR": [
          -1,
          198
        ],
        "'ATCHECK": [
          -1,
          198
        ],
        "'ASSERTEQUALS": [
          -1,
          198
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          198
        ],
        "'ASSERTTRUE": [
          -1,
          198
        ],
        "'ASSERTFALSE": [
          -1,
          198
        ],
        "'ASSERTSATISFIES": [
          -1,
          198
        ],
        "'ASSERTRAISES": [
          -1,
          198
        ],
        "'IS": [
          -1,
          198
        ],
        "'ISNOT": [
          -1,
          198
        ],
        "'SATISFIES": [
          -1,
          198
        ],
        "'RAISES": [
          -1,
          198
        ],
        "'SWITCH": [
          -1,
          198
        ],
        "'CASE": [
          -1,
          198
        ],
        "'DEFAULT": [
          -1,
          198
        ],
        "'YIELD": [
          -1,
          198
        ],
        "'PLUS": [
          -1,
          198
        ],
        "'DASH": [
          -1,
          198
        ],
        "'TIMES": [
          -1,
          198
        ],
        "'SLASH": [
          -1,
          198
        ],
        "'PERCENT": [
          -1,
          198
        ],
        "'EQUALEQUAL": [
          -1,
          198
        ],
        "'NEQ": [
          -1,
          198
        ],
        "'LEQ": [
          -1,
          198
        ],
        "'GEQ": [
          -1,
          198
        ],
        "'AND": [
          -1,
          198
        ],
        "'OR": [
          -1,
          198
        ],
        "'BANG": [
          -1,
          198
        ],
        "'DOT": [
          -1,
          198
        ],
        "'LBRACK": [
          -1,
          198
        ],
        "'RBRACK": [
          -1,
          198
        ],
        "'NUMBER": [
          -1,
          198
        ],
        "'TRUE": [
          -1,
          198
        ],
        "'FALSE": [
          -1,
          198
        ],
        "'NULL": [
          -1,
          198
        ],
        "'PARENAFTERBRACE": [
          -1,
          198
        ],
        "'ASK": [
          -1,
          198
        ],
        "'NEW": [
          -1,
          198
        ]
      },
      {
        "'RBRACK": [
          210
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          211
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "construct-expr_A0_I3?": [
          212
        ],
        "construct-expr_A0_I3": [
          213
        ],
        "'RBRACK": [
          -1,
          200
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          214
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "$": [
          -1,
          202
        ],
        "'NAME": [
          -1,
          202
        ],
        "'SEMI": [
          -1,
          202
        ],
        "'PARENNOSPACE": [
          -1,
          202
        ],
        "'STRING": [
          -1,
          202
        ],
        "'RPAREN": [
          -1,
          202
        ],
        "'RBRACE": [
          -1,
          202
        ],
        "'SPY": [
          -1,
          202
        ],
        "'PARENSPACE": [
          -1,
          202
        ],
        "'COMMA": [
          -1,
          202
        ],
        "'INT": [
          -1,
          202
        ],
        "'LONG": [
          -1,
          202
        ],
        "'DOUBLE": [
          -1,
          202
        ],
        "'FLOAT": [
          -1,
          202
        ],
        "'BOOLEAN": [
          -1,
          202
        ],
        "'VOID": [
          -1,
          202
        ],
        "'LT": [
          -1,
          202
        ],
        "'GT": [
          -1,
          202
        ],
        "'THINARROW": [
          -1,
          202
        ],
        "'DATA": [
          -1,
          202
        ],
        "'IF": [
          -1,
          202
        ],
        "'FOR": [
          -1,
          202
        ],
        "'RETURN": [
          -1,
          202
        ],
        "'VAR": [
          -1,
          202
        ],
        "'ATCHECK": [
          -1,
          202
        ],
        "'ASSERTEQUALS": [
          -1,
          202
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          202
        ],
        "'ASSERTTRUE": [
          -1,
          202
        ],
        "'ASSERTFALSE": [
          -1,
          202
        ],
        "'ASSERTSATISFIES": [
          -1,
          202
        ],
        "'ASSERTRAISES": [
          -1,
          202
        ],
        "'IS": [
          -1,
          202
        ],
        "'ISNOT": [
          -1,
          202
        ],
        "'SATISFIES": [
          -1,
          202
        ],
        "'RAISES": [
          -1,
          202
        ],
        "'SWITCH": [
          -1,
          202
        ],
        "'CASE": [
          -1,
          202
        ],
        "'DEFAULT": [
          -1,
          202
        ],
        "'YIELD": [
          -1,
          202
        ],
        "'PLUS": [
          -1,
          202
        ],
        "'DASH": [
          -1,
          202
        ],
        "'TIMES": [
          -1,
          202
        ],
        "'SLASH": [
          -1,
          202
        ],
        "'PERCENT": [
          -1,
          202
        ],
        "'EQUALEQUAL": [
          -1,
          202
        ],
        "'NEQ": [
          -1,
          202
        ],
        "'LEQ": [
          -1,
          202
        ],
        "'GEQ": [
          -1,
          202
        ],
        "'AND": [
          -1,
          202
        ],
        "'OR": [
          -1,
          202
        ],
        "'BANG": [
          -1,
          202
        ],
        "'DOT": [
          -1,
          202
        ],
        "'LBRACK": [
          -1,
          202
        ],
        "'RBRACK": [
          -1,
          202
        ],
        "'NUMBER": [
          -1,
          202
        ],
        "'TRUE": [
          -1,
          202
        ],
        "'FALSE": [
          -1,
          202
        ],
        "'NULL": [
          -1,
          202
        ],
        "'PARENAFTERBRACE": [
          -1,
          202
        ],
        "'ASK": [
          -1,
          202
        ],
        "'NEW": [
          -1,
          202
        ]
      },
      {
        "'THINARROW": [
          215
        ]
      },
      {
        "'SEMI": [
          216
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          217
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ],
        "new-expr_I3?": [
          218
        ],
        "new-expr_I3": [
          219
        ],
        "'RPAREN": [
          -1,
          204
        ]
      },
      {
        "'SEMI": [
          220
        ]
      },
      {
        "'RPAREN": [
          221
        ]
      },
      {
        "'SEMI": [
          222
        ]
      },
      {
        "'RPAREN": [
          223
        ]
      },
      {
        "'COMMA": [
          224
        ],
        "'GT": [
          225
        ],
        "type-ann_A6_I1_I2": [
          226
        ]
      },
      {
        "$": [
          -1,
          206
        ],
        "'NAME": [
          -1,
          206
        ],
        "'PARENNOSPACE": [
          -1,
          206
        ],
        "'STRING": [
          -1,
          206
        ],
        "'RBRACE": [
          -1,
          206
        ],
        "'SPY": [
          -1,
          206
        ],
        "'PARENSPACE": [
          -1,
          206
        ],
        "'INT": [
          -1,
          206
        ],
        "'LONG": [
          -1,
          206
        ],
        "'DOUBLE": [
          -1,
          206
        ],
        "'FLOAT": [
          -1,
          206
        ],
        "'BOOLEAN": [
          -1,
          206
        ],
        "'VOID": [
          -1,
          206
        ],
        "'DATA": [
          -1,
          206
        ],
        "'IF": [
          -1,
          206
        ],
        "'FOR": [
          -1,
          206
        ],
        "'RETURN": [
          -1,
          206
        ],
        "'VAR": [
          -1,
          206
        ],
        "'ATCHECK": [
          -1,
          206
        ],
        "'ASSERTEQUALS": [
          -1,
          206
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          206
        ],
        "'ASSERTTRUE": [
          -1,
          206
        ],
        "'ASSERTFALSE": [
          -1,
          206
        ],
        "'ASSERTSATISFIES": [
          -1,
          206
        ],
        "'ASSERTRAISES": [
          -1,
          206
        ],
        "'SWITCH": [
          -1,
          206
        ],
        "'YIELD": [
          -1,
          206
        ],
        "'DASH": [
          -1,
          206
        ],
        "'BANG": [
          -1,
          206
        ],
        "'LBRACK": [
          -1,
          206
        ],
        "'NUMBER": [
          -1,
          206
        ],
        "'TRUE": [
          -1,
          206
        ],
        "'FALSE": [
          -1,
          206
        ],
        "'NULL": [
          -1,
          206
        ],
        "'PARENAFTERBRACE": [
          -1,
          206
        ],
        "'ASK": [
          -1,
          206
        ],
        "'NEW": [
          -1,
          206
        ]
      },
      {
        "$": [
          -1,
          208
        ],
        "'NAME": [
          -1,
          208
        ],
        "'PARENNOSPACE": [
          -1,
          208
        ],
        "'STRING": [
          -1,
          208
        ],
        "'RBRACE": [
          -1,
          208
        ],
        "'SPY": [
          -1,
          208
        ],
        "'PARENSPACE": [
          -1,
          208
        ],
        "'INT": [
          -1,
          208
        ],
        "'LONG": [
          -1,
          208
        ],
        "'DOUBLE": [
          -1,
          208
        ],
        "'FLOAT": [
          -1,
          208
        ],
        "'BOOLEAN": [
          -1,
          208
        ],
        "'VOID": [
          -1,
          208
        ],
        "'DATA": [
          -1,
          208
        ],
        "'IF": [
          -1,
          208
        ],
        "'FOR": [
          -1,
          208
        ],
        "'RETURN": [
          -1,
          208
        ],
        "'VAR": [
          -1,
          208
        ],
        "'ATCHECK": [
          -1,
          208
        ],
        "'ASSERTEQUALS": [
          -1,
          208
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          208
        ],
        "'ASSERTTRUE": [
          -1,
          208
        ],
        "'ASSERTFALSE": [
          -1,
          208
        ],
        "'ASSERTSATISFIES": [
          -1,
          208
        ],
        "'ASSERTRAISES": [
          -1,
          208
        ],
        "'SWITCH": [
          -1,
          208
        ],
        "'YIELD": [
          -1,
          208
        ],
        "'DASH": [
          -1,
          208
        ],
        "'BANG": [
          -1,
          208
        ],
        "'LBRACK": [
          -1,
          208
        ],
        "'NUMBER": [
          -1,
          208
        ],
        "'TRUE": [
          -1,
          208
        ],
        "'FALSE": [
          -1,
          208
        ],
        "'NULL": [
          -1,
          208
        ],
        "'PARENAFTERBRACE": [
          -1,
          208
        ],
        "'ASK": [
          -1,
          208
        ],
        "'NEW": [
          -1,
          208
        ]
      },
      {
        "$": [
          -1,
          210
        ],
        "'NAME": [
          -1,
          210
        ],
        "'PARENNOSPACE": [
          -1,
          210
        ],
        "'STRING": [
          -1,
          210
        ],
        "'RBRACE": [
          -1,
          210
        ],
        "'SPY": [
          -1,
          210
        ],
        "'PARENSPACE": [
          -1,
          210
        ],
        "'INT": [
          -1,
          210
        ],
        "'LONG": [
          -1,
          210
        ],
        "'DOUBLE": [
          -1,
          210
        ],
        "'FLOAT": [
          -1,
          210
        ],
        "'BOOLEAN": [
          -1,
          210
        ],
        "'VOID": [
          -1,
          210
        ],
        "'DATA": [
          -1,
          210
        ],
        "'IF": [
          -1,
          210
        ],
        "'FOR": [
          -1,
          210
        ],
        "'RETURN": [
          -1,
          210
        ],
        "'VAR": [
          -1,
          210
        ],
        "'ATCHECK": [
          -1,
          210
        ],
        "'ASSERTEQUALS": [
          -1,
          210
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          210
        ],
        "'ASSERTTRUE": [
          -1,
          210
        ],
        "'ASSERTFALSE": [
          -1,
          210
        ],
        "'ASSERTSATISFIES": [
          -1,
          210
        ],
        "'ASSERTRAISES": [
          -1,
          210
        ],
        "'SWITCH": [
          -1,
          210
        ],
        "'YIELD": [
          -1,
          210
        ],
        "'DASH": [
          -1,
          210
        ],
        "'BANG": [
          -1,
          210
        ],
        "'LBRACK": [
          -1,
          210
        ],
        "'NUMBER": [
          -1,
          210
        ],
        "'TRUE": [
          -1,
          210
        ],
        "'FALSE": [
          -1,
          210
        ],
        "'NULL": [
          -1,
          210
        ],
        "'PARENAFTERBRACE": [
          -1,
          210
        ],
        "'ASK": [
          -1,
          210
        ],
        "'NEW": [
          -1,
          210
        ]
      },
      {
        "'NAME": [
          61
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          63
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "lambda-param": [
          227
        ]
      },
      {
        "'RPAREN": [
          -1,
          212
        ],
        "'COMMA": [
          -1,
          212
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          228
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          229
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'COMMA": [
          -1,
          214
        ],
        "'THINARROW": [
          -1,
          214
        ]
      },
      {
        "'RPAREN": [
          230
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          231
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          61
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          63
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "lambda-param": [
          232
        ]
      },
      {
        "'RPAREN": [
          -1,
          216
        ],
        "'COMMA": [
          -1,
          216
        ]
      },
      {
        "'NAME": [
          233
        ]
      },
      {
        "'RPAREN": [
          234
        ]
      },
      {
        "'RPAREN": [
          -1,
          218
        ]
      },
      {
        "fun-decl_I3_I1*": [
          235
        ],
        "'RPAREN": [
          -1,
          220,
          222
        ],
        "'COMMA": [
          -1,
          222
        ]
      },
      {
        "'SEMI": [
          236
        ],
        "let-stmt_I4?": [
          237
        ],
        "let-stmt_I4": [
          238
        ],
        "$": [
          -1,
          224,
          226
        ],
        "'NAME": [
          -1,
          224,
          226
        ],
        "'PARENNOSPACE": [
          -1,
          224,
          226
        ],
        "'STRING": [
          -1,
          224,
          226
        ],
        "'RBRACE": [
          -1,
          224,
          226
        ],
        "'SPY": [
          -1,
          224,
          226
        ],
        "'PARENSPACE": [
          -1,
          224,
          226
        ],
        "'INT": [
          -1,
          224,
          226
        ],
        "'LONG": [
          -1,
          224,
          226
        ],
        "'DOUBLE": [
          -1,
          224,
          226
        ],
        "'FLOAT": [
          -1,
          224,
          226
        ],
        "'BOOLEAN": [
          -1,
          224,
          226
        ],
        "'VOID": [
          -1,
          224,
          226
        ],
        "'DATA": [
          -1,
          224,
          226
        ],
        "'IF": [
          -1,
          224,
          226
        ],
        "'FOR": [
          -1,
          224,
          226
        ],
        "'RETURN": [
          -1,
          224,
          226
        ],
        "'VAR": [
          -1,
          224,
          226
        ],
        "'ATCHECK": [
          -1,
          224,
          226
        ],
        "'ASSERTEQUALS": [
          -1,
          224,
          226
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          224,
          226
        ],
        "'ASSERTTRUE": [
          -1,
          224,
          226
        ],
        "'ASSERTFALSE": [
          -1,
          224,
          226
        ],
        "'ASSERTSATISFIES": [
          -1,
          224,
          226
        ],
        "'ASSERTRAISES": [
          -1,
          224,
          226
        ],
        "'SWITCH": [
          -1,
          224,
          226
        ],
        "'YIELD": [
          -1,
          224,
          226
        ],
        "'DASH": [
          -1,
          224,
          226
        ],
        "'BANG": [
          -1,
          224,
          226
        ],
        "'LBRACK": [
          -1,
          224,
          226
        ],
        "'NUMBER": [
          -1,
          224,
          226
        ],
        "'TRUE": [
          -1,
          224,
          226
        ],
        "'FALSE": [
          -1,
          224,
          226
        ],
        "'NULL": [
          -1,
          224,
          226
        ],
        "'PARENAFTERBRACE": [
          -1,
          224,
          226
        ],
        "'ASK": [
          -1,
          224,
          226
        ],
        "'NEW": [
          -1,
          224,
          226
        ]
      },
      {
        "'PARENNOSPACE": [
          239
        ],
        "'SEMI": [
          -1,
          228
        ],
        "'RBRACE": [
          -1,
          228
        ]
      },
      {
        "data-decl_I4*": [
          240
        ],
        "'SEMI": [
          -1,
          230
        ],
        "'RBRACE": [
          -1,
          230
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          241
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          -1,
          232
        ],
        "'PARENNOSPACE": [
          -1,
          232
        ],
        "'STRING": [
          -1,
          232
        ],
        "'RBRACE": [
          -1,
          232
        ],
        "'SPY": [
          -1,
          232
        ],
        "'PARENSPACE": [
          -1,
          232
        ],
        "'INT": [
          -1,
          232
        ],
        "'LONG": [
          -1,
          232
        ],
        "'DOUBLE": [
          -1,
          232
        ],
        "'FLOAT": [
          -1,
          232
        ],
        "'BOOLEAN": [
          -1,
          232
        ],
        "'VOID": [
          -1,
          232
        ],
        "'DATA": [
          -1,
          232
        ],
        "'IF": [
          -1,
          232
        ],
        "'FOR": [
          -1,
          232
        ],
        "'RETURN": [
          -1,
          232
        ],
        "'VAR": [
          -1,
          232
        ],
        "'ATCHECK": [
          -1,
          232
        ],
        "'ASSERTEQUALS": [
          -1,
          232
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          232
        ],
        "'ASSERTTRUE": [
          -1,
          232
        ],
        "'ASSERTFALSE": [
          -1,
          232
        ],
        "'ASSERTSATISFIES": [
          -1,
          232
        ],
        "'ASSERTRAISES": [
          -1,
          232
        ],
        "'SWITCH": [
          -1,
          232
        ],
        "'YIELD": [
          -1,
          232
        ],
        "'DASH": [
          -1,
          232
        ],
        "'BANG": [
          -1,
          232
        ],
        "'LBRACK": [
          -1,
          232
        ],
        "'NUMBER": [
          -1,
          232
        ],
        "'TRUE": [
          -1,
          232
        ],
        "'FALSE": [
          -1,
          232
        ],
        "'NULL": [
          -1,
          232
        ],
        "'PARENAFTERBRACE": [
          -1,
          232
        ],
        "'ASK": [
          -1,
          232
        ],
        "'NEW": [
          -1,
          232
        ]
      },
      {
        "'NAME": [
          -1,
          234
        ],
        "'PARENNOSPACE": [
          -1,
          234
        ],
        "'STRING": [
          -1,
          234
        ],
        "'RBRACE": [
          -1,
          234
        ],
        "'SPY": [
          -1,
          234
        ],
        "'PARENSPACE": [
          -1,
          234
        ],
        "'INT": [
          -1,
          234
        ],
        "'LONG": [
          -1,
          234
        ],
        "'DOUBLE": [
          -1,
          234
        ],
        "'FLOAT": [
          -1,
          234
        ],
        "'BOOLEAN": [
          -1,
          234
        ],
        "'VOID": [
          -1,
          234
        ],
        "'DATA": [
          -1,
          234
        ],
        "'IF": [
          -1,
          234
        ],
        "'FOR": [
          -1,
          234
        ],
        "'RETURN": [
          -1,
          234
        ],
        "'VAR": [
          -1,
          234
        ],
        "'ATCHECK": [
          -1,
          234
        ],
        "'ASSERTEQUALS": [
          -1,
          234
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          234
        ],
        "'ASSERTTRUE": [
          -1,
          234
        ],
        "'ASSERTFALSE": [
          -1,
          234
        ],
        "'ASSERTSATISFIES": [
          -1,
          234
        ],
        "'ASSERTRAISES": [
          -1,
          234
        ],
        "'SWITCH": [
          -1,
          234
        ],
        "'YIELD": [
          -1,
          234
        ],
        "'DASH": [
          -1,
          234
        ],
        "'BANG": [
          -1,
          234
        ],
        "'LBRACK": [
          -1,
          234
        ],
        "'NUMBER": [
          -1,
          234
        ],
        "'TRUE": [
          -1,
          234
        ],
        "'FALSE": [
          -1,
          234
        ],
        "'NULL": [
          -1,
          234
        ],
        "'PARENAFTERBRACE": [
          -1,
          234
        ],
        "'ASK": [
          -1,
          234
        ],
        "'NEW": [
          -1,
          234
        ]
      },
      {
        "'NAME": [
          -1,
          236
        ],
        "'PARENNOSPACE": [
          -1,
          236
        ],
        "'STRING": [
          -1,
          236
        ],
        "'RBRACE": [
          -1,
          236
        ],
        "'SPY": [
          -1,
          236
        ],
        "'PARENSPACE": [
          -1,
          236
        ],
        "'INT": [
          -1,
          236
        ],
        "'LONG": [
          -1,
          236
        ],
        "'DOUBLE": [
          -1,
          236
        ],
        "'FLOAT": [
          -1,
          236
        ],
        "'BOOLEAN": [
          -1,
          236
        ],
        "'VOID": [
          -1,
          236
        ],
        "'DATA": [
          -1,
          236
        ],
        "'IF": [
          -1,
          236
        ],
        "'FOR": [
          -1,
          236
        ],
        "'RETURN": [
          -1,
          236
        ],
        "'VAR": [
          -1,
          236
        ],
        "'ATCHECK": [
          -1,
          236
        ],
        "'ASSERTEQUALS": [
          -1,
          236
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          236
        ],
        "'ASSERTTRUE": [
          -1,
          236
        ],
        "'ASSERTFALSE": [
          -1,
          236
        ],
        "'ASSERTSATISFIES": [
          -1,
          236
        ],
        "'ASSERTRAISES": [
          -1,
          236
        ],
        "'SWITCH": [
          -1,
          236
        ],
        "'YIELD": [
          -1,
          236
        ],
        "'DASH": [
          -1,
          236
        ],
        "'BANG": [
          -1,
          236
        ],
        "'LBRACK": [
          -1,
          236
        ],
        "'NUMBER": [
          -1,
          236
        ],
        "'TRUE": [
          -1,
          236
        ],
        "'FALSE": [
          -1,
          236
        ],
        "'NULL": [
          -1,
          236
        ],
        "'PARENAFTERBRACE": [
          -1,
          236
        ],
        "'ASK": [
          -1,
          236
        ],
        "'NEW": [
          -1,
          236
        ]
      },
      {
        "'NAME": [
          -1,
          238
        ],
        "'PARENNOSPACE": [
          -1,
          238
        ],
        "'STRING": [
          -1,
          238
        ],
        "'RBRACE": [
          -1,
          238
        ],
        "'SPY": [
          -1,
          238
        ],
        "'PARENSPACE": [
          -1,
          238
        ],
        "'INT": [
          -1,
          238
        ],
        "'LONG": [
          -1,
          238
        ],
        "'DOUBLE": [
          -1,
          238
        ],
        "'FLOAT": [
          -1,
          238
        ],
        "'BOOLEAN": [
          -1,
          238
        ],
        "'VOID": [
          -1,
          238
        ],
        "'DATA": [
          -1,
          238
        ],
        "'IF": [
          -1,
          238
        ],
        "'FOR": [
          -1,
          238
        ],
        "'RETURN": [
          -1,
          238
        ],
        "'VAR": [
          -1,
          238
        ],
        "'ATCHECK": [
          -1,
          238
        ],
        "'ASSERTEQUALS": [
          -1,
          238
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          238
        ],
        "'ASSERTTRUE": [
          -1,
          238
        ],
        "'ASSERTFALSE": [
          -1,
          238
        ],
        "'ASSERTSATISFIES": [
          -1,
          238
        ],
        "'ASSERTRAISES": [
          -1,
          238
        ],
        "'SWITCH": [
          -1,
          238
        ],
        "'YIELD": [
          -1,
          238
        ],
        "'DASH": [
          -1,
          238
        ],
        "'BANG": [
          -1,
          238
        ],
        "'LBRACK": [
          -1,
          238
        ],
        "'NUMBER": [
          -1,
          238
        ],
        "'TRUE": [
          -1,
          238
        ],
        "'FALSE": [
          -1,
          238
        ],
        "'NULL": [
          -1,
          238
        ],
        "'PARENAFTERBRACE": [
          -1,
          238
        ],
        "'ASK": [
          -1,
          238
        ],
        "'NEW": [
          -1,
          238
        ]
      },
      {
        "'NAME": [
          -1,
          240
        ],
        "'PARENNOSPACE": [
          -1,
          240
        ],
        "'STRING": [
          -1,
          240
        ],
        "'RBRACE": [
          -1,
          240
        ],
        "'SPY": [
          -1,
          240
        ],
        "'PARENSPACE": [
          -1,
          240
        ],
        "'INT": [
          -1,
          240
        ],
        "'LONG": [
          -1,
          240
        ],
        "'DOUBLE": [
          -1,
          240
        ],
        "'FLOAT": [
          -1,
          240
        ],
        "'BOOLEAN": [
          -1,
          240
        ],
        "'VOID": [
          -1,
          240
        ],
        "'DATA": [
          -1,
          240
        ],
        "'IF": [
          -1,
          240
        ],
        "'FOR": [
          -1,
          240
        ],
        "'RETURN": [
          -1,
          240
        ],
        "'VAR": [
          -1,
          240
        ],
        "'ATCHECK": [
          -1,
          240
        ],
        "'ASSERTEQUALS": [
          -1,
          240
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          240
        ],
        "'ASSERTTRUE": [
          -1,
          240
        ],
        "'ASSERTFALSE": [
          -1,
          240
        ],
        "'ASSERTSATISFIES": [
          -1,
          240
        ],
        "'ASSERTRAISES": [
          -1,
          240
        ],
        "'SWITCH": [
          -1,
          240
        ],
        "'YIELD": [
          -1,
          240
        ],
        "'DASH": [
          -1,
          240
        ],
        "'BANG": [
          -1,
          240
        ],
        "'LBRACK": [
          -1,
          240
        ],
        "'NUMBER": [
          -1,
          240
        ],
        "'TRUE": [
          -1,
          240
        ],
        "'FALSE": [
          -1,
          240
        ],
        "'NULL": [
          -1,
          240
        ],
        "'PARENAFTERBRACE": [
          -1,
          240
        ],
        "'ASK": [
          -1,
          240
        ],
        "'NEW": [
          -1,
          240
        ]
      },
      {
        "'NAME": [
          -1,
          242
        ],
        "'PARENNOSPACE": [
          -1,
          242
        ],
        "'STRING": [
          -1,
          242
        ],
        "'RBRACE": [
          -1,
          242
        ],
        "'SPY": [
          -1,
          242
        ],
        "'PARENSPACE": [
          -1,
          242
        ],
        "'INT": [
          -1,
          242
        ],
        "'LONG": [
          -1,
          242
        ],
        "'DOUBLE": [
          -1,
          242
        ],
        "'FLOAT": [
          -1,
          242
        ],
        "'BOOLEAN": [
          -1,
          242
        ],
        "'VOID": [
          -1,
          242
        ],
        "'DATA": [
          -1,
          242
        ],
        "'IF": [
          -1,
          242
        ],
        "'FOR": [
          -1,
          242
        ],
        "'RETURN": [
          -1,
          242
        ],
        "'VAR": [
          -1,
          242
        ],
        "'ATCHECK": [
          -1,
          242
        ],
        "'ASSERTEQUALS": [
          -1,
          242
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          242
        ],
        "'ASSERTTRUE": [
          -1,
          242
        ],
        "'ASSERTFALSE": [
          -1,
          242
        ],
        "'ASSERTSATISFIES": [
          -1,
          242
        ],
        "'ASSERTRAISES": [
          -1,
          242
        ],
        "'SWITCH": [
          -1,
          242
        ],
        "'YIELD": [
          -1,
          242
        ],
        "'DASH": [
          -1,
          242
        ],
        "'BANG": [
          -1,
          242
        ],
        "'LBRACK": [
          -1,
          242
        ],
        "'NUMBER": [
          -1,
          242
        ],
        "'TRUE": [
          -1,
          242
        ],
        "'FALSE": [
          -1,
          242
        ],
        "'NULL": [
          -1,
          242
        ],
        "'PARENAFTERBRACE": [
          -1,
          242
        ],
        "'ASK": [
          -1,
          242
        ],
        "'NEW": [
          -1,
          242
        ]
      },
      {
        "'NAME": [
          -1,
          244
        ],
        "'PARENNOSPACE": [
          -1,
          244
        ],
        "'STRING": [
          -1,
          244
        ],
        "'RBRACE": [
          -1,
          244
        ],
        "'SPY": [
          -1,
          244
        ],
        "'PARENSPACE": [
          -1,
          244
        ],
        "'INT": [
          -1,
          244
        ],
        "'LONG": [
          -1,
          244
        ],
        "'DOUBLE": [
          -1,
          244
        ],
        "'FLOAT": [
          -1,
          244
        ],
        "'BOOLEAN": [
          -1,
          244
        ],
        "'VOID": [
          -1,
          244
        ],
        "'DATA": [
          -1,
          244
        ],
        "'IF": [
          -1,
          244
        ],
        "'FOR": [
          -1,
          244
        ],
        "'RETURN": [
          -1,
          244
        ],
        "'VAR": [
          -1,
          244
        ],
        "'ATCHECK": [
          -1,
          244
        ],
        "'ASSERTEQUALS": [
          -1,
          244
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          244
        ],
        "'ASSERTTRUE": [
          -1,
          244
        ],
        "'ASSERTFALSE": [
          -1,
          244
        ],
        "'ASSERTSATISFIES": [
          -1,
          244
        ],
        "'ASSERTRAISES": [
          -1,
          244
        ],
        "'SWITCH": [
          -1,
          244
        ],
        "'YIELD": [
          -1,
          244
        ],
        "'DASH": [
          -1,
          244
        ],
        "'BANG": [
          -1,
          244
        ],
        "'LBRACK": [
          -1,
          244
        ],
        "'NUMBER": [
          -1,
          244
        ],
        "'TRUE": [
          -1,
          244
        ],
        "'FALSE": [
          -1,
          244
        ],
        "'NULL": [
          -1,
          244
        ],
        "'PARENAFTERBRACE": [
          -1,
          244
        ],
        "'ASK": [
          -1,
          244
        ],
        "'NEW": [
          -1,
          244
        ]
      },
      {
        "$": [
          -1,
          246
        ],
        "'NAME": [
          -1,
          246
        ],
        "'PARENNOSPACE": [
          -1,
          246
        ],
        "'STRING": [
          -1,
          246
        ],
        "'RBRACE": [
          -1,
          246
        ],
        "'SPY": [
          -1,
          246
        ],
        "'PARENSPACE": [
          -1,
          246
        ],
        "'INT": [
          -1,
          246
        ],
        "'LONG": [
          -1,
          246
        ],
        "'DOUBLE": [
          -1,
          246
        ],
        "'FLOAT": [
          -1,
          246
        ],
        "'BOOLEAN": [
          -1,
          246
        ],
        "'VOID": [
          -1,
          246
        ],
        "'DATA": [
          -1,
          246
        ],
        "'IF": [
          -1,
          246
        ],
        "'FOR": [
          -1,
          246
        ],
        "'RETURN": [
          -1,
          246
        ],
        "'VAR": [
          -1,
          246
        ],
        "'ATCHECK": [
          -1,
          246
        ],
        "'ASSERTEQUALS": [
          -1,
          246
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          246
        ],
        "'ASSERTTRUE": [
          -1,
          246
        ],
        "'ASSERTFALSE": [
          -1,
          246
        ],
        "'ASSERTSATISFIES": [
          -1,
          246
        ],
        "'ASSERTRAISES": [
          -1,
          246
        ],
        "'SWITCH": [
          -1,
          246
        ],
        "'YIELD": [
          -1,
          246
        ],
        "'DASH": [
          -1,
          246
        ],
        "'BANG": [
          -1,
          246
        ],
        "'LBRACK": [
          -1,
          246
        ],
        "'NUMBER": [
          -1,
          246
        ],
        "'TRUE": [
          -1,
          246
        ],
        "'FALSE": [
          -1,
          246
        ],
        "'NULL": [
          -1,
          246
        ],
        "'PARENAFTERBRACE": [
          -1,
          246
        ],
        "'ASK": [
          -1,
          246
        ],
        "'NEW": [
          -1,
          246
        ]
      },
      {
        "'NAME": [
          -1,
          248
        ],
        "'PARENNOSPACE": [
          -1,
          248
        ],
        "'STRING": [
          -1,
          248
        ],
        "'RBRACE": [
          -1,
          248
        ],
        "'SPY": [
          -1,
          248
        ],
        "'PARENSPACE": [
          -1,
          248
        ],
        "'INT": [
          -1,
          248
        ],
        "'LONG": [
          -1,
          248
        ],
        "'DOUBLE": [
          -1,
          248
        ],
        "'FLOAT": [
          -1,
          248
        ],
        "'BOOLEAN": [
          -1,
          248
        ],
        "'VOID": [
          -1,
          248
        ],
        "'DATA": [
          -1,
          248
        ],
        "'IF": [
          -1,
          248
        ],
        "'FOR": [
          -1,
          248
        ],
        "'RETURN": [
          -1,
          248
        ],
        "'VAR": [
          -1,
          248
        ],
        "'ATCHECK": [
          -1,
          248
        ],
        "'ASSERTEQUALS": [
          -1,
          248
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          248
        ],
        "'ASSERTTRUE": [
          -1,
          248
        ],
        "'ASSERTFALSE": [
          -1,
          248
        ],
        "'ASSERTSATISFIES": [
          -1,
          248
        ],
        "'ASSERTRAISES": [
          -1,
          248
        ],
        "'SWITCH": [
          -1,
          248
        ],
        "'YIELD": [
          -1,
          248
        ],
        "'DASH": [
          -1,
          248
        ],
        "'BANG": [
          -1,
          248
        ],
        "'LBRACK": [
          -1,
          248
        ],
        "'NUMBER": [
          -1,
          248
        ],
        "'TRUE": [
          -1,
          248
        ],
        "'FALSE": [
          -1,
          248
        ],
        "'NULL": [
          -1,
          248
        ],
        "'PARENAFTERBRACE": [
          -1,
          248
        ],
        "'ASK": [
          -1,
          248
        ],
        "'NEW": [
          -1,
          248
        ]
      },
      {
        "'NAME": [
          -1,
          250
        ],
        "'PARENNOSPACE": [
          -1,
          250
        ],
        "'STRING": [
          -1,
          250
        ],
        "'RBRACE": [
          -1,
          250
        ],
        "'SPY": [
          -1,
          250
        ],
        "'PARENSPACE": [
          -1,
          250
        ],
        "'INT": [
          -1,
          250
        ],
        "'LONG": [
          -1,
          250
        ],
        "'DOUBLE": [
          -1,
          250
        ],
        "'FLOAT": [
          -1,
          250
        ],
        "'BOOLEAN": [
          -1,
          250
        ],
        "'VOID": [
          -1,
          250
        ],
        "'DATA": [
          -1,
          250
        ],
        "'IF": [
          -1,
          250
        ],
        "'FOR": [
          -1,
          250
        ],
        "'RETURN": [
          -1,
          250
        ],
        "'VAR": [
          -1,
          250
        ],
        "'ATCHECK": [
          -1,
          250
        ],
        "'ASSERTEQUALS": [
          -1,
          250
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          250
        ],
        "'ASSERTTRUE": [
          -1,
          250
        ],
        "'ASSERTFALSE": [
          -1,
          250
        ],
        "'ASSERTSATISFIES": [
          -1,
          250
        ],
        "'ASSERTRAISES": [
          -1,
          250
        ],
        "'SWITCH": [
          -1,
          250
        ],
        "'YIELD": [
          -1,
          250
        ],
        "'DASH": [
          -1,
          250
        ],
        "'BANG": [
          -1,
          250
        ],
        "'LBRACK": [
          -1,
          250
        ],
        "'NUMBER": [
          -1,
          250
        ],
        "'TRUE": [
          -1,
          250
        ],
        "'FALSE": [
          -1,
          250
        ],
        "'NULL": [
          -1,
          250
        ],
        "'PARENAFTERBRACE": [
          -1,
          250
        ],
        "'ASK": [
          -1,
          250
        ],
        "'NEW": [
          -1,
          250
        ]
      },
      {
        "'NAME": [
          -1,
          252
        ],
        "'PARENNOSPACE": [
          -1,
          252
        ],
        "'STRING": [
          -1,
          252
        ],
        "'RBRACE": [
          -1,
          252
        ],
        "'SPY": [
          -1,
          252
        ],
        "'PARENSPACE": [
          -1,
          252
        ],
        "'INT": [
          -1,
          252
        ],
        "'LONG": [
          -1,
          252
        ],
        "'DOUBLE": [
          -1,
          252
        ],
        "'FLOAT": [
          -1,
          252
        ],
        "'BOOLEAN": [
          -1,
          252
        ],
        "'VOID": [
          -1,
          252
        ],
        "'DATA": [
          -1,
          252
        ],
        "'IF": [
          -1,
          252
        ],
        "'FOR": [
          -1,
          252
        ],
        "'RETURN": [
          -1,
          252
        ],
        "'VAR": [
          -1,
          252
        ],
        "'ATCHECK": [
          -1,
          252
        ],
        "'ASSERTEQUALS": [
          -1,
          252
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          252
        ],
        "'ASSERTTRUE": [
          -1,
          252
        ],
        "'ASSERTFALSE": [
          -1,
          252
        ],
        "'ASSERTSATISFIES": [
          -1,
          252
        ],
        "'ASSERTRAISES": [
          -1,
          252
        ],
        "'SWITCH": [
          -1,
          252
        ],
        "'YIELD": [
          -1,
          252
        ],
        "'DASH": [
          -1,
          252
        ],
        "'BANG": [
          -1,
          252
        ],
        "'LBRACK": [
          -1,
          252
        ],
        "'NUMBER": [
          -1,
          252
        ],
        "'TRUE": [
          -1,
          252
        ],
        "'FALSE": [
          -1,
          252
        ],
        "'NULL": [
          -1,
          252
        ],
        "'PARENAFTERBRACE": [
          -1,
          252
        ],
        "'ASK": [
          -1,
          252
        ],
        "'NEW": [
          -1,
          252
        ]
      },
      {
        "'NAME": [
          -1,
          254
        ],
        "'PARENNOSPACE": [
          -1,
          254
        ],
        "'STRING": [
          -1,
          254
        ],
        "'RBRACE": [
          -1,
          254
        ],
        "'SPY": [
          -1,
          254
        ],
        "'PARENSPACE": [
          -1,
          254
        ],
        "'INT": [
          -1,
          254
        ],
        "'LONG": [
          -1,
          254
        ],
        "'DOUBLE": [
          -1,
          254
        ],
        "'FLOAT": [
          -1,
          254
        ],
        "'BOOLEAN": [
          -1,
          254
        ],
        "'VOID": [
          -1,
          254
        ],
        "'DATA": [
          -1,
          254
        ],
        "'IF": [
          -1,
          254
        ],
        "'FOR": [
          -1,
          254
        ],
        "'RETURN": [
          -1,
          254
        ],
        "'VAR": [
          -1,
          254
        ],
        "'ATCHECK": [
          -1,
          254
        ],
        "'ASSERTEQUALS": [
          -1,
          254
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          254
        ],
        "'ASSERTTRUE": [
          -1,
          254
        ],
        "'ASSERTFALSE": [
          -1,
          254
        ],
        "'ASSERTSATISFIES": [
          -1,
          254
        ],
        "'ASSERTRAISES": [
          -1,
          254
        ],
        "'SWITCH": [
          -1,
          254
        ],
        "'YIELD": [
          -1,
          254
        ],
        "'DASH": [
          -1,
          254
        ],
        "'BANG": [
          -1,
          254
        ],
        "'LBRACK": [
          -1,
          254
        ],
        "'NUMBER": [
          -1,
          254
        ],
        "'TRUE": [
          -1,
          254
        ],
        "'FALSE": [
          -1,
          254
        ],
        "'NULL": [
          -1,
          254
        ],
        "'PARENAFTERBRACE": [
          -1,
          254
        ],
        "'ASK": [
          -1,
          254
        ],
        "'NEW": [
          -1,
          254
        ]
      },
      {
        "'NAME": [
          -1,
          256
        ],
        "'PARENNOSPACE": [
          -1,
          256
        ],
        "'STRING": [
          -1,
          256
        ],
        "'RBRACE": [
          -1,
          256
        ],
        "'SPY": [
          -1,
          256
        ],
        "'PARENSPACE": [
          -1,
          256
        ],
        "'INT": [
          -1,
          256
        ],
        "'LONG": [
          -1,
          256
        ],
        "'DOUBLE": [
          -1,
          256
        ],
        "'FLOAT": [
          -1,
          256
        ],
        "'BOOLEAN": [
          -1,
          256
        ],
        "'VOID": [
          -1,
          256
        ],
        "'DATA": [
          -1,
          256
        ],
        "'IF": [
          -1,
          256
        ],
        "'FOR": [
          -1,
          256
        ],
        "'RETURN": [
          -1,
          256
        ],
        "'VAR": [
          -1,
          256
        ],
        "'ATCHECK": [
          -1,
          256
        ],
        "'ASSERTEQUALS": [
          -1,
          256
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          256
        ],
        "'ASSERTTRUE": [
          -1,
          256
        ],
        "'ASSERTFALSE": [
          -1,
          256
        ],
        "'ASSERTSATISFIES": [
          -1,
          256
        ],
        "'ASSERTRAISES": [
          -1,
          256
        ],
        "'SWITCH": [
          -1,
          256
        ],
        "'YIELD": [
          -1,
          256
        ],
        "'DASH": [
          -1,
          256
        ],
        "'BANG": [
          -1,
          256
        ],
        "'LBRACK": [
          -1,
          256
        ],
        "'NUMBER": [
          -1,
          256
        ],
        "'TRUE": [
          -1,
          256
        ],
        "'FALSE": [
          -1,
          256
        ],
        "'NULL": [
          -1,
          256
        ],
        "'PARENAFTERBRACE": [
          -1,
          256
        ],
        "'ASK": [
          -1,
          256
        ],
        "'NEW": [
          -1,
          256
        ]
      },
      {
        "'NAME": [
          -1,
          258
        ],
        "'PARENNOSPACE": [
          -1,
          258
        ],
        "'STRING": [
          -1,
          258
        ],
        "'RBRACE": [
          -1,
          258
        ],
        "'SPY": [
          -1,
          258
        ],
        "'PARENSPACE": [
          -1,
          258
        ],
        "'INT": [
          -1,
          258
        ],
        "'LONG": [
          -1,
          258
        ],
        "'DOUBLE": [
          -1,
          258
        ],
        "'FLOAT": [
          -1,
          258
        ],
        "'BOOLEAN": [
          -1,
          258
        ],
        "'VOID": [
          -1,
          258
        ],
        "'DATA": [
          -1,
          258
        ],
        "'IF": [
          -1,
          258
        ],
        "'FOR": [
          -1,
          258
        ],
        "'RETURN": [
          -1,
          258
        ],
        "'VAR": [
          -1,
          258
        ],
        "'ATCHECK": [
          -1,
          258
        ],
        "'ASSERTEQUALS": [
          -1,
          258
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          258
        ],
        "'ASSERTTRUE": [
          -1,
          258
        ],
        "'ASSERTFALSE": [
          -1,
          258
        ],
        "'ASSERTSATISFIES": [
          -1,
          258
        ],
        "'ASSERTRAISES": [
          -1,
          258
        ],
        "'SWITCH": [
          -1,
          258
        ],
        "'YIELD": [
          -1,
          258
        ],
        "'DASH": [
          -1,
          258
        ],
        "'BANG": [
          -1,
          258
        ],
        "'LBRACK": [
          -1,
          258
        ],
        "'NUMBER": [
          -1,
          258
        ],
        "'TRUE": [
          -1,
          258
        ],
        "'FALSE": [
          -1,
          258
        ],
        "'NULL": [
          -1,
          258
        ],
        "'PARENAFTERBRACE": [
          -1,
          258
        ],
        "'ASK": [
          -1,
          258
        ],
        "'NEW": [
          -1,
          258
        ]
      },
      {
        "'PARENSPACE": [
          242
        ]
      },
      {
        "'NAME": [
          -1,
          260
        ],
        "'PARENNOSPACE": [
          -1,
          260
        ],
        "'STRING": [
          -1,
          260
        ],
        "'RBRACE": [
          -1,
          260
        ],
        "'SPY": [
          -1,
          260
        ],
        "'PARENSPACE": [
          -1,
          260
        ],
        "'INT": [
          -1,
          260
        ],
        "'LONG": [
          -1,
          260
        ],
        "'DOUBLE": [
          -1,
          260
        ],
        "'FLOAT": [
          -1,
          260
        ],
        "'BOOLEAN": [
          -1,
          260
        ],
        "'VOID": [
          -1,
          260
        ],
        "'DATA": [
          -1,
          260
        ],
        "'IF": [
          -1,
          260
        ],
        "'FOR": [
          -1,
          260
        ],
        "'RETURN": [
          -1,
          260
        ],
        "'VAR": [
          -1,
          260
        ],
        "'ATCHECK": [
          -1,
          260
        ],
        "'ASSERTEQUALS": [
          -1,
          260
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          260
        ],
        "'ASSERTTRUE": [
          -1,
          260
        ],
        "'ASSERTFALSE": [
          -1,
          260
        ],
        "'ASSERTSATISFIES": [
          -1,
          260
        ],
        "'ASSERTRAISES": [
          -1,
          260
        ],
        "'SWITCH": [
          -1,
          260
        ],
        "'YIELD": [
          -1,
          260
        ],
        "'DASH": [
          -1,
          260
        ],
        "'BANG": [
          -1,
          260
        ],
        "'LBRACK": [
          -1,
          260
        ],
        "'NUMBER": [
          -1,
          260
        ],
        "'TRUE": [
          -1,
          260
        ],
        "'FALSE": [
          -1,
          260
        ],
        "'NULL": [
          -1,
          260
        ],
        "'PARENAFTERBRACE": [
          -1,
          260
        ],
        "'ASK": [
          -1,
          260
        ],
        "'NEW": [
          -1,
          260
        ]
      },
      {
        "'PARENSPACE": [
          243
        ]
      },
      {
        "'SEMI": [
          78
        ],
        "expr-stmt_I1?": [
          79
        ],
        "expr-stmt_I1": [
          80
        ],
        "'IS": [
          244
        ],
        "'ISNOT": [
          245
        ],
        "'SATISFIES": [
          246
        ],
        "'RAISES": [
          247
        ],
        "'NAME": [
          -1,
          66,
          68
        ],
        "'PARENNOSPACE": [
          -1,
          66,
          68
        ],
        "'STRING": [
          -1,
          66,
          68
        ],
        "'RBRACE": [
          -1,
          66,
          68
        ],
        "'SPY": [
          -1,
          66,
          68
        ],
        "'PARENSPACE": [
          -1,
          66,
          68
        ],
        "'INT": [
          -1,
          66,
          68
        ],
        "'LONG": [
          -1,
          66,
          68
        ],
        "'DOUBLE": [
          -1,
          66,
          68
        ],
        "'FLOAT": [
          -1,
          66,
          68
        ],
        "'BOOLEAN": [
          -1,
          66,
          68
        ],
        "'VOID": [
          -1,
          66,
          68
        ],
        "'DATA": [
          -1,
          66,
          68
        ],
        "'IF": [
          -1,
          66,
          68
        ],
        "'FOR": [
          -1,
          66,
          68
        ],
        "'RETURN": [
          -1,
          66,
          68
        ],
        "'VAR": [
          -1,
          66,
          68
        ],
        "'ATCHECK": [
          -1,
          66,
          68
        ],
        "'ASSERTEQUALS": [
          -1,
          66,
          68
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          66,
          68
        ],
        "'ASSERTTRUE": [
          -1,
          66,
          68
        ],
        "'ASSERTFALSE": [
          -1,
          66,
          68
        ],
        "'ASSERTSATISFIES": [
          -1,
          66,
          68
        ],
        "'ASSERTRAISES": [
          -1,
          66,
          68
        ],
        "'SWITCH": [
          -1,
          66,
          68
        ],
        "'YIELD": [
          -1,
          66,
          68
        ],
        "'DASH": [
          -1,
          66,
          68
        ],
        "'BANG": [
          -1,
          66,
          68
        ],
        "'LBRACK": [
          -1,
          66,
          68
        ],
        "'NUMBER": [
          -1,
          66,
          68
        ],
        "'TRUE": [
          -1,
          66,
          68
        ],
        "'FALSE": [
          -1,
          66,
          68
        ],
        "'NULL": [
          -1,
          66,
          68
        ],
        "'PARENAFTERBRACE": [
          -1,
          66,
          68
        ],
        "'ASK": [
          -1,
          66,
          68
        ],
        "'NEW": [
          -1,
          66,
          68
        ]
      },
      {
        "'PARENSPACE": [
          248
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'SEMI": [
          249
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          250
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          -1,
          262
        ],
        "'PARENNOSPACE": [
          -1,
          262
        ],
        "'STRING": [
          -1,
          262
        ],
        "'RBRACE": [
          -1,
          262
        ],
        "'SPY": [
          -1,
          262
        ],
        "'PARENSPACE": [
          -1,
          262
        ],
        "'INT": [
          -1,
          262
        ],
        "'LONG": [
          -1,
          262
        ],
        "'DOUBLE": [
          -1,
          262
        ],
        "'FLOAT": [
          -1,
          262
        ],
        "'BOOLEAN": [
          -1,
          262
        ],
        "'VOID": [
          -1,
          262
        ],
        "'DATA": [
          -1,
          262
        ],
        "'IF": [
          -1,
          262
        ],
        "'FOR": [
          -1,
          262
        ],
        "'RETURN": [
          -1,
          262
        ],
        "'VAR": [
          -1,
          262
        ],
        "'ATCHECK": [
          -1,
          262
        ],
        "'ASSERTEQUALS": [
          -1,
          262
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          262
        ],
        "'ASSERTTRUE": [
          -1,
          262
        ],
        "'ASSERTFALSE": [
          -1,
          262
        ],
        "'ASSERTSATISFIES": [
          -1,
          262
        ],
        "'ASSERTRAISES": [
          -1,
          262
        ],
        "'SWITCH": [
          -1,
          262
        ],
        "'YIELD": [
          -1,
          262
        ],
        "'DASH": [
          -1,
          262
        ],
        "'BANG": [
          -1,
          262
        ],
        "'LBRACK": [
          -1,
          262
        ],
        "'NUMBER": [
          -1,
          262
        ],
        "'TRUE": [
          -1,
          262
        ],
        "'FALSE": [
          -1,
          262
        ],
        "'NULL": [
          -1,
          262
        ],
        "'PARENAFTERBRACE": [
          -1,
          262
        ],
        "'ASK": [
          -1,
          262
        ],
        "'NEW": [
          -1,
          262
        ]
      },
      {
        "'PARENNOSPACE": [
          251
        ]
      },
      {
        "'PARENNOSPACE": [
          252
        ]
      },
      {
        "'PARENNOSPACE": [
          253
        ]
      },
      {
        "'PARENNOSPACE": [
          254
        ]
      },
      {
        "'PARENNOSPACE": [
          255
        ]
      },
      {
        "'PARENNOSPACE": [
          256
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          257
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          258
        ]
      },
      {
        "'LBRACE": [
          259
        ]
      },
      {
        "$": [
          -1,
          264
        ],
        "'NAME": [
          -1,
          264
        ],
        "'SEMI": [
          -1,
          264
        ],
        "'PARENNOSPACE": [
          -1,
          264
        ],
        "'STRING": [
          -1,
          264
        ],
        "'RPAREN": [
          -1,
          264
        ],
        "'RBRACE": [
          -1,
          264
        ],
        "'SPY": [
          -1,
          264
        ],
        "'PARENSPACE": [
          -1,
          264
        ],
        "'COMMA": [
          -1,
          264
        ],
        "'INT": [
          -1,
          264
        ],
        "'LONG": [
          -1,
          264
        ],
        "'DOUBLE": [
          -1,
          264
        ],
        "'FLOAT": [
          -1,
          264
        ],
        "'BOOLEAN": [
          -1,
          264
        ],
        "'VOID": [
          -1,
          264
        ],
        "'LT": [
          -1,
          264
        ],
        "'GT": [
          -1,
          264
        ],
        "'THINARROW": [
          -1,
          264
        ],
        "'DATA": [
          -1,
          264
        ],
        "'IF": [
          -1,
          264
        ],
        "'FOR": [
          -1,
          264
        ],
        "'RETURN": [
          -1,
          264
        ],
        "'VAR": [
          -1,
          264
        ],
        "'ATCHECK": [
          -1,
          264
        ],
        "'ASSERTEQUALS": [
          -1,
          264
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          264
        ],
        "'ASSERTTRUE": [
          -1,
          264
        ],
        "'ASSERTFALSE": [
          -1,
          264
        ],
        "'ASSERTSATISFIES": [
          -1,
          264
        ],
        "'ASSERTRAISES": [
          -1,
          264
        ],
        "'IS": [
          -1,
          264
        ],
        "'ISNOT": [
          -1,
          264
        ],
        "'SATISFIES": [
          -1,
          264
        ],
        "'RAISES": [
          -1,
          264
        ],
        "'SWITCH": [
          -1,
          264
        ],
        "'CASE": [
          -1,
          264
        ],
        "'DEFAULT": [
          -1,
          264
        ],
        "'YIELD": [
          -1,
          264
        ],
        "'PLUS": [
          -1,
          264
        ],
        "'DASH": [
          -1,
          264
        ],
        "'TIMES": [
          -1,
          264
        ],
        "'SLASH": [
          -1,
          264
        ],
        "'PERCENT": [
          -1,
          264
        ],
        "'EQUALEQUAL": [
          -1,
          264
        ],
        "'NEQ": [
          -1,
          264
        ],
        "'LEQ": [
          -1,
          264
        ],
        "'GEQ": [
          -1,
          264
        ],
        "'AND": [
          -1,
          264
        ],
        "'OR": [
          -1,
          264
        ],
        "'BANG": [
          -1,
          264
        ],
        "'LBRACK": [
          -1,
          264
        ],
        "'RBRACK": [
          -1,
          264
        ],
        "'NUMBER": [
          -1,
          264
        ],
        "'TRUE": [
          -1,
          264
        ],
        "'FALSE": [
          -1,
          264
        ],
        "'NULL": [
          -1,
          264
        ],
        "'PARENAFTERBRACE": [
          -1,
          264
        ],
        "'ASK": [
          -1,
          264
        ],
        "'NEW": [
          -1,
          264
        ]
      },
      {
        "'COMMA": [
          260
        ],
        "app-or-access_A0_I2_I1": [
          261
        ],
        "'RPAREN": [
          -1,
          266
        ]
      },
      {
        "$": [
          -1,
          268
        ],
        "'NAME": [
          -1,
          268
        ],
        "'SEMI": [
          -1,
          268
        ],
        "'PARENNOSPACE": [
          -1,
          268
        ],
        "'STRING": [
          -1,
          268
        ],
        "'RPAREN": [
          -1,
          268
        ],
        "'RBRACE": [
          -1,
          268
        ],
        "'SPY": [
          -1,
          268
        ],
        "'PARENSPACE": [
          -1,
          268
        ],
        "'COMMA": [
          -1,
          268
        ],
        "'INT": [
          -1,
          268
        ],
        "'LONG": [
          -1,
          268
        ],
        "'DOUBLE": [
          -1,
          268
        ],
        "'FLOAT": [
          -1,
          268
        ],
        "'BOOLEAN": [
          -1,
          268
        ],
        "'VOID": [
          -1,
          268
        ],
        "'LT": [
          -1,
          268
        ],
        "'GT": [
          -1,
          268
        ],
        "'THINARROW": [
          -1,
          268
        ],
        "'DATA": [
          -1,
          268
        ],
        "'IF": [
          -1,
          268
        ],
        "'FOR": [
          -1,
          268
        ],
        "'RETURN": [
          -1,
          268
        ],
        "'VAR": [
          -1,
          268
        ],
        "'ATCHECK": [
          -1,
          268
        ],
        "'ASSERTEQUALS": [
          -1,
          268
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          268
        ],
        "'ASSERTTRUE": [
          -1,
          268
        ],
        "'ASSERTFALSE": [
          -1,
          268
        ],
        "'ASSERTSATISFIES": [
          -1,
          268
        ],
        "'ASSERTRAISES": [
          -1,
          268
        ],
        "'IS": [
          -1,
          268
        ],
        "'ISNOT": [
          -1,
          268
        ],
        "'SATISFIES": [
          -1,
          268
        ],
        "'RAISES": [
          -1,
          268
        ],
        "'SWITCH": [
          -1,
          268
        ],
        "'CASE": [
          -1,
          268
        ],
        "'DEFAULT": [
          -1,
          268
        ],
        "'YIELD": [
          -1,
          268
        ],
        "'PLUS": [
          -1,
          268
        ],
        "'DASH": [
          -1,
          268
        ],
        "'TIMES": [
          -1,
          268
        ],
        "'SLASH": [
          -1,
          268
        ],
        "'PERCENT": [
          -1,
          268
        ],
        "'EQUALEQUAL": [
          -1,
          268
        ],
        "'NEQ": [
          -1,
          268
        ],
        "'LEQ": [
          -1,
          268
        ],
        "'GEQ": [
          -1,
          268
        ],
        "'AND": [
          -1,
          268
        ],
        "'OR": [
          -1,
          268
        ],
        "'BANG": [
          -1,
          268
        ],
        "'DOT": [
          -1,
          268
        ],
        "'LBRACK": [
          -1,
          268
        ],
        "'RBRACK": [
          -1,
          268
        ],
        "'NUMBER": [
          -1,
          268
        ],
        "'TRUE": [
          -1,
          268
        ],
        "'FALSE": [
          -1,
          268
        ],
        "'NULL": [
          -1,
          268
        ],
        "'PARENAFTERBRACE": [
          -1,
          268
        ],
        "'ASK": [
          -1,
          268
        ],
        "'NEW": [
          -1,
          268
        ]
      },
      {
        "$": [
          -1,
          270
        ],
        "'NAME": [
          -1,
          270
        ],
        "'SEMI": [
          -1,
          270
        ],
        "'PARENNOSPACE": [
          -1,
          270
        ],
        "'STRING": [
          -1,
          270
        ],
        "'RPAREN": [
          -1,
          270
        ],
        "'RBRACE": [
          -1,
          270
        ],
        "'SPY": [
          -1,
          270
        ],
        "'PARENSPACE": [
          -1,
          270
        ],
        "'COMMA": [
          -1,
          270
        ],
        "'INT": [
          -1,
          270
        ],
        "'LONG": [
          -1,
          270
        ],
        "'DOUBLE": [
          -1,
          270
        ],
        "'FLOAT": [
          -1,
          270
        ],
        "'BOOLEAN": [
          -1,
          270
        ],
        "'VOID": [
          -1,
          270
        ],
        "'LT": [
          -1,
          270
        ],
        "'GT": [
          -1,
          270
        ],
        "'THINARROW": [
          -1,
          270
        ],
        "'DATA": [
          -1,
          270
        ],
        "'IF": [
          -1,
          270
        ],
        "'FOR": [
          -1,
          270
        ],
        "'RETURN": [
          -1,
          270
        ],
        "'VAR": [
          -1,
          270
        ],
        "'ATCHECK": [
          -1,
          270
        ],
        "'ASSERTEQUALS": [
          -1,
          270
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          270
        ],
        "'ASSERTTRUE": [
          -1,
          270
        ],
        "'ASSERTFALSE": [
          -1,
          270
        ],
        "'ASSERTSATISFIES": [
          -1,
          270
        ],
        "'ASSERTRAISES": [
          -1,
          270
        ],
        "'IS": [
          -1,
          270
        ],
        "'ISNOT": [
          -1,
          270
        ],
        "'SATISFIES": [
          -1,
          270
        ],
        "'RAISES": [
          -1,
          270
        ],
        "'SWITCH": [
          -1,
          270
        ],
        "'CASE": [
          -1,
          270
        ],
        "'DEFAULT": [
          -1,
          270
        ],
        "'YIELD": [
          -1,
          270
        ],
        "'PLUS": [
          -1,
          270
        ],
        "'DASH": [
          -1,
          270
        ],
        "'TIMES": [
          -1,
          270
        ],
        "'SLASH": [
          -1,
          270
        ],
        "'PERCENT": [
          -1,
          270
        ],
        "'EQUALEQUAL": [
          -1,
          270
        ],
        "'NEQ": [
          -1,
          270
        ],
        "'LEQ": [
          -1,
          270
        ],
        "'GEQ": [
          -1,
          270
        ],
        "'AND": [
          -1,
          270
        ],
        "'OR": [
          -1,
          270
        ],
        "'BANG": [
          -1,
          270
        ],
        "'DOT": [
          -1,
          270
        ],
        "'LBRACK": [
          -1,
          270
        ],
        "'RBRACK": [
          -1,
          270
        ],
        "'NUMBER": [
          -1,
          270
        ],
        "'TRUE": [
          -1,
          270
        ],
        "'FALSE": [
          -1,
          270
        ],
        "'NULL": [
          -1,
          270
        ],
        "'PARENAFTERBRACE": [
          -1,
          270
        ],
        "'ASK": [
          -1,
          270
        ],
        "'NEW": [
          -1,
          270
        ]
      },
      {
        "construct-expr_A0_I3_I1*": [
          262
        ],
        "'COMMA": [
          -1,
          272
        ],
        "'RBRACK": [
          -1,
          274,
          272
        ]
      },
      {
        "'RBRACK": [
          263
        ]
      },
      {
        "'RBRACK": [
          -1,
          276
        ]
      },
      {
        "'NAME": [
          264
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          265
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "ask-expr_A0_I4*": [
          266
        ],
        "ask-expr_A1_I4*": [
          267
        ],
        "'NAME": [
          -1,
          278,
          280
        ],
        "'STRING": [
          -1,
          278,
          280
        ],
        "'RBRACE": [
          -1,
          278
        ],
        "'PARENSPACE": [
          -1,
          278,
          280
        ],
        "'SWITCH": [
          -1,
          278,
          280
        ],
        "'DASH": [
          -1,
          278,
          280
        ],
        "'BANG": [
          -1,
          278,
          280
        ],
        "'LBRACK": [
          -1,
          278,
          280
        ],
        "'NUMBER": [
          -1,
          278,
          280
        ],
        "'TRUE": [
          -1,
          278,
          280
        ],
        "'FALSE": [
          -1,
          278,
          280
        ],
        "'NULL": [
          -1,
          278,
          280
        ],
        "'PARENAFTERBRACE": [
          -1,
          278,
          280
        ],
        "'ASK": [
          -1,
          278,
          280
        ],
        "'OTHERWISE": [
          -1,
          280
        ],
        "'NEW": [
          -1,
          278,
          280
        ]
      },
      {
        "new-expr_I3_I1*": [
          268
        ],
        "'RPAREN": [
          -1,
          282,
          284
        ],
        "'COMMA": [
          -1,
          284
        ]
      },
      {
        "'RPAREN": [
          269
        ]
      },
      {
        "'RPAREN": [
          -1,
          286
        ]
      },
      {
        "$": [
          -1,
          288
        ],
        "'IMPORT": [
          -1,
          288
        ],
        "'NAME": [
          -1,
          288
        ],
        "'PARENNOSPACE": [
          -1,
          288
        ],
        "'STRING": [
          -1,
          288
        ],
        "'INCLUDE": [
          -1,
          288
        ],
        "'PARENSPACE": [
          -1,
          288
        ],
        "'INT": [
          -1,
          288
        ],
        "'LONG": [
          -1,
          288
        ],
        "'DOUBLE": [
          -1,
          288
        ],
        "'FLOAT": [
          -1,
          288
        ],
        "'BOOLEAN": [
          -1,
          288
        ],
        "'VOID": [
          -1,
          288
        ],
        "'DATA": [
          -1,
          288
        ],
        "'VAR": [
          -1,
          288
        ],
        "'ATCHECK": [
          -1,
          288
        ],
        "'SWITCH": [
          -1,
          288
        ],
        "'DASH": [
          -1,
          288
        ],
        "'BANG": [
          -1,
          288
        ],
        "'LBRACK": [
          -1,
          288
        ],
        "'NUMBER": [
          -1,
          288
        ],
        "'TRUE": [
          -1,
          288
        ],
        "'FALSE": [
          -1,
          288
        ],
        "'NULL": [
          -1,
          288
        ],
        "'PARENAFTERBRACE": [
          -1,
          288
        ],
        "'ASK": [
          -1,
          288
        ],
        "'NEW": [
          -1,
          288
        ]
      },
      {
        "'SEMI": [
          270
        ],
        "'AS": [
          271
        ]
      },
      {
        "$": [
          -1,
          290
        ],
        "'IMPORT": [
          -1,
          290
        ],
        "'NAME": [
          -1,
          290
        ],
        "'PARENNOSPACE": [
          -1,
          290
        ],
        "'STRING": [
          -1,
          290
        ],
        "'INCLUDE": [
          -1,
          290
        ],
        "'PARENSPACE": [
          -1,
          290
        ],
        "'INT": [
          -1,
          290
        ],
        "'LONG": [
          -1,
          290
        ],
        "'DOUBLE": [
          -1,
          290
        ],
        "'FLOAT": [
          -1,
          290
        ],
        "'BOOLEAN": [
          -1,
          290
        ],
        "'VOID": [
          -1,
          290
        ],
        "'DATA": [
          -1,
          290
        ],
        "'VAR": [
          -1,
          290
        ],
        "'ATCHECK": [
          -1,
          290
        ],
        "'SWITCH": [
          -1,
          290
        ],
        "'DASH": [
          -1,
          290
        ],
        "'BANG": [
          -1,
          290
        ],
        "'LBRACK": [
          -1,
          290
        ],
        "'NUMBER": [
          -1,
          290
        ],
        "'TRUE": [
          -1,
          290
        ],
        "'FALSE": [
          -1,
          290
        ],
        "'NULL": [
          -1,
          290
        ],
        "'PARENAFTERBRACE": [
          -1,
          290
        ],
        "'ASK": [
          -1,
          290
        ],
        "'NEW": [
          -1,
          290
        ]
      },
      {
        "'SEMI": [
          272
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          273
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'NAME": [
          -1,
          292
        ],
        "'RPAREN": [
          -1,
          292
        ],
        "'COMMA": [
          -1,
          292
        ],
        "'GT": [
          -1,
          292
        ],
        "'THINARROW": [
          -1,
          292
        ]
      },
      {
        "'COMMA": [
          -1,
          294
        ],
        "'GT": [
          -1,
          294
        ]
      },
      {
        "'RPAREN": [
          -1,
          296
        ],
        "'COMMA": [
          -1,
          296
        ]
      },
      {
        "$": [
          -1,
          298
        ],
        "'NAME": [
          -1,
          298
        ],
        "'SEMI": [
          -1,
          298
        ],
        "'PARENNOSPACE": [
          -1,
          298
        ],
        "'STRING": [
          -1,
          298
        ],
        "'RPAREN": [
          -1,
          298
        ],
        "'RBRACE": [
          -1,
          298
        ],
        "'SPY": [
          -1,
          298
        ],
        "'PARENSPACE": [
          -1,
          298
        ],
        "'COMMA": [
          -1,
          298
        ],
        "'INT": [
          -1,
          298
        ],
        "'LONG": [
          -1,
          298
        ],
        "'DOUBLE": [
          -1,
          298
        ],
        "'FLOAT": [
          -1,
          298
        ],
        "'BOOLEAN": [
          -1,
          298
        ],
        "'VOID": [
          -1,
          298
        ],
        "'DATA": [
          -1,
          298
        ],
        "'IF": [
          -1,
          298
        ],
        "'FOR": [
          -1,
          298
        ],
        "'RETURN": [
          -1,
          298
        ],
        "'VAR": [
          -1,
          298
        ],
        "'ATCHECK": [
          -1,
          298
        ],
        "'ASSERTEQUALS": [
          -1,
          298
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          298
        ],
        "'ASSERTTRUE": [
          -1,
          298
        ],
        "'ASSERTFALSE": [
          -1,
          298
        ],
        "'ASSERTSATISFIES": [
          -1,
          298
        ],
        "'ASSERTRAISES": [
          -1,
          298
        ],
        "'IS": [
          -1,
          298
        ],
        "'ISNOT": [
          -1,
          298
        ],
        "'SATISFIES": [
          -1,
          298
        ],
        "'RAISES": [
          -1,
          298
        ],
        "'SWITCH": [
          -1,
          298
        ],
        "'CASE": [
          -1,
          298
        ],
        "'DEFAULT": [
          -1,
          298
        ],
        "'YIELD": [
          -1,
          298
        ],
        "'DASH": [
          -1,
          298
        ],
        "'BANG": [
          -1,
          298
        ],
        "'LBRACK": [
          -1,
          298
        ],
        "'RBRACK": [
          -1,
          298
        ],
        "'NUMBER": [
          -1,
          298
        ],
        "'TRUE": [
          -1,
          298
        ],
        "'FALSE": [
          -1,
          298
        ],
        "'NULL": [
          -1,
          298
        ],
        "'PARENAFTERBRACE": [
          -1,
          298
        ],
        "'ASK": [
          -1,
          298
        ],
        "'NEW": [
          -1,
          298
        ]
      },
      {
        "'COMMA": [
          -1,
          300
        ],
        "'THINARROW": [
          -1,
          300
        ]
      },
      {
        "'NAME": [
          -1,
          302
        ],
        "'RPAREN": [
          -1,
          302
        ],
        "'COMMA": [
          -1,
          302
        ],
        "'GT": [
          -1,
          302
        ],
        "'THINARROW": [
          -1,
          302
        ]
      },
      {
        "$": [
          -1,
          304
        ],
        "'NAME": [
          -1,
          304
        ],
        "'SEMI": [
          -1,
          304
        ],
        "'PARENNOSPACE": [
          -1,
          304
        ],
        "'STRING": [
          -1,
          304
        ],
        "'RPAREN": [
          -1,
          304
        ],
        "'RBRACE": [
          -1,
          304
        ],
        "'SPY": [
          -1,
          304
        ],
        "'PARENSPACE": [
          -1,
          304
        ],
        "'COMMA": [
          -1,
          304
        ],
        "'INT": [
          -1,
          304
        ],
        "'LONG": [
          -1,
          304
        ],
        "'DOUBLE": [
          -1,
          304
        ],
        "'FLOAT": [
          -1,
          304
        ],
        "'BOOLEAN": [
          -1,
          304
        ],
        "'VOID": [
          -1,
          304
        ],
        "'DATA": [
          -1,
          304
        ],
        "'IF": [
          -1,
          304
        ],
        "'FOR": [
          -1,
          304
        ],
        "'RETURN": [
          -1,
          304
        ],
        "'VAR": [
          -1,
          304
        ],
        "'ATCHECK": [
          -1,
          304
        ],
        "'ASSERTEQUALS": [
          -1,
          304
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          304
        ],
        "'ASSERTTRUE": [
          -1,
          304
        ],
        "'ASSERTFALSE": [
          -1,
          304
        ],
        "'ASSERTSATISFIES": [
          -1,
          304
        ],
        "'ASSERTRAISES": [
          -1,
          304
        ],
        "'IS": [
          -1,
          304
        ],
        "'ISNOT": [
          -1,
          304
        ],
        "'SATISFIES": [
          -1,
          304
        ],
        "'RAISES": [
          -1,
          304
        ],
        "'SWITCH": [
          -1,
          304
        ],
        "'CASE": [
          -1,
          304
        ],
        "'DEFAULT": [
          -1,
          304
        ],
        "'YIELD": [
          -1,
          304
        ],
        "'DASH": [
          -1,
          304
        ],
        "'BANG": [
          -1,
          304
        ],
        "'LBRACK": [
          -1,
          304
        ],
        "'RBRACK": [
          -1,
          304
        ],
        "'NUMBER": [
          -1,
          304
        ],
        "'TRUE": [
          -1,
          304
        ],
        "'FALSE": [
          -1,
          304
        ],
        "'NULL": [
          -1,
          304
        ],
        "'PARENAFTERBRACE": [
          -1,
          304
        ],
        "'ASK": [
          -1,
          304
        ],
        "'NEW": [
          -1,
          304
        ]
      },
      {
        "'RPAREN": [
          -1,
          306
        ],
        "'COMMA": [
          -1,
          306
        ]
      },
      {
        "'RPAREN": [
          -1,
          308
        ],
        "'COMMA": [
          -1,
          308
        ]
      },
      {
        "block": [
          274
        ],
        "'LBRACE": [
          275
        ]
      },
      {
        "'COMMA": [
          276
        ],
        "fun-decl_I3_I1": [
          277
        ],
        "'RPAREN": [
          -1,
          310
        ]
      },
      {
        "$": [
          -1,
          312
        ],
        "'NAME": [
          -1,
          312
        ],
        "'PARENNOSPACE": [
          -1,
          312
        ],
        "'STRING": [
          -1,
          312
        ],
        "'RBRACE": [
          -1,
          312
        ],
        "'SPY": [
          -1,
          312
        ],
        "'PARENSPACE": [
          -1,
          312
        ],
        "'INT": [
          -1,
          312
        ],
        "'LONG": [
          -1,
          312
        ],
        "'DOUBLE": [
          -1,
          312
        ],
        "'FLOAT": [
          -1,
          312
        ],
        "'BOOLEAN": [
          -1,
          312
        ],
        "'VOID": [
          -1,
          312
        ],
        "'DATA": [
          -1,
          312
        ],
        "'IF": [
          -1,
          312
        ],
        "'FOR": [
          -1,
          312
        ],
        "'RETURN": [
          -1,
          312
        ],
        "'VAR": [
          -1,
          312
        ],
        "'ATCHECK": [
          -1,
          312
        ],
        "'ASSERTEQUALS": [
          -1,
          312
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          312
        ],
        "'ASSERTTRUE": [
          -1,
          312
        ],
        "'ASSERTFALSE": [
          -1,
          312
        ],
        "'ASSERTSATISFIES": [
          -1,
          312
        ],
        "'ASSERTRAISES": [
          -1,
          312
        ],
        "'SWITCH": [
          -1,
          312
        ],
        "'YIELD": [
          -1,
          312
        ],
        "'DASH": [
          -1,
          312
        ],
        "'BANG": [
          -1,
          312
        ],
        "'LBRACK": [
          -1,
          312
        ],
        "'NUMBER": [
          -1,
          312
        ],
        "'TRUE": [
          -1,
          312
        ],
        "'FALSE": [
          -1,
          312
        ],
        "'NULL": [
          -1,
          312
        ],
        "'PARENAFTERBRACE": [
          -1,
          312
        ],
        "'ASK": [
          -1,
          312
        ],
        "'NEW": [
          -1,
          312
        ]
      },
      {
        "$": [
          -1,
          314
        ],
        "'NAME": [
          -1,
          314
        ],
        "'PARENNOSPACE": [
          -1,
          314
        ],
        "'STRING": [
          -1,
          314
        ],
        "'RBRACE": [
          -1,
          314
        ],
        "'SPY": [
          -1,
          314
        ],
        "'PARENSPACE": [
          -1,
          314
        ],
        "'INT": [
          -1,
          314
        ],
        "'LONG": [
          -1,
          314
        ],
        "'DOUBLE": [
          -1,
          314
        ],
        "'FLOAT": [
          -1,
          314
        ],
        "'BOOLEAN": [
          -1,
          314
        ],
        "'VOID": [
          -1,
          314
        ],
        "'DATA": [
          -1,
          314
        ],
        "'IF": [
          -1,
          314
        ],
        "'FOR": [
          -1,
          314
        ],
        "'RETURN": [
          -1,
          314
        ],
        "'VAR": [
          -1,
          314
        ],
        "'ATCHECK": [
          -1,
          314
        ],
        "'ASSERTEQUALS": [
          -1,
          314
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          314
        ],
        "'ASSERTTRUE": [
          -1,
          314
        ],
        "'ASSERTFALSE": [
          -1,
          314
        ],
        "'ASSERTSATISFIES": [
          -1,
          314
        ],
        "'ASSERTRAISES": [
          -1,
          314
        ],
        "'SWITCH": [
          -1,
          314
        ],
        "'YIELD": [
          -1,
          314
        ],
        "'DASH": [
          -1,
          314
        ],
        "'BANG": [
          -1,
          314
        ],
        "'LBRACK": [
          -1,
          314
        ],
        "'NUMBER": [
          -1,
          314
        ],
        "'TRUE": [
          -1,
          314
        ],
        "'FALSE": [
          -1,
          314
        ],
        "'NULL": [
          -1,
          314
        ],
        "'PARENAFTERBRACE": [
          -1,
          314
        ],
        "'ASK": [
          -1,
          314
        ],
        "'NEW": [
          -1,
          314
        ]
      },
      {
        "$": [
          -1,
          316
        ],
        "'NAME": [
          -1,
          316
        ],
        "'PARENNOSPACE": [
          -1,
          316
        ],
        "'STRING": [
          -1,
          316
        ],
        "'RBRACE": [
          -1,
          316
        ],
        "'SPY": [
          -1,
          316
        ],
        "'PARENSPACE": [
          -1,
          316
        ],
        "'INT": [
          -1,
          316
        ],
        "'LONG": [
          -1,
          316
        ],
        "'DOUBLE": [
          -1,
          316
        ],
        "'FLOAT": [
          -1,
          316
        ],
        "'BOOLEAN": [
          -1,
          316
        ],
        "'VOID": [
          -1,
          316
        ],
        "'DATA": [
          -1,
          316
        ],
        "'IF": [
          -1,
          316
        ],
        "'FOR": [
          -1,
          316
        ],
        "'RETURN": [
          -1,
          316
        ],
        "'VAR": [
          -1,
          316
        ],
        "'ATCHECK": [
          -1,
          316
        ],
        "'ASSERTEQUALS": [
          -1,
          316
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          316
        ],
        "'ASSERTTRUE": [
          -1,
          316
        ],
        "'ASSERTFALSE": [
          -1,
          316
        ],
        "'ASSERTSATISFIES": [
          -1,
          316
        ],
        "'ASSERTRAISES": [
          -1,
          316
        ],
        "'SWITCH": [
          -1,
          316
        ],
        "'YIELD": [
          -1,
          316
        ],
        "'DASH": [
          -1,
          316
        ],
        "'BANG": [
          -1,
          316
        ],
        "'LBRACK": [
          -1,
          316
        ],
        "'NUMBER": [
          -1,
          316
        ],
        "'TRUE": [
          -1,
          316
        ],
        "'FALSE": [
          -1,
          316
        ],
        "'NULL": [
          -1,
          316
        ],
        "'PARENAFTERBRACE": [
          -1,
          316
        ],
        "'ASK": [
          -1,
          316
        ],
        "'NEW": [
          -1,
          316
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          278
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "variant-decl_A0_I2?": [
          279
        ],
        "variant-decl_A0_I2": [
          280
        ],
        "variant-member": [
          281
        ],
        "'RPAREN": [
          -1,
          318
        ]
      },
      {
        "'SEMI": [
          282
        ],
        "data-decl_I5?": [
          283
        ],
        "data-decl_I4": [
          284
        ],
        "data-decl_I5": [
          285
        ],
        "'RBRACE": [
          -1,
          320
        ]
      },
      {
        "'SEMI": [
          286
        ],
        "var-stmt_I5?": [
          287
        ],
        "var-stmt_I5": [
          288
        ],
        "$": [
          -1,
          322,
          324
        ],
        "'NAME": [
          -1,
          322,
          324
        ],
        "'PARENNOSPACE": [
          -1,
          322,
          324
        ],
        "'STRING": [
          -1,
          322,
          324
        ],
        "'RBRACE": [
          -1,
          322,
          324
        ],
        "'SPY": [
          -1,
          322,
          324
        ],
        "'PARENSPACE": [
          -1,
          322,
          324
        ],
        "'INT": [
          -1,
          322,
          324
        ],
        "'LONG": [
          -1,
          322,
          324
        ],
        "'DOUBLE": [
          -1,
          322,
          324
        ],
        "'FLOAT": [
          -1,
          322,
          324
        ],
        "'BOOLEAN": [
          -1,
          322,
          324
        ],
        "'VOID": [
          -1,
          322,
          324
        ],
        "'DATA": [
          -1,
          322,
          324
        ],
        "'IF": [
          -1,
          322,
          324
        ],
        "'FOR": [
          -1,
          322,
          324
        ],
        "'RETURN": [
          -1,
          322,
          324
        ],
        "'VAR": [
          -1,
          322,
          324
        ],
        "'ATCHECK": [
          -1,
          322,
          324
        ],
        "'ASSERTEQUALS": [
          -1,
          322,
          324
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          322,
          324
        ],
        "'ASSERTTRUE": [
          -1,
          322,
          324
        ],
        "'ASSERTFALSE": [
          -1,
          322,
          324
        ],
        "'ASSERTSATISFIES": [
          -1,
          322,
          324
        ],
        "'ASSERTRAISES": [
          -1,
          322,
          324
        ],
        "'SWITCH": [
          -1,
          322,
          324
        ],
        "'YIELD": [
          -1,
          322,
          324
        ],
        "'DASH": [
          -1,
          322,
          324
        ],
        "'BANG": [
          -1,
          322,
          324
        ],
        "'LBRACK": [
          -1,
          322,
          324
        ],
        "'NUMBER": [
          -1,
          322,
          324
        ],
        "'TRUE": [
          -1,
          322,
          324
        ],
        "'FALSE": [
          -1,
          322,
          324
        ],
        "'NULL": [
          -1,
          322,
          324
        ],
        "'PARENAFTERBRACE": [
          -1,
          322,
          324
        ],
        "'ASK": [
          -1,
          322,
          324
        ],
        "'NEW": [
          -1,
          322,
          324
        ]
      },
      {
        "'NAME": [
          289
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          290
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          291
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          292
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          293
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          294
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          295
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'NAME": [
          -1,
          326
        ],
        "'PARENNOSPACE": [
          -1,
          326
        ],
        "'STRING": [
          -1,
          326
        ],
        "'RBRACE": [
          -1,
          326
        ],
        "'SPY": [
          -1,
          326
        ],
        "'PARENSPACE": [
          -1,
          326
        ],
        "'INT": [
          -1,
          326
        ],
        "'LONG": [
          -1,
          326
        ],
        "'DOUBLE": [
          -1,
          326
        ],
        "'FLOAT": [
          -1,
          326
        ],
        "'BOOLEAN": [
          -1,
          326
        ],
        "'VOID": [
          -1,
          326
        ],
        "'DATA": [
          -1,
          326
        ],
        "'IF": [
          -1,
          326
        ],
        "'FOR": [
          -1,
          326
        ],
        "'RETURN": [
          -1,
          326
        ],
        "'VAR": [
          -1,
          326
        ],
        "'ATCHECK": [
          -1,
          326
        ],
        "'ASSERTEQUALS": [
          -1,
          326
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          326
        ],
        "'ASSERTTRUE": [
          -1,
          326
        ],
        "'ASSERTFALSE": [
          -1,
          326
        ],
        "'ASSERTSATISFIES": [
          -1,
          326
        ],
        "'ASSERTRAISES": [
          -1,
          326
        ],
        "'SWITCH": [
          -1,
          326
        ],
        "'YIELD": [
          -1,
          326
        ],
        "'DASH": [
          -1,
          326
        ],
        "'BANG": [
          -1,
          326
        ],
        "'LBRACK": [
          -1,
          326
        ],
        "'NUMBER": [
          -1,
          326
        ],
        "'TRUE": [
          -1,
          326
        ],
        "'FALSE": [
          -1,
          326
        ],
        "'NULL": [
          -1,
          326
        ],
        "'PARENAFTERBRACE": [
          -1,
          326
        ],
        "'ASK": [
          -1,
          326
        ],
        "'NEW": [
          -1,
          326
        ]
      },
      {
        "'SEMI": [
          296
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          297
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          298
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          299
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          300
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          301
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          302
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'SEMI": [
          303
        ],
        "yield-stmt_I2?": [
          304
        ],
        "yield-stmt_I2": [
          305
        ],
        "'NAME": [
          -1,
          328,
          330
        ],
        "'PARENNOSPACE": [
          -1,
          328,
          330
        ],
        "'STRING": [
          -1,
          328,
          330
        ],
        "'RBRACE": [
          -1,
          328,
          330
        ],
        "'SPY": [
          -1,
          328,
          330
        ],
        "'PARENSPACE": [
          -1,
          328,
          330
        ],
        "'INT": [
          -1,
          328,
          330
        ],
        "'LONG": [
          -1,
          328,
          330
        ],
        "'DOUBLE": [
          -1,
          328,
          330
        ],
        "'FLOAT": [
          -1,
          328,
          330
        ],
        "'BOOLEAN": [
          -1,
          328,
          330
        ],
        "'VOID": [
          -1,
          328,
          330
        ],
        "'DATA": [
          -1,
          328,
          330
        ],
        "'IF": [
          -1,
          328,
          330
        ],
        "'FOR": [
          -1,
          328,
          330
        ],
        "'RETURN": [
          -1,
          328,
          330
        ],
        "'VAR": [
          -1,
          328,
          330
        ],
        "'ATCHECK": [
          -1,
          328,
          330
        ],
        "'ASSERTEQUALS": [
          -1,
          328,
          330
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          328,
          330
        ],
        "'ASSERTTRUE": [
          -1,
          328,
          330
        ],
        "'ASSERTFALSE": [
          -1,
          328,
          330
        ],
        "'ASSERTSATISFIES": [
          -1,
          328,
          330
        ],
        "'ASSERTRAISES": [
          -1,
          328,
          330
        ],
        "'SWITCH": [
          -1,
          328,
          330
        ],
        "'CASE": [
          -1,
          328,
          330
        ],
        "'DEFAULT": [
          -1,
          328,
          330
        ],
        "'YIELD": [
          -1,
          328,
          330
        ],
        "'DASH": [
          -1,
          328,
          330
        ],
        "'BANG": [
          -1,
          328,
          330
        ],
        "'LBRACK": [
          -1,
          328,
          330
        ],
        "'NUMBER": [
          -1,
          328,
          330
        ],
        "'TRUE": [
          -1,
          328,
          330
        ],
        "'FALSE": [
          -1,
          328,
          330
        ],
        "'NULL": [
          -1,
          328,
          330
        ],
        "'PARENAFTERBRACE": [
          -1,
          328,
          330
        ],
        "'ASK": [
          -1,
          328,
          330
        ],
        "'NEW": [
          -1,
          328,
          330
        ]
      },
      {
        "'LBRACE": [
          306
        ]
      },
      {
        "switch-expr_I5*": [
          307
        ],
        "'RBRACE": [
          -1,
          332
        ],
        "'CASE": [
          -1,
          332
        ],
        "'DEFAULT": [
          -1,
          332
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          308
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          -1,
          334
        ],
        "'COMMA": [
          -1,
          334
        ]
      },
      {
        "'COMMA": [
          309
        ],
        "construct-expr_A0_I3_I1": [
          310
        ],
        "'RBRACK": [
          -1,
          336
        ]
      },
      {
        "$": [
          -1,
          338
        ],
        "'NAME": [
          -1,
          338
        ],
        "'SEMI": [
          -1,
          338
        ],
        "'PARENNOSPACE": [
          -1,
          338
        ],
        "'STRING": [
          -1,
          338
        ],
        "'RPAREN": [
          -1,
          338
        ],
        "'RBRACE": [
          -1,
          338
        ],
        "'SPY": [
          -1,
          338
        ],
        "'PARENSPACE": [
          -1,
          338
        ],
        "'COMMA": [
          -1,
          338
        ],
        "'INT": [
          -1,
          338
        ],
        "'LONG": [
          -1,
          338
        ],
        "'DOUBLE": [
          -1,
          338
        ],
        "'FLOAT": [
          -1,
          338
        ],
        "'BOOLEAN": [
          -1,
          338
        ],
        "'VOID": [
          -1,
          338
        ],
        "'LT": [
          -1,
          338
        ],
        "'GT": [
          -1,
          338
        ],
        "'THINARROW": [
          -1,
          338
        ],
        "'DATA": [
          -1,
          338
        ],
        "'IF": [
          -1,
          338
        ],
        "'FOR": [
          -1,
          338
        ],
        "'RETURN": [
          -1,
          338
        ],
        "'VAR": [
          -1,
          338
        ],
        "'ATCHECK": [
          -1,
          338
        ],
        "'ASSERTEQUALS": [
          -1,
          338
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          338
        ],
        "'ASSERTTRUE": [
          -1,
          338
        ],
        "'ASSERTFALSE": [
          -1,
          338
        ],
        "'ASSERTSATISFIES": [
          -1,
          338
        ],
        "'ASSERTRAISES": [
          -1,
          338
        ],
        "'IS": [
          -1,
          338
        ],
        "'ISNOT": [
          -1,
          338
        ],
        "'SATISFIES": [
          -1,
          338
        ],
        "'RAISES": [
          -1,
          338
        ],
        "'SWITCH": [
          -1,
          338
        ],
        "'CASE": [
          -1,
          338
        ],
        "'DEFAULT": [
          -1,
          338
        ],
        "'YIELD": [
          -1,
          338
        ],
        "'PLUS": [
          -1,
          338
        ],
        "'DASH": [
          -1,
          338
        ],
        "'TIMES": [
          -1,
          338
        ],
        "'SLASH": [
          -1,
          338
        ],
        "'PERCENT": [
          -1,
          338
        ],
        "'EQUALEQUAL": [
          -1,
          338
        ],
        "'NEQ": [
          -1,
          338
        ],
        "'LEQ": [
          -1,
          338
        ],
        "'GEQ": [
          -1,
          338
        ],
        "'AND": [
          -1,
          338
        ],
        "'OR": [
          -1,
          338
        ],
        "'BANG": [
          -1,
          338
        ],
        "'DOT": [
          -1,
          338
        ],
        "'LBRACK": [
          -1,
          338
        ],
        "'RBRACK": [
          -1,
          338
        ],
        "'NUMBER": [
          -1,
          338
        ],
        "'TRUE": [
          -1,
          338
        ],
        "'FALSE": [
          -1,
          338
        ],
        "'NULL": [
          -1,
          338
        ],
        "'PARENAFTERBRACE": [
          -1,
          338
        ],
        "'ASK": [
          -1,
          338
        ],
        "'NEW": [
          -1,
          338
        ]
      },
      {
        "'COLON": [
          311
        ]
      },
      {
        "'SEMI": [
          -1,
          340
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'RBRACE": [
          312
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          149
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "ask-branch": [
          313
        ],
        "ask-expr_A0_I4": [
          314
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          88
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "binop-expr": [
          149
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "ask-branch": [
          315
        ],
        "otherwise-branch": [
          316
        ],
        "ask-expr_A1_I4": [
          317
        ],
        "'OTHERWISE": [
          318
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'COMMA": [
          319
        ],
        "new-expr_I3_I1": [
          320
        ],
        "'RPAREN": [
          -1,
          342
        ]
      },
      {
        "$": [
          -1,
          344
        ],
        "'NAME": [
          -1,
          344
        ],
        "'SEMI": [
          -1,
          344
        ],
        "'PARENNOSPACE": [
          -1,
          344
        ],
        "'STRING": [
          -1,
          344
        ],
        "'RPAREN": [
          -1,
          344
        ],
        "'RBRACE": [
          -1,
          344
        ],
        "'SPY": [
          -1,
          344
        ],
        "'PARENSPACE": [
          -1,
          344
        ],
        "'COMMA": [
          -1,
          344
        ],
        "'INT": [
          -1,
          344
        ],
        "'LONG": [
          -1,
          344
        ],
        "'DOUBLE": [
          -1,
          344
        ],
        "'FLOAT": [
          -1,
          344
        ],
        "'BOOLEAN": [
          -1,
          344
        ],
        "'VOID": [
          -1,
          344
        ],
        "'LT": [
          -1,
          344
        ],
        "'GT": [
          -1,
          344
        ],
        "'THINARROW": [
          -1,
          344
        ],
        "'DATA": [
          -1,
          344
        ],
        "'IF": [
          -1,
          344
        ],
        "'FOR": [
          -1,
          344
        ],
        "'RETURN": [
          -1,
          344
        ],
        "'VAR": [
          -1,
          344
        ],
        "'ATCHECK": [
          -1,
          344
        ],
        "'ASSERTEQUALS": [
          -1,
          344
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          344
        ],
        "'ASSERTTRUE": [
          -1,
          344
        ],
        "'ASSERTFALSE": [
          -1,
          344
        ],
        "'ASSERTSATISFIES": [
          -1,
          344
        ],
        "'ASSERTRAISES": [
          -1,
          344
        ],
        "'IS": [
          -1,
          344
        ],
        "'ISNOT": [
          -1,
          344
        ],
        "'SATISFIES": [
          -1,
          344
        ],
        "'RAISES": [
          -1,
          344
        ],
        "'SWITCH": [
          -1,
          344
        ],
        "'CASE": [
          -1,
          344
        ],
        "'DEFAULT": [
          -1,
          344
        ],
        "'YIELD": [
          -1,
          344
        ],
        "'PLUS": [
          -1,
          344
        ],
        "'DASH": [
          -1,
          344
        ],
        "'TIMES": [
          -1,
          344
        ],
        "'SLASH": [
          -1,
          344
        ],
        "'PERCENT": [
          -1,
          344
        ],
        "'EQUALEQUAL": [
          -1,
          344
        ],
        "'NEQ": [
          -1,
          344
        ],
        "'LEQ": [
          -1,
          344
        ],
        "'GEQ": [
          -1,
          344
        ],
        "'AND": [
          -1,
          344
        ],
        "'OR": [
          -1,
          344
        ],
        "'BANG": [
          -1,
          344
        ],
        "'DOT": [
          -1,
          344
        ],
        "'LBRACK": [
          -1,
          344
        ],
        "'RBRACK": [
          -1,
          344
        ],
        "'NUMBER": [
          -1,
          344
        ],
        "'TRUE": [
          -1,
          344
        ],
        "'FALSE": [
          -1,
          344
        ],
        "'NULL": [
          -1,
          344
        ],
        "'PARENAFTERBRACE": [
          -1,
          344
        ],
        "'ASK": [
          -1,
          344
        ],
        "'NEW": [
          -1,
          344
        ]
      },
      {
        "$": [
          -1,
          346
        ],
        "'IMPORT": [
          -1,
          346
        ],
        "'NAME": [
          -1,
          346
        ],
        "'PARENNOSPACE": [
          -1,
          346
        ],
        "'STRING": [
          -1,
          346
        ],
        "'INCLUDE": [
          -1,
          346
        ],
        "'PARENSPACE": [
          -1,
          346
        ],
        "'INT": [
          -1,
          346
        ],
        "'LONG": [
          -1,
          346
        ],
        "'DOUBLE": [
          -1,
          346
        ],
        "'FLOAT": [
          -1,
          346
        ],
        "'BOOLEAN": [
          -1,
          346
        ],
        "'VOID": [
          -1,
          346
        ],
        "'DATA": [
          -1,
          346
        ],
        "'VAR": [
          -1,
          346
        ],
        "'ATCHECK": [
          -1,
          346
        ],
        "'SWITCH": [
          -1,
          346
        ],
        "'DASH": [
          -1,
          346
        ],
        "'BANG": [
          -1,
          346
        ],
        "'LBRACK": [
          -1,
          346
        ],
        "'NUMBER": [
          -1,
          346
        ],
        "'TRUE": [
          -1,
          346
        ],
        "'FALSE": [
          -1,
          346
        ],
        "'NULL": [
          -1,
          346
        ],
        "'PARENAFTERBRACE": [
          -1,
          346
        ],
        "'ASK": [
          -1,
          346
        ],
        "'NEW": [
          -1,
          346
        ]
      },
      {
        "'NAME": [
          321
        ]
      },
      {
        "$": [
          -1,
          348
        ],
        "'IMPORT": [
          -1,
          348
        ],
        "'NAME": [
          -1,
          348
        ],
        "'PARENNOSPACE": [
          -1,
          348
        ],
        "'STRING": [
          -1,
          348
        ],
        "'INCLUDE": [
          -1,
          348
        ],
        "'PARENSPACE": [
          -1,
          348
        ],
        "'INT": [
          -1,
          348
        ],
        "'LONG": [
          -1,
          348
        ],
        "'DOUBLE": [
          -1,
          348
        ],
        "'FLOAT": [
          -1,
          348
        ],
        "'BOOLEAN": [
          -1,
          348
        ],
        "'VOID": [
          -1,
          348
        ],
        "'DATA": [
          -1,
          348
        ],
        "'VAR": [
          -1,
          348
        ],
        "'ATCHECK": [
          -1,
          348
        ],
        "'SWITCH": [
          -1,
          348
        ],
        "'DASH": [
          -1,
          348
        ],
        "'BANG": [
          -1,
          348
        ],
        "'LBRACK": [
          -1,
          348
        ],
        "'NUMBER": [
          -1,
          348
        ],
        "'TRUE": [
          -1,
          348
        ],
        "'FALSE": [
          -1,
          348
        ],
        "'NULL": [
          -1,
          348
        ],
        "'PARENAFTERBRACE": [
          -1,
          348
        ],
        "'ASK": [
          -1,
          348
        ],
        "'NEW": [
          -1,
          348
        ]
      },
      {
        "'COMMA": [
          -1,
          350
        ],
        "'GT": [
          -1,
          350
        ]
      },
      {
        "fun-decl_I6?": [
          322
        ],
        "fun-decl_I6": [
          323
        ],
        "where-clause": [
          324
        ],
        "'WHERE": [
          325
        ],
        "$": [
          -1,
          352,
          354
        ],
        "'NAME": [
          -1,
          352,
          354
        ],
        "'PARENNOSPACE": [
          -1,
          352,
          354
        ],
        "'STRING": [
          -1,
          352,
          354
        ],
        "'RBRACE": [
          -1,
          352,
          354
        ],
        "'SPY": [
          -1,
          352,
          354
        ],
        "'PARENSPACE": [
          -1,
          352,
          354
        ],
        "'INT": [
          -1,
          352,
          354
        ],
        "'LONG": [
          -1,
          352,
          354
        ],
        "'DOUBLE": [
          -1,
          352,
          354
        ],
        "'FLOAT": [
          -1,
          352,
          354
        ],
        "'BOOLEAN": [
          -1,
          352,
          354
        ],
        "'VOID": [
          -1,
          352,
          354
        ],
        "'DATA": [
          -1,
          352,
          354
        ],
        "'IF": [
          -1,
          352,
          354
        ],
        "'FOR": [
          -1,
          352,
          354
        ],
        "'RETURN": [
          -1,
          352,
          354
        ],
        "'VAR": [
          -1,
          352,
          354
        ],
        "'ATCHECK": [
          -1,
          352,
          354
        ],
        "'ASSERTEQUALS": [
          -1,
          352,
          354
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          352,
          354
        ],
        "'ASSERTTRUE": [
          -1,
          352,
          354
        ],
        "'ASSERTFALSE": [
          -1,
          352,
          354
        ],
        "'ASSERTSATISFIES": [
          -1,
          352,
          354
        ],
        "'ASSERTRAISES": [
          -1,
          352,
          354
        ],
        "'SWITCH": [
          -1,
          352,
          354
        ],
        "'YIELD": [
          -1,
          352,
          354
        ],
        "'DASH": [
          -1,
          352,
          354
        ],
        "'BANG": [
          -1,
          352,
          354
        ],
        "'LBRACK": [
          -1,
          352,
          354
        ],
        "'NUMBER": [
          -1,
          352,
          354
        ],
        "'TRUE": [
          -1,
          352,
          354
        ],
        "'FALSE": [
          -1,
          352,
          354
        ],
        "'NULL": [
          -1,
          352,
          354
        ],
        "'PARENAFTERBRACE": [
          -1,
          352,
          354
        ],
        "'ASK": [
          -1,
          352,
          354
        ],
        "'NEW": [
          -1,
          352,
          354
        ]
      },
      {
        "block_I1*": [
          326
        ],
        "'NAME": [
          -1,
          356
        ],
        "'PARENNOSPACE": [
          -1,
          356
        ],
        "'STRING": [
          -1,
          356
        ],
        "'RBRACE": [
          -1,
          356
        ],
        "'SPY": [
          -1,
          356
        ],
        "'PARENSPACE": [
          -1,
          356
        ],
        "'INT": [
          -1,
          356
        ],
        "'LONG": [
          -1,
          356
        ],
        "'DOUBLE": [
          -1,
          356
        ],
        "'FLOAT": [
          -1,
          356
        ],
        "'BOOLEAN": [
          -1,
          356
        ],
        "'VOID": [
          -1,
          356
        ],
        "'DATA": [
          -1,
          356
        ],
        "'IF": [
          -1,
          356
        ],
        "'FOR": [
          -1,
          356
        ],
        "'RETURN": [
          -1,
          356
        ],
        "'VAR": [
          -1,
          356
        ],
        "'ATCHECK": [
          -1,
          356
        ],
        "'SWITCH": [
          -1,
          356
        ],
        "'YIELD": [
          -1,
          356
        ],
        "'DASH": [
          -1,
          356
        ],
        "'BANG": [
          -1,
          356
        ],
        "'LBRACK": [
          -1,
          356
        ],
        "'NUMBER": [
          -1,
          356
        ],
        "'TRUE": [
          -1,
          356
        ],
        "'FALSE": [
          -1,
          356
        ],
        "'NULL": [
          -1,
          356
        ],
        "'PARENAFTERBRACE": [
          -1,
          356
        ],
        "'ASK": [
          -1,
          356
        ],
        "'NEW": [
          -1,
          356
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          169
        ],
        "param": [
          327
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ]
      },
      {
        "'RPAREN": [
          -1,
          358
        ],
        "'COMMA": [
          -1,
          358
        ]
      },
      {
        "'NAME": [
          328
        ]
      },
      {
        "'RPAREN": [
          329
        ]
      },
      {
        "'RPAREN": [
          -1,
          360
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          330
        ],
        "'RPAREN": [
          -1,
          362,
          364
        ],
        "'COMMA": [
          -1,
          364
        ]
      },
      {
        "'NAME": [
          174
        ],
        "variant-decl": [
          331
        ],
        "'RBRACE": [
          -1,
          366
        ]
      },
      {
        "'RBRACE": [
          332
        ]
      },
      {
        "'SEMI": [
          -1,
          368
        ],
        "'RBRACE": [
          -1,
          368
        ]
      },
      {
        "'RBRACE": [
          -1,
          370
        ]
      },
      {
        "$": [
          -1,
          372
        ],
        "'NAME": [
          -1,
          372
        ],
        "'PARENNOSPACE": [
          -1,
          372
        ],
        "'STRING": [
          -1,
          372
        ],
        "'RBRACE": [
          -1,
          372
        ],
        "'SPY": [
          -1,
          372
        ],
        "'PARENSPACE": [
          -1,
          372
        ],
        "'INT": [
          -1,
          372
        ],
        "'LONG": [
          -1,
          372
        ],
        "'DOUBLE": [
          -1,
          372
        ],
        "'FLOAT": [
          -1,
          372
        ],
        "'BOOLEAN": [
          -1,
          372
        ],
        "'VOID": [
          -1,
          372
        ],
        "'DATA": [
          -1,
          372
        ],
        "'IF": [
          -1,
          372
        ],
        "'FOR": [
          -1,
          372
        ],
        "'RETURN": [
          -1,
          372
        ],
        "'VAR": [
          -1,
          372
        ],
        "'ATCHECK": [
          -1,
          372
        ],
        "'ASSERTEQUALS": [
          -1,
          372
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          372
        ],
        "'ASSERTTRUE": [
          -1,
          372
        ],
        "'ASSERTFALSE": [
          -1,
          372
        ],
        "'ASSERTSATISFIES": [
          -1,
          372
        ],
        "'ASSERTRAISES": [
          -1,
          372
        ],
        "'SWITCH": [
          -1,
          372
        ],
        "'YIELD": [
          -1,
          372
        ],
        "'DASH": [
          -1,
          372
        ],
        "'BANG": [
          -1,
          372
        ],
        "'LBRACK": [
          -1,
          372
        ],
        "'NUMBER": [
          -1,
          372
        ],
        "'TRUE": [
          -1,
          372
        ],
        "'FALSE": [
          -1,
          372
        ],
        "'NULL": [
          -1,
          372
        ],
        "'PARENAFTERBRACE": [
          -1,
          372
        ],
        "'ASK": [
          -1,
          372
        ],
        "'NEW": [
          -1,
          372
        ]
      },
      {
        "$": [
          -1,
          374
        ],
        "'NAME": [
          -1,
          374
        ],
        "'PARENNOSPACE": [
          -1,
          374
        ],
        "'STRING": [
          -1,
          374
        ],
        "'RBRACE": [
          -1,
          374
        ],
        "'SPY": [
          -1,
          374
        ],
        "'PARENSPACE": [
          -1,
          374
        ],
        "'INT": [
          -1,
          374
        ],
        "'LONG": [
          -1,
          374
        ],
        "'DOUBLE": [
          -1,
          374
        ],
        "'FLOAT": [
          -1,
          374
        ],
        "'BOOLEAN": [
          -1,
          374
        ],
        "'VOID": [
          -1,
          374
        ],
        "'DATA": [
          -1,
          374
        ],
        "'IF": [
          -1,
          374
        ],
        "'FOR": [
          -1,
          374
        ],
        "'RETURN": [
          -1,
          374
        ],
        "'VAR": [
          -1,
          374
        ],
        "'ATCHECK": [
          -1,
          374
        ],
        "'ASSERTEQUALS": [
          -1,
          374
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          374
        ],
        "'ASSERTTRUE": [
          -1,
          374
        ],
        "'ASSERTFALSE": [
          -1,
          374
        ],
        "'ASSERTSATISFIES": [
          -1,
          374
        ],
        "'ASSERTRAISES": [
          -1,
          374
        ],
        "'SWITCH": [
          -1,
          374
        ],
        "'YIELD": [
          -1,
          374
        ],
        "'DASH": [
          -1,
          374
        ],
        "'BANG": [
          -1,
          374
        ],
        "'LBRACK": [
          -1,
          374
        ],
        "'NUMBER": [
          -1,
          374
        ],
        "'TRUE": [
          -1,
          374
        ],
        "'FALSE": [
          -1,
          374
        ],
        "'NULL": [
          -1,
          374
        ],
        "'PARENAFTERBRACE": [
          -1,
          374
        ],
        "'ASK": [
          -1,
          374
        ],
        "'NEW": [
          -1,
          374
        ]
      },
      {
        "$": [
          -1,
          376
        ],
        "'NAME": [
          -1,
          376
        ],
        "'PARENNOSPACE": [
          -1,
          376
        ],
        "'STRING": [
          -1,
          376
        ],
        "'RBRACE": [
          -1,
          376
        ],
        "'SPY": [
          -1,
          376
        ],
        "'PARENSPACE": [
          -1,
          376
        ],
        "'INT": [
          -1,
          376
        ],
        "'LONG": [
          -1,
          376
        ],
        "'DOUBLE": [
          -1,
          376
        ],
        "'FLOAT": [
          -1,
          376
        ],
        "'BOOLEAN": [
          -1,
          376
        ],
        "'VOID": [
          -1,
          376
        ],
        "'DATA": [
          -1,
          376
        ],
        "'IF": [
          -1,
          376
        ],
        "'FOR": [
          -1,
          376
        ],
        "'RETURN": [
          -1,
          376
        ],
        "'VAR": [
          -1,
          376
        ],
        "'ATCHECK": [
          -1,
          376
        ],
        "'ASSERTEQUALS": [
          -1,
          376
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          376
        ],
        "'ASSERTTRUE": [
          -1,
          376
        ],
        "'ASSERTFALSE": [
          -1,
          376
        ],
        "'ASSERTSATISFIES": [
          -1,
          376
        ],
        "'ASSERTRAISES": [
          -1,
          376
        ],
        "'SWITCH": [
          -1,
          376
        ],
        "'YIELD": [
          -1,
          376
        ],
        "'DASH": [
          -1,
          376
        ],
        "'BANG": [
          -1,
          376
        ],
        "'LBRACK": [
          -1,
          376
        ],
        "'NUMBER": [
          -1,
          376
        ],
        "'TRUE": [
          -1,
          376
        ],
        "'FALSE": [
          -1,
          376
        ],
        "'NULL": [
          -1,
          376
        ],
        "'PARENAFTERBRACE": [
          -1,
          376
        ],
        "'ASK": [
          -1,
          376
        ],
        "'NEW": [
          -1,
          376
        ]
      },
      {
        "spy-stmt_I3*": [
          333
        ],
        "'RPAREN": [
          -1,
          378
        ],
        "'COMMA": [
          -1,
          378
        ]
      },
      {
        "'RPAREN": [
          334
        ]
      },
      {
        "'SEMI": [
          335
        ],
        "assert-stmt_A6_I3?": [
          336
        ],
        "assert-stmt_A6_I3": [
          337
        ],
        "'NAME": [
          -1,
          380,
          382
        ],
        "'PARENNOSPACE": [
          -1,
          380,
          382
        ],
        "'STRING": [
          -1,
          380,
          382
        ],
        "'RBRACE": [
          -1,
          380,
          382
        ],
        "'SPY": [
          -1,
          380,
          382
        ],
        "'PARENSPACE": [
          -1,
          380,
          382
        ],
        "'INT": [
          -1,
          380,
          382
        ],
        "'LONG": [
          -1,
          380,
          382
        ],
        "'DOUBLE": [
          -1,
          380,
          382
        ],
        "'FLOAT": [
          -1,
          380,
          382
        ],
        "'BOOLEAN": [
          -1,
          380,
          382
        ],
        "'VOID": [
          -1,
          380,
          382
        ],
        "'DATA": [
          -1,
          380,
          382
        ],
        "'IF": [
          -1,
          380,
          382
        ],
        "'FOR": [
          -1,
          380,
          382
        ],
        "'RETURN": [
          -1,
          380,
          382
        ],
        "'VAR": [
          -1,
          380,
          382
        ],
        "'ATCHECK": [
          -1,
          380,
          382
        ],
        "'ASSERTEQUALS": [
          -1,
          380,
          382
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          380,
          382
        ],
        "'ASSERTTRUE": [
          -1,
          380,
          382
        ],
        "'ASSERTFALSE": [
          -1,
          380,
          382
        ],
        "'ASSERTSATISFIES": [
          -1,
          380,
          382
        ],
        "'ASSERTRAISES": [
          -1,
          380,
          382
        ],
        "'SWITCH": [
          -1,
          380,
          382
        ],
        "'YIELD": [
          -1,
          380,
          382
        ],
        "'DASH": [
          -1,
          380,
          382
        ],
        "'BANG": [
          -1,
          380,
          382
        ],
        "'LBRACK": [
          -1,
          380,
          382
        ],
        "'NUMBER": [
          -1,
          380,
          382
        ],
        "'TRUE": [
          -1,
          380,
          382
        ],
        "'FALSE": [
          -1,
          380,
          382
        ],
        "'NULL": [
          -1,
          380,
          382
        ],
        "'PARENAFTERBRACE": [
          -1,
          380,
          382
        ],
        "'ASK": [
          -1,
          380,
          382
        ],
        "'NEW": [
          -1,
          380,
          382
        ]
      },
      {
        "'SEMI": [
          338
        ],
        "assert-stmt_A7_I3?": [
          339
        ],
        "assert-stmt_A7_I3": [
          340
        ],
        "'NAME": [
          -1,
          384,
          386
        ],
        "'PARENNOSPACE": [
          -1,
          384,
          386
        ],
        "'STRING": [
          -1,
          384,
          386
        ],
        "'RBRACE": [
          -1,
          384,
          386
        ],
        "'SPY": [
          -1,
          384,
          386
        ],
        "'PARENSPACE": [
          -1,
          384,
          386
        ],
        "'INT": [
          -1,
          384,
          386
        ],
        "'LONG": [
          -1,
          384,
          386
        ],
        "'DOUBLE": [
          -1,
          384,
          386
        ],
        "'FLOAT": [
          -1,
          384,
          386
        ],
        "'BOOLEAN": [
          -1,
          384,
          386
        ],
        "'VOID": [
          -1,
          384,
          386
        ],
        "'DATA": [
          -1,
          384,
          386
        ],
        "'IF": [
          -1,
          384,
          386
        ],
        "'FOR": [
          -1,
          384,
          386
        ],
        "'RETURN": [
          -1,
          384,
          386
        ],
        "'VAR": [
          -1,
          384,
          386
        ],
        "'ATCHECK": [
          -1,
          384,
          386
        ],
        "'ASSERTEQUALS": [
          -1,
          384,
          386
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          384,
          386
        ],
        "'ASSERTTRUE": [
          -1,
          384,
          386
        ],
        "'ASSERTFALSE": [
          -1,
          384,
          386
        ],
        "'ASSERTSATISFIES": [
          -1,
          384,
          386
        ],
        "'ASSERTRAISES": [
          -1,
          384,
          386
        ],
        "'SWITCH": [
          -1,
          384,
          386
        ],
        "'YIELD": [
          -1,
          384,
          386
        ],
        "'DASH": [
          -1,
          384,
          386
        ],
        "'BANG": [
          -1,
          384,
          386
        ],
        "'LBRACK": [
          -1,
          384,
          386
        ],
        "'NUMBER": [
          -1,
          384,
          386
        ],
        "'TRUE": [
          -1,
          384,
          386
        ],
        "'FALSE": [
          -1,
          384,
          386
        ],
        "'NULL": [
          -1,
          384,
          386
        ],
        "'PARENAFTERBRACE": [
          -1,
          384,
          386
        ],
        "'ASK": [
          -1,
          384,
          386
        ],
        "'NEW": [
          -1,
          384,
          386
        ]
      },
      {
        "'SEMI": [
          341
        ],
        "assert-stmt_A8_I3?": [
          342
        ],
        "assert-stmt_A8_I3": [
          343
        ],
        "'NAME": [
          -1,
          388,
          390
        ],
        "'PARENNOSPACE": [
          -1,
          388,
          390
        ],
        "'STRING": [
          -1,
          388,
          390
        ],
        "'RBRACE": [
          -1,
          388,
          390
        ],
        "'SPY": [
          -1,
          388,
          390
        ],
        "'PARENSPACE": [
          -1,
          388,
          390
        ],
        "'INT": [
          -1,
          388,
          390
        ],
        "'LONG": [
          -1,
          388,
          390
        ],
        "'DOUBLE": [
          -1,
          388,
          390
        ],
        "'FLOAT": [
          -1,
          388,
          390
        ],
        "'BOOLEAN": [
          -1,
          388,
          390
        ],
        "'VOID": [
          -1,
          388,
          390
        ],
        "'DATA": [
          -1,
          388,
          390
        ],
        "'IF": [
          -1,
          388,
          390
        ],
        "'FOR": [
          -1,
          388,
          390
        ],
        "'RETURN": [
          -1,
          388,
          390
        ],
        "'VAR": [
          -1,
          388,
          390
        ],
        "'ATCHECK": [
          -1,
          388,
          390
        ],
        "'ASSERTEQUALS": [
          -1,
          388,
          390
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          388,
          390
        ],
        "'ASSERTTRUE": [
          -1,
          388,
          390
        ],
        "'ASSERTFALSE": [
          -1,
          388,
          390
        ],
        "'ASSERTSATISFIES": [
          -1,
          388,
          390
        ],
        "'ASSERTRAISES": [
          -1,
          388,
          390
        ],
        "'SWITCH": [
          -1,
          388,
          390
        ],
        "'YIELD": [
          -1,
          388,
          390
        ],
        "'DASH": [
          -1,
          388,
          390
        ],
        "'BANG": [
          -1,
          388,
          390
        ],
        "'LBRACK": [
          -1,
          388,
          390
        ],
        "'NUMBER": [
          -1,
          388,
          390
        ],
        "'TRUE": [
          -1,
          388,
          390
        ],
        "'FALSE": [
          -1,
          388,
          390
        ],
        "'NULL": [
          -1,
          388,
          390
        ],
        "'PARENAFTERBRACE": [
          -1,
          388,
          390
        ],
        "'ASK": [
          -1,
          388,
          390
        ],
        "'NEW": [
          -1,
          388,
          390
        ]
      },
      {
        "'SEMI": [
          344
        ],
        "assert-stmt_A9_I3?": [
          345
        ],
        "assert-stmt_A9_I3": [
          346
        ],
        "'NAME": [
          -1,
          392,
          394
        ],
        "'PARENNOSPACE": [
          -1,
          392,
          394
        ],
        "'STRING": [
          -1,
          392,
          394
        ],
        "'RBRACE": [
          -1,
          392,
          394
        ],
        "'SPY": [
          -1,
          392,
          394
        ],
        "'PARENSPACE": [
          -1,
          392,
          394
        ],
        "'INT": [
          -1,
          392,
          394
        ],
        "'LONG": [
          -1,
          392,
          394
        ],
        "'DOUBLE": [
          -1,
          392,
          394
        ],
        "'FLOAT": [
          -1,
          392,
          394
        ],
        "'BOOLEAN": [
          -1,
          392,
          394
        ],
        "'VOID": [
          -1,
          392,
          394
        ],
        "'DATA": [
          -1,
          392,
          394
        ],
        "'IF": [
          -1,
          392,
          394
        ],
        "'FOR": [
          -1,
          392,
          394
        ],
        "'RETURN": [
          -1,
          392,
          394
        ],
        "'VAR": [
          -1,
          392,
          394
        ],
        "'ATCHECK": [
          -1,
          392,
          394
        ],
        "'ASSERTEQUALS": [
          -1,
          392,
          394
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          392,
          394
        ],
        "'ASSERTTRUE": [
          -1,
          392,
          394
        ],
        "'ASSERTFALSE": [
          -1,
          392,
          394
        ],
        "'ASSERTSATISFIES": [
          -1,
          392,
          394
        ],
        "'ASSERTRAISES": [
          -1,
          392,
          394
        ],
        "'SWITCH": [
          -1,
          392,
          394
        ],
        "'YIELD": [
          -1,
          392,
          394
        ],
        "'DASH": [
          -1,
          392,
          394
        ],
        "'BANG": [
          -1,
          392,
          394
        ],
        "'LBRACK": [
          -1,
          392,
          394
        ],
        "'NUMBER": [
          -1,
          392,
          394
        ],
        "'TRUE": [
          -1,
          392,
          394
        ],
        "'FALSE": [
          -1,
          392,
          394
        ],
        "'NULL": [
          -1,
          392,
          394
        ],
        "'PARENAFTERBRACE": [
          -1,
          392,
          394
        ],
        "'ASK": [
          -1,
          392,
          394
        ],
        "'NEW": [
          -1,
          392,
          394
        ]
      },
      {
        "'NAME": [
          347
        ]
      },
      {
        "'NAME": [
          -1,
          396
        ],
        "'PARENNOSPACE": [
          -1,
          396
        ],
        "'STRING": [
          -1,
          396
        ],
        "'RBRACE": [
          -1,
          396
        ],
        "'SPY": [
          -1,
          396
        ],
        "'PARENSPACE": [
          -1,
          396
        ],
        "'INT": [
          -1,
          396
        ],
        "'LONG": [
          -1,
          396
        ],
        "'DOUBLE": [
          -1,
          396
        ],
        "'FLOAT": [
          -1,
          396
        ],
        "'BOOLEAN": [
          -1,
          396
        ],
        "'VOID": [
          -1,
          396
        ],
        "'DATA": [
          -1,
          396
        ],
        "'IF": [
          -1,
          396
        ],
        "'FOR": [
          -1,
          396
        ],
        "'RETURN": [
          -1,
          396
        ],
        "'VAR": [
          -1,
          396
        ],
        "'ATCHECK": [
          -1,
          396
        ],
        "'ASSERTEQUALS": [
          -1,
          396
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          396
        ],
        "'ASSERTTRUE": [
          -1,
          396
        ],
        "'ASSERTFALSE": [
          -1,
          396
        ],
        "'ASSERTSATISFIES": [
          -1,
          396
        ],
        "'ASSERTRAISES": [
          -1,
          396
        ],
        "'SWITCH": [
          -1,
          396
        ],
        "'YIELD": [
          -1,
          396
        ],
        "'DASH": [
          -1,
          396
        ],
        "'BANG": [
          -1,
          396
        ],
        "'LBRACK": [
          -1,
          396
        ],
        "'NUMBER": [
          -1,
          396
        ],
        "'TRUE": [
          -1,
          396
        ],
        "'FALSE": [
          -1,
          396
        ],
        "'NULL": [
          -1,
          396
        ],
        "'PARENAFTERBRACE": [
          -1,
          396
        ],
        "'ASK": [
          -1,
          396
        ],
        "'NEW": [
          -1,
          396
        ]
      },
      {
        "'COMMA": [
          348
        ]
      },
      {
        "'COMMA": [
          349
        ]
      },
      {
        "'RPAREN": [
          350
        ]
      },
      {
        "'RPAREN": [
          351
        ]
      },
      {
        "'COMMA": [
          352
        ]
      },
      {
        "'COMMA": [
          353
        ]
      },
      {
        "'NAME": [
          -1,
          398
        ],
        "'PARENNOSPACE": [
          -1,
          398
        ],
        "'STRING": [
          -1,
          398
        ],
        "'RBRACE": [
          -1,
          398
        ],
        "'SPY": [
          -1,
          398
        ],
        "'PARENSPACE": [
          -1,
          398
        ],
        "'INT": [
          -1,
          398
        ],
        "'LONG": [
          -1,
          398
        ],
        "'DOUBLE": [
          -1,
          398
        ],
        "'FLOAT": [
          -1,
          398
        ],
        "'BOOLEAN": [
          -1,
          398
        ],
        "'VOID": [
          -1,
          398
        ],
        "'DATA": [
          -1,
          398
        ],
        "'IF": [
          -1,
          398
        ],
        "'FOR": [
          -1,
          398
        ],
        "'RETURN": [
          -1,
          398
        ],
        "'VAR": [
          -1,
          398
        ],
        "'ATCHECK": [
          -1,
          398
        ],
        "'ASSERTEQUALS": [
          -1,
          398
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          398
        ],
        "'ASSERTTRUE": [
          -1,
          398
        ],
        "'ASSERTFALSE": [
          -1,
          398
        ],
        "'ASSERTSATISFIES": [
          -1,
          398
        ],
        "'ASSERTRAISES": [
          -1,
          398
        ],
        "'SWITCH": [
          -1,
          398
        ],
        "'CASE": [
          -1,
          398
        ],
        "'DEFAULT": [
          -1,
          398
        ],
        "'YIELD": [
          -1,
          398
        ],
        "'DASH": [
          -1,
          398
        ],
        "'BANG": [
          -1,
          398
        ],
        "'LBRACK": [
          -1,
          398
        ],
        "'NUMBER": [
          -1,
          398
        ],
        "'TRUE": [
          -1,
          398
        ],
        "'FALSE": [
          -1,
          398
        ],
        "'NULL": [
          -1,
          398
        ],
        "'PARENAFTERBRACE": [
          -1,
          398
        ],
        "'ASK": [
          -1,
          398
        ],
        "'NEW": [
          -1,
          398
        ]
      },
      {
        "'NAME": [
          -1,
          400
        ],
        "'PARENNOSPACE": [
          -1,
          400
        ],
        "'STRING": [
          -1,
          400
        ],
        "'RBRACE": [
          -1,
          400
        ],
        "'SPY": [
          -1,
          400
        ],
        "'PARENSPACE": [
          -1,
          400
        ],
        "'INT": [
          -1,
          400
        ],
        "'LONG": [
          -1,
          400
        ],
        "'DOUBLE": [
          -1,
          400
        ],
        "'FLOAT": [
          -1,
          400
        ],
        "'BOOLEAN": [
          -1,
          400
        ],
        "'VOID": [
          -1,
          400
        ],
        "'DATA": [
          -1,
          400
        ],
        "'IF": [
          -1,
          400
        ],
        "'FOR": [
          -1,
          400
        ],
        "'RETURN": [
          -1,
          400
        ],
        "'VAR": [
          -1,
          400
        ],
        "'ATCHECK": [
          -1,
          400
        ],
        "'ASSERTEQUALS": [
          -1,
          400
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          400
        ],
        "'ASSERTTRUE": [
          -1,
          400
        ],
        "'ASSERTFALSE": [
          -1,
          400
        ],
        "'ASSERTSATISFIES": [
          -1,
          400
        ],
        "'ASSERTRAISES": [
          -1,
          400
        ],
        "'SWITCH": [
          -1,
          400
        ],
        "'CASE": [
          -1,
          400
        ],
        "'DEFAULT": [
          -1,
          400
        ],
        "'YIELD": [
          -1,
          400
        ],
        "'DASH": [
          -1,
          400
        ],
        "'BANG": [
          -1,
          400
        ],
        "'LBRACK": [
          -1,
          400
        ],
        "'NUMBER": [
          -1,
          400
        ],
        "'TRUE": [
          -1,
          400
        ],
        "'FALSE": [
          -1,
          400
        ],
        "'NULL": [
          -1,
          400
        ],
        "'PARENAFTERBRACE": [
          -1,
          400
        ],
        "'ASK": [
          -1,
          400
        ],
        "'NEW": [
          -1,
          400
        ]
      },
      {
        "'NAME": [
          -1,
          402
        ],
        "'PARENNOSPACE": [
          -1,
          402
        ],
        "'STRING": [
          -1,
          402
        ],
        "'RBRACE": [
          -1,
          402
        ],
        "'SPY": [
          -1,
          402
        ],
        "'PARENSPACE": [
          -1,
          402
        ],
        "'INT": [
          -1,
          402
        ],
        "'LONG": [
          -1,
          402
        ],
        "'DOUBLE": [
          -1,
          402
        ],
        "'FLOAT": [
          -1,
          402
        ],
        "'BOOLEAN": [
          -1,
          402
        ],
        "'VOID": [
          -1,
          402
        ],
        "'DATA": [
          -1,
          402
        ],
        "'IF": [
          -1,
          402
        ],
        "'FOR": [
          -1,
          402
        ],
        "'RETURN": [
          -1,
          402
        ],
        "'VAR": [
          -1,
          402
        ],
        "'ATCHECK": [
          -1,
          402
        ],
        "'ASSERTEQUALS": [
          -1,
          402
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          402
        ],
        "'ASSERTTRUE": [
          -1,
          402
        ],
        "'ASSERTFALSE": [
          -1,
          402
        ],
        "'ASSERTSATISFIES": [
          -1,
          402
        ],
        "'ASSERTRAISES": [
          -1,
          402
        ],
        "'SWITCH": [
          -1,
          402
        ],
        "'CASE": [
          -1,
          402
        ],
        "'DEFAULT": [
          -1,
          402
        ],
        "'YIELD": [
          -1,
          402
        ],
        "'DASH": [
          -1,
          402
        ],
        "'BANG": [
          -1,
          402
        ],
        "'LBRACK": [
          -1,
          402
        ],
        "'NUMBER": [
          -1,
          402
        ],
        "'TRUE": [
          -1,
          402
        ],
        "'FALSE": [
          -1,
          402
        ],
        "'NULL": [
          -1,
          402
        ],
        "'PARENAFTERBRACE": [
          -1,
          402
        ],
        "'ASK": [
          -1,
          402
        ],
        "'NEW": [
          -1,
          402
        ]
      },
      {
        "check-block_A0_I6*": [
          354
        ],
        "'NAME": [
          -1,
          404
        ],
        "'PARENNOSPACE": [
          -1,
          404
        ],
        "'STRING": [
          -1,
          404
        ],
        "'RBRACE": [
          -1,
          404
        ],
        "'SPY": [
          -1,
          404
        ],
        "'PARENSPACE": [
          -1,
          404
        ],
        "'INT": [
          -1,
          404
        ],
        "'LONG": [
          -1,
          404
        ],
        "'DOUBLE": [
          -1,
          404
        ],
        "'FLOAT": [
          -1,
          404
        ],
        "'BOOLEAN": [
          -1,
          404
        ],
        "'VOID": [
          -1,
          404
        ],
        "'DATA": [
          -1,
          404
        ],
        "'IF": [
          -1,
          404
        ],
        "'FOR": [
          -1,
          404
        ],
        "'RETURN": [
          -1,
          404
        ],
        "'VAR": [
          -1,
          404
        ],
        "'ATCHECK": [
          -1,
          404
        ],
        "'ASSERTEQUALS": [
          -1,
          404
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          404
        ],
        "'ASSERTTRUE": [
          -1,
          404
        ],
        "'ASSERTFALSE": [
          -1,
          404
        ],
        "'ASSERTSATISFIES": [
          -1,
          404
        ],
        "'ASSERTRAISES": [
          -1,
          404
        ],
        "'SWITCH": [
          -1,
          404
        ],
        "'YIELD": [
          -1,
          404
        ],
        "'DASH": [
          -1,
          404
        ],
        "'BANG": [
          -1,
          404
        ],
        "'LBRACK": [
          -1,
          404
        ],
        "'NUMBER": [
          -1,
          404
        ],
        "'TRUE": [
          -1,
          404
        ],
        "'FALSE": [
          -1,
          404
        ],
        "'NULL": [
          -1,
          404
        ],
        "'PARENAFTERBRACE": [
          -1,
          404
        ],
        "'ASK": [
          -1,
          404
        ],
        "'NEW": [
          -1,
          404
        ]
      },
      {
        "switch-expr_I6?": [
          355
        ],
        "switch-expr_I5": [
          356
        ],
        "case-branch": [
          357
        ],
        "switch-expr_I6": [
          358
        ],
        "default-branch": [
          359
        ],
        "'CASE": [
          360
        ],
        "'DEFAULT": [
          361
        ],
        "'RBRACE": [
          -1,
          406
        ]
      },
      {
        "'RPAREN": [
          -1,
          408
        ],
        "'COMMA": [
          -1,
          408
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          362
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'COMMA": [
          -1,
          410
        ],
        "'RBRACK": [
          -1,
          410
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          363
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "$": [
          -1,
          412
        ],
        "'NAME": [
          -1,
          412
        ],
        "'SEMI": [
          -1,
          412
        ],
        "'PARENNOSPACE": [
          -1,
          412
        ],
        "'STRING": [
          -1,
          412
        ],
        "'RPAREN": [
          -1,
          412
        ],
        "'RBRACE": [
          -1,
          412
        ],
        "'SPY": [
          -1,
          412
        ],
        "'PARENSPACE": [
          -1,
          412
        ],
        "'COMMA": [
          -1,
          412
        ],
        "'INT": [
          -1,
          412
        ],
        "'LONG": [
          -1,
          412
        ],
        "'DOUBLE": [
          -1,
          412
        ],
        "'FLOAT": [
          -1,
          412
        ],
        "'BOOLEAN": [
          -1,
          412
        ],
        "'VOID": [
          -1,
          412
        ],
        "'LT": [
          -1,
          412
        ],
        "'GT": [
          -1,
          412
        ],
        "'THINARROW": [
          -1,
          412
        ],
        "'DATA": [
          -1,
          412
        ],
        "'IF": [
          -1,
          412
        ],
        "'FOR": [
          -1,
          412
        ],
        "'RETURN": [
          -1,
          412
        ],
        "'VAR": [
          -1,
          412
        ],
        "'ATCHECK": [
          -1,
          412
        ],
        "'ASSERTEQUALS": [
          -1,
          412
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          412
        ],
        "'ASSERTTRUE": [
          -1,
          412
        ],
        "'ASSERTFALSE": [
          -1,
          412
        ],
        "'ASSERTSATISFIES": [
          -1,
          412
        ],
        "'ASSERTRAISES": [
          -1,
          412
        ],
        "'IS": [
          -1,
          412
        ],
        "'ISNOT": [
          -1,
          412
        ],
        "'SATISFIES": [
          -1,
          412
        ],
        "'RAISES": [
          -1,
          412
        ],
        "'SWITCH": [
          -1,
          412
        ],
        "'CASE": [
          -1,
          412
        ],
        "'DEFAULT": [
          -1,
          412
        ],
        "'YIELD": [
          -1,
          412
        ],
        "'PLUS": [
          -1,
          412
        ],
        "'DASH": [
          -1,
          412
        ],
        "'TIMES": [
          -1,
          412
        ],
        "'SLASH": [
          -1,
          412
        ],
        "'PERCENT": [
          -1,
          412
        ],
        "'EQUALEQUAL": [
          -1,
          412
        ],
        "'NEQ": [
          -1,
          412
        ],
        "'LEQ": [
          -1,
          412
        ],
        "'GEQ": [
          -1,
          412
        ],
        "'AND": [
          -1,
          412
        ],
        "'OR": [
          -1,
          412
        ],
        "'BANG": [
          -1,
          412
        ],
        "'DOT": [
          -1,
          412
        ],
        "'LBRACK": [
          -1,
          412
        ],
        "'RBRACK": [
          -1,
          412
        ],
        "'NUMBER": [
          -1,
          412
        ],
        "'TRUE": [
          -1,
          412
        ],
        "'FALSE": [
          -1,
          412
        ],
        "'NULL": [
          -1,
          412
        ],
        "'PARENAFTERBRACE": [
          -1,
          412
        ],
        "'ASK": [
          -1,
          412
        ],
        "'NEW": [
          -1,
          412
        ]
      },
      {
        "'SEMI": [
          364
        ]
      },
      {
        "'NAME": [
          -1,
          414
        ],
        "'STRING": [
          -1,
          414
        ],
        "'RBRACE": [
          -1,
          414
        ],
        "'PARENSPACE": [
          -1,
          414
        ],
        "'SWITCH": [
          -1,
          414
        ],
        "'DASH": [
          -1,
          414
        ],
        "'BANG": [
          -1,
          414
        ],
        "'LBRACK": [
          -1,
          414
        ],
        "'NUMBER": [
          -1,
          414
        ],
        "'TRUE": [
          -1,
          414
        ],
        "'FALSE": [
          -1,
          414
        ],
        "'NULL": [
          -1,
          414
        ],
        "'PARENAFTERBRACE": [
          -1,
          414
        ],
        "'ASK": [
          -1,
          414
        ],
        "'NEW": [
          -1,
          414
        ]
      },
      {
        "'SEMI": [
          365
        ]
      },
      {
        "'SEMI": [
          366
        ]
      },
      {
        "'NAME": [
          -1,
          416
        ],
        "'STRING": [
          -1,
          416
        ],
        "'PARENSPACE": [
          -1,
          416
        ],
        "'SWITCH": [
          -1,
          416
        ],
        "'DASH": [
          -1,
          416
        ],
        "'BANG": [
          -1,
          416
        ],
        "'LBRACK": [
          -1,
          416
        ],
        "'NUMBER": [
          -1,
          416
        ],
        "'TRUE": [
          -1,
          416
        ],
        "'FALSE": [
          -1,
          416
        ],
        "'NULL": [
          -1,
          416
        ],
        "'PARENAFTERBRACE": [
          -1,
          416
        ],
        "'ASK": [
          -1,
          416
        ],
        "'OTHERWISE": [
          -1,
          416
        ],
        "'NEW": [
          -1,
          416
        ]
      },
      {
        "'THINARROW": [
          367
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          368
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          -1,
          418
        ],
        "'COMMA": [
          -1,
          418
        ]
      },
      {
        "'SEMI": [
          369
        ]
      },
      {
        "$": [
          -1,
          420
        ],
        "'NAME": [
          -1,
          420
        ],
        "'PARENNOSPACE": [
          -1,
          420
        ],
        "'STRING": [
          -1,
          420
        ],
        "'RBRACE": [
          -1,
          420
        ],
        "'SPY": [
          -1,
          420
        ],
        "'PARENSPACE": [
          -1,
          420
        ],
        "'INT": [
          -1,
          420
        ],
        "'LONG": [
          -1,
          420
        ],
        "'DOUBLE": [
          -1,
          420
        ],
        "'FLOAT": [
          -1,
          420
        ],
        "'BOOLEAN": [
          -1,
          420
        ],
        "'VOID": [
          -1,
          420
        ],
        "'DATA": [
          -1,
          420
        ],
        "'IF": [
          -1,
          420
        ],
        "'FOR": [
          -1,
          420
        ],
        "'RETURN": [
          -1,
          420
        ],
        "'VAR": [
          -1,
          420
        ],
        "'ATCHECK": [
          -1,
          420
        ],
        "'ASSERTEQUALS": [
          -1,
          420
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          420
        ],
        "'ASSERTTRUE": [
          -1,
          420
        ],
        "'ASSERTFALSE": [
          -1,
          420
        ],
        "'ASSERTSATISFIES": [
          -1,
          420
        ],
        "'ASSERTRAISES": [
          -1,
          420
        ],
        "'SWITCH": [
          -1,
          420
        ],
        "'YIELD": [
          -1,
          420
        ],
        "'DASH": [
          -1,
          420
        ],
        "'BANG": [
          -1,
          420
        ],
        "'LBRACK": [
          -1,
          420
        ],
        "'NUMBER": [
          -1,
          420
        ],
        "'TRUE": [
          -1,
          420
        ],
        "'FALSE": [
          -1,
          420
        ],
        "'NULL": [
          -1,
          420
        ],
        "'PARENAFTERBRACE": [
          -1,
          420
        ],
        "'ASK": [
          -1,
          420
        ],
        "'NEW": [
          -1,
          420
        ]
      },
      {
        "$": [
          -1,
          422
        ],
        "'NAME": [
          -1,
          422
        ],
        "'PARENNOSPACE": [
          -1,
          422
        ],
        "'STRING": [
          -1,
          422
        ],
        "'RBRACE": [
          -1,
          422
        ],
        "'SPY": [
          -1,
          422
        ],
        "'PARENSPACE": [
          -1,
          422
        ],
        "'INT": [
          -1,
          422
        ],
        "'LONG": [
          -1,
          422
        ],
        "'DOUBLE": [
          -1,
          422
        ],
        "'FLOAT": [
          -1,
          422
        ],
        "'BOOLEAN": [
          -1,
          422
        ],
        "'VOID": [
          -1,
          422
        ],
        "'DATA": [
          -1,
          422
        ],
        "'IF": [
          -1,
          422
        ],
        "'FOR": [
          -1,
          422
        ],
        "'RETURN": [
          -1,
          422
        ],
        "'VAR": [
          -1,
          422
        ],
        "'ATCHECK": [
          -1,
          422
        ],
        "'ASSERTEQUALS": [
          -1,
          422
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          422
        ],
        "'ASSERTTRUE": [
          -1,
          422
        ],
        "'ASSERTFALSE": [
          -1,
          422
        ],
        "'ASSERTSATISFIES": [
          -1,
          422
        ],
        "'ASSERTRAISES": [
          -1,
          422
        ],
        "'SWITCH": [
          -1,
          422
        ],
        "'YIELD": [
          -1,
          422
        ],
        "'DASH": [
          -1,
          422
        ],
        "'BANG": [
          -1,
          422
        ],
        "'LBRACK": [
          -1,
          422
        ],
        "'NUMBER": [
          -1,
          422
        ],
        "'TRUE": [
          -1,
          422
        ],
        "'FALSE": [
          -1,
          422
        ],
        "'NULL": [
          -1,
          422
        ],
        "'PARENAFTERBRACE": [
          -1,
          422
        ],
        "'ASK": [
          -1,
          422
        ],
        "'NEW": [
          -1,
          422
        ]
      },
      {
        "$": [
          -1,
          424
        ],
        "'NAME": [
          -1,
          424
        ],
        "'PARENNOSPACE": [
          -1,
          424
        ],
        "'STRING": [
          -1,
          424
        ],
        "'RBRACE": [
          -1,
          424
        ],
        "'SPY": [
          -1,
          424
        ],
        "'PARENSPACE": [
          -1,
          424
        ],
        "'INT": [
          -1,
          424
        ],
        "'LONG": [
          -1,
          424
        ],
        "'DOUBLE": [
          -1,
          424
        ],
        "'FLOAT": [
          -1,
          424
        ],
        "'BOOLEAN": [
          -1,
          424
        ],
        "'VOID": [
          -1,
          424
        ],
        "'DATA": [
          -1,
          424
        ],
        "'IF": [
          -1,
          424
        ],
        "'FOR": [
          -1,
          424
        ],
        "'RETURN": [
          -1,
          424
        ],
        "'VAR": [
          -1,
          424
        ],
        "'ATCHECK": [
          -1,
          424
        ],
        "'ASSERTEQUALS": [
          -1,
          424
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          424
        ],
        "'ASSERTTRUE": [
          -1,
          424
        ],
        "'ASSERTFALSE": [
          -1,
          424
        ],
        "'ASSERTSATISFIES": [
          -1,
          424
        ],
        "'ASSERTRAISES": [
          -1,
          424
        ],
        "'SWITCH": [
          -1,
          424
        ],
        "'YIELD": [
          -1,
          424
        ],
        "'DASH": [
          -1,
          424
        ],
        "'BANG": [
          -1,
          424
        ],
        "'LBRACK": [
          -1,
          424
        ],
        "'NUMBER": [
          -1,
          424
        ],
        "'TRUE": [
          -1,
          424
        ],
        "'FALSE": [
          -1,
          424
        ],
        "'NULL": [
          -1,
          424
        ],
        "'PARENAFTERBRACE": [
          -1,
          424
        ],
        "'ASK": [
          -1,
          424
        ],
        "'NEW": [
          -1,
          424
        ]
      },
      {
        "'LBRACE": [
          370
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          177
        ],
        "data-decl": [
          178
        ],
        "check-block": [
          179
        ],
        "let-stmt": [
          180
        ],
        "var-stmt": [
          181
        ],
        "assign-stmt": [
          182
        ],
        "expr-stmt": [
          183
        ],
        "'RBRACE": [
          371
        ],
        "block_I1": [
          372
        ],
        "block-stmt": [
          373
        ],
        "if-stmt": [
          186
        ],
        "for-stmt": [
          187
        ],
        "return-stmt": [
          188
        ],
        "yield-stmt": [
          189
        ],
        "spy-stmt": [
          190
        ],
        "'SPY": [
          191
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "'IF": [
          193
        ],
        "full-expr": [
          31
        ],
        "'FOR": [
          195
        ],
        "'RETURN": [
          196
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "'YIELD": [
          204
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          -1,
          426
        ],
        "'COMMA": [
          -1,
          426
        ]
      },
      {
        "'RPAREN": [
          -1,
          428
        ],
        "'COMMA": [
          -1,
          428
        ]
      },
      {
        "'SEMI": [
          -1,
          430
        ],
        "'RBRACE": [
          -1,
          430
        ]
      },
      {
        "'COMMA": [
          374
        ],
        "variant-decl_A0_I2_I1": [
          375
        ],
        "'RPAREN": [
          -1,
          432
        ]
      },
      {
        "'SEMI": [
          -1,
          434
        ],
        "'RBRACE": [
          -1,
          434
        ]
      },
      {
        "$": [
          -1,
          436
        ],
        "'NAME": [
          -1,
          436
        ],
        "'PARENNOSPACE": [
          -1,
          436
        ],
        "'STRING": [
          -1,
          436
        ],
        "'RBRACE": [
          -1,
          436
        ],
        "'SPY": [
          -1,
          436
        ],
        "'PARENSPACE": [
          -1,
          436
        ],
        "'INT": [
          -1,
          436
        ],
        "'LONG": [
          -1,
          436
        ],
        "'DOUBLE": [
          -1,
          436
        ],
        "'FLOAT": [
          -1,
          436
        ],
        "'BOOLEAN": [
          -1,
          436
        ],
        "'VOID": [
          -1,
          436
        ],
        "'DATA": [
          -1,
          436
        ],
        "'IF": [
          -1,
          436
        ],
        "'FOR": [
          -1,
          436
        ],
        "'RETURN": [
          -1,
          436
        ],
        "'VAR": [
          -1,
          436
        ],
        "'ATCHECK": [
          -1,
          436
        ],
        "'ASSERTEQUALS": [
          -1,
          436
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          436
        ],
        "'ASSERTTRUE": [
          -1,
          436
        ],
        "'ASSERTFALSE": [
          -1,
          436
        ],
        "'ASSERTSATISFIES": [
          -1,
          436
        ],
        "'ASSERTRAISES": [
          -1,
          436
        ],
        "'SWITCH": [
          -1,
          436
        ],
        "'YIELD": [
          -1,
          436
        ],
        "'DASH": [
          -1,
          436
        ],
        "'BANG": [
          -1,
          436
        ],
        "'LBRACK": [
          -1,
          436
        ],
        "'NUMBER": [
          -1,
          436
        ],
        "'TRUE": [
          -1,
          436
        ],
        "'FALSE": [
          -1,
          436
        ],
        "'NULL": [
          -1,
          436
        ],
        "'PARENAFTERBRACE": [
          -1,
          436
        ],
        "'ASK": [
          -1,
          436
        ],
        "'NEW": [
          -1,
          436
        ]
      },
      {
        "'RPAREN": [
          376
        ],
        "spy-stmt_I3": [
          377
        ],
        "'COMMA": [
          378
        ]
      },
      {
        "block": [
          379
        ],
        "'LBRACE": [
          275
        ]
      },
      {
        "'NAME": [
          -1,
          438
        ],
        "'PARENNOSPACE": [
          -1,
          438
        ],
        "'STRING": [
          -1,
          438
        ],
        "'RBRACE": [
          -1,
          438
        ],
        "'SPY": [
          -1,
          438
        ],
        "'PARENSPACE": [
          -1,
          438
        ],
        "'INT": [
          -1,
          438
        ],
        "'LONG": [
          -1,
          438
        ],
        "'DOUBLE": [
          -1,
          438
        ],
        "'FLOAT": [
          -1,
          438
        ],
        "'BOOLEAN": [
          -1,
          438
        ],
        "'VOID": [
          -1,
          438
        ],
        "'DATA": [
          -1,
          438
        ],
        "'IF": [
          -1,
          438
        ],
        "'FOR": [
          -1,
          438
        ],
        "'RETURN": [
          -1,
          438
        ],
        "'VAR": [
          -1,
          438
        ],
        "'ATCHECK": [
          -1,
          438
        ],
        "'ASSERTEQUALS": [
          -1,
          438
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          438
        ],
        "'ASSERTTRUE": [
          -1,
          438
        ],
        "'ASSERTFALSE": [
          -1,
          438
        ],
        "'ASSERTSATISFIES": [
          -1,
          438
        ],
        "'ASSERTRAISES": [
          -1,
          438
        ],
        "'SWITCH": [
          -1,
          438
        ],
        "'YIELD": [
          -1,
          438
        ],
        "'DASH": [
          -1,
          438
        ],
        "'BANG": [
          -1,
          438
        ],
        "'LBRACK": [
          -1,
          438
        ],
        "'NUMBER": [
          -1,
          438
        ],
        "'TRUE": [
          -1,
          438
        ],
        "'FALSE": [
          -1,
          438
        ],
        "'NULL": [
          -1,
          438
        ],
        "'PARENAFTERBRACE": [
          -1,
          438
        ],
        "'ASK": [
          -1,
          438
        ],
        "'NEW": [
          -1,
          438
        ]
      },
      {
        "'NAME": [
          -1,
          440
        ],
        "'PARENNOSPACE": [
          -1,
          440
        ],
        "'STRING": [
          -1,
          440
        ],
        "'RBRACE": [
          -1,
          440
        ],
        "'SPY": [
          -1,
          440
        ],
        "'PARENSPACE": [
          -1,
          440
        ],
        "'INT": [
          -1,
          440
        ],
        "'LONG": [
          -1,
          440
        ],
        "'DOUBLE": [
          -1,
          440
        ],
        "'FLOAT": [
          -1,
          440
        ],
        "'BOOLEAN": [
          -1,
          440
        ],
        "'VOID": [
          -1,
          440
        ],
        "'DATA": [
          -1,
          440
        ],
        "'IF": [
          -1,
          440
        ],
        "'FOR": [
          -1,
          440
        ],
        "'RETURN": [
          -1,
          440
        ],
        "'VAR": [
          -1,
          440
        ],
        "'ATCHECK": [
          -1,
          440
        ],
        "'ASSERTEQUALS": [
          -1,
          440
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          440
        ],
        "'ASSERTTRUE": [
          -1,
          440
        ],
        "'ASSERTFALSE": [
          -1,
          440
        ],
        "'ASSERTSATISFIES": [
          -1,
          440
        ],
        "'ASSERTRAISES": [
          -1,
          440
        ],
        "'SWITCH": [
          -1,
          440
        ],
        "'YIELD": [
          -1,
          440
        ],
        "'DASH": [
          -1,
          440
        ],
        "'BANG": [
          -1,
          440
        ],
        "'LBRACK": [
          -1,
          440
        ],
        "'NUMBER": [
          -1,
          440
        ],
        "'TRUE": [
          -1,
          440
        ],
        "'FALSE": [
          -1,
          440
        ],
        "'NULL": [
          -1,
          440
        ],
        "'PARENAFTERBRACE": [
          -1,
          440
        ],
        "'ASK": [
          -1,
          440
        ],
        "'NEW": [
          -1,
          440
        ]
      },
      {
        "'NAME": [
          -1,
          442
        ],
        "'PARENNOSPACE": [
          -1,
          442
        ],
        "'STRING": [
          -1,
          442
        ],
        "'RBRACE": [
          -1,
          442
        ],
        "'SPY": [
          -1,
          442
        ],
        "'PARENSPACE": [
          -1,
          442
        ],
        "'INT": [
          -1,
          442
        ],
        "'LONG": [
          -1,
          442
        ],
        "'DOUBLE": [
          -1,
          442
        ],
        "'FLOAT": [
          -1,
          442
        ],
        "'BOOLEAN": [
          -1,
          442
        ],
        "'VOID": [
          -1,
          442
        ],
        "'DATA": [
          -1,
          442
        ],
        "'IF": [
          -1,
          442
        ],
        "'FOR": [
          -1,
          442
        ],
        "'RETURN": [
          -1,
          442
        ],
        "'VAR": [
          -1,
          442
        ],
        "'ATCHECK": [
          -1,
          442
        ],
        "'ASSERTEQUALS": [
          -1,
          442
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          442
        ],
        "'ASSERTTRUE": [
          -1,
          442
        ],
        "'ASSERTFALSE": [
          -1,
          442
        ],
        "'ASSERTSATISFIES": [
          -1,
          442
        ],
        "'ASSERTRAISES": [
          -1,
          442
        ],
        "'SWITCH": [
          -1,
          442
        ],
        "'YIELD": [
          -1,
          442
        ],
        "'DASH": [
          -1,
          442
        ],
        "'BANG": [
          -1,
          442
        ],
        "'LBRACK": [
          -1,
          442
        ],
        "'NUMBER": [
          -1,
          442
        ],
        "'TRUE": [
          -1,
          442
        ],
        "'FALSE": [
          -1,
          442
        ],
        "'NULL": [
          -1,
          442
        ],
        "'PARENAFTERBRACE": [
          -1,
          442
        ],
        "'ASK": [
          -1,
          442
        ],
        "'NEW": [
          -1,
          442
        ]
      },
      {
        "'NAME": [
          -1,
          444
        ],
        "'PARENNOSPACE": [
          -1,
          444
        ],
        "'STRING": [
          -1,
          444
        ],
        "'RBRACE": [
          -1,
          444
        ],
        "'SPY": [
          -1,
          444
        ],
        "'PARENSPACE": [
          -1,
          444
        ],
        "'INT": [
          -1,
          444
        ],
        "'LONG": [
          -1,
          444
        ],
        "'DOUBLE": [
          -1,
          444
        ],
        "'FLOAT": [
          -1,
          444
        ],
        "'BOOLEAN": [
          -1,
          444
        ],
        "'VOID": [
          -1,
          444
        ],
        "'DATA": [
          -1,
          444
        ],
        "'IF": [
          -1,
          444
        ],
        "'FOR": [
          -1,
          444
        ],
        "'RETURN": [
          -1,
          444
        ],
        "'VAR": [
          -1,
          444
        ],
        "'ATCHECK": [
          -1,
          444
        ],
        "'ASSERTEQUALS": [
          -1,
          444
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          444
        ],
        "'ASSERTTRUE": [
          -1,
          444
        ],
        "'ASSERTFALSE": [
          -1,
          444
        ],
        "'ASSERTSATISFIES": [
          -1,
          444
        ],
        "'ASSERTRAISES": [
          -1,
          444
        ],
        "'SWITCH": [
          -1,
          444
        ],
        "'YIELD": [
          -1,
          444
        ],
        "'DASH": [
          -1,
          444
        ],
        "'BANG": [
          -1,
          444
        ],
        "'LBRACK": [
          -1,
          444
        ],
        "'NUMBER": [
          -1,
          444
        ],
        "'TRUE": [
          -1,
          444
        ],
        "'FALSE": [
          -1,
          444
        ],
        "'NULL": [
          -1,
          444
        ],
        "'PARENAFTERBRACE": [
          -1,
          444
        ],
        "'ASK": [
          -1,
          444
        ],
        "'NEW": [
          -1,
          444
        ]
      },
      {
        "'NAME": [
          -1,
          446
        ],
        "'PARENNOSPACE": [
          -1,
          446
        ],
        "'STRING": [
          -1,
          446
        ],
        "'RBRACE": [
          -1,
          446
        ],
        "'SPY": [
          -1,
          446
        ],
        "'PARENSPACE": [
          -1,
          446
        ],
        "'INT": [
          -1,
          446
        ],
        "'LONG": [
          -1,
          446
        ],
        "'DOUBLE": [
          -1,
          446
        ],
        "'FLOAT": [
          -1,
          446
        ],
        "'BOOLEAN": [
          -1,
          446
        ],
        "'VOID": [
          -1,
          446
        ],
        "'DATA": [
          -1,
          446
        ],
        "'IF": [
          -1,
          446
        ],
        "'FOR": [
          -1,
          446
        ],
        "'RETURN": [
          -1,
          446
        ],
        "'VAR": [
          -1,
          446
        ],
        "'ATCHECK": [
          -1,
          446
        ],
        "'ASSERTEQUALS": [
          -1,
          446
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          446
        ],
        "'ASSERTTRUE": [
          -1,
          446
        ],
        "'ASSERTFALSE": [
          -1,
          446
        ],
        "'ASSERTSATISFIES": [
          -1,
          446
        ],
        "'ASSERTRAISES": [
          -1,
          446
        ],
        "'SWITCH": [
          -1,
          446
        ],
        "'YIELD": [
          -1,
          446
        ],
        "'DASH": [
          -1,
          446
        ],
        "'BANG": [
          -1,
          446
        ],
        "'LBRACK": [
          -1,
          446
        ],
        "'NUMBER": [
          -1,
          446
        ],
        "'TRUE": [
          -1,
          446
        ],
        "'FALSE": [
          -1,
          446
        ],
        "'NULL": [
          -1,
          446
        ],
        "'PARENAFTERBRACE": [
          -1,
          446
        ],
        "'ASK": [
          -1,
          446
        ],
        "'NEW": [
          -1,
          446
        ]
      },
      {
        "'NAME": [
          -1,
          448
        ],
        "'PARENNOSPACE": [
          -1,
          448
        ],
        "'STRING": [
          -1,
          448
        ],
        "'RBRACE": [
          -1,
          448
        ],
        "'SPY": [
          -1,
          448
        ],
        "'PARENSPACE": [
          -1,
          448
        ],
        "'INT": [
          -1,
          448
        ],
        "'LONG": [
          -1,
          448
        ],
        "'DOUBLE": [
          -1,
          448
        ],
        "'FLOAT": [
          -1,
          448
        ],
        "'BOOLEAN": [
          -1,
          448
        ],
        "'VOID": [
          -1,
          448
        ],
        "'DATA": [
          -1,
          448
        ],
        "'IF": [
          -1,
          448
        ],
        "'FOR": [
          -1,
          448
        ],
        "'RETURN": [
          -1,
          448
        ],
        "'VAR": [
          -1,
          448
        ],
        "'ATCHECK": [
          -1,
          448
        ],
        "'ASSERTEQUALS": [
          -1,
          448
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          448
        ],
        "'ASSERTTRUE": [
          -1,
          448
        ],
        "'ASSERTFALSE": [
          -1,
          448
        ],
        "'ASSERTSATISFIES": [
          -1,
          448
        ],
        "'ASSERTRAISES": [
          -1,
          448
        ],
        "'SWITCH": [
          -1,
          448
        ],
        "'YIELD": [
          -1,
          448
        ],
        "'DASH": [
          -1,
          448
        ],
        "'BANG": [
          -1,
          448
        ],
        "'LBRACK": [
          -1,
          448
        ],
        "'NUMBER": [
          -1,
          448
        ],
        "'TRUE": [
          -1,
          448
        ],
        "'FALSE": [
          -1,
          448
        ],
        "'NULL": [
          -1,
          448
        ],
        "'PARENAFTERBRACE": [
          -1,
          448
        ],
        "'ASK": [
          -1,
          448
        ],
        "'NEW": [
          -1,
          448
        ]
      },
      {
        "'NAME": [
          -1,
          450
        ],
        "'PARENNOSPACE": [
          -1,
          450
        ],
        "'STRING": [
          -1,
          450
        ],
        "'RBRACE": [
          -1,
          450
        ],
        "'SPY": [
          -1,
          450
        ],
        "'PARENSPACE": [
          -1,
          450
        ],
        "'INT": [
          -1,
          450
        ],
        "'LONG": [
          -1,
          450
        ],
        "'DOUBLE": [
          -1,
          450
        ],
        "'FLOAT": [
          -1,
          450
        ],
        "'BOOLEAN": [
          -1,
          450
        ],
        "'VOID": [
          -1,
          450
        ],
        "'DATA": [
          -1,
          450
        ],
        "'IF": [
          -1,
          450
        ],
        "'FOR": [
          -1,
          450
        ],
        "'RETURN": [
          -1,
          450
        ],
        "'VAR": [
          -1,
          450
        ],
        "'ATCHECK": [
          -1,
          450
        ],
        "'ASSERTEQUALS": [
          -1,
          450
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          450
        ],
        "'ASSERTTRUE": [
          -1,
          450
        ],
        "'ASSERTFALSE": [
          -1,
          450
        ],
        "'ASSERTSATISFIES": [
          -1,
          450
        ],
        "'ASSERTRAISES": [
          -1,
          450
        ],
        "'SWITCH": [
          -1,
          450
        ],
        "'YIELD": [
          -1,
          450
        ],
        "'DASH": [
          -1,
          450
        ],
        "'BANG": [
          -1,
          450
        ],
        "'LBRACK": [
          -1,
          450
        ],
        "'NUMBER": [
          -1,
          450
        ],
        "'TRUE": [
          -1,
          450
        ],
        "'FALSE": [
          -1,
          450
        ],
        "'NULL": [
          -1,
          450
        ],
        "'PARENAFTERBRACE": [
          -1,
          450
        ],
        "'ASK": [
          -1,
          450
        ],
        "'NEW": [
          -1,
          450
        ]
      },
      {
        "'NAME": [
          -1,
          452
        ],
        "'PARENNOSPACE": [
          -1,
          452
        ],
        "'STRING": [
          -1,
          452
        ],
        "'RBRACE": [
          -1,
          452
        ],
        "'SPY": [
          -1,
          452
        ],
        "'PARENSPACE": [
          -1,
          452
        ],
        "'INT": [
          -1,
          452
        ],
        "'LONG": [
          -1,
          452
        ],
        "'DOUBLE": [
          -1,
          452
        ],
        "'FLOAT": [
          -1,
          452
        ],
        "'BOOLEAN": [
          -1,
          452
        ],
        "'VOID": [
          -1,
          452
        ],
        "'DATA": [
          -1,
          452
        ],
        "'IF": [
          -1,
          452
        ],
        "'FOR": [
          -1,
          452
        ],
        "'RETURN": [
          -1,
          452
        ],
        "'VAR": [
          -1,
          452
        ],
        "'ATCHECK": [
          -1,
          452
        ],
        "'ASSERTEQUALS": [
          -1,
          452
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          452
        ],
        "'ASSERTTRUE": [
          -1,
          452
        ],
        "'ASSERTFALSE": [
          -1,
          452
        ],
        "'ASSERTSATISFIES": [
          -1,
          452
        ],
        "'ASSERTRAISES": [
          -1,
          452
        ],
        "'SWITCH": [
          -1,
          452
        ],
        "'YIELD": [
          -1,
          452
        ],
        "'DASH": [
          -1,
          452
        ],
        "'BANG": [
          -1,
          452
        ],
        "'LBRACK": [
          -1,
          452
        ],
        "'NUMBER": [
          -1,
          452
        ],
        "'TRUE": [
          -1,
          452
        ],
        "'FALSE": [
          -1,
          452
        ],
        "'NULL": [
          -1,
          452
        ],
        "'PARENAFTERBRACE": [
          -1,
          452
        ],
        "'ASK": [
          -1,
          452
        ],
        "'NEW": [
          -1,
          452
        ]
      },
      {
        "'NAME": [
          -1,
          454
        ],
        "'PARENNOSPACE": [
          -1,
          454
        ],
        "'STRING": [
          -1,
          454
        ],
        "'RBRACE": [
          -1,
          454
        ],
        "'SPY": [
          -1,
          454
        ],
        "'PARENSPACE": [
          -1,
          454
        ],
        "'INT": [
          -1,
          454
        ],
        "'LONG": [
          -1,
          454
        ],
        "'DOUBLE": [
          -1,
          454
        ],
        "'FLOAT": [
          -1,
          454
        ],
        "'BOOLEAN": [
          -1,
          454
        ],
        "'VOID": [
          -1,
          454
        ],
        "'DATA": [
          -1,
          454
        ],
        "'IF": [
          -1,
          454
        ],
        "'FOR": [
          -1,
          454
        ],
        "'RETURN": [
          -1,
          454
        ],
        "'VAR": [
          -1,
          454
        ],
        "'ATCHECK": [
          -1,
          454
        ],
        "'ASSERTEQUALS": [
          -1,
          454
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          454
        ],
        "'ASSERTTRUE": [
          -1,
          454
        ],
        "'ASSERTFALSE": [
          -1,
          454
        ],
        "'ASSERTSATISFIES": [
          -1,
          454
        ],
        "'ASSERTRAISES": [
          -1,
          454
        ],
        "'SWITCH": [
          -1,
          454
        ],
        "'YIELD": [
          -1,
          454
        ],
        "'DASH": [
          -1,
          454
        ],
        "'BANG": [
          -1,
          454
        ],
        "'LBRACK": [
          -1,
          454
        ],
        "'NUMBER": [
          -1,
          454
        ],
        "'TRUE": [
          -1,
          454
        ],
        "'FALSE": [
          -1,
          454
        ],
        "'NULL": [
          -1,
          454
        ],
        "'PARENAFTERBRACE": [
          -1,
          454
        ],
        "'ASK": [
          -1,
          454
        ],
        "'NEW": [
          -1,
          454
        ]
      },
      {
        "'NAME": [
          -1,
          456
        ],
        "'PARENNOSPACE": [
          -1,
          456
        ],
        "'STRING": [
          -1,
          456
        ],
        "'RBRACE": [
          -1,
          456
        ],
        "'SPY": [
          -1,
          456
        ],
        "'PARENSPACE": [
          -1,
          456
        ],
        "'INT": [
          -1,
          456
        ],
        "'LONG": [
          -1,
          456
        ],
        "'DOUBLE": [
          -1,
          456
        ],
        "'FLOAT": [
          -1,
          456
        ],
        "'BOOLEAN": [
          -1,
          456
        ],
        "'VOID": [
          -1,
          456
        ],
        "'DATA": [
          -1,
          456
        ],
        "'IF": [
          -1,
          456
        ],
        "'FOR": [
          -1,
          456
        ],
        "'RETURN": [
          -1,
          456
        ],
        "'VAR": [
          -1,
          456
        ],
        "'ATCHECK": [
          -1,
          456
        ],
        "'ASSERTEQUALS": [
          -1,
          456
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          456
        ],
        "'ASSERTTRUE": [
          -1,
          456
        ],
        "'ASSERTFALSE": [
          -1,
          456
        ],
        "'ASSERTSATISFIES": [
          -1,
          456
        ],
        "'ASSERTRAISES": [
          -1,
          456
        ],
        "'SWITCH": [
          -1,
          456
        ],
        "'YIELD": [
          -1,
          456
        ],
        "'DASH": [
          -1,
          456
        ],
        "'BANG": [
          -1,
          456
        ],
        "'LBRACK": [
          -1,
          456
        ],
        "'NUMBER": [
          -1,
          456
        ],
        "'TRUE": [
          -1,
          456
        ],
        "'FALSE": [
          -1,
          456
        ],
        "'NULL": [
          -1,
          456
        ],
        "'PARENAFTERBRACE": [
          -1,
          456
        ],
        "'ASK": [
          -1,
          456
        ],
        "'NEW": [
          -1,
          456
        ]
      },
      {
        "'NAME": [
          -1,
          458
        ],
        "'PARENNOSPACE": [
          -1,
          458
        ],
        "'STRING": [
          -1,
          458
        ],
        "'RBRACE": [
          -1,
          458
        ],
        "'SPY": [
          -1,
          458
        ],
        "'PARENSPACE": [
          -1,
          458
        ],
        "'INT": [
          -1,
          458
        ],
        "'LONG": [
          -1,
          458
        ],
        "'DOUBLE": [
          -1,
          458
        ],
        "'FLOAT": [
          -1,
          458
        ],
        "'BOOLEAN": [
          -1,
          458
        ],
        "'VOID": [
          -1,
          458
        ],
        "'DATA": [
          -1,
          458
        ],
        "'IF": [
          -1,
          458
        ],
        "'FOR": [
          -1,
          458
        ],
        "'RETURN": [
          -1,
          458
        ],
        "'VAR": [
          -1,
          458
        ],
        "'ATCHECK": [
          -1,
          458
        ],
        "'ASSERTEQUALS": [
          -1,
          458
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          458
        ],
        "'ASSERTTRUE": [
          -1,
          458
        ],
        "'ASSERTFALSE": [
          -1,
          458
        ],
        "'ASSERTSATISFIES": [
          -1,
          458
        ],
        "'ASSERTRAISES": [
          -1,
          458
        ],
        "'SWITCH": [
          -1,
          458
        ],
        "'YIELD": [
          -1,
          458
        ],
        "'DASH": [
          -1,
          458
        ],
        "'BANG": [
          -1,
          458
        ],
        "'LBRACK": [
          -1,
          458
        ],
        "'NUMBER": [
          -1,
          458
        ],
        "'TRUE": [
          -1,
          458
        ],
        "'FALSE": [
          -1,
          458
        ],
        "'NULL": [
          -1,
          458
        ],
        "'PARENAFTERBRACE": [
          -1,
          458
        ],
        "'ASK": [
          -1,
          458
        ],
        "'NEW": [
          -1,
          458
        ]
      },
      {
        "'NAME": [
          -1,
          460
        ],
        "'PARENNOSPACE": [
          -1,
          460
        ],
        "'STRING": [
          -1,
          460
        ],
        "'RBRACE": [
          -1,
          460
        ],
        "'SPY": [
          -1,
          460
        ],
        "'PARENSPACE": [
          -1,
          460
        ],
        "'INT": [
          -1,
          460
        ],
        "'LONG": [
          -1,
          460
        ],
        "'DOUBLE": [
          -1,
          460
        ],
        "'FLOAT": [
          -1,
          460
        ],
        "'BOOLEAN": [
          -1,
          460
        ],
        "'VOID": [
          -1,
          460
        ],
        "'DATA": [
          -1,
          460
        ],
        "'IF": [
          -1,
          460
        ],
        "'FOR": [
          -1,
          460
        ],
        "'RETURN": [
          -1,
          460
        ],
        "'VAR": [
          -1,
          460
        ],
        "'ATCHECK": [
          -1,
          460
        ],
        "'ASSERTEQUALS": [
          -1,
          460
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          460
        ],
        "'ASSERTTRUE": [
          -1,
          460
        ],
        "'ASSERTFALSE": [
          -1,
          460
        ],
        "'ASSERTSATISFIES": [
          -1,
          460
        ],
        "'ASSERTRAISES": [
          -1,
          460
        ],
        "'SWITCH": [
          -1,
          460
        ],
        "'YIELD": [
          -1,
          460
        ],
        "'DASH": [
          -1,
          460
        ],
        "'BANG": [
          -1,
          460
        ],
        "'LBRACK": [
          -1,
          460
        ],
        "'NUMBER": [
          -1,
          460
        ],
        "'TRUE": [
          -1,
          460
        ],
        "'FALSE": [
          -1,
          460
        ],
        "'NULL": [
          -1,
          460
        ],
        "'PARENAFTERBRACE": [
          -1,
          460
        ],
        "'ASK": [
          -1,
          460
        ],
        "'NEW": [
          -1,
          460
        ]
      },
      {
        "'COLON": [
          380
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          381
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          382
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'SEMI": [
          383
        ],
        "assert-stmt_A2_I4?": [
          384
        ],
        "assert-stmt_A2_I4": [
          385
        ],
        "'NAME": [
          -1,
          462,
          464
        ],
        "'PARENNOSPACE": [
          -1,
          462,
          464
        ],
        "'STRING": [
          -1,
          462,
          464
        ],
        "'RBRACE": [
          -1,
          462,
          464
        ],
        "'SPY": [
          -1,
          462,
          464
        ],
        "'PARENSPACE": [
          -1,
          462,
          464
        ],
        "'INT": [
          -1,
          462,
          464
        ],
        "'LONG": [
          -1,
          462,
          464
        ],
        "'DOUBLE": [
          -1,
          462,
          464
        ],
        "'FLOAT": [
          -1,
          462,
          464
        ],
        "'BOOLEAN": [
          -1,
          462,
          464
        ],
        "'VOID": [
          -1,
          462,
          464
        ],
        "'DATA": [
          -1,
          462,
          464
        ],
        "'IF": [
          -1,
          462,
          464
        ],
        "'FOR": [
          -1,
          462,
          464
        ],
        "'RETURN": [
          -1,
          462,
          464
        ],
        "'VAR": [
          -1,
          462,
          464
        ],
        "'ATCHECK": [
          -1,
          462,
          464
        ],
        "'ASSERTEQUALS": [
          -1,
          462,
          464
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          462,
          464
        ],
        "'ASSERTTRUE": [
          -1,
          462,
          464
        ],
        "'ASSERTFALSE": [
          -1,
          462,
          464
        ],
        "'ASSERTSATISFIES": [
          -1,
          462,
          464
        ],
        "'ASSERTRAISES": [
          -1,
          462,
          464
        ],
        "'SWITCH": [
          -1,
          462,
          464
        ],
        "'YIELD": [
          -1,
          462,
          464
        ],
        "'DASH": [
          -1,
          462,
          464
        ],
        "'BANG": [
          -1,
          462,
          464
        ],
        "'LBRACK": [
          -1,
          462,
          464
        ],
        "'NUMBER": [
          -1,
          462,
          464
        ],
        "'TRUE": [
          -1,
          462,
          464
        ],
        "'FALSE": [
          -1,
          462,
          464
        ],
        "'NULL": [
          -1,
          462,
          464
        ],
        "'PARENAFTERBRACE": [
          -1,
          462,
          464
        ],
        "'ASK": [
          -1,
          462,
          464
        ],
        "'NEW": [
          -1,
          462,
          464
        ]
      },
      {
        "'SEMI": [
          386
        ],
        "assert-stmt_A3_I4?": [
          387
        ],
        "assert-stmt_A3_I4": [
          388
        ],
        "'NAME": [
          -1,
          466,
          468
        ],
        "'PARENNOSPACE": [
          -1,
          466,
          468
        ],
        "'STRING": [
          -1,
          466,
          468
        ],
        "'RBRACE": [
          -1,
          466,
          468
        ],
        "'SPY": [
          -1,
          466,
          468
        ],
        "'PARENSPACE": [
          -1,
          466,
          468
        ],
        "'INT": [
          -1,
          466,
          468
        ],
        "'LONG": [
          -1,
          466,
          468
        ],
        "'DOUBLE": [
          -1,
          466,
          468
        ],
        "'FLOAT": [
          -1,
          466,
          468
        ],
        "'BOOLEAN": [
          -1,
          466,
          468
        ],
        "'VOID": [
          -1,
          466,
          468
        ],
        "'DATA": [
          -1,
          466,
          468
        ],
        "'IF": [
          -1,
          466,
          468
        ],
        "'FOR": [
          -1,
          466,
          468
        ],
        "'RETURN": [
          -1,
          466,
          468
        ],
        "'VAR": [
          -1,
          466,
          468
        ],
        "'ATCHECK": [
          -1,
          466,
          468
        ],
        "'ASSERTEQUALS": [
          -1,
          466,
          468
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          466,
          468
        ],
        "'ASSERTTRUE": [
          -1,
          466,
          468
        ],
        "'ASSERTFALSE": [
          -1,
          466,
          468
        ],
        "'ASSERTSATISFIES": [
          -1,
          466,
          468
        ],
        "'ASSERTRAISES": [
          -1,
          466,
          468
        ],
        "'SWITCH": [
          -1,
          466,
          468
        ],
        "'YIELD": [
          -1,
          466,
          468
        ],
        "'DASH": [
          -1,
          466,
          468
        ],
        "'BANG": [
          -1,
          466,
          468
        ],
        "'LBRACK": [
          -1,
          466,
          468
        ],
        "'NUMBER": [
          -1,
          466,
          468
        ],
        "'TRUE": [
          -1,
          466,
          468
        ],
        "'FALSE": [
          -1,
          466,
          468
        ],
        "'NULL": [
          -1,
          466,
          468
        ],
        "'PARENAFTERBRACE": [
          -1,
          466,
          468
        ],
        "'ASK": [
          -1,
          466,
          468
        ],
        "'NEW": [
          -1,
          466,
          468
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          389
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          390
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          177
        ],
        "data-decl": [
          178
        ],
        "check-block": [
          179
        ],
        "let-stmt": [
          180
        ],
        "var-stmt": [
          181
        ],
        "assign-stmt": [
          182
        ],
        "expr-stmt": [
          183
        ],
        "'RBRACE": [
          391
        ],
        "block-stmt": [
          392
        ],
        "if-stmt": [
          186
        ],
        "for-stmt": [
          187
        ],
        "return-stmt": [
          188
        ],
        "yield-stmt": [
          189
        ],
        "spy-stmt": [
          190
        ],
        "'SPY": [
          191
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "assert-stmt": [
          393
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "'IF": [
          193
        ],
        "full-expr": [
          194
        ],
        "'FOR": [
          195
        ],
        "'RETURN": [
          196
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "check-block_A0_I6": [
          394
        ],
        "'ASSERTEQUALS": [
          198
        ],
        "'ASSERTNOTEQUALS": [
          199
        ],
        "'ASSERTTRUE": [
          200
        ],
        "'ASSERTFALSE": [
          201
        ],
        "'ASSERTSATISFIES": [
          202
        ],
        "'ASSERTRAISES": [
          203
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "'YIELD": [
          204
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RBRACE": [
          395
        ]
      },
      {
        "'RBRACE": [
          -1,
          470
        ],
        "'CASE": [
          -1,
          470
        ],
        "'DEFAULT": [
          -1,
          470
        ]
      },
      {
        "'RBRACE": [
          -1,
          472
        ],
        "'CASE": [
          -1,
          472
        ],
        "'DEFAULT": [
          -1,
          472
        ]
      },
      {
        "'RBRACE": [
          -1,
          474
        ]
      },
      {
        "'RBRACE": [
          -1,
          476
        ]
      },
      {
        "'NAME": [
          396
        ]
      },
      {
        "'COLON": [
          397
        ]
      },
      {
        "'COMMA": [
          -1,
          478
        ],
        "'RBRACK": [
          -1,
          478
        ]
      },
      {
        "'RPAREN": [
          398
        ]
      },
      {
        "'NAME": [
          -1,
          480
        ],
        "'STRING": [
          -1,
          480
        ],
        "'RBRACE": [
          -1,
          480
        ],
        "'PARENSPACE": [
          -1,
          480
        ],
        "'SWITCH": [
          -1,
          480
        ],
        "'DASH": [
          -1,
          480
        ],
        "'BANG": [
          -1,
          480
        ],
        "'LBRACK": [
          -1,
          480
        ],
        "'NUMBER": [
          -1,
          480
        ],
        "'TRUE": [
          -1,
          480
        ],
        "'FALSE": [
          -1,
          480
        ],
        "'NULL": [
          -1,
          480
        ],
        "'PARENAFTERBRACE": [
          -1,
          480
        ],
        "'ASK": [
          -1,
          480
        ],
        "'NEW": [
          -1,
          480
        ]
      },
      {
        "'NAME": [
          -1,
          482
        ],
        "'STRING": [
          -1,
          482
        ],
        "'PARENSPACE": [
          -1,
          482
        ],
        "'SWITCH": [
          -1,
          482
        ],
        "'DASH": [
          -1,
          482
        ],
        "'BANG": [
          -1,
          482
        ],
        "'LBRACK": [
          -1,
          482
        ],
        "'NUMBER": [
          -1,
          482
        ],
        "'TRUE": [
          -1,
          482
        ],
        "'FALSE": [
          -1,
          482
        ],
        "'NULL": [
          -1,
          482
        ],
        "'PARENAFTERBRACE": [
          -1,
          482
        ],
        "'ASK": [
          -1,
          482
        ],
        "'OTHERWISE": [
          -1,
          482
        ],
        "'NEW": [
          -1,
          482
        ]
      },
      {
        "'RBRACE": [
          399
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          400
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          -1,
          484
        ],
        "'COMMA": [
          -1,
          484
        ]
      },
      {
        "$": [
          -1,
          486
        ],
        "'IMPORT": [
          -1,
          486
        ],
        "'NAME": [
          -1,
          486
        ],
        "'PARENNOSPACE": [
          -1,
          486
        ],
        "'STRING": [
          -1,
          486
        ],
        "'INCLUDE": [
          -1,
          486
        ],
        "'PARENSPACE": [
          -1,
          486
        ],
        "'INT": [
          -1,
          486
        ],
        "'LONG": [
          -1,
          486
        ],
        "'DOUBLE": [
          -1,
          486
        ],
        "'FLOAT": [
          -1,
          486
        ],
        "'BOOLEAN": [
          -1,
          486
        ],
        "'VOID": [
          -1,
          486
        ],
        "'DATA": [
          -1,
          486
        ],
        "'VAR": [
          -1,
          486
        ],
        "'ATCHECK": [
          -1,
          486
        ],
        "'SWITCH": [
          -1,
          486
        ],
        "'DASH": [
          -1,
          486
        ],
        "'BANG": [
          -1,
          486
        ],
        "'LBRACK": [
          -1,
          486
        ],
        "'NUMBER": [
          -1,
          486
        ],
        "'TRUE": [
          -1,
          486
        ],
        "'FALSE": [
          -1,
          486
        ],
        "'NULL": [
          -1,
          486
        ],
        "'PARENAFTERBRACE": [
          -1,
          486
        ],
        "'ASK": [
          -1,
          486
        ],
        "'NEW": [
          -1,
          486
        ]
      },
      {
        "where-clause_I2*": [
          401
        ],
        "'NAME": [
          -1,
          488
        ],
        "'PARENNOSPACE": [
          -1,
          488
        ],
        "'STRING": [
          -1,
          488
        ],
        "'RBRACE": [
          -1,
          488
        ],
        "'SPY": [
          -1,
          488
        ],
        "'PARENSPACE": [
          -1,
          488
        ],
        "'INT": [
          -1,
          488
        ],
        "'LONG": [
          -1,
          488
        ],
        "'DOUBLE": [
          -1,
          488
        ],
        "'FLOAT": [
          -1,
          488
        ],
        "'BOOLEAN": [
          -1,
          488
        ],
        "'VOID": [
          -1,
          488
        ],
        "'DATA": [
          -1,
          488
        ],
        "'IF": [
          -1,
          488
        ],
        "'FOR": [
          -1,
          488
        ],
        "'RETURN": [
          -1,
          488
        ],
        "'VAR": [
          -1,
          488
        ],
        "'ATCHECK": [
          -1,
          488
        ],
        "'ASSERTEQUALS": [
          -1,
          488
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          488
        ],
        "'ASSERTTRUE": [
          -1,
          488
        ],
        "'ASSERTFALSE": [
          -1,
          488
        ],
        "'ASSERTSATISFIES": [
          -1,
          488
        ],
        "'ASSERTRAISES": [
          -1,
          488
        ],
        "'SWITCH": [
          -1,
          488
        ],
        "'YIELD": [
          -1,
          488
        ],
        "'DASH": [
          -1,
          488
        ],
        "'BANG": [
          -1,
          488
        ],
        "'LBRACK": [
          -1,
          488
        ],
        "'NUMBER": [
          -1,
          488
        ],
        "'TRUE": [
          -1,
          488
        ],
        "'FALSE": [
          -1,
          488
        ],
        "'NULL": [
          -1,
          488
        ],
        "'PARENAFTERBRACE": [
          -1,
          488
        ],
        "'ASK": [
          -1,
          488
        ],
        "'NEW": [
          -1,
          488
        ]
      },
      {
        "$": [
          -1,
          490
        ],
        "'NAME": [
          -1,
          490
        ],
        "'PARENNOSPACE": [
          -1,
          490
        ],
        "'STRING": [
          -1,
          490
        ],
        "'RBRACE": [
          -1,
          490
        ],
        "'SPY": [
          -1,
          490
        ],
        "'PARENSPACE": [
          -1,
          490
        ],
        "'WHERE": [
          -1,
          490
        ],
        "'INT": [
          -1,
          490
        ],
        "'LONG": [
          -1,
          490
        ],
        "'DOUBLE": [
          -1,
          490
        ],
        "'FLOAT": [
          -1,
          490
        ],
        "'BOOLEAN": [
          -1,
          490
        ],
        "'VOID": [
          -1,
          490
        ],
        "'DATA": [
          -1,
          490
        ],
        "'IF": [
          -1,
          490
        ],
        "'ELSE": [
          -1,
          490
        ],
        "'FOR": [
          -1,
          490
        ],
        "'RETURN": [
          -1,
          490
        ],
        "'VAR": [
          -1,
          490
        ],
        "'ATCHECK": [
          -1,
          490
        ],
        "'ASSERTEQUALS": [
          -1,
          490
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          490
        ],
        "'ASSERTTRUE": [
          -1,
          490
        ],
        "'ASSERTFALSE": [
          -1,
          490
        ],
        "'ASSERTSATISFIES": [
          -1,
          490
        ],
        "'ASSERTRAISES": [
          -1,
          490
        ],
        "'SWITCH": [
          -1,
          490
        ],
        "'YIELD": [
          -1,
          490
        ],
        "'DASH": [
          -1,
          490
        ],
        "'BANG": [
          -1,
          490
        ],
        "'LBRACK": [
          -1,
          490
        ],
        "'RBRACK": [
          -1,
          490
        ],
        "'NUMBER": [
          -1,
          490
        ],
        "'TRUE": [
          -1,
          490
        ],
        "'FALSE": [
          -1,
          490
        ],
        "'NULL": [
          -1,
          490
        ],
        "'PARENAFTERBRACE": [
          -1,
          490
        ],
        "'ASK": [
          -1,
          490
        ],
        "'NEW": [
          -1,
          490
        ]
      },
      {
        "'NAME": [
          -1,
          492
        ],
        "'PARENNOSPACE": [
          -1,
          492
        ],
        "'STRING": [
          -1,
          492
        ],
        "'RBRACE": [
          -1,
          492
        ],
        "'SPY": [
          -1,
          492
        ],
        "'PARENSPACE": [
          -1,
          492
        ],
        "'INT": [
          -1,
          492
        ],
        "'LONG": [
          -1,
          492
        ],
        "'DOUBLE": [
          -1,
          492
        ],
        "'FLOAT": [
          -1,
          492
        ],
        "'BOOLEAN": [
          -1,
          492
        ],
        "'VOID": [
          -1,
          492
        ],
        "'DATA": [
          -1,
          492
        ],
        "'IF": [
          -1,
          492
        ],
        "'FOR": [
          -1,
          492
        ],
        "'RETURN": [
          -1,
          492
        ],
        "'VAR": [
          -1,
          492
        ],
        "'ATCHECK": [
          -1,
          492
        ],
        "'SWITCH": [
          -1,
          492
        ],
        "'YIELD": [
          -1,
          492
        ],
        "'DASH": [
          -1,
          492
        ],
        "'BANG": [
          -1,
          492
        ],
        "'LBRACK": [
          -1,
          492
        ],
        "'NUMBER": [
          -1,
          492
        ],
        "'TRUE": [
          -1,
          492
        ],
        "'FALSE": [
          -1,
          492
        ],
        "'NULL": [
          -1,
          492
        ],
        "'PARENAFTERBRACE": [
          -1,
          492
        ],
        "'ASK": [
          -1,
          492
        ],
        "'NEW": [
          -1,
          492
        ]
      },
      {
        "'NAME": [
          -1,
          494
        ],
        "'PARENNOSPACE": [
          -1,
          494
        ],
        "'STRING": [
          -1,
          494
        ],
        "'RBRACE": [
          -1,
          494
        ],
        "'SPY": [
          -1,
          494
        ],
        "'PARENSPACE": [
          -1,
          494
        ],
        "'INT": [
          -1,
          494
        ],
        "'LONG": [
          -1,
          494
        ],
        "'DOUBLE": [
          -1,
          494
        ],
        "'FLOAT": [
          -1,
          494
        ],
        "'BOOLEAN": [
          -1,
          494
        ],
        "'VOID": [
          -1,
          494
        ],
        "'DATA": [
          -1,
          494
        ],
        "'IF": [
          -1,
          494
        ],
        "'FOR": [
          -1,
          494
        ],
        "'RETURN": [
          -1,
          494
        ],
        "'VAR": [
          -1,
          494
        ],
        "'ATCHECK": [
          -1,
          494
        ],
        "'SWITCH": [
          -1,
          494
        ],
        "'YIELD": [
          -1,
          494
        ],
        "'DASH": [
          -1,
          494
        ],
        "'BANG": [
          -1,
          494
        ],
        "'LBRACK": [
          -1,
          494
        ],
        "'NUMBER": [
          -1,
          494
        ],
        "'TRUE": [
          -1,
          494
        ],
        "'FALSE": [
          -1,
          494
        ],
        "'NULL": [
          -1,
          494
        ],
        "'PARENAFTERBRACE": [
          -1,
          494
        ],
        "'ASK": [
          -1,
          494
        ],
        "'NEW": [
          -1,
          494
        ]
      },
      {
        "'NAME": [
          81
        ],
        "'PARENSPACE": [
          62
        ],
        "type-ann": [
          278
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "variant-member": [
          402
        ]
      },
      {
        "'RPAREN": [
          -1,
          496
        ],
        "'COMMA": [
          -1,
          496
        ]
      },
      {
        "'SEMI": [
          403
        ]
      },
      {
        "'RPAREN": [
          -1,
          498
        ],
        "'COMMA": [
          -1,
          498
        ]
      },
      {
        "'NAME": [
          404
        ]
      },
      {
        "if-stmt_I5*": [
          405
        ],
        "'NAME": [
          -1,
          500,
          502
        ],
        "'PARENNOSPACE": [
          -1,
          500,
          502
        ],
        "'STRING": [
          -1,
          500,
          502
        ],
        "'RBRACE": [
          -1,
          500,
          502
        ],
        "'SPY": [
          -1,
          500,
          502
        ],
        "'PARENSPACE": [
          -1,
          500,
          502
        ],
        "'INT": [
          -1,
          500,
          502
        ],
        "'LONG": [
          -1,
          500,
          502
        ],
        "'DOUBLE": [
          -1,
          500,
          502
        ],
        "'FLOAT": [
          -1,
          500,
          502
        ],
        "'BOOLEAN": [
          -1,
          500,
          502
        ],
        "'VOID": [
          -1,
          500,
          502
        ],
        "'DATA": [
          -1,
          500,
          502
        ],
        "'IF": [
          -1,
          500,
          502
        ],
        "'ELSE": [
          -1,
          502
        ],
        "'FOR": [
          -1,
          500,
          502
        ],
        "'RETURN": [
          -1,
          500,
          502
        ],
        "'VAR": [
          -1,
          500,
          502
        ],
        "'ATCHECK": [
          -1,
          500,
          502
        ],
        "'ASSERTEQUALS": [
          -1,
          500,
          502
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          500,
          502
        ],
        "'ASSERTTRUE": [
          -1,
          500,
          502
        ],
        "'ASSERTFALSE": [
          -1,
          500,
          502
        ],
        "'ASSERTSATISFIES": [
          -1,
          500,
          502
        ],
        "'ASSERTRAISES": [
          -1,
          500,
          502
        ],
        "'SWITCH": [
          -1,
          500,
          502
        ],
        "'YIELD": [
          -1,
          500,
          502
        ],
        "'DASH": [
          -1,
          500,
          502
        ],
        "'BANG": [
          -1,
          500,
          502
        ],
        "'LBRACK": [
          -1,
          500,
          502
        ],
        "'NUMBER": [
          -1,
          500,
          502
        ],
        "'TRUE": [
          -1,
          500,
          502
        ],
        "'FALSE": [
          -1,
          500,
          502
        ],
        "'NULL": [
          -1,
          500,
          502
        ],
        "'PARENAFTERBRACE": [
          -1,
          500,
          502
        ],
        "'ASK": [
          -1,
          500,
          502
        ],
        "'NEW": [
          -1,
          500,
          502
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          406
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          407
        ]
      },
      {
        "'RPAREN": [
          408
        ]
      },
      {
        "'NAME": [
          -1,
          504
        ],
        "'PARENNOSPACE": [
          -1,
          504
        ],
        "'STRING": [
          -1,
          504
        ],
        "'RBRACE": [
          -1,
          504
        ],
        "'SPY": [
          -1,
          504
        ],
        "'PARENSPACE": [
          -1,
          504
        ],
        "'INT": [
          -1,
          504
        ],
        "'LONG": [
          -1,
          504
        ],
        "'DOUBLE": [
          -1,
          504
        ],
        "'FLOAT": [
          -1,
          504
        ],
        "'BOOLEAN": [
          -1,
          504
        ],
        "'VOID": [
          -1,
          504
        ],
        "'DATA": [
          -1,
          504
        ],
        "'IF": [
          -1,
          504
        ],
        "'FOR": [
          -1,
          504
        ],
        "'RETURN": [
          -1,
          504
        ],
        "'VAR": [
          -1,
          504
        ],
        "'ATCHECK": [
          -1,
          504
        ],
        "'ASSERTEQUALS": [
          -1,
          504
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          504
        ],
        "'ASSERTTRUE": [
          -1,
          504
        ],
        "'ASSERTFALSE": [
          -1,
          504
        ],
        "'ASSERTSATISFIES": [
          -1,
          504
        ],
        "'ASSERTRAISES": [
          -1,
          504
        ],
        "'SWITCH": [
          -1,
          504
        ],
        "'YIELD": [
          -1,
          504
        ],
        "'DASH": [
          -1,
          504
        ],
        "'BANG": [
          -1,
          504
        ],
        "'LBRACK": [
          -1,
          504
        ],
        "'NUMBER": [
          -1,
          504
        ],
        "'TRUE": [
          -1,
          504
        ],
        "'FALSE": [
          -1,
          504
        ],
        "'NULL": [
          -1,
          504
        ],
        "'PARENAFTERBRACE": [
          -1,
          504
        ],
        "'ASK": [
          -1,
          504
        ],
        "'NEW": [
          -1,
          504
        ]
      },
      {
        "'NAME": [
          -1,
          506
        ],
        "'PARENNOSPACE": [
          -1,
          506
        ],
        "'STRING": [
          -1,
          506
        ],
        "'RBRACE": [
          -1,
          506
        ],
        "'SPY": [
          -1,
          506
        ],
        "'PARENSPACE": [
          -1,
          506
        ],
        "'INT": [
          -1,
          506
        ],
        "'LONG": [
          -1,
          506
        ],
        "'DOUBLE": [
          -1,
          506
        ],
        "'FLOAT": [
          -1,
          506
        ],
        "'BOOLEAN": [
          -1,
          506
        ],
        "'VOID": [
          -1,
          506
        ],
        "'DATA": [
          -1,
          506
        ],
        "'IF": [
          -1,
          506
        ],
        "'FOR": [
          -1,
          506
        ],
        "'RETURN": [
          -1,
          506
        ],
        "'VAR": [
          -1,
          506
        ],
        "'ATCHECK": [
          -1,
          506
        ],
        "'ASSERTEQUALS": [
          -1,
          506
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          506
        ],
        "'ASSERTTRUE": [
          -1,
          506
        ],
        "'ASSERTFALSE": [
          -1,
          506
        ],
        "'ASSERTSATISFIES": [
          -1,
          506
        ],
        "'ASSERTRAISES": [
          -1,
          506
        ],
        "'SWITCH": [
          -1,
          506
        ],
        "'YIELD": [
          -1,
          506
        ],
        "'DASH": [
          -1,
          506
        ],
        "'BANG": [
          -1,
          506
        ],
        "'LBRACK": [
          -1,
          506
        ],
        "'NUMBER": [
          -1,
          506
        ],
        "'TRUE": [
          -1,
          506
        ],
        "'FALSE": [
          -1,
          506
        ],
        "'NULL": [
          -1,
          506
        ],
        "'PARENAFTERBRACE": [
          -1,
          506
        ],
        "'ASK": [
          -1,
          506
        ],
        "'NEW": [
          -1,
          506
        ]
      },
      {
        "'NAME": [
          -1,
          508
        ],
        "'PARENNOSPACE": [
          -1,
          508
        ],
        "'STRING": [
          -1,
          508
        ],
        "'RBRACE": [
          -1,
          508
        ],
        "'SPY": [
          -1,
          508
        ],
        "'PARENSPACE": [
          -1,
          508
        ],
        "'INT": [
          -1,
          508
        ],
        "'LONG": [
          -1,
          508
        ],
        "'DOUBLE": [
          -1,
          508
        ],
        "'FLOAT": [
          -1,
          508
        ],
        "'BOOLEAN": [
          -1,
          508
        ],
        "'VOID": [
          -1,
          508
        ],
        "'DATA": [
          -1,
          508
        ],
        "'IF": [
          -1,
          508
        ],
        "'FOR": [
          -1,
          508
        ],
        "'RETURN": [
          -1,
          508
        ],
        "'VAR": [
          -1,
          508
        ],
        "'ATCHECK": [
          -1,
          508
        ],
        "'ASSERTEQUALS": [
          -1,
          508
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          508
        ],
        "'ASSERTTRUE": [
          -1,
          508
        ],
        "'ASSERTFALSE": [
          -1,
          508
        ],
        "'ASSERTSATISFIES": [
          -1,
          508
        ],
        "'ASSERTRAISES": [
          -1,
          508
        ],
        "'SWITCH": [
          -1,
          508
        ],
        "'YIELD": [
          -1,
          508
        ],
        "'DASH": [
          -1,
          508
        ],
        "'BANG": [
          -1,
          508
        ],
        "'LBRACK": [
          -1,
          508
        ],
        "'NUMBER": [
          -1,
          508
        ],
        "'TRUE": [
          -1,
          508
        ],
        "'FALSE": [
          -1,
          508
        ],
        "'NULL": [
          -1,
          508
        ],
        "'PARENAFTERBRACE": [
          -1,
          508
        ],
        "'ASK": [
          -1,
          508
        ],
        "'NEW": [
          -1,
          508
        ]
      },
      {
        "'NAME": [
          -1,
          510
        ],
        "'PARENNOSPACE": [
          -1,
          510
        ],
        "'STRING": [
          -1,
          510
        ],
        "'RBRACE": [
          -1,
          510
        ],
        "'SPY": [
          -1,
          510
        ],
        "'PARENSPACE": [
          -1,
          510
        ],
        "'INT": [
          -1,
          510
        ],
        "'LONG": [
          -1,
          510
        ],
        "'DOUBLE": [
          -1,
          510
        ],
        "'FLOAT": [
          -1,
          510
        ],
        "'BOOLEAN": [
          -1,
          510
        ],
        "'VOID": [
          -1,
          510
        ],
        "'DATA": [
          -1,
          510
        ],
        "'IF": [
          -1,
          510
        ],
        "'FOR": [
          -1,
          510
        ],
        "'RETURN": [
          -1,
          510
        ],
        "'VAR": [
          -1,
          510
        ],
        "'ATCHECK": [
          -1,
          510
        ],
        "'ASSERTEQUALS": [
          -1,
          510
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          510
        ],
        "'ASSERTTRUE": [
          -1,
          510
        ],
        "'ASSERTFALSE": [
          -1,
          510
        ],
        "'ASSERTSATISFIES": [
          -1,
          510
        ],
        "'ASSERTRAISES": [
          -1,
          510
        ],
        "'SWITCH": [
          -1,
          510
        ],
        "'YIELD": [
          -1,
          510
        ],
        "'DASH": [
          -1,
          510
        ],
        "'BANG": [
          -1,
          510
        ],
        "'LBRACK": [
          -1,
          510
        ],
        "'NUMBER": [
          -1,
          510
        ],
        "'TRUE": [
          -1,
          510
        ],
        "'FALSE": [
          -1,
          510
        ],
        "'NULL": [
          -1,
          510
        ],
        "'PARENAFTERBRACE": [
          -1,
          510
        ],
        "'ASK": [
          -1,
          510
        ],
        "'NEW": [
          -1,
          510
        ]
      },
      {
        "'NAME": [
          -1,
          512
        ],
        "'PARENNOSPACE": [
          -1,
          512
        ],
        "'STRING": [
          -1,
          512
        ],
        "'RBRACE": [
          -1,
          512
        ],
        "'SPY": [
          -1,
          512
        ],
        "'PARENSPACE": [
          -1,
          512
        ],
        "'INT": [
          -1,
          512
        ],
        "'LONG": [
          -1,
          512
        ],
        "'DOUBLE": [
          -1,
          512
        ],
        "'FLOAT": [
          -1,
          512
        ],
        "'BOOLEAN": [
          -1,
          512
        ],
        "'VOID": [
          -1,
          512
        ],
        "'DATA": [
          -1,
          512
        ],
        "'IF": [
          -1,
          512
        ],
        "'FOR": [
          -1,
          512
        ],
        "'RETURN": [
          -1,
          512
        ],
        "'VAR": [
          -1,
          512
        ],
        "'ATCHECK": [
          -1,
          512
        ],
        "'ASSERTEQUALS": [
          -1,
          512
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          512
        ],
        "'ASSERTTRUE": [
          -1,
          512
        ],
        "'ASSERTFALSE": [
          -1,
          512
        ],
        "'ASSERTSATISFIES": [
          -1,
          512
        ],
        "'ASSERTRAISES": [
          -1,
          512
        ],
        "'SWITCH": [
          -1,
          512
        ],
        "'YIELD": [
          -1,
          512
        ],
        "'DASH": [
          -1,
          512
        ],
        "'BANG": [
          -1,
          512
        ],
        "'LBRACK": [
          -1,
          512
        ],
        "'NUMBER": [
          -1,
          512
        ],
        "'TRUE": [
          -1,
          512
        ],
        "'FALSE": [
          -1,
          512
        ],
        "'NULL": [
          -1,
          512
        ],
        "'PARENAFTERBRACE": [
          -1,
          512
        ],
        "'ASK": [
          -1,
          512
        ],
        "'NEW": [
          -1,
          512
        ]
      },
      {
        "'NAME": [
          -1,
          514
        ],
        "'PARENNOSPACE": [
          -1,
          514
        ],
        "'STRING": [
          -1,
          514
        ],
        "'RBRACE": [
          -1,
          514
        ],
        "'SPY": [
          -1,
          514
        ],
        "'PARENSPACE": [
          -1,
          514
        ],
        "'INT": [
          -1,
          514
        ],
        "'LONG": [
          -1,
          514
        ],
        "'DOUBLE": [
          -1,
          514
        ],
        "'FLOAT": [
          -1,
          514
        ],
        "'BOOLEAN": [
          -1,
          514
        ],
        "'VOID": [
          -1,
          514
        ],
        "'DATA": [
          -1,
          514
        ],
        "'IF": [
          -1,
          514
        ],
        "'FOR": [
          -1,
          514
        ],
        "'RETURN": [
          -1,
          514
        ],
        "'VAR": [
          -1,
          514
        ],
        "'ATCHECK": [
          -1,
          514
        ],
        "'ASSERTEQUALS": [
          -1,
          514
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          514
        ],
        "'ASSERTTRUE": [
          -1,
          514
        ],
        "'ASSERTFALSE": [
          -1,
          514
        ],
        "'ASSERTSATISFIES": [
          -1,
          514
        ],
        "'ASSERTRAISES": [
          -1,
          514
        ],
        "'SWITCH": [
          -1,
          514
        ],
        "'YIELD": [
          -1,
          514
        ],
        "'DASH": [
          -1,
          514
        ],
        "'BANG": [
          -1,
          514
        ],
        "'LBRACK": [
          -1,
          514
        ],
        "'NUMBER": [
          -1,
          514
        ],
        "'TRUE": [
          -1,
          514
        ],
        "'FALSE": [
          -1,
          514
        ],
        "'NULL": [
          -1,
          514
        ],
        "'PARENAFTERBRACE": [
          -1,
          514
        ],
        "'ASK": [
          -1,
          514
        ],
        "'NEW": [
          -1,
          514
        ]
      },
      {
        "'RPAREN": [
          409
        ]
      },
      {
        "'RPAREN": [
          410
        ]
      },
      {
        "$": [
          -1,
          516
        ],
        "'NAME": [
          -1,
          516
        ],
        "'PARENNOSPACE": [
          -1,
          516
        ],
        "'STRING": [
          -1,
          516
        ],
        "'RBRACE": [
          -1,
          516
        ],
        "'SPY": [
          -1,
          516
        ],
        "'PARENSPACE": [
          -1,
          516
        ],
        "'INT": [
          -1,
          516
        ],
        "'LONG": [
          -1,
          516
        ],
        "'DOUBLE": [
          -1,
          516
        ],
        "'FLOAT": [
          -1,
          516
        ],
        "'BOOLEAN": [
          -1,
          516
        ],
        "'VOID": [
          -1,
          516
        ],
        "'DATA": [
          -1,
          516
        ],
        "'IF": [
          -1,
          516
        ],
        "'FOR": [
          -1,
          516
        ],
        "'RETURN": [
          -1,
          516
        ],
        "'VAR": [
          -1,
          516
        ],
        "'ATCHECK": [
          -1,
          516
        ],
        "'ASSERTEQUALS": [
          -1,
          516
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          516
        ],
        "'ASSERTTRUE": [
          -1,
          516
        ],
        "'ASSERTFALSE": [
          -1,
          516
        ],
        "'ASSERTSATISFIES": [
          -1,
          516
        ],
        "'ASSERTRAISES": [
          -1,
          516
        ],
        "'SWITCH": [
          -1,
          516
        ],
        "'YIELD": [
          -1,
          516
        ],
        "'DASH": [
          -1,
          516
        ],
        "'BANG": [
          -1,
          516
        ],
        "'LBRACK": [
          -1,
          516
        ],
        "'NUMBER": [
          -1,
          516
        ],
        "'TRUE": [
          -1,
          516
        ],
        "'FALSE": [
          -1,
          516
        ],
        "'NULL": [
          -1,
          516
        ],
        "'PARENAFTERBRACE": [
          -1,
          516
        ],
        "'ASK": [
          -1,
          516
        ],
        "'NEW": [
          -1,
          516
        ]
      },
      {
        "'NAME": [
          -1,
          518
        ],
        "'PARENNOSPACE": [
          -1,
          518
        ],
        "'STRING": [
          -1,
          518
        ],
        "'RBRACE": [
          -1,
          518
        ],
        "'SPY": [
          -1,
          518
        ],
        "'PARENSPACE": [
          -1,
          518
        ],
        "'INT": [
          -1,
          518
        ],
        "'LONG": [
          -1,
          518
        ],
        "'DOUBLE": [
          -1,
          518
        ],
        "'FLOAT": [
          -1,
          518
        ],
        "'BOOLEAN": [
          -1,
          518
        ],
        "'VOID": [
          -1,
          518
        ],
        "'DATA": [
          -1,
          518
        ],
        "'IF": [
          -1,
          518
        ],
        "'FOR": [
          -1,
          518
        ],
        "'RETURN": [
          -1,
          518
        ],
        "'VAR": [
          -1,
          518
        ],
        "'ATCHECK": [
          -1,
          518
        ],
        "'ASSERTEQUALS": [
          -1,
          518
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          518
        ],
        "'ASSERTTRUE": [
          -1,
          518
        ],
        "'ASSERTFALSE": [
          -1,
          518
        ],
        "'ASSERTSATISFIES": [
          -1,
          518
        ],
        "'ASSERTRAISES": [
          -1,
          518
        ],
        "'SWITCH": [
          -1,
          518
        ],
        "'YIELD": [
          -1,
          518
        ],
        "'DASH": [
          -1,
          518
        ],
        "'BANG": [
          -1,
          518
        ],
        "'LBRACK": [
          -1,
          518
        ],
        "'NUMBER": [
          -1,
          518
        ],
        "'TRUE": [
          -1,
          518
        ],
        "'FALSE": [
          -1,
          518
        ],
        "'NULL": [
          -1,
          518
        ],
        "'PARENAFTERBRACE": [
          -1,
          518
        ],
        "'ASK": [
          -1,
          518
        ],
        "'NEW": [
          -1,
          518
        ]
      },
      {
        "'NAME": [
          -1,
          520
        ],
        "'PARENNOSPACE": [
          -1,
          520
        ],
        "'STRING": [
          -1,
          520
        ],
        "'RBRACE": [
          -1,
          520
        ],
        "'SPY": [
          -1,
          520
        ],
        "'PARENSPACE": [
          -1,
          520
        ],
        "'INT": [
          -1,
          520
        ],
        "'LONG": [
          -1,
          520
        ],
        "'DOUBLE": [
          -1,
          520
        ],
        "'FLOAT": [
          -1,
          520
        ],
        "'BOOLEAN": [
          -1,
          520
        ],
        "'VOID": [
          -1,
          520
        ],
        "'DATA": [
          -1,
          520
        ],
        "'IF": [
          -1,
          520
        ],
        "'FOR": [
          -1,
          520
        ],
        "'RETURN": [
          -1,
          520
        ],
        "'VAR": [
          -1,
          520
        ],
        "'ATCHECK": [
          -1,
          520
        ],
        "'ASSERTEQUALS": [
          -1,
          520
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          520
        ],
        "'ASSERTTRUE": [
          -1,
          520
        ],
        "'ASSERTFALSE": [
          -1,
          520
        ],
        "'ASSERTSATISFIES": [
          -1,
          520
        ],
        "'ASSERTRAISES": [
          -1,
          520
        ],
        "'SWITCH": [
          -1,
          520
        ],
        "'YIELD": [
          -1,
          520
        ],
        "'DASH": [
          -1,
          520
        ],
        "'BANG": [
          -1,
          520
        ],
        "'LBRACK": [
          -1,
          520
        ],
        "'NUMBER": [
          -1,
          520
        ],
        "'TRUE": [
          -1,
          520
        ],
        "'FALSE": [
          -1,
          520
        ],
        "'NULL": [
          -1,
          520
        ],
        "'PARENAFTERBRACE": [
          -1,
          520
        ],
        "'ASK": [
          -1,
          520
        ],
        "'NEW": [
          -1,
          520
        ]
      },
      {
        "'NAME": [
          -1,
          522
        ],
        "'PARENNOSPACE": [
          -1,
          522
        ],
        "'STRING": [
          -1,
          522
        ],
        "'RBRACE": [
          -1,
          522
        ],
        "'SPY": [
          -1,
          522
        ],
        "'PARENSPACE": [
          -1,
          522
        ],
        "'INT": [
          -1,
          522
        ],
        "'LONG": [
          -1,
          522
        ],
        "'DOUBLE": [
          -1,
          522
        ],
        "'FLOAT": [
          -1,
          522
        ],
        "'BOOLEAN": [
          -1,
          522
        ],
        "'VOID": [
          -1,
          522
        ],
        "'DATA": [
          -1,
          522
        ],
        "'IF": [
          -1,
          522
        ],
        "'FOR": [
          -1,
          522
        ],
        "'RETURN": [
          -1,
          522
        ],
        "'VAR": [
          -1,
          522
        ],
        "'ATCHECK": [
          -1,
          522
        ],
        "'ASSERTEQUALS": [
          -1,
          522
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          522
        ],
        "'ASSERTTRUE": [
          -1,
          522
        ],
        "'ASSERTFALSE": [
          -1,
          522
        ],
        "'ASSERTSATISFIES": [
          -1,
          522
        ],
        "'ASSERTRAISES": [
          -1,
          522
        ],
        "'SWITCH": [
          -1,
          522
        ],
        "'YIELD": [
          -1,
          522
        ],
        "'DASH": [
          -1,
          522
        ],
        "'BANG": [
          -1,
          522
        ],
        "'LBRACK": [
          -1,
          522
        ],
        "'NUMBER": [
          -1,
          522
        ],
        "'TRUE": [
          -1,
          522
        ],
        "'FALSE": [
          -1,
          522
        ],
        "'NULL": [
          -1,
          522
        ],
        "'PARENAFTERBRACE": [
          -1,
          522
        ],
        "'ASK": [
          -1,
          522
        ],
        "'NEW": [
          -1,
          522
        ]
      },
      {
        "$": [
          -1,
          524
        ],
        "'NAME": [
          -1,
          524
        ],
        "'SEMI": [
          -1,
          524
        ],
        "'PARENNOSPACE": [
          -1,
          524
        ],
        "'STRING": [
          -1,
          524
        ],
        "'RPAREN": [
          -1,
          524
        ],
        "'RBRACE": [
          -1,
          524
        ],
        "'SPY": [
          -1,
          524
        ],
        "'PARENSPACE": [
          -1,
          524
        ],
        "'COMMA": [
          -1,
          524
        ],
        "'INT": [
          -1,
          524
        ],
        "'LONG": [
          -1,
          524
        ],
        "'DOUBLE": [
          -1,
          524
        ],
        "'FLOAT": [
          -1,
          524
        ],
        "'BOOLEAN": [
          -1,
          524
        ],
        "'VOID": [
          -1,
          524
        ],
        "'LT": [
          -1,
          524
        ],
        "'GT": [
          -1,
          524
        ],
        "'THINARROW": [
          -1,
          524
        ],
        "'DATA": [
          -1,
          524
        ],
        "'IF": [
          -1,
          524
        ],
        "'FOR": [
          -1,
          524
        ],
        "'RETURN": [
          -1,
          524
        ],
        "'VAR": [
          -1,
          524
        ],
        "'ATCHECK": [
          -1,
          524
        ],
        "'ASSERTEQUALS": [
          -1,
          524
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          524
        ],
        "'ASSERTTRUE": [
          -1,
          524
        ],
        "'ASSERTFALSE": [
          -1,
          524
        ],
        "'ASSERTSATISFIES": [
          -1,
          524
        ],
        "'ASSERTRAISES": [
          -1,
          524
        ],
        "'IS": [
          -1,
          524
        ],
        "'ISNOT": [
          -1,
          524
        ],
        "'SATISFIES": [
          -1,
          524
        ],
        "'RAISES": [
          -1,
          524
        ],
        "'SWITCH": [
          -1,
          524
        ],
        "'CASE": [
          -1,
          524
        ],
        "'DEFAULT": [
          -1,
          524
        ],
        "'YIELD": [
          -1,
          524
        ],
        "'PLUS": [
          -1,
          524
        ],
        "'DASH": [
          -1,
          524
        ],
        "'TIMES": [
          -1,
          524
        ],
        "'SLASH": [
          -1,
          524
        ],
        "'PERCENT": [
          -1,
          524
        ],
        "'EQUALEQUAL": [
          -1,
          524
        ],
        "'NEQ": [
          -1,
          524
        ],
        "'LEQ": [
          -1,
          524
        ],
        "'GEQ": [
          -1,
          524
        ],
        "'AND": [
          -1,
          524
        ],
        "'OR": [
          -1,
          524
        ],
        "'BANG": [
          -1,
          524
        ],
        "'DOT": [
          -1,
          524
        ],
        "'LBRACK": [
          -1,
          524
        ],
        "'RBRACK": [
          -1,
          524
        ],
        "'NUMBER": [
          -1,
          524
        ],
        "'TRUE": [
          -1,
          524
        ],
        "'FALSE": [
          -1,
          524
        ],
        "'NULL": [
          -1,
          524
        ],
        "'PARENAFTERBRACE": [
          -1,
          524
        ],
        "'ASK": [
          -1,
          524
        ],
        "'NEW": [
          -1,
          524
        ]
      },
      {
        "'PARENNOSPACE": [
          411
        ],
        "'COLON": [
          412
        ]
      },
      {
        "switch-body": [
          413
        ],
        "switch-body_I0*": [
          414
        ],
        "'NAME": [
          -1,
          526
        ],
        "'PARENNOSPACE": [
          -1,
          526
        ],
        "'STRING": [
          -1,
          526
        ],
        "'SPY": [
          -1,
          526
        ],
        "'PARENSPACE": [
          -1,
          526
        ],
        "'INT": [
          -1,
          526
        ],
        "'LONG": [
          -1,
          526
        ],
        "'DOUBLE": [
          -1,
          526
        ],
        "'FLOAT": [
          -1,
          526
        ],
        "'BOOLEAN": [
          -1,
          526
        ],
        "'VOID": [
          -1,
          526
        ],
        "'DATA": [
          -1,
          526
        ],
        "'IF": [
          -1,
          526
        ],
        "'FOR": [
          -1,
          526
        ],
        "'RETURN": [
          -1,
          526
        ],
        "'VAR": [
          -1,
          526
        ],
        "'ATCHECK": [
          -1,
          526
        ],
        "'SWITCH": [
          -1,
          526
        ],
        "'YIELD": [
          -1,
          526
        ],
        "'DASH": [
          -1,
          526
        ],
        "'BANG": [
          -1,
          526
        ],
        "'LBRACK": [
          -1,
          526
        ],
        "'NUMBER": [
          -1,
          526
        ],
        "'TRUE": [
          -1,
          526
        ],
        "'FALSE": [
          -1,
          526
        ],
        "'NULL": [
          -1,
          526
        ],
        "'PARENAFTERBRACE": [
          -1,
          526
        ],
        "'ASK": [
          -1,
          526
        ],
        "'NEW": [
          -1,
          526
        ]
      },
      {
        "block": [
          415
        ],
        "'LBRACE": [
          275
        ]
      },
      {
        "$": [
          -1,
          528
        ],
        "'NAME": [
          -1,
          528
        ],
        "'SEMI": [
          -1,
          528
        ],
        "'PARENNOSPACE": [
          -1,
          528
        ],
        "'STRING": [
          -1,
          528
        ],
        "'RPAREN": [
          -1,
          528
        ],
        "'RBRACE": [
          -1,
          528
        ],
        "'SPY": [
          -1,
          528
        ],
        "'PARENSPACE": [
          -1,
          528
        ],
        "'COMMA": [
          -1,
          528
        ],
        "'INT": [
          -1,
          528
        ],
        "'LONG": [
          -1,
          528
        ],
        "'DOUBLE": [
          -1,
          528
        ],
        "'FLOAT": [
          -1,
          528
        ],
        "'BOOLEAN": [
          -1,
          528
        ],
        "'VOID": [
          -1,
          528
        ],
        "'LT": [
          -1,
          528
        ],
        "'GT": [
          -1,
          528
        ],
        "'THINARROW": [
          -1,
          528
        ],
        "'DATA": [
          -1,
          528
        ],
        "'IF": [
          -1,
          528
        ],
        "'FOR": [
          -1,
          528
        ],
        "'RETURN": [
          -1,
          528
        ],
        "'VAR": [
          -1,
          528
        ],
        "'ATCHECK": [
          -1,
          528
        ],
        "'ASSERTEQUALS": [
          -1,
          528
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          528
        ],
        "'ASSERTTRUE": [
          -1,
          528
        ],
        "'ASSERTFALSE": [
          -1,
          528
        ],
        "'ASSERTSATISFIES": [
          -1,
          528
        ],
        "'ASSERTRAISES": [
          -1,
          528
        ],
        "'IS": [
          -1,
          528
        ],
        "'ISNOT": [
          -1,
          528
        ],
        "'SATISFIES": [
          -1,
          528
        ],
        "'RAISES": [
          -1,
          528
        ],
        "'SWITCH": [
          -1,
          528
        ],
        "'CASE": [
          -1,
          528
        ],
        "'DEFAULT": [
          -1,
          528
        ],
        "'YIELD": [
          -1,
          528
        ],
        "'PLUS": [
          -1,
          528
        ],
        "'DASH": [
          -1,
          528
        ],
        "'TIMES": [
          -1,
          528
        ],
        "'SLASH": [
          -1,
          528
        ],
        "'PERCENT": [
          -1,
          528
        ],
        "'EQUALEQUAL": [
          -1,
          528
        ],
        "'NEQ": [
          -1,
          528
        ],
        "'LEQ": [
          -1,
          528
        ],
        "'GEQ": [
          -1,
          528
        ],
        "'AND": [
          -1,
          528
        ],
        "'OR": [
          -1,
          528
        ],
        "'BANG": [
          -1,
          528
        ],
        "'DOT": [
          -1,
          528
        ],
        "'LBRACK": [
          -1,
          528
        ],
        "'RBRACK": [
          -1,
          528
        ],
        "'NUMBER": [
          -1,
          528
        ],
        "'TRUE": [
          -1,
          528
        ],
        "'FALSE": [
          -1,
          528
        ],
        "'NULL": [
          -1,
          528
        ],
        "'PARENAFTERBRACE": [
          -1,
          528
        ],
        "'ASK": [
          -1,
          528
        ],
        "'NEW": [
          -1,
          528
        ]
      },
      {
        "'SEMI": [
          -1,
          530
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          177
        ],
        "data-decl": [
          178
        ],
        "check-block": [
          179
        ],
        "let-stmt": [
          180
        ],
        "var-stmt": [
          181
        ],
        "assign-stmt": [
          182
        ],
        "expr-stmt": [
          183
        ],
        "'RBRACE": [
          416
        ],
        "block-stmt": [
          417
        ],
        "if-stmt": [
          186
        ],
        "for-stmt": [
          187
        ],
        "return-stmt": [
          188
        ],
        "yield-stmt": [
          189
        ],
        "spy-stmt": [
          190
        ],
        "'SPY": [
          191
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "where-clause_I2": [
          418
        ],
        "assert-stmt": [
          419
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "'IF": [
          193
        ],
        "full-expr": [
          194
        ],
        "'FOR": [
          195
        ],
        "'RETURN": [
          196
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "'ASSERTEQUALS": [
          198
        ],
        "'ASSERTNOTEQUALS": [
          199
        ],
        "'ASSERTTRUE": [
          200
        ],
        "'ASSERTFALSE": [
          201
        ],
        "'ASSERTSATISFIES": [
          202
        ],
        "'ASSERTRAISES": [
          203
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "'YIELD": [
          204
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RPAREN": [
          -1,
          532
        ],
        "'COMMA": [
          -1,
          532
        ]
      },
      {
        "'NAME": [
          -1,
          534
        ],
        "'PARENNOSPACE": [
          -1,
          534
        ],
        "'STRING": [
          -1,
          534
        ],
        "'RBRACE": [
          -1,
          534
        ],
        "'SPY": [
          -1,
          534
        ],
        "'PARENSPACE": [
          -1,
          534
        ],
        "'INT": [
          -1,
          534
        ],
        "'LONG": [
          -1,
          534
        ],
        "'DOUBLE": [
          -1,
          534
        ],
        "'FLOAT": [
          -1,
          534
        ],
        "'BOOLEAN": [
          -1,
          534
        ],
        "'VOID": [
          -1,
          534
        ],
        "'DATA": [
          -1,
          534
        ],
        "'IF": [
          -1,
          534
        ],
        "'FOR": [
          -1,
          534
        ],
        "'RETURN": [
          -1,
          534
        ],
        "'VAR": [
          -1,
          534
        ],
        "'ATCHECK": [
          -1,
          534
        ],
        "'ASSERTEQUALS": [
          -1,
          534
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          534
        ],
        "'ASSERTTRUE": [
          -1,
          534
        ],
        "'ASSERTFALSE": [
          -1,
          534
        ],
        "'ASSERTSATISFIES": [
          -1,
          534
        ],
        "'ASSERTRAISES": [
          -1,
          534
        ],
        "'SWITCH": [
          -1,
          534
        ],
        "'YIELD": [
          -1,
          534
        ],
        "'DASH": [
          -1,
          534
        ],
        "'BANG": [
          -1,
          534
        ],
        "'LBRACK": [
          -1,
          534
        ],
        "'NUMBER": [
          -1,
          534
        ],
        "'TRUE": [
          -1,
          534
        ],
        "'FALSE": [
          -1,
          534
        ],
        "'NULL": [
          -1,
          534
        ],
        "'PARENAFTERBRACE": [
          -1,
          534
        ],
        "'ASK": [
          -1,
          534
        ],
        "'NEW": [
          -1,
          534
        ]
      },
      {
        "'RPAREN": [
          -1,
          536
        ],
        "'COMMA": [
          -1,
          536
        ]
      },
      {
        "if-stmt_I6?": [
          420
        ],
        "if-stmt_I5": [
          421
        ],
        "'ELSE": [
          422
        ],
        "if-stmt_I6": [
          423
        ],
        "'NAME": [
          -1,
          538,
          540
        ],
        "'PARENNOSPACE": [
          -1,
          538,
          540
        ],
        "'STRING": [
          -1,
          538,
          540
        ],
        "'RBRACE": [
          -1,
          538,
          540
        ],
        "'SPY": [
          -1,
          538,
          540
        ],
        "'PARENSPACE": [
          -1,
          538,
          540
        ],
        "'INT": [
          -1,
          538,
          540
        ],
        "'LONG": [
          -1,
          538,
          540
        ],
        "'DOUBLE": [
          -1,
          538,
          540
        ],
        "'FLOAT": [
          -1,
          538,
          540
        ],
        "'BOOLEAN": [
          -1,
          538,
          540
        ],
        "'VOID": [
          -1,
          538,
          540
        ],
        "'DATA": [
          -1,
          538,
          540
        ],
        "'IF": [
          -1,
          538,
          540
        ],
        "'FOR": [
          -1,
          538,
          540
        ],
        "'RETURN": [
          -1,
          538,
          540
        ],
        "'VAR": [
          -1,
          538,
          540
        ],
        "'ATCHECK": [
          -1,
          538,
          540
        ],
        "'ASSERTEQUALS": [
          -1,
          538,
          540
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          538,
          540
        ],
        "'ASSERTTRUE": [
          -1,
          538,
          540
        ],
        "'ASSERTFALSE": [
          -1,
          538,
          540
        ],
        "'ASSERTSATISFIES": [
          -1,
          538,
          540
        ],
        "'ASSERTRAISES": [
          -1,
          538,
          540
        ],
        "'SWITCH": [
          -1,
          538,
          540
        ],
        "'YIELD": [
          -1,
          538,
          540
        ],
        "'DASH": [
          -1,
          538,
          540
        ],
        "'BANG": [
          -1,
          538,
          540
        ],
        "'LBRACK": [
          -1,
          538,
          540
        ],
        "'NUMBER": [
          -1,
          538,
          540
        ],
        "'TRUE": [
          -1,
          538,
          540
        ],
        "'FALSE": [
          -1,
          538,
          540
        ],
        "'NULL": [
          -1,
          538,
          540
        ],
        "'PARENAFTERBRACE": [
          -1,
          538,
          540
        ],
        "'ASK": [
          -1,
          538,
          540
        ],
        "'NEW": [
          -1,
          538,
          540
        ]
      },
      {
        "'RPAREN": [
          424
        ]
      },
      {
        "'SEMI": [
          425
        ],
        "assert-stmt_A0_I6?": [
          426
        ],
        "assert-stmt_A0_I6": [
          427
        ],
        "'NAME": [
          -1,
          542,
          544
        ],
        "'PARENNOSPACE": [
          -1,
          542,
          544
        ],
        "'STRING": [
          -1,
          542,
          544
        ],
        "'RBRACE": [
          -1,
          542,
          544
        ],
        "'SPY": [
          -1,
          542,
          544
        ],
        "'PARENSPACE": [
          -1,
          542,
          544
        ],
        "'INT": [
          -1,
          542,
          544
        ],
        "'LONG": [
          -1,
          542,
          544
        ],
        "'DOUBLE": [
          -1,
          542,
          544
        ],
        "'FLOAT": [
          -1,
          542,
          544
        ],
        "'BOOLEAN": [
          -1,
          542,
          544
        ],
        "'VOID": [
          -1,
          542,
          544
        ],
        "'DATA": [
          -1,
          542,
          544
        ],
        "'IF": [
          -1,
          542,
          544
        ],
        "'FOR": [
          -1,
          542,
          544
        ],
        "'RETURN": [
          -1,
          542,
          544
        ],
        "'VAR": [
          -1,
          542,
          544
        ],
        "'ATCHECK": [
          -1,
          542,
          544
        ],
        "'ASSERTEQUALS": [
          -1,
          542,
          544
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          542,
          544
        ],
        "'ASSERTTRUE": [
          -1,
          542,
          544
        ],
        "'ASSERTFALSE": [
          -1,
          542,
          544
        ],
        "'ASSERTSATISFIES": [
          -1,
          542,
          544
        ],
        "'ASSERTRAISES": [
          -1,
          542,
          544
        ],
        "'SWITCH": [
          -1,
          542,
          544
        ],
        "'YIELD": [
          -1,
          542,
          544
        ],
        "'DASH": [
          -1,
          542,
          544
        ],
        "'BANG": [
          -1,
          542,
          544
        ],
        "'LBRACK": [
          -1,
          542,
          544
        ],
        "'NUMBER": [
          -1,
          542,
          544
        ],
        "'TRUE": [
          -1,
          542,
          544
        ],
        "'FALSE": [
          -1,
          542,
          544
        ],
        "'NULL": [
          -1,
          542,
          544
        ],
        "'PARENAFTERBRACE": [
          -1,
          542,
          544
        ],
        "'ASK": [
          -1,
          542,
          544
        ],
        "'NEW": [
          -1,
          542,
          544
        ]
      },
      {
        "'SEMI": [
          428
        ],
        "assert-stmt_A1_I6?": [
          429
        ],
        "assert-stmt_A1_I6": [
          430
        ],
        "'NAME": [
          -1,
          546,
          548
        ],
        "'PARENNOSPACE": [
          -1,
          546,
          548
        ],
        "'STRING": [
          -1,
          546,
          548
        ],
        "'RBRACE": [
          -1,
          546,
          548
        ],
        "'SPY": [
          -1,
          546,
          548
        ],
        "'PARENSPACE": [
          -1,
          546,
          548
        ],
        "'INT": [
          -1,
          546,
          548
        ],
        "'LONG": [
          -1,
          546,
          548
        ],
        "'DOUBLE": [
          -1,
          546,
          548
        ],
        "'FLOAT": [
          -1,
          546,
          548
        ],
        "'BOOLEAN": [
          -1,
          546,
          548
        ],
        "'VOID": [
          -1,
          546,
          548
        ],
        "'DATA": [
          -1,
          546,
          548
        ],
        "'IF": [
          -1,
          546,
          548
        ],
        "'FOR": [
          -1,
          546,
          548
        ],
        "'RETURN": [
          -1,
          546,
          548
        ],
        "'VAR": [
          -1,
          546,
          548
        ],
        "'ATCHECK": [
          -1,
          546,
          548
        ],
        "'ASSERTEQUALS": [
          -1,
          546,
          548
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          546,
          548
        ],
        "'ASSERTTRUE": [
          -1,
          546,
          548
        ],
        "'ASSERTFALSE": [
          -1,
          546,
          548
        ],
        "'ASSERTSATISFIES": [
          -1,
          546,
          548
        ],
        "'ASSERTRAISES": [
          -1,
          546,
          548
        ],
        "'SWITCH": [
          -1,
          546,
          548
        ],
        "'YIELD": [
          -1,
          546,
          548
        ],
        "'DASH": [
          -1,
          546,
          548
        ],
        "'BANG": [
          -1,
          546,
          548
        ],
        "'LBRACK": [
          -1,
          546,
          548
        ],
        "'NUMBER": [
          -1,
          546,
          548
        ],
        "'TRUE": [
          -1,
          546,
          548
        ],
        "'FALSE": [
          -1,
          546,
          548
        ],
        "'NULL": [
          -1,
          546,
          548
        ],
        "'PARENAFTERBRACE": [
          -1,
          546,
          548
        ],
        "'ASK": [
          -1,
          546,
          548
        ],
        "'NEW": [
          -1,
          546,
          548
        ]
      },
      {
        "'SEMI": [
          431
        ],
        "assert-stmt_A4_I6?": [
          432
        ],
        "assert-stmt_A4_I6": [
          433
        ],
        "'NAME": [
          -1,
          550,
          552
        ],
        "'PARENNOSPACE": [
          -1,
          550,
          552
        ],
        "'STRING": [
          -1,
          550,
          552
        ],
        "'RBRACE": [
          -1,
          550,
          552
        ],
        "'SPY": [
          -1,
          550,
          552
        ],
        "'PARENSPACE": [
          -1,
          550,
          552
        ],
        "'INT": [
          -1,
          550,
          552
        ],
        "'LONG": [
          -1,
          550,
          552
        ],
        "'DOUBLE": [
          -1,
          550,
          552
        ],
        "'FLOAT": [
          -1,
          550,
          552
        ],
        "'BOOLEAN": [
          -1,
          550,
          552
        ],
        "'VOID": [
          -1,
          550,
          552
        ],
        "'DATA": [
          -1,
          550,
          552
        ],
        "'IF": [
          -1,
          550,
          552
        ],
        "'FOR": [
          -1,
          550,
          552
        ],
        "'RETURN": [
          -1,
          550,
          552
        ],
        "'VAR": [
          -1,
          550,
          552
        ],
        "'ATCHECK": [
          -1,
          550,
          552
        ],
        "'ASSERTEQUALS": [
          -1,
          550,
          552
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          550,
          552
        ],
        "'ASSERTTRUE": [
          -1,
          550,
          552
        ],
        "'ASSERTFALSE": [
          -1,
          550,
          552
        ],
        "'ASSERTSATISFIES": [
          -1,
          550,
          552
        ],
        "'ASSERTRAISES": [
          -1,
          550,
          552
        ],
        "'SWITCH": [
          -1,
          550,
          552
        ],
        "'YIELD": [
          -1,
          550,
          552
        ],
        "'DASH": [
          -1,
          550,
          552
        ],
        "'BANG": [
          -1,
          550,
          552
        ],
        "'LBRACK": [
          -1,
          550,
          552
        ],
        "'NUMBER": [
          -1,
          550,
          552
        ],
        "'TRUE": [
          -1,
          550,
          552
        ],
        "'FALSE": [
          -1,
          550,
          552
        ],
        "'NULL": [
          -1,
          550,
          552
        ],
        "'PARENAFTERBRACE": [
          -1,
          550,
          552
        ],
        "'ASK": [
          -1,
          550,
          552
        ],
        "'NEW": [
          -1,
          550,
          552
        ]
      },
      {
        "'SEMI": [
          434
        ],
        "assert-stmt_A5_I6?": [
          435
        ],
        "assert-stmt_A5_I6": [
          436
        ],
        "'NAME": [
          -1,
          554,
          556
        ],
        "'PARENNOSPACE": [
          -1,
          554,
          556
        ],
        "'STRING": [
          -1,
          554,
          556
        ],
        "'RBRACE": [
          -1,
          554,
          556
        ],
        "'SPY": [
          -1,
          554,
          556
        ],
        "'PARENSPACE": [
          -1,
          554,
          556
        ],
        "'INT": [
          -1,
          554,
          556
        ],
        "'LONG": [
          -1,
          554,
          556
        ],
        "'DOUBLE": [
          -1,
          554,
          556
        ],
        "'FLOAT": [
          -1,
          554,
          556
        ],
        "'BOOLEAN": [
          -1,
          554,
          556
        ],
        "'VOID": [
          -1,
          554,
          556
        ],
        "'DATA": [
          -1,
          554,
          556
        ],
        "'IF": [
          -1,
          554,
          556
        ],
        "'FOR": [
          -1,
          554,
          556
        ],
        "'RETURN": [
          -1,
          554,
          556
        ],
        "'VAR": [
          -1,
          554,
          556
        ],
        "'ATCHECK": [
          -1,
          554,
          556
        ],
        "'ASSERTEQUALS": [
          -1,
          554,
          556
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          554,
          556
        ],
        "'ASSERTTRUE": [
          -1,
          554,
          556
        ],
        "'ASSERTFALSE": [
          -1,
          554,
          556
        ],
        "'ASSERTSATISFIES": [
          -1,
          554,
          556
        ],
        "'ASSERTRAISES": [
          -1,
          554,
          556
        ],
        "'SWITCH": [
          -1,
          554,
          556
        ],
        "'YIELD": [
          -1,
          554,
          556
        ],
        "'DASH": [
          -1,
          554,
          556
        ],
        "'BANG": [
          -1,
          554,
          556
        ],
        "'LBRACK": [
          -1,
          554,
          556
        ],
        "'NUMBER": [
          -1,
          554,
          556
        ],
        "'TRUE": [
          -1,
          554,
          556
        ],
        "'FALSE": [
          -1,
          554,
          556
        ],
        "'NULL": [
          -1,
          554,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          554,
          556
        ],
        "'ASK": [
          -1,
          554,
          556
        ],
        "'NEW": [
          -1,
          554,
          556
        ]
      },
      {
        "'NAME": [
          437
        ],
        "case-branch_A0_I3?": [
          438
        ],
        "case-branch_A0_I3": [
          439
        ],
        "'RPAREN": [
          -1,
          558
        ]
      },
      {
        "switch-body": [
          440
        ],
        "switch-body_I0*": [
          414
        ],
        "'NAME": [
          -1,
          526
        ],
        "'PARENNOSPACE": [
          -1,
          526
        ],
        "'STRING": [
          -1,
          526
        ],
        "'SPY": [
          -1,
          526
        ],
        "'PARENSPACE": [
          -1,
          526
        ],
        "'INT": [
          -1,
          526
        ],
        "'LONG": [
          -1,
          526
        ],
        "'DOUBLE": [
          -1,
          526
        ],
        "'FLOAT": [
          -1,
          526
        ],
        "'BOOLEAN": [
          -1,
          526
        ],
        "'VOID": [
          -1,
          526
        ],
        "'DATA": [
          -1,
          526
        ],
        "'IF": [
          -1,
          526
        ],
        "'FOR": [
          -1,
          526
        ],
        "'RETURN": [
          -1,
          526
        ],
        "'VAR": [
          -1,
          526
        ],
        "'ATCHECK": [
          -1,
          526
        ],
        "'SWITCH": [
          -1,
          526
        ],
        "'YIELD": [
          -1,
          526
        ],
        "'DASH": [
          -1,
          526
        ],
        "'BANG": [
          -1,
          526
        ],
        "'LBRACK": [
          -1,
          526
        ],
        "'NUMBER": [
          -1,
          526
        ],
        "'TRUE": [
          -1,
          526
        ],
        "'FALSE": [
          -1,
          526
        ],
        "'NULL": [
          -1,
          526
        ],
        "'PARENAFTERBRACE": [
          -1,
          526
        ],
        "'ASK": [
          -1,
          526
        ],
        "'NEW": [
          -1,
          526
        ]
      },
      {
        "'RBRACE": [
          -1,
          560
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          177
        ],
        "data-decl": [
          178
        ],
        "check-block": [
          179
        ],
        "let-stmt": [
          180
        ],
        "var-stmt": [
          181
        ],
        "assign-stmt": [
          182
        ],
        "expr-stmt": [
          183
        ],
        "block-stmt": [
          441
        ],
        "if-stmt": [
          186
        ],
        "for-stmt": [
          187
        ],
        "return-stmt": [
          188
        ],
        "yield-stmt": [
          442
        ],
        "spy-stmt": [
          190
        ],
        "'SPY": [
          191
        ],
        "'PARENSPACE": [
          22
        ],
        "type-ann": [
          23
        ],
        "'INT": [
          24
        ],
        "'LONG": [
          25
        ],
        "'DOUBLE": [
          26
        ],
        "'FLOAT": [
          27
        ],
        "'BOOLEAN": [
          28
        ],
        "'VOID": [
          29
        ],
        "'DATA": [
          30
        ],
        "'IF": [
          193
        ],
        "full-expr": [
          31
        ],
        "'FOR": [
          195
        ],
        "'RETURN": [
          196
        ],
        "'VAR": [
          32
        ],
        "'ATCHECK": [
          33
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "switch-body_I0": [
          443
        ],
        "'YIELD": [
          204
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'RBRACK": [
          444
        ]
      },
      {
        "$": [
          -1,
          562
        ],
        "'NAME": [
          -1,
          562
        ],
        "'PARENNOSPACE": [
          -1,
          562
        ],
        "'STRING": [
          -1,
          562
        ],
        "'RBRACE": [
          -1,
          562
        ],
        "'SPY": [
          -1,
          562
        ],
        "'PARENSPACE": [
          -1,
          562
        ],
        "'INT": [
          -1,
          562
        ],
        "'LONG": [
          -1,
          562
        ],
        "'DOUBLE": [
          -1,
          562
        ],
        "'FLOAT": [
          -1,
          562
        ],
        "'BOOLEAN": [
          -1,
          562
        ],
        "'VOID": [
          -1,
          562
        ],
        "'DATA": [
          -1,
          562
        ],
        "'IF": [
          -1,
          562
        ],
        "'FOR": [
          -1,
          562
        ],
        "'RETURN": [
          -1,
          562
        ],
        "'VAR": [
          -1,
          562
        ],
        "'ATCHECK": [
          -1,
          562
        ],
        "'ASSERTEQUALS": [
          -1,
          562
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          562
        ],
        "'ASSERTTRUE": [
          -1,
          562
        ],
        "'ASSERTFALSE": [
          -1,
          562
        ],
        "'ASSERTSATISFIES": [
          -1,
          562
        ],
        "'ASSERTRAISES": [
          -1,
          562
        ],
        "'SWITCH": [
          -1,
          562
        ],
        "'YIELD": [
          -1,
          562
        ],
        "'DASH": [
          -1,
          562
        ],
        "'BANG": [
          -1,
          562
        ],
        "'LBRACK": [
          -1,
          562
        ],
        "'NUMBER": [
          -1,
          562
        ],
        "'TRUE": [
          -1,
          562
        ],
        "'FALSE": [
          -1,
          562
        ],
        "'NULL": [
          -1,
          562
        ],
        "'PARENAFTERBRACE": [
          -1,
          562
        ],
        "'ASK": [
          -1,
          562
        ],
        "'NEW": [
          -1,
          562
        ]
      },
      {
        "'NAME": [
          -1,
          564
        ],
        "'PARENNOSPACE": [
          -1,
          564
        ],
        "'STRING": [
          -1,
          564
        ],
        "'RBRACE": [
          -1,
          564
        ],
        "'SPY": [
          -1,
          564
        ],
        "'PARENSPACE": [
          -1,
          564
        ],
        "'INT": [
          -1,
          564
        ],
        "'LONG": [
          -1,
          564
        ],
        "'DOUBLE": [
          -1,
          564
        ],
        "'FLOAT": [
          -1,
          564
        ],
        "'BOOLEAN": [
          -1,
          564
        ],
        "'VOID": [
          -1,
          564
        ],
        "'DATA": [
          -1,
          564
        ],
        "'IF": [
          -1,
          564
        ],
        "'FOR": [
          -1,
          564
        ],
        "'RETURN": [
          -1,
          564
        ],
        "'VAR": [
          -1,
          564
        ],
        "'ATCHECK": [
          -1,
          564
        ],
        "'ASSERTEQUALS": [
          -1,
          564
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          564
        ],
        "'ASSERTTRUE": [
          -1,
          564
        ],
        "'ASSERTFALSE": [
          -1,
          564
        ],
        "'ASSERTSATISFIES": [
          -1,
          564
        ],
        "'ASSERTRAISES": [
          -1,
          564
        ],
        "'SWITCH": [
          -1,
          564
        ],
        "'YIELD": [
          -1,
          564
        ],
        "'DASH": [
          -1,
          564
        ],
        "'BANG": [
          -1,
          564
        ],
        "'LBRACK": [
          -1,
          564
        ],
        "'NUMBER": [
          -1,
          564
        ],
        "'TRUE": [
          -1,
          564
        ],
        "'FALSE": [
          -1,
          564
        ],
        "'NULL": [
          -1,
          564
        ],
        "'PARENAFTERBRACE": [
          -1,
          564
        ],
        "'ASK": [
          -1,
          564
        ],
        "'NEW": [
          -1,
          564
        ]
      },
      {
        "'NAME": [
          -1,
          566
        ],
        "'PARENNOSPACE": [
          -1,
          566
        ],
        "'STRING": [
          -1,
          566
        ],
        "'RBRACE": [
          -1,
          566
        ],
        "'SPY": [
          -1,
          566
        ],
        "'PARENSPACE": [
          -1,
          566
        ],
        "'INT": [
          -1,
          566
        ],
        "'LONG": [
          -1,
          566
        ],
        "'DOUBLE": [
          -1,
          566
        ],
        "'FLOAT": [
          -1,
          566
        ],
        "'BOOLEAN": [
          -1,
          566
        ],
        "'VOID": [
          -1,
          566
        ],
        "'DATA": [
          -1,
          566
        ],
        "'IF": [
          -1,
          566
        ],
        "'FOR": [
          -1,
          566
        ],
        "'RETURN": [
          -1,
          566
        ],
        "'VAR": [
          -1,
          566
        ],
        "'ATCHECK": [
          -1,
          566
        ],
        "'ASSERTEQUALS": [
          -1,
          566
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          566
        ],
        "'ASSERTTRUE": [
          -1,
          566
        ],
        "'ASSERTFALSE": [
          -1,
          566
        ],
        "'ASSERTSATISFIES": [
          -1,
          566
        ],
        "'ASSERTRAISES": [
          -1,
          566
        ],
        "'SWITCH": [
          -1,
          566
        ],
        "'YIELD": [
          -1,
          566
        ],
        "'DASH": [
          -1,
          566
        ],
        "'BANG": [
          -1,
          566
        ],
        "'LBRACK": [
          -1,
          566
        ],
        "'NUMBER": [
          -1,
          566
        ],
        "'TRUE": [
          -1,
          566
        ],
        "'FALSE": [
          -1,
          566
        ],
        "'NULL": [
          -1,
          566
        ],
        "'PARENAFTERBRACE": [
          -1,
          566
        ],
        "'ASK": [
          -1,
          566
        ],
        "'NEW": [
          -1,
          566
        ]
      },
      {
        "'NAME": [
          -1,
          568
        ],
        "'PARENNOSPACE": [
          -1,
          568
        ],
        "'STRING": [
          -1,
          568
        ],
        "'RBRACE": [
          -1,
          568
        ],
        "'SPY": [
          -1,
          568
        ],
        "'PARENSPACE": [
          -1,
          568
        ],
        "'INT": [
          -1,
          568
        ],
        "'LONG": [
          -1,
          568
        ],
        "'DOUBLE": [
          -1,
          568
        ],
        "'FLOAT": [
          -1,
          568
        ],
        "'BOOLEAN": [
          -1,
          568
        ],
        "'VOID": [
          -1,
          568
        ],
        "'DATA": [
          -1,
          568
        ],
        "'IF": [
          -1,
          568
        ],
        "'FOR": [
          -1,
          568
        ],
        "'RETURN": [
          -1,
          568
        ],
        "'VAR": [
          -1,
          568
        ],
        "'ATCHECK": [
          -1,
          568
        ],
        "'ASSERTEQUALS": [
          -1,
          568
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          568
        ],
        "'ASSERTTRUE": [
          -1,
          568
        ],
        "'ASSERTFALSE": [
          -1,
          568
        ],
        "'ASSERTSATISFIES": [
          -1,
          568
        ],
        "'ASSERTRAISES": [
          -1,
          568
        ],
        "'SWITCH": [
          -1,
          568
        ],
        "'YIELD": [
          -1,
          568
        ],
        "'DASH": [
          -1,
          568
        ],
        "'BANG": [
          -1,
          568
        ],
        "'LBRACK": [
          -1,
          568
        ],
        "'NUMBER": [
          -1,
          568
        ],
        "'TRUE": [
          -1,
          568
        ],
        "'FALSE": [
          -1,
          568
        ],
        "'NULL": [
          -1,
          568
        ],
        "'PARENAFTERBRACE": [
          -1,
          568
        ],
        "'ASK": [
          -1,
          568
        ],
        "'NEW": [
          -1,
          568
        ]
      },
      {
        "'NAME": [
          -1,
          570
        ],
        "'PARENNOSPACE": [
          -1,
          570
        ],
        "'STRING": [
          -1,
          570
        ],
        "'RBRACE": [
          -1,
          570
        ],
        "'SPY": [
          -1,
          570
        ],
        "'PARENSPACE": [
          -1,
          570
        ],
        "'INT": [
          -1,
          570
        ],
        "'LONG": [
          -1,
          570
        ],
        "'DOUBLE": [
          -1,
          570
        ],
        "'FLOAT": [
          -1,
          570
        ],
        "'BOOLEAN": [
          -1,
          570
        ],
        "'VOID": [
          -1,
          570
        ],
        "'DATA": [
          -1,
          570
        ],
        "'IF": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          570
        ],
        "'RETURN": [
          -1,
          570
        ],
        "'VAR": [
          -1,
          570
        ],
        "'ATCHECK": [
          -1,
          570
        ],
        "'ASSERTEQUALS": [
          -1,
          570
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          570
        ],
        "'ASSERTTRUE": [
          -1,
          570
        ],
        "'ASSERTFALSE": [
          -1,
          570
        ],
        "'ASSERTSATISFIES": [
          -1,
          570
        ],
        "'ASSERTRAISES": [
          -1,
          570
        ],
        "'SWITCH": [
          -1,
          570
        ],
        "'YIELD": [
          -1,
          570
        ],
        "'DASH": [
          -1,
          570
        ],
        "'BANG": [
          -1,
          570
        ],
        "'LBRACK": [
          -1,
          570
        ],
        "'NUMBER": [
          -1,
          570
        ],
        "'TRUE": [
          -1,
          570
        ],
        "'FALSE": [
          -1,
          570
        ],
        "'NULL": [
          -1,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          570
        ],
        "'ASK": [
          -1,
          570
        ],
        "'NEW": [
          -1,
          570
        ]
      },
      {
        "'NAME": [
          -1,
          572
        ],
        "'PARENNOSPACE": [
          -1,
          572
        ],
        "'STRING": [
          -1,
          572
        ],
        "'RBRACE": [
          -1,
          572
        ],
        "'SPY": [
          -1,
          572
        ],
        "'PARENSPACE": [
          -1,
          572
        ],
        "'INT": [
          -1,
          572
        ],
        "'LONG": [
          -1,
          572
        ],
        "'DOUBLE": [
          -1,
          572
        ],
        "'FLOAT": [
          -1,
          572
        ],
        "'BOOLEAN": [
          -1,
          572
        ],
        "'VOID": [
          -1,
          572
        ],
        "'DATA": [
          -1,
          572
        ],
        "'IF": [
          -1,
          572
        ],
        "'ELSE": [
          -1,
          572
        ],
        "'FOR": [
          -1,
          572
        ],
        "'RETURN": [
          -1,
          572
        ],
        "'VAR": [
          -1,
          572
        ],
        "'ATCHECK": [
          -1,
          572
        ],
        "'ASSERTEQUALS": [
          -1,
          572
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          572
        ],
        "'ASSERTTRUE": [
          -1,
          572
        ],
        "'ASSERTFALSE": [
          -1,
          572
        ],
        "'ASSERTSATISFIES": [
          -1,
          572
        ],
        "'ASSERTRAISES": [
          -1,
          572
        ],
        "'SWITCH": [
          -1,
          572
        ],
        "'YIELD": [
          -1,
          572
        ],
        "'DASH": [
          -1,
          572
        ],
        "'BANG": [
          -1,
          572
        ],
        "'LBRACK": [
          -1,
          572
        ],
        "'NUMBER": [
          -1,
          572
        ],
        "'TRUE": [
          -1,
          572
        ],
        "'FALSE": [
          -1,
          572
        ],
        "'NULL": [
          -1,
          572
        ],
        "'PARENAFTERBRACE": [
          -1,
          572
        ],
        "'ASK": [
          -1,
          572
        ],
        "'NEW": [
          -1,
          572
        ]
      },
      {
        "block": [
          445
        ],
        "'LBRACE": [
          275
        ],
        "'IF": [
          446
        ]
      },
      {
        "'NAME": [
          -1,
          574
        ],
        "'PARENNOSPACE": [
          -1,
          574
        ],
        "'STRING": [
          -1,
          574
        ],
        "'RBRACE": [
          -1,
          574
        ],
        "'SPY": [
          -1,
          574
        ],
        "'PARENSPACE": [
          -1,
          574
        ],
        "'INT": [
          -1,
          574
        ],
        "'LONG": [
          -1,
          574
        ],
        "'DOUBLE": [
          -1,
          574
        ],
        "'FLOAT": [
          -1,
          574
        ],
        "'BOOLEAN": [
          -1,
          574
        ],
        "'VOID": [
          -1,
          574
        ],
        "'DATA": [
          -1,
          574
        ],
        "'IF": [
          -1,
          574
        ],
        "'FOR": [
          -1,
          574
        ],
        "'RETURN": [
          -1,
          574
        ],
        "'VAR": [
          -1,
          574
        ],
        "'ATCHECK": [
          -1,
          574
        ],
        "'ASSERTEQUALS": [
          -1,
          574
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          574
        ],
        "'ASSERTTRUE": [
          -1,
          574
        ],
        "'ASSERTFALSE": [
          -1,
          574
        ],
        "'ASSERTSATISFIES": [
          -1,
          574
        ],
        "'ASSERTRAISES": [
          -1,
          574
        ],
        "'SWITCH": [
          -1,
          574
        ],
        "'YIELD": [
          -1,
          574
        ],
        "'DASH": [
          -1,
          574
        ],
        "'BANG": [
          -1,
          574
        ],
        "'LBRACK": [
          -1,
          574
        ],
        "'NUMBER": [
          -1,
          574
        ],
        "'TRUE": [
          -1,
          574
        ],
        "'FALSE": [
          -1,
          574
        ],
        "'NULL": [
          -1,
          574
        ],
        "'PARENAFTERBRACE": [
          -1,
          574
        ],
        "'ASK": [
          -1,
          574
        ],
        "'NEW": [
          -1,
          574
        ]
      },
      {
        "block": [
          447
        ],
        "'LBRACE": [
          275
        ]
      },
      {
        "'NAME": [
          -1,
          576
        ],
        "'PARENNOSPACE": [
          -1,
          576
        ],
        "'STRING": [
          -1,
          576
        ],
        "'RBRACE": [
          -1,
          576
        ],
        "'SPY": [
          -1,
          576
        ],
        "'PARENSPACE": [
          -1,
          576
        ],
        "'INT": [
          -1,
          576
        ],
        "'LONG": [
          -1,
          576
        ],
        "'DOUBLE": [
          -1,
          576
        ],
        "'FLOAT": [
          -1,
          576
        ],
        "'BOOLEAN": [
          -1,
          576
        ],
        "'VOID": [
          -1,
          576
        ],
        "'DATA": [
          -1,
          576
        ],
        "'IF": [
          -1,
          576
        ],
        "'FOR": [
          -1,
          576
        ],
        "'RETURN": [
          -1,
          576
        ],
        "'VAR": [
          -1,
          576
        ],
        "'ATCHECK": [
          -1,
          576
        ],
        "'ASSERTEQUALS": [
          -1,
          576
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          576
        ],
        "'ASSERTTRUE": [
          -1,
          576
        ],
        "'ASSERTFALSE": [
          -1,
          576
        ],
        "'ASSERTSATISFIES": [
          -1,
          576
        ],
        "'ASSERTRAISES": [
          -1,
          576
        ],
        "'SWITCH": [
          -1,
          576
        ],
        "'YIELD": [
          -1,
          576
        ],
        "'DASH": [
          -1,
          576
        ],
        "'BANG": [
          -1,
          576
        ],
        "'LBRACK": [
          -1,
          576
        ],
        "'NUMBER": [
          -1,
          576
        ],
        "'TRUE": [
          -1,
          576
        ],
        "'FALSE": [
          -1,
          576
        ],
        "'NULL": [
          -1,
          576
        ],
        "'PARENAFTERBRACE": [
          -1,
          576
        ],
        "'ASK": [
          -1,
          576
        ],
        "'NEW": [
          -1,
          576
        ]
      },
      {
        "'NAME": [
          -1,
          578
        ],
        "'PARENNOSPACE": [
          -1,
          578
        ],
        "'STRING": [
          -1,
          578
        ],
        "'RBRACE": [
          -1,
          578
        ],
        "'SPY": [
          -1,
          578
        ],
        "'PARENSPACE": [
          -1,
          578
        ],
        "'INT": [
          -1,
          578
        ],
        "'LONG": [
          -1,
          578
        ],
        "'DOUBLE": [
          -1,
          578
        ],
        "'FLOAT": [
          -1,
          578
        ],
        "'BOOLEAN": [
          -1,
          578
        ],
        "'VOID": [
          -1,
          578
        ],
        "'DATA": [
          -1,
          578
        ],
        "'IF": [
          -1,
          578
        ],
        "'FOR": [
          -1,
          578
        ],
        "'RETURN": [
          -1,
          578
        ],
        "'VAR": [
          -1,
          578
        ],
        "'ATCHECK": [
          -1,
          578
        ],
        "'ASSERTEQUALS": [
          -1,
          578
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          578
        ],
        "'ASSERTTRUE": [
          -1,
          578
        ],
        "'ASSERTFALSE": [
          -1,
          578
        ],
        "'ASSERTSATISFIES": [
          -1,
          578
        ],
        "'ASSERTRAISES": [
          -1,
          578
        ],
        "'SWITCH": [
          -1,
          578
        ],
        "'YIELD": [
          -1,
          578
        ],
        "'DASH": [
          -1,
          578
        ],
        "'BANG": [
          -1,
          578
        ],
        "'LBRACK": [
          -1,
          578
        ],
        "'NUMBER": [
          -1,
          578
        ],
        "'TRUE": [
          -1,
          578
        ],
        "'FALSE": [
          -1,
          578
        ],
        "'NULL": [
          -1,
          578
        ],
        "'PARENAFTERBRACE": [
          -1,
          578
        ],
        "'ASK": [
          -1,
          578
        ],
        "'NEW": [
          -1,
          578
        ]
      },
      {
        "'NAME": [
          -1,
          580
        ],
        "'PARENNOSPACE": [
          -1,
          580
        ],
        "'STRING": [
          -1,
          580
        ],
        "'RBRACE": [
          -1,
          580
        ],
        "'SPY": [
          -1,
          580
        ],
        "'PARENSPACE": [
          -1,
          580
        ],
        "'INT": [
          -1,
          580
        ],
        "'LONG": [
          -1,
          580
        ],
        "'DOUBLE": [
          -1,
          580
        ],
        "'FLOAT": [
          -1,
          580
        ],
        "'BOOLEAN": [
          -1,
          580
        ],
        "'VOID": [
          -1,
          580
        ],
        "'DATA": [
          -1,
          580
        ],
        "'IF": [
          -1,
          580
        ],
        "'FOR": [
          -1,
          580
        ],
        "'RETURN": [
          -1,
          580
        ],
        "'VAR": [
          -1,
          580
        ],
        "'ATCHECK": [
          -1,
          580
        ],
        "'ASSERTEQUALS": [
          -1,
          580
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          580
        ],
        "'ASSERTTRUE": [
          -1,
          580
        ],
        "'ASSERTFALSE": [
          -1,
          580
        ],
        "'ASSERTSATISFIES": [
          -1,
          580
        ],
        "'ASSERTRAISES": [
          -1,
          580
        ],
        "'SWITCH": [
          -1,
          580
        ],
        "'YIELD": [
          -1,
          580
        ],
        "'DASH": [
          -1,
          580
        ],
        "'BANG": [
          -1,
          580
        ],
        "'LBRACK": [
          -1,
          580
        ],
        "'NUMBER": [
          -1,
          580
        ],
        "'TRUE": [
          -1,
          580
        ],
        "'FALSE": [
          -1,
          580
        ],
        "'NULL": [
          -1,
          580
        ],
        "'PARENAFTERBRACE": [
          -1,
          580
        ],
        "'ASK": [
          -1,
          580
        ],
        "'NEW": [
          -1,
          580
        ]
      },
      {
        "'NAME": [
          -1,
          582
        ],
        "'PARENNOSPACE": [
          -1,
          582
        ],
        "'STRING": [
          -1,
          582
        ],
        "'RBRACE": [
          -1,
          582
        ],
        "'SPY": [
          -1,
          582
        ],
        "'PARENSPACE": [
          -1,
          582
        ],
        "'INT": [
          -1,
          582
        ],
        "'LONG": [
          -1,
          582
        ],
        "'DOUBLE": [
          -1,
          582
        ],
        "'FLOAT": [
          -1,
          582
        ],
        "'BOOLEAN": [
          -1,
          582
        ],
        "'VOID": [
          -1,
          582
        ],
        "'DATA": [
          -1,
          582
        ],
        "'IF": [
          -1,
          582
        ],
        "'FOR": [
          -1,
          582
        ],
        "'RETURN": [
          -1,
          582
        ],
        "'VAR": [
          -1,
          582
        ],
        "'ATCHECK": [
          -1,
          582
        ],
        "'ASSERTEQUALS": [
          -1,
          582
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          582
        ],
        "'ASSERTTRUE": [
          -1,
          582
        ],
        "'ASSERTFALSE": [
          -1,
          582
        ],
        "'ASSERTSATISFIES": [
          -1,
          582
        ],
        "'ASSERTRAISES": [
          -1,
          582
        ],
        "'SWITCH": [
          -1,
          582
        ],
        "'YIELD": [
          -1,
          582
        ],
        "'DASH": [
          -1,
          582
        ],
        "'BANG": [
          -1,
          582
        ],
        "'LBRACK": [
          -1,
          582
        ],
        "'NUMBER": [
          -1,
          582
        ],
        "'TRUE": [
          -1,
          582
        ],
        "'FALSE": [
          -1,
          582
        ],
        "'NULL": [
          -1,
          582
        ],
        "'PARENAFTERBRACE": [
          -1,
          582
        ],
        "'ASK": [
          -1,
          582
        ],
        "'NEW": [
          -1,
          582
        ]
      },
      {
        "'NAME": [
          -1,
          584
        ],
        "'PARENNOSPACE": [
          -1,
          584
        ],
        "'STRING": [
          -1,
          584
        ],
        "'RBRACE": [
          -1,
          584
        ],
        "'SPY": [
          -1,
          584
        ],
        "'PARENSPACE": [
          -1,
          584
        ],
        "'INT": [
          -1,
          584
        ],
        "'LONG": [
          -1,
          584
        ],
        "'DOUBLE": [
          -1,
          584
        ],
        "'FLOAT": [
          -1,
          584
        ],
        "'BOOLEAN": [
          -1,
          584
        ],
        "'VOID": [
          -1,
          584
        ],
        "'DATA": [
          -1,
          584
        ],
        "'IF": [
          -1,
          584
        ],
        "'FOR": [
          -1,
          584
        ],
        "'RETURN": [
          -1,
          584
        ],
        "'VAR": [
          -1,
          584
        ],
        "'ATCHECK": [
          -1,
          584
        ],
        "'ASSERTEQUALS": [
          -1,
          584
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          584
        ],
        "'ASSERTTRUE": [
          -1,
          584
        ],
        "'ASSERTFALSE": [
          -1,
          584
        ],
        "'ASSERTSATISFIES": [
          -1,
          584
        ],
        "'ASSERTRAISES": [
          -1,
          584
        ],
        "'SWITCH": [
          -1,
          584
        ],
        "'YIELD": [
          -1,
          584
        ],
        "'DASH": [
          -1,
          584
        ],
        "'BANG": [
          -1,
          584
        ],
        "'LBRACK": [
          -1,
          584
        ],
        "'NUMBER": [
          -1,
          584
        ],
        "'TRUE": [
          -1,
          584
        ],
        "'FALSE": [
          -1,
          584
        ],
        "'NULL": [
          -1,
          584
        ],
        "'PARENAFTERBRACE": [
          -1,
          584
        ],
        "'ASK": [
          -1,
          584
        ],
        "'NEW": [
          -1,
          584
        ]
      },
      {
        "'NAME": [
          -1,
          586
        ],
        "'PARENNOSPACE": [
          -1,
          586
        ],
        "'STRING": [
          -1,
          586
        ],
        "'RBRACE": [
          -1,
          586
        ],
        "'SPY": [
          -1,
          586
        ],
        "'PARENSPACE": [
          -1,
          586
        ],
        "'INT": [
          -1,
          586
        ],
        "'LONG": [
          -1,
          586
        ],
        "'DOUBLE": [
          -1,
          586
        ],
        "'FLOAT": [
          -1,
          586
        ],
        "'BOOLEAN": [
          -1,
          586
        ],
        "'VOID": [
          -1,
          586
        ],
        "'DATA": [
          -1,
          586
        ],
        "'IF": [
          -1,
          586
        ],
        "'FOR": [
          -1,
          586
        ],
        "'RETURN": [
          -1,
          586
        ],
        "'VAR": [
          -1,
          586
        ],
        "'ATCHECK": [
          -1,
          586
        ],
        "'ASSERTEQUALS": [
          -1,
          586
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          586
        ],
        "'ASSERTTRUE": [
          -1,
          586
        ],
        "'ASSERTFALSE": [
          -1,
          586
        ],
        "'ASSERTSATISFIES": [
          -1,
          586
        ],
        "'ASSERTRAISES": [
          -1,
          586
        ],
        "'SWITCH": [
          -1,
          586
        ],
        "'YIELD": [
          -1,
          586
        ],
        "'DASH": [
          -1,
          586
        ],
        "'BANG": [
          -1,
          586
        ],
        "'LBRACK": [
          -1,
          586
        ],
        "'NUMBER": [
          -1,
          586
        ],
        "'TRUE": [
          -1,
          586
        ],
        "'FALSE": [
          -1,
          586
        ],
        "'NULL": [
          -1,
          586
        ],
        "'PARENAFTERBRACE": [
          -1,
          586
        ],
        "'ASK": [
          -1,
          586
        ],
        "'NEW": [
          -1,
          586
        ]
      },
      {
        "'NAME": [
          -1,
          588
        ],
        "'PARENNOSPACE": [
          -1,
          588
        ],
        "'STRING": [
          -1,
          588
        ],
        "'RBRACE": [
          -1,
          588
        ],
        "'SPY": [
          -1,
          588
        ],
        "'PARENSPACE": [
          -1,
          588
        ],
        "'INT": [
          -1,
          588
        ],
        "'LONG": [
          -1,
          588
        ],
        "'DOUBLE": [
          -1,
          588
        ],
        "'FLOAT": [
          -1,
          588
        ],
        "'BOOLEAN": [
          -1,
          588
        ],
        "'VOID": [
          -1,
          588
        ],
        "'DATA": [
          -1,
          588
        ],
        "'IF": [
          -1,
          588
        ],
        "'FOR": [
          -1,
          588
        ],
        "'RETURN": [
          -1,
          588
        ],
        "'VAR": [
          -1,
          588
        ],
        "'ATCHECK": [
          -1,
          588
        ],
        "'ASSERTEQUALS": [
          -1,
          588
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          588
        ],
        "'ASSERTTRUE": [
          -1,
          588
        ],
        "'ASSERTFALSE": [
          -1,
          588
        ],
        "'ASSERTSATISFIES": [
          -1,
          588
        ],
        "'ASSERTRAISES": [
          -1,
          588
        ],
        "'SWITCH": [
          -1,
          588
        ],
        "'YIELD": [
          -1,
          588
        ],
        "'DASH": [
          -1,
          588
        ],
        "'BANG": [
          -1,
          588
        ],
        "'LBRACK": [
          -1,
          588
        ],
        "'NUMBER": [
          -1,
          588
        ],
        "'TRUE": [
          -1,
          588
        ],
        "'FALSE": [
          -1,
          588
        ],
        "'NULL": [
          -1,
          588
        ],
        "'PARENAFTERBRACE": [
          -1,
          588
        ],
        "'ASK": [
          -1,
          588
        ],
        "'NEW": [
          -1,
          588
        ]
      },
      {
        "'NAME": [
          -1,
          590
        ],
        "'PARENNOSPACE": [
          -1,
          590
        ],
        "'STRING": [
          -1,
          590
        ],
        "'RBRACE": [
          -1,
          590
        ],
        "'SPY": [
          -1,
          590
        ],
        "'PARENSPACE": [
          -1,
          590
        ],
        "'INT": [
          -1,
          590
        ],
        "'LONG": [
          -1,
          590
        ],
        "'DOUBLE": [
          -1,
          590
        ],
        "'FLOAT": [
          -1,
          590
        ],
        "'BOOLEAN": [
          -1,
          590
        ],
        "'VOID": [
          -1,
          590
        ],
        "'DATA": [
          -1,
          590
        ],
        "'IF": [
          -1,
          590
        ],
        "'FOR": [
          -1,
          590
        ],
        "'RETURN": [
          -1,
          590
        ],
        "'VAR": [
          -1,
          590
        ],
        "'ATCHECK": [
          -1,
          590
        ],
        "'ASSERTEQUALS": [
          -1,
          590
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          590
        ],
        "'ASSERTTRUE": [
          -1,
          590
        ],
        "'ASSERTFALSE": [
          -1,
          590
        ],
        "'ASSERTSATISFIES": [
          -1,
          590
        ],
        "'ASSERTRAISES": [
          -1,
          590
        ],
        "'SWITCH": [
          -1,
          590
        ],
        "'YIELD": [
          -1,
          590
        ],
        "'DASH": [
          -1,
          590
        ],
        "'BANG": [
          -1,
          590
        ],
        "'LBRACK": [
          -1,
          590
        ],
        "'NUMBER": [
          -1,
          590
        ],
        "'TRUE": [
          -1,
          590
        ],
        "'FALSE": [
          -1,
          590
        ],
        "'NULL": [
          -1,
          590
        ],
        "'PARENAFTERBRACE": [
          -1,
          590
        ],
        "'ASK": [
          -1,
          590
        ],
        "'NEW": [
          -1,
          590
        ]
      },
      {
        "'NAME": [
          -1,
          592
        ],
        "'PARENNOSPACE": [
          -1,
          592
        ],
        "'STRING": [
          -1,
          592
        ],
        "'RBRACE": [
          -1,
          592
        ],
        "'SPY": [
          -1,
          592
        ],
        "'PARENSPACE": [
          -1,
          592
        ],
        "'INT": [
          -1,
          592
        ],
        "'LONG": [
          -1,
          592
        ],
        "'DOUBLE": [
          -1,
          592
        ],
        "'FLOAT": [
          -1,
          592
        ],
        "'BOOLEAN": [
          -1,
          592
        ],
        "'VOID": [
          -1,
          592
        ],
        "'DATA": [
          -1,
          592
        ],
        "'IF": [
          -1,
          592
        ],
        "'FOR": [
          -1,
          592
        ],
        "'RETURN": [
          -1,
          592
        ],
        "'VAR": [
          -1,
          592
        ],
        "'ATCHECK": [
          -1,
          592
        ],
        "'ASSERTEQUALS": [
          -1,
          592
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          592
        ],
        "'ASSERTTRUE": [
          -1,
          592
        ],
        "'ASSERTFALSE": [
          -1,
          592
        ],
        "'ASSERTSATISFIES": [
          -1,
          592
        ],
        "'ASSERTRAISES": [
          -1,
          592
        ],
        "'SWITCH": [
          -1,
          592
        ],
        "'YIELD": [
          -1,
          592
        ],
        "'DASH": [
          -1,
          592
        ],
        "'BANG": [
          -1,
          592
        ],
        "'LBRACK": [
          -1,
          592
        ],
        "'NUMBER": [
          -1,
          592
        ],
        "'TRUE": [
          -1,
          592
        ],
        "'FALSE": [
          -1,
          592
        ],
        "'NULL": [
          -1,
          592
        ],
        "'PARENAFTERBRACE": [
          -1,
          592
        ],
        "'ASK": [
          -1,
          592
        ],
        "'NEW": [
          -1,
          592
        ]
      },
      {
        "'NAME": [
          -1,
          594
        ],
        "'PARENNOSPACE": [
          -1,
          594
        ],
        "'STRING": [
          -1,
          594
        ],
        "'RBRACE": [
          -1,
          594
        ],
        "'SPY": [
          -1,
          594
        ],
        "'PARENSPACE": [
          -1,
          594
        ],
        "'INT": [
          -1,
          594
        ],
        "'LONG": [
          -1,
          594
        ],
        "'DOUBLE": [
          -1,
          594
        ],
        "'FLOAT": [
          -1,
          594
        ],
        "'BOOLEAN": [
          -1,
          594
        ],
        "'VOID": [
          -1,
          594
        ],
        "'DATA": [
          -1,
          594
        ],
        "'IF": [
          -1,
          594
        ],
        "'FOR": [
          -1,
          594
        ],
        "'RETURN": [
          -1,
          594
        ],
        "'VAR": [
          -1,
          594
        ],
        "'ATCHECK": [
          -1,
          594
        ],
        "'ASSERTEQUALS": [
          -1,
          594
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          594
        ],
        "'ASSERTTRUE": [
          -1,
          594
        ],
        "'ASSERTFALSE": [
          -1,
          594
        ],
        "'ASSERTSATISFIES": [
          -1,
          594
        ],
        "'ASSERTRAISES": [
          -1,
          594
        ],
        "'SWITCH": [
          -1,
          594
        ],
        "'YIELD": [
          -1,
          594
        ],
        "'DASH": [
          -1,
          594
        ],
        "'BANG": [
          -1,
          594
        ],
        "'LBRACK": [
          -1,
          594
        ],
        "'NUMBER": [
          -1,
          594
        ],
        "'TRUE": [
          -1,
          594
        ],
        "'FALSE": [
          -1,
          594
        ],
        "'NULL": [
          -1,
          594
        ],
        "'PARENAFTERBRACE": [
          -1,
          594
        ],
        "'ASK": [
          -1,
          594
        ],
        "'NEW": [
          -1,
          594
        ]
      },
      {
        "'NAME": [
          -1,
          596
        ],
        "'PARENNOSPACE": [
          -1,
          596
        ],
        "'STRING": [
          -1,
          596
        ],
        "'RBRACE": [
          -1,
          596
        ],
        "'SPY": [
          -1,
          596
        ],
        "'PARENSPACE": [
          -1,
          596
        ],
        "'INT": [
          -1,
          596
        ],
        "'LONG": [
          -1,
          596
        ],
        "'DOUBLE": [
          -1,
          596
        ],
        "'FLOAT": [
          -1,
          596
        ],
        "'BOOLEAN": [
          -1,
          596
        ],
        "'VOID": [
          -1,
          596
        ],
        "'DATA": [
          -1,
          596
        ],
        "'IF": [
          -1,
          596
        ],
        "'FOR": [
          -1,
          596
        ],
        "'RETURN": [
          -1,
          596
        ],
        "'VAR": [
          -1,
          596
        ],
        "'ATCHECK": [
          -1,
          596
        ],
        "'ASSERTEQUALS": [
          -1,
          596
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          596
        ],
        "'ASSERTTRUE": [
          -1,
          596
        ],
        "'ASSERTFALSE": [
          -1,
          596
        ],
        "'ASSERTSATISFIES": [
          -1,
          596
        ],
        "'ASSERTRAISES": [
          -1,
          596
        ],
        "'SWITCH": [
          -1,
          596
        ],
        "'YIELD": [
          -1,
          596
        ],
        "'DASH": [
          -1,
          596
        ],
        "'BANG": [
          -1,
          596
        ],
        "'LBRACK": [
          -1,
          596
        ],
        "'NUMBER": [
          -1,
          596
        ],
        "'TRUE": [
          -1,
          596
        ],
        "'FALSE": [
          -1,
          596
        ],
        "'NULL": [
          -1,
          596
        ],
        "'PARENAFTERBRACE": [
          -1,
          596
        ],
        "'ASK": [
          -1,
          596
        ],
        "'NEW": [
          -1,
          596
        ]
      },
      {
        "'NAME": [
          -1,
          598
        ],
        "'PARENNOSPACE": [
          -1,
          598
        ],
        "'STRING": [
          -1,
          598
        ],
        "'RBRACE": [
          -1,
          598
        ],
        "'SPY": [
          -1,
          598
        ],
        "'PARENSPACE": [
          -1,
          598
        ],
        "'INT": [
          -1,
          598
        ],
        "'LONG": [
          -1,
          598
        ],
        "'DOUBLE": [
          -1,
          598
        ],
        "'FLOAT": [
          -1,
          598
        ],
        "'BOOLEAN": [
          -1,
          598
        ],
        "'VOID": [
          -1,
          598
        ],
        "'DATA": [
          -1,
          598
        ],
        "'IF": [
          -1,
          598
        ],
        "'FOR": [
          -1,
          598
        ],
        "'RETURN": [
          -1,
          598
        ],
        "'VAR": [
          -1,
          598
        ],
        "'ATCHECK": [
          -1,
          598
        ],
        "'ASSERTEQUALS": [
          -1,
          598
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          598
        ],
        "'ASSERTTRUE": [
          -1,
          598
        ],
        "'ASSERTFALSE": [
          -1,
          598
        ],
        "'ASSERTSATISFIES": [
          -1,
          598
        ],
        "'ASSERTRAISES": [
          -1,
          598
        ],
        "'SWITCH": [
          -1,
          598
        ],
        "'YIELD": [
          -1,
          598
        ],
        "'DASH": [
          -1,
          598
        ],
        "'BANG": [
          -1,
          598
        ],
        "'LBRACK": [
          -1,
          598
        ],
        "'NUMBER": [
          -1,
          598
        ],
        "'TRUE": [
          -1,
          598
        ],
        "'FALSE": [
          -1,
          598
        ],
        "'NULL": [
          -1,
          598
        ],
        "'PARENAFTERBRACE": [
          -1,
          598
        ],
        "'ASK": [
          -1,
          598
        ],
        "'NEW": [
          -1,
          598
        ]
      },
      {
        "case-branch_A0_I3_I1*": [
          448
        ],
        "'RPAREN": [
          -1,
          600,
          602
        ],
        "'COMMA": [
          -1,
          602
        ]
      },
      {
        "'RPAREN": [
          449
        ]
      },
      {
        "'RPAREN": [
          -1,
          604
        ]
      },
      {
        "'RBRACE": [
          -1,
          606
        ],
        "'CASE": [
          -1,
          606
        ],
        "'DEFAULT": [
          -1,
          606
        ]
      },
      {
        "'NAME": [
          -1,
          608
        ],
        "'PARENNOSPACE": [
          -1,
          608
        ],
        "'STRING": [
          -1,
          608
        ],
        "'SPY": [
          -1,
          608
        ],
        "'PARENSPACE": [
          -1,
          608
        ],
        "'INT": [
          -1,
          608
        ],
        "'LONG": [
          -1,
          608
        ],
        "'DOUBLE": [
          -1,
          608
        ],
        "'FLOAT": [
          -1,
          608
        ],
        "'BOOLEAN": [
          -1,
          608
        ],
        "'VOID": [
          -1,
          608
        ],
        "'DATA": [
          -1,
          608
        ],
        "'IF": [
          -1,
          608
        ],
        "'FOR": [
          -1,
          608
        ],
        "'RETURN": [
          -1,
          608
        ],
        "'VAR": [
          -1,
          608
        ],
        "'ATCHECK": [
          -1,
          608
        ],
        "'SWITCH": [
          -1,
          608
        ],
        "'YIELD": [
          -1,
          608
        ],
        "'DASH": [
          -1,
          608
        ],
        "'BANG": [
          -1,
          608
        ],
        "'LBRACK": [
          -1,
          608
        ],
        "'NUMBER": [
          -1,
          608
        ],
        "'TRUE": [
          -1,
          608
        ],
        "'FALSE": [
          -1,
          608
        ],
        "'NULL": [
          -1,
          608
        ],
        "'PARENAFTERBRACE": [
          -1,
          608
        ],
        "'ASK": [
          -1,
          608
        ],
        "'NEW": [
          -1,
          608
        ]
      },
      {
        "'NAME": [
          -1,
          256
        ],
        "'PARENNOSPACE": [
          -1,
          256
        ],
        "'STRING": [
          -1,
          256
        ],
        "'RBRACE": [
          -1,
          610
        ],
        "'SPY": [
          -1,
          256
        ],
        "'PARENSPACE": [
          -1,
          256
        ],
        "'INT": [
          -1,
          256
        ],
        "'LONG": [
          -1,
          256
        ],
        "'DOUBLE": [
          -1,
          256
        ],
        "'FLOAT": [
          -1,
          256
        ],
        "'BOOLEAN": [
          -1,
          256
        ],
        "'VOID": [
          -1,
          256
        ],
        "'DATA": [
          -1,
          256
        ],
        "'IF": [
          -1,
          256
        ],
        "'FOR": [
          -1,
          256
        ],
        "'RETURN": [
          -1,
          256
        ],
        "'VAR": [
          -1,
          256
        ],
        "'ATCHECK": [
          -1,
          256
        ],
        "'SWITCH": [
          -1,
          256
        ],
        "'CASE": [
          -1,
          610
        ],
        "'DEFAULT": [
          -1,
          610
        ],
        "'YIELD": [
          -1,
          256
        ],
        "'DASH": [
          -1,
          256
        ],
        "'BANG": [
          -1,
          256
        ],
        "'LBRACK": [
          -1,
          256
        ],
        "'NUMBER": [
          -1,
          256
        ],
        "'TRUE": [
          -1,
          256
        ],
        "'FALSE": [
          -1,
          256
        ],
        "'NULL": [
          -1,
          256
        ],
        "'PARENAFTERBRACE": [
          -1,
          256
        ],
        "'ASK": [
          -1,
          256
        ],
        "'NEW": [
          -1,
          256
        ]
      },
      {
        "'NAME": [
          -1,
          612
        ],
        "'PARENNOSPACE": [
          -1,
          612
        ],
        "'STRING": [
          -1,
          612
        ],
        "'SPY": [
          -1,
          612
        ],
        "'PARENSPACE": [
          -1,
          612
        ],
        "'INT": [
          -1,
          612
        ],
        "'LONG": [
          -1,
          612
        ],
        "'DOUBLE": [
          -1,
          612
        ],
        "'FLOAT": [
          -1,
          612
        ],
        "'BOOLEAN": [
          -1,
          612
        ],
        "'VOID": [
          -1,
          612
        ],
        "'DATA": [
          -1,
          612
        ],
        "'IF": [
          -1,
          612
        ],
        "'FOR": [
          -1,
          612
        ],
        "'RETURN": [
          -1,
          612
        ],
        "'VAR": [
          -1,
          612
        ],
        "'ATCHECK": [
          -1,
          612
        ],
        "'SWITCH": [
          -1,
          612
        ],
        "'YIELD": [
          -1,
          612
        ],
        "'DASH": [
          -1,
          612
        ],
        "'BANG": [
          -1,
          612
        ],
        "'LBRACK": [
          -1,
          612
        ],
        "'NUMBER": [
          -1,
          612
        ],
        "'TRUE": [
          -1,
          612
        ],
        "'FALSE": [
          -1,
          612
        ],
        "'NULL": [
          -1,
          612
        ],
        "'PARENAFTERBRACE": [
          -1,
          612
        ],
        "'ASK": [
          -1,
          612
        ],
        "'NEW": [
          -1,
          612
        ]
      },
      {
        "$": [
          -1,
          614
        ],
        "'NAME": [
          -1,
          614
        ],
        "'SEMI": [
          -1,
          614
        ],
        "'PARENNOSPACE": [
          -1,
          614
        ],
        "'STRING": [
          -1,
          614
        ],
        "'RPAREN": [
          -1,
          614
        ],
        "'RBRACE": [
          -1,
          614
        ],
        "'SPY": [
          -1,
          614
        ],
        "'PARENSPACE": [
          -1,
          614
        ],
        "'COMMA": [
          -1,
          614
        ],
        "'INT": [
          -1,
          614
        ],
        "'LONG": [
          -1,
          614
        ],
        "'DOUBLE": [
          -1,
          614
        ],
        "'FLOAT": [
          -1,
          614
        ],
        "'BOOLEAN": [
          -1,
          614
        ],
        "'VOID": [
          -1,
          614
        ],
        "'LT": [
          -1,
          614
        ],
        "'GT": [
          -1,
          614
        ],
        "'THINARROW": [
          -1,
          614
        ],
        "'DATA": [
          -1,
          614
        ],
        "'IF": [
          -1,
          614
        ],
        "'FOR": [
          -1,
          614
        ],
        "'RETURN": [
          -1,
          614
        ],
        "'VAR": [
          -1,
          614
        ],
        "'ATCHECK": [
          -1,
          614
        ],
        "'ASSERTEQUALS": [
          -1,
          614
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          614
        ],
        "'ASSERTTRUE": [
          -1,
          614
        ],
        "'ASSERTFALSE": [
          -1,
          614
        ],
        "'ASSERTSATISFIES": [
          -1,
          614
        ],
        "'ASSERTRAISES": [
          -1,
          614
        ],
        "'IS": [
          -1,
          614
        ],
        "'ISNOT": [
          -1,
          614
        ],
        "'SATISFIES": [
          -1,
          614
        ],
        "'RAISES": [
          -1,
          614
        ],
        "'SWITCH": [
          -1,
          614
        ],
        "'CASE": [
          -1,
          614
        ],
        "'DEFAULT": [
          -1,
          614
        ],
        "'YIELD": [
          -1,
          614
        ],
        "'PLUS": [
          -1,
          614
        ],
        "'DASH": [
          -1,
          614
        ],
        "'TIMES": [
          -1,
          614
        ],
        "'SLASH": [
          -1,
          614
        ],
        "'PERCENT": [
          -1,
          614
        ],
        "'EQUALEQUAL": [
          -1,
          614
        ],
        "'NEQ": [
          -1,
          614
        ],
        "'LEQ": [
          -1,
          614
        ],
        "'GEQ": [
          -1,
          614
        ],
        "'AND": [
          -1,
          614
        ],
        "'OR": [
          -1,
          614
        ],
        "'BANG": [
          -1,
          614
        ],
        "'DOT": [
          -1,
          614
        ],
        "'LBRACK": [
          -1,
          614
        ],
        "'RBRACK": [
          -1,
          614
        ],
        "'NUMBER": [
          -1,
          614
        ],
        "'TRUE": [
          -1,
          614
        ],
        "'FALSE": [
          -1,
          614
        ],
        "'NULL": [
          -1,
          614
        ],
        "'PARENAFTERBRACE": [
          -1,
          614
        ],
        "'ASK": [
          -1,
          614
        ],
        "'NEW": [
          -1,
          614
        ]
      },
      {
        "'NAME": [
          -1,
          616
        ],
        "'PARENNOSPACE": [
          -1,
          616
        ],
        "'STRING": [
          -1,
          616
        ],
        "'RBRACE": [
          -1,
          616
        ],
        "'SPY": [
          -1,
          616
        ],
        "'PARENSPACE": [
          -1,
          616
        ],
        "'INT": [
          -1,
          616
        ],
        "'LONG": [
          -1,
          616
        ],
        "'DOUBLE": [
          -1,
          616
        ],
        "'FLOAT": [
          -1,
          616
        ],
        "'BOOLEAN": [
          -1,
          616
        ],
        "'VOID": [
          -1,
          616
        ],
        "'DATA": [
          -1,
          616
        ],
        "'IF": [
          -1,
          616
        ],
        "'FOR": [
          -1,
          616
        ],
        "'RETURN": [
          -1,
          616
        ],
        "'VAR": [
          -1,
          616
        ],
        "'ATCHECK": [
          -1,
          616
        ],
        "'ASSERTEQUALS": [
          -1,
          616
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          616
        ],
        "'ASSERTTRUE": [
          -1,
          616
        ],
        "'ASSERTFALSE": [
          -1,
          616
        ],
        "'ASSERTSATISFIES": [
          -1,
          616
        ],
        "'ASSERTRAISES": [
          -1,
          616
        ],
        "'SWITCH": [
          -1,
          616
        ],
        "'YIELD": [
          -1,
          616
        ],
        "'DASH": [
          -1,
          616
        ],
        "'BANG": [
          -1,
          616
        ],
        "'LBRACK": [
          -1,
          616
        ],
        "'NUMBER": [
          -1,
          616
        ],
        "'TRUE": [
          -1,
          616
        ],
        "'FALSE": [
          -1,
          616
        ],
        "'NULL": [
          -1,
          616
        ],
        "'PARENAFTERBRACE": [
          -1,
          616
        ],
        "'ASK": [
          -1,
          616
        ],
        "'NEW": [
          -1,
          616
        ]
      },
      {
        "'PARENSPACE": [
          450
        ]
      },
      {
        "'NAME": [
          -1,
          618
        ],
        "'PARENNOSPACE": [
          -1,
          618
        ],
        "'STRING": [
          -1,
          618
        ],
        "'RBRACE": [
          -1,
          618
        ],
        "'SPY": [
          -1,
          618
        ],
        "'PARENSPACE": [
          -1,
          618
        ],
        "'INT": [
          -1,
          618
        ],
        "'LONG": [
          -1,
          618
        ],
        "'DOUBLE": [
          -1,
          618
        ],
        "'FLOAT": [
          -1,
          618
        ],
        "'BOOLEAN": [
          -1,
          618
        ],
        "'VOID": [
          -1,
          618
        ],
        "'DATA": [
          -1,
          618
        ],
        "'IF": [
          -1,
          618
        ],
        "'FOR": [
          -1,
          618
        ],
        "'RETURN": [
          -1,
          618
        ],
        "'VAR": [
          -1,
          618
        ],
        "'ATCHECK": [
          -1,
          618
        ],
        "'ASSERTEQUALS": [
          -1,
          618
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          618
        ],
        "'ASSERTTRUE": [
          -1,
          618
        ],
        "'ASSERTFALSE": [
          -1,
          618
        ],
        "'ASSERTSATISFIES": [
          -1,
          618
        ],
        "'ASSERTRAISES": [
          -1,
          618
        ],
        "'SWITCH": [
          -1,
          618
        ],
        "'YIELD": [
          -1,
          618
        ],
        "'DASH": [
          -1,
          618
        ],
        "'BANG": [
          -1,
          618
        ],
        "'LBRACK": [
          -1,
          618
        ],
        "'NUMBER": [
          -1,
          618
        ],
        "'TRUE": [
          -1,
          618
        ],
        "'FALSE": [
          -1,
          618
        ],
        "'NULL": [
          -1,
          618
        ],
        "'PARENAFTERBRACE": [
          -1,
          618
        ],
        "'ASK": [
          -1,
          618
        ],
        "'NEW": [
          -1,
          618
        ]
      },
      {
        "'COMMA": [
          451
        ],
        "case-branch_A0_I3_I1": [
          452
        ],
        "'RPAREN": [
          -1,
          620
        ]
      },
      {
        "'COLON": [
          453
        ]
      },
      {
        "'NAME": [
          87
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'PARENSPACE": [
          107
        ],
        "full-expr": [
          454
        ],
        "switch-expr": [
          34
        ],
        "'SWITCH": [
          35
        ],
        "lambda-expr": [
          36
        ],
        "binop-expr": [
          37
        ],
        "unop-expr": [
          38
        ],
        "'DASH": [
          39
        ],
        "'BANG": [
          40
        ],
        "app-or-access": [
          41
        ],
        "'LBRACK": [
          42
        ],
        "prim-expr": [
          43
        ],
        "'NUMBER": [
          44
        ],
        "'TRUE": [
          45
        ],
        "'FALSE": [
          46
        ],
        "'NULL": [
          47
        ],
        "'PARENAFTERBRACE": [
          48
        ],
        "construct-expr": [
          49
        ],
        "map-for-expr": [
          50
        ],
        "new-expr": [
          51
        ],
        "ask-expr": [
          52
        ],
        "'ASK": [
          53
        ],
        "'NEW": [
          54
        ]
      },
      {
        "'NAME": [
          455
        ]
      },
      {
        "'RPAREN": [
          -1,
          622
        ],
        "'COMMA": [
          -1,
          622
        ]
      },
      {
        "switch-body": [
          456
        ],
        "switch-body_I0*": [
          414
        ],
        "'NAME": [
          -1,
          526
        ],
        "'PARENNOSPACE": [
          -1,
          526
        ],
        "'STRING": [
          -1,
          526
        ],
        "'SPY": [
          -1,
          526
        ],
        "'PARENSPACE": [
          -1,
          526
        ],
        "'INT": [
          -1,
          526
        ],
        "'LONG": [
          -1,
          526
        ],
        "'DOUBLE": [
          -1,
          526
        ],
        "'FLOAT": [
          -1,
          526
        ],
        "'BOOLEAN": [
          -1,
          526
        ],
        "'VOID": [
          -1,
          526
        ],
        "'DATA": [
          -1,
          526
        ],
        "'IF": [
          -1,
          526
        ],
        "'FOR": [
          -1,
          526
        ],
        "'RETURN": [
          -1,
          526
        ],
        "'VAR": [
          -1,
          526
        ],
        "'ATCHECK": [
          -1,
          526
        ],
        "'SWITCH": [
          -1,
          526
        ],
        "'YIELD": [
          -1,
          526
        ],
        "'DASH": [
          -1,
          526
        ],
        "'BANG": [
          -1,
          526
        ],
        "'LBRACK": [
          -1,
          526
        ],
        "'NUMBER": [
          -1,
          526
        ],
        "'TRUE": [
          -1,
          526
        ],
        "'FALSE": [
          -1,
          526
        ],
        "'NULL": [
          -1,
          526
        ],
        "'PARENAFTERBRACE": [
          -1,
          526
        ],
        "'ASK": [
          -1,
          526
        ],
        "'NEW": [
          -1,
          526
        ]
      },
      {
        "'RPAREN": [
          457
        ]
      },
      {
        "'RPAREN": [
          -1,
          624
        ],
        "'COMMA": [
          -1,
          624
        ]
      },
      {
        "'RBRACE": [
          -1,
          626
        ],
        "'CASE": [
          -1,
          626
        ],
        "'DEFAULT": [
          -1,
          626
        ]
      },
      {
        "block": [
          458
        ],
        "'LBRACE": [
          275
        ]
      },
      {
        "'NAME": [
          -1,
          628
        ],
        "'PARENNOSPACE": [
          -1,
          628
        ],
        "'STRING": [
          -1,
          628
        ],
        "'RBRACE": [
          -1,
          628
        ],
        "'SPY": [
          -1,
          628
        ],
        "'PARENSPACE": [
          -1,
          628
        ],
        "'INT": [
          -1,
          628
        ],
        "'LONG": [
          -1,
          628
        ],
        "'DOUBLE": [
          -1,
          628
        ],
        "'FLOAT": [
          -1,
          628
        ],
        "'BOOLEAN": [
          -1,
          628
        ],
        "'VOID": [
          -1,
          628
        ],
        "'DATA": [
          -1,
          628
        ],
        "'IF": [
          -1,
          628
        ],
        "'ELSE": [
          -1,
          628
        ],
        "'FOR": [
          -1,
          628
        ],
        "'RETURN": [
          -1,
          628
        ],
        "'VAR": [
          -1,
          628
        ],
        "'ATCHECK": [
          -1,
          628
        ],
        "'ASSERTEQUALS": [
          -1,
          628
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          628
        ],
        "'ASSERTTRUE": [
          -1,
          628
        ],
        "'ASSERTFALSE": [
          -1,
          628
        ],
        "'ASSERTSATISFIES": [
          -1,
          628
        ],
        "'ASSERTRAISES": [
          -1,
          628
        ],
        "'SWITCH": [
          -1,
          628
        ],
        "'YIELD": [
          -1,
          628
        ],
        "'DASH": [
          -1,
          628
        ],
        "'BANG": [
          -1,
          628
        ],
        "'LBRACK": [
          -1,
          628
        ],
        "'NUMBER": [
          -1,
          628
        ],
        "'TRUE": [
          -1,
          628
        ],
        "'FALSE": [
          -1,
          628
        ],
        "'NULL": [
          -1,
          628
        ],
        "'PARENAFTERBRACE": [
          -1,
          628
        ],
        "'ASK": [
          -1,
          628
        ],
        "'NEW": [
          -1,
          628
        ]
      }
    ],
    "I": {
      "ε": 0,
      "program": 1,
      "prelude": 2,
      "prelude_I0*": 3,
      "top-block": 4,
      "top-block_I0*": 5,
      "block_I1*": 6,
      "spy-stmt_I3*": 7,
      "fun-decl_I3?": 8,
      "fun-decl_I3_I1*": 9,
      "fun-decl_I6?": 10,
      "where-clause_I2*": 11,
      "type-ann_A6_I1?": 12,
      "type-ann_A6_I1_I2*": 13,
      "type-ann_A7_I1?": 14,
      "type-ann_A7_I1_I1*": 15,
      "data-decl_I4*": 16,
      "data-decl_I5?": 17,
      "variant-decl_A0_I2?": 18,
      "variant-decl_A0_I2_I1*": 19,
      "if-stmt_I5*": 20,
      "if-stmt_I6?": 21,
      "let-stmt_I4?": 22,
      "var-stmt_I5?": 23,
      "assign-stmt_I3?": 24,
      "expr-stmt_I1?": 25,
      "check-block_A0_I6*": 26,
      "check-block_A1_I2*": 27,
      "assert-stmt_A0_I6?": 28,
      "assert-stmt_A1_I6?": 29,
      "assert-stmt_A2_I4?": 30,
      "assert-stmt_A3_I4?": 31,
      "assert-stmt_A4_I6?": 32,
      "assert-stmt_A5_I6?": 33,
      "assert-stmt_A6_I3?": 34,
      "assert-stmt_A7_I3?": 35,
      "assert-stmt_A8_I3?": 36,
      "assert-stmt_A9_I3?": 37,
      "switch-expr_I5*": 38,
      "switch-expr_I6?": 39,
      "case-branch_A0_I3?": 40,
      "case-branch_A0_I3_I1*": 41,
      "switch-body_I0*": 42,
      "yield-stmt_I2?": 43,
      "lambda-expr_A0_I1?": 44,
      "lambda-expr_A0_I1_I1*": 45,
      "lambda-expr_A1_I1?": 46,
      "lambda-expr_A1_I1_I1*": 47,
      "binop-expr_I1*": 48,
      "app-or-access_A0_I2?": 49,
      "app-or-access_A0_I2_I1*": 50,
      "ask-expr_A0_I4*": 51,
      "ask-expr_A1_I4*": 52,
      "new-expr_I3?": 53,
      "new-expr_I3_I1*": 54,
      "construct-expr_A0_I3?": 55,
      "construct-expr_A0_I3_I1*": 56,
      "START": 57,
      "if-stmt_I5*,if-stmt_I6?": 58
    },
    "eSPPFs": [
      {
        "label": "EPSILON"
      },
      {
        "label": "program",
        "kids": [
          2,
          4
        ],
        "rule": 0
      },
      {
        "label": "prelude",
        "kids": [
          3
        ],
        "rule": 1
      },
      {
        "label": "prelude_I0*",
        "kids": [],
        "rule": 2
      },
      {
        "label": "top-block",
        "kids": [
          5
        ],
        "rule": 12
      },
      {
        "label": "top-block_I0*",
        "kids": [],
        "rule": 13
      },
      {
        "label": "block_I1*",
        "kids": [],
        "rule": 24
      },
      {
        "label": "spy-stmt_I3*",
        "kids": [],
        "rule": 40
      },
      {
        "label": "fun-decl_I3?",
        "kids": [],
        "rule": 44
      },
      {
        "label": "fun-decl_I3_I1*",
        "kids": [],
        "rule": 47
      },
      {
        "label": "fun-decl_I6?",
        "kids": [],
        "rule": 50
      },
      {
        "label": "where-clause_I2*",
        "kids": [],
        "rule": 55
      },
      {
        "label": "type-ann_A6_I1?",
        "kids": [],
        "rule": 66
      },
      {
        "label": "type-ann_A6_I1_I2*",
        "kids": [],
        "rule": 69
      },
      {
        "label": "type-ann_A7_I1?",
        "kids": [],
        "rule": 73
      },
      {
        "label": "type-ann_A7_I1_I1*",
        "kids": [],
        "rule": 76
      },
      {
        "label": "data-decl_I4*",
        "kids": [],
        "rule": 80
      },
      {
        "label": "data-decl_I5?",
        "kids": [],
        "rule": 83
      },
      {
        "label": "variant-decl_A0_I2?",
        "kids": [],
        "rule": 87
      },
      {
        "label": "variant-decl_A0_I2_I1*",
        "kids": [],
        "rule": 90
      },
      {
        "label": "if-stmt_I5*",
        "kids": [],
        "rule": 96
      },
      {
        "label": "if-stmt_I6?",
        "kids": [],
        "rule": 99
      },
      {
        "label": "let-stmt_I4?",
        "kids": [],
        "rule": 106
      },
      {
        "label": "var-stmt_I5?",
        "kids": [],
        "rule": 110
      },
      {
        "label": "assign-stmt_I3?",
        "kids": [],
        "rule": 114
      },
      {
        "label": "expr-stmt_I1?",
        "kids": [],
        "rule": 118
      },
      {
        "label": "check-block_A0_I6*",
        "kids": [],
        "rule": 122
      },
      {
        "label": "check-block_A1_I2*",
        "kids": [],
        "rule": 127
      },
      {
        "label": "assert-stmt_A0_I6?",
        "kids": [],
        "rule": 132
      },
      {
        "label": "assert-stmt_A1_I6?",
        "kids": [],
        "rule": 136
      },
      {
        "label": "assert-stmt_A2_I4?",
        "kids": [],
        "rule": 140
      },
      {
        "label": "assert-stmt_A3_I4?",
        "kids": [],
        "rule": 144
      },
      {
        "label": "assert-stmt_A4_I6?",
        "kids": [],
        "rule": 148
      },
      {
        "label": "assert-stmt_A5_I6?",
        "kids": [],
        "rule": 152
      },
      {
        "label": "assert-stmt_A6_I3?",
        "kids": [],
        "rule": 156
      },
      {
        "label": "assert-stmt_A7_I3?",
        "kids": [],
        "rule": 160
      },
      {
        "label": "assert-stmt_A8_I3?",
        "kids": [],
        "rule": 164
      },
      {
        "label": "assert-stmt_A9_I3?",
        "kids": [],
        "rule": 168
      },
      {
        "label": "switch-expr_I5*",
        "kids": [],
        "rule": 172
      },
      {
        "label": "switch-expr_I6?",
        "kids": [],
        "rule": 175
      },
      {
        "label": "case-branch_A0_I3?",
        "kids": [],
        "rule": 179
      },
      {
        "label": "case-branch_A0_I3_I1*",
        "kids": [],
        "rule": 182
      },
      {
        "label": "switch-body_I0*",
        "kids": [],
        "rule": 188
      },
      {
        "label": "yield-stmt_I2?",
        "kids": [],
        "rule": 192
      },
      {
        "label": "lambda-expr_A0_I1?",
        "kids": [],
        "rule": 196
      },
      {
        "label": "lambda-expr_A0_I1_I1*",
        "kids": [],
        "rule": 199
      },
      {
        "label": "lambda-expr_A1_I1?",
        "kids": [],
        "rule": 203
      },
      {
        "label": "lambda-expr_A1_I1_I1*",
        "kids": [],
        "rule": 206
      },
      {
        "label": "binop-expr_I1*",
        "kids": [],
        "rule": 214
      },
      {
        "label": "app-or-access_A0_I2?",
        "kids": [],
        "rule": 234
      },
      {
        "label": "app-or-access_A0_I2_I1*",
        "kids": [],
        "rule": 237
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 257
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 261
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 267
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 270
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 274
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 277
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 282
      },
      {
        "label": "if-stmt_I5*,if-stmt_I6?",
        "kids": [
          20,
          21
        ]
      }
    ]
  };
  return { JavaGrammar: Grammar.fromSerializable(g_json) };
});
