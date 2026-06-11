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
          "@rec-stmt"
        ]
      },
      "22": {
        "name": "top-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "23": {
        "name": "top-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "24": {
        "name": "block",
        "symbols": [
          "'LBRACE",
          "@block_I1*",
          "'RBRACE"
        ]
      },
      "25": {
        "name": "block_I1*",
        "symbols": []
      },
      "26": {
        "name": "block_I1*",
        "symbols": [
          "@block_I1*",
          "@block_I1"
        ]
      },
      "27": {
        "name": "block_I1",
        "symbols": [
          "@block-stmt"
        ]
      },
      "28": {
        "name": "block-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "29": {
        "name": "block-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "30": {
        "name": "block-stmt",
        "symbols": [
          "@if-stmt"
        ]
      },
      "31": {
        "name": "block-stmt",
        "symbols": [
          "@for-stmt"
        ]
      },
      "32": {
        "name": "block-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "33": {
        "name": "block-stmt",
        "symbols": [
          "@return-stmt"
        ]
      },
      "34": {
        "name": "block-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "35": {
        "name": "block-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "36": {
        "name": "block-stmt",
        "symbols": [
          "@rec-stmt"
        ]
      },
      "37": {
        "name": "block-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "38": {
        "name": "block-stmt",
        "symbols": [
          "@yield-stmt"
        ]
      },
      "39": {
        "name": "block-stmt",
        "symbols": [
          "@spy-stmt"
        ]
      },
      "40": {
        "name": "block-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "41": {
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
      "42": {
        "name": "spy-stmt_I3*",
        "symbols": []
      },
      "43": {
        "name": "spy-stmt_I3*",
        "symbols": [
          "@spy-stmt_I3*",
          "@spy-stmt_I3"
        ]
      },
      "44": {
        "name": "spy-stmt_I3",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "45": {
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
      "46": {
        "name": "fun-decl_I3?",
        "symbols": []
      },
      "47": {
        "name": "fun-decl_I3?",
        "symbols": [
          "@fun-decl_I3"
        ]
      },
      "48": {
        "name": "fun-decl_I3",
        "symbols": [
          "@param",
          "@fun-decl_I3_I1*"
        ]
      },
      "49": {
        "name": "fun-decl_I3_I1*",
        "symbols": []
      },
      "50": {
        "name": "fun-decl_I3_I1*",
        "symbols": [
          "@fun-decl_I3_I1*",
          "@fun-decl_I3_I1"
        ]
      },
      "51": {
        "name": "fun-decl_I3_I1",
        "symbols": [
          "'COMMA",
          "@param"
        ]
      },
      "52": {
        "name": "fun-decl_I6?",
        "symbols": []
      },
      "53": {
        "name": "fun-decl_I6?",
        "symbols": [
          "@fun-decl_I6"
        ]
      },
      "54": {
        "name": "fun-decl_I6",
        "symbols": [
          "@where-clause"
        ]
      },
      "55": {
        "name": "param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "56": {
        "name": "where-clause",
        "symbols": [
          "'WHERE",
          "'LBRACE",
          "@where-clause_I2*",
          "'RBRACE"
        ]
      },
      "57": {
        "name": "where-clause_I2*",
        "symbols": []
      },
      "58": {
        "name": "where-clause_I2*",
        "symbols": [
          "@where-clause_I2*",
          "@where-clause_I2"
        ]
      },
      "59": {
        "name": "where-clause_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "60": {
        "name": "where-clause_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "61": {
        "name": "type-ann",
        "symbols": [
          "'INT"
        ]
      },
      "62": {
        "name": "type-ann",
        "symbols": [
          "'LONG"
        ]
      },
      "63": {
        "name": "type-ann",
        "symbols": [
          "'DOUBLE"
        ]
      },
      "64": {
        "name": "type-ann",
        "symbols": [
          "'FLOAT"
        ]
      },
      "65": {
        "name": "type-ann",
        "symbols": [
          "'BOOLEAN"
        ]
      },
      "66": {
        "name": "type-ann",
        "symbols": [
          "'VOID"
        ]
      },
      "67": {
        "name": "type-ann",
        "symbols": [
          "'NAME",
          "@type-ann_A6_I1?"
        ]
      },
      "68": {
        "name": "type-ann_A6_I1?",
        "symbols": []
      },
      "69": {
        "name": "type-ann_A6_I1?",
        "symbols": [
          "@type-ann_A6_I1"
        ]
      },
      "70": {
        "name": "type-ann_A6_I1",
        "symbols": [
          "'LT",
          "@type-ann",
          "@type-ann_A6_I1_I2*",
          "'GT"
        ]
      },
      "71": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": []
      },
      "72": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": [
          "@type-ann_A6_I1_I2*",
          "@type-ann_A6_I1_I2"
        ]
      },
      "73": {
        "name": "type-ann_A6_I1_I2",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "74": {
        "name": "type-ann",
        "symbols": [
          "'PARENSPACE",
          "@type-ann_A7_I1?",
          "'THINARROW",
          "@type-ann",
          "'RPAREN"
        ]
      },
      "75": {
        "name": "type-ann_A7_I1?",
        "symbols": []
      },
      "76": {
        "name": "type-ann_A7_I1?",
        "symbols": [
          "@type-ann_A7_I1"
        ]
      },
      "77": {
        "name": "type-ann_A7_I1",
        "symbols": [
          "@type-ann",
          "@type-ann_A7_I1_I1*"
        ]
      },
      "78": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": []
      },
      "79": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": [
          "@type-ann_A7_I1_I1*",
          "@type-ann_A7_I1_I1"
        ]
      },
      "80": {
        "name": "type-ann_A7_I1_I1",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "81": {
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
      "82": {
        "name": "data-decl_I4*",
        "symbols": []
      },
      "83": {
        "name": "data-decl_I4*",
        "symbols": [
          "@data-decl_I4*",
          "@data-decl_I4"
        ]
      },
      "84": {
        "name": "data-decl_I4",
        "symbols": [
          "'SEMI",
          "@variant-decl"
        ]
      },
      "85": {
        "name": "data-decl_I5?",
        "symbols": []
      },
      "86": {
        "name": "data-decl_I5?",
        "symbols": [
          "@data-decl_I5"
        ]
      },
      "87": {
        "name": "data-decl_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "88": {
        "name": "variant-decl",
        "symbols": [
          "'NAME",
          "'PARENNOSPACE",
          "@variant-decl_A0_I2?",
          "'RPAREN"
        ]
      },
      "89": {
        "name": "variant-decl_A0_I2?",
        "symbols": []
      },
      "90": {
        "name": "variant-decl_A0_I2?",
        "symbols": [
          "@variant-decl_A0_I2"
        ]
      },
      "91": {
        "name": "variant-decl_A0_I2",
        "symbols": [
          "@variant-member",
          "@variant-decl_A0_I2_I1*"
        ]
      },
      "92": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": []
      },
      "93": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": [
          "@variant-decl_A0_I2_I1*",
          "@variant-decl_A0_I2_I1"
        ]
      },
      "94": {
        "name": "variant-decl_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@variant-member"
        ]
      },
      "95": {
        "name": "variant-decl",
        "symbols": [
          "'NAME"
        ]
      },
      "96": {
        "name": "variant-member",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "97": {
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
      "98": {
        "name": "if-stmt_I5*",
        "symbols": []
      },
      "99": {
        "name": "if-stmt_I5*",
        "symbols": [
          "@if-stmt_I5*",
          "@if-stmt_I5"
        ]
      },
      "100": {
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
      "101": {
        "name": "if-stmt_I6?",
        "symbols": []
      },
      "102": {
        "name": "if-stmt_I6?",
        "symbols": [
          "@if-stmt_I6"
        ]
      },
      "103": {
        "name": "if-stmt_I6",
        "symbols": [
          "'ELSE",
          "@block"
        ]
      },
      "104": {
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
      "105": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "@full-expr",
          "'SEMI"
        ]
      },
      "106": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "'SEMI"
        ]
      },
      "107": {
        "name": "let-stmt",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@let-stmt_I4?"
        ]
      },
      "108": {
        "name": "let-stmt_I4?",
        "symbols": []
      },
      "109": {
        "name": "let-stmt_I4?",
        "symbols": [
          "@let-stmt_I4"
        ]
      },
      "110": {
        "name": "let-stmt_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "111": {
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
      "112": {
        "name": "var-stmt_I5?",
        "symbols": []
      },
      "113": {
        "name": "var-stmt_I5?",
        "symbols": [
          "@var-stmt_I5"
        ]
      },
      "114": {
        "name": "var-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "115": {
        "name": "rec-stmt",
        "symbols": [
          "'REC",
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@rec-stmt_I5?"
        ]
      },
      "116": {
        "name": "rec-stmt_I5?",
        "symbols": []
      },
      "117": {
        "name": "rec-stmt_I5?",
        "symbols": [
          "@rec-stmt_I5"
        ]
      },
      "118": {
        "name": "rec-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "119": {
        "name": "assign-stmt",
        "symbols": [
          "'NAME",
          "'COLONEQUALS",
          "@full-expr",
          "@assign-stmt_I3?"
        ]
      },
      "120": {
        "name": "assign-stmt_I3?",
        "symbols": []
      },
      "121": {
        "name": "assign-stmt_I3?",
        "symbols": [
          "@assign-stmt_I3"
        ]
      },
      "122": {
        "name": "assign-stmt_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "123": {
        "name": "expr-stmt",
        "symbols": [
          "@full-expr",
          "@expr-stmt_I1?"
        ]
      },
      "124": {
        "name": "expr-stmt_I1?",
        "symbols": []
      },
      "125": {
        "name": "expr-stmt_I1?",
        "symbols": [
          "@expr-stmt_I1"
        ]
      },
      "126": {
        "name": "expr-stmt_I1",
        "symbols": [
          "'SEMI"
        ]
      },
      "127": {
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
      "128": {
        "name": "check-block_A0_I6*",
        "symbols": []
      },
      "129": {
        "name": "check-block_A0_I6*",
        "symbols": [
          "@check-block_A0_I6*",
          "@check-block_A0_I6"
        ]
      },
      "130": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "131": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "132": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'LBRACE",
          "@check-block_A1_I2*",
          "'RBRACE"
        ]
      },
      "133": {
        "name": "check-block_A1_I2*",
        "symbols": []
      },
      "134": {
        "name": "check-block_A1_I2*",
        "symbols": [
          "@check-block_A1_I2*",
          "@check-block_A1_I2"
        ]
      },
      "135": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "136": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "137": {
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
      "138": {
        "name": "assert-stmt_A0_I6?",
        "symbols": []
      },
      "139": {
        "name": "assert-stmt_A0_I6?",
        "symbols": [
          "@assert-stmt_A0_I6"
        ]
      },
      "140": {
        "name": "assert-stmt_A0_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "141": {
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
      "142": {
        "name": "assert-stmt_A1_I6?",
        "symbols": []
      },
      "143": {
        "name": "assert-stmt_A1_I6?",
        "symbols": [
          "@assert-stmt_A1_I6"
        ]
      },
      "144": {
        "name": "assert-stmt_A1_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "145": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTTRUE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A2_I4?"
        ]
      },
      "146": {
        "name": "assert-stmt_A2_I4?",
        "symbols": []
      },
      "147": {
        "name": "assert-stmt_A2_I4?",
        "symbols": [
          "@assert-stmt_A2_I4"
        ]
      },
      "148": {
        "name": "assert-stmt_A2_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "149": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTFALSE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A3_I4?"
        ]
      },
      "150": {
        "name": "assert-stmt_A3_I4?",
        "symbols": []
      },
      "151": {
        "name": "assert-stmt_A3_I4?",
        "symbols": [
          "@assert-stmt_A3_I4"
        ]
      },
      "152": {
        "name": "assert-stmt_A3_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "153": {
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
      "154": {
        "name": "assert-stmt_A4_I6?",
        "symbols": []
      },
      "155": {
        "name": "assert-stmt_A4_I6?",
        "symbols": [
          "@assert-stmt_A4_I6"
        ]
      },
      "156": {
        "name": "assert-stmt_A4_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "157": {
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
      "158": {
        "name": "assert-stmt_A5_I6?",
        "symbols": []
      },
      "159": {
        "name": "assert-stmt_A5_I6?",
        "symbols": [
          "@assert-stmt_A5_I6"
        ]
      },
      "160": {
        "name": "assert-stmt_A5_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "161": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'IS",
          "@full-expr",
          "@assert-stmt_A6_I3?"
        ]
      },
      "162": {
        "name": "assert-stmt_A6_I3?",
        "symbols": []
      },
      "163": {
        "name": "assert-stmt_A6_I3?",
        "symbols": [
          "@assert-stmt_A6_I3"
        ]
      },
      "164": {
        "name": "assert-stmt_A6_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "165": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'ISNOT",
          "@full-expr",
          "@assert-stmt_A7_I3?"
        ]
      },
      "166": {
        "name": "assert-stmt_A7_I3?",
        "symbols": []
      },
      "167": {
        "name": "assert-stmt_A7_I3?",
        "symbols": [
          "@assert-stmt_A7_I3"
        ]
      },
      "168": {
        "name": "assert-stmt_A7_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "169": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'SATISFIES",
          "@full-expr",
          "@assert-stmt_A8_I3?"
        ]
      },
      "170": {
        "name": "assert-stmt_A8_I3?",
        "symbols": []
      },
      "171": {
        "name": "assert-stmt_A8_I3?",
        "symbols": [
          "@assert-stmt_A8_I3"
        ]
      },
      "172": {
        "name": "assert-stmt_A8_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "173": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'RAISES",
          "@full-expr",
          "@assert-stmt_A9_I3?"
        ]
      },
      "174": {
        "name": "assert-stmt_A9_I3?",
        "symbols": []
      },
      "175": {
        "name": "assert-stmt_A9_I3?",
        "symbols": [
          "@assert-stmt_A9_I3"
        ]
      },
      "176": {
        "name": "assert-stmt_A9_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "177": {
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
      "178": {
        "name": "switch-expr_I5*",
        "symbols": []
      },
      "179": {
        "name": "switch-expr_I5*",
        "symbols": [
          "@switch-expr_I5*",
          "@switch-expr_I5"
        ]
      },
      "180": {
        "name": "switch-expr_I5",
        "symbols": [
          "@case-branch"
        ]
      },
      "181": {
        "name": "switch-expr_I6?",
        "symbols": []
      },
      "182": {
        "name": "switch-expr_I6?",
        "symbols": [
          "@switch-expr_I6"
        ]
      },
      "183": {
        "name": "switch-expr_I6",
        "symbols": [
          "@default-branch"
        ]
      },
      "184": {
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
      "185": {
        "name": "case-branch_A0_I3?",
        "symbols": []
      },
      "186": {
        "name": "case-branch_A0_I3?",
        "symbols": [
          "@case-branch_A0_I3"
        ]
      },
      "187": {
        "name": "case-branch_A0_I3",
        "symbols": [
          "'NAME",
          "@case-branch_A0_I3_I1*"
        ]
      },
      "188": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": []
      },
      "189": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": [
          "@case-branch_A0_I3_I1*",
          "@case-branch_A0_I3_I1"
        ]
      },
      "190": {
        "name": "case-branch_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "191": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'COLON",
          "@switch-body"
        ]
      },
      "192": {
        "name": "default-branch",
        "symbols": [
          "'DEFAULT",
          "'COLON",
          "@switch-body"
        ]
      },
      "193": {
        "name": "switch-body",
        "symbols": [
          "@switch-body_I0*",
          "@yield-stmt"
        ]
      },
      "194": {
        "name": "switch-body_I0*",
        "symbols": []
      },
      "195": {
        "name": "switch-body_I0*",
        "symbols": [
          "@switch-body_I0*",
          "@switch-body_I0"
        ]
      },
      "196": {
        "name": "switch-body_I0",
        "symbols": [
          "@block-stmt"
        ]
      },
      "197": {
        "name": "yield-stmt",
        "symbols": [
          "'YIELD",
          "@full-expr",
          "@yield-stmt_I2?"
        ]
      },
      "198": {
        "name": "yield-stmt_I2?",
        "symbols": []
      },
      "199": {
        "name": "yield-stmt_I2?",
        "symbols": [
          "@yield-stmt_I2"
        ]
      },
      "200": {
        "name": "yield-stmt_I2",
        "symbols": [
          "'SEMI"
        ]
      },
      "201": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENSPACE",
          "@lambda-expr_A0_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "202": {
        "name": "lambda-expr_A0_I1?",
        "symbols": []
      },
      "203": {
        "name": "lambda-expr_A0_I1?",
        "symbols": [
          "@lambda-expr_A0_I1"
        ]
      },
      "204": {
        "name": "lambda-expr_A0_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A0_I1_I1*"
        ]
      },
      "205": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": []
      },
      "206": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": [
          "@lambda-expr_A0_I1_I1*",
          "@lambda-expr_A0_I1_I1"
        ]
      },
      "207": {
        "name": "lambda-expr_A0_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "208": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENNOSPACE",
          "@lambda-expr_A1_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "209": {
        "name": "lambda-expr_A1_I1?",
        "symbols": []
      },
      "210": {
        "name": "lambda-expr_A1_I1?",
        "symbols": [
          "@lambda-expr_A1_I1"
        ]
      },
      "211": {
        "name": "lambda-expr_A1_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A1_I1_I1*"
        ]
      },
      "212": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": []
      },
      "213": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": [
          "@lambda-expr_A1_I1_I1*",
          "@lambda-expr_A1_I1_I1"
        ]
      },
      "214": {
        "name": "lambda-expr_A1_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "215": {
        "name": "lambda-param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "216": {
        "name": "lambda-param",
        "symbols": [
          "'NAME"
        ]
      },
      "217": {
        "name": "full-expr",
        "symbols": [
          "@lambda-expr"
        ]
      },
      "218": {
        "name": "full-expr",
        "symbols": [
          "@binop-expr"
        ]
      },
      "219": {
        "name": "binop-expr",
        "symbols": [
          "@unop-expr",
          "@binop-expr_I1*"
        ]
      },
      "220": {
        "name": "binop-expr_I1*",
        "symbols": []
      },
      "221": {
        "name": "binop-expr_I1*",
        "symbols": [
          "@binop-expr_I1*",
          "@binop-expr_I1"
        ]
      },
      "222": {
        "name": "binop-expr_I1",
        "symbols": [
          "@binop",
          "@unop-expr"
        ]
      },
      "223": {
        "name": "binop",
        "symbols": [
          "'PLUS"
        ]
      },
      "224": {
        "name": "binop",
        "symbols": [
          "'DASH"
        ]
      },
      "225": {
        "name": "binop",
        "symbols": [
          "'TIMES"
        ]
      },
      "226": {
        "name": "binop",
        "symbols": [
          "'SLASH"
        ]
      },
      "227": {
        "name": "binop",
        "symbols": [
          "'PERCENT"
        ]
      },
      "228": {
        "name": "binop",
        "symbols": [
          "'EQUALEQUAL"
        ]
      },
      "229": {
        "name": "binop",
        "symbols": [
          "'NEQ"
        ]
      },
      "230": {
        "name": "binop",
        "symbols": [
          "'LEQ"
        ]
      },
      "231": {
        "name": "binop",
        "symbols": [
          "'GEQ"
        ]
      },
      "232": {
        "name": "binop",
        "symbols": [
          "'LT"
        ]
      },
      "233": {
        "name": "binop",
        "symbols": [
          "'GT"
        ]
      },
      "234": {
        "name": "binop",
        "symbols": [
          "'AND"
        ]
      },
      "235": {
        "name": "binop",
        "symbols": [
          "'OR"
        ]
      },
      "236": {
        "name": "unop-expr",
        "symbols": [
          "'BANG",
          "@unop-expr"
        ]
      },
      "237": {
        "name": "unop-expr",
        "symbols": [
          "'DASH",
          "@unop-expr"
        ]
      },
      "238": {
        "name": "unop-expr",
        "symbols": [
          "@app-or-access"
        ]
      },
      "239": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'PARENNOSPACE",
          "@app-or-access_A0_I2?",
          "'RPAREN"
        ]
      },
      "240": {
        "name": "app-or-access_A0_I2?",
        "symbols": []
      },
      "241": {
        "name": "app-or-access_A0_I2?",
        "symbols": [
          "@app-or-access_A0_I2"
        ]
      },
      "242": {
        "name": "app-or-access_A0_I2",
        "symbols": [
          "@full-expr",
          "@app-or-access_A0_I2_I1*"
        ]
      },
      "243": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": []
      },
      "244": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": [
          "@app-or-access_A0_I2_I1*",
          "@app-or-access_A0_I2_I1"
        ]
      },
      "245": {
        "name": "app-or-access_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "246": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'DOT",
          "'NAME"
        ]
      },
      "247": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'LBRACK",
          "@binop-expr",
          "'RBRACK"
        ]
      },
      "248": {
        "name": "app-or-access",
        "symbols": [
          "@prim-expr"
        ]
      },
      "249": {
        "name": "prim-expr",
        "symbols": [
          "'NUMBER"
        ]
      },
      "250": {
        "name": "prim-expr",
        "symbols": [
          "'STRING"
        ]
      },
      "251": {
        "name": "prim-expr",
        "symbols": [
          "'TRUE"
        ]
      },
      "252": {
        "name": "prim-expr",
        "symbols": [
          "'FALSE"
        ]
      },
      "253": {
        "name": "prim-expr",
        "symbols": [
          "'NULL"
        ]
      },
      "254": {
        "name": "prim-expr",
        "symbols": [
          "'NAME"
        ]
      },
      "255": {
        "name": "prim-expr",
        "symbols": [
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN"
        ]
      },
      "256": {
        "name": "prim-expr",
        "symbols": [
          "'PARENAFTERBRACE",
          "@full-expr",
          "'RPAREN"
        ]
      },
      "257": {
        "name": "prim-expr",
        "symbols": [
          "@switch-expr"
        ]
      },
      "258": {
        "name": "prim-expr",
        "symbols": [
          "@construct-expr"
        ]
      },
      "259": {
        "name": "prim-expr",
        "symbols": [
          "@map-for-expr"
        ]
      },
      "260": {
        "name": "prim-expr",
        "symbols": [
          "@new-expr"
        ]
      },
      "261": {
        "name": "prim-expr",
        "symbols": [
          "@ask-expr"
        ]
      },
      "262": {
        "name": "prim-expr",
        "symbols": [
          "@table-expr"
        ]
      },
      "263": {
        "name": "prim-expr",
        "symbols": [
          "@record-expr"
        ]
      },
      "264": {
        "name": "prim-expr",
        "symbols": [
          "@block-expr"
        ]
      },
      "265": {
        "name": "prim-expr",
        "symbols": [
          "@sieve-expr"
        ]
      },
      "266": {
        "name": "sieve-expr",
        "symbols": [
          "'SIEVE",
          "@full-expr",
          "'USING",
          "'NAME",
          "@sieve-expr_I4*",
          "'LBRACE",
          "@sieve-expr_I6*",
          "'RBRACE"
        ]
      },
      "267": {
        "name": "sieve-expr_I4*",
        "symbols": []
      },
      "268": {
        "name": "sieve-expr_I4*",
        "symbols": [
          "@sieve-expr_I4*",
          "@sieve-expr_I4"
        ]
      },
      "269": {
        "name": "sieve-expr_I4",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "270": {
        "name": "sieve-expr_I6*",
        "symbols": []
      },
      "271": {
        "name": "sieve-expr_I6*",
        "symbols": [
          "@sieve-expr_I6*",
          "@sieve-expr_I6"
        ]
      },
      "272": {
        "name": "sieve-expr_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "273": {
        "name": "block-expr",
        "symbols": [
          "'BLOCK",
          "'LBRACE",
          "@block-expr_I2*",
          "'RBRACE"
        ]
      },
      "274": {
        "name": "block-expr_I2*",
        "symbols": []
      },
      "275": {
        "name": "block-expr_I2*",
        "symbols": [
          "@block-expr_I2*",
          "@block-expr_I2"
        ]
      },
      "276": {
        "name": "block-expr_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "277": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "@record-field",
          "@record-expr_A0_I2*",
          "'RBRACE"
        ]
      },
      "278": {
        "name": "record-expr_A0_I2*",
        "symbols": []
      },
      "279": {
        "name": "record-expr_A0_I2*",
        "symbols": [
          "@record-expr_A0_I2*",
          "@record-expr_A0_I2"
        ]
      },
      "280": {
        "name": "record-expr_A0_I2",
        "symbols": [
          "'COMMA",
          "@record-field"
        ]
      },
      "281": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "282": {
        "name": "record-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "283": {
        "name": "table-expr",
        "symbols": [
          "'TABLE",
          "'LBRACE",
          "@table-header",
          "@table-expr_I3*",
          "'SEMI",
          "@table-expr_I5*",
          "'RBRACE"
        ]
      },
      "284": {
        "name": "table-expr_I3*",
        "symbols": []
      },
      "285": {
        "name": "table-expr_I3*",
        "symbols": [
          "@table-expr_I3*",
          "@table-expr_I3"
        ]
      },
      "286": {
        "name": "table-expr_I3",
        "symbols": [
          "'COMMA",
          "@table-header"
        ]
      },
      "287": {
        "name": "table-expr_I5*",
        "symbols": []
      },
      "288": {
        "name": "table-expr_I5*",
        "symbols": [
          "@table-expr_I5*",
          "@table-expr_I5"
        ]
      },
      "289": {
        "name": "table-expr_I5",
        "symbols": [
          "@table-row",
          "'SEMI"
        ]
      },
      "290": {
        "name": "table-header",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "291": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "'COLON",
          "@full-expr",
          "@table-row_I3*"
        ]
      },
      "292": {
        "name": "table-row_I3*",
        "symbols": []
      },
      "293": {
        "name": "table-row_I3*",
        "symbols": [
          "@table-row_I3*",
          "@table-row_I3"
        ]
      },
      "294": {
        "name": "table-row_I3",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "295": {
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
      "296": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "297": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "298": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "299": {
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
      "300": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "301": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "302": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "303": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "304": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "305": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "306": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "307": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "308": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "309": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "310": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "311": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "312": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "313": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "314": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "315": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "316": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "317": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "318": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "319": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "320": {
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
      "321": {
        "name": "map-for-expr",
        "symbols": [
          "'LBRACK",
          "'FOR",
          "'NAME",
          "'PARENNOSPACE",
          "@for-bind",
          "@map-for-expr_A1_I5*",
          "'RPAREN",
          "@block",
          "'RBRACK"
        ]
      },
      "322": {
        "name": "map-for-expr_A1_I5*",
        "symbols": []
      },
      "323": {
        "name": "map-for-expr_A1_I5*",
        "symbols": [
          "@map-for-expr_A1_I5*",
          "@map-for-expr_A1_I5"
        ]
      },
      "324": {
        "name": "map-for-expr_A1_I5",
        "symbols": [
          "'COMMA",
          "@for-bind"
        ]
      },
      "325": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr"
        ]
      },
      "326": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "327": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "426": {
        "position": 1,
        "like": 0
      },
      "489": {
        "position": 1,
        "like": 1
      },
      "809": {
        "position": 2,
        "like": 0
      },
      "811": {
        "position": 1,
        "like": 12
      },
      "3172": {
        "position": 2,
        "like": 3
      },
      "3205": {
        "position": 1,
        "like": 4
      },
      "3470": {
        "position": 1,
        "like": 67
      },
      "3471": {
        "position": 1,
        "like": 254
      },
      "3589": {
        "position": 1,
        "like": 250
      },
      "3634": {
        "position": 2,
        "like": 14
      },
      "3665": {
        "position": 1,
        "like": 15
      },
      "3696": {
        "position": 1,
        "like": 16
      },
      "3727": {
        "position": 1,
        "like": 17
      },
      "3758": {
        "position": 1,
        "like": 18
      },
      "3789": {
        "position": 1,
        "like": 19
      },
      "3820": {
        "position": 1,
        "like": 20
      },
      "3851": {
        "position": 1,
        "like": 21
      },
      "3882": {
        "position": 1,
        "like": 22
      },
      "3913": {
        "position": 1,
        "like": 23
      },
      "4241": {
        "position": 1,
        "like": 61
      },
      "4243": {
        "position": 1,
        "like": 62
      },
      "4245": {
        "position": 1,
        "like": 63
      },
      "4247": {
        "position": 1,
        "like": 64
      },
      "4249": {
        "position": 1,
        "like": 65
      },
      "4251": {
        "position": 1,
        "like": 66
      },
      "4284": {
        "position": 1,
        "like": 123
      },
      "4529": {
        "position": 1,
        "like": 257
      },
      "4619": {
        "position": 1,
        "like": 217
      },
      "4651": {
        "position": 1,
        "like": 218
      },
      "4683": {
        "position": 1,
        "like": 219
      },
      "4889": {
        "position": 1,
        "like": 238
      },
      "5248": {
        "position": 1,
        "like": 248
      },
      "5293": {
        "position": 1,
        "like": 249
      },
      "5338": {
        "position": 1,
        "like": 251
      },
      "5383": {
        "position": 1,
        "like": 252
      },
      "5428": {
        "position": 1,
        "like": 253
      },
      "5518": {
        "position": 1,
        "like": 258
      },
      "5563": {
        "position": 1,
        "like": 259
      },
      "5608": {
        "position": 1,
        "like": 260
      },
      "5653": {
        "position": 1,
        "like": 261
      },
      "5698": {
        "position": 1,
        "like": 262
      },
      "5743": {
        "position": 1,
        "like": 263
      },
      "5788": {
        "position": 1,
        "like": 264
      },
      "5833": {
        "position": 1,
        "like": 265
      },
      "6421": {
        "position": 2,
        "like": 67
      },
      "6423": {
        "position": 1,
        "like": 69
      },
      "6466": {
        "position": 1,
        "like": 216
      },
      "6472": {
        "position": 1,
        "like": 211
      },
      "6510": {
        "position": 1,
        "like": 210
      },
      "6515": {
        "position": 2,
        "like": 281
      },
      "6626": {
        "position": 1,
        "like": 77
      },
      "6646": {
        "position": 1,
        "like": 76
      },
      "6728": {
        "position": 1,
        "like": 203
      },
      "6730": {
        "position": 1,
        "like": 204
      },
      "6863": {
        "position": 1,
        "like": 126
      },
      "6894": {
        "position": 2,
        "like": 123
      },
      "6925": {
        "position": 1,
        "like": 125
      },
      "7207": {
        "position": 2,
        "like": 219
      },
      "7560": {
        "position": 2,
        "like": 237
      },
      "7604": {
        "position": 2,
        "like": 236
      },
      "8001": {
        "position": 2,
        "like": 319
      },
      "8516": {
        "position": 3,
        "like": 5
      },
      "8648": {
        "position": 3,
        "like": 9
      },
      "8764": {
        "position": 3,
        "like": 119
      },
      "8885": {
        "position": 2,
        "like": 215
      },
      "8888": {
        "position": 2,
        "like": 211
      },
      "9028": {
        "position": 2,
        "like": 77
      },
      "9045": {
        "position": 3,
        "like": 255
      },
      "9122": {
        "position": 2,
        "like": 204
      },
      "11451": {
        "position": 1,
        "like": 232
      },
      "11470": {
        "position": 1,
        "like": 233
      },
      "11489": {
        "position": 2,
        "like": 221
      },
      "11577": {
        "position": 1,
        "like": 223
      },
      "11596": {
        "position": 1,
        "like": 224
      },
      "11615": {
        "position": 1,
        "like": 225
      },
      "11634": {
        "position": 1,
        "like": 226
      },
      "11653": {
        "position": 1,
        "like": 227
      },
      "11672": {
        "position": 1,
        "like": 228
      },
      "11691": {
        "position": 1,
        "like": 229
      },
      "11710": {
        "position": 1,
        "like": 230
      },
      "11729": {
        "position": 1,
        "like": 231
      },
      "11748": {
        "position": 1,
        "like": 234
      },
      "11767": {
        "position": 1,
        "like": 235
      },
      "11793": {
        "position": 1,
        "like": 242
      },
      "11857": {
        "position": 1,
        "like": 241
      },
      "11883": {
        "position": 3,
        "like": 246
      },
      "12157": {
        "position": 3,
        "like": 256
      },
      "12767": {
        "position": 1,
        "like": 122
      },
      "12798": {
        "position": 4,
        "like": 119
      },
      "12829": {
        "position": 1,
        "like": 121
      },
      "12863": {
        "position": 2,
        "like": 213
      },
      "12905": {
        "position": 3,
        "like": 282
      },
      "12945": {
        "position": 4,
        "like": 277
      },
      "12993": {
        "position": 2,
        "like": 279
      },
      "12999": {
        "position": 2,
        "like": 79
      },
      "13050": {
        "position": 2,
        "like": 206
      },
      "13087": {
        "position": 1,
        "like": 47
      },
      "13089": {
        "position": 1,
        "like": 48
      },
      "13095": {
        "position": 4,
        "like": 107
      },
      "13217": {
        "position": 1,
        "like": 95
      },
      "13376": {
        "position": 1,
        "like": 28
      },
      "13418": {
        "position": 1,
        "like": 29
      },
      "13460": {
        "position": 1,
        "like": 32
      },
      "13502": {
        "position": 1,
        "like": 34
      },
      "13544": {
        "position": 1,
        "like": 35
      },
      "13586": {
        "position": 1,
        "like": 36
      },
      "13628": {
        "position": 1,
        "like": 37
      },
      "13670": {
        "position": 1,
        "like": 40
      },
      "13742": {
        "position": 4,
        "like": 132
      },
      "13773": {
        "position": 1,
        "like": 135
      },
      "13815": {
        "position": 1,
        "like": 30
      },
      "13857": {
        "position": 1,
        "like": 31
      },
      "13899": {
        "position": 1,
        "like": 33
      },
      "13941": {
        "position": 1,
        "like": 38
      },
      "13983": {
        "position": 1,
        "like": 39
      },
      "14121": {
        "position": 1,
        "like": 136
      },
      "14607": {
        "position": 2,
        "like": 134
      },
      "15574": {
        "position": 2,
        "like": 222
      },
      "15618": {
        "position": 2,
        "like": 242
      },
      "15625": {
        "position": 4,
        "like": 239
      },
      "15670": {
        "position": 4,
        "like": 247
      },
      "15717": {
        "position": 1,
        "like": 315
      },
      "15770": {
        "position": 1,
        "like": 314
      },
      "15915": {
        "position": 4,
        "like": 273
      },
      "15960": {
        "position": 1,
        "like": 276
      },
      "15996": {
        "position": 2,
        "like": 275
      },
      "16032": {
        "position": 2,
        "like": 290
      },
      "16253": {
        "position": 1,
        "like": 308
      },
      "16304": {
        "position": 1,
        "like": 307
      },
      "16306": {
        "position": 5,
        "like": 6
      },
      "16405": {
        "position": 5,
        "like": 10
      },
      "16474": {
        "position": 4,
        "like": 70
      },
      "16476": {
        "position": 2,
        "like": 72
      },
      "16479": {
        "position": 2,
        "like": 214
      },
      "16482": {
        "position": 5,
        "like": 208
      },
      "16514": {
        "position": 2,
        "like": 280
      },
      "16517": {
        "position": 2,
        "like": 80
      },
      "16520": {
        "position": 5,
        "like": 74
      },
      "16522": {
        "position": 5,
        "like": 201
      },
      "16554": {
        "position": 2,
        "like": 207
      },
      "16557": {
        "position": 2,
        "like": 55
      },
      "16622": {
        "position": 2,
        "like": 48
      },
      "16629": {
        "position": 1,
        "like": 110
      },
      "16660": {
        "position": 5,
        "like": 107
      },
      "16691": {
        "position": 1,
        "like": 109
      },
      "16769": {
        "position": 5,
        "like": 111
      },
      "16890": {
        "position": 5,
        "like": 115
      },
      "17341": {
        "position": 2,
        "like": 106
      },
      "17677": {
        "position": 2,
        "like": 197
      },
      "17927": {
        "position": 2,
        "like": 244
      },
      "17930": {
        "position": 2,
        "like": 315
      },
      "17937": {
        "position": 5,
        "like": 312
      },
      "18184": {
        "position": 2,
        "like": 285
      },
      "18187": {
        "position": 3,
        "like": 303
      },
      "18358": {
        "position": 2,
        "like": 308
      },
      "18365": {
        "position": 5,
        "like": 305
      },
      "18410": {
        "position": 6,
        "like": 7
      },
      "18476": {
        "position": 6,
        "like": 11
      },
      "18509": {
        "position": 2,
        "like": 73
      },
      "18512": {
        "position": 6,
        "like": 45
      },
      "18768": {
        "position": 2,
        "like": 50
      },
      "18777": {
        "position": 1,
        "like": 90
      },
      "18779": {
        "position": 1,
        "like": 91
      },
      "18786": {
        "position": 1,
        "like": 87
      },
      "18821": {
        "position": 2,
        "like": 83
      },
      "18824": {
        "position": 1,
        "like": 86
      },
      "18826": {
        "position": 1,
        "like": 114
      },
      "18857": {
        "position": 6,
        "like": 111
      },
      "18888": {
        "position": 1,
        "like": 113
      },
      "18919": {
        "position": 1,
        "like": 118
      },
      "18950": {
        "position": 6,
        "like": 115
      },
      "18981": {
        "position": 1,
        "like": 117
      },
      "19100": {
        "position": 3,
        "like": 161
      },
      "19265": {
        "position": 3,
        "like": 165
      },
      "19430": {
        "position": 3,
        "like": 169
      },
      "19595": {
        "position": 3,
        "like": 173
      },
      "19802": {
        "position": 3,
        "like": 105
      },
      "20096": {
        "position": 1,
        "like": 200
      },
      "20138": {
        "position": 3,
        "like": 197
      },
      "20180": {
        "position": 1,
        "like": 199
      },
      "20397": {
        "position": 2,
        "like": 245
      },
      "20403": {
        "position": 2,
        "like": 317
      },
      "20625": {
        "position": 2,
        "like": 268
      },
      "20679": {
        "position": 2,
        "like": 286
      },
      "20682": {
        "position": 6,
        "like": 295
      },
      "20747": {
        "position": 2,
        "like": 297
      },
      "20832": {
        "position": 2,
        "like": 301
      },
      "20857": {
        "position": 2,
        "like": 310
      },
      "20893": {
        "position": 7,
        "like": 45
      },
      "20924": {
        "position": 1,
        "like": 53
      },
      "20955": {
        "position": 1,
        "like": 54
      },
      "21120": {
        "position": 2,
        "like": 51
      },
      "21123": {
        "position": 2,
        "like": 96
      },
      "21126": {
        "position": 4,
        "like": 88
      },
      "21129": {
        "position": 2,
        "like": 91
      },
      "21136": {
        "position": 2,
        "like": 84
      },
      "21139": {
        "position": 7,
        "like": 81
      },
      "21272": {
        "position": 1,
        "like": 164
      },
      "21314": {
        "position": 4,
        "like": 161
      },
      "21356": {
        "position": 1,
        "like": 163
      },
      "21398": {
        "position": 1,
        "like": 168
      },
      "21440": {
        "position": 4,
        "like": 165
      },
      "21482": {
        "position": 1,
        "like": 167
      },
      "21524": {
        "position": 1,
        "like": 172
      },
      "21566": {
        "position": 4,
        "like": 169
      },
      "21608": {
        "position": 1,
        "like": 171
      },
      "21650": {
        "position": 1,
        "like": 176
      },
      "21692": {
        "position": 4,
        "like": 173
      },
      "21734": {
        "position": 1,
        "like": 175
      },
      "21902": {
        "position": 4,
        "like": 145
      },
      "22067": {
        "position": 4,
        "like": 149
      },
      "22516": {
        "position": 2,
        "like": 179
      },
      "22520": {
        "position": 1,
        "like": 180
      },
      "22524": {
        "position": 1,
        "like": 182
      },
      "22526": {
        "position": 1,
        "like": 183
      },
      "22538": {
        "position": 2,
        "like": 318
      },
      "22596": {
        "position": 2,
        "like": 323
      },
      "22760": {
        "position": 2,
        "like": 269
      },
      "22763": {
        "position": 7,
        "like": 283
      },
      "22808": {
        "position": 2,
        "like": 288
      },
      "22816": {
        "position": 2,
        "like": 298
      },
      "22836": {
        "position": 2,
        "like": 302
      },
      "22903": {
        "position": 2,
        "like": 311
      },
      "22906": {
        "position": 8,
        "like": 8
      },
      "23052": {
        "position": 3,
        "like": 24
      },
      "23084": {
        "position": 2,
        "like": 26
      },
      "23120": {
        "position": 1,
        "like": 27
      },
      "23159": {
        "position": 2,
        "like": 93
      },
      "23204": {
        "position": 2,
        "like": 43
      },
      "23210": {
        "position": 5,
        "like": 97
      },
      "23475": {
        "position": 1,
        "like": 148
      },
      "23517": {
        "position": 5,
        "like": 145
      },
      "23559": {
        "position": 1,
        "like": 147
      },
      "23601": {
        "position": 1,
        "like": 152
      },
      "23643": {
        "position": 5,
        "like": 149
      },
      "23685": {
        "position": 1,
        "like": 151
      },
      "23811": {
        "position": 8,
        "like": 127
      },
      "23842": {
        "position": 1,
        "like": 130
      },
      "23884": {
        "position": 1,
        "like": 131
      },
      "23926": {
        "position": 2,
        "like": 129
      },
      "23968": {
        "position": 8,
        "like": 177
      },
      "24092": {
        "position": 4,
        "like": 326
      },
      "24095": {
        "position": 4,
        "like": 325
      },
      "24144": {
        "position": 2,
        "like": 324
      },
      "24192": {
        "position": 8,
        "like": 266
      },
      "24237": {
        "position": 1,
        "like": 272
      },
      "24273": {
        "position": 2,
        "like": 271
      },
      "24309": {
        "position": 2,
        "like": 289
      },
      "24314": {
        "position": 8,
        "like": 299
      },
      "24359": {
        "position": 3,
        "like": 304
      },
      "24516": {
        "position": 2,
        "like": 94
      },
      "24519": {
        "position": 6,
        "like": 41
      },
      "24561": {
        "position": 2,
        "like": 44
      },
      "24564": {
        "position": 6,
        "like": 97
      },
      "24856": {
        "position": 6,
        "like": 137
      },
      "25021": {
        "position": 6,
        "like": 141
      },
      "25186": {
        "position": 6,
        "like": 153
      },
      "25351": {
        "position": 6,
        "like": 157
      },
      "25529": {
        "position": 3,
        "like": 192
      },
      "25602": {
        "position": 9,
        "like": 321
      },
      "25692": {
        "position": 3,
        "like": 291
      },
      "25698": {
        "position": 4,
        "like": 56
      },
      "25729": {
        "position": 1,
        "like": 59
      },
      "25771": {
        "position": 2,
        "like": 58
      },
      "25813": {
        "position": 1,
        "like": 60
      },
      "25855": {
        "position": 7,
        "like": 97
      },
      "25897": {
        "position": 2,
        "like": 99
      },
      "26025": {
        "position": 1,
        "like": 102
      },
      "26109": {
        "position": 1,
        "like": 140
      },
      "26151": {
        "position": 7,
        "like": 137
      },
      "26193": {
        "position": 1,
        "like": 139
      },
      "26235": {
        "position": 1,
        "like": 144
      },
      "26277": {
        "position": 7,
        "like": 141
      },
      "26319": {
        "position": 1,
        "like": 143
      },
      "26361": {
        "position": 1,
        "like": 156
      },
      "26403": {
        "position": 7,
        "like": 153
      },
      "26445": {
        "position": 1,
        "like": 155
      },
      "26487": {
        "position": 1,
        "like": 160
      },
      "26529": {
        "position": 7,
        "like": 157
      },
      "26571": {
        "position": 1,
        "like": 159
      },
      "26613": {
        "position": 1,
        "like": 187
      },
      "26623": {
        "position": 1,
        "like": 186
      },
      "26625": {
        "position": 4,
        "like": 191
      },
      "26633": {
        "position": 1,
        "like": 196
      },
      "26668": {
        "position": 2,
        "like": 193
      },
      "26670": {
        "position": 2,
        "like": 195
      },
      "26705": {
        "position": 10,
        "like": 320
      },
      "26750": {
        "position": 4,
        "like": 291
      },
      "26757": {
        "position": 2,
        "like": 103
      },
      "26842": {
        "position": 8,
        "like": 104
      },
      "26884": {
        "position": 2,
        "like": 187
      },
      "26898": {
        "position": 2,
        "like": 293
      },
      "26947": {
        "position": 2,
        "like": 189
      },
      "26954": {
        "position": 2,
        "like": 294
      },
      "27000": {
        "position": 2,
        "like": 190
      },
      "27003": {
        "position": 7,
        "like": 184
      },
      "27050": {
        "position": 6,
        "like": 100
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
      "24": "dA",
      "25": "Inline",
      "26": [
        "ListSnoc",
        "block_I1*",
        "block_I1",
        true
      ],
      "27": "Inline",
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
      "40": "dA",
      "41": "dA",
      "42": "Inline",
      "43": [
        "ListSnoc",
        "spy-stmt_I3*",
        "spy-stmt_I3",
        true
      ],
      "44": "Inline",
      "45": "dA",
      "46": "Inline",
      "47": "Inline",
      "48": "Inline",
      "49": "Inline",
      "50": [
        "ListSnoc",
        "fun-decl_I3_I1*",
        "fun-decl_I3_I1",
        true
      ],
      "51": "Inline",
      "52": "Inline",
      "53": "Inline",
      "54": "Inline",
      "55": "dA",
      "56": "dA",
      "57": "Inline",
      "58": [
        "ListSnoc",
        "where-clause_I2*",
        "where-clause_I2",
        true
      ],
      "59": "Inline",
      "60": "Inline",
      "61": "dA",
      "62": "dA",
      "63": "dA",
      "64": "dA",
      "65": "dA",
      "66": "dA",
      "67": "dA",
      "68": "Inline",
      "69": "Inline",
      "70": "Inline",
      "71": "Inline",
      "72": [
        "ListSnoc",
        "type-ann_A6_I1_I2*",
        "type-ann_A6_I1_I2",
        true
      ],
      "73": "Inline",
      "74": "dA",
      "75": "Inline",
      "76": "Inline",
      "77": "Inline",
      "78": "Inline",
      "79": [
        "ListSnoc",
        "type-ann_A7_I1_I1*",
        "type-ann_A7_I1_I1",
        true
      ],
      "80": "Inline",
      "81": "dA",
      "82": "Inline",
      "83": [
        "ListSnoc",
        "data-decl_I4*",
        "data-decl_I4",
        true
      ],
      "84": "Inline",
      "85": "Inline",
      "86": "Inline",
      "87": "Inline",
      "88": "dA",
      "89": "Inline",
      "90": "Inline",
      "91": "Inline",
      "92": "Inline",
      "93": [
        "ListSnoc",
        "variant-decl_A0_I2_I1*",
        "variant-decl_A0_I2_I1",
        true
      ],
      "94": "Inline",
      "95": "dA",
      "96": "dA",
      "97": "dA",
      "98": "Inline",
      "99": [
        "ListSnoc",
        "if-stmt_I5*",
        "if-stmt_I5",
        true
      ],
      "100": "Inline",
      "101": "Inline",
      "102": "Inline",
      "103": "Inline",
      "104": "dA",
      "105": "dA",
      "106": "dA",
      "107": "dA",
      "108": "Inline",
      "109": "Inline",
      "110": "Inline",
      "111": "dA",
      "112": "Inline",
      "113": "Inline",
      "114": "Inline",
      "115": "dA",
      "116": "Inline",
      "117": "Inline",
      "118": "Inline",
      "119": "dA",
      "120": "Inline",
      "121": "Inline",
      "122": "Inline",
      "123": "dA",
      "124": "Inline",
      "125": "Inline",
      "126": "Inline",
      "127": "dA",
      "128": "Inline",
      "129": [
        "ListSnoc",
        "check-block_A0_I6*",
        "check-block_A0_I6",
        true
      ],
      "130": "Inline",
      "131": "Inline",
      "132": "dA",
      "133": "Inline",
      "134": [
        "ListSnoc",
        "check-block_A1_I2*",
        "check-block_A1_I2",
        true
      ],
      "135": "Inline",
      "136": "Inline",
      "137": "dA",
      "138": "Inline",
      "139": "Inline",
      "140": "Inline",
      "141": "dA",
      "142": "Inline",
      "143": "Inline",
      "144": "Inline",
      "145": "dA",
      "146": "Inline",
      "147": "Inline",
      "148": "Inline",
      "149": "dA",
      "150": "Inline",
      "151": "Inline",
      "152": "Inline",
      "153": "dA",
      "154": "Inline",
      "155": "Inline",
      "156": "Inline",
      "157": "dA",
      "158": "Inline",
      "159": "Inline",
      "160": "Inline",
      "161": "dA",
      "162": "Inline",
      "163": "Inline",
      "164": "Inline",
      "165": "dA",
      "166": "Inline",
      "167": "Inline",
      "168": "Inline",
      "169": "dA",
      "170": "Inline",
      "171": "Inline",
      "172": "Inline",
      "173": "dA",
      "174": "Inline",
      "175": "Inline",
      "176": "Inline",
      "177": "dA",
      "178": "Inline",
      "179": [
        "ListSnoc",
        "switch-expr_I5*",
        "switch-expr_I5",
        true
      ],
      "180": "Inline",
      "181": "Inline",
      "182": "Inline",
      "183": "Inline",
      "184": "dA",
      "185": "Inline",
      "186": "Inline",
      "187": "Inline",
      "188": "Inline",
      "189": [
        "ListSnoc",
        "case-branch_A0_I3_I1*",
        "case-branch_A0_I3_I1",
        true
      ],
      "190": "Inline",
      "191": "dA",
      "192": "dA",
      "193": "dA",
      "194": "Inline",
      "195": [
        "ListSnoc",
        "switch-body_I0*",
        "switch-body_I0",
        true
      ],
      "196": "Inline",
      "197": "dA",
      "198": "Inline",
      "199": "Inline",
      "200": "Inline",
      "201": "dA",
      "202": "Inline",
      "203": "Inline",
      "204": "Inline",
      "205": "Inline",
      "206": [
        "ListSnoc",
        "lambda-expr_A0_I1_I1*",
        "lambda-expr_A0_I1_I1",
        true
      ],
      "207": "Inline",
      "208": "dA",
      "209": "Inline",
      "210": "Inline",
      "211": "Inline",
      "212": "Inline",
      "213": [
        "ListSnoc",
        "lambda-expr_A1_I1_I1*",
        "lambda-expr_A1_I1_I1",
        true
      ],
      "214": "Inline",
      "215": "dA",
      "216": "dA",
      "217": "dA",
      "218": "dA",
      "219": "dA",
      "220": "Inline",
      "221": [
        "ListSnoc",
        "binop-expr_I1*",
        "binop-expr_I1",
        true
      ],
      "222": "Inline",
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
      "234": "dA",
      "235": "dA",
      "236": "dA",
      "237": "dA",
      "238": "dA",
      "239": "dA",
      "240": "Inline",
      "241": "Inline",
      "242": "Inline",
      "243": "Inline",
      "244": [
        "ListSnoc",
        "app-or-access_A0_I2_I1*",
        "app-or-access_A0_I2_I1",
        true
      ],
      "245": "Inline",
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
      "257": "dA",
      "258": "dA",
      "259": "dA",
      "260": "dA",
      "261": "dA",
      "262": "dA",
      "263": "dA",
      "264": "dA",
      "265": "dA",
      "266": "dA",
      "267": "Inline",
      "268": [
        "ListSnoc",
        "sieve-expr_I4*",
        "sieve-expr_I4",
        true
      ],
      "269": "Inline",
      "270": "Inline",
      "271": [
        "ListSnoc",
        "sieve-expr_I6*",
        "sieve-expr_I6",
        true
      ],
      "272": "Inline",
      "273": "dA",
      "274": "Inline",
      "275": [
        "ListSnoc",
        "block-expr_I2*",
        "block-expr_I2",
        true
      ],
      "276": "Inline",
      "277": "dA",
      "278": "Inline",
      "279": [
        "ListSnoc",
        "record-expr_A0_I2*",
        "record-expr_A0_I2",
        true
      ],
      "280": "Inline",
      "281": "dA",
      "282": "dA",
      "283": "dA",
      "284": "Inline",
      "285": [
        "ListSnoc",
        "table-expr_I3*",
        "table-expr_I3",
        true
      ],
      "286": "Inline",
      "287": "Inline",
      "288": [
        "ListSnoc",
        "table-expr_I5*",
        "table-expr_I5",
        true
      ],
      "289": "Inline",
      "290": "dA",
      "291": "dA",
      "292": "Inline",
      "293": [
        "ListSnoc",
        "table-row_I3*",
        "table-row_I3",
        true
      ],
      "294": "Inline",
      "295": "dA",
      "296": "Inline",
      "297": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "298": "Inline",
      "299": "dA",
      "300": "Inline",
      "301": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "302": "Inline",
      "303": "dA",
      "304": "dA",
      "305": "dA",
      "306": "Inline",
      "307": "Inline",
      "308": "Inline",
      "309": "Inline",
      "310": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "311": "Inline",
      "312": "dA",
      "313": "Inline",
      "314": "Inline",
      "315": "Inline",
      "316": "Inline",
      "317": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "318": "Inline",
      "319": "dA",
      "320": "dA",
      "321": "dA",
      "322": "Inline",
      "323": [
        "ListSnoc",
        "map-for-expr_A1_I5*",
        "map-for-expr_A1_I5",
        true
      ],
      "324": "Inline",
      "325": "dA",
      "326": "dA",
      "327": "dA"
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
      66,
      67,
      74,
      68,
      69,
      70,
      71,
      72,
      73,
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
      87,
      88,
      95,
      89,
      90,
      91,
      92,
      93,
      94,
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
      122,
      123,
      124,
      125,
      126,
      127,
      132,
      128,
      129,
      130,
      131,
      133,
      134,
      135,
      136,
      137,
      141,
      145,
      149,
      153,
      157,
      161,
      165,
      169,
      173,
      138,
      139,
      140,
      142,
      143,
      144,
      146,
      147,
      148,
      150,
      151,
      152,
      154,
      155,
      156,
      158,
      159,
      160,
      162,
      163,
      164,
      166,
      167,
      168,
      170,
      171,
      172,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      191,
      185,
      186,
      187,
      188,
      189,
      190,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      208,
      202,
      203,
      204,
      205,
      206,
      207,
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
      234,
      235,
      236,
      237,
      238,
      239,
      246,
      247,
      248,
      240,
      241,
      242,
      243,
      244,
      245,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
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
      274,
      275,
      276,
      277,
      281,
      278,
      279,
      280,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      299,
      296,
      297,
      298,
      300,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      319,
      313,
      314,
      315,
      316,
      317,
      318,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      426,
      4,
      12,
      4,
      13,
      5,
      489,
      0,
      809,
      0,
      811,
      0,
      3172,
      0,
      3205,
      0,
      3471,
      0,
      3470,
      12,
      68,
      12,
      209,
      47,
      3589,
      0,
      3634,
      0,
      3665,
      0,
      3696,
      0,
      3727,
      0,
      3758,
      0,
      3789,
      0,
      3820,
      0,
      3851,
      0,
      3882,
      0,
      3913,
      0,
      202,
      45,
      75,
      14,
      4241,
      0,
      4243,
      0,
      4245,
      0,
      4247,
      0,
      4249,
      0,
      4251,
      0,
      4284,
      26,
      124,
      26,
      4529,
      0,
      4619,
      0,
      4651,
      0,
      4683,
      49,
      220,
      49,
      4889,
      0,
      5248,
      0,
      5293,
      0,
      5338,
      0,
      5383,
      0,
      5428,
      0,
      5518,
      0,
      5563,
      0,
      5608,
      0,
      5653,
      0,
      5698,
      0,
      5743,
      0,
      5788,
      0,
      5833,
      0,
      6421,
      0,
      6423,
      0,
      6466,
      0,
      6472,
      48,
      212,
      48,
      6510,
      0,
      6515,
      0,
      278,
      55,
      78,
      15,
      6626,
      15,
      6646,
      0,
      6728,
      0,
      6730,
      46,
      205,
      46,
      6863,
      0,
      6894,
      0,
      6925,
      0,
      133,
      28,
      7207,
      0,
      7560,
      0,
      7604,
      0,
      240,
      50,
      8001,
      0,
      274,
      54,
      8516,
      0,
      8648,
      0,
      71,
      13,
      8764,
      25,
      120,
      25,
      8885,
      0,
      8888,
      0,
      9028,
      0,
      9045,
      0,
      9122,
      0,
      46,
      8,
      11451,
      0,
      11470,
      0,
      11489,
      0,
      11577,
      0,
      11596,
      0,
      11615,
      0,
      11634,
      0,
      11653,
      0,
      11672,
      0,
      11691,
      0,
      11710,
      0,
      11729,
      0,
      11748,
      0,
      11767,
      0,
      11793,
      51,
      243,
      51,
      11857,
      0,
      11883,
      0,
      313,
      63,
      12157,
      0,
      284,
      56,
      306,
      61,
      12767,
      0,
      12798,
      0,
      12829,
      0,
      12863,
      0,
      12905,
      0,
      12945,
      0,
      12993,
      0,
      12999,
      0,
      13050,
      0,
      13087,
      0,
      13089,
      9,
      49,
      9,
      13095,
      22,
      108,
      22,
      13217,
      0,
      82,
      16,
      13376,
      0,
      13418,
      0,
      13460,
      0,
      13502,
      0,
      13544,
      0,
      13586,
      0,
      13628,
      0,
      13670,
      0,
      13742,
      0,
      13773,
      0,
      13815,
      0,
      13857,
      0,
      13899,
      0,
      13941,
      0,
      13983,
      0,
      14121,
      0,
      14607,
      0,
      15574,
      0,
      15618,
      0,
      15625,
      0,
      15670,
      0,
      316,
      64,
      15717,
      64,
      15770,
      0,
      267,
      52,
      15915,
      0,
      15960,
      0,
      15996,
      0,
      16032,
      0,
      296,
      59,
      300,
      60,
      16253,
      62,
      309,
      62,
      16304,
      0,
      16306,
      0,
      16405,
      0,
      16474,
      0,
      16476,
      0,
      16479,
      0,
      16482,
      0,
      16514,
      0,
      16517,
      0,
      16520,
      0,
      16522,
      0,
      16554,
      0,
      16557,
      0,
      16622,
      0,
      16629,
      0,
      16660,
      0,
      16691,
      0,
      89,
      18,
      85,
      17,
      16769,
      23,
      112,
      23,
      16890,
      24,
      116,
      24,
      17341,
      0,
      17677,
      44,
      198,
      44,
      178,
      39,
      17927,
      0,
      17930,
      0,
      17937,
      0,
      322,
      65,
      287,
      57,
      18184,
      0,
      18187,
      0,
      18358,
      0,
      18365,
      0,
      18410,
      0,
      18476,
      0,
      18509,
      0,
      18512,
      10,
      52,
      10,
      25,
      6,
      18768,
      0,
      18777,
      0,
      18779,
      19,
      92,
      19,
      18786,
      0,
      18821,
      0,
      18824,
      0,
      18826,
      0,
      18857,
      0,
      18888,
      0,
      18919,
      0,
      18950,
      0,
      18981,
      0,
      42,
      7,
      19100,
      35,
      162,
      35,
      19265,
      36,
      166,
      36,
      19430,
      37,
      170,
      37,
      19595,
      38,
      174,
      38,
      19802,
      0,
      20096,
      0,
      20138,
      0,
      20180,
      0,
      128,
      27,
      181,
      40,
      20397,
      0,
      20403,
      0,
      270,
      53,
      20625,
      0,
      20679,
      0,
      20682,
      0,
      20747,
      0,
      20832,
      0,
      20857,
      0,
      20893,
      0,
      20924,
      0,
      20955,
      0,
      21120,
      0,
      21123,
      0,
      21126,
      0,
      21129,
      0,
      21136,
      0,
      21139,
      0,
      21272,
      0,
      21314,
      0,
      21356,
      0,
      21398,
      0,
      21440,
      0,
      21482,
      0,
      21524,
      0,
      21566,
      0,
      21608,
      0,
      21650,
      0,
      21692,
      0,
      21734,
      0,
      21902,
      31,
      146,
      31,
      22067,
      32,
      150,
      32,
      22516,
      0,
      22520,
      0,
      22524,
      0,
      22526,
      0,
      22538,
      0,
      22596,
      0,
      22760,
      0,
      22763,
      0,
      22808,
      0,
      22816,
      0,
      22836,
      0,
      22903,
      0,
      22906,
      0,
      57,
      11,
      23052,
      0,
      23084,
      0,
      23120,
      0,
      23159,
      0,
      23204,
      0,
      23210,
      67,
      98,
      20,
      23475,
      0,
      23517,
      0,
      23559,
      0,
      23601,
      0,
      23643,
      0,
      23685,
      0,
      23811,
      0,
      23842,
      0,
      23884,
      0,
      23926,
      0,
      23968,
      0,
      194,
      43,
      24092,
      0,
      24095,
      0,
      24144,
      0,
      24192,
      0,
      24237,
      0,
      24273,
      0,
      24309,
      0,
      24314,
      0,
      24359,
      0,
      24516,
      0,
      24519,
      0,
      24561,
      0,
      24564,
      21,
      101,
      21,
      24856,
      29,
      138,
      29,
      25021,
      30,
      142,
      30,
      25186,
      33,
      154,
      33,
      25351,
      34,
      158,
      34,
      185,
      41,
      25529,
      0,
      25602,
      0,
      25692,
      58,
      292,
      58,
      25698,
      0,
      25729,
      0,
      25771,
      0,
      25813,
      0,
      25855,
      0,
      25897,
      0,
      26025,
      0,
      26109,
      0,
      26151,
      0,
      26193,
      0,
      26235,
      0,
      26277,
      0,
      26319,
      0,
      26361,
      0,
      26403,
      0,
      26445,
      0,
      26487,
      0,
      26529,
      0,
      26571,
      0,
      26613,
      42,
      188,
      42,
      26623,
      0,
      26625,
      0,
      26633,
      0,
      26668,
      0,
      26670,
      0,
      26705,
      0,
      26750,
      0,
      26757,
      0,
      26842,
      0,
      26884,
      0,
      26898,
      0,
      26947,
      0,
      26954,
      0,
      27000,
      0,
      27003,
      0,
      27050,
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
        "'LBRACE": [
          -1,
          2,
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          2,
          4
        ],
        "'BLOCK": [
          -1,
          2,
          4
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          10
        ],
        "'BLOCK": [
          -1,
          10
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'TABLE": [
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
        "rec-stmt": [
          20
        ],
        "assign-stmt": [
          21
        ],
        "expr-stmt": [
          22
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "full-expr": [
          33
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          18
        ],
        "'BLOCK": [
          -1,
          18
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          20
        ],
        "'BLOCK": [
          -1,
          20
        ],
        "'TABLE": [
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
          65
        ]
      },
      {
        "'NAME": [
          66
        ]
      },
      {
        "type-ann_A6_I1?": [
          67
        ],
        "type-ann_A6_I1": [
          68
        ],
        "'LT": [
          69,
          22
        ],
        "'COLONEQUALS": [
          70
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          22
        ],
        "'BLOCK": [
          -1,
          22
        ],
        "'TABLE": [
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
          71
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          73
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          74
        ],
        "lambda-expr_A1_I1?": [
          75
        ],
        "lambda-expr_A1_I1": [
          76
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          30
        ],
        "'USING": [
          -1,
          30
        ],
        "'BLOCK": [
          -1,
          30
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          32
        ],
        "'BLOCK": [
          -1,
          32
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          34
        ],
        "'BLOCK": [
          -1,
          34
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          36
        ],
        "'BLOCK": [
          -1,
          36
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          38
        ],
        "'BLOCK": [
          -1,
          38
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          40
        ],
        "'BLOCK": [
          -1,
          40
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          42
        ],
        "'BLOCK": [
          -1,
          42
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          44
        ],
        "'BLOCK": [
          -1,
          44
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          46
        ],
        "'BLOCK": [
          -1,
          46
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          48
        ],
        "'BLOCK": [
          -1,
          48
        ],
        "'TABLE": [
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
        "$": [
          -1,
          50
        ],
        "'NAME": [
          -1,
          50
        ],
        "'PARENNOSPACE": [
          -1,
          50
        ],
        "'STRING": [
          -1,
          50
        ],
        "'LBRACE": [
          -1,
          50
        ],
        "'PARENSPACE": [
          -1,
          50
        ],
        "'INT": [
          -1,
          50
        ],
        "'LONG": [
          -1,
          50
        ],
        "'DOUBLE": [
          -1,
          50
        ],
        "'FLOAT": [
          -1,
          50
        ],
        "'BOOLEAN": [
          -1,
          50
        ],
        "'VOID": [
          -1,
          50
        ],
        "'DATA": [
          -1,
          50
        ],
        "'VAR": [
          -1,
          50
        ],
        "'REC": [
          -1,
          50
        ],
        "'ATCHECK": [
          -1,
          50
        ],
        "'SWITCH": [
          -1,
          50
        ],
        "'DASH": [
          -1,
          50
        ],
        "'BANG": [
          -1,
          50
        ],
        "'LBRACK": [
          -1,
          50
        ],
        "'NUMBER": [
          -1,
          50
        ],
        "'TRUE": [
          -1,
          50
        ],
        "'FALSE": [
          -1,
          50
        ],
        "'NULL": [
          -1,
          50
        ],
        "'PARENAFTERBRACE": [
          -1,
          50
        ],
        "'SIEVE": [
          -1,
          50
        ],
        "'BLOCK": [
          -1,
          50
        ],
        "'TABLE": [
          -1,
          50
        ],
        "'ASK": [
          -1,
          50
        ],
        "'NEW": [
          -1,
          50
        ]
      },
      {
        "'NAME": [
          77
        ],
        "'RBRACE": [
          78
        ],
        "record-field": [
          79
        ]
      },
      {
        "'NAME": [
          80
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          81
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "type-ann_A7_I1?": [
          82
        ],
        "type-ann_A7_I1": [
          83
        ],
        "full-expr": [
          84
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "lambda-expr_A0_I1?": [
          85
        ],
        "lambda-expr_A0_I1": [
          86
        ],
        "lambda-param": [
          87
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ],
        "'RPAREN": [
          -1,
          52
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          88
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
          -1,
          66
        ],
        "'RPAREN": [
          -1,
          66
        ],
        "'COMMA": [
          -1,
          66
        ],
        "'GT": [
          -1,
          66
        ],
        "'THINARROW": [
          -1,
          66
        ]
      },
      {
        "'NAME": [
          89
        ]
      },
      {
        "'SEMI": [
          90
        ],
        "expr-stmt_I1?": [
          91
        ],
        "expr-stmt_I1": [
          92
        ],
        "$": [
          -1,
          68,
          70
        ],
        "'NAME": [
          -1,
          68,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          68,
          70
        ],
        "'STRING": [
          -1,
          68,
          70
        ],
        "'LBRACE": [
          -1,
          68,
          70
        ],
        "'RBRACE": [
          -1,
          68,
          70
        ],
        "'SPY": [
          -1,
          68,
          70
        ],
        "'PARENSPACE": [
          -1,
          68,
          70
        ],
        "'INT": [
          -1,
          68,
          70
        ],
        "'LONG": [
          -1,
          68,
          70
        ],
        "'DOUBLE": [
          -1,
          68,
          70
        ],
        "'FLOAT": [
          -1,
          68,
          70
        ],
        "'BOOLEAN": [
          -1,
          68,
          70
        ],
        "'VOID": [
          -1,
          68,
          70
        ],
        "'DATA": [
          -1,
          68,
          70
        ],
        "'IF": [
          -1,
          68,
          70
        ],
        "'FOR": [
          -1,
          68,
          70
        ],
        "'RETURN": [
          -1,
          68,
          70
        ],
        "'VAR": [
          -1,
          68,
          70
        ],
        "'REC": [
          -1,
          68,
          70
        ],
        "'ATCHECK": [
          -1,
          68,
          70
        ],
        "'SWITCH": [
          -1,
          68,
          70
        ],
        "'YIELD": [
          -1,
          68,
          70
        ],
        "'DASH": [
          -1,
          68,
          70
        ],
        "'BANG": [
          -1,
          68,
          70
        ],
        "'LBRACK": [
          -1,
          68,
          70
        ],
        "'NUMBER": [
          -1,
          68,
          70
        ],
        "'TRUE": [
          -1,
          68,
          70
        ],
        "'FALSE": [
          -1,
          68,
          70
        ],
        "'NULL": [
          -1,
          68,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          68,
          70
        ],
        "'SIEVE": [
          -1,
          68,
          70
        ],
        "'BLOCK": [
          -1,
          68,
          70
        ],
        "'TABLE": [
          -1,
          68,
          70
        ],
        "'ASK": [
          -1,
          68,
          70
        ],
        "'NEW": [
          -1,
          68,
          70
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          94
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          95
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'LBRACE": [
          96
        ],
        "'VOID": [
          97
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
        "'LBRACE": [
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
        "'LT": [
          -1,
          72
        ],
        "'GT": [
          -1,
          72
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'PLUS": [
          -1,
          72
        ],
        "'DASH": [
          -1,
          72
        ],
        "'TIMES": [
          -1,
          72
        ],
        "'SLASH": [
          -1,
          72
        ],
        "'PERCENT": [
          -1,
          72
        ],
        "'EQUALEQUAL": [
          -1,
          72
        ],
        "'NEQ": [
          -1,
          72
        ],
        "'LEQ": [
          -1,
          72
        ],
        "'GEQ": [
          -1,
          72
        ],
        "'AND": [
          -1,
          72
        ],
        "'OR": [
          -1,
          72
        ],
        "'BANG": [
          -1,
          72
        ],
        "'DOT": [
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
        "'SIEVE": [
          -1,
          72
        ],
        "'USING": [
          -1,
          72
        ],
        "'BLOCK": [
          -1,
          72
        ],
        "'TABLE": [
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
        "'PARENSPACE": [
          98
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          74
        ],
        "'USING": [
          -1,
          74
        ],
        "'BLOCK": [
          -1,
          74
        ],
        "'TABLE": [
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
        "$": [
          -1,
          76
        ],
        "'NAME": [
          -1,
          76
        ],
        "'SEMI": [
          -1,
          76
        ],
        "'PARENNOSPACE": [
          -1,
          76
        ],
        "'STRING": [
          -1,
          76
        ],
        "'RPAREN": [
          -1,
          76
        ],
        "'LBRACE": [
          -1,
          76
        ],
        "'RBRACE": [
          -1,
          76
        ],
        "'SPY": [
          -1,
          76
        ],
        "'PARENSPACE": [
          -1,
          76
        ],
        "'COMMA": [
          -1,
          76
        ],
        "'INT": [
          -1,
          76
        ],
        "'LONG": [
          -1,
          76
        ],
        "'DOUBLE": [
          -1,
          76
        ],
        "'FLOAT": [
          -1,
          76
        ],
        "'BOOLEAN": [
          -1,
          76
        ],
        "'VOID": [
          -1,
          76
        ],
        "'DATA": [
          -1,
          76
        ],
        "'IF": [
          -1,
          76
        ],
        "'FOR": [
          -1,
          76
        ],
        "'RETURN": [
          -1,
          76
        ],
        "'VAR": [
          -1,
          76
        ],
        "'REC": [
          -1,
          76
        ],
        "'ATCHECK": [
          -1,
          76
        ],
        "'ASSERTEQUALS": [
          -1,
          76
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          76
        ],
        "'ASSERTTRUE": [
          -1,
          76
        ],
        "'ASSERTFALSE": [
          -1,
          76
        ],
        "'ASSERTSATISFIES": [
          -1,
          76
        ],
        "'ASSERTRAISES": [
          -1,
          76
        ],
        "'IS": [
          -1,
          76
        ],
        "'ISNOT": [
          -1,
          76
        ],
        "'SATISFIES": [
          -1,
          76
        ],
        "'RAISES": [
          -1,
          76
        ],
        "'SWITCH": [
          -1,
          76
        ],
        "'CASE": [
          -1,
          76
        ],
        "'DEFAULT": [
          -1,
          76
        ],
        "'YIELD": [
          -1,
          76
        ],
        "'DASH": [
          -1,
          76
        ],
        "'BANG": [
          -1,
          76
        ],
        "'LBRACK": [
          -1,
          76
        ],
        "'RBRACK": [
          -1,
          76
        ],
        "'NUMBER": [
          -1,
          76
        ],
        "'TRUE": [
          -1,
          76
        ],
        "'FALSE": [
          -1,
          76
        ],
        "'NULL": [
          -1,
          76
        ],
        "'PARENAFTERBRACE": [
          -1,
          76
        ],
        "'SIEVE": [
          -1,
          76
        ],
        "'USING": [
          -1,
          76
        ],
        "'BLOCK": [
          -1,
          76
        ],
        "'TABLE": [
          -1,
          76
        ],
        "'ASK": [
          -1,
          76
        ],
        "'NEW": [
          -1,
          76
        ]
      },
      {
        "binop-expr_I1*": [
          99
        ],
        "$": [
          -1,
          78,
          80
        ],
        "'NAME": [
          -1,
          78,
          80
        ],
        "'SEMI": [
          -1,
          78,
          80
        ],
        "'PARENNOSPACE": [
          -1,
          78,
          80
        ],
        "'STRING": [
          -1,
          78,
          80
        ],
        "'RPAREN": [
          -1,
          78,
          80
        ],
        "'LBRACE": [
          -1,
          78,
          80
        ],
        "'RBRACE": [
          -1,
          78,
          80
        ],
        "'SPY": [
          -1,
          78,
          80
        ],
        "'PARENSPACE": [
          -1,
          78,
          80
        ],
        "'COMMA": [
          -1,
          78,
          80
        ],
        "'INT": [
          -1,
          78,
          80
        ],
        "'LONG": [
          -1,
          78,
          80
        ],
        "'DOUBLE": [
          -1,
          78,
          80
        ],
        "'FLOAT": [
          -1,
          78,
          80
        ],
        "'BOOLEAN": [
          -1,
          78,
          80
        ],
        "'VOID": [
          -1,
          78,
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
          78,
          80
        ],
        "'DATA": [
          -1,
          78,
          80
        ],
        "'IF": [
          -1,
          78,
          80
        ],
        "'FOR": [
          -1,
          78,
          80
        ],
        "'RETURN": [
          -1,
          78,
          80
        ],
        "'VAR": [
          -1,
          78,
          80
        ],
        "'REC": [
          -1,
          78,
          80
        ],
        "'ATCHECK": [
          -1,
          78,
          80
        ],
        "'ASSERTEQUALS": [
          -1,
          78,
          80
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          78,
          80
        ],
        "'ASSERTTRUE": [
          -1,
          78,
          80
        ],
        "'ASSERTFALSE": [
          -1,
          78,
          80
        ],
        "'ASSERTSATISFIES": [
          -1,
          78,
          80
        ],
        "'ASSERTRAISES": [
          -1,
          78,
          80
        ],
        "'IS": [
          -1,
          78,
          80
        ],
        "'ISNOT": [
          -1,
          78,
          80
        ],
        "'SATISFIES": [
          -1,
          78,
          80
        ],
        "'RAISES": [
          -1,
          78,
          80
        ],
        "'SWITCH": [
          -1,
          78,
          80
        ],
        "'CASE": [
          -1,
          78,
          80
        ],
        "'DEFAULT": [
          -1,
          78,
          80
        ],
        "'YIELD": [
          -1,
          78,
          80
        ],
        "'PLUS": [
          -1,
          80
        ],
        "'DASH": [
          -1,
          78,
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
          78,
          80
        ],
        "'LBRACK": [
          -1,
          78,
          80
        ],
        "'RBRACK": [
          -1,
          78,
          80
        ],
        "'NUMBER": [
          -1,
          78,
          80
        ],
        "'TRUE": [
          -1,
          78,
          80
        ],
        "'FALSE": [
          -1,
          78,
          80
        ],
        "'NULL": [
          -1,
          78,
          80
        ],
        "'PARENAFTERBRACE": [
          -1,
          78,
          80
        ],
        "'SIEVE": [
          -1,
          78,
          80
        ],
        "'USING": [
          -1,
          78,
          80
        ],
        "'BLOCK": [
          -1,
          78,
          80
        ],
        "'TABLE": [
          -1,
          78,
          80
        ],
        "'ASK": [
          -1,
          78,
          80
        ],
        "'NEW": [
          -1,
          78,
          80
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          102
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          103
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'PARENNOSPACE": [
          104,
          82
        ],
        "'DOT": [
          105
        ],
        "'LBRACK": [
          106,
          82
        ],
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
        "'STRING": [
          -1,
          82
        ],
        "'RPAREN": [
          -1,
          82
        ],
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          82
        ],
        "'USING": [
          -1,
          82
        ],
        "'BLOCK": [
          -1,
          82
        ],
        "'TABLE": [
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
        "'NAME": [
          107
        ],
        "'FOR": [
          108
        ],
        "'RBRACK": [
          109
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          84
        ],
        "'USING": [
          -1,
          84
        ],
        "'BLOCK": [
          -1,
          84
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          86
        ],
        "'USING": [
          -1,
          86
        ],
        "'BLOCK": [
          -1,
          86
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          88
        ],
        "'USING": [
          -1,
          88
        ],
        "'BLOCK": [
          -1,
          88
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          90
        ],
        "'USING": [
          -1,
          90
        ],
        "'BLOCK": [
          -1,
          90
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          92
        ],
        "'USING": [
          -1,
          92
        ],
        "'BLOCK": [
          -1,
          92
        ],
        "'TABLE": [
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
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          111
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          94
        ],
        "'USING": [
          -1,
          94
        ],
        "'BLOCK": [
          -1,
          94
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          96
        ],
        "'USING": [
          -1,
          96
        ],
        "'BLOCK": [
          -1,
          96
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          98
        ],
        "'USING": [
          -1,
          98
        ],
        "'BLOCK": [
          -1,
          98
        ],
        "'TABLE": [
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
        "$": [
          -1,
          100
        ],
        "'NAME": [
          -1,
          100
        ],
        "'SEMI": [
          -1,
          100
        ],
        "'PARENNOSPACE": [
          -1,
          100
        ],
        "'STRING": [
          -1,
          100
        ],
        "'RPAREN": [
          -1,
          100
        ],
        "'LBRACE": [
          -1,
          100
        ],
        "'RBRACE": [
          -1,
          100
        ],
        "'SPY": [
          -1,
          100
        ],
        "'PARENSPACE": [
          -1,
          100
        ],
        "'COMMA": [
          -1,
          100
        ],
        "'INT": [
          -1,
          100
        ],
        "'LONG": [
          -1,
          100
        ],
        "'DOUBLE": [
          -1,
          100
        ],
        "'FLOAT": [
          -1,
          100
        ],
        "'BOOLEAN": [
          -1,
          100
        ],
        "'VOID": [
          -1,
          100
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          100
        ],
        "'IF": [
          -1,
          100
        ],
        "'FOR": [
          -1,
          100
        ],
        "'RETURN": [
          -1,
          100
        ],
        "'VAR": [
          -1,
          100
        ],
        "'REC": [
          -1,
          100
        ],
        "'ATCHECK": [
          -1,
          100
        ],
        "'ASSERTEQUALS": [
          -1,
          100
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          100
        ],
        "'ASSERTTRUE": [
          -1,
          100
        ],
        "'ASSERTFALSE": [
          -1,
          100
        ],
        "'ASSERTSATISFIES": [
          -1,
          100
        ],
        "'ASSERTRAISES": [
          -1,
          100
        ],
        "'IS": [
          -1,
          100
        ],
        "'ISNOT": [
          -1,
          100
        ],
        "'SATISFIES": [
          -1,
          100
        ],
        "'RAISES": [
          -1,
          100
        ],
        "'SWITCH": [
          -1,
          100
        ],
        "'CASE": [
          -1,
          100
        ],
        "'DEFAULT": [
          -1,
          100
        ],
        "'YIELD": [
          -1,
          100
        ],
        "'PLUS": [
          -1,
          100
        ],
        "'DASH": [
          -1,
          100
        ],
        "'TIMES": [
          -1,
          100
        ],
        "'SLASH": [
          -1,
          100
        ],
        "'PERCENT": [
          -1,
          100
        ],
        "'EQUALEQUAL": [
          -1,
          100
        ],
        "'NEQ": [
          -1,
          100
        ],
        "'LEQ": [
          -1,
          100
        ],
        "'GEQ": [
          -1,
          100
        ],
        "'AND": [
          -1,
          100
        ],
        "'OR": [
          -1,
          100
        ],
        "'BANG": [
          -1,
          100
        ],
        "'DOT": [
          -1,
          100
        ],
        "'LBRACK": [
          -1,
          100
        ],
        "'RBRACK": [
          -1,
          100
        ],
        "'NUMBER": [
          -1,
          100
        ],
        "'TRUE": [
          -1,
          100
        ],
        "'FALSE": [
          -1,
          100
        ],
        "'NULL": [
          -1,
          100
        ],
        "'PARENAFTERBRACE": [
          -1,
          100
        ],
        "'SIEVE": [
          -1,
          100
        ],
        "'USING": [
          -1,
          100
        ],
        "'BLOCK": [
          -1,
          100
        ],
        "'TABLE": [
          -1,
          100
        ],
        "'ASK": [
          -1,
          100
        ],
        "'NEW": [
          -1,
          100
        ]
      },
      {
        "$": [
          -1,
          102
        ],
        "'NAME": [
          -1,
          102
        ],
        "'SEMI": [
          -1,
          102
        ],
        "'PARENNOSPACE": [
          -1,
          102
        ],
        "'STRING": [
          -1,
          102
        ],
        "'RPAREN": [
          -1,
          102
        ],
        "'LBRACE": [
          -1,
          102
        ],
        "'RBRACE": [
          -1,
          102
        ],
        "'SPY": [
          -1,
          102
        ],
        "'PARENSPACE": [
          -1,
          102
        ],
        "'COMMA": [
          -1,
          102
        ],
        "'INT": [
          -1,
          102
        ],
        "'LONG": [
          -1,
          102
        ],
        "'DOUBLE": [
          -1,
          102
        ],
        "'FLOAT": [
          -1,
          102
        ],
        "'BOOLEAN": [
          -1,
          102
        ],
        "'VOID": [
          -1,
          102
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          102
        ],
        "'IF": [
          -1,
          102
        ],
        "'FOR": [
          -1,
          102
        ],
        "'RETURN": [
          -1,
          102
        ],
        "'VAR": [
          -1,
          102
        ],
        "'REC": [
          -1,
          102
        ],
        "'ATCHECK": [
          -1,
          102
        ],
        "'ASSERTEQUALS": [
          -1,
          102
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          102
        ],
        "'ASSERTTRUE": [
          -1,
          102
        ],
        "'ASSERTFALSE": [
          -1,
          102
        ],
        "'ASSERTSATISFIES": [
          -1,
          102
        ],
        "'ASSERTRAISES": [
          -1,
          102
        ],
        "'IS": [
          -1,
          102
        ],
        "'ISNOT": [
          -1,
          102
        ],
        "'SATISFIES": [
          -1,
          102
        ],
        "'RAISES": [
          -1,
          102
        ],
        "'SWITCH": [
          -1,
          102
        ],
        "'CASE": [
          -1,
          102
        ],
        "'DEFAULT": [
          -1,
          102
        ],
        "'YIELD": [
          -1,
          102
        ],
        "'PLUS": [
          -1,
          102
        ],
        "'DASH": [
          -1,
          102
        ],
        "'TIMES": [
          -1,
          102
        ],
        "'SLASH": [
          -1,
          102
        ],
        "'PERCENT": [
          -1,
          102
        ],
        "'EQUALEQUAL": [
          -1,
          102
        ],
        "'NEQ": [
          -1,
          102
        ],
        "'LEQ": [
          -1,
          102
        ],
        "'GEQ": [
          -1,
          102
        ],
        "'AND": [
          -1,
          102
        ],
        "'OR": [
          -1,
          102
        ],
        "'BANG": [
          -1,
          102
        ],
        "'DOT": [
          -1,
          102
        ],
        "'LBRACK": [
          -1,
          102
        ],
        "'RBRACK": [
          -1,
          102
        ],
        "'NUMBER": [
          -1,
          102
        ],
        "'TRUE": [
          -1,
          102
        ],
        "'FALSE": [
          -1,
          102
        ],
        "'NULL": [
          -1,
          102
        ],
        "'PARENAFTERBRACE": [
          -1,
          102
        ],
        "'SIEVE": [
          -1,
          102
        ],
        "'USING": [
          -1,
          102
        ],
        "'BLOCK": [
          -1,
          102
        ],
        "'TABLE": [
          -1,
          102
        ],
        "'ASK": [
          -1,
          102
        ],
        "'NEW": [
          -1,
          102
        ]
      },
      {
        "$": [
          -1,
          104
        ],
        "'NAME": [
          -1,
          104
        ],
        "'SEMI": [
          -1,
          104
        ],
        "'PARENNOSPACE": [
          -1,
          104
        ],
        "'STRING": [
          -1,
          104
        ],
        "'RPAREN": [
          -1,
          104
        ],
        "'LBRACE": [
          -1,
          104
        ],
        "'RBRACE": [
          -1,
          104
        ],
        "'SPY": [
          -1,
          104
        ],
        "'PARENSPACE": [
          -1,
          104
        ],
        "'COMMA": [
          -1,
          104
        ],
        "'INT": [
          -1,
          104
        ],
        "'LONG": [
          -1,
          104
        ],
        "'DOUBLE": [
          -1,
          104
        ],
        "'FLOAT": [
          -1,
          104
        ],
        "'BOOLEAN": [
          -1,
          104
        ],
        "'VOID": [
          -1,
          104
        ],
        "'LT": [
          -1,
          104
        ],
        "'GT": [
          -1,
          104
        ],
        "'THINARROW": [
          -1,
          104
        ],
        "'DATA": [
          -1,
          104
        ],
        "'IF": [
          -1,
          104
        ],
        "'FOR": [
          -1,
          104
        ],
        "'RETURN": [
          -1,
          104
        ],
        "'VAR": [
          -1,
          104
        ],
        "'REC": [
          -1,
          104
        ],
        "'ATCHECK": [
          -1,
          104
        ],
        "'ASSERTEQUALS": [
          -1,
          104
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          104
        ],
        "'ASSERTTRUE": [
          -1,
          104
        ],
        "'ASSERTFALSE": [
          -1,
          104
        ],
        "'ASSERTSATISFIES": [
          -1,
          104
        ],
        "'ASSERTRAISES": [
          -1,
          104
        ],
        "'IS": [
          -1,
          104
        ],
        "'ISNOT": [
          -1,
          104
        ],
        "'SATISFIES": [
          -1,
          104
        ],
        "'RAISES": [
          -1,
          104
        ],
        "'SWITCH": [
          -1,
          104
        ],
        "'CASE": [
          -1,
          104
        ],
        "'DEFAULT": [
          -1,
          104
        ],
        "'YIELD": [
          -1,
          104
        ],
        "'PLUS": [
          -1,
          104
        ],
        "'DASH": [
          -1,
          104
        ],
        "'TIMES": [
          -1,
          104
        ],
        "'SLASH": [
          -1,
          104
        ],
        "'PERCENT": [
          -1,
          104
        ],
        "'EQUALEQUAL": [
          -1,
          104
        ],
        "'NEQ": [
          -1,
          104
        ],
        "'LEQ": [
          -1,
          104
        ],
        "'GEQ": [
          -1,
          104
        ],
        "'AND": [
          -1,
          104
        ],
        "'OR": [
          -1,
          104
        ],
        "'BANG": [
          -1,
          104
        ],
        "'DOT": [
          -1,
          104
        ],
        "'LBRACK": [
          -1,
          104
        ],
        "'RBRACK": [
          -1,
          104
        ],
        "'NUMBER": [
          -1,
          104
        ],
        "'TRUE": [
          -1,
          104
        ],
        "'FALSE": [
          -1,
          104
        ],
        "'NULL": [
          -1,
          104
        ],
        "'PARENAFTERBRACE": [
          -1,
          104
        ],
        "'SIEVE": [
          -1,
          104
        ],
        "'USING": [
          -1,
          104
        ],
        "'BLOCK": [
          -1,
          104
        ],
        "'TABLE": [
          -1,
          104
        ],
        "'ASK": [
          -1,
          104
        ],
        "'NEW": [
          -1,
          104
        ]
      },
      {
        "$": [
          -1,
          106
        ],
        "'NAME": [
          -1,
          106
        ],
        "'SEMI": [
          -1,
          106
        ],
        "'PARENNOSPACE": [
          -1,
          106
        ],
        "'STRING": [
          -1,
          106
        ],
        "'RPAREN": [
          -1,
          106
        ],
        "'LBRACE": [
          -1,
          106
        ],
        "'RBRACE": [
          -1,
          106
        ],
        "'SPY": [
          -1,
          106
        ],
        "'PARENSPACE": [
          -1,
          106
        ],
        "'COMMA": [
          -1,
          106
        ],
        "'INT": [
          -1,
          106
        ],
        "'LONG": [
          -1,
          106
        ],
        "'DOUBLE": [
          -1,
          106
        ],
        "'FLOAT": [
          -1,
          106
        ],
        "'BOOLEAN": [
          -1,
          106
        ],
        "'VOID": [
          -1,
          106
        ],
        "'LT": [
          -1,
          106
        ],
        "'GT": [
          -1,
          106
        ],
        "'THINARROW": [
          -1,
          106
        ],
        "'DATA": [
          -1,
          106
        ],
        "'IF": [
          -1,
          106
        ],
        "'FOR": [
          -1,
          106
        ],
        "'RETURN": [
          -1,
          106
        ],
        "'VAR": [
          -1,
          106
        ],
        "'REC": [
          -1,
          106
        ],
        "'ATCHECK": [
          -1,
          106
        ],
        "'ASSERTEQUALS": [
          -1,
          106
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          106
        ],
        "'ASSERTTRUE": [
          -1,
          106
        ],
        "'ASSERTFALSE": [
          -1,
          106
        ],
        "'ASSERTSATISFIES": [
          -1,
          106
        ],
        "'ASSERTRAISES": [
          -1,
          106
        ],
        "'IS": [
          -1,
          106
        ],
        "'ISNOT": [
          -1,
          106
        ],
        "'SATISFIES": [
          -1,
          106
        ],
        "'RAISES": [
          -1,
          106
        ],
        "'SWITCH": [
          -1,
          106
        ],
        "'CASE": [
          -1,
          106
        ],
        "'DEFAULT": [
          -1,
          106
        ],
        "'YIELD": [
          -1,
          106
        ],
        "'PLUS": [
          -1,
          106
        ],
        "'DASH": [
          -1,
          106
        ],
        "'TIMES": [
          -1,
          106
        ],
        "'SLASH": [
          -1,
          106
        ],
        "'PERCENT": [
          -1,
          106
        ],
        "'EQUALEQUAL": [
          -1,
          106
        ],
        "'NEQ": [
          -1,
          106
        ],
        "'LEQ": [
          -1,
          106
        ],
        "'GEQ": [
          -1,
          106
        ],
        "'AND": [
          -1,
          106
        ],
        "'OR": [
          -1,
          106
        ],
        "'BANG": [
          -1,
          106
        ],
        "'DOT": [
          -1,
          106
        ],
        "'LBRACK": [
          -1,
          106
        ],
        "'RBRACK": [
          -1,
          106
        ],
        "'NUMBER": [
          -1,
          106
        ],
        "'TRUE": [
          -1,
          106
        ],
        "'FALSE": [
          -1,
          106
        ],
        "'NULL": [
          -1,
          106
        ],
        "'PARENAFTERBRACE": [
          -1,
          106
        ],
        "'SIEVE": [
          -1,
          106
        ],
        "'USING": [
          -1,
          106
        ],
        "'BLOCK": [
          -1,
          106
        ],
        "'TABLE": [
          -1,
          106
        ],
        "'ASK": [
          -1,
          106
        ],
        "'NEW": [
          -1,
          106
        ]
      },
      {
        "$": [
          -1,
          108
        ],
        "'NAME": [
          -1,
          108
        ],
        "'SEMI": [
          -1,
          108
        ],
        "'PARENNOSPACE": [
          -1,
          108
        ],
        "'STRING": [
          -1,
          108
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'LBRACE": [
          -1,
          108
        ],
        "'RBRACE": [
          -1,
          108
        ],
        "'SPY": [
          -1,
          108
        ],
        "'PARENSPACE": [
          -1,
          108
        ],
        "'COMMA": [
          -1,
          108
        ],
        "'INT": [
          -1,
          108
        ],
        "'LONG": [
          -1,
          108
        ],
        "'DOUBLE": [
          -1,
          108
        ],
        "'FLOAT": [
          -1,
          108
        ],
        "'BOOLEAN": [
          -1,
          108
        ],
        "'VOID": [
          -1,
          108
        ],
        "'LT": [
          -1,
          108
        ],
        "'GT": [
          -1,
          108
        ],
        "'THINARROW": [
          -1,
          108
        ],
        "'DATA": [
          -1,
          108
        ],
        "'IF": [
          -1,
          108
        ],
        "'FOR": [
          -1,
          108
        ],
        "'RETURN": [
          -1,
          108
        ],
        "'VAR": [
          -1,
          108
        ],
        "'REC": [
          -1,
          108
        ],
        "'ATCHECK": [
          -1,
          108
        ],
        "'ASSERTEQUALS": [
          -1,
          108
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          108
        ],
        "'ASSERTTRUE": [
          -1,
          108
        ],
        "'ASSERTFALSE": [
          -1,
          108
        ],
        "'ASSERTSATISFIES": [
          -1,
          108
        ],
        "'ASSERTRAISES": [
          -1,
          108
        ],
        "'IS": [
          -1,
          108
        ],
        "'ISNOT": [
          -1,
          108
        ],
        "'SATISFIES": [
          -1,
          108
        ],
        "'RAISES": [
          -1,
          108
        ],
        "'SWITCH": [
          -1,
          108
        ],
        "'CASE": [
          -1,
          108
        ],
        "'DEFAULT": [
          -1,
          108
        ],
        "'YIELD": [
          -1,
          108
        ],
        "'PLUS": [
          -1,
          108
        ],
        "'DASH": [
          -1,
          108
        ],
        "'TIMES": [
          -1,
          108
        ],
        "'SLASH": [
          -1,
          108
        ],
        "'PERCENT": [
          -1,
          108
        ],
        "'EQUALEQUAL": [
          -1,
          108
        ],
        "'NEQ": [
          -1,
          108
        ],
        "'LEQ": [
          -1,
          108
        ],
        "'GEQ": [
          -1,
          108
        ],
        "'AND": [
          -1,
          108
        ],
        "'OR": [
          -1,
          108
        ],
        "'BANG": [
          -1,
          108
        ],
        "'DOT": [
          -1,
          108
        ],
        "'LBRACK": [
          -1,
          108
        ],
        "'RBRACK": [
          -1,
          108
        ],
        "'NUMBER": [
          -1,
          108
        ],
        "'TRUE": [
          -1,
          108
        ],
        "'FALSE": [
          -1,
          108
        ],
        "'NULL": [
          -1,
          108
        ],
        "'PARENAFTERBRACE": [
          -1,
          108
        ],
        "'SIEVE": [
          -1,
          108
        ],
        "'USING": [
          -1,
          108
        ],
        "'BLOCK": [
          -1,
          108
        ],
        "'TABLE": [
          -1,
          108
        ],
        "'ASK": [
          -1,
          108
        ],
        "'NEW": [
          -1,
          108
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          112
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'LBRACE": [
          113
        ]
      },
      {
        "'LBRACE": [
          114
        ]
      },
      {
        "'LBRACE": [
          115
        ]
      },
      {
        "'NAME": [
          116
        ]
      },
      {
        "'SEMI": [
          117
        ],
        "'AS": [
          118
        ],
        "'PARENNOSPACE": [
          119
        ]
      },
      {
        "'SEMI": [
          120
        ],
        "'AS": [
          121
        ],
        "'PARENNOSPACE": [
          122
        ]
      },
      {
        "'NAME": [
          -1,
          110
        ],
        "'RPAREN": [
          -1,
          110
        ],
        "'COMMA": [
          -1,
          110
        ],
        "'GT": [
          -1,
          110
        ],
        "'THINARROW": [
          -1,
          110
        ]
      },
      {
        "'NAME": [
          -1,
          112
        ],
        "'RPAREN": [
          -1,
          112
        ],
        "'COMMA": [
          -1,
          112
        ],
        "'GT": [
          -1,
          112
        ],
        "'THINARROW": [
          -1,
          112
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          123
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          124
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "type-ann_A6_I1?": [
          67
        ],
        "type-ann_A6_I1": [
          68
        ],
        "'LT": [
          69
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          114
        ],
        "'COMMA": [
          -1,
          114
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          125
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "type-ann_A7_I1?": [
          82
        ],
        "type-ann_A7_I1": [
          83
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          126
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          127
        ],
        "'RPAREN": [
          -1,
          116,
          118
        ],
        "'COMMA": [
          -1,
          118
        ]
      },
      {
        "'RPAREN": [
          128
        ]
      },
      {
        "'RPAREN": [
          -1,
          120
        ]
      },
      {
        "'COLON": [
          129
        ]
      },
      {
        "$": [
          -1,
          122
        ],
        "'NAME": [
          -1,
          122
        ],
        "'SEMI": [
          -1,
          122
        ],
        "'PARENNOSPACE": [
          -1,
          122
        ],
        "'STRING": [
          -1,
          122
        ],
        "'RPAREN": [
          -1,
          122
        ],
        "'LBRACE": [
          -1,
          122
        ],
        "'RBRACE": [
          -1,
          122
        ],
        "'SPY": [
          -1,
          122
        ],
        "'PARENSPACE": [
          -1,
          122
        ],
        "'COMMA": [
          -1,
          122
        ],
        "'INT": [
          -1,
          122
        ],
        "'LONG": [
          -1,
          122
        ],
        "'DOUBLE": [
          -1,
          122
        ],
        "'FLOAT": [
          -1,
          122
        ],
        "'BOOLEAN": [
          -1,
          122
        ],
        "'VOID": [
          -1,
          122
        ],
        "'LT": [
          -1,
          122
        ],
        "'GT": [
          -1,
          122
        ],
        "'THINARROW": [
          -1,
          122
        ],
        "'DATA": [
          -1,
          122
        ],
        "'IF": [
          -1,
          122
        ],
        "'FOR": [
          -1,
          122
        ],
        "'RETURN": [
          -1,
          122
        ],
        "'VAR": [
          -1,
          122
        ],
        "'REC": [
          -1,
          122
        ],
        "'ATCHECK": [
          -1,
          122
        ],
        "'ASSERTEQUALS": [
          -1,
          122
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          122
        ],
        "'ASSERTTRUE": [
          -1,
          122
        ],
        "'ASSERTFALSE": [
          -1,
          122
        ],
        "'ASSERTSATISFIES": [
          -1,
          122
        ],
        "'ASSERTRAISES": [
          -1,
          122
        ],
        "'IS": [
          -1,
          122
        ],
        "'ISNOT": [
          -1,
          122
        ],
        "'SATISFIES": [
          -1,
          122
        ],
        "'RAISES": [
          -1,
          122
        ],
        "'SWITCH": [
          -1,
          122
        ],
        "'CASE": [
          -1,
          122
        ],
        "'DEFAULT": [
          -1,
          122
        ],
        "'YIELD": [
          -1,
          122
        ],
        "'PLUS": [
          -1,
          122
        ],
        "'DASH": [
          -1,
          122
        ],
        "'TIMES": [
          -1,
          122
        ],
        "'SLASH": [
          -1,
          122
        ],
        "'PERCENT": [
          -1,
          122
        ],
        "'EQUALEQUAL": [
          -1,
          122
        ],
        "'NEQ": [
          -1,
          122
        ],
        "'LEQ": [
          -1,
          122
        ],
        "'GEQ": [
          -1,
          122
        ],
        "'AND": [
          -1,
          122
        ],
        "'OR": [
          -1,
          122
        ],
        "'BANG": [
          -1,
          122
        ],
        "'DOT": [
          -1,
          122
        ],
        "'LBRACK": [
          -1,
          122
        ],
        "'RBRACK": [
          -1,
          122
        ],
        "'NUMBER": [
          -1,
          122
        ],
        "'TRUE": [
          -1,
          122
        ],
        "'FALSE": [
          -1,
          122
        ],
        "'NULL": [
          -1,
          122
        ],
        "'PARENAFTERBRACE": [
          -1,
          122
        ],
        "'SIEVE": [
          -1,
          122
        ],
        "'USING": [
          -1,
          122
        ],
        "'BLOCK": [
          -1,
          122
        ],
        "'TABLE": [
          -1,
          122
        ],
        "'ASK": [
          -1,
          122
        ],
        "'NEW": [
          -1,
          122
        ]
      },
      {
        "record-expr_A0_I2*": [
          130
        ],
        "'RBRACE": [
          -1,
          124
        ],
        "'COMMA": [
          -1,
          124
        ]
      },
      {
        "type-ann_A6_I1?": [
          67
        ],
        "type-ann_A6_I1": [
          68
        ],
        "'LT": [
          69,
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
          114,
          22
        ],
        "'COMMA": [
          -1,
          24,
          114,
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
          126
        ],
        "type-ann_A7_I1_I1*": [
          131
        ],
        "'COMMA": [
          -1,
          126
        ],
        "'THINARROW": [
          -1,
          128,
          126
        ]
      },
      {
        "'THINARROW": [
          132
        ]
      },
      {
        "'THINARROW": [
          -1,
          130
        ]
      },
      {
        "'RPAREN": [
          133
        ]
      },
      {
        "'RPAREN": [
          134
        ]
      },
      {
        "'RPAREN": [
          -1,
          132
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          135
        ],
        "'RPAREN": [
          -1,
          134,
          136
        ],
        "'COMMA": [
          -1,
          136
        ]
      },
      {
        "'PARENNOSPACE": [
          136
        ],
        "'EQUALS": [
          137
        ]
      },
      {
        "'LBRACE": [
          138
        ]
      },
      {
        "$": [
          -1,
          138
        ],
        "'NAME": [
          -1,
          138
        ],
        "'PARENNOSPACE": [
          -1,
          138
        ],
        "'STRING": [
          -1,
          138
        ],
        "'LBRACE": [
          -1,
          138
        ],
        "'RBRACE": [
          -1,
          138
        ],
        "'SPY": [
          -1,
          138
        ],
        "'PARENSPACE": [
          -1,
          138
        ],
        "'INT": [
          -1,
          138
        ],
        "'LONG": [
          -1,
          138
        ],
        "'DOUBLE": [
          -1,
          138
        ],
        "'FLOAT": [
          -1,
          138
        ],
        "'BOOLEAN": [
          -1,
          138
        ],
        "'VOID": [
          -1,
          138
        ],
        "'DATA": [
          -1,
          138
        ],
        "'IF": [
          -1,
          138
        ],
        "'FOR": [
          -1,
          138
        ],
        "'RETURN": [
          -1,
          138
        ],
        "'VAR": [
          -1,
          138
        ],
        "'REC": [
          -1,
          138
        ],
        "'ATCHECK": [
          -1,
          138
        ],
        "'ASSERTEQUALS": [
          -1,
          138
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          138
        ],
        "'ASSERTTRUE": [
          -1,
          138
        ],
        "'ASSERTFALSE": [
          -1,
          138
        ],
        "'ASSERTSATISFIES": [
          -1,
          138
        ],
        "'ASSERTRAISES": [
          -1,
          138
        ],
        "'SWITCH": [
          -1,
          138
        ],
        "'YIELD": [
          -1,
          138
        ],
        "'DASH": [
          -1,
          138
        ],
        "'BANG": [
          -1,
          138
        ],
        "'LBRACK": [
          -1,
          138
        ],
        "'NUMBER": [
          -1,
          138
        ],
        "'TRUE": [
          -1,
          138
        ],
        "'FALSE": [
          -1,
          138
        ],
        "'NULL": [
          -1,
          138
        ],
        "'PARENAFTERBRACE": [
          -1,
          138
        ],
        "'SIEVE": [
          -1,
          138
        ],
        "'BLOCK": [
          -1,
          138
        ],
        "'TABLE": [
          -1,
          138
        ],
        "'ASK": [
          -1,
          138
        ],
        "'NEW": [
          -1,
          138
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
        "'PARENNOSPACE": [
          -1,
          140
        ],
        "'STRING": [
          -1,
          140
        ],
        "'LBRACE": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          140
        ],
        "'YIELD": [
          -1,
          140
        ],
        "'DASH": [
          -1,
          140
        ],
        "'BANG": [
          -1,
          140
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          140
        ],
        "'BLOCK": [
          -1,
          140
        ],
        "'TABLE": [
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
        "$": [
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
        "'LBRACE": [
          -1,
          142
        ],
        "'RBRACE": [
          -1,
          142
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          142
        ],
        "'FOR": [
          -1,
          142
        ],
        "'RETURN": [
          -1,
          142
        ],
        "'VAR": [
          -1,
          142
        ],
        "'REC": [
          -1,
          142
        ],
        "'ATCHECK": [
          -1,
          142
        ],
        "'ASSERTEQUALS": [
          -1,
          142
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          142
        ],
        "'ASSERTTRUE": [
          -1,
          142
        ],
        "'ASSERTFALSE": [
          -1,
          142
        ],
        "'ASSERTSATISFIES": [
          -1,
          142
        ],
        "'ASSERTRAISES": [
          -1,
          142
        ],
        "'SWITCH": [
          -1,
          142
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          142
        ],
        "'BLOCK": [
          -1,
          142
        ],
        "'TABLE": [
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
        "type-ann_A6_I1?": [
          67
        ],
        "type-ann_A6_I1": [
          68
        ],
        "'LT": [
          69
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
          139
        ]
      },
      {
        "'NAME": [
          140
        ]
      },
      {
        "check-block_A1_I2*": [
          141
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
        "'LBRACE": [
          -1,
          144
        ],
        "'RBRACE": [
          -1,
          144
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          144
        ],
        "'FOR": [
          -1,
          144
        ],
        "'RETURN": [
          -1,
          144
        ],
        "'VAR": [
          -1,
          144
        ],
        "'REC": [
          -1,
          144
        ],
        "'ATCHECK": [
          -1,
          144
        ],
        "'ASSERTEQUALS": [
          -1,
          144
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          144
        ],
        "'ASSERTTRUE": [
          -1,
          144
        ],
        "'ASSERTFALSE": [
          -1,
          144
        ],
        "'ASSERTSATISFIES": [
          -1,
          144
        ],
        "'ASSERTRAISES": [
          -1,
          144
        ],
        "'SWITCH": [
          -1,
          144
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          144
        ],
        "'BLOCK": [
          -1,
          144
        ],
        "'TABLE": [
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
          142
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          143
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'LT": [
          144
        ],
        "'GT": [
          145
        ],
        "binop-expr_I1": [
          146
        ],
        "binop": [
          147
        ],
        "'PLUS": [
          148
        ],
        "'DASH": [
          149,
          146
        ],
        "'TIMES": [
          150
        ],
        "'SLASH": [
          151
        ],
        "'PERCENT": [
          152
        ],
        "'EQUALEQUAL": [
          153
        ],
        "'NEQ": [
          154
        ],
        "'LEQ": [
          155
        ],
        "'GEQ": [
          156
        ],
        "'AND": [
          157
        ],
        "'OR": [
          158
        ],
        "$": [
          -1,
          146
        ],
        "'NAME": [
          -1,
          146
        ],
        "'SEMI": [
          -1,
          146
        ],
        "'PARENNOSPACE": [
          -1,
          146
        ],
        "'STRING": [
          -1,
          146
        ],
        "'RPAREN": [
          -1,
          146
        ],
        "'LBRACE": [
          -1,
          146
        ],
        "'RBRACE": [
          -1,
          146
        ],
        "'SPY": [
          -1,
          146
        ],
        "'PARENSPACE": [
          -1,
          146
        ],
        "'COMMA": [
          -1,
          146
        ],
        "'INT": [
          -1,
          146
        ],
        "'LONG": [
          -1,
          146
        ],
        "'DOUBLE": [
          -1,
          146
        ],
        "'FLOAT": [
          -1,
          146
        ],
        "'BOOLEAN": [
          -1,
          146
        ],
        "'VOID": [
          -1,
          146
        ],
        "'THINARROW": [
          -1,
          146
        ],
        "'DATA": [
          -1,
          146
        ],
        "'IF": [
          -1,
          146
        ],
        "'FOR": [
          -1,
          146
        ],
        "'RETURN": [
          -1,
          146
        ],
        "'VAR": [
          -1,
          146
        ],
        "'REC": [
          -1,
          146
        ],
        "'ATCHECK": [
          -1,
          146
        ],
        "'ASSERTEQUALS": [
          -1,
          146
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          146
        ],
        "'ASSERTTRUE": [
          -1,
          146
        ],
        "'ASSERTFALSE": [
          -1,
          146
        ],
        "'ASSERTSATISFIES": [
          -1,
          146
        ],
        "'ASSERTRAISES": [
          -1,
          146
        ],
        "'IS": [
          -1,
          146
        ],
        "'ISNOT": [
          -1,
          146
        ],
        "'SATISFIES": [
          -1,
          146
        ],
        "'RAISES": [
          -1,
          146
        ],
        "'SWITCH": [
          -1,
          146
        ],
        "'CASE": [
          -1,
          146
        ],
        "'DEFAULT": [
          -1,
          146
        ],
        "'YIELD": [
          -1,
          146
        ],
        "'BANG": [
          -1,
          146
        ],
        "'LBRACK": [
          -1,
          146
        ],
        "'RBRACK": [
          -1,
          146
        ],
        "'NUMBER": [
          -1,
          146
        ],
        "'TRUE": [
          -1,
          146
        ],
        "'FALSE": [
          -1,
          146
        ],
        "'NULL": [
          -1,
          146
        ],
        "'PARENAFTERBRACE": [
          -1,
          146
        ],
        "'SIEVE": [
          -1,
          146
        ],
        "'USING": [
          -1,
          146
        ],
        "'BLOCK": [
          -1,
          146
        ],
        "'TABLE": [
          -1,
          146
        ],
        "'ASK": [
          -1,
          146
        ],
        "'NEW": [
          -1,
          146
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          22
        ],
        "'USING": [
          -1,
          22
        ],
        "'BLOCK": [
          -1,
          22
        ],
        "'TABLE": [
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
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          84
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "$": [
          -1,
          148
        ],
        "'NAME": [
          -1,
          148
        ],
        "'SEMI": [
          -1,
          148
        ],
        "'PARENNOSPACE": [
          -1,
          148
        ],
        "'STRING": [
          -1,
          148
        ],
        "'RPAREN": [
          -1,
          148
        ],
        "'LBRACE": [
          -1,
          148
        ],
        "'RBRACE": [
          -1,
          148
        ],
        "'SPY": [
          -1,
          148
        ],
        "'PARENSPACE": [
          -1,
          148
        ],
        "'COMMA": [
          -1,
          148
        ],
        "'INT": [
          -1,
          148
        ],
        "'LONG": [
          -1,
          148
        ],
        "'DOUBLE": [
          -1,
          148
        ],
        "'FLOAT": [
          -1,
          148
        ],
        "'BOOLEAN": [
          -1,
          148
        ],
        "'VOID": [
          -1,
          148
        ],
        "'LT": [
          -1,
          148
        ],
        "'GT": [
          -1,
          148
        ],
        "'THINARROW": [
          -1,
          148
        ],
        "'DATA": [
          -1,
          148
        ],
        "'IF": [
          -1,
          148
        ],
        "'FOR": [
          -1,
          148
        ],
        "'RETURN": [
          -1,
          148
        ],
        "'VAR": [
          -1,
          148
        ],
        "'REC": [
          -1,
          148
        ],
        "'ATCHECK": [
          -1,
          148
        ],
        "'ASSERTEQUALS": [
          -1,
          148
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          148
        ],
        "'ASSERTTRUE": [
          -1,
          148
        ],
        "'ASSERTFALSE": [
          -1,
          148
        ],
        "'ASSERTSATISFIES": [
          -1,
          148
        ],
        "'ASSERTRAISES": [
          -1,
          148
        ],
        "'IS": [
          -1,
          148
        ],
        "'ISNOT": [
          -1,
          148
        ],
        "'SATISFIES": [
          -1,
          148
        ],
        "'RAISES": [
          -1,
          148
        ],
        "'SWITCH": [
          -1,
          148
        ],
        "'CASE": [
          -1,
          148
        ],
        "'DEFAULT": [
          -1,
          148
        ],
        "'YIELD": [
          -1,
          148
        ],
        "'PLUS": [
          -1,
          148
        ],
        "'DASH": [
          -1,
          148
        ],
        "'TIMES": [
          -1,
          148
        ],
        "'SLASH": [
          -1,
          148
        ],
        "'PERCENT": [
          -1,
          148
        ],
        "'EQUALEQUAL": [
          -1,
          148
        ],
        "'NEQ": [
          -1,
          148
        ],
        "'LEQ": [
          -1,
          148
        ],
        "'GEQ": [
          -1,
          148
        ],
        "'AND": [
          -1,
          148
        ],
        "'OR": [
          -1,
          148
        ],
        "'BANG": [
          -1,
          148
        ],
        "'LBRACK": [
          -1,
          148
        ],
        "'RBRACK": [
          -1,
          148
        ],
        "'NUMBER": [
          -1,
          148
        ],
        "'TRUE": [
          -1,
          148
        ],
        "'FALSE": [
          -1,
          148
        ],
        "'NULL": [
          -1,
          148
        ],
        "'PARENAFTERBRACE": [
          -1,
          148
        ],
        "'SIEVE": [
          -1,
          148
        ],
        "'USING": [
          -1,
          148
        ],
        "'BLOCK": [
          -1,
          148
        ],
        "'TABLE": [
          -1,
          148
        ],
        "'ASK": [
          -1,
          148
        ],
        "'NEW": [
          -1,
          148
        ]
      },
      {
        "$": [
          -1,
          150
        ],
        "'NAME": [
          -1,
          150
        ],
        "'SEMI": [
          -1,
          150
        ],
        "'PARENNOSPACE": [
          -1,
          150
        ],
        "'STRING": [
          -1,
          150
        ],
        "'RPAREN": [
          -1,
          150
        ],
        "'LBRACE": [
          -1,
          150
        ],
        "'RBRACE": [
          -1,
          150
        ],
        "'SPY": [
          -1,
          150
        ],
        "'PARENSPACE": [
          -1,
          150
        ],
        "'COMMA": [
          -1,
          150
        ],
        "'INT": [
          -1,
          150
        ],
        "'LONG": [
          -1,
          150
        ],
        "'DOUBLE": [
          -1,
          150
        ],
        "'FLOAT": [
          -1,
          150
        ],
        "'BOOLEAN": [
          -1,
          150
        ],
        "'VOID": [
          -1,
          150
        ],
        "'LT": [
          -1,
          150
        ],
        "'GT": [
          -1,
          150
        ],
        "'THINARROW": [
          -1,
          150
        ],
        "'DATA": [
          -1,
          150
        ],
        "'IF": [
          -1,
          150
        ],
        "'FOR": [
          -1,
          150
        ],
        "'RETURN": [
          -1,
          150
        ],
        "'VAR": [
          -1,
          150
        ],
        "'REC": [
          -1,
          150
        ],
        "'ATCHECK": [
          -1,
          150
        ],
        "'ASSERTEQUALS": [
          -1,
          150
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          150
        ],
        "'ASSERTTRUE": [
          -1,
          150
        ],
        "'ASSERTFALSE": [
          -1,
          150
        ],
        "'ASSERTSATISFIES": [
          -1,
          150
        ],
        "'ASSERTRAISES": [
          -1,
          150
        ],
        "'IS": [
          -1,
          150
        ],
        "'ISNOT": [
          -1,
          150
        ],
        "'SATISFIES": [
          -1,
          150
        ],
        "'RAISES": [
          -1,
          150
        ],
        "'SWITCH": [
          -1,
          150
        ],
        "'CASE": [
          -1,
          150
        ],
        "'DEFAULT": [
          -1,
          150
        ],
        "'YIELD": [
          -1,
          150
        ],
        "'PLUS": [
          -1,
          150
        ],
        "'DASH": [
          -1,
          150
        ],
        "'TIMES": [
          -1,
          150
        ],
        "'SLASH": [
          -1,
          150
        ],
        "'PERCENT": [
          -1,
          150
        ],
        "'EQUALEQUAL": [
          -1,
          150
        ],
        "'NEQ": [
          -1,
          150
        ],
        "'LEQ": [
          -1,
          150
        ],
        "'GEQ": [
          -1,
          150
        ],
        "'AND": [
          -1,
          150
        ],
        "'OR": [
          -1,
          150
        ],
        "'BANG": [
          -1,
          150
        ],
        "'LBRACK": [
          -1,
          150
        ],
        "'RBRACK": [
          -1,
          150
        ],
        "'NUMBER": [
          -1,
          150
        ],
        "'TRUE": [
          -1,
          150
        ],
        "'FALSE": [
          -1,
          150
        ],
        "'NULL": [
          -1,
          150
        ],
        "'PARENAFTERBRACE": [
          -1,
          150
        ],
        "'SIEVE": [
          -1,
          150
        ],
        "'USING": [
          -1,
          150
        ],
        "'BLOCK": [
          -1,
          150
        ],
        "'TABLE": [
          -1,
          150
        ],
        "'ASK": [
          -1,
          150
        ],
        "'NEW": [
          -1,
          150
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          159
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "app-or-access_A0_I2?": [
          160
        ],
        "app-or-access_A0_I2": [
          161
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ],
        "'RPAREN": [
          -1,
          152
        ]
      },
      {
        "'NAME": [
          162
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          163
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'COLON": [
          164
        ]
      },
      {
        "'NAME": [
          165
        ],
        "'PARENSPACE": [
          166
        ]
      },
      {
        "$": [
          -1,
          154
        ],
        "'NAME": [
          -1,
          154
        ],
        "'SEMI": [
          -1,
          154
        ],
        "'PARENNOSPACE": [
          -1,
          154
        ],
        "'STRING": [
          -1,
          154
        ],
        "'RPAREN": [
          -1,
          154
        ],
        "'LBRACE": [
          -1,
          154
        ],
        "'RBRACE": [
          -1,
          154
        ],
        "'SPY": [
          -1,
          154
        ],
        "'PARENSPACE": [
          -1,
          154
        ],
        "'COMMA": [
          -1,
          154
        ],
        "'INT": [
          -1,
          154
        ],
        "'LONG": [
          -1,
          154
        ],
        "'DOUBLE": [
          -1,
          154
        ],
        "'FLOAT": [
          -1,
          154
        ],
        "'BOOLEAN": [
          -1,
          154
        ],
        "'VOID": [
          -1,
          154
        ],
        "'LT": [
          -1,
          154
        ],
        "'GT": [
          -1,
          154
        ],
        "'THINARROW": [
          -1,
          154
        ],
        "'DATA": [
          -1,
          154
        ],
        "'IF": [
          -1,
          154
        ],
        "'FOR": [
          -1,
          154
        ],
        "'RETURN": [
          -1,
          154
        ],
        "'VAR": [
          -1,
          154
        ],
        "'REC": [
          -1,
          154
        ],
        "'ATCHECK": [
          -1,
          154
        ],
        "'ASSERTEQUALS": [
          -1,
          154
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          154
        ],
        "'ASSERTTRUE": [
          -1,
          154
        ],
        "'ASSERTFALSE": [
          -1,
          154
        ],
        "'ASSERTSATISFIES": [
          -1,
          154
        ],
        "'ASSERTRAISES": [
          -1,
          154
        ],
        "'IS": [
          -1,
          154
        ],
        "'ISNOT": [
          -1,
          154
        ],
        "'SATISFIES": [
          -1,
          154
        ],
        "'RAISES": [
          -1,
          154
        ],
        "'SWITCH": [
          -1,
          154
        ],
        "'CASE": [
          -1,
          154
        ],
        "'DEFAULT": [
          -1,
          154
        ],
        "'YIELD": [
          -1,
          154
        ],
        "'PLUS": [
          -1,
          154
        ],
        "'DASH": [
          -1,
          154
        ],
        "'TIMES": [
          -1,
          154
        ],
        "'SLASH": [
          -1,
          154
        ],
        "'PERCENT": [
          -1,
          154
        ],
        "'EQUALEQUAL": [
          -1,
          154
        ],
        "'NEQ": [
          -1,
          154
        ],
        "'LEQ": [
          -1,
          154
        ],
        "'GEQ": [
          -1,
          154
        ],
        "'AND": [
          -1,
          154
        ],
        "'OR": [
          -1,
          154
        ],
        "'BANG": [
          -1,
          154
        ],
        "'DOT": [
          -1,
          154
        ],
        "'LBRACK": [
          -1,
          154
        ],
        "'RBRACK": [
          -1,
          154
        ],
        "'NUMBER": [
          -1,
          154
        ],
        "'TRUE": [
          -1,
          154
        ],
        "'FALSE": [
          -1,
          154
        ],
        "'NULL": [
          -1,
          154
        ],
        "'PARENAFTERBRACE": [
          -1,
          154
        ],
        "'SIEVE": [
          -1,
          154
        ],
        "'USING": [
          -1,
          154
        ],
        "'BLOCK": [
          -1,
          154
        ],
        "'TABLE": [
          -1,
          154
        ],
        "'ASK": [
          -1,
          154
        ],
        "'NEW": [
          -1,
          154
        ]
      },
      {
        "'NAME": [
          80
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          73
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "full-expr": [
          84
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "lambda-expr_A0_I1?": [
          85
        ],
        "lambda-expr_A0_I1": [
          86
        ],
        "lambda-param": [
          87
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ],
        "'RPAREN": [
          -1,
          52
        ]
      },
      {
        "'RPAREN": [
          167
        ]
      },
      {
        "'USING": [
          168
        ]
      },
      {
        "block-expr_I2*": [
          169
        ],
        "'NAME": [
          -1,
          156
        ],
        "'PARENNOSPACE": [
          -1,
          156
        ],
        "'STRING": [
          -1,
          156
        ],
        "'LBRACE": [
          -1,
          156
        ],
        "'RBRACE": [
          -1,
          156
        ],
        "'SPY": [
          -1,
          156
        ],
        "'PARENSPACE": [
          -1,
          156
        ],
        "'INT": [
          -1,
          156
        ],
        "'LONG": [
          -1,
          156
        ],
        "'DOUBLE": [
          -1,
          156
        ],
        "'FLOAT": [
          -1,
          156
        ],
        "'BOOLEAN": [
          -1,
          156
        ],
        "'VOID": [
          -1,
          156
        ],
        "'DATA": [
          -1,
          156
        ],
        "'IF": [
          -1,
          156
        ],
        "'FOR": [
          -1,
          156
        ],
        "'RETURN": [
          -1,
          156
        ],
        "'VAR": [
          -1,
          156
        ],
        "'REC": [
          -1,
          156
        ],
        "'ATCHECK": [
          -1,
          156
        ],
        "'SWITCH": [
          -1,
          156
        ],
        "'YIELD": [
          -1,
          156
        ],
        "'DASH": [
          -1,
          156
        ],
        "'BANG": [
          -1,
          156
        ],
        "'LBRACK": [
          -1,
          156
        ],
        "'NUMBER": [
          -1,
          156
        ],
        "'TRUE": [
          -1,
          156
        ],
        "'FALSE": [
          -1,
          156
        ],
        "'NULL": [
          -1,
          156
        ],
        "'PARENAFTERBRACE": [
          -1,
          156
        ],
        "'SIEVE": [
          -1,
          156
        ],
        "'BLOCK": [
          -1,
          156
        ],
        "'TABLE": [
          -1,
          156
        ],
        "'ASK": [
          -1,
          156
        ],
        "'NEW": [
          -1,
          156
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          170
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "table-header": [
          171
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          172
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "ask-branch": [
          173
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'PARENNOSPACE": [
          174
        ]
      },
      {
        "$": [
          -1,
          158
        ],
        "'IMPORT": [
          -1,
          158
        ],
        "'NAME": [
          -1,
          158
        ],
        "'PARENNOSPACE": [
          -1,
          158
        ],
        "'STRING": [
          -1,
          158
        ],
        "'INCLUDE": [
          -1,
          158
        ],
        "'LBRACE": [
          -1,
          158
        ],
        "'PARENSPACE": [
          -1,
          158
        ],
        "'INT": [
          -1,
          158
        ],
        "'LONG": [
          -1,
          158
        ],
        "'DOUBLE": [
          -1,
          158
        ],
        "'FLOAT": [
          -1,
          158
        ],
        "'BOOLEAN": [
          -1,
          158
        ],
        "'VOID": [
          -1,
          158
        ],
        "'DATA": [
          -1,
          158
        ],
        "'VAR": [
          -1,
          158
        ],
        "'REC": [
          -1,
          158
        ],
        "'ATCHECK": [
          -1,
          158
        ],
        "'SWITCH": [
          -1,
          158
        ],
        "'DASH": [
          -1,
          158
        ],
        "'BANG": [
          -1,
          158
        ],
        "'LBRACK": [
          -1,
          158
        ],
        "'NUMBER": [
          -1,
          158
        ],
        "'TRUE": [
          -1,
          158
        ],
        "'FALSE": [
          -1,
          158
        ],
        "'NULL": [
          -1,
          158
        ],
        "'PARENAFTERBRACE": [
          -1,
          158
        ],
        "'SIEVE": [
          -1,
          158
        ],
        "'BLOCK": [
          -1,
          158
        ],
        "'TABLE": [
          -1,
          158
        ],
        "'ASK": [
          -1,
          158
        ],
        "'NEW": [
          -1,
          158
        ]
      },
      {
        "'NAME": [
          175
        ]
      },
      {
        "'STRING": [
          176
        ]
      },
      {
        "$": [
          -1,
          160
        ],
        "'IMPORT": [
          -1,
          160
        ],
        "'NAME": [
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
        "'INCLUDE": [
          -1,
          160
        ],
        "'LBRACE": [
          -1,
          160
        ],
        "'PARENSPACE": [
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
        "'DATA": [
          -1,
          160
        ],
        "'VAR": [
          -1,
          160
        ],
        "'REC": [
          -1,
          160
        ],
        "'ATCHECK": [
          -1,
          160
        ],
        "'SWITCH": [
          -1,
          160
        ],
        "'DASH": [
          -1,
          160
        ],
        "'BANG": [
          -1,
          160
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          160
        ],
        "'BLOCK": [
          -1,
          160
        ],
        "'TABLE": [
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
          177
        ]
      },
      {
        "'STRING": [
          178
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          179
        ],
        "'COMMA": [
          -1,
          162
        ],
        "'GT": [
          -1,
          162
        ]
      },
      {
        "'SEMI": [
          180
        ],
        "assign-stmt_I3?": [
          181
        ],
        "assign-stmt_I3": [
          182
        ],
        "$": [
          -1,
          164,
          166
        ],
        "'NAME": [
          -1,
          164,
          166
        ],
        "'PARENNOSPACE": [
          -1,
          164,
          166
        ],
        "'STRING": [
          -1,
          164,
          166
        ],
        "'LBRACE": [
          -1,
          164,
          166
        ],
        "'RBRACE": [
          -1,
          164,
          166
        ],
        "'SPY": [
          -1,
          164,
          166
        ],
        "'PARENSPACE": [
          -1,
          164,
          166
        ],
        "'INT": [
          -1,
          164,
          166
        ],
        "'LONG": [
          -1,
          164,
          166
        ],
        "'DOUBLE": [
          -1,
          164,
          166
        ],
        "'FLOAT": [
          -1,
          164,
          166
        ],
        "'BOOLEAN": [
          -1,
          164,
          166
        ],
        "'VOID": [
          -1,
          164,
          166
        ],
        "'DATA": [
          -1,
          164,
          166
        ],
        "'IF": [
          -1,
          164,
          166
        ],
        "'FOR": [
          -1,
          164,
          166
        ],
        "'RETURN": [
          -1,
          164,
          166
        ],
        "'VAR": [
          -1,
          164,
          166
        ],
        "'REC": [
          -1,
          164,
          166
        ],
        "'ATCHECK": [
          -1,
          164,
          166
        ],
        "'ASSERTEQUALS": [
          -1,
          164,
          166
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          164,
          166
        ],
        "'ASSERTTRUE": [
          -1,
          164,
          166
        ],
        "'ASSERTFALSE": [
          -1,
          164,
          166
        ],
        "'ASSERTSATISFIES": [
          -1,
          164,
          166
        ],
        "'ASSERTRAISES": [
          -1,
          164,
          166
        ],
        "'SWITCH": [
          -1,
          164,
          166
        ],
        "'YIELD": [
          -1,
          164,
          166
        ],
        "'DASH": [
          -1,
          164,
          166
        ],
        "'BANG": [
          -1,
          164,
          166
        ],
        "'LBRACK": [
          -1,
          164,
          166
        ],
        "'NUMBER": [
          -1,
          164,
          166
        ],
        "'TRUE": [
          -1,
          164,
          166
        ],
        "'FALSE": [
          -1,
          164,
          166
        ],
        "'NULL": [
          -1,
          164,
          166
        ],
        "'PARENAFTERBRACE": [
          -1,
          164,
          166
        ],
        "'SIEVE": [
          -1,
          164,
          166
        ],
        "'BLOCK": [
          -1,
          164,
          166
        ],
        "'TABLE": [
          -1,
          164,
          166
        ],
        "'ASK": [
          -1,
          164,
          166
        ],
        "'NEW": [
          -1,
          164,
          166
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          131
        ],
        "'COMMA": [
          -1,
          126
        ],
        "'THINARROW": [
          -1,
          128,
          126
        ]
      },
      {
        "'RPAREN": [
          -1,
          168
        ],
        "'COMMA": [
          -1,
          168
        ]
      },
      {
        "'COMMA": [
          183
        ],
        "lambda-expr_A1_I1_I1": [
          184
        ],
        "'RPAREN": [
          -1,
          170
        ]
      },
      {
        "'THINARROW": [
          185
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          186
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RBRACE": [
          187
        ],
        "'COMMA": [
          188
        ],
        "record-expr_A0_I2": [
          189
        ]
      },
      {
        "'COMMA": [
          190
        ],
        "type-ann_A7_I1_I1": [
          191
        ],
        "'THINARROW": [
          -1,
          172
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          192
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "$": [
          -1,
          174
        ],
        "'NAME": [
          -1,
          174
        ],
        "'SEMI": [
          -1,
          174
        ],
        "'PARENNOSPACE": [
          -1,
          174
        ],
        "'STRING": [
          -1,
          174
        ],
        "'RPAREN": [
          -1,
          174
        ],
        "'LBRACE": [
          -1,
          174
        ],
        "'RBRACE": [
          -1,
          174
        ],
        "'SPY": [
          -1,
          174
        ],
        "'PARENSPACE": [
          -1,
          174
        ],
        "'COMMA": [
          -1,
          174
        ],
        "'INT": [
          -1,
          174
        ],
        "'LONG": [
          -1,
          174
        ],
        "'DOUBLE": [
          -1,
          174
        ],
        "'FLOAT": [
          -1,
          174
        ],
        "'BOOLEAN": [
          -1,
          174
        ],
        "'VOID": [
          -1,
          174
        ],
        "'LT": [
          -1,
          174
        ],
        "'GT": [
          -1,
          174
        ],
        "'THINARROW": [
          -1,
          174
        ],
        "'DATA": [
          -1,
          174
        ],
        "'IF": [
          -1,
          174
        ],
        "'FOR": [
          -1,
          174
        ],
        "'RETURN": [
          -1,
          174
        ],
        "'VAR": [
          -1,
          174
        ],
        "'REC": [
          -1,
          174
        ],
        "'ATCHECK": [
          -1,
          174
        ],
        "'ASSERTEQUALS": [
          -1,
          174
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          174
        ],
        "'ASSERTTRUE": [
          -1,
          174
        ],
        "'ASSERTFALSE": [
          -1,
          174
        ],
        "'ASSERTSATISFIES": [
          -1,
          174
        ],
        "'ASSERTRAISES": [
          -1,
          174
        ],
        "'IS": [
          -1,
          174
        ],
        "'ISNOT": [
          -1,
          174
        ],
        "'SATISFIES": [
          -1,
          174
        ],
        "'RAISES": [
          -1,
          174
        ],
        "'SWITCH": [
          -1,
          174
        ],
        "'CASE": [
          -1,
          174
        ],
        "'DEFAULT": [
          -1,
          174
        ],
        "'YIELD": [
          -1,
          174
        ],
        "'PLUS": [
          -1,
          174
        ],
        "'DASH": [
          -1,
          174
        ],
        "'TIMES": [
          -1,
          174
        ],
        "'SLASH": [
          -1,
          174
        ],
        "'PERCENT": [
          -1,
          174
        ],
        "'EQUALEQUAL": [
          -1,
          174
        ],
        "'NEQ": [
          -1,
          174
        ],
        "'LEQ": [
          -1,
          174
        ],
        "'GEQ": [
          -1,
          174
        ],
        "'AND": [
          -1,
          174
        ],
        "'OR": [
          -1,
          174
        ],
        "'BANG": [
          -1,
          174
        ],
        "'DOT": [
          -1,
          174
        ],
        "'LBRACK": [
          -1,
          174
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          174
        ],
        "'USING": [
          -1,
          174
        ],
        "'BLOCK": [
          -1,
          174
        ],
        "'TABLE": [
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
        "'THINARROW": [
          193
        ]
      },
      {
        "'COMMA": [
          194
        ],
        "lambda-expr_A0_I1_I1": [
          195
        ],
        "'RPAREN": [
          -1,
          176
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          196
        ],
        "fun-decl_I3?": [
          197
        ],
        "fun-decl_I3": [
          198
        ],
        "param": [
          199
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'RPAREN": [
          -1,
          178
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          200
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          201
        ],
        "variant-decl": [
          202
        ]
      },
      {
        "'EQUALS": [
          203
        ]
      },
      {
        "'EQUALS": [
          204
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          213
        ],
        "block-stmt": [
          214
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          221
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          223
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "check-block_A1_I2": [
          226
        ],
        "'ASSERTEQUALS": [
          227
        ],
        "'ASSERTNOTEQUALS": [
          228
        ],
        "'ASSERTTRUE": [
          229
        ],
        "'ASSERTFALSE": [
          230
        ],
        "'ASSERTSATISFIES": [
          231
        ],
        "'ASSERTRAISES": [
          232
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'PARENNOSPACE": [
          234
        ]
      },
      {
        "'RPAREN": [
          235
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
        "'LBRACE": [
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
        "'SIEVE": [
          -1,
          180
        ],
        "'BLOCK": [
          -1,
          180
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'SIEVE": [
          -1,
          182
        ],
        "'BLOCK": [
          -1,
          182
        ],
        "'TABLE": [
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
        "$": [
          -1,
          184
        ],
        "'NAME": [
          -1,
          184
        ],
        "'SEMI": [
          -1,
          184
        ],
        "'PARENNOSPACE": [
          -1,
          184
        ],
        "'STRING": [
          -1,
          184
        ],
        "'RPAREN": [
          -1,
          184
        ],
        "'LBRACE": [
          -1,
          184
        ],
        "'RBRACE": [
          -1,
          184
        ],
        "'SPY": [
          -1,
          184
        ],
        "'PARENSPACE": [
          -1,
          184
        ],
        "'COMMA": [
          -1,
          184
        ],
        "'INT": [
          -1,
          184
        ],
        "'LONG": [
          -1,
          184
        ],
        "'DOUBLE": [
          -1,
          184
        ],
        "'FLOAT": [
          -1,
          184
        ],
        "'BOOLEAN": [
          -1,
          184
        ],
        "'VOID": [
          -1,
          184
        ],
        "'LT": [
          -1,
          184
        ],
        "'GT": [
          -1,
          184
        ],
        "'THINARROW": [
          -1,
          184
        ],
        "'DATA": [
          -1,
          184
        ],
        "'IF": [
          -1,
          184
        ],
        "'FOR": [
          -1,
          184
        ],
        "'RETURN": [
          -1,
          184
        ],
        "'VAR": [
          -1,
          184
        ],
        "'REC": [
          -1,
          184
        ],
        "'ATCHECK": [
          -1,
          184
        ],
        "'ASSERTEQUALS": [
          -1,
          184
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          184
        ],
        "'ASSERTTRUE": [
          -1,
          184
        ],
        "'ASSERTFALSE": [
          -1,
          184
        ],
        "'ASSERTSATISFIES": [
          -1,
          184
        ],
        "'ASSERTRAISES": [
          -1,
          184
        ],
        "'IS": [
          -1,
          184
        ],
        "'ISNOT": [
          -1,
          184
        ],
        "'SATISFIES": [
          -1,
          184
        ],
        "'RAISES": [
          -1,
          184
        ],
        "'SWITCH": [
          -1,
          184
        ],
        "'CASE": [
          -1,
          184
        ],
        "'DEFAULT": [
          -1,
          184
        ],
        "'YIELD": [
          -1,
          184
        ],
        "'PLUS": [
          -1,
          184
        ],
        "'DASH": [
          -1,
          184
        ],
        "'TIMES": [
          -1,
          184
        ],
        "'SLASH": [
          -1,
          184
        ],
        "'PERCENT": [
          -1,
          184
        ],
        "'EQUALEQUAL": [
          -1,
          184
        ],
        "'NEQ": [
          -1,
          184
        ],
        "'LEQ": [
          -1,
          184
        ],
        "'GEQ": [
          -1,
          184
        ],
        "'AND": [
          -1,
          184
        ],
        "'OR": [
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
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          184
        ],
        "'USING": [
          -1,
          184
        ],
        "'BLOCK": [
          -1,
          184
        ],
        "'TABLE": [
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
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          236
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
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
        "'LBRACE": [
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
        "'SIEVE": [
          -1,
          186
        ],
        "'BLOCK": [
          -1,
          186
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'SIEVE": [
          -1,
          188
        ],
        "'BLOCK": [
          -1,
          188
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'SIEVE": [
          -1,
          190
        ],
        "'BLOCK": [
          -1,
          190
        ],
        "'TABLE": [
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
        "'NAME": [
          -1,
          192
        ],
        "'STRING": [
          -1,
          192
        ],
        "'LBRACE": [
          -1,
          192
        ],
        "'PARENSPACE": [
          -1,
          192
        ],
        "'SWITCH": [
          -1,
          192
        ],
        "'DASH": [
          -1,
          192
        ],
        "'BANG": [
          -1,
          192
        ],
        "'LBRACK": [
          -1,
          192
        ],
        "'NUMBER": [
          -1,
          192
        ],
        "'TRUE": [
          -1,
          192
        ],
        "'FALSE": [
          -1,
          192
        ],
        "'NULL": [
          -1,
          192
        ],
        "'PARENAFTERBRACE": [
          -1,
          192
        ],
        "'SIEVE": [
          -1,
          192
        ],
        "'BLOCK": [
          -1,
          192
        ],
        "'TABLE": [
          -1,
          192
        ],
        "'ASK": [
          -1,
          192
        ],
        "'NEW": [
          -1,
          192
        ]
      },
      {
        "'NAME": [
          -1,
          194
        ],
        "'STRING": [
          -1,
          194
        ],
        "'LBRACE": [
          -1,
          194
        ],
        "'PARENSPACE": [
          -1,
          194
        ],
        "'SWITCH": [
          -1,
          194
        ],
        "'DASH": [
          -1,
          194
        ],
        "'BANG": [
          -1,
          194
        ],
        "'LBRACK": [
          -1,
          194
        ],
        "'NUMBER": [
          -1,
          194
        ],
        "'TRUE": [
          -1,
          194
        ],
        "'FALSE": [
          -1,
          194
        ],
        "'NULL": [
          -1,
          194
        ],
        "'PARENAFTERBRACE": [
          -1,
          194
        ],
        "'SIEVE": [
          -1,
          194
        ],
        "'BLOCK": [
          -1,
          194
        ],
        "'TABLE": [
          -1,
          194
        ],
        "'ASK": [
          -1,
          194
        ],
        "'NEW": [
          -1,
          194
        ]
      },
      {
        "'NAME": [
          -1,
          196
        ],
        "'STRING": [
          -1,
          196
        ],
        "'LBRACE": [
          -1,
          196
        ],
        "'PARENSPACE": [
          -1,
          196
        ],
        "'SWITCH": [
          -1,
          196
        ],
        "'DASH": [
          -1,
          196
        ],
        "'BANG": [
          -1,
          196
        ],
        "'LBRACK": [
          -1,
          196
        ],
        "'NUMBER": [
          -1,
          196
        ],
        "'TRUE": [
          -1,
          196
        ],
        "'FALSE": [
          -1,
          196
        ],
        "'NULL": [
          -1,
          196
        ],
        "'PARENAFTERBRACE": [
          -1,
          196
        ],
        "'SIEVE": [
          -1,
          196
        ],
        "'BLOCK": [
          -1,
          196
        ],
        "'TABLE": [
          -1,
          196
        ],
        "'ASK": [
          -1,
          196
        ],
        "'NEW": [
          -1,
          196
        ]
      },
      {
        "'NAME": [
          -1,
          198
        ],
        "'STRING": [
          -1,
          198
        ],
        "'LBRACE": [
          -1,
          198
        ],
        "'PARENSPACE": [
          -1,
          198
        ],
        "'SWITCH": [
          -1,
          198
        ],
        "'DASH": [
          -1,
          198
        ],
        "'BANG": [
          -1,
          198
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          198
        ],
        "'BLOCK": [
          -1,
          198
        ],
        "'TABLE": [
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
        "'NAME": [
          -1,
          200
        ],
        "'STRING": [
          -1,
          200
        ],
        "'LBRACE": [
          -1,
          200
        ],
        "'PARENSPACE": [
          -1,
          200
        ],
        "'SWITCH": [
          -1,
          200
        ],
        "'DASH": [
          -1,
          200
        ],
        "'BANG": [
          -1,
          200
        ],
        "'LBRACK": [
          -1,
          200
        ],
        "'NUMBER": [
          -1,
          200
        ],
        "'TRUE": [
          -1,
          200
        ],
        "'FALSE": [
          -1,
          200
        ],
        "'NULL": [
          -1,
          200
        ],
        "'PARENAFTERBRACE": [
          -1,
          200
        ],
        "'SIEVE": [
          -1,
          200
        ],
        "'BLOCK": [
          -1,
          200
        ],
        "'TABLE": [
          -1,
          200
        ],
        "'ASK": [
          -1,
          200
        ],
        "'NEW": [
          -1,
          200
        ]
      },
      {
        "'NAME": [
          -1,
          202
        ],
        "'STRING": [
          -1,
          202
        ],
        "'LBRACE": [
          -1,
          202
        ],
        "'PARENSPACE": [
          -1,
          202
        ],
        "'SWITCH": [
          -1,
          202
        ],
        "'DASH": [
          -1,
          202
        ],
        "'BANG": [
          -1,
          202
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          202
        ],
        "'BLOCK": [
          -1,
          202
        ],
        "'TABLE": [
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
        "'NAME": [
          -1,
          204
        ],
        "'STRING": [
          -1,
          204
        ],
        "'LBRACE": [
          -1,
          204
        ],
        "'PARENSPACE": [
          -1,
          204
        ],
        "'SWITCH": [
          -1,
          204
        ],
        "'DASH": [
          -1,
          204
        ],
        "'BANG": [
          -1,
          204
        ],
        "'LBRACK": [
          -1,
          204
        ],
        "'NUMBER": [
          -1,
          204
        ],
        "'TRUE": [
          -1,
          204
        ],
        "'FALSE": [
          -1,
          204
        ],
        "'NULL": [
          -1,
          204
        ],
        "'PARENAFTERBRACE": [
          -1,
          204
        ],
        "'SIEVE": [
          -1,
          204
        ],
        "'BLOCK": [
          -1,
          204
        ],
        "'TABLE": [
          -1,
          204
        ],
        "'ASK": [
          -1,
          204
        ],
        "'NEW": [
          -1,
          204
        ]
      },
      {
        "'NAME": [
          -1,
          206
        ],
        "'STRING": [
          -1,
          206
        ],
        "'LBRACE": [
          -1,
          206
        ],
        "'PARENSPACE": [
          -1,
          206
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          206
        ],
        "'BLOCK": [
          -1,
          206
        ],
        "'TABLE": [
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
        "app-or-access_A0_I2_I1*": [
          237
        ],
        "'RPAREN": [
          -1,
          208,
          210
        ],
        "'COMMA": [
          -1,
          210
        ]
      },
      {
        "'RPAREN": [
          238
        ]
      },
      {
        "'RPAREN": [
          -1,
          212
        ]
      },
      {
        "$": [
          -1,
          214
        ],
        "'NAME": [
          -1,
          214
        ],
        "'SEMI": [
          -1,
          214
        ],
        "'PARENNOSPACE": [
          -1,
          214
        ],
        "'STRING": [
          -1,
          214
        ],
        "'RPAREN": [
          -1,
          214
        ],
        "'LBRACE": [
          -1,
          214
        ],
        "'RBRACE": [
          -1,
          214
        ],
        "'SPY": [
          -1,
          214
        ],
        "'PARENSPACE": [
          -1,
          214
        ],
        "'COMMA": [
          -1,
          214
        ],
        "'INT": [
          -1,
          214
        ],
        "'LONG": [
          -1,
          214
        ],
        "'DOUBLE": [
          -1,
          214
        ],
        "'FLOAT": [
          -1,
          214
        ],
        "'BOOLEAN": [
          -1,
          214
        ],
        "'VOID": [
          -1,
          214
        ],
        "'LT": [
          -1,
          214
        ],
        "'GT": [
          -1,
          214
        ],
        "'THINARROW": [
          -1,
          214
        ],
        "'DATA": [
          -1,
          214
        ],
        "'IF": [
          -1,
          214
        ],
        "'FOR": [
          -1,
          214
        ],
        "'RETURN": [
          -1,
          214
        ],
        "'VAR": [
          -1,
          214
        ],
        "'REC": [
          -1,
          214
        ],
        "'ATCHECK": [
          -1,
          214
        ],
        "'ASSERTEQUALS": [
          -1,
          214
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          214
        ],
        "'ASSERTTRUE": [
          -1,
          214
        ],
        "'ASSERTFALSE": [
          -1,
          214
        ],
        "'ASSERTSATISFIES": [
          -1,
          214
        ],
        "'ASSERTRAISES": [
          -1,
          214
        ],
        "'IS": [
          -1,
          214
        ],
        "'ISNOT": [
          -1,
          214
        ],
        "'SATISFIES": [
          -1,
          214
        ],
        "'RAISES": [
          -1,
          214
        ],
        "'SWITCH": [
          -1,
          214
        ],
        "'CASE": [
          -1,
          214
        ],
        "'DEFAULT": [
          -1,
          214
        ],
        "'YIELD": [
          -1,
          214
        ],
        "'PLUS": [
          -1,
          214
        ],
        "'DASH": [
          -1,
          214
        ],
        "'TIMES": [
          -1,
          214
        ],
        "'SLASH": [
          -1,
          214
        ],
        "'PERCENT": [
          -1,
          214
        ],
        "'EQUALEQUAL": [
          -1,
          214
        ],
        "'NEQ": [
          -1,
          214
        ],
        "'LEQ": [
          -1,
          214
        ],
        "'GEQ": [
          -1,
          214
        ],
        "'AND": [
          -1,
          214
        ],
        "'OR": [
          -1,
          214
        ],
        "'BANG": [
          -1,
          214
        ],
        "'DOT": [
          -1,
          214
        ],
        "'LBRACK": [
          -1,
          214
        ],
        "'RBRACK": [
          -1,
          214
        ],
        "'NUMBER": [
          -1,
          214
        ],
        "'TRUE": [
          -1,
          214
        ],
        "'FALSE": [
          -1,
          214
        ],
        "'NULL": [
          -1,
          214
        ],
        "'PARENAFTERBRACE": [
          -1,
          214
        ],
        "'SIEVE": [
          -1,
          214
        ],
        "'USING": [
          -1,
          214
        ],
        "'BLOCK": [
          -1,
          214
        ],
        "'TABLE": [
          -1,
          214
        ],
        "'ASK": [
          -1,
          214
        ],
        "'NEW": [
          -1,
          214
        ]
      },
      {
        "'RBRACK": [
          239
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          240
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ],
        "construct-expr_A0_I3?": [
          241
        ],
        "construct-expr_A0_I3": [
          242
        ],
        "'RBRACK": [
          -1,
          216
        ]
      },
      {
        "'PARENNOSPACE": [
          243
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          244
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "$": [
          -1,
          218
        ],
        "'NAME": [
          -1,
          218
        ],
        "'SEMI": [
          -1,
          218
        ],
        "'PARENNOSPACE": [
          -1,
          218
        ],
        "'STRING": [
          -1,
          218
        ],
        "'RPAREN": [
          -1,
          218
        ],
        "'LBRACE": [
          -1,
          218
        ],
        "'RBRACE": [
          -1,
          218
        ],
        "'SPY": [
          -1,
          218
        ],
        "'PARENSPACE": [
          -1,
          218
        ],
        "'COMMA": [
          -1,
          218
        ],
        "'INT": [
          -1,
          218
        ],
        "'LONG": [
          -1,
          218
        ],
        "'DOUBLE": [
          -1,
          218
        ],
        "'FLOAT": [
          -1,
          218
        ],
        "'BOOLEAN": [
          -1,
          218
        ],
        "'VOID": [
          -1,
          218
        ],
        "'LT": [
          -1,
          218
        ],
        "'GT": [
          -1,
          218
        ],
        "'THINARROW": [
          -1,
          218
        ],
        "'DATA": [
          -1,
          218
        ],
        "'IF": [
          -1,
          218
        ],
        "'FOR": [
          -1,
          218
        ],
        "'RETURN": [
          -1,
          218
        ],
        "'VAR": [
          -1,
          218
        ],
        "'REC": [
          -1,
          218
        ],
        "'ATCHECK": [
          -1,
          218
        ],
        "'ASSERTEQUALS": [
          -1,
          218
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          218
        ],
        "'ASSERTTRUE": [
          -1,
          218
        ],
        "'ASSERTFALSE": [
          -1,
          218
        ],
        "'ASSERTSATISFIES": [
          -1,
          218
        ],
        "'ASSERTRAISES": [
          -1,
          218
        ],
        "'IS": [
          -1,
          218
        ],
        "'ISNOT": [
          -1,
          218
        ],
        "'SATISFIES": [
          -1,
          218
        ],
        "'RAISES": [
          -1,
          218
        ],
        "'SWITCH": [
          -1,
          218
        ],
        "'CASE": [
          -1,
          218
        ],
        "'DEFAULT": [
          -1,
          218
        ],
        "'YIELD": [
          -1,
          218
        ],
        "'PLUS": [
          -1,
          218
        ],
        "'DASH": [
          -1,
          218
        ],
        "'TIMES": [
          -1,
          218
        ],
        "'SLASH": [
          -1,
          218
        ],
        "'PERCENT": [
          -1,
          218
        ],
        "'EQUALEQUAL": [
          -1,
          218
        ],
        "'NEQ": [
          -1,
          218
        ],
        "'LEQ": [
          -1,
          218
        ],
        "'GEQ": [
          -1,
          218
        ],
        "'AND": [
          -1,
          218
        ],
        "'OR": [
          -1,
          218
        ],
        "'BANG": [
          -1,
          218
        ],
        "'DOT": [
          -1,
          218
        ],
        "'LBRACK": [
          -1,
          218
        ],
        "'RBRACK": [
          -1,
          218
        ],
        "'NUMBER": [
          -1,
          218
        ],
        "'TRUE": [
          -1,
          218
        ],
        "'FALSE": [
          -1,
          218
        ],
        "'NULL": [
          -1,
          218
        ],
        "'PARENAFTERBRACE": [
          -1,
          218
        ],
        "'SIEVE": [
          -1,
          218
        ],
        "'USING": [
          -1,
          218
        ],
        "'BLOCK": [
          -1,
          218
        ],
        "'TABLE": [
          -1,
          218
        ],
        "'ASK": [
          -1,
          218
        ],
        "'NEW": [
          -1,
          218
        ]
      },
      {
        "'NAME": [
          245
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          246
        ],
        "block-stmt": [
          247
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "block-expr_I2": [
          248
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          249
        ]
      },
      {
        "table-expr_I3*": [
          250
        ],
        "'SEMI": [
          -1,
          220
        ],
        "'COMMA": [
          -1,
          220
        ]
      },
      {
        "'THINARROW": [
          251
        ]
      },
      {
        "'SEMI": [
          252
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          253
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ],
        "new-expr_I3?": [
          254
        ],
        "new-expr_I3": [
          255
        ],
        "'RPAREN": [
          -1,
          222
        ]
      },
      {
        "'SEMI": [
          256
        ]
      },
      {
        "'RPAREN": [
          257
        ]
      },
      {
        "'SEMI": [
          258
        ]
      },
      {
        "'RPAREN": [
          259
        ]
      },
      {
        "'COMMA": [
          260
        ],
        "'GT": [
          261
        ],
        "type-ann_A6_I1_I2": [
          262
        ]
      },
      {
        "$": [
          -1,
          224
        ],
        "'NAME": [
          -1,
          224
        ],
        "'PARENNOSPACE": [
          -1,
          224
        ],
        "'STRING": [
          -1,
          224
        ],
        "'LBRACE": [
          -1,
          224
        ],
        "'RBRACE": [
          -1,
          224
        ],
        "'SPY": [
          -1,
          224
        ],
        "'PARENSPACE": [
          -1,
          224
        ],
        "'INT": [
          -1,
          224
        ],
        "'LONG": [
          -1,
          224
        ],
        "'DOUBLE": [
          -1,
          224
        ],
        "'FLOAT": [
          -1,
          224
        ],
        "'BOOLEAN": [
          -1,
          224
        ],
        "'VOID": [
          -1,
          224
        ],
        "'DATA": [
          -1,
          224
        ],
        "'IF": [
          -1,
          224
        ],
        "'FOR": [
          -1,
          224
        ],
        "'RETURN": [
          -1,
          224
        ],
        "'VAR": [
          -1,
          224
        ],
        "'REC": [
          -1,
          224
        ],
        "'ATCHECK": [
          -1,
          224
        ],
        "'ASSERTEQUALS": [
          -1,
          224
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          224
        ],
        "'ASSERTTRUE": [
          -1,
          224
        ],
        "'ASSERTFALSE": [
          -1,
          224
        ],
        "'ASSERTSATISFIES": [
          -1,
          224
        ],
        "'ASSERTRAISES": [
          -1,
          224
        ],
        "'SWITCH": [
          -1,
          224
        ],
        "'YIELD": [
          -1,
          224
        ],
        "'DASH": [
          -1,
          224
        ],
        "'BANG": [
          -1,
          224
        ],
        "'LBRACK": [
          -1,
          224
        ],
        "'NUMBER": [
          -1,
          224
        ],
        "'TRUE": [
          -1,
          224
        ],
        "'FALSE": [
          -1,
          224
        ],
        "'NULL": [
          -1,
          224
        ],
        "'PARENAFTERBRACE": [
          -1,
          224
        ],
        "'SIEVE": [
          -1,
          224
        ],
        "'BLOCK": [
          -1,
          224
        ],
        "'TABLE": [
          -1,
          224
        ],
        "'ASK": [
          -1,
          224
        ],
        "'NEW": [
          -1,
          224
        ]
      },
      {
        "$": [
          -1,
          226
        ],
        "'NAME": [
          -1,
          226
        ],
        "'PARENNOSPACE": [
          -1,
          226
        ],
        "'STRING": [
          -1,
          226
        ],
        "'LBRACE": [
          -1,
          226
        ],
        "'RBRACE": [
          -1,
          226
        ],
        "'SPY": [
          -1,
          226
        ],
        "'PARENSPACE": [
          -1,
          226
        ],
        "'INT": [
          -1,
          226
        ],
        "'LONG": [
          -1,
          226
        ],
        "'DOUBLE": [
          -1,
          226
        ],
        "'FLOAT": [
          -1,
          226
        ],
        "'BOOLEAN": [
          -1,
          226
        ],
        "'VOID": [
          -1,
          226
        ],
        "'DATA": [
          -1,
          226
        ],
        "'IF": [
          -1,
          226
        ],
        "'FOR": [
          -1,
          226
        ],
        "'RETURN": [
          -1,
          226
        ],
        "'VAR": [
          -1,
          226
        ],
        "'REC": [
          -1,
          226
        ],
        "'ATCHECK": [
          -1,
          226
        ],
        "'ASSERTEQUALS": [
          -1,
          226
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          226
        ],
        "'ASSERTTRUE": [
          -1,
          226
        ],
        "'ASSERTFALSE": [
          -1,
          226
        ],
        "'ASSERTSATISFIES": [
          -1,
          226
        ],
        "'ASSERTRAISES": [
          -1,
          226
        ],
        "'SWITCH": [
          -1,
          226
        ],
        "'YIELD": [
          -1,
          226
        ],
        "'DASH": [
          -1,
          226
        ],
        "'BANG": [
          -1,
          226
        ],
        "'LBRACK": [
          -1,
          226
        ],
        "'NUMBER": [
          -1,
          226
        ],
        "'TRUE": [
          -1,
          226
        ],
        "'FALSE": [
          -1,
          226
        ],
        "'NULL": [
          -1,
          226
        ],
        "'PARENAFTERBRACE": [
          -1,
          226
        ],
        "'SIEVE": [
          -1,
          226
        ],
        "'BLOCK": [
          -1,
          226
        ],
        "'TABLE": [
          -1,
          226
        ],
        "'ASK": [
          -1,
          226
        ],
        "'NEW": [
          -1,
          226
        ]
      },
      {
        "$": [
          -1,
          228
        ],
        "'NAME": [
          -1,
          228
        ],
        "'PARENNOSPACE": [
          -1,
          228
        ],
        "'STRING": [
          -1,
          228
        ],
        "'LBRACE": [
          -1,
          228
        ],
        "'RBRACE": [
          -1,
          228
        ],
        "'SPY": [
          -1,
          228
        ],
        "'PARENSPACE": [
          -1,
          228
        ],
        "'INT": [
          -1,
          228
        ],
        "'LONG": [
          -1,
          228
        ],
        "'DOUBLE": [
          -1,
          228
        ],
        "'FLOAT": [
          -1,
          228
        ],
        "'BOOLEAN": [
          -1,
          228
        ],
        "'VOID": [
          -1,
          228
        ],
        "'DATA": [
          -1,
          228
        ],
        "'IF": [
          -1,
          228
        ],
        "'FOR": [
          -1,
          228
        ],
        "'RETURN": [
          -1,
          228
        ],
        "'VAR": [
          -1,
          228
        ],
        "'REC": [
          -1,
          228
        ],
        "'ATCHECK": [
          -1,
          228
        ],
        "'ASSERTEQUALS": [
          -1,
          228
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          228
        ],
        "'ASSERTTRUE": [
          -1,
          228
        ],
        "'ASSERTFALSE": [
          -1,
          228
        ],
        "'ASSERTSATISFIES": [
          -1,
          228
        ],
        "'ASSERTRAISES": [
          -1,
          228
        ],
        "'SWITCH": [
          -1,
          228
        ],
        "'YIELD": [
          -1,
          228
        ],
        "'DASH": [
          -1,
          228
        ],
        "'BANG": [
          -1,
          228
        ],
        "'LBRACK": [
          -1,
          228
        ],
        "'NUMBER": [
          -1,
          228
        ],
        "'TRUE": [
          -1,
          228
        ],
        "'FALSE": [
          -1,
          228
        ],
        "'NULL": [
          -1,
          228
        ],
        "'PARENAFTERBRACE": [
          -1,
          228
        ],
        "'SIEVE": [
          -1,
          228
        ],
        "'BLOCK": [
          -1,
          228
        ],
        "'TABLE": [
          -1,
          228
        ],
        "'ASK": [
          -1,
          228
        ],
        "'NEW": [
          -1,
          228
        ]
      },
      {
        "'NAME": [
          71
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          73
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          263
        ]
      },
      {
        "'RPAREN": [
          -1,
          230
        ],
        "'COMMA": [
          -1,
          230
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          264
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RBRACE": [
          -1,
          232
        ],
        "'COMMA": [
          -1,
          232
        ]
      },
      {
        "$": [
          -1,
          234
        ],
        "'NAME": [
          -1,
          234
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          234
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          234
        ],
        "'GT": [
          -1,
          234
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          234
        ],
        "'ISNOT": [
          -1,
          234
        ],
        "'SATISFIES": [
          -1,
          234
        ],
        "'RAISES": [
          -1,
          234
        ],
        "'SWITCH": [
          -1,
          234
        ],
        "'CASE": [
          -1,
          234
        ],
        "'DEFAULT": [
          -1,
          234
        ],
        "'YIELD": [
          -1,
          234
        ],
        "'PLUS": [
          -1,
          234
        ],
        "'DASH": [
          -1,
          234
        ],
        "'TIMES": [
          -1,
          234
        ],
        "'SLASH": [
          -1,
          234
        ],
        "'PERCENT": [
          -1,
          234
        ],
        "'EQUALEQUAL": [
          -1,
          234
        ],
        "'NEQ": [
          -1,
          234
        ],
        "'LEQ": [
          -1,
          234
        ],
        "'GEQ": [
          -1,
          234
        ],
        "'AND": [
          -1,
          234
        ],
        "'OR": [
          -1,
          234
        ],
        "'BANG": [
          -1,
          234
        ],
        "'DOT": [
          -1,
          234
        ],
        "'LBRACK": [
          -1,
          234
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          234
        ],
        "'USING": [
          -1,
          234
        ],
        "'BLOCK": [
          -1,
          234
        ],
        "'TABLE": [
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
          77
        ],
        "record-field": [
          265
        ]
      },
      {
        "'RBRACE": [
          -1,
          236
        ],
        "'COMMA": [
          -1,
          236
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          266
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'COMMA": [
          -1,
          238
        ],
        "'THINARROW": [
          -1,
          238
        ]
      },
      {
        "'RPAREN": [
          267
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          268
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          71
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          73
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          269
        ]
      },
      {
        "'RPAREN": [
          -1,
          240
        ],
        "'COMMA": [
          -1,
          240
        ]
      },
      {
        "'NAME": [
          270
        ]
      },
      {
        "'RPAREN": [
          271
        ]
      },
      {
        "'RPAREN": [
          -1,
          242
        ]
      },
      {
        "fun-decl_I3_I1*": [
          272
        ],
        "'RPAREN": [
          -1,
          244,
          246
        ],
        "'COMMA": [
          -1,
          246
        ]
      },
      {
        "'SEMI": [
          273
        ],
        "let-stmt_I4?": [
          274
        ],
        "let-stmt_I4": [
          275
        ],
        "$": [
          -1,
          248,
          250
        ],
        "'NAME": [
          -1,
          248,
          250
        ],
        "'PARENNOSPACE": [
          -1,
          248,
          250
        ],
        "'STRING": [
          -1,
          248,
          250
        ],
        "'LBRACE": [
          -1,
          248,
          250
        ],
        "'RBRACE": [
          -1,
          248,
          250
        ],
        "'SPY": [
          -1,
          248,
          250
        ],
        "'PARENSPACE": [
          -1,
          248,
          250
        ],
        "'INT": [
          -1,
          248,
          250
        ],
        "'LONG": [
          -1,
          248,
          250
        ],
        "'DOUBLE": [
          -1,
          248,
          250
        ],
        "'FLOAT": [
          -1,
          248,
          250
        ],
        "'BOOLEAN": [
          -1,
          248,
          250
        ],
        "'VOID": [
          -1,
          248,
          250
        ],
        "'DATA": [
          -1,
          248,
          250
        ],
        "'IF": [
          -1,
          248,
          250
        ],
        "'FOR": [
          -1,
          248,
          250
        ],
        "'RETURN": [
          -1,
          248,
          250
        ],
        "'VAR": [
          -1,
          248,
          250
        ],
        "'REC": [
          -1,
          248,
          250
        ],
        "'ATCHECK": [
          -1,
          248,
          250
        ],
        "'ASSERTEQUALS": [
          -1,
          248,
          250
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          248,
          250
        ],
        "'ASSERTTRUE": [
          -1,
          248,
          250
        ],
        "'ASSERTFALSE": [
          -1,
          248,
          250
        ],
        "'ASSERTSATISFIES": [
          -1,
          248,
          250
        ],
        "'ASSERTRAISES": [
          -1,
          248,
          250
        ],
        "'SWITCH": [
          -1,
          248,
          250
        ],
        "'YIELD": [
          -1,
          248,
          250
        ],
        "'DASH": [
          -1,
          248,
          250
        ],
        "'BANG": [
          -1,
          248,
          250
        ],
        "'LBRACK": [
          -1,
          248,
          250
        ],
        "'NUMBER": [
          -1,
          248,
          250
        ],
        "'TRUE": [
          -1,
          248,
          250
        ],
        "'FALSE": [
          -1,
          248,
          250
        ],
        "'NULL": [
          -1,
          248,
          250
        ],
        "'PARENAFTERBRACE": [
          -1,
          248,
          250
        ],
        "'SIEVE": [
          -1,
          248,
          250
        ],
        "'BLOCK": [
          -1,
          248,
          250
        ],
        "'TABLE": [
          -1,
          248,
          250
        ],
        "'ASK": [
          -1,
          248,
          250
        ],
        "'NEW": [
          -1,
          248,
          250
        ]
      },
      {
        "'PARENNOSPACE": [
          276
        ],
        "'SEMI": [
          -1,
          252
        ],
        "'RBRACE": [
          -1,
          252
        ]
      },
      {
        "data-decl_I4*": [
          277
        ],
        "'SEMI": [
          -1,
          254
        ],
        "'RBRACE": [
          -1,
          254
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          278
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          279
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          256
        ],
        "'BLOCK": [
          -1,
          256
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          258
        ],
        "'BLOCK": [
          -1,
          258
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          260
        ],
        "'BLOCK": [
          -1,
          260
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          262
        ],
        "'BLOCK": [
          -1,
          262
        ],
        "'TABLE": [
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
        "'NAME": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          264
        ],
        "'YIELD": [
          -1,
          264
        ],
        "'DASH": [
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
        "'SIEVE": [
          -1,
          264
        ],
        "'BLOCK": [
          -1,
          264
        ],
        "'TABLE": [
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
        "'NAME": [
          -1,
          266
        ],
        "'PARENNOSPACE": [
          -1,
          266
        ],
        "'STRING": [
          -1,
          266
        ],
        "'LBRACE": [
          -1,
          266
        ],
        "'RBRACE": [
          -1,
          266
        ],
        "'SPY": [
          -1,
          266
        ],
        "'PARENSPACE": [
          -1,
          266
        ],
        "'INT": [
          -1,
          266
        ],
        "'LONG": [
          -1,
          266
        ],
        "'DOUBLE": [
          -1,
          266
        ],
        "'FLOAT": [
          -1,
          266
        ],
        "'BOOLEAN": [
          -1,
          266
        ],
        "'VOID": [
          -1,
          266
        ],
        "'DATA": [
          -1,
          266
        ],
        "'IF": [
          -1,
          266
        ],
        "'FOR": [
          -1,
          266
        ],
        "'RETURN": [
          -1,
          266
        ],
        "'VAR": [
          -1,
          266
        ],
        "'REC": [
          -1,
          266
        ],
        "'ATCHECK": [
          -1,
          266
        ],
        "'ASSERTEQUALS": [
          -1,
          266
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          266
        ],
        "'ASSERTTRUE": [
          -1,
          266
        ],
        "'ASSERTFALSE": [
          -1,
          266
        ],
        "'ASSERTSATISFIES": [
          -1,
          266
        ],
        "'ASSERTRAISES": [
          -1,
          266
        ],
        "'SWITCH": [
          -1,
          266
        ],
        "'YIELD": [
          -1,
          266
        ],
        "'DASH": [
          -1,
          266
        ],
        "'BANG": [
          -1,
          266
        ],
        "'LBRACK": [
          -1,
          266
        ],
        "'NUMBER": [
          -1,
          266
        ],
        "'TRUE": [
          -1,
          266
        ],
        "'FALSE": [
          -1,
          266
        ],
        "'NULL": [
          -1,
          266
        ],
        "'PARENAFTERBRACE": [
          -1,
          266
        ],
        "'SIEVE": [
          -1,
          266
        ],
        "'BLOCK": [
          -1,
          266
        ],
        "'TABLE": [
          -1,
          266
        ],
        "'ASK": [
          -1,
          266
        ],
        "'NEW": [
          -1,
          266
        ]
      },
      {
        "'NAME": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          268
        ],
        "'YIELD": [
          -1,
          268
        ],
        "'DASH": [
          -1,
          268
        ],
        "'BANG": [
          -1,
          268
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          268
        ],
        "'BLOCK": [
          -1,
          268
        ],
        "'TABLE": [
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
        "'NAME": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          270
        ],
        "'YIELD": [
          -1,
          270
        ],
        "'DASH": [
          -1,
          270
        ],
        "'BANG": [
          -1,
          270
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          270
        ],
        "'BLOCK": [
          -1,
          270
        ],
        "'TABLE": [
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
        "$": [
          -1,
          272
        ],
        "'NAME": [
          -1,
          272
        ],
        "'PARENNOSPACE": [
          -1,
          272
        ],
        "'STRING": [
          -1,
          272
        ],
        "'LBRACE": [
          -1,
          272
        ],
        "'RBRACE": [
          -1,
          272
        ],
        "'SPY": [
          -1,
          272
        ],
        "'PARENSPACE": [
          -1,
          272
        ],
        "'INT": [
          -1,
          272
        ],
        "'LONG": [
          -1,
          272
        ],
        "'DOUBLE": [
          -1,
          272
        ],
        "'FLOAT": [
          -1,
          272
        ],
        "'BOOLEAN": [
          -1,
          272
        ],
        "'VOID": [
          -1,
          272
        ],
        "'DATA": [
          -1,
          272
        ],
        "'IF": [
          -1,
          272
        ],
        "'FOR": [
          -1,
          272
        ],
        "'RETURN": [
          -1,
          272
        ],
        "'VAR": [
          -1,
          272
        ],
        "'REC": [
          -1,
          272
        ],
        "'ATCHECK": [
          -1,
          272
        ],
        "'ASSERTEQUALS": [
          -1,
          272
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          272
        ],
        "'ASSERTTRUE": [
          -1,
          272
        ],
        "'ASSERTFALSE": [
          -1,
          272
        ],
        "'ASSERTSATISFIES": [
          -1,
          272
        ],
        "'ASSERTRAISES": [
          -1,
          272
        ],
        "'SWITCH": [
          -1,
          272
        ],
        "'YIELD": [
          -1,
          272
        ],
        "'DASH": [
          -1,
          272
        ],
        "'BANG": [
          -1,
          272
        ],
        "'LBRACK": [
          -1,
          272
        ],
        "'NUMBER": [
          -1,
          272
        ],
        "'TRUE": [
          -1,
          272
        ],
        "'FALSE": [
          -1,
          272
        ],
        "'NULL": [
          -1,
          272
        ],
        "'PARENAFTERBRACE": [
          -1,
          272
        ],
        "'SIEVE": [
          -1,
          272
        ],
        "'BLOCK": [
          -1,
          272
        ],
        "'TABLE": [
          -1,
          272
        ],
        "'ASK": [
          -1,
          272
        ],
        "'NEW": [
          -1,
          272
        ]
      },
      {
        "'NAME": [
          -1,
          274
        ],
        "'PARENNOSPACE": [
          -1,
          274
        ],
        "'STRING": [
          -1,
          274
        ],
        "'LBRACE": [
          -1,
          274
        ],
        "'RBRACE": [
          -1,
          274
        ],
        "'SPY": [
          -1,
          274
        ],
        "'PARENSPACE": [
          -1,
          274
        ],
        "'INT": [
          -1,
          274
        ],
        "'LONG": [
          -1,
          274
        ],
        "'DOUBLE": [
          -1,
          274
        ],
        "'FLOAT": [
          -1,
          274
        ],
        "'BOOLEAN": [
          -1,
          274
        ],
        "'VOID": [
          -1,
          274
        ],
        "'DATA": [
          -1,
          274
        ],
        "'IF": [
          -1,
          274
        ],
        "'FOR": [
          -1,
          274
        ],
        "'RETURN": [
          -1,
          274
        ],
        "'VAR": [
          -1,
          274
        ],
        "'REC": [
          -1,
          274
        ],
        "'ATCHECK": [
          -1,
          274
        ],
        "'ASSERTEQUALS": [
          -1,
          274
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          274
        ],
        "'ASSERTTRUE": [
          -1,
          274
        ],
        "'ASSERTFALSE": [
          -1,
          274
        ],
        "'ASSERTSATISFIES": [
          -1,
          274
        ],
        "'ASSERTRAISES": [
          -1,
          274
        ],
        "'SWITCH": [
          -1,
          274
        ],
        "'YIELD": [
          -1,
          274
        ],
        "'DASH": [
          -1,
          274
        ],
        "'BANG": [
          -1,
          274
        ],
        "'LBRACK": [
          -1,
          274
        ],
        "'NUMBER": [
          -1,
          274
        ],
        "'TRUE": [
          -1,
          274
        ],
        "'FALSE": [
          -1,
          274
        ],
        "'NULL": [
          -1,
          274
        ],
        "'PARENAFTERBRACE": [
          -1,
          274
        ],
        "'SIEVE": [
          -1,
          274
        ],
        "'BLOCK": [
          -1,
          274
        ],
        "'TABLE": [
          -1,
          274
        ],
        "'ASK": [
          -1,
          274
        ],
        "'NEW": [
          -1,
          274
        ]
      },
      {
        "'NAME": [
          -1,
          276
        ],
        "'PARENNOSPACE": [
          -1,
          276
        ],
        "'STRING": [
          -1,
          276
        ],
        "'LBRACE": [
          -1,
          276
        ],
        "'RBRACE": [
          -1,
          276
        ],
        "'SPY": [
          -1,
          276
        ],
        "'PARENSPACE": [
          -1,
          276
        ],
        "'INT": [
          -1,
          276
        ],
        "'LONG": [
          -1,
          276
        ],
        "'DOUBLE": [
          -1,
          276
        ],
        "'FLOAT": [
          -1,
          276
        ],
        "'BOOLEAN": [
          -1,
          276
        ],
        "'VOID": [
          -1,
          276
        ],
        "'DATA": [
          -1,
          276
        ],
        "'IF": [
          -1,
          276
        ],
        "'FOR": [
          -1,
          276
        ],
        "'RETURN": [
          -1,
          276
        ],
        "'VAR": [
          -1,
          276
        ],
        "'REC": [
          -1,
          276
        ],
        "'ATCHECK": [
          -1,
          276
        ],
        "'ASSERTEQUALS": [
          -1,
          276
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          276
        ],
        "'ASSERTTRUE": [
          -1,
          276
        ],
        "'ASSERTFALSE": [
          -1,
          276
        ],
        "'ASSERTSATISFIES": [
          -1,
          276
        ],
        "'ASSERTRAISES": [
          -1,
          276
        ],
        "'SWITCH": [
          -1,
          276
        ],
        "'YIELD": [
          -1,
          276
        ],
        "'DASH": [
          -1,
          276
        ],
        "'BANG": [
          -1,
          276
        ],
        "'LBRACK": [
          -1,
          276
        ],
        "'NUMBER": [
          -1,
          276
        ],
        "'TRUE": [
          -1,
          276
        ],
        "'FALSE": [
          -1,
          276
        ],
        "'NULL": [
          -1,
          276
        ],
        "'PARENAFTERBRACE": [
          -1,
          276
        ],
        "'SIEVE": [
          -1,
          276
        ],
        "'BLOCK": [
          -1,
          276
        ],
        "'TABLE": [
          -1,
          276
        ],
        "'ASK": [
          -1,
          276
        ],
        "'NEW": [
          -1,
          276
        ]
      },
      {
        "'NAME": [
          -1,
          278
        ],
        "'PARENNOSPACE": [
          -1,
          278
        ],
        "'STRING": [
          -1,
          278
        ],
        "'LBRACE": [
          -1,
          278
        ],
        "'RBRACE": [
          -1,
          278
        ],
        "'SPY": [
          -1,
          278
        ],
        "'PARENSPACE": [
          -1,
          278
        ],
        "'INT": [
          -1,
          278
        ],
        "'LONG": [
          -1,
          278
        ],
        "'DOUBLE": [
          -1,
          278
        ],
        "'FLOAT": [
          -1,
          278
        ],
        "'BOOLEAN": [
          -1,
          278
        ],
        "'VOID": [
          -1,
          278
        ],
        "'DATA": [
          -1,
          278
        ],
        "'IF": [
          -1,
          278
        ],
        "'FOR": [
          -1,
          278
        ],
        "'RETURN": [
          -1,
          278
        ],
        "'VAR": [
          -1,
          278
        ],
        "'REC": [
          -1,
          278
        ],
        "'ATCHECK": [
          -1,
          278
        ],
        "'ASSERTEQUALS": [
          -1,
          278
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          278
        ],
        "'ASSERTTRUE": [
          -1,
          278
        ],
        "'ASSERTFALSE": [
          -1,
          278
        ],
        "'ASSERTSATISFIES": [
          -1,
          278
        ],
        "'ASSERTRAISES": [
          -1,
          278
        ],
        "'SWITCH": [
          -1,
          278
        ],
        "'YIELD": [
          -1,
          278
        ],
        "'DASH": [
          -1,
          278
        ],
        "'BANG": [
          -1,
          278
        ],
        "'LBRACK": [
          -1,
          278
        ],
        "'NUMBER": [
          -1,
          278
        ],
        "'TRUE": [
          -1,
          278
        ],
        "'FALSE": [
          -1,
          278
        ],
        "'NULL": [
          -1,
          278
        ],
        "'PARENAFTERBRACE": [
          -1,
          278
        ],
        "'SIEVE": [
          -1,
          278
        ],
        "'BLOCK": [
          -1,
          278
        ],
        "'TABLE": [
          -1,
          278
        ],
        "'ASK": [
          -1,
          278
        ],
        "'NEW": [
          -1,
          278
        ]
      },
      {
        "'NAME": [
          -1,
          280
        ],
        "'PARENNOSPACE": [
          -1,
          280
        ],
        "'STRING": [
          -1,
          280
        ],
        "'LBRACE": [
          -1,
          280
        ],
        "'RBRACE": [
          -1,
          280
        ],
        "'SPY": [
          -1,
          280
        ],
        "'PARENSPACE": [
          -1,
          280
        ],
        "'INT": [
          -1,
          280
        ],
        "'LONG": [
          -1,
          280
        ],
        "'DOUBLE": [
          -1,
          280
        ],
        "'FLOAT": [
          -1,
          280
        ],
        "'BOOLEAN": [
          -1,
          280
        ],
        "'VOID": [
          -1,
          280
        ],
        "'DATA": [
          -1,
          280
        ],
        "'IF": [
          -1,
          280
        ],
        "'FOR": [
          -1,
          280
        ],
        "'RETURN": [
          -1,
          280
        ],
        "'VAR": [
          -1,
          280
        ],
        "'REC": [
          -1,
          280
        ],
        "'ATCHECK": [
          -1,
          280
        ],
        "'ASSERTEQUALS": [
          -1,
          280
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          280
        ],
        "'ASSERTTRUE": [
          -1,
          280
        ],
        "'ASSERTFALSE": [
          -1,
          280
        ],
        "'ASSERTSATISFIES": [
          -1,
          280
        ],
        "'ASSERTRAISES": [
          -1,
          280
        ],
        "'SWITCH": [
          -1,
          280
        ],
        "'YIELD": [
          -1,
          280
        ],
        "'DASH": [
          -1,
          280
        ],
        "'BANG": [
          -1,
          280
        ],
        "'LBRACK": [
          -1,
          280
        ],
        "'NUMBER": [
          -1,
          280
        ],
        "'TRUE": [
          -1,
          280
        ],
        "'FALSE": [
          -1,
          280
        ],
        "'NULL": [
          -1,
          280
        ],
        "'PARENAFTERBRACE": [
          -1,
          280
        ],
        "'SIEVE": [
          -1,
          280
        ],
        "'BLOCK": [
          -1,
          280
        ],
        "'TABLE": [
          -1,
          280
        ],
        "'ASK": [
          -1,
          280
        ],
        "'NEW": [
          -1,
          280
        ]
      },
      {
        "'NAME": [
          -1,
          282
        ],
        "'PARENNOSPACE": [
          -1,
          282
        ],
        "'STRING": [
          -1,
          282
        ],
        "'LBRACE": [
          -1,
          282
        ],
        "'RBRACE": [
          -1,
          282
        ],
        "'SPY": [
          -1,
          282
        ],
        "'PARENSPACE": [
          -1,
          282
        ],
        "'INT": [
          -1,
          282
        ],
        "'LONG": [
          -1,
          282
        ],
        "'DOUBLE": [
          -1,
          282
        ],
        "'FLOAT": [
          -1,
          282
        ],
        "'BOOLEAN": [
          -1,
          282
        ],
        "'VOID": [
          -1,
          282
        ],
        "'DATA": [
          -1,
          282
        ],
        "'IF": [
          -1,
          282
        ],
        "'FOR": [
          -1,
          282
        ],
        "'RETURN": [
          -1,
          282
        ],
        "'VAR": [
          -1,
          282
        ],
        "'REC": [
          -1,
          282
        ],
        "'ATCHECK": [
          -1,
          282
        ],
        "'ASSERTEQUALS": [
          -1,
          282
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          282
        ],
        "'ASSERTTRUE": [
          -1,
          282
        ],
        "'ASSERTFALSE": [
          -1,
          282
        ],
        "'ASSERTSATISFIES": [
          -1,
          282
        ],
        "'ASSERTRAISES": [
          -1,
          282
        ],
        "'SWITCH": [
          -1,
          282
        ],
        "'YIELD": [
          -1,
          282
        ],
        "'DASH": [
          -1,
          282
        ],
        "'BANG": [
          -1,
          282
        ],
        "'LBRACK": [
          -1,
          282
        ],
        "'NUMBER": [
          -1,
          282
        ],
        "'TRUE": [
          -1,
          282
        ],
        "'FALSE": [
          -1,
          282
        ],
        "'NULL": [
          -1,
          282
        ],
        "'PARENAFTERBRACE": [
          -1,
          282
        ],
        "'SIEVE": [
          -1,
          282
        ],
        "'BLOCK": [
          -1,
          282
        ],
        "'TABLE": [
          -1,
          282
        ],
        "'ASK": [
          -1,
          282
        ],
        "'NEW": [
          -1,
          282
        ]
      },
      {
        "'NAME": [
          -1,
          284
        ],
        "'PARENNOSPACE": [
          -1,
          284
        ],
        "'STRING": [
          -1,
          284
        ],
        "'LBRACE": [
          -1,
          284
        ],
        "'RBRACE": [
          -1,
          284
        ],
        "'SPY": [
          -1,
          284
        ],
        "'PARENSPACE": [
          -1,
          284
        ],
        "'INT": [
          -1,
          284
        ],
        "'LONG": [
          -1,
          284
        ],
        "'DOUBLE": [
          -1,
          284
        ],
        "'FLOAT": [
          -1,
          284
        ],
        "'BOOLEAN": [
          -1,
          284
        ],
        "'VOID": [
          -1,
          284
        ],
        "'DATA": [
          -1,
          284
        ],
        "'IF": [
          -1,
          284
        ],
        "'FOR": [
          -1,
          284
        ],
        "'RETURN": [
          -1,
          284
        ],
        "'VAR": [
          -1,
          284
        ],
        "'REC": [
          -1,
          284
        ],
        "'ATCHECK": [
          -1,
          284
        ],
        "'ASSERTEQUALS": [
          -1,
          284
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          284
        ],
        "'ASSERTTRUE": [
          -1,
          284
        ],
        "'ASSERTFALSE": [
          -1,
          284
        ],
        "'ASSERTSATISFIES": [
          -1,
          284
        ],
        "'ASSERTRAISES": [
          -1,
          284
        ],
        "'SWITCH": [
          -1,
          284
        ],
        "'YIELD": [
          -1,
          284
        ],
        "'DASH": [
          -1,
          284
        ],
        "'BANG": [
          -1,
          284
        ],
        "'LBRACK": [
          -1,
          284
        ],
        "'NUMBER": [
          -1,
          284
        ],
        "'TRUE": [
          -1,
          284
        ],
        "'FALSE": [
          -1,
          284
        ],
        "'NULL": [
          -1,
          284
        ],
        "'PARENAFTERBRACE": [
          -1,
          284
        ],
        "'SIEVE": [
          -1,
          284
        ],
        "'BLOCK": [
          -1,
          284
        ],
        "'TABLE": [
          -1,
          284
        ],
        "'ASK": [
          -1,
          284
        ],
        "'NEW": [
          -1,
          284
        ]
      },
      {
        "'PARENSPACE": [
          280
        ]
      },
      {
        "'NAME": [
          -1,
          286
        ],
        "'PARENNOSPACE": [
          -1,
          286
        ],
        "'STRING": [
          -1,
          286
        ],
        "'LBRACE": [
          -1,
          286
        ],
        "'RBRACE": [
          -1,
          286
        ],
        "'SPY": [
          -1,
          286
        ],
        "'PARENSPACE": [
          -1,
          286
        ],
        "'INT": [
          -1,
          286
        ],
        "'LONG": [
          -1,
          286
        ],
        "'DOUBLE": [
          -1,
          286
        ],
        "'FLOAT": [
          -1,
          286
        ],
        "'BOOLEAN": [
          -1,
          286
        ],
        "'VOID": [
          -1,
          286
        ],
        "'DATA": [
          -1,
          286
        ],
        "'IF": [
          -1,
          286
        ],
        "'FOR": [
          -1,
          286
        ],
        "'RETURN": [
          -1,
          286
        ],
        "'VAR": [
          -1,
          286
        ],
        "'REC": [
          -1,
          286
        ],
        "'ATCHECK": [
          -1,
          286
        ],
        "'ASSERTEQUALS": [
          -1,
          286
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          286
        ],
        "'ASSERTTRUE": [
          -1,
          286
        ],
        "'ASSERTFALSE": [
          -1,
          286
        ],
        "'ASSERTSATISFIES": [
          -1,
          286
        ],
        "'ASSERTRAISES": [
          -1,
          286
        ],
        "'SWITCH": [
          -1,
          286
        ],
        "'YIELD": [
          -1,
          286
        ],
        "'DASH": [
          -1,
          286
        ],
        "'BANG": [
          -1,
          286
        ],
        "'LBRACK": [
          -1,
          286
        ],
        "'NUMBER": [
          -1,
          286
        ],
        "'TRUE": [
          -1,
          286
        ],
        "'FALSE": [
          -1,
          286
        ],
        "'NULL": [
          -1,
          286
        ],
        "'PARENAFTERBRACE": [
          -1,
          286
        ],
        "'SIEVE": [
          -1,
          286
        ],
        "'BLOCK": [
          -1,
          286
        ],
        "'TABLE": [
          -1,
          286
        ],
        "'ASK": [
          -1,
          286
        ],
        "'NEW": [
          -1,
          286
        ]
      },
      {
        "'PARENSPACE": [
          281
        ]
      },
      {
        "'SEMI": [
          90
        ],
        "expr-stmt_I1?": [
          91
        ],
        "expr-stmt_I1": [
          92
        ],
        "'IS": [
          282
        ],
        "'ISNOT": [
          283
        ],
        "'SATISFIES": [
          284
        ],
        "'RAISES": [
          285
        ],
        "'NAME": [
          -1,
          68,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          68,
          70
        ],
        "'STRING": [
          -1,
          68,
          70
        ],
        "'LBRACE": [
          -1,
          68,
          70
        ],
        "'RBRACE": [
          -1,
          68,
          70
        ],
        "'SPY": [
          -1,
          68,
          70
        ],
        "'PARENSPACE": [
          -1,
          68,
          70
        ],
        "'INT": [
          -1,
          68,
          70
        ],
        "'LONG": [
          -1,
          68,
          70
        ],
        "'DOUBLE": [
          -1,
          68,
          70
        ],
        "'FLOAT": [
          -1,
          68,
          70
        ],
        "'BOOLEAN": [
          -1,
          68,
          70
        ],
        "'VOID": [
          -1,
          68,
          70
        ],
        "'DATA": [
          -1,
          68,
          70
        ],
        "'IF": [
          -1,
          68,
          70
        ],
        "'FOR": [
          -1,
          68,
          70
        ],
        "'RETURN": [
          -1,
          68,
          70
        ],
        "'VAR": [
          -1,
          68,
          70
        ],
        "'REC": [
          -1,
          68,
          70
        ],
        "'ATCHECK": [
          -1,
          68,
          70
        ],
        "'ASSERTEQUALS": [
          -1,
          68,
          70
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          68,
          70
        ],
        "'ASSERTTRUE": [
          -1,
          68,
          70
        ],
        "'ASSERTFALSE": [
          -1,
          68,
          70
        ],
        "'ASSERTSATISFIES": [
          -1,
          68,
          70
        ],
        "'ASSERTRAISES": [
          -1,
          68,
          70
        ],
        "'SWITCH": [
          -1,
          68,
          70
        ],
        "'YIELD": [
          -1,
          68,
          70
        ],
        "'DASH": [
          -1,
          68,
          70
        ],
        "'BANG": [
          -1,
          68,
          70
        ],
        "'LBRACK": [
          -1,
          68,
          70
        ],
        "'NUMBER": [
          -1,
          68,
          70
        ],
        "'TRUE": [
          -1,
          68,
          70
        ],
        "'FALSE": [
          -1,
          68,
          70
        ],
        "'NULL": [
          -1,
          68,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          68,
          70
        ],
        "'SIEVE": [
          -1,
          68,
          70
        ],
        "'BLOCK": [
          -1,
          68,
          70
        ],
        "'TABLE": [
          -1,
          68,
          70
        ],
        "'ASK": [
          -1,
          68,
          70
        ],
        "'NEW": [
          -1,
          68,
          70
        ]
      },
      {
        "'PARENSPACE": [
          286
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'SEMI": [
          287
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          288
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
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
        "'LBRACE": [
          -1,
          288
        ],
        "'RBRACE": [
          -1,
          288
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          288
        ],
        "'FOR": [
          -1,
          288
        ],
        "'RETURN": [
          -1,
          288
        ],
        "'VAR": [
          -1,
          288
        ],
        "'REC": [
          -1,
          288
        ],
        "'ATCHECK": [
          -1,
          288
        ],
        "'ASSERTEQUALS": [
          -1,
          288
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          288
        ],
        "'ASSERTTRUE": [
          -1,
          288
        ],
        "'ASSERTFALSE": [
          -1,
          288
        ],
        "'ASSERTSATISFIES": [
          -1,
          288
        ],
        "'ASSERTRAISES": [
          -1,
          288
        ],
        "'SWITCH": [
          -1,
          288
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          288
        ],
        "'BLOCK": [
          -1,
          288
        ],
        "'TABLE": [
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
        "'PARENNOSPACE": [
          289
        ]
      },
      {
        "'PARENNOSPACE": [
          290
        ]
      },
      {
        "'PARENNOSPACE": [
          291
        ]
      },
      {
        "'PARENNOSPACE": [
          292
        ]
      },
      {
        "'PARENNOSPACE": [
          293
        ]
      },
      {
        "'PARENNOSPACE": [
          294
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          295
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          296
        ]
      },
      {
        "'LBRACE": [
          297
        ]
      },
      {
        "$": [
          -1,
          290
        ],
        "'NAME": [
          -1,
          290
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          290
        ],
        "'LBRACE": [
          -1,
          290
        ],
        "'RBRACE": [
          -1,
          290
        ],
        "'SPY": [
          -1,
          290
        ],
        "'PARENSPACE": [
          -1,
          290
        ],
        "'COMMA": [
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
        "'LT": [
          -1,
          290
        ],
        "'GT": [
          -1,
          290
        ],
        "'THINARROW": [
          -1,
          290
        ],
        "'DATA": [
          -1,
          290
        ],
        "'IF": [
          -1,
          290
        ],
        "'FOR": [
          -1,
          290
        ],
        "'RETURN": [
          -1,
          290
        ],
        "'VAR": [
          -1,
          290
        ],
        "'REC": [
          -1,
          290
        ],
        "'ATCHECK": [
          -1,
          290
        ],
        "'ASSERTEQUALS": [
          -1,
          290
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          290
        ],
        "'ASSERTTRUE": [
          -1,
          290
        ],
        "'ASSERTFALSE": [
          -1,
          290
        ],
        "'ASSERTSATISFIES": [
          -1,
          290
        ],
        "'ASSERTRAISES": [
          -1,
          290
        ],
        "'IS": [
          -1,
          290
        ],
        "'ISNOT": [
          -1,
          290
        ],
        "'SATISFIES": [
          -1,
          290
        ],
        "'RAISES": [
          -1,
          290
        ],
        "'SWITCH": [
          -1,
          290
        ],
        "'CASE": [
          -1,
          290
        ],
        "'DEFAULT": [
          -1,
          290
        ],
        "'YIELD": [
          -1,
          290
        ],
        "'PLUS": [
          -1,
          290
        ],
        "'DASH": [
          -1,
          290
        ],
        "'TIMES": [
          -1,
          290
        ],
        "'SLASH": [
          -1,
          290
        ],
        "'PERCENT": [
          -1,
          290
        ],
        "'EQUALEQUAL": [
          -1,
          290
        ],
        "'NEQ": [
          -1,
          290
        ],
        "'LEQ": [
          -1,
          290
        ],
        "'GEQ": [
          -1,
          290
        ],
        "'AND": [
          -1,
          290
        ],
        "'OR": [
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
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          290
        ],
        "'USING": [
          -1,
          290
        ],
        "'BLOCK": [
          -1,
          290
        ],
        "'TABLE": [
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
        "'COMMA": [
          298
        ],
        "app-or-access_A0_I2_I1": [
          299
        ],
        "'RPAREN": [
          -1,
          292
        ]
      },
      {
        "$": [
          -1,
          294
        ],
        "'NAME": [
          -1,
          294
        ],
        "'SEMI": [
          -1,
          294
        ],
        "'PARENNOSPACE": [
          -1,
          294
        ],
        "'STRING": [
          -1,
          294
        ],
        "'RPAREN": [
          -1,
          294
        ],
        "'LBRACE": [
          -1,
          294
        ],
        "'RBRACE": [
          -1,
          294
        ],
        "'SPY": [
          -1,
          294
        ],
        "'PARENSPACE": [
          -1,
          294
        ],
        "'COMMA": [
          -1,
          294
        ],
        "'INT": [
          -1,
          294
        ],
        "'LONG": [
          -1,
          294
        ],
        "'DOUBLE": [
          -1,
          294
        ],
        "'FLOAT": [
          -1,
          294
        ],
        "'BOOLEAN": [
          -1,
          294
        ],
        "'VOID": [
          -1,
          294
        ],
        "'LT": [
          -1,
          294
        ],
        "'GT": [
          -1,
          294
        ],
        "'THINARROW": [
          -1,
          294
        ],
        "'DATA": [
          -1,
          294
        ],
        "'IF": [
          -1,
          294
        ],
        "'FOR": [
          -1,
          294
        ],
        "'RETURN": [
          -1,
          294
        ],
        "'VAR": [
          -1,
          294
        ],
        "'REC": [
          -1,
          294
        ],
        "'ATCHECK": [
          -1,
          294
        ],
        "'ASSERTEQUALS": [
          -1,
          294
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          294
        ],
        "'ASSERTTRUE": [
          -1,
          294
        ],
        "'ASSERTFALSE": [
          -1,
          294
        ],
        "'ASSERTSATISFIES": [
          -1,
          294
        ],
        "'ASSERTRAISES": [
          -1,
          294
        ],
        "'IS": [
          -1,
          294
        ],
        "'ISNOT": [
          -1,
          294
        ],
        "'SATISFIES": [
          -1,
          294
        ],
        "'RAISES": [
          -1,
          294
        ],
        "'SWITCH": [
          -1,
          294
        ],
        "'CASE": [
          -1,
          294
        ],
        "'DEFAULT": [
          -1,
          294
        ],
        "'YIELD": [
          -1,
          294
        ],
        "'PLUS": [
          -1,
          294
        ],
        "'DASH": [
          -1,
          294
        ],
        "'TIMES": [
          -1,
          294
        ],
        "'SLASH": [
          -1,
          294
        ],
        "'PERCENT": [
          -1,
          294
        ],
        "'EQUALEQUAL": [
          -1,
          294
        ],
        "'NEQ": [
          -1,
          294
        ],
        "'LEQ": [
          -1,
          294
        ],
        "'GEQ": [
          -1,
          294
        ],
        "'AND": [
          -1,
          294
        ],
        "'OR": [
          -1,
          294
        ],
        "'BANG": [
          -1,
          294
        ],
        "'DOT": [
          -1,
          294
        ],
        "'LBRACK": [
          -1,
          294
        ],
        "'RBRACK": [
          -1,
          294
        ],
        "'NUMBER": [
          -1,
          294
        ],
        "'TRUE": [
          -1,
          294
        ],
        "'FALSE": [
          -1,
          294
        ],
        "'NULL": [
          -1,
          294
        ],
        "'PARENAFTERBRACE": [
          -1,
          294
        ],
        "'SIEVE": [
          -1,
          294
        ],
        "'USING": [
          -1,
          294
        ],
        "'BLOCK": [
          -1,
          294
        ],
        "'TABLE": [
          -1,
          294
        ],
        "'ASK": [
          -1,
          294
        ],
        "'NEW": [
          -1,
          294
        ]
      },
      {
        "$": [
          -1,
          296
        ],
        "'NAME": [
          -1,
          296
        ],
        "'SEMI": [
          -1,
          296
        ],
        "'PARENNOSPACE": [
          -1,
          296
        ],
        "'STRING": [
          -1,
          296
        ],
        "'RPAREN": [
          -1,
          296
        ],
        "'LBRACE": [
          -1,
          296
        ],
        "'RBRACE": [
          -1,
          296
        ],
        "'SPY": [
          -1,
          296
        ],
        "'PARENSPACE": [
          -1,
          296
        ],
        "'COMMA": [
          -1,
          296
        ],
        "'INT": [
          -1,
          296
        ],
        "'LONG": [
          -1,
          296
        ],
        "'DOUBLE": [
          -1,
          296
        ],
        "'FLOAT": [
          -1,
          296
        ],
        "'BOOLEAN": [
          -1,
          296
        ],
        "'VOID": [
          -1,
          296
        ],
        "'LT": [
          -1,
          296
        ],
        "'GT": [
          -1,
          296
        ],
        "'THINARROW": [
          -1,
          296
        ],
        "'DATA": [
          -1,
          296
        ],
        "'IF": [
          -1,
          296
        ],
        "'FOR": [
          -1,
          296
        ],
        "'RETURN": [
          -1,
          296
        ],
        "'VAR": [
          -1,
          296
        ],
        "'REC": [
          -1,
          296
        ],
        "'ATCHECK": [
          -1,
          296
        ],
        "'ASSERTEQUALS": [
          -1,
          296
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          296
        ],
        "'ASSERTTRUE": [
          -1,
          296
        ],
        "'ASSERTFALSE": [
          -1,
          296
        ],
        "'ASSERTSATISFIES": [
          -1,
          296
        ],
        "'ASSERTRAISES": [
          -1,
          296
        ],
        "'IS": [
          -1,
          296
        ],
        "'ISNOT": [
          -1,
          296
        ],
        "'SATISFIES": [
          -1,
          296
        ],
        "'RAISES": [
          -1,
          296
        ],
        "'SWITCH": [
          -1,
          296
        ],
        "'CASE": [
          -1,
          296
        ],
        "'DEFAULT": [
          -1,
          296
        ],
        "'YIELD": [
          -1,
          296
        ],
        "'PLUS": [
          -1,
          296
        ],
        "'DASH": [
          -1,
          296
        ],
        "'TIMES": [
          -1,
          296
        ],
        "'SLASH": [
          -1,
          296
        ],
        "'PERCENT": [
          -1,
          296
        ],
        "'EQUALEQUAL": [
          -1,
          296
        ],
        "'NEQ": [
          -1,
          296
        ],
        "'LEQ": [
          -1,
          296
        ],
        "'GEQ": [
          -1,
          296
        ],
        "'AND": [
          -1,
          296
        ],
        "'OR": [
          -1,
          296
        ],
        "'BANG": [
          -1,
          296
        ],
        "'DOT": [
          -1,
          296
        ],
        "'LBRACK": [
          -1,
          296
        ],
        "'RBRACK": [
          -1,
          296
        ],
        "'NUMBER": [
          -1,
          296
        ],
        "'TRUE": [
          -1,
          296
        ],
        "'FALSE": [
          -1,
          296
        ],
        "'NULL": [
          -1,
          296
        ],
        "'PARENAFTERBRACE": [
          -1,
          296
        ],
        "'SIEVE": [
          -1,
          296
        ],
        "'USING": [
          -1,
          296
        ],
        "'BLOCK": [
          -1,
          296
        ],
        "'TABLE": [
          -1,
          296
        ],
        "'ASK": [
          -1,
          296
        ],
        "'NEW": [
          -1,
          296
        ]
      },
      {
        "construct-expr_A0_I3_I1*": [
          300
        ],
        "'COMMA": [
          -1,
          298
        ],
        "'RBRACK": [
          -1,
          300,
          298
        ]
      },
      {
        "'RBRACK": [
          301
        ]
      },
      {
        "'RBRACK": [
          -1,
          302
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          302
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "for-bind": [
          303
        ]
      },
      {
        "'NAME": [
          304
        ]
      },
      {
        "sieve-expr_I4*": [
          305
        ],
        "'LBRACE": [
          -1,
          304
        ],
        "'COMMA": [
          -1,
          304
        ]
      },
      {
        "$": [
          -1,
          306
        ],
        "'NAME": [
          -1,
          306
        ],
        "'SEMI": [
          -1,
          306
        ],
        "'PARENNOSPACE": [
          -1,
          306
        ],
        "'STRING": [
          -1,
          306
        ],
        "'RPAREN": [
          -1,
          306
        ],
        "'LBRACE": [
          -1,
          306
        ],
        "'RBRACE": [
          -1,
          306
        ],
        "'SPY": [
          -1,
          306
        ],
        "'PARENSPACE": [
          -1,
          306
        ],
        "'COMMA": [
          -1,
          306
        ],
        "'INT": [
          -1,
          306
        ],
        "'LONG": [
          -1,
          306
        ],
        "'DOUBLE": [
          -1,
          306
        ],
        "'FLOAT": [
          -1,
          306
        ],
        "'BOOLEAN": [
          -1,
          306
        ],
        "'VOID": [
          -1,
          306
        ],
        "'LT": [
          -1,
          306
        ],
        "'GT": [
          -1,
          306
        ],
        "'THINARROW": [
          -1,
          306
        ],
        "'DATA": [
          -1,
          306
        ],
        "'IF": [
          -1,
          306
        ],
        "'FOR": [
          -1,
          306
        ],
        "'RETURN": [
          -1,
          306
        ],
        "'VAR": [
          -1,
          306
        ],
        "'REC": [
          -1,
          306
        ],
        "'ATCHECK": [
          -1,
          306
        ],
        "'ASSERTEQUALS": [
          -1,
          306
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          306
        ],
        "'ASSERTTRUE": [
          -1,
          306
        ],
        "'ASSERTFALSE": [
          -1,
          306
        ],
        "'ASSERTSATISFIES": [
          -1,
          306
        ],
        "'ASSERTRAISES": [
          -1,
          306
        ],
        "'IS": [
          -1,
          306
        ],
        "'ISNOT": [
          -1,
          306
        ],
        "'SATISFIES": [
          -1,
          306
        ],
        "'RAISES": [
          -1,
          306
        ],
        "'SWITCH": [
          -1,
          306
        ],
        "'CASE": [
          -1,
          306
        ],
        "'DEFAULT": [
          -1,
          306
        ],
        "'YIELD": [
          -1,
          306
        ],
        "'PLUS": [
          -1,
          306
        ],
        "'DASH": [
          -1,
          306
        ],
        "'TIMES": [
          -1,
          306
        ],
        "'SLASH": [
          -1,
          306
        ],
        "'PERCENT": [
          -1,
          306
        ],
        "'EQUALEQUAL": [
          -1,
          306
        ],
        "'NEQ": [
          -1,
          306
        ],
        "'LEQ": [
          -1,
          306
        ],
        "'GEQ": [
          -1,
          306
        ],
        "'AND": [
          -1,
          306
        ],
        "'OR": [
          -1,
          306
        ],
        "'BANG": [
          -1,
          306
        ],
        "'DOT": [
          -1,
          306
        ],
        "'LBRACK": [
          -1,
          306
        ],
        "'RBRACK": [
          -1,
          306
        ],
        "'NUMBER": [
          -1,
          306
        ],
        "'TRUE": [
          -1,
          306
        ],
        "'FALSE": [
          -1,
          306
        ],
        "'NULL": [
          -1,
          306
        ],
        "'PARENAFTERBRACE": [
          -1,
          306
        ],
        "'SIEVE": [
          -1,
          306
        ],
        "'USING": [
          -1,
          306
        ],
        "'BLOCK": [
          -1,
          306
        ],
        "'TABLE": [
          -1,
          306
        ],
        "'ASK": [
          -1,
          306
        ],
        "'NEW": [
          -1,
          306
        ]
      },
      {
        "'NAME": [
          -1,
          308
        ],
        "'PARENNOSPACE": [
          -1,
          308
        ],
        "'STRING": [
          -1,
          308
        ],
        "'LBRACE": [
          -1,
          308
        ],
        "'RBRACE": [
          -1,
          308
        ],
        "'SPY": [
          -1,
          308
        ],
        "'PARENSPACE": [
          -1,
          308
        ],
        "'INT": [
          -1,
          308
        ],
        "'LONG": [
          -1,
          308
        ],
        "'DOUBLE": [
          -1,
          308
        ],
        "'FLOAT": [
          -1,
          308
        ],
        "'BOOLEAN": [
          -1,
          308
        ],
        "'VOID": [
          -1,
          308
        ],
        "'DATA": [
          -1,
          308
        ],
        "'IF": [
          -1,
          308
        ],
        "'FOR": [
          -1,
          308
        ],
        "'RETURN": [
          -1,
          308
        ],
        "'VAR": [
          -1,
          308
        ],
        "'REC": [
          -1,
          308
        ],
        "'ATCHECK": [
          -1,
          308
        ],
        "'SWITCH": [
          -1,
          308
        ],
        "'YIELD": [
          -1,
          308
        ],
        "'DASH": [
          -1,
          308
        ],
        "'BANG": [
          -1,
          308
        ],
        "'LBRACK": [
          -1,
          308
        ],
        "'NUMBER": [
          -1,
          308
        ],
        "'TRUE": [
          -1,
          308
        ],
        "'FALSE": [
          -1,
          308
        ],
        "'NULL": [
          -1,
          308
        ],
        "'PARENAFTERBRACE": [
          -1,
          308
        ],
        "'SIEVE": [
          -1,
          308
        ],
        "'BLOCK": [
          -1,
          308
        ],
        "'TABLE": [
          -1,
          308
        ],
        "'ASK": [
          -1,
          308
        ],
        "'NEW": [
          -1,
          308
        ]
      },
      {
        "'NAME": [
          -1,
          310
        ],
        "'PARENNOSPACE": [
          -1,
          310
        ],
        "'STRING": [
          -1,
          310
        ],
        "'LBRACE": [
          -1,
          310
        ],
        "'RBRACE": [
          -1,
          310
        ],
        "'SPY": [
          -1,
          310
        ],
        "'PARENSPACE": [
          -1,
          310
        ],
        "'INT": [
          -1,
          310
        ],
        "'LONG": [
          -1,
          310
        ],
        "'DOUBLE": [
          -1,
          310
        ],
        "'FLOAT": [
          -1,
          310
        ],
        "'BOOLEAN": [
          -1,
          310
        ],
        "'VOID": [
          -1,
          310
        ],
        "'DATA": [
          -1,
          310
        ],
        "'IF": [
          -1,
          310
        ],
        "'FOR": [
          -1,
          310
        ],
        "'RETURN": [
          -1,
          310
        ],
        "'VAR": [
          -1,
          310
        ],
        "'REC": [
          -1,
          310
        ],
        "'ATCHECK": [
          -1,
          310
        ],
        "'SWITCH": [
          -1,
          310
        ],
        "'YIELD": [
          -1,
          310
        ],
        "'DASH": [
          -1,
          310
        ],
        "'BANG": [
          -1,
          310
        ],
        "'LBRACK": [
          -1,
          310
        ],
        "'NUMBER": [
          -1,
          310
        ],
        "'TRUE": [
          -1,
          310
        ],
        "'FALSE": [
          -1,
          310
        ],
        "'NULL": [
          -1,
          310
        ],
        "'PARENAFTERBRACE": [
          -1,
          310
        ],
        "'SIEVE": [
          -1,
          310
        ],
        "'BLOCK": [
          -1,
          310
        ],
        "'TABLE": [
          -1,
          310
        ],
        "'ASK": [
          -1,
          310
        ],
        "'NEW": [
          -1,
          310
        ]
      },
      {
        "'SEMI": [
          -1,
          312
        ],
        "'COMMA": [
          -1,
          312
        ]
      },
      {
        "'SEMI": [
          306
        ],
        "'COMMA": [
          307
        ],
        "table-expr_I3": [
          308
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          309
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "ask-expr_A0_I4*": [
          310
        ],
        "ask-expr_A1_I4*": [
          311
        ],
        "'NAME": [
          -1,
          314,
          316
        ],
        "'STRING": [
          -1,
          314,
          316
        ],
        "'LBRACE": [
          -1,
          314,
          316
        ],
        "'RBRACE": [
          -1,
          314
        ],
        "'PARENSPACE": [
          -1,
          314,
          316
        ],
        "'SWITCH": [
          -1,
          314,
          316
        ],
        "'DASH": [
          -1,
          314,
          316
        ],
        "'BANG": [
          -1,
          314,
          316
        ],
        "'LBRACK": [
          -1,
          314,
          316
        ],
        "'NUMBER": [
          -1,
          314,
          316
        ],
        "'TRUE": [
          -1,
          314,
          316
        ],
        "'FALSE": [
          -1,
          314,
          316
        ],
        "'NULL": [
          -1,
          314,
          316
        ],
        "'PARENAFTERBRACE": [
          -1,
          314,
          316
        ],
        "'SIEVE": [
          -1,
          314,
          316
        ],
        "'BLOCK": [
          -1,
          314,
          316
        ],
        "'TABLE": [
          -1,
          314,
          316
        ],
        "'ASK": [
          -1,
          314,
          316
        ],
        "'OTHERWISE": [
          -1,
          316
        ],
        "'NEW": [
          -1,
          314,
          316
        ]
      },
      {
        "new-expr_I3_I1*": [
          312
        ],
        "'RPAREN": [
          -1,
          318,
          320
        ],
        "'COMMA": [
          -1,
          320
        ]
      },
      {
        "'RPAREN": [
          313
        ]
      },
      {
        "'RPAREN": [
          -1,
          322
        ]
      },
      {
        "$": [
          -1,
          324
        ],
        "'IMPORT": [
          -1,
          324
        ],
        "'NAME": [
          -1,
          324
        ],
        "'PARENNOSPACE": [
          -1,
          324
        ],
        "'STRING": [
          -1,
          324
        ],
        "'INCLUDE": [
          -1,
          324
        ],
        "'LBRACE": [
          -1,
          324
        ],
        "'PARENSPACE": [
          -1,
          324
        ],
        "'INT": [
          -1,
          324
        ],
        "'LONG": [
          -1,
          324
        ],
        "'DOUBLE": [
          -1,
          324
        ],
        "'FLOAT": [
          -1,
          324
        ],
        "'BOOLEAN": [
          -1,
          324
        ],
        "'VOID": [
          -1,
          324
        ],
        "'DATA": [
          -1,
          324
        ],
        "'VAR": [
          -1,
          324
        ],
        "'REC": [
          -1,
          324
        ],
        "'ATCHECK": [
          -1,
          324
        ],
        "'SWITCH": [
          -1,
          324
        ],
        "'DASH": [
          -1,
          324
        ],
        "'BANG": [
          -1,
          324
        ],
        "'LBRACK": [
          -1,
          324
        ],
        "'NUMBER": [
          -1,
          324
        ],
        "'TRUE": [
          -1,
          324
        ],
        "'FALSE": [
          -1,
          324
        ],
        "'NULL": [
          -1,
          324
        ],
        "'PARENAFTERBRACE": [
          -1,
          324
        ],
        "'SIEVE": [
          -1,
          324
        ],
        "'BLOCK": [
          -1,
          324
        ],
        "'TABLE": [
          -1,
          324
        ],
        "'ASK": [
          -1,
          324
        ],
        "'NEW": [
          -1,
          324
        ]
      },
      {
        "'SEMI": [
          314
        ],
        "'AS": [
          315
        ]
      },
      {
        "$": [
          -1,
          326
        ],
        "'IMPORT": [
          -1,
          326
        ],
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
        "'INCLUDE": [
          -1,
          326
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          326
        ],
        "'REC": [
          -1,
          326
        ],
        "'ATCHECK": [
          -1,
          326
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          326
        ],
        "'BLOCK": [
          -1,
          326
        ],
        "'TABLE": [
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
          316
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          317
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          -1,
          328
        ],
        "'RPAREN": [
          -1,
          328
        ],
        "'COMMA": [
          -1,
          328
        ],
        "'GT": [
          -1,
          328
        ],
        "'THINARROW": [
          -1,
          328
        ]
      },
      {
        "'COMMA": [
          -1,
          330
        ],
        "'GT": [
          -1,
          330
        ]
      },
      {
        "'RPAREN": [
          -1,
          332
        ],
        "'COMMA": [
          -1,
          332
        ]
      },
      {
        "$": [
          -1,
          334
        ],
        "'NAME": [
          -1,
          334
        ],
        "'SEMI": [
          -1,
          334
        ],
        "'PARENNOSPACE": [
          -1,
          334
        ],
        "'STRING": [
          -1,
          334
        ],
        "'RPAREN": [
          -1,
          334
        ],
        "'LBRACE": [
          -1,
          334
        ],
        "'RBRACE": [
          -1,
          334
        ],
        "'SPY": [
          -1,
          334
        ],
        "'PARENSPACE": [
          -1,
          334
        ],
        "'COMMA": [
          -1,
          334
        ],
        "'INT": [
          -1,
          334
        ],
        "'LONG": [
          -1,
          334
        ],
        "'DOUBLE": [
          -1,
          334
        ],
        "'FLOAT": [
          -1,
          334
        ],
        "'BOOLEAN": [
          -1,
          334
        ],
        "'VOID": [
          -1,
          334
        ],
        "'DATA": [
          -1,
          334
        ],
        "'IF": [
          -1,
          334
        ],
        "'FOR": [
          -1,
          334
        ],
        "'RETURN": [
          -1,
          334
        ],
        "'VAR": [
          -1,
          334
        ],
        "'REC": [
          -1,
          334
        ],
        "'ATCHECK": [
          -1,
          334
        ],
        "'ASSERTEQUALS": [
          -1,
          334
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          334
        ],
        "'ASSERTTRUE": [
          -1,
          334
        ],
        "'ASSERTFALSE": [
          -1,
          334
        ],
        "'ASSERTSATISFIES": [
          -1,
          334
        ],
        "'ASSERTRAISES": [
          -1,
          334
        ],
        "'IS": [
          -1,
          334
        ],
        "'ISNOT": [
          -1,
          334
        ],
        "'SATISFIES": [
          -1,
          334
        ],
        "'RAISES": [
          -1,
          334
        ],
        "'SWITCH": [
          -1,
          334
        ],
        "'CASE": [
          -1,
          334
        ],
        "'DEFAULT": [
          -1,
          334
        ],
        "'YIELD": [
          -1,
          334
        ],
        "'DASH": [
          -1,
          334
        ],
        "'BANG": [
          -1,
          334
        ],
        "'LBRACK": [
          -1,
          334
        ],
        "'RBRACK": [
          -1,
          334
        ],
        "'NUMBER": [
          -1,
          334
        ],
        "'TRUE": [
          -1,
          334
        ],
        "'FALSE": [
          -1,
          334
        ],
        "'NULL": [
          -1,
          334
        ],
        "'PARENAFTERBRACE": [
          -1,
          334
        ],
        "'SIEVE": [
          -1,
          334
        ],
        "'USING": [
          -1,
          334
        ],
        "'BLOCK": [
          -1,
          334
        ],
        "'TABLE": [
          -1,
          334
        ],
        "'ASK": [
          -1,
          334
        ],
        "'NEW": [
          -1,
          334
        ]
      },
      {
        "'RBRACE": [
          -1,
          336
        ],
        "'COMMA": [
          -1,
          336
        ]
      },
      {
        "'COMMA": [
          -1,
          338
        ],
        "'THINARROW": [
          -1,
          338
        ]
      },
      {
        "'NAME": [
          -1,
          340
        ],
        "'RPAREN": [
          -1,
          340
        ],
        "'COMMA": [
          -1,
          340
        ],
        "'GT": [
          -1,
          340
        ],
        "'THINARROW": [
          -1,
          340
        ]
      },
      {
        "$": [
          -1,
          342
        ],
        "'NAME": [
          -1,
          342
        ],
        "'SEMI": [
          -1,
          342
        ],
        "'PARENNOSPACE": [
          -1,
          342
        ],
        "'STRING": [
          -1,
          342
        ],
        "'RPAREN": [
          -1,
          342
        ],
        "'LBRACE": [
          -1,
          342
        ],
        "'RBRACE": [
          -1,
          342
        ],
        "'SPY": [
          -1,
          342
        ],
        "'PARENSPACE": [
          -1,
          342
        ],
        "'COMMA": [
          -1,
          342
        ],
        "'INT": [
          -1,
          342
        ],
        "'LONG": [
          -1,
          342
        ],
        "'DOUBLE": [
          -1,
          342
        ],
        "'FLOAT": [
          -1,
          342
        ],
        "'BOOLEAN": [
          -1,
          342
        ],
        "'VOID": [
          -1,
          342
        ],
        "'DATA": [
          -1,
          342
        ],
        "'IF": [
          -1,
          342
        ],
        "'FOR": [
          -1,
          342
        ],
        "'RETURN": [
          -1,
          342
        ],
        "'VAR": [
          -1,
          342
        ],
        "'REC": [
          -1,
          342
        ],
        "'ATCHECK": [
          -1,
          342
        ],
        "'ASSERTEQUALS": [
          -1,
          342
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          342
        ],
        "'ASSERTTRUE": [
          -1,
          342
        ],
        "'ASSERTFALSE": [
          -1,
          342
        ],
        "'ASSERTSATISFIES": [
          -1,
          342
        ],
        "'ASSERTRAISES": [
          -1,
          342
        ],
        "'IS": [
          -1,
          342
        ],
        "'ISNOT": [
          -1,
          342
        ],
        "'SATISFIES": [
          -1,
          342
        ],
        "'RAISES": [
          -1,
          342
        ],
        "'SWITCH": [
          -1,
          342
        ],
        "'CASE": [
          -1,
          342
        ],
        "'DEFAULT": [
          -1,
          342
        ],
        "'YIELD": [
          -1,
          342
        ],
        "'DASH": [
          -1,
          342
        ],
        "'BANG": [
          -1,
          342
        ],
        "'LBRACK": [
          -1,
          342
        ],
        "'RBRACK": [
          -1,
          342
        ],
        "'NUMBER": [
          -1,
          342
        ],
        "'TRUE": [
          -1,
          342
        ],
        "'FALSE": [
          -1,
          342
        ],
        "'NULL": [
          -1,
          342
        ],
        "'PARENAFTERBRACE": [
          -1,
          342
        ],
        "'SIEVE": [
          -1,
          342
        ],
        "'USING": [
          -1,
          342
        ],
        "'BLOCK": [
          -1,
          342
        ],
        "'TABLE": [
          -1,
          342
        ],
        "'ASK": [
          -1,
          342
        ],
        "'NEW": [
          -1,
          342
        ]
      },
      {
        "'RPAREN": [
          -1,
          344
        ],
        "'COMMA": [
          -1,
          344
        ]
      },
      {
        "'RPAREN": [
          -1,
          346
        ],
        "'COMMA": [
          -1,
          346
        ]
      },
      {
        "block": [
          318
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "'COMMA": [
          320
        ],
        "fun-decl_I3_I1": [
          321
        ],
        "'RPAREN": [
          -1,
          348
        ]
      },
      {
        "$": [
          -1,
          350
        ],
        "'NAME": [
          -1,
          350
        ],
        "'PARENNOSPACE": [
          -1,
          350
        ],
        "'STRING": [
          -1,
          350
        ],
        "'LBRACE": [
          -1,
          350
        ],
        "'RBRACE": [
          -1,
          350
        ],
        "'SPY": [
          -1,
          350
        ],
        "'PARENSPACE": [
          -1,
          350
        ],
        "'INT": [
          -1,
          350
        ],
        "'LONG": [
          -1,
          350
        ],
        "'DOUBLE": [
          -1,
          350
        ],
        "'FLOAT": [
          -1,
          350
        ],
        "'BOOLEAN": [
          -1,
          350
        ],
        "'VOID": [
          -1,
          350
        ],
        "'DATA": [
          -1,
          350
        ],
        "'IF": [
          -1,
          350
        ],
        "'FOR": [
          -1,
          350
        ],
        "'RETURN": [
          -1,
          350
        ],
        "'VAR": [
          -1,
          350
        ],
        "'REC": [
          -1,
          350
        ],
        "'ATCHECK": [
          -1,
          350
        ],
        "'ASSERTEQUALS": [
          -1,
          350
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          350
        ],
        "'ASSERTTRUE": [
          -1,
          350
        ],
        "'ASSERTFALSE": [
          -1,
          350
        ],
        "'ASSERTSATISFIES": [
          -1,
          350
        ],
        "'ASSERTRAISES": [
          -1,
          350
        ],
        "'SWITCH": [
          -1,
          350
        ],
        "'YIELD": [
          -1,
          350
        ],
        "'DASH": [
          -1,
          350
        ],
        "'BANG": [
          -1,
          350
        ],
        "'LBRACK": [
          -1,
          350
        ],
        "'NUMBER": [
          -1,
          350
        ],
        "'TRUE": [
          -1,
          350
        ],
        "'FALSE": [
          -1,
          350
        ],
        "'NULL": [
          -1,
          350
        ],
        "'PARENAFTERBRACE": [
          -1,
          350
        ],
        "'SIEVE": [
          -1,
          350
        ],
        "'BLOCK": [
          -1,
          350
        ],
        "'TABLE": [
          -1,
          350
        ],
        "'ASK": [
          -1,
          350
        ],
        "'NEW": [
          -1,
          350
        ]
      },
      {
        "$": [
          -1,
          352
        ],
        "'NAME": [
          -1,
          352
        ],
        "'PARENNOSPACE": [
          -1,
          352
        ],
        "'STRING": [
          -1,
          352
        ],
        "'LBRACE": [
          -1,
          352
        ],
        "'RBRACE": [
          -1,
          352
        ],
        "'SPY": [
          -1,
          352
        ],
        "'PARENSPACE": [
          -1,
          352
        ],
        "'INT": [
          -1,
          352
        ],
        "'LONG": [
          -1,
          352
        ],
        "'DOUBLE": [
          -1,
          352
        ],
        "'FLOAT": [
          -1,
          352
        ],
        "'BOOLEAN": [
          -1,
          352
        ],
        "'VOID": [
          -1,
          352
        ],
        "'DATA": [
          -1,
          352
        ],
        "'IF": [
          -1,
          352
        ],
        "'FOR": [
          -1,
          352
        ],
        "'RETURN": [
          -1,
          352
        ],
        "'VAR": [
          -1,
          352
        ],
        "'REC": [
          -1,
          352
        ],
        "'ATCHECK": [
          -1,
          352
        ],
        "'ASSERTEQUALS": [
          -1,
          352
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          352
        ],
        "'ASSERTTRUE": [
          -1,
          352
        ],
        "'ASSERTFALSE": [
          -1,
          352
        ],
        "'ASSERTSATISFIES": [
          -1,
          352
        ],
        "'ASSERTRAISES": [
          -1,
          352
        ],
        "'SWITCH": [
          -1,
          352
        ],
        "'YIELD": [
          -1,
          352
        ],
        "'DASH": [
          -1,
          352
        ],
        "'BANG": [
          -1,
          352
        ],
        "'LBRACK": [
          -1,
          352
        ],
        "'NUMBER": [
          -1,
          352
        ],
        "'TRUE": [
          -1,
          352
        ],
        "'FALSE": [
          -1,
          352
        ],
        "'NULL": [
          -1,
          352
        ],
        "'PARENAFTERBRACE": [
          -1,
          352
        ],
        "'SIEVE": [
          -1,
          352
        ],
        "'BLOCK": [
          -1,
          352
        ],
        "'TABLE": [
          -1,
          352
        ],
        "'ASK": [
          -1,
          352
        ],
        "'NEW": [
          -1,
          352
        ]
      },
      {
        "$": [
          -1,
          354
        ],
        "'NAME": [
          -1,
          354
        ],
        "'PARENNOSPACE": [
          -1,
          354
        ],
        "'STRING": [
          -1,
          354
        ],
        "'LBRACE": [
          -1,
          354
        ],
        "'RBRACE": [
          -1,
          354
        ],
        "'SPY": [
          -1,
          354
        ],
        "'PARENSPACE": [
          -1,
          354
        ],
        "'INT": [
          -1,
          354
        ],
        "'LONG": [
          -1,
          354
        ],
        "'DOUBLE": [
          -1,
          354
        ],
        "'FLOAT": [
          -1,
          354
        ],
        "'BOOLEAN": [
          -1,
          354
        ],
        "'VOID": [
          -1,
          354
        ],
        "'DATA": [
          -1,
          354
        ],
        "'IF": [
          -1,
          354
        ],
        "'FOR": [
          -1,
          354
        ],
        "'RETURN": [
          -1,
          354
        ],
        "'VAR": [
          -1,
          354
        ],
        "'REC": [
          -1,
          354
        ],
        "'ATCHECK": [
          -1,
          354
        ],
        "'ASSERTEQUALS": [
          -1,
          354
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          354
        ],
        "'ASSERTTRUE": [
          -1,
          354
        ],
        "'ASSERTFALSE": [
          -1,
          354
        ],
        "'ASSERTSATISFIES": [
          -1,
          354
        ],
        "'ASSERTRAISES": [
          -1,
          354
        ],
        "'SWITCH": [
          -1,
          354
        ],
        "'YIELD": [
          -1,
          354
        ],
        "'DASH": [
          -1,
          354
        ],
        "'BANG": [
          -1,
          354
        ],
        "'LBRACK": [
          -1,
          354
        ],
        "'NUMBER": [
          -1,
          354
        ],
        "'TRUE": [
          -1,
          354
        ],
        "'FALSE": [
          -1,
          354
        ],
        "'NULL": [
          -1,
          354
        ],
        "'PARENAFTERBRACE": [
          -1,
          354
        ],
        "'SIEVE": [
          -1,
          354
        ],
        "'BLOCK": [
          -1,
          354
        ],
        "'TABLE": [
          -1,
          354
        ],
        "'ASK": [
          -1,
          354
        ],
        "'NEW": [
          -1,
          354
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          322
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "variant-decl_A0_I2?": [
          323
        ],
        "variant-decl_A0_I2": [
          324
        ],
        "variant-member": [
          325
        ],
        "'RPAREN": [
          -1,
          356
        ]
      },
      {
        "'SEMI": [
          326
        ],
        "data-decl_I5?": [
          327
        ],
        "data-decl_I4": [
          328
        ],
        "data-decl_I5": [
          329
        ],
        "'RBRACE": [
          -1,
          358
        ]
      },
      {
        "'SEMI": [
          330
        ],
        "var-stmt_I5?": [
          331
        ],
        "var-stmt_I5": [
          332
        ],
        "$": [
          -1,
          360,
          362
        ],
        "'NAME": [
          -1,
          360,
          362
        ],
        "'PARENNOSPACE": [
          -1,
          360,
          362
        ],
        "'STRING": [
          -1,
          360,
          362
        ],
        "'LBRACE": [
          -1,
          360,
          362
        ],
        "'RBRACE": [
          -1,
          360,
          362
        ],
        "'SPY": [
          -1,
          360,
          362
        ],
        "'PARENSPACE": [
          -1,
          360,
          362
        ],
        "'INT": [
          -1,
          360,
          362
        ],
        "'LONG": [
          -1,
          360,
          362
        ],
        "'DOUBLE": [
          -1,
          360,
          362
        ],
        "'FLOAT": [
          -1,
          360,
          362
        ],
        "'BOOLEAN": [
          -1,
          360,
          362
        ],
        "'VOID": [
          -1,
          360,
          362
        ],
        "'DATA": [
          -1,
          360,
          362
        ],
        "'IF": [
          -1,
          360,
          362
        ],
        "'FOR": [
          -1,
          360,
          362
        ],
        "'RETURN": [
          -1,
          360,
          362
        ],
        "'VAR": [
          -1,
          360,
          362
        ],
        "'REC": [
          -1,
          360,
          362
        ],
        "'ATCHECK": [
          -1,
          360,
          362
        ],
        "'ASSERTEQUALS": [
          -1,
          360,
          362
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          360,
          362
        ],
        "'ASSERTTRUE": [
          -1,
          360,
          362
        ],
        "'ASSERTFALSE": [
          -1,
          360,
          362
        ],
        "'ASSERTSATISFIES": [
          -1,
          360,
          362
        ],
        "'ASSERTRAISES": [
          -1,
          360,
          362
        ],
        "'SWITCH": [
          -1,
          360,
          362
        ],
        "'YIELD": [
          -1,
          360,
          362
        ],
        "'DASH": [
          -1,
          360,
          362
        ],
        "'BANG": [
          -1,
          360,
          362
        ],
        "'LBRACK": [
          -1,
          360,
          362
        ],
        "'NUMBER": [
          -1,
          360,
          362
        ],
        "'TRUE": [
          -1,
          360,
          362
        ],
        "'FALSE": [
          -1,
          360,
          362
        ],
        "'NULL": [
          -1,
          360,
          362
        ],
        "'PARENAFTERBRACE": [
          -1,
          360,
          362
        ],
        "'SIEVE": [
          -1,
          360,
          362
        ],
        "'BLOCK": [
          -1,
          360,
          362
        ],
        "'TABLE": [
          -1,
          360,
          362
        ],
        "'ASK": [
          -1,
          360,
          362
        ],
        "'NEW": [
          -1,
          360,
          362
        ]
      },
      {
        "'SEMI": [
          333
        ],
        "rec-stmt_I5?": [
          334
        ],
        "rec-stmt_I5": [
          335
        ],
        "$": [
          -1,
          364,
          366
        ],
        "'NAME": [
          -1,
          364,
          366
        ],
        "'PARENNOSPACE": [
          -1,
          364,
          366
        ],
        "'STRING": [
          -1,
          364,
          366
        ],
        "'LBRACE": [
          -1,
          364,
          366
        ],
        "'RBRACE": [
          -1,
          364,
          366
        ],
        "'SPY": [
          -1,
          364,
          366
        ],
        "'PARENSPACE": [
          -1,
          364,
          366
        ],
        "'INT": [
          -1,
          364,
          366
        ],
        "'LONG": [
          -1,
          364,
          366
        ],
        "'DOUBLE": [
          -1,
          364,
          366
        ],
        "'FLOAT": [
          -1,
          364,
          366
        ],
        "'BOOLEAN": [
          -1,
          364,
          366
        ],
        "'VOID": [
          -1,
          364,
          366
        ],
        "'DATA": [
          -1,
          364,
          366
        ],
        "'IF": [
          -1,
          364,
          366
        ],
        "'FOR": [
          -1,
          364,
          366
        ],
        "'RETURN": [
          -1,
          364,
          366
        ],
        "'VAR": [
          -1,
          364,
          366
        ],
        "'REC": [
          -1,
          364,
          366
        ],
        "'ATCHECK": [
          -1,
          364,
          366
        ],
        "'ASSERTEQUALS": [
          -1,
          364,
          366
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          364,
          366
        ],
        "'ASSERTTRUE": [
          -1,
          364,
          366
        ],
        "'ASSERTFALSE": [
          -1,
          364,
          366
        ],
        "'ASSERTSATISFIES": [
          -1,
          364,
          366
        ],
        "'ASSERTRAISES": [
          -1,
          364,
          366
        ],
        "'SWITCH": [
          -1,
          364,
          366
        ],
        "'YIELD": [
          -1,
          364,
          366
        ],
        "'DASH": [
          -1,
          364,
          366
        ],
        "'BANG": [
          -1,
          364,
          366
        ],
        "'LBRACK": [
          -1,
          364,
          366
        ],
        "'NUMBER": [
          -1,
          364,
          366
        ],
        "'TRUE": [
          -1,
          364,
          366
        ],
        "'FALSE": [
          -1,
          364,
          366
        ],
        "'NULL": [
          -1,
          364,
          366
        ],
        "'PARENAFTERBRACE": [
          -1,
          364,
          366
        ],
        "'SIEVE": [
          -1,
          364,
          366
        ],
        "'BLOCK": [
          -1,
          364,
          366
        ],
        "'TABLE": [
          -1,
          364,
          366
        ],
        "'ASK": [
          -1,
          364,
          366
        ],
        "'NEW": [
          -1,
          364,
          366
        ]
      },
      {
        "'NAME": [
          336
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          337
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          338
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          339
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          340
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          341
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          342
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          -1,
          368
        ],
        "'PARENNOSPACE": [
          -1,
          368
        ],
        "'STRING": [
          -1,
          368
        ],
        "'LBRACE": [
          -1,
          368
        ],
        "'RBRACE": [
          -1,
          368
        ],
        "'SPY": [
          -1,
          368
        ],
        "'PARENSPACE": [
          -1,
          368
        ],
        "'INT": [
          -1,
          368
        ],
        "'LONG": [
          -1,
          368
        ],
        "'DOUBLE": [
          -1,
          368
        ],
        "'FLOAT": [
          -1,
          368
        ],
        "'BOOLEAN": [
          -1,
          368
        ],
        "'VOID": [
          -1,
          368
        ],
        "'DATA": [
          -1,
          368
        ],
        "'IF": [
          -1,
          368
        ],
        "'FOR": [
          -1,
          368
        ],
        "'RETURN": [
          -1,
          368
        ],
        "'VAR": [
          -1,
          368
        ],
        "'REC": [
          -1,
          368
        ],
        "'ATCHECK": [
          -1,
          368
        ],
        "'ASSERTEQUALS": [
          -1,
          368
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          368
        ],
        "'ASSERTTRUE": [
          -1,
          368
        ],
        "'ASSERTFALSE": [
          -1,
          368
        ],
        "'ASSERTSATISFIES": [
          -1,
          368
        ],
        "'ASSERTRAISES": [
          -1,
          368
        ],
        "'SWITCH": [
          -1,
          368
        ],
        "'YIELD": [
          -1,
          368
        ],
        "'DASH": [
          -1,
          368
        ],
        "'BANG": [
          -1,
          368
        ],
        "'LBRACK": [
          -1,
          368
        ],
        "'NUMBER": [
          -1,
          368
        ],
        "'TRUE": [
          -1,
          368
        ],
        "'FALSE": [
          -1,
          368
        ],
        "'NULL": [
          -1,
          368
        ],
        "'PARENAFTERBRACE": [
          -1,
          368
        ],
        "'SIEVE": [
          -1,
          368
        ],
        "'BLOCK": [
          -1,
          368
        ],
        "'TABLE": [
          -1,
          368
        ],
        "'ASK": [
          -1,
          368
        ],
        "'NEW": [
          -1,
          368
        ]
      },
      {
        "'SEMI": [
          343
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          344
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          345
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          346
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          347
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          348
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          349
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'SEMI": [
          350
        ],
        "yield-stmt_I2?": [
          351
        ],
        "yield-stmt_I2": [
          352
        ],
        "'NAME": [
          -1,
          370,
          372
        ],
        "'PARENNOSPACE": [
          -1,
          370,
          372
        ],
        "'STRING": [
          -1,
          370,
          372
        ],
        "'LBRACE": [
          -1,
          370,
          372
        ],
        "'RBRACE": [
          -1,
          370,
          372
        ],
        "'SPY": [
          -1,
          370,
          372
        ],
        "'PARENSPACE": [
          -1,
          370,
          372
        ],
        "'INT": [
          -1,
          370,
          372
        ],
        "'LONG": [
          -1,
          370,
          372
        ],
        "'DOUBLE": [
          -1,
          370,
          372
        ],
        "'FLOAT": [
          -1,
          370,
          372
        ],
        "'BOOLEAN": [
          -1,
          370,
          372
        ],
        "'VOID": [
          -1,
          370,
          372
        ],
        "'DATA": [
          -1,
          370,
          372
        ],
        "'IF": [
          -1,
          370,
          372
        ],
        "'FOR": [
          -1,
          370,
          372
        ],
        "'RETURN": [
          -1,
          370,
          372
        ],
        "'VAR": [
          -1,
          370,
          372
        ],
        "'REC": [
          -1,
          370,
          372
        ],
        "'ATCHECK": [
          -1,
          370,
          372
        ],
        "'ASSERTEQUALS": [
          -1,
          370,
          372
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          370,
          372
        ],
        "'ASSERTTRUE": [
          -1,
          370,
          372
        ],
        "'ASSERTFALSE": [
          -1,
          370,
          372
        ],
        "'ASSERTSATISFIES": [
          -1,
          370,
          372
        ],
        "'ASSERTRAISES": [
          -1,
          370,
          372
        ],
        "'SWITCH": [
          -1,
          370,
          372
        ],
        "'CASE": [
          -1,
          370,
          372
        ],
        "'DEFAULT": [
          -1,
          370,
          372
        ],
        "'YIELD": [
          -1,
          370,
          372
        ],
        "'DASH": [
          -1,
          370,
          372
        ],
        "'BANG": [
          -1,
          370,
          372
        ],
        "'LBRACK": [
          -1,
          370,
          372
        ],
        "'NUMBER": [
          -1,
          370,
          372
        ],
        "'TRUE": [
          -1,
          370,
          372
        ],
        "'FALSE": [
          -1,
          370,
          372
        ],
        "'NULL": [
          -1,
          370,
          372
        ],
        "'PARENAFTERBRACE": [
          -1,
          370,
          372
        ],
        "'SIEVE": [
          -1,
          370,
          372
        ],
        "'BLOCK": [
          -1,
          370,
          372
        ],
        "'TABLE": [
          -1,
          370,
          372
        ],
        "'ASK": [
          -1,
          370,
          372
        ],
        "'NEW": [
          -1,
          370,
          372
        ]
      },
      {
        "'LBRACE": [
          353
        ]
      },
      {
        "switch-expr_I5*": [
          354
        ],
        "'RBRACE": [
          -1,
          374
        ],
        "'CASE": [
          -1,
          374
        ],
        "'DEFAULT": [
          -1,
          374
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          355
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          -1,
          376
        ],
        "'COMMA": [
          -1,
          376
        ]
      },
      {
        "'COMMA": [
          356
        ],
        "construct-expr_A0_I3_I1": [
          357
        ],
        "'RBRACK": [
          -1,
          378
        ]
      },
      {
        "$": [
          -1,
          380
        ],
        "'NAME": [
          -1,
          380
        ],
        "'SEMI": [
          -1,
          380
        ],
        "'PARENNOSPACE": [
          -1,
          380
        ],
        "'STRING": [
          -1,
          380
        ],
        "'RPAREN": [
          -1,
          380
        ],
        "'LBRACE": [
          -1,
          380
        ],
        "'RBRACE": [
          -1,
          380
        ],
        "'SPY": [
          -1,
          380
        ],
        "'PARENSPACE": [
          -1,
          380
        ],
        "'COMMA": [
          -1,
          380
        ],
        "'INT": [
          -1,
          380
        ],
        "'LONG": [
          -1,
          380
        ],
        "'DOUBLE": [
          -1,
          380
        ],
        "'FLOAT": [
          -1,
          380
        ],
        "'BOOLEAN": [
          -1,
          380
        ],
        "'VOID": [
          -1,
          380
        ],
        "'LT": [
          -1,
          380
        ],
        "'GT": [
          -1,
          380
        ],
        "'THINARROW": [
          -1,
          380
        ],
        "'DATA": [
          -1,
          380
        ],
        "'IF": [
          -1,
          380
        ],
        "'FOR": [
          -1,
          380
        ],
        "'RETURN": [
          -1,
          380
        ],
        "'VAR": [
          -1,
          380
        ],
        "'REC": [
          -1,
          380
        ],
        "'ATCHECK": [
          -1,
          380
        ],
        "'ASSERTEQUALS": [
          -1,
          380
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          380
        ],
        "'ASSERTTRUE": [
          -1,
          380
        ],
        "'ASSERTFALSE": [
          -1,
          380
        ],
        "'ASSERTSATISFIES": [
          -1,
          380
        ],
        "'ASSERTRAISES": [
          -1,
          380
        ],
        "'IS": [
          -1,
          380
        ],
        "'ISNOT": [
          -1,
          380
        ],
        "'SATISFIES": [
          -1,
          380
        ],
        "'RAISES": [
          -1,
          380
        ],
        "'SWITCH": [
          -1,
          380
        ],
        "'CASE": [
          -1,
          380
        ],
        "'DEFAULT": [
          -1,
          380
        ],
        "'YIELD": [
          -1,
          380
        ],
        "'PLUS": [
          -1,
          380
        ],
        "'DASH": [
          -1,
          380
        ],
        "'TIMES": [
          -1,
          380
        ],
        "'SLASH": [
          -1,
          380
        ],
        "'PERCENT": [
          -1,
          380
        ],
        "'EQUALEQUAL": [
          -1,
          380
        ],
        "'NEQ": [
          -1,
          380
        ],
        "'LEQ": [
          -1,
          380
        ],
        "'GEQ": [
          -1,
          380
        ],
        "'AND": [
          -1,
          380
        ],
        "'OR": [
          -1,
          380
        ],
        "'BANG": [
          -1,
          380
        ],
        "'DOT": [
          -1,
          380
        ],
        "'LBRACK": [
          -1,
          380
        ],
        "'RBRACK": [
          -1,
          380
        ],
        "'NUMBER": [
          -1,
          380
        ],
        "'TRUE": [
          -1,
          380
        ],
        "'FALSE": [
          -1,
          380
        ],
        "'NULL": [
          -1,
          380
        ],
        "'PARENAFTERBRACE": [
          -1,
          380
        ],
        "'SIEVE": [
          -1,
          380
        ],
        "'USING": [
          -1,
          380
        ],
        "'BLOCK": [
          -1,
          380
        ],
        "'TABLE": [
          -1,
          380
        ],
        "'ASK": [
          -1,
          380
        ],
        "'NEW": [
          -1,
          380
        ]
      },
      {
        "'NAME": [
          358
        ]
      },
      {
        "map-for-expr_A1_I5*": [
          359
        ],
        "'RPAREN": [
          -1,
          382
        ],
        "'COMMA": [
          -1,
          382
        ]
      },
      {
        "'COLON": [
          360
        ]
      },
      {
        "'LBRACE": [
          361
        ],
        "'COMMA": [
          362
        ],
        "sieve-expr_I4": [
          363
        ]
      },
      {
        "table-expr_I5*": [
          364
        ],
        "'RBRACE": [
          -1,
          384
        ],
        "'ROW": [
          -1,
          384
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          170
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "table-header": [
          365
        ]
      },
      {
        "'SEMI": [
          -1,
          386
        ],
        "'COMMA": [
          -1,
          386
        ]
      },
      {
        "'SEMI": [
          -1,
          388
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          366
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          172
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "ask-branch": [
          367
        ],
        "ask-expr_A0_I4": [
          368
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          101
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          172
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "ask-branch": [
          369
        ],
        "otherwise-branch": [
          370
        ],
        "ask-expr_A1_I4": [
          371
        ],
        "'OTHERWISE": [
          372
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'COMMA": [
          373
        ],
        "new-expr_I3_I1": [
          374
        ],
        "'RPAREN": [
          -1,
          390
        ]
      },
      {
        "$": [
          -1,
          392
        ],
        "'NAME": [
          -1,
          392
        ],
        "'SEMI": [
          -1,
          392
        ],
        "'PARENNOSPACE": [
          -1,
          392
        ],
        "'STRING": [
          -1,
          392
        ],
        "'RPAREN": [
          -1,
          392
        ],
        "'LBRACE": [
          -1,
          392
        ],
        "'RBRACE": [
          -1,
          392
        ],
        "'SPY": [
          -1,
          392
        ],
        "'PARENSPACE": [
          -1,
          392
        ],
        "'COMMA": [
          -1,
          392
        ],
        "'INT": [
          -1,
          392
        ],
        "'LONG": [
          -1,
          392
        ],
        "'DOUBLE": [
          -1,
          392
        ],
        "'FLOAT": [
          -1,
          392
        ],
        "'BOOLEAN": [
          -1,
          392
        ],
        "'VOID": [
          -1,
          392
        ],
        "'LT": [
          -1,
          392
        ],
        "'GT": [
          -1,
          392
        ],
        "'THINARROW": [
          -1,
          392
        ],
        "'DATA": [
          -1,
          392
        ],
        "'IF": [
          -1,
          392
        ],
        "'FOR": [
          -1,
          392
        ],
        "'RETURN": [
          -1,
          392
        ],
        "'VAR": [
          -1,
          392
        ],
        "'REC": [
          -1,
          392
        ],
        "'ATCHECK": [
          -1,
          392
        ],
        "'ASSERTEQUALS": [
          -1,
          392
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          392
        ],
        "'ASSERTTRUE": [
          -1,
          392
        ],
        "'ASSERTFALSE": [
          -1,
          392
        ],
        "'ASSERTSATISFIES": [
          -1,
          392
        ],
        "'ASSERTRAISES": [
          -1,
          392
        ],
        "'IS": [
          -1,
          392
        ],
        "'ISNOT": [
          -1,
          392
        ],
        "'SATISFIES": [
          -1,
          392
        ],
        "'RAISES": [
          -1,
          392
        ],
        "'SWITCH": [
          -1,
          392
        ],
        "'CASE": [
          -1,
          392
        ],
        "'DEFAULT": [
          -1,
          392
        ],
        "'YIELD": [
          -1,
          392
        ],
        "'PLUS": [
          -1,
          392
        ],
        "'DASH": [
          -1,
          392
        ],
        "'TIMES": [
          -1,
          392
        ],
        "'SLASH": [
          -1,
          392
        ],
        "'PERCENT": [
          -1,
          392
        ],
        "'EQUALEQUAL": [
          -1,
          392
        ],
        "'NEQ": [
          -1,
          392
        ],
        "'LEQ": [
          -1,
          392
        ],
        "'GEQ": [
          -1,
          392
        ],
        "'AND": [
          -1,
          392
        ],
        "'OR": [
          -1,
          392
        ],
        "'BANG": [
          -1,
          392
        ],
        "'DOT": [
          -1,
          392
        ],
        "'LBRACK": [
          -1,
          392
        ],
        "'RBRACK": [
          -1,
          392
        ],
        "'NUMBER": [
          -1,
          392
        ],
        "'TRUE": [
          -1,
          392
        ],
        "'FALSE": [
          -1,
          392
        ],
        "'NULL": [
          -1,
          392
        ],
        "'PARENAFTERBRACE": [
          -1,
          392
        ],
        "'SIEVE": [
          -1,
          392
        ],
        "'USING": [
          -1,
          392
        ],
        "'BLOCK": [
          -1,
          392
        ],
        "'TABLE": [
          -1,
          392
        ],
        "'ASK": [
          -1,
          392
        ],
        "'NEW": [
          -1,
          392
        ]
      },
      {
        "$": [
          -1,
          394
        ],
        "'IMPORT": [
          -1,
          394
        ],
        "'NAME": [
          -1,
          394
        ],
        "'PARENNOSPACE": [
          -1,
          394
        ],
        "'STRING": [
          -1,
          394
        ],
        "'INCLUDE": [
          -1,
          394
        ],
        "'LBRACE": [
          -1,
          394
        ],
        "'PARENSPACE": [
          -1,
          394
        ],
        "'INT": [
          -1,
          394
        ],
        "'LONG": [
          -1,
          394
        ],
        "'DOUBLE": [
          -1,
          394
        ],
        "'FLOAT": [
          -1,
          394
        ],
        "'BOOLEAN": [
          -1,
          394
        ],
        "'VOID": [
          -1,
          394
        ],
        "'DATA": [
          -1,
          394
        ],
        "'VAR": [
          -1,
          394
        ],
        "'REC": [
          -1,
          394
        ],
        "'ATCHECK": [
          -1,
          394
        ],
        "'SWITCH": [
          -1,
          394
        ],
        "'DASH": [
          -1,
          394
        ],
        "'BANG": [
          -1,
          394
        ],
        "'LBRACK": [
          -1,
          394
        ],
        "'NUMBER": [
          -1,
          394
        ],
        "'TRUE": [
          -1,
          394
        ],
        "'FALSE": [
          -1,
          394
        ],
        "'NULL": [
          -1,
          394
        ],
        "'PARENAFTERBRACE": [
          -1,
          394
        ],
        "'SIEVE": [
          -1,
          394
        ],
        "'BLOCK": [
          -1,
          394
        ],
        "'TABLE": [
          -1,
          394
        ],
        "'ASK": [
          -1,
          394
        ],
        "'NEW": [
          -1,
          394
        ]
      },
      {
        "'NAME": [
          375
        ]
      },
      {
        "$": [
          -1,
          396
        ],
        "'IMPORT": [
          -1,
          396
        ],
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
        "'INCLUDE": [
          -1,
          396
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          396
        ],
        "'REC": [
          -1,
          396
        ],
        "'ATCHECK": [
          -1,
          396
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          396
        ],
        "'BLOCK": [
          -1,
          396
        ],
        "'TABLE": [
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
          -1,
          398
        ],
        "'GT": [
          -1,
          398
        ]
      },
      {
        "fun-decl_I6?": [
          376
        ],
        "fun-decl_I6": [
          377
        ],
        "where-clause": [
          378
        ],
        "'WHERE": [
          379
        ],
        "$": [
          -1,
          400,
          402
        ],
        "'NAME": [
          -1,
          400,
          402
        ],
        "'PARENNOSPACE": [
          -1,
          400,
          402
        ],
        "'STRING": [
          -1,
          400,
          402
        ],
        "'LBRACE": [
          -1,
          400,
          402
        ],
        "'RBRACE": [
          -1,
          400,
          402
        ],
        "'SPY": [
          -1,
          400,
          402
        ],
        "'PARENSPACE": [
          -1,
          400,
          402
        ],
        "'INT": [
          -1,
          400,
          402
        ],
        "'LONG": [
          -1,
          400,
          402
        ],
        "'DOUBLE": [
          -1,
          400,
          402
        ],
        "'FLOAT": [
          -1,
          400,
          402
        ],
        "'BOOLEAN": [
          -1,
          400,
          402
        ],
        "'VOID": [
          -1,
          400,
          402
        ],
        "'DATA": [
          -1,
          400,
          402
        ],
        "'IF": [
          -1,
          400,
          402
        ],
        "'FOR": [
          -1,
          400,
          402
        ],
        "'RETURN": [
          -1,
          400,
          402
        ],
        "'VAR": [
          -1,
          400,
          402
        ],
        "'REC": [
          -1,
          400,
          402
        ],
        "'ATCHECK": [
          -1,
          400,
          402
        ],
        "'ASSERTEQUALS": [
          -1,
          400,
          402
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          400,
          402
        ],
        "'ASSERTTRUE": [
          -1,
          400,
          402
        ],
        "'ASSERTFALSE": [
          -1,
          400,
          402
        ],
        "'ASSERTSATISFIES": [
          -1,
          400,
          402
        ],
        "'ASSERTRAISES": [
          -1,
          400,
          402
        ],
        "'SWITCH": [
          -1,
          400,
          402
        ],
        "'YIELD": [
          -1,
          400,
          402
        ],
        "'DASH": [
          -1,
          400,
          402
        ],
        "'BANG": [
          -1,
          400,
          402
        ],
        "'LBRACK": [
          -1,
          400,
          402
        ],
        "'NUMBER": [
          -1,
          400,
          402
        ],
        "'TRUE": [
          -1,
          400,
          402
        ],
        "'FALSE": [
          -1,
          400,
          402
        ],
        "'NULL": [
          -1,
          400,
          402
        ],
        "'PARENAFTERBRACE": [
          -1,
          400,
          402
        ],
        "'SIEVE": [
          -1,
          400,
          402
        ],
        "'BLOCK": [
          -1,
          400,
          402
        ],
        "'TABLE": [
          -1,
          400,
          402
        ],
        "'ASK": [
          -1,
          400,
          402
        ],
        "'NEW": [
          -1,
          400,
          402
        ]
      },
      {
        "block_I1*": [
          380
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          404
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          404
        ],
        "'BLOCK": [
          -1,
          404
        ],
        "'TABLE": [
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
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          196
        ],
        "param": [
          381
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'RPAREN": [
          -1,
          406
        ],
        "'COMMA": [
          -1,
          406
        ]
      },
      {
        "'NAME": [
          382
        ]
      },
      {
        "'RPAREN": [
          383
        ]
      },
      {
        "'RPAREN": [
          -1,
          408
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          384
        ],
        "'RPAREN": [
          -1,
          410,
          412
        ],
        "'COMMA": [
          -1,
          412
        ]
      },
      {
        "'NAME": [
          201
        ],
        "variant-decl": [
          385
        ],
        "'RBRACE": [
          -1,
          414
        ]
      },
      {
        "'RBRACE": [
          386
        ]
      },
      {
        "'SEMI": [
          -1,
          416
        ],
        "'RBRACE": [
          -1,
          416
        ]
      },
      {
        "'RBRACE": [
          -1,
          418
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          420
        ],
        "'BLOCK": [
          -1,
          420
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          422
        ],
        "'BLOCK": [
          -1,
          422
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          424
        ],
        "'BLOCK": [
          -1,
          424
        ],
        "'TABLE": [
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
        "$": [
          -1,
          426
        ],
        "'NAME": [
          -1,
          426
        ],
        "'PARENNOSPACE": [
          -1,
          426
        ],
        "'STRING": [
          -1,
          426
        ],
        "'LBRACE": [
          -1,
          426
        ],
        "'RBRACE": [
          -1,
          426
        ],
        "'SPY": [
          -1,
          426
        ],
        "'PARENSPACE": [
          -1,
          426
        ],
        "'INT": [
          -1,
          426
        ],
        "'LONG": [
          -1,
          426
        ],
        "'DOUBLE": [
          -1,
          426
        ],
        "'FLOAT": [
          -1,
          426
        ],
        "'BOOLEAN": [
          -1,
          426
        ],
        "'VOID": [
          -1,
          426
        ],
        "'DATA": [
          -1,
          426
        ],
        "'IF": [
          -1,
          426
        ],
        "'FOR": [
          -1,
          426
        ],
        "'RETURN": [
          -1,
          426
        ],
        "'VAR": [
          -1,
          426
        ],
        "'REC": [
          -1,
          426
        ],
        "'ATCHECK": [
          -1,
          426
        ],
        "'ASSERTEQUALS": [
          -1,
          426
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          426
        ],
        "'ASSERTTRUE": [
          -1,
          426
        ],
        "'ASSERTFALSE": [
          -1,
          426
        ],
        "'ASSERTSATISFIES": [
          -1,
          426
        ],
        "'ASSERTRAISES": [
          -1,
          426
        ],
        "'SWITCH": [
          -1,
          426
        ],
        "'YIELD": [
          -1,
          426
        ],
        "'DASH": [
          -1,
          426
        ],
        "'BANG": [
          -1,
          426
        ],
        "'LBRACK": [
          -1,
          426
        ],
        "'NUMBER": [
          -1,
          426
        ],
        "'TRUE": [
          -1,
          426
        ],
        "'FALSE": [
          -1,
          426
        ],
        "'NULL": [
          -1,
          426
        ],
        "'PARENAFTERBRACE": [
          -1,
          426
        ],
        "'SIEVE": [
          -1,
          426
        ],
        "'BLOCK": [
          -1,
          426
        ],
        "'TABLE": [
          -1,
          426
        ],
        "'ASK": [
          -1,
          426
        ],
        "'NEW": [
          -1,
          426
        ]
      },
      {
        "$": [
          -1,
          428
        ],
        "'NAME": [
          -1,
          428
        ],
        "'PARENNOSPACE": [
          -1,
          428
        ],
        "'STRING": [
          -1,
          428
        ],
        "'LBRACE": [
          -1,
          428
        ],
        "'RBRACE": [
          -1,
          428
        ],
        "'SPY": [
          -1,
          428
        ],
        "'PARENSPACE": [
          -1,
          428
        ],
        "'INT": [
          -1,
          428
        ],
        "'LONG": [
          -1,
          428
        ],
        "'DOUBLE": [
          -1,
          428
        ],
        "'FLOAT": [
          -1,
          428
        ],
        "'BOOLEAN": [
          -1,
          428
        ],
        "'VOID": [
          -1,
          428
        ],
        "'DATA": [
          -1,
          428
        ],
        "'IF": [
          -1,
          428
        ],
        "'FOR": [
          -1,
          428
        ],
        "'RETURN": [
          -1,
          428
        ],
        "'VAR": [
          -1,
          428
        ],
        "'REC": [
          -1,
          428
        ],
        "'ATCHECK": [
          -1,
          428
        ],
        "'ASSERTEQUALS": [
          -1,
          428
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          428
        ],
        "'ASSERTTRUE": [
          -1,
          428
        ],
        "'ASSERTFALSE": [
          -1,
          428
        ],
        "'ASSERTSATISFIES": [
          -1,
          428
        ],
        "'ASSERTRAISES": [
          -1,
          428
        ],
        "'SWITCH": [
          -1,
          428
        ],
        "'YIELD": [
          -1,
          428
        ],
        "'DASH": [
          -1,
          428
        ],
        "'BANG": [
          -1,
          428
        ],
        "'LBRACK": [
          -1,
          428
        ],
        "'NUMBER": [
          -1,
          428
        ],
        "'TRUE": [
          -1,
          428
        ],
        "'FALSE": [
          -1,
          428
        ],
        "'NULL": [
          -1,
          428
        ],
        "'PARENAFTERBRACE": [
          -1,
          428
        ],
        "'SIEVE": [
          -1,
          428
        ],
        "'BLOCK": [
          -1,
          428
        ],
        "'TABLE": [
          -1,
          428
        ],
        "'ASK": [
          -1,
          428
        ],
        "'NEW": [
          -1,
          428
        ]
      },
      {
        "$": [
          -1,
          430
        ],
        "'NAME": [
          -1,
          430
        ],
        "'PARENNOSPACE": [
          -1,
          430
        ],
        "'STRING": [
          -1,
          430
        ],
        "'LBRACE": [
          -1,
          430
        ],
        "'RBRACE": [
          -1,
          430
        ],
        "'SPY": [
          -1,
          430
        ],
        "'PARENSPACE": [
          -1,
          430
        ],
        "'INT": [
          -1,
          430
        ],
        "'LONG": [
          -1,
          430
        ],
        "'DOUBLE": [
          -1,
          430
        ],
        "'FLOAT": [
          -1,
          430
        ],
        "'BOOLEAN": [
          -1,
          430
        ],
        "'VOID": [
          -1,
          430
        ],
        "'DATA": [
          -1,
          430
        ],
        "'IF": [
          -1,
          430
        ],
        "'FOR": [
          -1,
          430
        ],
        "'RETURN": [
          -1,
          430
        ],
        "'VAR": [
          -1,
          430
        ],
        "'REC": [
          -1,
          430
        ],
        "'ATCHECK": [
          -1,
          430
        ],
        "'ASSERTEQUALS": [
          -1,
          430
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          430
        ],
        "'ASSERTTRUE": [
          -1,
          430
        ],
        "'ASSERTFALSE": [
          -1,
          430
        ],
        "'ASSERTSATISFIES": [
          -1,
          430
        ],
        "'ASSERTRAISES": [
          -1,
          430
        ],
        "'SWITCH": [
          -1,
          430
        ],
        "'YIELD": [
          -1,
          430
        ],
        "'DASH": [
          -1,
          430
        ],
        "'BANG": [
          -1,
          430
        ],
        "'LBRACK": [
          -1,
          430
        ],
        "'NUMBER": [
          -1,
          430
        ],
        "'TRUE": [
          -1,
          430
        ],
        "'FALSE": [
          -1,
          430
        ],
        "'NULL": [
          -1,
          430
        ],
        "'PARENAFTERBRACE": [
          -1,
          430
        ],
        "'SIEVE": [
          -1,
          430
        ],
        "'BLOCK": [
          -1,
          430
        ],
        "'TABLE": [
          -1,
          430
        ],
        "'ASK": [
          -1,
          430
        ],
        "'NEW": [
          -1,
          430
        ]
      },
      {
        "spy-stmt_I3*": [
          387
        ],
        "'RPAREN": [
          -1,
          432
        ],
        "'COMMA": [
          -1,
          432
        ]
      },
      {
        "'RPAREN": [
          388
        ]
      },
      {
        "'SEMI": [
          389
        ],
        "assert-stmt_A6_I3?": [
          390
        ],
        "assert-stmt_A6_I3": [
          391
        ],
        "'NAME": [
          -1,
          434,
          436
        ],
        "'PARENNOSPACE": [
          -1,
          434,
          436
        ],
        "'STRING": [
          -1,
          434,
          436
        ],
        "'LBRACE": [
          -1,
          434,
          436
        ],
        "'RBRACE": [
          -1,
          434,
          436
        ],
        "'SPY": [
          -1,
          434,
          436
        ],
        "'PARENSPACE": [
          -1,
          434,
          436
        ],
        "'INT": [
          -1,
          434,
          436
        ],
        "'LONG": [
          -1,
          434,
          436
        ],
        "'DOUBLE": [
          -1,
          434,
          436
        ],
        "'FLOAT": [
          -1,
          434,
          436
        ],
        "'BOOLEAN": [
          -1,
          434,
          436
        ],
        "'VOID": [
          -1,
          434,
          436
        ],
        "'DATA": [
          -1,
          434,
          436
        ],
        "'IF": [
          -1,
          434,
          436
        ],
        "'FOR": [
          -1,
          434,
          436
        ],
        "'RETURN": [
          -1,
          434,
          436
        ],
        "'VAR": [
          -1,
          434,
          436
        ],
        "'REC": [
          -1,
          434,
          436
        ],
        "'ATCHECK": [
          -1,
          434,
          436
        ],
        "'ASSERTEQUALS": [
          -1,
          434,
          436
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          434,
          436
        ],
        "'ASSERTTRUE": [
          -1,
          434,
          436
        ],
        "'ASSERTFALSE": [
          -1,
          434,
          436
        ],
        "'ASSERTSATISFIES": [
          -1,
          434,
          436
        ],
        "'ASSERTRAISES": [
          -1,
          434,
          436
        ],
        "'SWITCH": [
          -1,
          434,
          436
        ],
        "'YIELD": [
          -1,
          434,
          436
        ],
        "'DASH": [
          -1,
          434,
          436
        ],
        "'BANG": [
          -1,
          434,
          436
        ],
        "'LBRACK": [
          -1,
          434,
          436
        ],
        "'NUMBER": [
          -1,
          434,
          436
        ],
        "'TRUE": [
          -1,
          434,
          436
        ],
        "'FALSE": [
          -1,
          434,
          436
        ],
        "'NULL": [
          -1,
          434,
          436
        ],
        "'PARENAFTERBRACE": [
          -1,
          434,
          436
        ],
        "'SIEVE": [
          -1,
          434,
          436
        ],
        "'BLOCK": [
          -1,
          434,
          436
        ],
        "'TABLE": [
          -1,
          434,
          436
        ],
        "'ASK": [
          -1,
          434,
          436
        ],
        "'NEW": [
          -1,
          434,
          436
        ]
      },
      {
        "'SEMI": [
          392
        ],
        "assert-stmt_A7_I3?": [
          393
        ],
        "assert-stmt_A7_I3": [
          394
        ],
        "'NAME": [
          -1,
          438,
          440
        ],
        "'PARENNOSPACE": [
          -1,
          438,
          440
        ],
        "'STRING": [
          -1,
          438,
          440
        ],
        "'LBRACE": [
          -1,
          438,
          440
        ],
        "'RBRACE": [
          -1,
          438,
          440
        ],
        "'SPY": [
          -1,
          438,
          440
        ],
        "'PARENSPACE": [
          -1,
          438,
          440
        ],
        "'INT": [
          -1,
          438,
          440
        ],
        "'LONG": [
          -1,
          438,
          440
        ],
        "'DOUBLE": [
          -1,
          438,
          440
        ],
        "'FLOAT": [
          -1,
          438,
          440
        ],
        "'BOOLEAN": [
          -1,
          438,
          440
        ],
        "'VOID": [
          -1,
          438,
          440
        ],
        "'DATA": [
          -1,
          438,
          440
        ],
        "'IF": [
          -1,
          438,
          440
        ],
        "'FOR": [
          -1,
          438,
          440
        ],
        "'RETURN": [
          -1,
          438,
          440
        ],
        "'VAR": [
          -1,
          438,
          440
        ],
        "'REC": [
          -1,
          438,
          440
        ],
        "'ATCHECK": [
          -1,
          438,
          440
        ],
        "'ASSERTEQUALS": [
          -1,
          438,
          440
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          438,
          440
        ],
        "'ASSERTTRUE": [
          -1,
          438,
          440
        ],
        "'ASSERTFALSE": [
          -1,
          438,
          440
        ],
        "'ASSERTSATISFIES": [
          -1,
          438,
          440
        ],
        "'ASSERTRAISES": [
          -1,
          438,
          440
        ],
        "'SWITCH": [
          -1,
          438,
          440
        ],
        "'YIELD": [
          -1,
          438,
          440
        ],
        "'DASH": [
          -1,
          438,
          440
        ],
        "'BANG": [
          -1,
          438,
          440
        ],
        "'LBRACK": [
          -1,
          438,
          440
        ],
        "'NUMBER": [
          -1,
          438,
          440
        ],
        "'TRUE": [
          -1,
          438,
          440
        ],
        "'FALSE": [
          -1,
          438,
          440
        ],
        "'NULL": [
          -1,
          438,
          440
        ],
        "'PARENAFTERBRACE": [
          -1,
          438,
          440
        ],
        "'SIEVE": [
          -1,
          438,
          440
        ],
        "'BLOCK": [
          -1,
          438,
          440
        ],
        "'TABLE": [
          -1,
          438,
          440
        ],
        "'ASK": [
          -1,
          438,
          440
        ],
        "'NEW": [
          -1,
          438,
          440
        ]
      },
      {
        "'SEMI": [
          395
        ],
        "assert-stmt_A8_I3?": [
          396
        ],
        "assert-stmt_A8_I3": [
          397
        ],
        "'NAME": [
          -1,
          442,
          444
        ],
        "'PARENNOSPACE": [
          -1,
          442,
          444
        ],
        "'STRING": [
          -1,
          442,
          444
        ],
        "'LBRACE": [
          -1,
          442,
          444
        ],
        "'RBRACE": [
          -1,
          442,
          444
        ],
        "'SPY": [
          -1,
          442,
          444
        ],
        "'PARENSPACE": [
          -1,
          442,
          444
        ],
        "'INT": [
          -1,
          442,
          444
        ],
        "'LONG": [
          -1,
          442,
          444
        ],
        "'DOUBLE": [
          -1,
          442,
          444
        ],
        "'FLOAT": [
          -1,
          442,
          444
        ],
        "'BOOLEAN": [
          -1,
          442,
          444
        ],
        "'VOID": [
          -1,
          442,
          444
        ],
        "'DATA": [
          -1,
          442,
          444
        ],
        "'IF": [
          -1,
          442,
          444
        ],
        "'FOR": [
          -1,
          442,
          444
        ],
        "'RETURN": [
          -1,
          442,
          444
        ],
        "'VAR": [
          -1,
          442,
          444
        ],
        "'REC": [
          -1,
          442,
          444
        ],
        "'ATCHECK": [
          -1,
          442,
          444
        ],
        "'ASSERTEQUALS": [
          -1,
          442,
          444
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          442,
          444
        ],
        "'ASSERTTRUE": [
          -1,
          442,
          444
        ],
        "'ASSERTFALSE": [
          -1,
          442,
          444
        ],
        "'ASSERTSATISFIES": [
          -1,
          442,
          444
        ],
        "'ASSERTRAISES": [
          -1,
          442,
          444
        ],
        "'SWITCH": [
          -1,
          442,
          444
        ],
        "'YIELD": [
          -1,
          442,
          444
        ],
        "'DASH": [
          -1,
          442,
          444
        ],
        "'BANG": [
          -1,
          442,
          444
        ],
        "'LBRACK": [
          -1,
          442,
          444
        ],
        "'NUMBER": [
          -1,
          442,
          444
        ],
        "'TRUE": [
          -1,
          442,
          444
        ],
        "'FALSE": [
          -1,
          442,
          444
        ],
        "'NULL": [
          -1,
          442,
          444
        ],
        "'PARENAFTERBRACE": [
          -1,
          442,
          444
        ],
        "'SIEVE": [
          -1,
          442,
          444
        ],
        "'BLOCK": [
          -1,
          442,
          444
        ],
        "'TABLE": [
          -1,
          442,
          444
        ],
        "'ASK": [
          -1,
          442,
          444
        ],
        "'NEW": [
          -1,
          442,
          444
        ]
      },
      {
        "'SEMI": [
          398
        ],
        "assert-stmt_A9_I3?": [
          399
        ],
        "assert-stmt_A9_I3": [
          400
        ],
        "'NAME": [
          -1,
          446,
          448
        ],
        "'PARENNOSPACE": [
          -1,
          446,
          448
        ],
        "'STRING": [
          -1,
          446,
          448
        ],
        "'LBRACE": [
          -1,
          446,
          448
        ],
        "'RBRACE": [
          -1,
          446,
          448
        ],
        "'SPY": [
          -1,
          446,
          448
        ],
        "'PARENSPACE": [
          -1,
          446,
          448
        ],
        "'INT": [
          -1,
          446,
          448
        ],
        "'LONG": [
          -1,
          446,
          448
        ],
        "'DOUBLE": [
          -1,
          446,
          448
        ],
        "'FLOAT": [
          -1,
          446,
          448
        ],
        "'BOOLEAN": [
          -1,
          446,
          448
        ],
        "'VOID": [
          -1,
          446,
          448
        ],
        "'DATA": [
          -1,
          446,
          448
        ],
        "'IF": [
          -1,
          446,
          448
        ],
        "'FOR": [
          -1,
          446,
          448
        ],
        "'RETURN": [
          -1,
          446,
          448
        ],
        "'VAR": [
          -1,
          446,
          448
        ],
        "'REC": [
          -1,
          446,
          448
        ],
        "'ATCHECK": [
          -1,
          446,
          448
        ],
        "'ASSERTEQUALS": [
          -1,
          446,
          448
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          446,
          448
        ],
        "'ASSERTTRUE": [
          -1,
          446,
          448
        ],
        "'ASSERTFALSE": [
          -1,
          446,
          448
        ],
        "'ASSERTSATISFIES": [
          -1,
          446,
          448
        ],
        "'ASSERTRAISES": [
          -1,
          446,
          448
        ],
        "'SWITCH": [
          -1,
          446,
          448
        ],
        "'YIELD": [
          -1,
          446,
          448
        ],
        "'DASH": [
          -1,
          446,
          448
        ],
        "'BANG": [
          -1,
          446,
          448
        ],
        "'LBRACK": [
          -1,
          446,
          448
        ],
        "'NUMBER": [
          -1,
          446,
          448
        ],
        "'TRUE": [
          -1,
          446,
          448
        ],
        "'FALSE": [
          -1,
          446,
          448
        ],
        "'NULL": [
          -1,
          446,
          448
        ],
        "'PARENAFTERBRACE": [
          -1,
          446,
          448
        ],
        "'SIEVE": [
          -1,
          446,
          448
        ],
        "'BLOCK": [
          -1,
          446,
          448
        ],
        "'TABLE": [
          -1,
          446,
          448
        ],
        "'ASK": [
          -1,
          446,
          448
        ],
        "'NEW": [
          -1,
          446,
          448
        ]
      },
      {
        "'NAME": [
          401
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          450
        ],
        "'BLOCK": [
          -1,
          450
        ],
        "'TABLE": [
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
        "'COMMA": [
          402
        ]
      },
      {
        "'COMMA": [
          403
        ]
      },
      {
        "'RPAREN": [
          404
        ]
      },
      {
        "'RPAREN": [
          405
        ]
      },
      {
        "'COMMA": [
          406
        ]
      },
      {
        "'COMMA": [
          407
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
        "'LBRACE": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          452
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          452
        ],
        "'BLOCK": [
          -1,
          452
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          454
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          454
        ],
        "'BLOCK": [
          -1,
          454
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          456
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          456
        ],
        "'BLOCK": [
          -1,
          456
        ],
        "'TABLE": [
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
        "check-block_A0_I6*": [
          408
        ],
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          458
        ],
        "'BLOCK": [
          -1,
          458
        ],
        "'TABLE": [
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
        "switch-expr_I6?": [
          409
        ],
        "switch-expr_I5": [
          410
        ],
        "case-branch": [
          411
        ],
        "switch-expr_I6": [
          412
        ],
        "default-branch": [
          413
        ],
        "'CASE": [
          414
        ],
        "'DEFAULT": [
          415
        ],
        "'RBRACE": [
          -1,
          460
        ]
      },
      {
        "'RPAREN": [
          -1,
          462
        ],
        "'COMMA": [
          -1,
          462
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          416
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'COMMA": [
          -1,
          464
        ],
        "'RBRACK": [
          -1,
          464
        ]
      },
      {
        "'COLON": [
          417
        ],
        "'EQUALS": [
          418
        ]
      },
      {
        "'RPAREN": [
          419
        ],
        "'COMMA": [
          420
        ],
        "map-for-expr_A1_I5": [
          421
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          422
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "sieve-expr_I6*": [
          423
        ],
        "'NAME": [
          -1,
          466
        ],
        "'PARENNOSPACE": [
          -1,
          466
        ],
        "'STRING": [
          -1,
          466
        ],
        "'LBRACE": [
          -1,
          466
        ],
        "'RBRACE": [
          -1,
          466
        ],
        "'SPY": [
          -1,
          466
        ],
        "'PARENSPACE": [
          -1,
          466
        ],
        "'INT": [
          -1,
          466
        ],
        "'LONG": [
          -1,
          466
        ],
        "'DOUBLE": [
          -1,
          466
        ],
        "'FLOAT": [
          -1,
          466
        ],
        "'BOOLEAN": [
          -1,
          466
        ],
        "'VOID": [
          -1,
          466
        ],
        "'DATA": [
          -1,
          466
        ],
        "'IF": [
          -1,
          466
        ],
        "'FOR": [
          -1,
          466
        ],
        "'RETURN": [
          -1,
          466
        ],
        "'VAR": [
          -1,
          466
        ],
        "'REC": [
          -1,
          466
        ],
        "'ATCHECK": [
          -1,
          466
        ],
        "'SWITCH": [
          -1,
          466
        ],
        "'YIELD": [
          -1,
          466
        ],
        "'DASH": [
          -1,
          466
        ],
        "'BANG": [
          -1,
          466
        ],
        "'LBRACK": [
          -1,
          466
        ],
        "'NUMBER": [
          -1,
          466
        ],
        "'TRUE": [
          -1,
          466
        ],
        "'FALSE": [
          -1,
          466
        ],
        "'NULL": [
          -1,
          466
        ],
        "'PARENAFTERBRACE": [
          -1,
          466
        ],
        "'SIEVE": [
          -1,
          466
        ],
        "'BLOCK": [
          -1,
          466
        ],
        "'TABLE": [
          -1,
          466
        ],
        "'ASK": [
          -1,
          466
        ],
        "'NEW": [
          -1,
          466
        ]
      },
      {
        "'NAME": [
          424
        ]
      },
      {
        "'LBRACE": [
          -1,
          468
        ],
        "'COMMA": [
          -1,
          468
        ]
      },
      {
        "'RBRACE": [
          425
        ],
        "table-expr_I5": [
          426
        ],
        "table-row": [
          427
        ],
        "'ROW": [
          428
        ]
      },
      {
        "'SEMI": [
          -1,
          470
        ],
        "'COMMA": [
          -1,
          470
        ]
      },
      {
        "$": [
          -1,
          472
        ],
        "'NAME": [
          -1,
          472
        ],
        "'SEMI": [
          -1,
          472
        ],
        "'PARENNOSPACE": [
          -1,
          472
        ],
        "'STRING": [
          -1,
          472
        ],
        "'RPAREN": [
          -1,
          472
        ],
        "'LBRACE": [
          -1,
          472
        ],
        "'RBRACE": [
          -1,
          472
        ],
        "'SPY": [
          -1,
          472
        ],
        "'PARENSPACE": [
          -1,
          472
        ],
        "'COMMA": [
          -1,
          472
        ],
        "'INT": [
          -1,
          472
        ],
        "'LONG": [
          -1,
          472
        ],
        "'DOUBLE": [
          -1,
          472
        ],
        "'FLOAT": [
          -1,
          472
        ],
        "'BOOLEAN": [
          -1,
          472
        ],
        "'VOID": [
          -1,
          472
        ],
        "'LT": [
          -1,
          472
        ],
        "'GT": [
          -1,
          472
        ],
        "'THINARROW": [
          -1,
          472
        ],
        "'DATA": [
          -1,
          472
        ],
        "'IF": [
          -1,
          472
        ],
        "'FOR": [
          -1,
          472
        ],
        "'RETURN": [
          -1,
          472
        ],
        "'VAR": [
          -1,
          472
        ],
        "'REC": [
          -1,
          472
        ],
        "'ATCHECK": [
          -1,
          472
        ],
        "'ASSERTEQUALS": [
          -1,
          472
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          472
        ],
        "'ASSERTTRUE": [
          -1,
          472
        ],
        "'ASSERTFALSE": [
          -1,
          472
        ],
        "'ASSERTSATISFIES": [
          -1,
          472
        ],
        "'ASSERTRAISES": [
          -1,
          472
        ],
        "'IS": [
          -1,
          472
        ],
        "'ISNOT": [
          -1,
          472
        ],
        "'SATISFIES": [
          -1,
          472
        ],
        "'RAISES": [
          -1,
          472
        ],
        "'SWITCH": [
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
        ],
        "'YIELD": [
          -1,
          472
        ],
        "'PLUS": [
          -1,
          472
        ],
        "'DASH": [
          -1,
          472
        ],
        "'TIMES": [
          -1,
          472
        ],
        "'SLASH": [
          -1,
          472
        ],
        "'PERCENT": [
          -1,
          472
        ],
        "'EQUALEQUAL": [
          -1,
          472
        ],
        "'NEQ": [
          -1,
          472
        ],
        "'LEQ": [
          -1,
          472
        ],
        "'GEQ": [
          -1,
          472
        ],
        "'AND": [
          -1,
          472
        ],
        "'OR": [
          -1,
          472
        ],
        "'BANG": [
          -1,
          472
        ],
        "'DOT": [
          -1,
          472
        ],
        "'LBRACK": [
          -1,
          472
        ],
        "'RBRACK": [
          -1,
          472
        ],
        "'NUMBER": [
          -1,
          472
        ],
        "'TRUE": [
          -1,
          472
        ],
        "'FALSE": [
          -1,
          472
        ],
        "'NULL": [
          -1,
          472
        ],
        "'PARENAFTERBRACE": [
          -1,
          472
        ],
        "'SIEVE": [
          -1,
          472
        ],
        "'USING": [
          -1,
          472
        ],
        "'BLOCK": [
          -1,
          472
        ],
        "'TABLE": [
          -1,
          472
        ],
        "'ASK": [
          -1,
          472
        ],
        "'NEW": [
          -1,
          472
        ]
      },
      {
        "'SEMI": [
          429
        ]
      },
      {
        "'NAME": [
          -1,
          474
        ],
        "'STRING": [
          -1,
          474
        ],
        "'LBRACE": [
          -1,
          474
        ],
        "'RBRACE": [
          -1,
          474
        ],
        "'PARENSPACE": [
          -1,
          474
        ],
        "'SWITCH": [
          -1,
          474
        ],
        "'DASH": [
          -1,
          474
        ],
        "'BANG": [
          -1,
          474
        ],
        "'LBRACK": [
          -1,
          474
        ],
        "'NUMBER": [
          -1,
          474
        ],
        "'TRUE": [
          -1,
          474
        ],
        "'FALSE": [
          -1,
          474
        ],
        "'NULL": [
          -1,
          474
        ],
        "'PARENAFTERBRACE": [
          -1,
          474
        ],
        "'SIEVE": [
          -1,
          474
        ],
        "'BLOCK": [
          -1,
          474
        ],
        "'TABLE": [
          -1,
          474
        ],
        "'ASK": [
          -1,
          474
        ],
        "'NEW": [
          -1,
          474
        ]
      },
      {
        "'SEMI": [
          430
        ]
      },
      {
        "'SEMI": [
          431
        ]
      },
      {
        "'NAME": [
          -1,
          476
        ],
        "'STRING": [
          -1,
          476
        ],
        "'LBRACE": [
          -1,
          476
        ],
        "'PARENSPACE": [
          -1,
          476
        ],
        "'SWITCH": [
          -1,
          476
        ],
        "'DASH": [
          -1,
          476
        ],
        "'BANG": [
          -1,
          476
        ],
        "'LBRACK": [
          -1,
          476
        ],
        "'NUMBER": [
          -1,
          476
        ],
        "'TRUE": [
          -1,
          476
        ],
        "'FALSE": [
          -1,
          476
        ],
        "'NULL": [
          -1,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          476
        ],
        "'SIEVE": [
          -1,
          476
        ],
        "'BLOCK": [
          -1,
          476
        ],
        "'TABLE": [
          -1,
          476
        ],
        "'ASK": [
          -1,
          476
        ],
        "'OTHERWISE": [
          -1,
          476
        ],
        "'NEW": [
          -1,
          476
        ]
      },
      {
        "'THINARROW": [
          432
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          433
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          -1,
          478
        ],
        "'COMMA": [
          -1,
          478
        ]
      },
      {
        "'SEMI": [
          434
        ]
      },
      {
        "$": [
          -1,
          480
        ],
        "'NAME": [
          -1,
          480
        ],
        "'PARENNOSPACE": [
          -1,
          480
        ],
        "'STRING": [
          -1,
          480
        ],
        "'LBRACE": [
          -1,
          480
        ],
        "'RBRACE": [
          -1,
          480
        ],
        "'SPY": [
          -1,
          480
        ],
        "'PARENSPACE": [
          -1,
          480
        ],
        "'INT": [
          -1,
          480
        ],
        "'LONG": [
          -1,
          480
        ],
        "'DOUBLE": [
          -1,
          480
        ],
        "'FLOAT": [
          -1,
          480
        ],
        "'BOOLEAN": [
          -1,
          480
        ],
        "'VOID": [
          -1,
          480
        ],
        "'DATA": [
          -1,
          480
        ],
        "'IF": [
          -1,
          480
        ],
        "'FOR": [
          -1,
          480
        ],
        "'RETURN": [
          -1,
          480
        ],
        "'VAR": [
          -1,
          480
        ],
        "'REC": [
          -1,
          480
        ],
        "'ATCHECK": [
          -1,
          480
        ],
        "'ASSERTEQUALS": [
          -1,
          480
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          480
        ],
        "'ASSERTTRUE": [
          -1,
          480
        ],
        "'ASSERTFALSE": [
          -1,
          480
        ],
        "'ASSERTSATISFIES": [
          -1,
          480
        ],
        "'ASSERTRAISES": [
          -1,
          480
        ],
        "'SWITCH": [
          -1,
          480
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          480
        ],
        "'BLOCK": [
          -1,
          480
        ],
        "'TABLE": [
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
        "$": [
          -1,
          482
        ],
        "'NAME": [
          -1,
          482
        ],
        "'PARENNOSPACE": [
          -1,
          482
        ],
        "'STRING": [
          -1,
          482
        ],
        "'LBRACE": [
          -1,
          482
        ],
        "'RBRACE": [
          -1,
          482
        ],
        "'SPY": [
          -1,
          482
        ],
        "'PARENSPACE": [
          -1,
          482
        ],
        "'INT": [
          -1,
          482
        ],
        "'LONG": [
          -1,
          482
        ],
        "'DOUBLE": [
          -1,
          482
        ],
        "'FLOAT": [
          -1,
          482
        ],
        "'BOOLEAN": [
          -1,
          482
        ],
        "'VOID": [
          -1,
          482
        ],
        "'DATA": [
          -1,
          482
        ],
        "'IF": [
          -1,
          482
        ],
        "'FOR": [
          -1,
          482
        ],
        "'RETURN": [
          -1,
          482
        ],
        "'VAR": [
          -1,
          482
        ],
        "'REC": [
          -1,
          482
        ],
        "'ATCHECK": [
          -1,
          482
        ],
        "'ASSERTEQUALS": [
          -1,
          482
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          482
        ],
        "'ASSERTTRUE": [
          -1,
          482
        ],
        "'ASSERTFALSE": [
          -1,
          482
        ],
        "'ASSERTSATISFIES": [
          -1,
          482
        ],
        "'ASSERTRAISES": [
          -1,
          482
        ],
        "'SWITCH": [
          -1,
          482
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          482
        ],
        "'BLOCK": [
          -1,
          482
        ],
        "'TABLE": [
          -1,
          482
        ],
        "'ASK": [
          -1,
          482
        ],
        "'NEW": [
          -1,
          482
        ]
      },
      {
        "$": [
          -1,
          484
        ],
        "'NAME": [
          -1,
          484
        ],
        "'PARENNOSPACE": [
          -1,
          484
        ],
        "'STRING": [
          -1,
          484
        ],
        "'LBRACE": [
          -1,
          484
        ],
        "'RBRACE": [
          -1,
          484
        ],
        "'SPY": [
          -1,
          484
        ],
        "'PARENSPACE": [
          -1,
          484
        ],
        "'INT": [
          -1,
          484
        ],
        "'LONG": [
          -1,
          484
        ],
        "'DOUBLE": [
          -1,
          484
        ],
        "'FLOAT": [
          -1,
          484
        ],
        "'BOOLEAN": [
          -1,
          484
        ],
        "'VOID": [
          -1,
          484
        ],
        "'DATA": [
          -1,
          484
        ],
        "'IF": [
          -1,
          484
        ],
        "'FOR": [
          -1,
          484
        ],
        "'RETURN": [
          -1,
          484
        ],
        "'VAR": [
          -1,
          484
        ],
        "'REC": [
          -1,
          484
        ],
        "'ATCHECK": [
          -1,
          484
        ],
        "'ASSERTEQUALS": [
          -1,
          484
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          484
        ],
        "'ASSERTTRUE": [
          -1,
          484
        ],
        "'ASSERTFALSE": [
          -1,
          484
        ],
        "'ASSERTSATISFIES": [
          -1,
          484
        ],
        "'ASSERTRAISES": [
          -1,
          484
        ],
        "'SWITCH": [
          -1,
          484
        ],
        "'YIELD": [
          -1,
          484
        ],
        "'DASH": [
          -1,
          484
        ],
        "'BANG": [
          -1,
          484
        ],
        "'LBRACK": [
          -1,
          484
        ],
        "'NUMBER": [
          -1,
          484
        ],
        "'TRUE": [
          -1,
          484
        ],
        "'FALSE": [
          -1,
          484
        ],
        "'NULL": [
          -1,
          484
        ],
        "'PARENAFTERBRACE": [
          -1,
          484
        ],
        "'SIEVE": [
          -1,
          484
        ],
        "'BLOCK": [
          -1,
          484
        ],
        "'TABLE": [
          -1,
          484
        ],
        "'ASK": [
          -1,
          484
        ],
        "'NEW": [
          -1,
          484
        ]
      },
      {
        "'LBRACE": [
          435
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          436
        ],
        "block_I1": [
          437
        ],
        "block-stmt": [
          438
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          -1,
          486
        ],
        "'COMMA": [
          -1,
          486
        ]
      },
      {
        "'RPAREN": [
          -1,
          488
        ],
        "'COMMA": [
          -1,
          488
        ]
      },
      {
        "'SEMI": [
          -1,
          490
        ],
        "'RBRACE": [
          -1,
          490
        ]
      },
      {
        "'COMMA": [
          439
        ],
        "variant-decl_A0_I2_I1": [
          440
        ],
        "'RPAREN": [
          -1,
          492
        ]
      },
      {
        "'SEMI": [
          -1,
          494
        ],
        "'RBRACE": [
          -1,
          494
        ]
      },
      {
        "$": [
          -1,
          496
        ],
        "'NAME": [
          -1,
          496
        ],
        "'PARENNOSPACE": [
          -1,
          496
        ],
        "'STRING": [
          -1,
          496
        ],
        "'LBRACE": [
          -1,
          496
        ],
        "'RBRACE": [
          -1,
          496
        ],
        "'SPY": [
          -1,
          496
        ],
        "'PARENSPACE": [
          -1,
          496
        ],
        "'INT": [
          -1,
          496
        ],
        "'LONG": [
          -1,
          496
        ],
        "'DOUBLE": [
          -1,
          496
        ],
        "'FLOAT": [
          -1,
          496
        ],
        "'BOOLEAN": [
          -1,
          496
        ],
        "'VOID": [
          -1,
          496
        ],
        "'DATA": [
          -1,
          496
        ],
        "'IF": [
          -1,
          496
        ],
        "'FOR": [
          -1,
          496
        ],
        "'RETURN": [
          -1,
          496
        ],
        "'VAR": [
          -1,
          496
        ],
        "'REC": [
          -1,
          496
        ],
        "'ATCHECK": [
          -1,
          496
        ],
        "'ASSERTEQUALS": [
          -1,
          496
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          496
        ],
        "'ASSERTTRUE": [
          -1,
          496
        ],
        "'ASSERTFALSE": [
          -1,
          496
        ],
        "'ASSERTSATISFIES": [
          -1,
          496
        ],
        "'ASSERTRAISES": [
          -1,
          496
        ],
        "'SWITCH": [
          -1,
          496
        ],
        "'YIELD": [
          -1,
          496
        ],
        "'DASH": [
          -1,
          496
        ],
        "'BANG": [
          -1,
          496
        ],
        "'LBRACK": [
          -1,
          496
        ],
        "'NUMBER": [
          -1,
          496
        ],
        "'TRUE": [
          -1,
          496
        ],
        "'FALSE": [
          -1,
          496
        ],
        "'NULL": [
          -1,
          496
        ],
        "'PARENAFTERBRACE": [
          -1,
          496
        ],
        "'SIEVE": [
          -1,
          496
        ],
        "'BLOCK": [
          -1,
          496
        ],
        "'TABLE": [
          -1,
          496
        ],
        "'ASK": [
          -1,
          496
        ],
        "'NEW": [
          -1,
          496
        ]
      },
      {
        "'RPAREN": [
          441
        ],
        "spy-stmt_I3": [
          442
        ],
        "'COMMA": [
          443
        ]
      },
      {
        "block": [
          444
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "'NAME": [
          -1,
          498
        ],
        "'PARENNOSPACE": [
          -1,
          498
        ],
        "'STRING": [
          -1,
          498
        ],
        "'LBRACE": [
          -1,
          498
        ],
        "'RBRACE": [
          -1,
          498
        ],
        "'SPY": [
          -1,
          498
        ],
        "'PARENSPACE": [
          -1,
          498
        ],
        "'INT": [
          -1,
          498
        ],
        "'LONG": [
          -1,
          498
        ],
        "'DOUBLE": [
          -1,
          498
        ],
        "'FLOAT": [
          -1,
          498
        ],
        "'BOOLEAN": [
          -1,
          498
        ],
        "'VOID": [
          -1,
          498
        ],
        "'DATA": [
          -1,
          498
        ],
        "'IF": [
          -1,
          498
        ],
        "'FOR": [
          -1,
          498
        ],
        "'RETURN": [
          -1,
          498
        ],
        "'VAR": [
          -1,
          498
        ],
        "'REC": [
          -1,
          498
        ],
        "'ATCHECK": [
          -1,
          498
        ],
        "'ASSERTEQUALS": [
          -1,
          498
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          498
        ],
        "'ASSERTTRUE": [
          -1,
          498
        ],
        "'ASSERTFALSE": [
          -1,
          498
        ],
        "'ASSERTSATISFIES": [
          -1,
          498
        ],
        "'ASSERTRAISES": [
          -1,
          498
        ],
        "'SWITCH": [
          -1,
          498
        ],
        "'YIELD": [
          -1,
          498
        ],
        "'DASH": [
          -1,
          498
        ],
        "'BANG": [
          -1,
          498
        ],
        "'LBRACK": [
          -1,
          498
        ],
        "'NUMBER": [
          -1,
          498
        ],
        "'TRUE": [
          -1,
          498
        ],
        "'FALSE": [
          -1,
          498
        ],
        "'NULL": [
          -1,
          498
        ],
        "'PARENAFTERBRACE": [
          -1,
          498
        ],
        "'SIEVE": [
          -1,
          498
        ],
        "'BLOCK": [
          -1,
          498
        ],
        "'TABLE": [
          -1,
          498
        ],
        "'ASK": [
          -1,
          498
        ],
        "'NEW": [
          -1,
          498
        ]
      },
      {
        "'NAME": [
          -1,
          500
        ],
        "'PARENNOSPACE": [
          -1,
          500
        ],
        "'STRING": [
          -1,
          500
        ],
        "'LBRACE": [
          -1,
          500
        ],
        "'RBRACE": [
          -1,
          500
        ],
        "'SPY": [
          -1,
          500
        ],
        "'PARENSPACE": [
          -1,
          500
        ],
        "'INT": [
          -1,
          500
        ],
        "'LONG": [
          -1,
          500
        ],
        "'DOUBLE": [
          -1,
          500
        ],
        "'FLOAT": [
          -1,
          500
        ],
        "'BOOLEAN": [
          -1,
          500
        ],
        "'VOID": [
          -1,
          500
        ],
        "'DATA": [
          -1,
          500
        ],
        "'IF": [
          -1,
          500
        ],
        "'FOR": [
          -1,
          500
        ],
        "'RETURN": [
          -1,
          500
        ],
        "'VAR": [
          -1,
          500
        ],
        "'REC": [
          -1,
          500
        ],
        "'ATCHECK": [
          -1,
          500
        ],
        "'ASSERTEQUALS": [
          -1,
          500
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          500
        ],
        "'ASSERTTRUE": [
          -1,
          500
        ],
        "'ASSERTFALSE": [
          -1,
          500
        ],
        "'ASSERTSATISFIES": [
          -1,
          500
        ],
        "'ASSERTRAISES": [
          -1,
          500
        ],
        "'SWITCH": [
          -1,
          500
        ],
        "'YIELD": [
          -1,
          500
        ],
        "'DASH": [
          -1,
          500
        ],
        "'BANG": [
          -1,
          500
        ],
        "'LBRACK": [
          -1,
          500
        ],
        "'NUMBER": [
          -1,
          500
        ],
        "'TRUE": [
          -1,
          500
        ],
        "'FALSE": [
          -1,
          500
        ],
        "'NULL": [
          -1,
          500
        ],
        "'PARENAFTERBRACE": [
          -1,
          500
        ],
        "'SIEVE": [
          -1,
          500
        ],
        "'BLOCK": [
          -1,
          500
        ],
        "'TABLE": [
          -1,
          500
        ],
        "'ASK": [
          -1,
          500
        ],
        "'NEW": [
          -1,
          500
        ]
      },
      {
        "'NAME": [
          -1,
          502
        ],
        "'PARENNOSPACE": [
          -1,
          502
        ],
        "'STRING": [
          -1,
          502
        ],
        "'LBRACE": [
          -1,
          502
        ],
        "'RBRACE": [
          -1,
          502
        ],
        "'SPY": [
          -1,
          502
        ],
        "'PARENSPACE": [
          -1,
          502
        ],
        "'INT": [
          -1,
          502
        ],
        "'LONG": [
          -1,
          502
        ],
        "'DOUBLE": [
          -1,
          502
        ],
        "'FLOAT": [
          -1,
          502
        ],
        "'BOOLEAN": [
          -1,
          502
        ],
        "'VOID": [
          -1,
          502
        ],
        "'DATA": [
          -1,
          502
        ],
        "'IF": [
          -1,
          502
        ],
        "'FOR": [
          -1,
          502
        ],
        "'RETURN": [
          -1,
          502
        ],
        "'VAR": [
          -1,
          502
        ],
        "'REC": [
          -1,
          502
        ],
        "'ATCHECK": [
          -1,
          502
        ],
        "'ASSERTEQUALS": [
          -1,
          502
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          502
        ],
        "'ASSERTTRUE": [
          -1,
          502
        ],
        "'ASSERTFALSE": [
          -1,
          502
        ],
        "'ASSERTSATISFIES": [
          -1,
          502
        ],
        "'ASSERTRAISES": [
          -1,
          502
        ],
        "'SWITCH": [
          -1,
          502
        ],
        "'YIELD": [
          -1,
          502
        ],
        "'DASH": [
          -1,
          502
        ],
        "'BANG": [
          -1,
          502
        ],
        "'LBRACK": [
          -1,
          502
        ],
        "'NUMBER": [
          -1,
          502
        ],
        "'TRUE": [
          -1,
          502
        ],
        "'FALSE": [
          -1,
          502
        ],
        "'NULL": [
          -1,
          502
        ],
        "'PARENAFTERBRACE": [
          -1,
          502
        ],
        "'SIEVE": [
          -1,
          502
        ],
        "'BLOCK": [
          -1,
          502
        ],
        "'TABLE": [
          -1,
          502
        ],
        "'ASK": [
          -1,
          502
        ],
        "'NEW": [
          -1,
          502
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          504
        ],
        "'BLOCK": [
          -1,
          504
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          506
        ],
        "'BLOCK": [
          -1,
          506
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          508
        ],
        "'BLOCK": [
          -1,
          508
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          510
        ],
        "'BLOCK": [
          -1,
          510
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          512
        ],
        "'BLOCK": [
          -1,
          512
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          514
        ],
        "'BLOCK": [
          -1,
          514
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          516
        ],
        "'BLOCK": [
          -1,
          516
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          518
        ],
        "'BLOCK": [
          -1,
          518
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          520
        ],
        "'BLOCK": [
          -1,
          520
        ],
        "'TABLE": [
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
        "'COLON": [
          445
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          446
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          447
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'SEMI": [
          448
        ],
        "assert-stmt_A2_I4?": [
          449
        ],
        "assert-stmt_A2_I4": [
          450
        ],
        "'NAME": [
          -1,
          522,
          524
        ],
        "'PARENNOSPACE": [
          -1,
          522,
          524
        ],
        "'STRING": [
          -1,
          522,
          524
        ],
        "'LBRACE": [
          -1,
          522,
          524
        ],
        "'RBRACE": [
          -1,
          522,
          524
        ],
        "'SPY": [
          -1,
          522,
          524
        ],
        "'PARENSPACE": [
          -1,
          522,
          524
        ],
        "'INT": [
          -1,
          522,
          524
        ],
        "'LONG": [
          -1,
          522,
          524
        ],
        "'DOUBLE": [
          -1,
          522,
          524
        ],
        "'FLOAT": [
          -1,
          522,
          524
        ],
        "'BOOLEAN": [
          -1,
          522,
          524
        ],
        "'VOID": [
          -1,
          522,
          524
        ],
        "'DATA": [
          -1,
          522,
          524
        ],
        "'IF": [
          -1,
          522,
          524
        ],
        "'FOR": [
          -1,
          522,
          524
        ],
        "'RETURN": [
          -1,
          522,
          524
        ],
        "'VAR": [
          -1,
          522,
          524
        ],
        "'REC": [
          -1,
          522,
          524
        ],
        "'ATCHECK": [
          -1,
          522,
          524
        ],
        "'ASSERTEQUALS": [
          -1,
          522,
          524
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          522,
          524
        ],
        "'ASSERTTRUE": [
          -1,
          522,
          524
        ],
        "'ASSERTFALSE": [
          -1,
          522,
          524
        ],
        "'ASSERTSATISFIES": [
          -1,
          522,
          524
        ],
        "'ASSERTRAISES": [
          -1,
          522,
          524
        ],
        "'SWITCH": [
          -1,
          522,
          524
        ],
        "'YIELD": [
          -1,
          522,
          524
        ],
        "'DASH": [
          -1,
          522,
          524
        ],
        "'BANG": [
          -1,
          522,
          524
        ],
        "'LBRACK": [
          -1,
          522,
          524
        ],
        "'NUMBER": [
          -1,
          522,
          524
        ],
        "'TRUE": [
          -1,
          522,
          524
        ],
        "'FALSE": [
          -1,
          522,
          524
        ],
        "'NULL": [
          -1,
          522,
          524
        ],
        "'PARENAFTERBRACE": [
          -1,
          522,
          524
        ],
        "'SIEVE": [
          -1,
          522,
          524
        ],
        "'BLOCK": [
          -1,
          522,
          524
        ],
        "'TABLE": [
          -1,
          522,
          524
        ],
        "'ASK": [
          -1,
          522,
          524
        ],
        "'NEW": [
          -1,
          522,
          524
        ]
      },
      {
        "'SEMI": [
          451
        ],
        "assert-stmt_A3_I4?": [
          452
        ],
        "assert-stmt_A3_I4": [
          453
        ],
        "'NAME": [
          -1,
          526,
          528
        ],
        "'PARENNOSPACE": [
          -1,
          526,
          528
        ],
        "'STRING": [
          -1,
          526,
          528
        ],
        "'LBRACE": [
          -1,
          526,
          528
        ],
        "'RBRACE": [
          -1,
          526,
          528
        ],
        "'SPY": [
          -1,
          526,
          528
        ],
        "'PARENSPACE": [
          -1,
          526,
          528
        ],
        "'INT": [
          -1,
          526,
          528
        ],
        "'LONG": [
          -1,
          526,
          528
        ],
        "'DOUBLE": [
          -1,
          526,
          528
        ],
        "'FLOAT": [
          -1,
          526,
          528
        ],
        "'BOOLEAN": [
          -1,
          526,
          528
        ],
        "'VOID": [
          -1,
          526,
          528
        ],
        "'DATA": [
          -1,
          526,
          528
        ],
        "'IF": [
          -1,
          526,
          528
        ],
        "'FOR": [
          -1,
          526,
          528
        ],
        "'RETURN": [
          -1,
          526,
          528
        ],
        "'VAR": [
          -1,
          526,
          528
        ],
        "'REC": [
          -1,
          526,
          528
        ],
        "'ATCHECK": [
          -1,
          526,
          528
        ],
        "'ASSERTEQUALS": [
          -1,
          526,
          528
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          526,
          528
        ],
        "'ASSERTTRUE": [
          -1,
          526,
          528
        ],
        "'ASSERTFALSE": [
          -1,
          526,
          528
        ],
        "'ASSERTSATISFIES": [
          -1,
          526,
          528
        ],
        "'ASSERTRAISES": [
          -1,
          526,
          528
        ],
        "'SWITCH": [
          -1,
          526,
          528
        ],
        "'YIELD": [
          -1,
          526,
          528
        ],
        "'DASH": [
          -1,
          526,
          528
        ],
        "'BANG": [
          -1,
          526,
          528
        ],
        "'LBRACK": [
          -1,
          526,
          528
        ],
        "'NUMBER": [
          -1,
          526,
          528
        ],
        "'TRUE": [
          -1,
          526,
          528
        ],
        "'FALSE": [
          -1,
          526,
          528
        ],
        "'NULL": [
          -1,
          526,
          528
        ],
        "'PARENAFTERBRACE": [
          -1,
          526,
          528
        ],
        "'SIEVE": [
          -1,
          526,
          528
        ],
        "'BLOCK": [
          -1,
          526,
          528
        ],
        "'TABLE": [
          -1,
          526,
          528
        ],
        "'ASK": [
          -1,
          526,
          528
        ],
        "'NEW": [
          -1,
          526,
          528
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          454
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          455
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          456
        ],
        "block-stmt": [
          457
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          458
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          223
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "check-block_A0_I6": [
          459
        ],
        "'ASSERTEQUALS": [
          227
        ],
        "'ASSERTNOTEQUALS": [
          228
        ],
        "'ASSERTTRUE": [
          229
        ],
        "'ASSERTFALSE": [
          230
        ],
        "'ASSERTSATISFIES": [
          231
        ],
        "'ASSERTRAISES": [
          232
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RBRACE": [
          460
        ]
      },
      {
        "'RBRACE": [
          -1,
          530
        ],
        "'CASE": [
          -1,
          530
        ],
        "'DEFAULT": [
          -1,
          530
        ]
      },
      {
        "'RBRACE": [
          -1,
          532
        ],
        "'CASE": [
          -1,
          532
        ],
        "'DEFAULT": [
          -1,
          532
        ]
      },
      {
        "'RBRACE": [
          -1,
          534
        ]
      },
      {
        "'RBRACE": [
          -1,
          536
        ]
      },
      {
        "'NAME": [
          461
        ]
      },
      {
        "'COLON": [
          462
        ]
      },
      {
        "'COMMA": [
          -1,
          538
        ],
        "'RBRACK": [
          -1,
          538
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          463
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          464
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "block": [
          465
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "'NAME": [
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          302
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "for-bind": [
          466
        ]
      },
      {
        "'RPAREN": [
          -1,
          540
        ],
        "'COMMA": [
          -1,
          540
        ]
      },
      {
        "'RPAREN": [
          467
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          468
        ],
        "block-stmt": [
          469
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "sieve-expr_I6": [
          470
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'LBRACE": [
          -1,
          542
        ],
        "'COMMA": [
          -1,
          542
        ]
      },
      {
        "$": [
          -1,
          544
        ],
        "'NAME": [
          -1,
          544
        ],
        "'SEMI": [
          -1,
          544
        ],
        "'PARENNOSPACE": [
          -1,
          544
        ],
        "'STRING": [
          -1,
          544
        ],
        "'RPAREN": [
          -1,
          544
        ],
        "'LBRACE": [
          -1,
          544
        ],
        "'RBRACE": [
          -1,
          544
        ],
        "'SPY": [
          -1,
          544
        ],
        "'PARENSPACE": [
          -1,
          544
        ],
        "'COMMA": [
          -1,
          544
        ],
        "'INT": [
          -1,
          544
        ],
        "'LONG": [
          -1,
          544
        ],
        "'DOUBLE": [
          -1,
          544
        ],
        "'FLOAT": [
          -1,
          544
        ],
        "'BOOLEAN": [
          -1,
          544
        ],
        "'VOID": [
          -1,
          544
        ],
        "'LT": [
          -1,
          544
        ],
        "'GT": [
          -1,
          544
        ],
        "'THINARROW": [
          -1,
          544
        ],
        "'DATA": [
          -1,
          544
        ],
        "'IF": [
          -1,
          544
        ],
        "'FOR": [
          -1,
          544
        ],
        "'RETURN": [
          -1,
          544
        ],
        "'VAR": [
          -1,
          544
        ],
        "'REC": [
          -1,
          544
        ],
        "'ATCHECK": [
          -1,
          544
        ],
        "'ASSERTEQUALS": [
          -1,
          544
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          544
        ],
        "'ASSERTTRUE": [
          -1,
          544
        ],
        "'ASSERTFALSE": [
          -1,
          544
        ],
        "'ASSERTSATISFIES": [
          -1,
          544
        ],
        "'ASSERTRAISES": [
          -1,
          544
        ],
        "'IS": [
          -1,
          544
        ],
        "'ISNOT": [
          -1,
          544
        ],
        "'SATISFIES": [
          -1,
          544
        ],
        "'RAISES": [
          -1,
          544
        ],
        "'SWITCH": [
          -1,
          544
        ],
        "'CASE": [
          -1,
          544
        ],
        "'DEFAULT": [
          -1,
          544
        ],
        "'YIELD": [
          -1,
          544
        ],
        "'PLUS": [
          -1,
          544
        ],
        "'DASH": [
          -1,
          544
        ],
        "'TIMES": [
          -1,
          544
        ],
        "'SLASH": [
          -1,
          544
        ],
        "'PERCENT": [
          -1,
          544
        ],
        "'EQUALEQUAL": [
          -1,
          544
        ],
        "'NEQ": [
          -1,
          544
        ],
        "'LEQ": [
          -1,
          544
        ],
        "'GEQ": [
          -1,
          544
        ],
        "'AND": [
          -1,
          544
        ],
        "'OR": [
          -1,
          544
        ],
        "'BANG": [
          -1,
          544
        ],
        "'DOT": [
          -1,
          544
        ],
        "'LBRACK": [
          -1,
          544
        ],
        "'RBRACK": [
          -1,
          544
        ],
        "'NUMBER": [
          -1,
          544
        ],
        "'TRUE": [
          -1,
          544
        ],
        "'FALSE": [
          -1,
          544
        ],
        "'NULL": [
          -1,
          544
        ],
        "'PARENAFTERBRACE": [
          -1,
          544
        ],
        "'SIEVE": [
          -1,
          544
        ],
        "'USING": [
          -1,
          544
        ],
        "'BLOCK": [
          -1,
          544
        ],
        "'TABLE": [
          -1,
          544
        ],
        "'ASK": [
          -1,
          544
        ],
        "'NEW": [
          -1,
          544
        ]
      },
      {
        "'RBRACE": [
          -1,
          546
        ],
        "'ROW": [
          -1,
          546
        ]
      },
      {
        "'SEMI": [
          471
        ]
      },
      {
        "'COLON": [
          472
        ]
      },
      {
        "'NAME": [
          -1,
          548
        ],
        "'STRING": [
          -1,
          548
        ],
        "'LBRACE": [
          -1,
          548
        ],
        "'RBRACE": [
          -1,
          548
        ],
        "'PARENSPACE": [
          -1,
          548
        ],
        "'SWITCH": [
          -1,
          548
        ],
        "'DASH": [
          -1,
          548
        ],
        "'BANG": [
          -1,
          548
        ],
        "'LBRACK": [
          -1,
          548
        ],
        "'NUMBER": [
          -1,
          548
        ],
        "'TRUE": [
          -1,
          548
        ],
        "'FALSE": [
          -1,
          548
        ],
        "'NULL": [
          -1,
          548
        ],
        "'PARENAFTERBRACE": [
          -1,
          548
        ],
        "'SIEVE": [
          -1,
          548
        ],
        "'BLOCK": [
          -1,
          548
        ],
        "'TABLE": [
          -1,
          548
        ],
        "'ASK": [
          -1,
          548
        ],
        "'NEW": [
          -1,
          548
        ]
      },
      {
        "'NAME": [
          -1,
          550
        ],
        "'STRING": [
          -1,
          550
        ],
        "'LBRACE": [
          -1,
          550
        ],
        "'PARENSPACE": [
          -1,
          550
        ],
        "'SWITCH": [
          -1,
          550
        ],
        "'DASH": [
          -1,
          550
        ],
        "'BANG": [
          -1,
          550
        ],
        "'LBRACK": [
          -1,
          550
        ],
        "'NUMBER": [
          -1,
          550
        ],
        "'TRUE": [
          -1,
          550
        ],
        "'FALSE": [
          -1,
          550
        ],
        "'NULL": [
          -1,
          550
        ],
        "'PARENAFTERBRACE": [
          -1,
          550
        ],
        "'SIEVE": [
          -1,
          550
        ],
        "'BLOCK": [
          -1,
          550
        ],
        "'TABLE": [
          -1,
          550
        ],
        "'ASK": [
          -1,
          550
        ],
        "'OTHERWISE": [
          -1,
          550
        ],
        "'NEW": [
          -1,
          550
        ]
      },
      {
        "'RBRACE": [
          473
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          474
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          -1,
          552
        ],
        "'COMMA": [
          -1,
          552
        ]
      },
      {
        "$": [
          -1,
          554
        ],
        "'IMPORT": [
          -1,
          554
        ],
        "'NAME": [
          -1,
          554
        ],
        "'PARENNOSPACE": [
          -1,
          554
        ],
        "'STRING": [
          -1,
          554
        ],
        "'INCLUDE": [
          -1,
          554
        ],
        "'LBRACE": [
          -1,
          554
        ],
        "'PARENSPACE": [
          -1,
          554
        ],
        "'INT": [
          -1,
          554
        ],
        "'LONG": [
          -1,
          554
        ],
        "'DOUBLE": [
          -1,
          554
        ],
        "'FLOAT": [
          -1,
          554
        ],
        "'BOOLEAN": [
          -1,
          554
        ],
        "'VOID": [
          -1,
          554
        ],
        "'DATA": [
          -1,
          554
        ],
        "'VAR": [
          -1,
          554
        ],
        "'REC": [
          -1,
          554
        ],
        "'ATCHECK": [
          -1,
          554
        ],
        "'SWITCH": [
          -1,
          554
        ],
        "'DASH": [
          -1,
          554
        ],
        "'BANG": [
          -1,
          554
        ],
        "'LBRACK": [
          -1,
          554
        ],
        "'NUMBER": [
          -1,
          554
        ],
        "'TRUE": [
          -1,
          554
        ],
        "'FALSE": [
          -1,
          554
        ],
        "'NULL": [
          -1,
          554
        ],
        "'PARENAFTERBRACE": [
          -1,
          554
        ],
        "'SIEVE": [
          -1,
          554
        ],
        "'BLOCK": [
          -1,
          554
        ],
        "'TABLE": [
          -1,
          554
        ],
        "'ASK": [
          -1,
          554
        ],
        "'NEW": [
          -1,
          554
        ]
      },
      {
        "where-clause_I2*": [
          475
        ],
        "'NAME": [
          -1,
          556
        ],
        "'PARENNOSPACE": [
          -1,
          556
        ],
        "'STRING": [
          -1,
          556
        ],
        "'LBRACE": [
          -1,
          556
        ],
        "'RBRACE": [
          -1,
          556
        ],
        "'SPY": [
          -1,
          556
        ],
        "'PARENSPACE": [
          -1,
          556
        ],
        "'INT": [
          -1,
          556
        ],
        "'LONG": [
          -1,
          556
        ],
        "'DOUBLE": [
          -1,
          556
        ],
        "'FLOAT": [
          -1,
          556
        ],
        "'BOOLEAN": [
          -1,
          556
        ],
        "'VOID": [
          -1,
          556
        ],
        "'DATA": [
          -1,
          556
        ],
        "'IF": [
          -1,
          556
        ],
        "'FOR": [
          -1,
          556
        ],
        "'RETURN": [
          -1,
          556
        ],
        "'VAR": [
          -1,
          556
        ],
        "'REC": [
          -1,
          556
        ],
        "'ATCHECK": [
          -1,
          556
        ],
        "'ASSERTEQUALS": [
          -1,
          556
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          556
        ],
        "'ASSERTTRUE": [
          -1,
          556
        ],
        "'ASSERTFALSE": [
          -1,
          556
        ],
        "'ASSERTSATISFIES": [
          -1,
          556
        ],
        "'ASSERTRAISES": [
          -1,
          556
        ],
        "'SWITCH": [
          -1,
          556
        ],
        "'YIELD": [
          -1,
          556
        ],
        "'DASH": [
          -1,
          556
        ],
        "'BANG": [
          -1,
          556
        ],
        "'LBRACK": [
          -1,
          556
        ],
        "'NUMBER": [
          -1,
          556
        ],
        "'TRUE": [
          -1,
          556
        ],
        "'FALSE": [
          -1,
          556
        ],
        "'NULL": [
          -1,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          556
        ],
        "'SIEVE": [
          -1,
          556
        ],
        "'BLOCK": [
          -1,
          556
        ],
        "'TABLE": [
          -1,
          556
        ],
        "'ASK": [
          -1,
          556
        ],
        "'NEW": [
          -1,
          556
        ]
      },
      {
        "$": [
          -1,
          558
        ],
        "'NAME": [
          -1,
          558
        ],
        "'PARENNOSPACE": [
          -1,
          558
        ],
        "'STRING": [
          -1,
          558
        ],
        "'LBRACE": [
          -1,
          558
        ],
        "'RBRACE": [
          -1,
          558
        ],
        "'SPY": [
          -1,
          558
        ],
        "'PARENSPACE": [
          -1,
          558
        ],
        "'WHERE": [
          -1,
          558
        ],
        "'INT": [
          -1,
          558
        ],
        "'LONG": [
          -1,
          558
        ],
        "'DOUBLE": [
          -1,
          558
        ],
        "'FLOAT": [
          -1,
          558
        ],
        "'BOOLEAN": [
          -1,
          558
        ],
        "'VOID": [
          -1,
          558
        ],
        "'DATA": [
          -1,
          558
        ],
        "'IF": [
          -1,
          558
        ],
        "'ELSE": [
          -1,
          558
        ],
        "'FOR": [
          -1,
          558
        ],
        "'RETURN": [
          -1,
          558
        ],
        "'VAR": [
          -1,
          558
        ],
        "'REC": [
          -1,
          558
        ],
        "'ATCHECK": [
          -1,
          558
        ],
        "'ASSERTEQUALS": [
          -1,
          558
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          558
        ],
        "'ASSERTTRUE": [
          -1,
          558
        ],
        "'ASSERTFALSE": [
          -1,
          558
        ],
        "'ASSERTSATISFIES": [
          -1,
          558
        ],
        "'ASSERTRAISES": [
          -1,
          558
        ],
        "'SWITCH": [
          -1,
          558
        ],
        "'YIELD": [
          -1,
          558
        ],
        "'DASH": [
          -1,
          558
        ],
        "'BANG": [
          -1,
          558
        ],
        "'LBRACK": [
          -1,
          558
        ],
        "'RBRACK": [
          -1,
          558
        ],
        "'NUMBER": [
          -1,
          558
        ],
        "'TRUE": [
          -1,
          558
        ],
        "'FALSE": [
          -1,
          558
        ],
        "'NULL": [
          -1,
          558
        ],
        "'PARENAFTERBRACE": [
          -1,
          558
        ],
        "'SIEVE": [
          -1,
          558
        ],
        "'BLOCK": [
          -1,
          558
        ],
        "'TABLE": [
          -1,
          558
        ],
        "'ASK": [
          -1,
          558
        ],
        "'NEW": [
          -1,
          558
        ]
      },
      {
        "'NAME": [
          -1,
          560
        ],
        "'PARENNOSPACE": [
          -1,
          560
        ],
        "'STRING": [
          -1,
          560
        ],
        "'LBRACE": [
          -1,
          560
        ],
        "'RBRACE": [
          -1,
          560
        ],
        "'SPY": [
          -1,
          560
        ],
        "'PARENSPACE": [
          -1,
          560
        ],
        "'INT": [
          -1,
          560
        ],
        "'LONG": [
          -1,
          560
        ],
        "'DOUBLE": [
          -1,
          560
        ],
        "'FLOAT": [
          -1,
          560
        ],
        "'BOOLEAN": [
          -1,
          560
        ],
        "'VOID": [
          -1,
          560
        ],
        "'DATA": [
          -1,
          560
        ],
        "'IF": [
          -1,
          560
        ],
        "'FOR": [
          -1,
          560
        ],
        "'RETURN": [
          -1,
          560
        ],
        "'VAR": [
          -1,
          560
        ],
        "'REC": [
          -1,
          560
        ],
        "'ATCHECK": [
          -1,
          560
        ],
        "'SWITCH": [
          -1,
          560
        ],
        "'YIELD": [
          -1,
          560
        ],
        "'DASH": [
          -1,
          560
        ],
        "'BANG": [
          -1,
          560
        ],
        "'LBRACK": [
          -1,
          560
        ],
        "'NUMBER": [
          -1,
          560
        ],
        "'TRUE": [
          -1,
          560
        ],
        "'FALSE": [
          -1,
          560
        ],
        "'NULL": [
          -1,
          560
        ],
        "'PARENAFTERBRACE": [
          -1,
          560
        ],
        "'SIEVE": [
          -1,
          560
        ],
        "'BLOCK": [
          -1,
          560
        ],
        "'TABLE": [
          -1,
          560
        ],
        "'ASK": [
          -1,
          560
        ],
        "'NEW": [
          -1,
          560
        ]
      },
      {
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          562
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          562
        ],
        "'BLOCK": [
          -1,
          562
        ],
        "'TABLE": [
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
          93
        ],
        "'PARENSPACE": [
          72
        ],
        "type-ann": [
          322
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "variant-member": [
          476
        ]
      },
      {
        "'RPAREN": [
          -1,
          564
        ],
        "'COMMA": [
          -1,
          564
        ]
      },
      {
        "'SEMI": [
          477
        ]
      },
      {
        "'RPAREN": [
          -1,
          566
        ],
        "'COMMA": [
          -1,
          566
        ]
      },
      {
        "'NAME": [
          478
        ]
      },
      {
        "if-stmt_I5*": [
          479
        ],
        "'NAME": [
          -1,
          568,
          570
        ],
        "'PARENNOSPACE": [
          -1,
          568,
          570
        ],
        "'STRING": [
          -1,
          568,
          570
        ],
        "'LBRACE": [
          -1,
          568,
          570
        ],
        "'RBRACE": [
          -1,
          568,
          570
        ],
        "'SPY": [
          -1,
          568,
          570
        ],
        "'PARENSPACE": [
          -1,
          568,
          570
        ],
        "'INT": [
          -1,
          568,
          570
        ],
        "'LONG": [
          -1,
          568,
          570
        ],
        "'DOUBLE": [
          -1,
          568,
          570
        ],
        "'FLOAT": [
          -1,
          568,
          570
        ],
        "'BOOLEAN": [
          -1,
          568,
          570
        ],
        "'VOID": [
          -1,
          568,
          570
        ],
        "'DATA": [
          -1,
          568,
          570
        ],
        "'IF": [
          -1,
          568,
          570
        ],
        "'ELSE": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          568,
          570
        ],
        "'RETURN": [
          -1,
          568,
          570
        ],
        "'VAR": [
          -1,
          568,
          570
        ],
        "'REC": [
          -1,
          568,
          570
        ],
        "'ATCHECK": [
          -1,
          568,
          570
        ],
        "'ASSERTEQUALS": [
          -1,
          568,
          570
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          568,
          570
        ],
        "'ASSERTTRUE": [
          -1,
          568,
          570
        ],
        "'ASSERTFALSE": [
          -1,
          568,
          570
        ],
        "'ASSERTSATISFIES": [
          -1,
          568,
          570
        ],
        "'ASSERTRAISES": [
          -1,
          568,
          570
        ],
        "'SWITCH": [
          -1,
          568,
          570
        ],
        "'YIELD": [
          -1,
          568,
          570
        ],
        "'DASH": [
          -1,
          568,
          570
        ],
        "'BANG": [
          -1,
          568,
          570
        ],
        "'LBRACK": [
          -1,
          568,
          570
        ],
        "'NUMBER": [
          -1,
          568,
          570
        ],
        "'TRUE": [
          -1,
          568,
          570
        ],
        "'FALSE": [
          -1,
          568,
          570
        ],
        "'NULL": [
          -1,
          568,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          568,
          570
        ],
        "'SIEVE": [
          -1,
          568,
          570
        ],
        "'BLOCK": [
          -1,
          568,
          570
        ],
        "'TABLE": [
          -1,
          568,
          570
        ],
        "'ASK": [
          -1,
          568,
          570
        ],
        "'NEW": [
          -1,
          568,
          570
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          480
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          481
        ]
      },
      {
        "'RPAREN": [
          482
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          572
        ],
        "'BLOCK": [
          -1,
          572
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          574
        ],
        "'BLOCK": [
          -1,
          574
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          576
        ],
        "'BLOCK": [
          -1,
          576
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          578
        ],
        "'BLOCK": [
          -1,
          578
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          580
        ],
        "'BLOCK": [
          -1,
          580
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          582
        ],
        "'BLOCK": [
          -1,
          582
        ],
        "'TABLE": [
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
        "'RPAREN": [
          483
        ]
      },
      {
        "'RPAREN": [
          484
        ]
      },
      {
        "$": [
          -1,
          584
        ],
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          584
        ],
        "'BLOCK": [
          -1,
          584
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          586
        ],
        "'BLOCK": [
          -1,
          586
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          588
        ],
        "'BLOCK": [
          -1,
          588
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          590
        ],
        "'BLOCK": [
          -1,
          590
        ],
        "'TABLE": [
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
        "$": [
          -1,
          592
        ],
        "'NAME": [
          -1,
          592
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          592
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          592
        ],
        "'GT": [
          -1,
          592
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          592
        ],
        "'ISNOT": [
          -1,
          592
        ],
        "'SATISFIES": [
          -1,
          592
        ],
        "'RAISES": [
          -1,
          592
        ],
        "'SWITCH": [
          -1,
          592
        ],
        "'CASE": [
          -1,
          592
        ],
        "'DEFAULT": [
          -1,
          592
        ],
        "'YIELD": [
          -1,
          592
        ],
        "'PLUS": [
          -1,
          592
        ],
        "'DASH": [
          -1,
          592
        ],
        "'TIMES": [
          -1,
          592
        ],
        "'SLASH": [
          -1,
          592
        ],
        "'PERCENT": [
          -1,
          592
        ],
        "'EQUALEQUAL": [
          -1,
          592
        ],
        "'NEQ": [
          -1,
          592
        ],
        "'LEQ": [
          -1,
          592
        ],
        "'GEQ": [
          -1,
          592
        ],
        "'AND": [
          -1,
          592
        ],
        "'OR": [
          -1,
          592
        ],
        "'BANG": [
          -1,
          592
        ],
        "'DOT": [
          -1,
          592
        ],
        "'LBRACK": [
          -1,
          592
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          592
        ],
        "'USING": [
          -1,
          592
        ],
        "'BLOCK": [
          -1,
          592
        ],
        "'TABLE": [
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
        "'PARENNOSPACE": [
          485
        ],
        "'COLON": [
          486
        ]
      },
      {
        "switch-body": [
          487
        ],
        "switch-body_I0*": [
          488
        ],
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          594
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          594
        ],
        "'BLOCK": [
          -1,
          594
        ],
        "'TABLE": [
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
        "'RPAREN": [
          -1,
          596
        ],
        "'COMMA": [
          -1,
          596
        ]
      },
      {
        "'RPAREN": [
          -1,
          598
        ],
        "'COMMA": [
          -1,
          598
        ]
      },
      {
        "'RBRACK": [
          489
        ]
      },
      {
        "'RPAREN": [
          -1,
          600
        ],
        "'COMMA": [
          -1,
          600
        ]
      },
      {
        "block": [
          490
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "$": [
          -1,
          602
        ],
        "'NAME": [
          -1,
          602
        ],
        "'SEMI": [
          -1,
          602
        ],
        "'PARENNOSPACE": [
          -1,
          602
        ],
        "'STRING": [
          -1,
          602
        ],
        "'RPAREN": [
          -1,
          602
        ],
        "'LBRACE": [
          -1,
          602
        ],
        "'RBRACE": [
          -1,
          602
        ],
        "'SPY": [
          -1,
          602
        ],
        "'PARENSPACE": [
          -1,
          602
        ],
        "'COMMA": [
          -1,
          602
        ],
        "'INT": [
          -1,
          602
        ],
        "'LONG": [
          -1,
          602
        ],
        "'DOUBLE": [
          -1,
          602
        ],
        "'FLOAT": [
          -1,
          602
        ],
        "'BOOLEAN": [
          -1,
          602
        ],
        "'VOID": [
          -1,
          602
        ],
        "'LT": [
          -1,
          602
        ],
        "'GT": [
          -1,
          602
        ],
        "'THINARROW": [
          -1,
          602
        ],
        "'DATA": [
          -1,
          602
        ],
        "'IF": [
          -1,
          602
        ],
        "'FOR": [
          -1,
          602
        ],
        "'RETURN": [
          -1,
          602
        ],
        "'VAR": [
          -1,
          602
        ],
        "'REC": [
          -1,
          602
        ],
        "'ATCHECK": [
          -1,
          602
        ],
        "'ASSERTEQUALS": [
          -1,
          602
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          602
        ],
        "'ASSERTTRUE": [
          -1,
          602
        ],
        "'ASSERTFALSE": [
          -1,
          602
        ],
        "'ASSERTSATISFIES": [
          -1,
          602
        ],
        "'ASSERTRAISES": [
          -1,
          602
        ],
        "'IS": [
          -1,
          602
        ],
        "'ISNOT": [
          -1,
          602
        ],
        "'SATISFIES": [
          -1,
          602
        ],
        "'RAISES": [
          -1,
          602
        ],
        "'SWITCH": [
          -1,
          602
        ],
        "'CASE": [
          -1,
          602
        ],
        "'DEFAULT": [
          -1,
          602
        ],
        "'YIELD": [
          -1,
          602
        ],
        "'PLUS": [
          -1,
          602
        ],
        "'DASH": [
          -1,
          602
        ],
        "'TIMES": [
          -1,
          602
        ],
        "'SLASH": [
          -1,
          602
        ],
        "'PERCENT": [
          -1,
          602
        ],
        "'EQUALEQUAL": [
          -1,
          602
        ],
        "'NEQ": [
          -1,
          602
        ],
        "'LEQ": [
          -1,
          602
        ],
        "'GEQ": [
          -1,
          602
        ],
        "'AND": [
          -1,
          602
        ],
        "'OR": [
          -1,
          602
        ],
        "'BANG": [
          -1,
          602
        ],
        "'DOT": [
          -1,
          602
        ],
        "'LBRACK": [
          -1,
          602
        ],
        "'RBRACK": [
          -1,
          602
        ],
        "'NUMBER": [
          -1,
          602
        ],
        "'TRUE": [
          -1,
          602
        ],
        "'FALSE": [
          -1,
          602
        ],
        "'NULL": [
          -1,
          602
        ],
        "'PARENAFTERBRACE": [
          -1,
          602
        ],
        "'SIEVE": [
          -1,
          602
        ],
        "'USING": [
          -1,
          602
        ],
        "'BLOCK": [
          -1,
          602
        ],
        "'TABLE": [
          -1,
          602
        ],
        "'ASK": [
          -1,
          602
        ],
        "'NEW": [
          -1,
          602
        ]
      },
      {
        "'NAME": [
          -1,
          604
        ],
        "'PARENNOSPACE": [
          -1,
          604
        ],
        "'STRING": [
          -1,
          604
        ],
        "'LBRACE": [
          -1,
          604
        ],
        "'RBRACE": [
          -1,
          604
        ],
        "'SPY": [
          -1,
          604
        ],
        "'PARENSPACE": [
          -1,
          604
        ],
        "'INT": [
          -1,
          604
        ],
        "'LONG": [
          -1,
          604
        ],
        "'DOUBLE": [
          -1,
          604
        ],
        "'FLOAT": [
          -1,
          604
        ],
        "'BOOLEAN": [
          -1,
          604
        ],
        "'VOID": [
          -1,
          604
        ],
        "'DATA": [
          -1,
          604
        ],
        "'IF": [
          -1,
          604
        ],
        "'FOR": [
          -1,
          604
        ],
        "'RETURN": [
          -1,
          604
        ],
        "'VAR": [
          -1,
          604
        ],
        "'REC": [
          -1,
          604
        ],
        "'ATCHECK": [
          -1,
          604
        ],
        "'SWITCH": [
          -1,
          604
        ],
        "'YIELD": [
          -1,
          604
        ],
        "'DASH": [
          -1,
          604
        ],
        "'BANG": [
          -1,
          604
        ],
        "'LBRACK": [
          -1,
          604
        ],
        "'NUMBER": [
          -1,
          604
        ],
        "'TRUE": [
          -1,
          604
        ],
        "'FALSE": [
          -1,
          604
        ],
        "'NULL": [
          -1,
          604
        ],
        "'PARENAFTERBRACE": [
          -1,
          604
        ],
        "'SIEVE": [
          -1,
          604
        ],
        "'BLOCK": [
          -1,
          604
        ],
        "'TABLE": [
          -1,
          604
        ],
        "'ASK": [
          -1,
          604
        ],
        "'NEW": [
          -1,
          604
        ]
      },
      {
        "'NAME": [
          -1,
          606
        ],
        "'PARENNOSPACE": [
          -1,
          606
        ],
        "'STRING": [
          -1,
          606
        ],
        "'LBRACE": [
          -1,
          606
        ],
        "'RBRACE": [
          -1,
          606
        ],
        "'SPY": [
          -1,
          606
        ],
        "'PARENSPACE": [
          -1,
          606
        ],
        "'INT": [
          -1,
          606
        ],
        "'LONG": [
          -1,
          606
        ],
        "'DOUBLE": [
          -1,
          606
        ],
        "'FLOAT": [
          -1,
          606
        ],
        "'BOOLEAN": [
          -1,
          606
        ],
        "'VOID": [
          -1,
          606
        ],
        "'DATA": [
          -1,
          606
        ],
        "'IF": [
          -1,
          606
        ],
        "'FOR": [
          -1,
          606
        ],
        "'RETURN": [
          -1,
          606
        ],
        "'VAR": [
          -1,
          606
        ],
        "'REC": [
          -1,
          606
        ],
        "'ATCHECK": [
          -1,
          606
        ],
        "'SWITCH": [
          -1,
          606
        ],
        "'YIELD": [
          -1,
          606
        ],
        "'DASH": [
          -1,
          606
        ],
        "'BANG": [
          -1,
          606
        ],
        "'LBRACK": [
          -1,
          606
        ],
        "'NUMBER": [
          -1,
          606
        ],
        "'TRUE": [
          -1,
          606
        ],
        "'FALSE": [
          -1,
          606
        ],
        "'NULL": [
          -1,
          606
        ],
        "'PARENAFTERBRACE": [
          -1,
          606
        ],
        "'SIEVE": [
          -1,
          606
        ],
        "'BLOCK": [
          -1,
          606
        ],
        "'TABLE": [
          -1,
          606
        ],
        "'ASK": [
          -1,
          606
        ],
        "'NEW": [
          -1,
          606
        ]
      },
      {
        "'RBRACE": [
          -1,
          608
        ],
        "'ROW": [
          -1,
          608
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          491
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "$": [
          -1,
          610
        ],
        "'NAME": [
          -1,
          610
        ],
        "'SEMI": [
          -1,
          610
        ],
        "'PARENNOSPACE": [
          -1,
          610
        ],
        "'STRING": [
          -1,
          610
        ],
        "'RPAREN": [
          -1,
          610
        ],
        "'LBRACE": [
          -1,
          610
        ],
        "'RBRACE": [
          -1,
          610
        ],
        "'SPY": [
          -1,
          610
        ],
        "'PARENSPACE": [
          -1,
          610
        ],
        "'COMMA": [
          -1,
          610
        ],
        "'INT": [
          -1,
          610
        ],
        "'LONG": [
          -1,
          610
        ],
        "'DOUBLE": [
          -1,
          610
        ],
        "'FLOAT": [
          -1,
          610
        ],
        "'BOOLEAN": [
          -1,
          610
        ],
        "'VOID": [
          -1,
          610
        ],
        "'LT": [
          -1,
          610
        ],
        "'GT": [
          -1,
          610
        ],
        "'THINARROW": [
          -1,
          610
        ],
        "'DATA": [
          -1,
          610
        ],
        "'IF": [
          -1,
          610
        ],
        "'FOR": [
          -1,
          610
        ],
        "'RETURN": [
          -1,
          610
        ],
        "'VAR": [
          -1,
          610
        ],
        "'REC": [
          -1,
          610
        ],
        "'ATCHECK": [
          -1,
          610
        ],
        "'ASSERTEQUALS": [
          -1,
          610
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          610
        ],
        "'ASSERTTRUE": [
          -1,
          610
        ],
        "'ASSERTFALSE": [
          -1,
          610
        ],
        "'ASSERTSATISFIES": [
          -1,
          610
        ],
        "'ASSERTRAISES": [
          -1,
          610
        ],
        "'IS": [
          -1,
          610
        ],
        "'ISNOT": [
          -1,
          610
        ],
        "'SATISFIES": [
          -1,
          610
        ],
        "'RAISES": [
          -1,
          610
        ],
        "'SWITCH": [
          -1,
          610
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
          610
        ],
        "'PLUS": [
          -1,
          610
        ],
        "'DASH": [
          -1,
          610
        ],
        "'TIMES": [
          -1,
          610
        ],
        "'SLASH": [
          -1,
          610
        ],
        "'PERCENT": [
          -1,
          610
        ],
        "'EQUALEQUAL": [
          -1,
          610
        ],
        "'NEQ": [
          -1,
          610
        ],
        "'LEQ": [
          -1,
          610
        ],
        "'GEQ": [
          -1,
          610
        ],
        "'AND": [
          -1,
          610
        ],
        "'OR": [
          -1,
          610
        ],
        "'BANG": [
          -1,
          610
        ],
        "'DOT": [
          -1,
          610
        ],
        "'LBRACK": [
          -1,
          610
        ],
        "'RBRACK": [
          -1,
          610
        ],
        "'NUMBER": [
          -1,
          610
        ],
        "'TRUE": [
          -1,
          610
        ],
        "'FALSE": [
          -1,
          610
        ],
        "'NULL": [
          -1,
          610
        ],
        "'PARENAFTERBRACE": [
          -1,
          610
        ],
        "'SIEVE": [
          -1,
          610
        ],
        "'USING": [
          -1,
          610
        ],
        "'BLOCK": [
          -1,
          610
        ],
        "'TABLE": [
          -1,
          610
        ],
        "'ASK": [
          -1,
          610
        ],
        "'NEW": [
          -1,
          610
        ]
      },
      {
        "'SEMI": [
          -1,
          612
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          492
        ],
        "block-stmt": [
          493
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          218
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "where-clause_I2": [
          494
        ],
        "assert-stmt": [
          495
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          223
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "'ASSERTEQUALS": [
          227
        ],
        "'ASSERTNOTEQUALS": [
          228
        ],
        "'ASSERTTRUE": [
          229
        ],
        "'ASSERTFALSE": [
          230
        ],
        "'ASSERTSATISFIES": [
          231
        ],
        "'ASSERTRAISES": [
          232
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'RPAREN": [
          -1,
          614
        ],
        "'COMMA": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          616
        ],
        "'BLOCK": [
          -1,
          616
        ],
        "'TABLE": [
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
        "'RPAREN": [
          -1,
          618
        ],
        "'COMMA": [
          -1,
          618
        ]
      },
      {
        "if-stmt_I6?": [
          496
        ],
        "if-stmt_I5": [
          497
        ],
        "'ELSE": [
          498
        ],
        "if-stmt_I6": [
          499
        ],
        "'NAME": [
          -1,
          620,
          622
        ],
        "'PARENNOSPACE": [
          -1,
          620,
          622
        ],
        "'STRING": [
          -1,
          620,
          622
        ],
        "'LBRACE": [
          -1,
          620,
          622
        ],
        "'RBRACE": [
          -1,
          620,
          622
        ],
        "'SPY": [
          -1,
          620,
          622
        ],
        "'PARENSPACE": [
          -1,
          620,
          622
        ],
        "'INT": [
          -1,
          620,
          622
        ],
        "'LONG": [
          -1,
          620,
          622
        ],
        "'DOUBLE": [
          -1,
          620,
          622
        ],
        "'FLOAT": [
          -1,
          620,
          622
        ],
        "'BOOLEAN": [
          -1,
          620,
          622
        ],
        "'VOID": [
          -1,
          620,
          622
        ],
        "'DATA": [
          -1,
          620,
          622
        ],
        "'IF": [
          -1,
          620,
          622
        ],
        "'FOR": [
          -1,
          620,
          622
        ],
        "'RETURN": [
          -1,
          620,
          622
        ],
        "'VAR": [
          -1,
          620,
          622
        ],
        "'REC": [
          -1,
          620,
          622
        ],
        "'ATCHECK": [
          -1,
          620,
          622
        ],
        "'ASSERTEQUALS": [
          -1,
          620,
          622
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          620,
          622
        ],
        "'ASSERTTRUE": [
          -1,
          620,
          622
        ],
        "'ASSERTFALSE": [
          -1,
          620,
          622
        ],
        "'ASSERTSATISFIES": [
          -1,
          620,
          622
        ],
        "'ASSERTRAISES": [
          -1,
          620,
          622
        ],
        "'SWITCH": [
          -1,
          620,
          622
        ],
        "'YIELD": [
          -1,
          620,
          622
        ],
        "'DASH": [
          -1,
          620,
          622
        ],
        "'BANG": [
          -1,
          620,
          622
        ],
        "'LBRACK": [
          -1,
          620,
          622
        ],
        "'NUMBER": [
          -1,
          620,
          622
        ],
        "'TRUE": [
          -1,
          620,
          622
        ],
        "'FALSE": [
          -1,
          620,
          622
        ],
        "'NULL": [
          -1,
          620,
          622
        ],
        "'PARENAFTERBRACE": [
          -1,
          620,
          622
        ],
        "'SIEVE": [
          -1,
          620,
          622
        ],
        "'BLOCK": [
          -1,
          620,
          622
        ],
        "'TABLE": [
          -1,
          620,
          622
        ],
        "'ASK": [
          -1,
          620,
          622
        ],
        "'NEW": [
          -1,
          620,
          622
        ]
      },
      {
        "'RPAREN": [
          500
        ]
      },
      {
        "'SEMI": [
          501
        ],
        "assert-stmt_A0_I6?": [
          502
        ],
        "assert-stmt_A0_I6": [
          503
        ],
        "'NAME": [
          -1,
          624,
          626
        ],
        "'PARENNOSPACE": [
          -1,
          624,
          626
        ],
        "'STRING": [
          -1,
          624,
          626
        ],
        "'LBRACE": [
          -1,
          624,
          626
        ],
        "'RBRACE": [
          -1,
          624,
          626
        ],
        "'SPY": [
          -1,
          624,
          626
        ],
        "'PARENSPACE": [
          -1,
          624,
          626
        ],
        "'INT": [
          -1,
          624,
          626
        ],
        "'LONG": [
          -1,
          624,
          626
        ],
        "'DOUBLE": [
          -1,
          624,
          626
        ],
        "'FLOAT": [
          -1,
          624,
          626
        ],
        "'BOOLEAN": [
          -1,
          624,
          626
        ],
        "'VOID": [
          -1,
          624,
          626
        ],
        "'DATA": [
          -1,
          624,
          626
        ],
        "'IF": [
          -1,
          624,
          626
        ],
        "'FOR": [
          -1,
          624,
          626
        ],
        "'RETURN": [
          -1,
          624,
          626
        ],
        "'VAR": [
          -1,
          624,
          626
        ],
        "'REC": [
          -1,
          624,
          626
        ],
        "'ATCHECK": [
          -1,
          624,
          626
        ],
        "'ASSERTEQUALS": [
          -1,
          624,
          626
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          624,
          626
        ],
        "'ASSERTTRUE": [
          -1,
          624,
          626
        ],
        "'ASSERTFALSE": [
          -1,
          624,
          626
        ],
        "'ASSERTSATISFIES": [
          -1,
          624,
          626
        ],
        "'ASSERTRAISES": [
          -1,
          624,
          626
        ],
        "'SWITCH": [
          -1,
          624,
          626
        ],
        "'YIELD": [
          -1,
          624,
          626
        ],
        "'DASH": [
          -1,
          624,
          626
        ],
        "'BANG": [
          -1,
          624,
          626
        ],
        "'LBRACK": [
          -1,
          624,
          626
        ],
        "'NUMBER": [
          -1,
          624,
          626
        ],
        "'TRUE": [
          -1,
          624,
          626
        ],
        "'FALSE": [
          -1,
          624,
          626
        ],
        "'NULL": [
          -1,
          624,
          626
        ],
        "'PARENAFTERBRACE": [
          -1,
          624,
          626
        ],
        "'SIEVE": [
          -1,
          624,
          626
        ],
        "'BLOCK": [
          -1,
          624,
          626
        ],
        "'TABLE": [
          -1,
          624,
          626
        ],
        "'ASK": [
          -1,
          624,
          626
        ],
        "'NEW": [
          -1,
          624,
          626
        ]
      },
      {
        "'SEMI": [
          504
        ],
        "assert-stmt_A1_I6?": [
          505
        ],
        "assert-stmt_A1_I6": [
          506
        ],
        "'NAME": [
          -1,
          628,
          630
        ],
        "'PARENNOSPACE": [
          -1,
          628,
          630
        ],
        "'STRING": [
          -1,
          628,
          630
        ],
        "'LBRACE": [
          -1,
          628,
          630
        ],
        "'RBRACE": [
          -1,
          628,
          630
        ],
        "'SPY": [
          -1,
          628,
          630
        ],
        "'PARENSPACE": [
          -1,
          628,
          630
        ],
        "'INT": [
          -1,
          628,
          630
        ],
        "'LONG": [
          -1,
          628,
          630
        ],
        "'DOUBLE": [
          -1,
          628,
          630
        ],
        "'FLOAT": [
          -1,
          628,
          630
        ],
        "'BOOLEAN": [
          -1,
          628,
          630
        ],
        "'VOID": [
          -1,
          628,
          630
        ],
        "'DATA": [
          -1,
          628,
          630
        ],
        "'IF": [
          -1,
          628,
          630
        ],
        "'FOR": [
          -1,
          628,
          630
        ],
        "'RETURN": [
          -1,
          628,
          630
        ],
        "'VAR": [
          -1,
          628,
          630
        ],
        "'REC": [
          -1,
          628,
          630
        ],
        "'ATCHECK": [
          -1,
          628,
          630
        ],
        "'ASSERTEQUALS": [
          -1,
          628,
          630
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          628,
          630
        ],
        "'ASSERTTRUE": [
          -1,
          628,
          630
        ],
        "'ASSERTFALSE": [
          -1,
          628,
          630
        ],
        "'ASSERTSATISFIES": [
          -1,
          628,
          630
        ],
        "'ASSERTRAISES": [
          -1,
          628,
          630
        ],
        "'SWITCH": [
          -1,
          628,
          630
        ],
        "'YIELD": [
          -1,
          628,
          630
        ],
        "'DASH": [
          -1,
          628,
          630
        ],
        "'BANG": [
          -1,
          628,
          630
        ],
        "'LBRACK": [
          -1,
          628,
          630
        ],
        "'NUMBER": [
          -1,
          628,
          630
        ],
        "'TRUE": [
          -1,
          628,
          630
        ],
        "'FALSE": [
          -1,
          628,
          630
        ],
        "'NULL": [
          -1,
          628,
          630
        ],
        "'PARENAFTERBRACE": [
          -1,
          628,
          630
        ],
        "'SIEVE": [
          -1,
          628,
          630
        ],
        "'BLOCK": [
          -1,
          628,
          630
        ],
        "'TABLE": [
          -1,
          628,
          630
        ],
        "'ASK": [
          -1,
          628,
          630
        ],
        "'NEW": [
          -1,
          628,
          630
        ]
      },
      {
        "'SEMI": [
          507
        ],
        "assert-stmt_A4_I6?": [
          508
        ],
        "assert-stmt_A4_I6": [
          509
        ],
        "'NAME": [
          -1,
          632,
          634
        ],
        "'PARENNOSPACE": [
          -1,
          632,
          634
        ],
        "'STRING": [
          -1,
          632,
          634
        ],
        "'LBRACE": [
          -1,
          632,
          634
        ],
        "'RBRACE": [
          -1,
          632,
          634
        ],
        "'SPY": [
          -1,
          632,
          634
        ],
        "'PARENSPACE": [
          -1,
          632,
          634
        ],
        "'INT": [
          -1,
          632,
          634
        ],
        "'LONG": [
          -1,
          632,
          634
        ],
        "'DOUBLE": [
          -1,
          632,
          634
        ],
        "'FLOAT": [
          -1,
          632,
          634
        ],
        "'BOOLEAN": [
          -1,
          632,
          634
        ],
        "'VOID": [
          -1,
          632,
          634
        ],
        "'DATA": [
          -1,
          632,
          634
        ],
        "'IF": [
          -1,
          632,
          634
        ],
        "'FOR": [
          -1,
          632,
          634
        ],
        "'RETURN": [
          -1,
          632,
          634
        ],
        "'VAR": [
          -1,
          632,
          634
        ],
        "'REC": [
          -1,
          632,
          634
        ],
        "'ATCHECK": [
          -1,
          632,
          634
        ],
        "'ASSERTEQUALS": [
          -1,
          632,
          634
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          632,
          634
        ],
        "'ASSERTTRUE": [
          -1,
          632,
          634
        ],
        "'ASSERTFALSE": [
          -1,
          632,
          634
        ],
        "'ASSERTSATISFIES": [
          -1,
          632,
          634
        ],
        "'ASSERTRAISES": [
          -1,
          632,
          634
        ],
        "'SWITCH": [
          -1,
          632,
          634
        ],
        "'YIELD": [
          -1,
          632,
          634
        ],
        "'DASH": [
          -1,
          632,
          634
        ],
        "'BANG": [
          -1,
          632,
          634
        ],
        "'LBRACK": [
          -1,
          632,
          634
        ],
        "'NUMBER": [
          -1,
          632,
          634
        ],
        "'TRUE": [
          -1,
          632,
          634
        ],
        "'FALSE": [
          -1,
          632,
          634
        ],
        "'NULL": [
          -1,
          632,
          634
        ],
        "'PARENAFTERBRACE": [
          -1,
          632,
          634
        ],
        "'SIEVE": [
          -1,
          632,
          634
        ],
        "'BLOCK": [
          -1,
          632,
          634
        ],
        "'TABLE": [
          -1,
          632,
          634
        ],
        "'ASK": [
          -1,
          632,
          634
        ],
        "'NEW": [
          -1,
          632,
          634
        ]
      },
      {
        "'SEMI": [
          510
        ],
        "assert-stmt_A5_I6?": [
          511
        ],
        "assert-stmt_A5_I6": [
          512
        ],
        "'NAME": [
          -1,
          636,
          638
        ],
        "'PARENNOSPACE": [
          -1,
          636,
          638
        ],
        "'STRING": [
          -1,
          636,
          638
        ],
        "'LBRACE": [
          -1,
          636,
          638
        ],
        "'RBRACE": [
          -1,
          636,
          638
        ],
        "'SPY": [
          -1,
          636,
          638
        ],
        "'PARENSPACE": [
          -1,
          636,
          638
        ],
        "'INT": [
          -1,
          636,
          638
        ],
        "'LONG": [
          -1,
          636,
          638
        ],
        "'DOUBLE": [
          -1,
          636,
          638
        ],
        "'FLOAT": [
          -1,
          636,
          638
        ],
        "'BOOLEAN": [
          -1,
          636,
          638
        ],
        "'VOID": [
          -1,
          636,
          638
        ],
        "'DATA": [
          -1,
          636,
          638
        ],
        "'IF": [
          -1,
          636,
          638
        ],
        "'FOR": [
          -1,
          636,
          638
        ],
        "'RETURN": [
          -1,
          636,
          638
        ],
        "'VAR": [
          -1,
          636,
          638
        ],
        "'REC": [
          -1,
          636,
          638
        ],
        "'ATCHECK": [
          -1,
          636,
          638
        ],
        "'ASSERTEQUALS": [
          -1,
          636,
          638
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          636,
          638
        ],
        "'ASSERTTRUE": [
          -1,
          636,
          638
        ],
        "'ASSERTFALSE": [
          -1,
          636,
          638
        ],
        "'ASSERTSATISFIES": [
          -1,
          636,
          638
        ],
        "'ASSERTRAISES": [
          -1,
          636,
          638
        ],
        "'SWITCH": [
          -1,
          636,
          638
        ],
        "'YIELD": [
          -1,
          636,
          638
        ],
        "'DASH": [
          -1,
          636,
          638
        ],
        "'BANG": [
          -1,
          636,
          638
        ],
        "'LBRACK": [
          -1,
          636,
          638
        ],
        "'NUMBER": [
          -1,
          636,
          638
        ],
        "'TRUE": [
          -1,
          636,
          638
        ],
        "'FALSE": [
          -1,
          636,
          638
        ],
        "'NULL": [
          -1,
          636,
          638
        ],
        "'PARENAFTERBRACE": [
          -1,
          636,
          638
        ],
        "'SIEVE": [
          -1,
          636,
          638
        ],
        "'BLOCK": [
          -1,
          636,
          638
        ],
        "'TABLE": [
          -1,
          636,
          638
        ],
        "'ASK": [
          -1,
          636,
          638
        ],
        "'NEW": [
          -1,
          636,
          638
        ]
      },
      {
        "'NAME": [
          513
        ],
        "case-branch_A0_I3?": [
          514
        ],
        "case-branch_A0_I3": [
          515
        ],
        "'RPAREN": [
          -1,
          640
        ]
      },
      {
        "switch-body": [
          516
        ],
        "switch-body_I0*": [
          488
        ],
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          594
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          594
        ],
        "'BLOCK": [
          -1,
          594
        ],
        "'TABLE": [
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
        "'RBRACE": [
          -1,
          642
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
          205
        ],
        "data-decl": [
          206
        ],
        "check-block": [
          207
        ],
        "let-stmt": [
          208
        ],
        "var-stmt": [
          209
        ],
        "rec-stmt": [
          210
        ],
        "assign-stmt": [
          211
        ],
        "expr-stmt": [
          212
        ],
        "'LBRACE": [
          23
        ],
        "block-stmt": [
          517
        ],
        "if-stmt": [
          215
        ],
        "for-stmt": [
          216
        ],
        "return-stmt": [
          217
        ],
        "yield-stmt": [
          518
        ],
        "spy-stmt": [
          219
        ],
        "'SPY": [
          220
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          222
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          224
        ],
        "'RETURN": [
          225
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "switch-body_I0": [
          519
        ],
        "'YIELD": [
          233
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "$": [
          -1,
          644
        ],
        "'NAME": [
          -1,
          644
        ],
        "'SEMI": [
          -1,
          644
        ],
        "'PARENNOSPACE": [
          -1,
          644
        ],
        "'STRING": [
          -1,
          644
        ],
        "'RPAREN": [
          -1,
          644
        ],
        "'LBRACE": [
          -1,
          644
        ],
        "'RBRACE": [
          -1,
          644
        ],
        "'SPY": [
          -1,
          644
        ],
        "'PARENSPACE": [
          -1,
          644
        ],
        "'COMMA": [
          -1,
          644
        ],
        "'INT": [
          -1,
          644
        ],
        "'LONG": [
          -1,
          644
        ],
        "'DOUBLE": [
          -1,
          644
        ],
        "'FLOAT": [
          -1,
          644
        ],
        "'BOOLEAN": [
          -1,
          644
        ],
        "'VOID": [
          -1,
          644
        ],
        "'LT": [
          -1,
          644
        ],
        "'GT": [
          -1,
          644
        ],
        "'THINARROW": [
          -1,
          644
        ],
        "'DATA": [
          -1,
          644
        ],
        "'IF": [
          -1,
          644
        ],
        "'FOR": [
          -1,
          644
        ],
        "'RETURN": [
          -1,
          644
        ],
        "'VAR": [
          -1,
          644
        ],
        "'REC": [
          -1,
          644
        ],
        "'ATCHECK": [
          -1,
          644
        ],
        "'ASSERTEQUALS": [
          -1,
          644
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          644
        ],
        "'ASSERTTRUE": [
          -1,
          644
        ],
        "'ASSERTFALSE": [
          -1,
          644
        ],
        "'ASSERTSATISFIES": [
          -1,
          644
        ],
        "'ASSERTRAISES": [
          -1,
          644
        ],
        "'IS": [
          -1,
          644
        ],
        "'ISNOT": [
          -1,
          644
        ],
        "'SATISFIES": [
          -1,
          644
        ],
        "'RAISES": [
          -1,
          644
        ],
        "'SWITCH": [
          -1,
          644
        ],
        "'CASE": [
          -1,
          644
        ],
        "'DEFAULT": [
          -1,
          644
        ],
        "'YIELD": [
          -1,
          644
        ],
        "'PLUS": [
          -1,
          644
        ],
        "'DASH": [
          -1,
          644
        ],
        "'TIMES": [
          -1,
          644
        ],
        "'SLASH": [
          -1,
          644
        ],
        "'PERCENT": [
          -1,
          644
        ],
        "'EQUALEQUAL": [
          -1,
          644
        ],
        "'NEQ": [
          -1,
          644
        ],
        "'LEQ": [
          -1,
          644
        ],
        "'GEQ": [
          -1,
          644
        ],
        "'AND": [
          -1,
          644
        ],
        "'OR": [
          -1,
          644
        ],
        "'BANG": [
          -1,
          644
        ],
        "'DOT": [
          -1,
          644
        ],
        "'LBRACK": [
          -1,
          644
        ],
        "'RBRACK": [
          -1,
          644
        ],
        "'NUMBER": [
          -1,
          644
        ],
        "'TRUE": [
          -1,
          644
        ],
        "'FALSE": [
          -1,
          644
        ],
        "'NULL": [
          -1,
          644
        ],
        "'PARENAFTERBRACE": [
          -1,
          644
        ],
        "'SIEVE": [
          -1,
          644
        ],
        "'USING": [
          -1,
          644
        ],
        "'BLOCK": [
          -1,
          644
        ],
        "'TABLE": [
          -1,
          644
        ],
        "'ASK": [
          -1,
          644
        ],
        "'NEW": [
          -1,
          644
        ]
      },
      {
        "'RBRACK": [
          520
        ]
      },
      {
        "table-row_I3*": [
          521
        ],
        "'SEMI": [
          -1,
          646,
          648
        ],
        "'COMMA": [
          -1,
          648
        ]
      },
      {
        "$": [
          -1,
          650
        ],
        "'NAME": [
          -1,
          650
        ],
        "'PARENNOSPACE": [
          -1,
          650
        ],
        "'STRING": [
          -1,
          650
        ],
        "'LBRACE": [
          -1,
          650
        ],
        "'RBRACE": [
          -1,
          650
        ],
        "'SPY": [
          -1,
          650
        ],
        "'PARENSPACE": [
          -1,
          650
        ],
        "'INT": [
          -1,
          650
        ],
        "'LONG": [
          -1,
          650
        ],
        "'DOUBLE": [
          -1,
          650
        ],
        "'FLOAT": [
          -1,
          650
        ],
        "'BOOLEAN": [
          -1,
          650
        ],
        "'VOID": [
          -1,
          650
        ],
        "'DATA": [
          -1,
          650
        ],
        "'IF": [
          -1,
          650
        ],
        "'FOR": [
          -1,
          650
        ],
        "'RETURN": [
          -1,
          650
        ],
        "'VAR": [
          -1,
          650
        ],
        "'REC": [
          -1,
          650
        ],
        "'ATCHECK": [
          -1,
          650
        ],
        "'ASSERTEQUALS": [
          -1,
          650
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          650
        ],
        "'ASSERTTRUE": [
          -1,
          650
        ],
        "'ASSERTFALSE": [
          -1,
          650
        ],
        "'ASSERTSATISFIES": [
          -1,
          650
        ],
        "'ASSERTRAISES": [
          -1,
          650
        ],
        "'SWITCH": [
          -1,
          650
        ],
        "'YIELD": [
          -1,
          650
        ],
        "'DASH": [
          -1,
          650
        ],
        "'BANG": [
          -1,
          650
        ],
        "'LBRACK": [
          -1,
          650
        ],
        "'NUMBER": [
          -1,
          650
        ],
        "'TRUE": [
          -1,
          650
        ],
        "'FALSE": [
          -1,
          650
        ],
        "'NULL": [
          -1,
          650
        ],
        "'PARENAFTERBRACE": [
          -1,
          650
        ],
        "'SIEVE": [
          -1,
          650
        ],
        "'BLOCK": [
          -1,
          650
        ],
        "'TABLE": [
          -1,
          650
        ],
        "'ASK": [
          -1,
          650
        ],
        "'NEW": [
          -1,
          650
        ]
      },
      {
        "'NAME": [
          -1,
          652
        ],
        "'PARENNOSPACE": [
          -1,
          652
        ],
        "'STRING": [
          -1,
          652
        ],
        "'LBRACE": [
          -1,
          652
        ],
        "'RBRACE": [
          -1,
          652
        ],
        "'SPY": [
          -1,
          652
        ],
        "'PARENSPACE": [
          -1,
          652
        ],
        "'INT": [
          -1,
          652
        ],
        "'LONG": [
          -1,
          652
        ],
        "'DOUBLE": [
          -1,
          652
        ],
        "'FLOAT": [
          -1,
          652
        ],
        "'BOOLEAN": [
          -1,
          652
        ],
        "'VOID": [
          -1,
          652
        ],
        "'DATA": [
          -1,
          652
        ],
        "'IF": [
          -1,
          652
        ],
        "'FOR": [
          -1,
          652
        ],
        "'RETURN": [
          -1,
          652
        ],
        "'VAR": [
          -1,
          652
        ],
        "'REC": [
          -1,
          652
        ],
        "'ATCHECK": [
          -1,
          652
        ],
        "'ASSERTEQUALS": [
          -1,
          652
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          652
        ],
        "'ASSERTTRUE": [
          -1,
          652
        ],
        "'ASSERTFALSE": [
          -1,
          652
        ],
        "'ASSERTSATISFIES": [
          -1,
          652
        ],
        "'ASSERTRAISES": [
          -1,
          652
        ],
        "'SWITCH": [
          -1,
          652
        ],
        "'YIELD": [
          -1,
          652
        ],
        "'DASH": [
          -1,
          652
        ],
        "'BANG": [
          -1,
          652
        ],
        "'LBRACK": [
          -1,
          652
        ],
        "'NUMBER": [
          -1,
          652
        ],
        "'TRUE": [
          -1,
          652
        ],
        "'FALSE": [
          -1,
          652
        ],
        "'NULL": [
          -1,
          652
        ],
        "'PARENAFTERBRACE": [
          -1,
          652
        ],
        "'SIEVE": [
          -1,
          652
        ],
        "'BLOCK": [
          -1,
          652
        ],
        "'TABLE": [
          -1,
          652
        ],
        "'ASK": [
          -1,
          652
        ],
        "'NEW": [
          -1,
          652
        ]
      },
      {
        "'NAME": [
          -1,
          654
        ],
        "'PARENNOSPACE": [
          -1,
          654
        ],
        "'STRING": [
          -1,
          654
        ],
        "'LBRACE": [
          -1,
          654
        ],
        "'RBRACE": [
          -1,
          654
        ],
        "'SPY": [
          -1,
          654
        ],
        "'PARENSPACE": [
          -1,
          654
        ],
        "'INT": [
          -1,
          654
        ],
        "'LONG": [
          -1,
          654
        ],
        "'DOUBLE": [
          -1,
          654
        ],
        "'FLOAT": [
          -1,
          654
        ],
        "'BOOLEAN": [
          -1,
          654
        ],
        "'VOID": [
          -1,
          654
        ],
        "'DATA": [
          -1,
          654
        ],
        "'IF": [
          -1,
          654
        ],
        "'FOR": [
          -1,
          654
        ],
        "'RETURN": [
          -1,
          654
        ],
        "'VAR": [
          -1,
          654
        ],
        "'REC": [
          -1,
          654
        ],
        "'ATCHECK": [
          -1,
          654
        ],
        "'ASSERTEQUALS": [
          -1,
          654
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          654
        ],
        "'ASSERTTRUE": [
          -1,
          654
        ],
        "'ASSERTFALSE": [
          -1,
          654
        ],
        "'ASSERTSATISFIES": [
          -1,
          654
        ],
        "'ASSERTRAISES": [
          -1,
          654
        ],
        "'SWITCH": [
          -1,
          654
        ],
        "'YIELD": [
          -1,
          654
        ],
        "'DASH": [
          -1,
          654
        ],
        "'BANG": [
          -1,
          654
        ],
        "'LBRACK": [
          -1,
          654
        ],
        "'NUMBER": [
          -1,
          654
        ],
        "'TRUE": [
          -1,
          654
        ],
        "'FALSE": [
          -1,
          654
        ],
        "'NULL": [
          -1,
          654
        ],
        "'PARENAFTERBRACE": [
          -1,
          654
        ],
        "'SIEVE": [
          -1,
          654
        ],
        "'BLOCK": [
          -1,
          654
        ],
        "'TABLE": [
          -1,
          654
        ],
        "'ASK": [
          -1,
          654
        ],
        "'NEW": [
          -1,
          654
        ]
      },
      {
        "'NAME": [
          -1,
          656
        ],
        "'PARENNOSPACE": [
          -1,
          656
        ],
        "'STRING": [
          -1,
          656
        ],
        "'LBRACE": [
          -1,
          656
        ],
        "'RBRACE": [
          -1,
          656
        ],
        "'SPY": [
          -1,
          656
        ],
        "'PARENSPACE": [
          -1,
          656
        ],
        "'INT": [
          -1,
          656
        ],
        "'LONG": [
          -1,
          656
        ],
        "'DOUBLE": [
          -1,
          656
        ],
        "'FLOAT": [
          -1,
          656
        ],
        "'BOOLEAN": [
          -1,
          656
        ],
        "'VOID": [
          -1,
          656
        ],
        "'DATA": [
          -1,
          656
        ],
        "'IF": [
          -1,
          656
        ],
        "'FOR": [
          -1,
          656
        ],
        "'RETURN": [
          -1,
          656
        ],
        "'VAR": [
          -1,
          656
        ],
        "'REC": [
          -1,
          656
        ],
        "'ATCHECK": [
          -1,
          656
        ],
        "'ASSERTEQUALS": [
          -1,
          656
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          656
        ],
        "'ASSERTTRUE": [
          -1,
          656
        ],
        "'ASSERTFALSE": [
          -1,
          656
        ],
        "'ASSERTSATISFIES": [
          -1,
          656
        ],
        "'ASSERTRAISES": [
          -1,
          656
        ],
        "'SWITCH": [
          -1,
          656
        ],
        "'YIELD": [
          -1,
          656
        ],
        "'DASH": [
          -1,
          656
        ],
        "'BANG": [
          -1,
          656
        ],
        "'LBRACK": [
          -1,
          656
        ],
        "'NUMBER": [
          -1,
          656
        ],
        "'TRUE": [
          -1,
          656
        ],
        "'FALSE": [
          -1,
          656
        ],
        "'NULL": [
          -1,
          656
        ],
        "'PARENAFTERBRACE": [
          -1,
          656
        ],
        "'SIEVE": [
          -1,
          656
        ],
        "'BLOCK": [
          -1,
          656
        ],
        "'TABLE": [
          -1,
          656
        ],
        "'ASK": [
          -1,
          656
        ],
        "'NEW": [
          -1,
          656
        ]
      },
      {
        "'NAME": [
          -1,
          658
        ],
        "'PARENNOSPACE": [
          -1,
          658
        ],
        "'STRING": [
          -1,
          658
        ],
        "'LBRACE": [
          -1,
          658
        ],
        "'RBRACE": [
          -1,
          658
        ],
        "'SPY": [
          -1,
          658
        ],
        "'PARENSPACE": [
          -1,
          658
        ],
        "'INT": [
          -1,
          658
        ],
        "'LONG": [
          -1,
          658
        ],
        "'DOUBLE": [
          -1,
          658
        ],
        "'FLOAT": [
          -1,
          658
        ],
        "'BOOLEAN": [
          -1,
          658
        ],
        "'VOID": [
          -1,
          658
        ],
        "'DATA": [
          -1,
          658
        ],
        "'IF": [
          -1,
          658
        ],
        "'FOR": [
          -1,
          658
        ],
        "'RETURN": [
          -1,
          658
        ],
        "'VAR": [
          -1,
          658
        ],
        "'REC": [
          -1,
          658
        ],
        "'ATCHECK": [
          -1,
          658
        ],
        "'ASSERTEQUALS": [
          -1,
          658
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          658
        ],
        "'ASSERTTRUE": [
          -1,
          658
        ],
        "'ASSERTFALSE": [
          -1,
          658
        ],
        "'ASSERTSATISFIES": [
          -1,
          658
        ],
        "'ASSERTRAISES": [
          -1,
          658
        ],
        "'SWITCH": [
          -1,
          658
        ],
        "'YIELD": [
          -1,
          658
        ],
        "'DASH": [
          -1,
          658
        ],
        "'BANG": [
          -1,
          658
        ],
        "'LBRACK": [
          -1,
          658
        ],
        "'NUMBER": [
          -1,
          658
        ],
        "'TRUE": [
          -1,
          658
        ],
        "'FALSE": [
          -1,
          658
        ],
        "'NULL": [
          -1,
          658
        ],
        "'PARENAFTERBRACE": [
          -1,
          658
        ],
        "'SIEVE": [
          -1,
          658
        ],
        "'BLOCK": [
          -1,
          658
        ],
        "'TABLE": [
          -1,
          658
        ],
        "'ASK": [
          -1,
          658
        ],
        "'NEW": [
          -1,
          658
        ]
      },
      {
        "'NAME": [
          -1,
          660
        ],
        "'PARENNOSPACE": [
          -1,
          660
        ],
        "'STRING": [
          -1,
          660
        ],
        "'LBRACE": [
          -1,
          660
        ],
        "'RBRACE": [
          -1,
          660
        ],
        "'SPY": [
          -1,
          660
        ],
        "'PARENSPACE": [
          -1,
          660
        ],
        "'INT": [
          -1,
          660
        ],
        "'LONG": [
          -1,
          660
        ],
        "'DOUBLE": [
          -1,
          660
        ],
        "'FLOAT": [
          -1,
          660
        ],
        "'BOOLEAN": [
          -1,
          660
        ],
        "'VOID": [
          -1,
          660
        ],
        "'DATA": [
          -1,
          660
        ],
        "'IF": [
          -1,
          660
        ],
        "'ELSE": [
          -1,
          660
        ],
        "'FOR": [
          -1,
          660
        ],
        "'RETURN": [
          -1,
          660
        ],
        "'VAR": [
          -1,
          660
        ],
        "'REC": [
          -1,
          660
        ],
        "'ATCHECK": [
          -1,
          660
        ],
        "'ASSERTEQUALS": [
          -1,
          660
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          660
        ],
        "'ASSERTTRUE": [
          -1,
          660
        ],
        "'ASSERTFALSE": [
          -1,
          660
        ],
        "'ASSERTSATISFIES": [
          -1,
          660
        ],
        "'ASSERTRAISES": [
          -1,
          660
        ],
        "'SWITCH": [
          -1,
          660
        ],
        "'YIELD": [
          -1,
          660
        ],
        "'DASH": [
          -1,
          660
        ],
        "'BANG": [
          -1,
          660
        ],
        "'LBRACK": [
          -1,
          660
        ],
        "'NUMBER": [
          -1,
          660
        ],
        "'TRUE": [
          -1,
          660
        ],
        "'FALSE": [
          -1,
          660
        ],
        "'NULL": [
          -1,
          660
        ],
        "'PARENAFTERBRACE": [
          -1,
          660
        ],
        "'SIEVE": [
          -1,
          660
        ],
        "'BLOCK": [
          -1,
          660
        ],
        "'TABLE": [
          -1,
          660
        ],
        "'ASK": [
          -1,
          660
        ],
        "'NEW": [
          -1,
          660
        ]
      },
      {
        "block": [
          522
        ],
        "'LBRACE": [
          319
        ],
        "'IF": [
          523
        ]
      },
      {
        "'NAME": [
          -1,
          662
        ],
        "'PARENNOSPACE": [
          -1,
          662
        ],
        "'STRING": [
          -1,
          662
        ],
        "'LBRACE": [
          -1,
          662
        ],
        "'RBRACE": [
          -1,
          662
        ],
        "'SPY": [
          -1,
          662
        ],
        "'PARENSPACE": [
          -1,
          662
        ],
        "'INT": [
          -1,
          662
        ],
        "'LONG": [
          -1,
          662
        ],
        "'DOUBLE": [
          -1,
          662
        ],
        "'FLOAT": [
          -1,
          662
        ],
        "'BOOLEAN": [
          -1,
          662
        ],
        "'VOID": [
          -1,
          662
        ],
        "'DATA": [
          -1,
          662
        ],
        "'IF": [
          -1,
          662
        ],
        "'FOR": [
          -1,
          662
        ],
        "'RETURN": [
          -1,
          662
        ],
        "'VAR": [
          -1,
          662
        ],
        "'REC": [
          -1,
          662
        ],
        "'ATCHECK": [
          -1,
          662
        ],
        "'ASSERTEQUALS": [
          -1,
          662
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          662
        ],
        "'ASSERTTRUE": [
          -1,
          662
        ],
        "'ASSERTFALSE": [
          -1,
          662
        ],
        "'ASSERTSATISFIES": [
          -1,
          662
        ],
        "'ASSERTRAISES": [
          -1,
          662
        ],
        "'SWITCH": [
          -1,
          662
        ],
        "'YIELD": [
          -1,
          662
        ],
        "'DASH": [
          -1,
          662
        ],
        "'BANG": [
          -1,
          662
        ],
        "'LBRACK": [
          -1,
          662
        ],
        "'NUMBER": [
          -1,
          662
        ],
        "'TRUE": [
          -1,
          662
        ],
        "'FALSE": [
          -1,
          662
        ],
        "'NULL": [
          -1,
          662
        ],
        "'PARENAFTERBRACE": [
          -1,
          662
        ],
        "'SIEVE": [
          -1,
          662
        ],
        "'BLOCK": [
          -1,
          662
        ],
        "'TABLE": [
          -1,
          662
        ],
        "'ASK": [
          -1,
          662
        ],
        "'NEW": [
          -1,
          662
        ]
      },
      {
        "block": [
          524
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "'NAME": [
          -1,
          664
        ],
        "'PARENNOSPACE": [
          -1,
          664
        ],
        "'STRING": [
          -1,
          664
        ],
        "'LBRACE": [
          -1,
          664
        ],
        "'RBRACE": [
          -1,
          664
        ],
        "'SPY": [
          -1,
          664
        ],
        "'PARENSPACE": [
          -1,
          664
        ],
        "'INT": [
          -1,
          664
        ],
        "'LONG": [
          -1,
          664
        ],
        "'DOUBLE": [
          -1,
          664
        ],
        "'FLOAT": [
          -1,
          664
        ],
        "'BOOLEAN": [
          -1,
          664
        ],
        "'VOID": [
          -1,
          664
        ],
        "'DATA": [
          -1,
          664
        ],
        "'IF": [
          -1,
          664
        ],
        "'FOR": [
          -1,
          664
        ],
        "'RETURN": [
          -1,
          664
        ],
        "'VAR": [
          -1,
          664
        ],
        "'REC": [
          -1,
          664
        ],
        "'ATCHECK": [
          -1,
          664
        ],
        "'ASSERTEQUALS": [
          -1,
          664
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          664
        ],
        "'ASSERTTRUE": [
          -1,
          664
        ],
        "'ASSERTFALSE": [
          -1,
          664
        ],
        "'ASSERTSATISFIES": [
          -1,
          664
        ],
        "'ASSERTRAISES": [
          -1,
          664
        ],
        "'SWITCH": [
          -1,
          664
        ],
        "'YIELD": [
          -1,
          664
        ],
        "'DASH": [
          -1,
          664
        ],
        "'BANG": [
          -1,
          664
        ],
        "'LBRACK": [
          -1,
          664
        ],
        "'NUMBER": [
          -1,
          664
        ],
        "'TRUE": [
          -1,
          664
        ],
        "'FALSE": [
          -1,
          664
        ],
        "'NULL": [
          -1,
          664
        ],
        "'PARENAFTERBRACE": [
          -1,
          664
        ],
        "'SIEVE": [
          -1,
          664
        ],
        "'BLOCK": [
          -1,
          664
        ],
        "'TABLE": [
          -1,
          664
        ],
        "'ASK": [
          -1,
          664
        ],
        "'NEW": [
          -1,
          664
        ]
      },
      {
        "'NAME": [
          -1,
          666
        ],
        "'PARENNOSPACE": [
          -1,
          666
        ],
        "'STRING": [
          -1,
          666
        ],
        "'LBRACE": [
          -1,
          666
        ],
        "'RBRACE": [
          -1,
          666
        ],
        "'SPY": [
          -1,
          666
        ],
        "'PARENSPACE": [
          -1,
          666
        ],
        "'INT": [
          -1,
          666
        ],
        "'LONG": [
          -1,
          666
        ],
        "'DOUBLE": [
          -1,
          666
        ],
        "'FLOAT": [
          -1,
          666
        ],
        "'BOOLEAN": [
          -1,
          666
        ],
        "'VOID": [
          -1,
          666
        ],
        "'DATA": [
          -1,
          666
        ],
        "'IF": [
          -1,
          666
        ],
        "'FOR": [
          -1,
          666
        ],
        "'RETURN": [
          -1,
          666
        ],
        "'VAR": [
          -1,
          666
        ],
        "'REC": [
          -1,
          666
        ],
        "'ATCHECK": [
          -1,
          666
        ],
        "'ASSERTEQUALS": [
          -1,
          666
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          666
        ],
        "'ASSERTTRUE": [
          -1,
          666
        ],
        "'ASSERTFALSE": [
          -1,
          666
        ],
        "'ASSERTSATISFIES": [
          -1,
          666
        ],
        "'ASSERTRAISES": [
          -1,
          666
        ],
        "'SWITCH": [
          -1,
          666
        ],
        "'YIELD": [
          -1,
          666
        ],
        "'DASH": [
          -1,
          666
        ],
        "'BANG": [
          -1,
          666
        ],
        "'LBRACK": [
          -1,
          666
        ],
        "'NUMBER": [
          -1,
          666
        ],
        "'TRUE": [
          -1,
          666
        ],
        "'FALSE": [
          -1,
          666
        ],
        "'NULL": [
          -1,
          666
        ],
        "'PARENAFTERBRACE": [
          -1,
          666
        ],
        "'SIEVE": [
          -1,
          666
        ],
        "'BLOCK": [
          -1,
          666
        ],
        "'TABLE": [
          -1,
          666
        ],
        "'ASK": [
          -1,
          666
        ],
        "'NEW": [
          -1,
          666
        ]
      },
      {
        "'NAME": [
          -1,
          668
        ],
        "'PARENNOSPACE": [
          -1,
          668
        ],
        "'STRING": [
          -1,
          668
        ],
        "'LBRACE": [
          -1,
          668
        ],
        "'RBRACE": [
          -1,
          668
        ],
        "'SPY": [
          -1,
          668
        ],
        "'PARENSPACE": [
          -1,
          668
        ],
        "'INT": [
          -1,
          668
        ],
        "'LONG": [
          -1,
          668
        ],
        "'DOUBLE": [
          -1,
          668
        ],
        "'FLOAT": [
          -1,
          668
        ],
        "'BOOLEAN": [
          -1,
          668
        ],
        "'VOID": [
          -1,
          668
        ],
        "'DATA": [
          -1,
          668
        ],
        "'IF": [
          -1,
          668
        ],
        "'FOR": [
          -1,
          668
        ],
        "'RETURN": [
          -1,
          668
        ],
        "'VAR": [
          -1,
          668
        ],
        "'REC": [
          -1,
          668
        ],
        "'ATCHECK": [
          -1,
          668
        ],
        "'ASSERTEQUALS": [
          -1,
          668
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          668
        ],
        "'ASSERTTRUE": [
          -1,
          668
        ],
        "'ASSERTFALSE": [
          -1,
          668
        ],
        "'ASSERTSATISFIES": [
          -1,
          668
        ],
        "'ASSERTRAISES": [
          -1,
          668
        ],
        "'SWITCH": [
          -1,
          668
        ],
        "'YIELD": [
          -1,
          668
        ],
        "'DASH": [
          -1,
          668
        ],
        "'BANG": [
          -1,
          668
        ],
        "'LBRACK": [
          -1,
          668
        ],
        "'NUMBER": [
          -1,
          668
        ],
        "'TRUE": [
          -1,
          668
        ],
        "'FALSE": [
          -1,
          668
        ],
        "'NULL": [
          -1,
          668
        ],
        "'PARENAFTERBRACE": [
          -1,
          668
        ],
        "'SIEVE": [
          -1,
          668
        ],
        "'BLOCK": [
          -1,
          668
        ],
        "'TABLE": [
          -1,
          668
        ],
        "'ASK": [
          -1,
          668
        ],
        "'NEW": [
          -1,
          668
        ]
      },
      {
        "'NAME": [
          -1,
          670
        ],
        "'PARENNOSPACE": [
          -1,
          670
        ],
        "'STRING": [
          -1,
          670
        ],
        "'LBRACE": [
          -1,
          670
        ],
        "'RBRACE": [
          -1,
          670
        ],
        "'SPY": [
          -1,
          670
        ],
        "'PARENSPACE": [
          -1,
          670
        ],
        "'INT": [
          -1,
          670
        ],
        "'LONG": [
          -1,
          670
        ],
        "'DOUBLE": [
          -1,
          670
        ],
        "'FLOAT": [
          -1,
          670
        ],
        "'BOOLEAN": [
          -1,
          670
        ],
        "'VOID": [
          -1,
          670
        ],
        "'DATA": [
          -1,
          670
        ],
        "'IF": [
          -1,
          670
        ],
        "'FOR": [
          -1,
          670
        ],
        "'RETURN": [
          -1,
          670
        ],
        "'VAR": [
          -1,
          670
        ],
        "'REC": [
          -1,
          670
        ],
        "'ATCHECK": [
          -1,
          670
        ],
        "'ASSERTEQUALS": [
          -1,
          670
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          670
        ],
        "'ASSERTTRUE": [
          -1,
          670
        ],
        "'ASSERTFALSE": [
          -1,
          670
        ],
        "'ASSERTSATISFIES": [
          -1,
          670
        ],
        "'ASSERTRAISES": [
          -1,
          670
        ],
        "'SWITCH": [
          -1,
          670
        ],
        "'YIELD": [
          -1,
          670
        ],
        "'DASH": [
          -1,
          670
        ],
        "'BANG": [
          -1,
          670
        ],
        "'LBRACK": [
          -1,
          670
        ],
        "'NUMBER": [
          -1,
          670
        ],
        "'TRUE": [
          -1,
          670
        ],
        "'FALSE": [
          -1,
          670
        ],
        "'NULL": [
          -1,
          670
        ],
        "'PARENAFTERBRACE": [
          -1,
          670
        ],
        "'SIEVE": [
          -1,
          670
        ],
        "'BLOCK": [
          -1,
          670
        ],
        "'TABLE": [
          -1,
          670
        ],
        "'ASK": [
          -1,
          670
        ],
        "'NEW": [
          -1,
          670
        ]
      },
      {
        "'NAME": [
          -1,
          672
        ],
        "'PARENNOSPACE": [
          -1,
          672
        ],
        "'STRING": [
          -1,
          672
        ],
        "'LBRACE": [
          -1,
          672
        ],
        "'RBRACE": [
          -1,
          672
        ],
        "'SPY": [
          -1,
          672
        ],
        "'PARENSPACE": [
          -1,
          672
        ],
        "'INT": [
          -1,
          672
        ],
        "'LONG": [
          -1,
          672
        ],
        "'DOUBLE": [
          -1,
          672
        ],
        "'FLOAT": [
          -1,
          672
        ],
        "'BOOLEAN": [
          -1,
          672
        ],
        "'VOID": [
          -1,
          672
        ],
        "'DATA": [
          -1,
          672
        ],
        "'IF": [
          -1,
          672
        ],
        "'FOR": [
          -1,
          672
        ],
        "'RETURN": [
          -1,
          672
        ],
        "'VAR": [
          -1,
          672
        ],
        "'REC": [
          -1,
          672
        ],
        "'ATCHECK": [
          -1,
          672
        ],
        "'ASSERTEQUALS": [
          -1,
          672
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          672
        ],
        "'ASSERTTRUE": [
          -1,
          672
        ],
        "'ASSERTFALSE": [
          -1,
          672
        ],
        "'ASSERTSATISFIES": [
          -1,
          672
        ],
        "'ASSERTRAISES": [
          -1,
          672
        ],
        "'SWITCH": [
          -1,
          672
        ],
        "'YIELD": [
          -1,
          672
        ],
        "'DASH": [
          -1,
          672
        ],
        "'BANG": [
          -1,
          672
        ],
        "'LBRACK": [
          -1,
          672
        ],
        "'NUMBER": [
          -1,
          672
        ],
        "'TRUE": [
          -1,
          672
        ],
        "'FALSE": [
          -1,
          672
        ],
        "'NULL": [
          -1,
          672
        ],
        "'PARENAFTERBRACE": [
          -1,
          672
        ],
        "'SIEVE": [
          -1,
          672
        ],
        "'BLOCK": [
          -1,
          672
        ],
        "'TABLE": [
          -1,
          672
        ],
        "'ASK": [
          -1,
          672
        ],
        "'NEW": [
          -1,
          672
        ]
      },
      {
        "'NAME": [
          -1,
          674
        ],
        "'PARENNOSPACE": [
          -1,
          674
        ],
        "'STRING": [
          -1,
          674
        ],
        "'LBRACE": [
          -1,
          674
        ],
        "'RBRACE": [
          -1,
          674
        ],
        "'SPY": [
          -1,
          674
        ],
        "'PARENSPACE": [
          -1,
          674
        ],
        "'INT": [
          -1,
          674
        ],
        "'LONG": [
          -1,
          674
        ],
        "'DOUBLE": [
          -1,
          674
        ],
        "'FLOAT": [
          -1,
          674
        ],
        "'BOOLEAN": [
          -1,
          674
        ],
        "'VOID": [
          -1,
          674
        ],
        "'DATA": [
          -1,
          674
        ],
        "'IF": [
          -1,
          674
        ],
        "'FOR": [
          -1,
          674
        ],
        "'RETURN": [
          -1,
          674
        ],
        "'VAR": [
          -1,
          674
        ],
        "'REC": [
          -1,
          674
        ],
        "'ATCHECK": [
          -1,
          674
        ],
        "'ASSERTEQUALS": [
          -1,
          674
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          674
        ],
        "'ASSERTTRUE": [
          -1,
          674
        ],
        "'ASSERTFALSE": [
          -1,
          674
        ],
        "'ASSERTSATISFIES": [
          -1,
          674
        ],
        "'ASSERTRAISES": [
          -1,
          674
        ],
        "'SWITCH": [
          -1,
          674
        ],
        "'YIELD": [
          -1,
          674
        ],
        "'DASH": [
          -1,
          674
        ],
        "'BANG": [
          -1,
          674
        ],
        "'LBRACK": [
          -1,
          674
        ],
        "'NUMBER": [
          -1,
          674
        ],
        "'TRUE": [
          -1,
          674
        ],
        "'FALSE": [
          -1,
          674
        ],
        "'NULL": [
          -1,
          674
        ],
        "'PARENAFTERBRACE": [
          -1,
          674
        ],
        "'SIEVE": [
          -1,
          674
        ],
        "'BLOCK": [
          -1,
          674
        ],
        "'TABLE": [
          -1,
          674
        ],
        "'ASK": [
          -1,
          674
        ],
        "'NEW": [
          -1,
          674
        ]
      },
      {
        "'NAME": [
          -1,
          676
        ],
        "'PARENNOSPACE": [
          -1,
          676
        ],
        "'STRING": [
          -1,
          676
        ],
        "'LBRACE": [
          -1,
          676
        ],
        "'RBRACE": [
          -1,
          676
        ],
        "'SPY": [
          -1,
          676
        ],
        "'PARENSPACE": [
          -1,
          676
        ],
        "'INT": [
          -1,
          676
        ],
        "'LONG": [
          -1,
          676
        ],
        "'DOUBLE": [
          -1,
          676
        ],
        "'FLOAT": [
          -1,
          676
        ],
        "'BOOLEAN": [
          -1,
          676
        ],
        "'VOID": [
          -1,
          676
        ],
        "'DATA": [
          -1,
          676
        ],
        "'IF": [
          -1,
          676
        ],
        "'FOR": [
          -1,
          676
        ],
        "'RETURN": [
          -1,
          676
        ],
        "'VAR": [
          -1,
          676
        ],
        "'REC": [
          -1,
          676
        ],
        "'ATCHECK": [
          -1,
          676
        ],
        "'ASSERTEQUALS": [
          -1,
          676
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          676
        ],
        "'ASSERTTRUE": [
          -1,
          676
        ],
        "'ASSERTFALSE": [
          -1,
          676
        ],
        "'ASSERTSATISFIES": [
          -1,
          676
        ],
        "'ASSERTRAISES": [
          -1,
          676
        ],
        "'SWITCH": [
          -1,
          676
        ],
        "'YIELD": [
          -1,
          676
        ],
        "'DASH": [
          -1,
          676
        ],
        "'BANG": [
          -1,
          676
        ],
        "'LBRACK": [
          -1,
          676
        ],
        "'NUMBER": [
          -1,
          676
        ],
        "'TRUE": [
          -1,
          676
        ],
        "'FALSE": [
          -1,
          676
        ],
        "'NULL": [
          -1,
          676
        ],
        "'PARENAFTERBRACE": [
          -1,
          676
        ],
        "'SIEVE": [
          -1,
          676
        ],
        "'BLOCK": [
          -1,
          676
        ],
        "'TABLE": [
          -1,
          676
        ],
        "'ASK": [
          -1,
          676
        ],
        "'NEW": [
          -1,
          676
        ]
      },
      {
        "'NAME": [
          -1,
          678
        ],
        "'PARENNOSPACE": [
          -1,
          678
        ],
        "'STRING": [
          -1,
          678
        ],
        "'LBRACE": [
          -1,
          678
        ],
        "'RBRACE": [
          -1,
          678
        ],
        "'SPY": [
          -1,
          678
        ],
        "'PARENSPACE": [
          -1,
          678
        ],
        "'INT": [
          -1,
          678
        ],
        "'LONG": [
          -1,
          678
        ],
        "'DOUBLE": [
          -1,
          678
        ],
        "'FLOAT": [
          -1,
          678
        ],
        "'BOOLEAN": [
          -1,
          678
        ],
        "'VOID": [
          -1,
          678
        ],
        "'DATA": [
          -1,
          678
        ],
        "'IF": [
          -1,
          678
        ],
        "'FOR": [
          -1,
          678
        ],
        "'RETURN": [
          -1,
          678
        ],
        "'VAR": [
          -1,
          678
        ],
        "'REC": [
          -1,
          678
        ],
        "'ATCHECK": [
          -1,
          678
        ],
        "'ASSERTEQUALS": [
          -1,
          678
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          678
        ],
        "'ASSERTTRUE": [
          -1,
          678
        ],
        "'ASSERTFALSE": [
          -1,
          678
        ],
        "'ASSERTSATISFIES": [
          -1,
          678
        ],
        "'ASSERTRAISES": [
          -1,
          678
        ],
        "'SWITCH": [
          -1,
          678
        ],
        "'YIELD": [
          -1,
          678
        ],
        "'DASH": [
          -1,
          678
        ],
        "'BANG": [
          -1,
          678
        ],
        "'LBRACK": [
          -1,
          678
        ],
        "'NUMBER": [
          -1,
          678
        ],
        "'TRUE": [
          -1,
          678
        ],
        "'FALSE": [
          -1,
          678
        ],
        "'NULL": [
          -1,
          678
        ],
        "'PARENAFTERBRACE": [
          -1,
          678
        ],
        "'SIEVE": [
          -1,
          678
        ],
        "'BLOCK": [
          -1,
          678
        ],
        "'TABLE": [
          -1,
          678
        ],
        "'ASK": [
          -1,
          678
        ],
        "'NEW": [
          -1,
          678
        ]
      },
      {
        "'NAME": [
          -1,
          680
        ],
        "'PARENNOSPACE": [
          -1,
          680
        ],
        "'STRING": [
          -1,
          680
        ],
        "'LBRACE": [
          -1,
          680
        ],
        "'RBRACE": [
          -1,
          680
        ],
        "'SPY": [
          -1,
          680
        ],
        "'PARENSPACE": [
          -1,
          680
        ],
        "'INT": [
          -1,
          680
        ],
        "'LONG": [
          -1,
          680
        ],
        "'DOUBLE": [
          -1,
          680
        ],
        "'FLOAT": [
          -1,
          680
        ],
        "'BOOLEAN": [
          -1,
          680
        ],
        "'VOID": [
          -1,
          680
        ],
        "'DATA": [
          -1,
          680
        ],
        "'IF": [
          -1,
          680
        ],
        "'FOR": [
          -1,
          680
        ],
        "'RETURN": [
          -1,
          680
        ],
        "'VAR": [
          -1,
          680
        ],
        "'REC": [
          -1,
          680
        ],
        "'ATCHECK": [
          -1,
          680
        ],
        "'ASSERTEQUALS": [
          -1,
          680
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          680
        ],
        "'ASSERTTRUE": [
          -1,
          680
        ],
        "'ASSERTFALSE": [
          -1,
          680
        ],
        "'ASSERTSATISFIES": [
          -1,
          680
        ],
        "'ASSERTRAISES": [
          -1,
          680
        ],
        "'SWITCH": [
          -1,
          680
        ],
        "'YIELD": [
          -1,
          680
        ],
        "'DASH": [
          -1,
          680
        ],
        "'BANG": [
          -1,
          680
        ],
        "'LBRACK": [
          -1,
          680
        ],
        "'NUMBER": [
          -1,
          680
        ],
        "'TRUE": [
          -1,
          680
        ],
        "'FALSE": [
          -1,
          680
        ],
        "'NULL": [
          -1,
          680
        ],
        "'PARENAFTERBRACE": [
          -1,
          680
        ],
        "'SIEVE": [
          -1,
          680
        ],
        "'BLOCK": [
          -1,
          680
        ],
        "'TABLE": [
          -1,
          680
        ],
        "'ASK": [
          -1,
          680
        ],
        "'NEW": [
          -1,
          680
        ]
      },
      {
        "'NAME": [
          -1,
          682
        ],
        "'PARENNOSPACE": [
          -1,
          682
        ],
        "'STRING": [
          -1,
          682
        ],
        "'LBRACE": [
          -1,
          682
        ],
        "'RBRACE": [
          -1,
          682
        ],
        "'SPY": [
          -1,
          682
        ],
        "'PARENSPACE": [
          -1,
          682
        ],
        "'INT": [
          -1,
          682
        ],
        "'LONG": [
          -1,
          682
        ],
        "'DOUBLE": [
          -1,
          682
        ],
        "'FLOAT": [
          -1,
          682
        ],
        "'BOOLEAN": [
          -1,
          682
        ],
        "'VOID": [
          -1,
          682
        ],
        "'DATA": [
          -1,
          682
        ],
        "'IF": [
          -1,
          682
        ],
        "'FOR": [
          -1,
          682
        ],
        "'RETURN": [
          -1,
          682
        ],
        "'VAR": [
          -1,
          682
        ],
        "'REC": [
          -1,
          682
        ],
        "'ATCHECK": [
          -1,
          682
        ],
        "'ASSERTEQUALS": [
          -1,
          682
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          682
        ],
        "'ASSERTTRUE": [
          -1,
          682
        ],
        "'ASSERTFALSE": [
          -1,
          682
        ],
        "'ASSERTSATISFIES": [
          -1,
          682
        ],
        "'ASSERTRAISES": [
          -1,
          682
        ],
        "'SWITCH": [
          -1,
          682
        ],
        "'YIELD": [
          -1,
          682
        ],
        "'DASH": [
          -1,
          682
        ],
        "'BANG": [
          -1,
          682
        ],
        "'LBRACK": [
          -1,
          682
        ],
        "'NUMBER": [
          -1,
          682
        ],
        "'TRUE": [
          -1,
          682
        ],
        "'FALSE": [
          -1,
          682
        ],
        "'NULL": [
          -1,
          682
        ],
        "'PARENAFTERBRACE": [
          -1,
          682
        ],
        "'SIEVE": [
          -1,
          682
        ],
        "'BLOCK": [
          -1,
          682
        ],
        "'TABLE": [
          -1,
          682
        ],
        "'ASK": [
          -1,
          682
        ],
        "'NEW": [
          -1,
          682
        ]
      },
      {
        "'NAME": [
          -1,
          684
        ],
        "'PARENNOSPACE": [
          -1,
          684
        ],
        "'STRING": [
          -1,
          684
        ],
        "'LBRACE": [
          -1,
          684
        ],
        "'RBRACE": [
          -1,
          684
        ],
        "'SPY": [
          -1,
          684
        ],
        "'PARENSPACE": [
          -1,
          684
        ],
        "'INT": [
          -1,
          684
        ],
        "'LONG": [
          -1,
          684
        ],
        "'DOUBLE": [
          -1,
          684
        ],
        "'FLOAT": [
          -1,
          684
        ],
        "'BOOLEAN": [
          -1,
          684
        ],
        "'VOID": [
          -1,
          684
        ],
        "'DATA": [
          -1,
          684
        ],
        "'IF": [
          -1,
          684
        ],
        "'FOR": [
          -1,
          684
        ],
        "'RETURN": [
          -1,
          684
        ],
        "'VAR": [
          -1,
          684
        ],
        "'REC": [
          -1,
          684
        ],
        "'ATCHECK": [
          -1,
          684
        ],
        "'ASSERTEQUALS": [
          -1,
          684
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          684
        ],
        "'ASSERTTRUE": [
          -1,
          684
        ],
        "'ASSERTFALSE": [
          -1,
          684
        ],
        "'ASSERTSATISFIES": [
          -1,
          684
        ],
        "'ASSERTRAISES": [
          -1,
          684
        ],
        "'SWITCH": [
          -1,
          684
        ],
        "'YIELD": [
          -1,
          684
        ],
        "'DASH": [
          -1,
          684
        ],
        "'BANG": [
          -1,
          684
        ],
        "'LBRACK": [
          -1,
          684
        ],
        "'NUMBER": [
          -1,
          684
        ],
        "'TRUE": [
          -1,
          684
        ],
        "'FALSE": [
          -1,
          684
        ],
        "'NULL": [
          -1,
          684
        ],
        "'PARENAFTERBRACE": [
          -1,
          684
        ],
        "'SIEVE": [
          -1,
          684
        ],
        "'BLOCK": [
          -1,
          684
        ],
        "'TABLE": [
          -1,
          684
        ],
        "'ASK": [
          -1,
          684
        ],
        "'NEW": [
          -1,
          684
        ]
      },
      {
        "'NAME": [
          -1,
          686
        ],
        "'PARENNOSPACE": [
          -1,
          686
        ],
        "'STRING": [
          -1,
          686
        ],
        "'LBRACE": [
          -1,
          686
        ],
        "'RBRACE": [
          -1,
          686
        ],
        "'SPY": [
          -1,
          686
        ],
        "'PARENSPACE": [
          -1,
          686
        ],
        "'INT": [
          -1,
          686
        ],
        "'LONG": [
          -1,
          686
        ],
        "'DOUBLE": [
          -1,
          686
        ],
        "'FLOAT": [
          -1,
          686
        ],
        "'BOOLEAN": [
          -1,
          686
        ],
        "'VOID": [
          -1,
          686
        ],
        "'DATA": [
          -1,
          686
        ],
        "'IF": [
          -1,
          686
        ],
        "'FOR": [
          -1,
          686
        ],
        "'RETURN": [
          -1,
          686
        ],
        "'VAR": [
          -1,
          686
        ],
        "'REC": [
          -1,
          686
        ],
        "'ATCHECK": [
          -1,
          686
        ],
        "'ASSERTEQUALS": [
          -1,
          686
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          686
        ],
        "'ASSERTTRUE": [
          -1,
          686
        ],
        "'ASSERTFALSE": [
          -1,
          686
        ],
        "'ASSERTSATISFIES": [
          -1,
          686
        ],
        "'ASSERTRAISES": [
          -1,
          686
        ],
        "'SWITCH": [
          -1,
          686
        ],
        "'YIELD": [
          -1,
          686
        ],
        "'DASH": [
          -1,
          686
        ],
        "'BANG": [
          -1,
          686
        ],
        "'LBRACK": [
          -1,
          686
        ],
        "'NUMBER": [
          -1,
          686
        ],
        "'TRUE": [
          -1,
          686
        ],
        "'FALSE": [
          -1,
          686
        ],
        "'NULL": [
          -1,
          686
        ],
        "'PARENAFTERBRACE": [
          -1,
          686
        ],
        "'SIEVE": [
          -1,
          686
        ],
        "'BLOCK": [
          -1,
          686
        ],
        "'TABLE": [
          -1,
          686
        ],
        "'ASK": [
          -1,
          686
        ],
        "'NEW": [
          -1,
          686
        ]
      },
      {
        "case-branch_A0_I3_I1*": [
          525
        ],
        "'RPAREN": [
          -1,
          688,
          690
        ],
        "'COMMA": [
          -1,
          690
        ]
      },
      {
        "'RPAREN": [
          526
        ]
      },
      {
        "'RPAREN": [
          -1,
          692
        ]
      },
      {
        "'RBRACE": [
          -1,
          694
        ],
        "'CASE": [
          -1,
          694
        ],
        "'DEFAULT": [
          -1,
          694
        ]
      },
      {
        "'NAME": [
          -1,
          696
        ],
        "'PARENNOSPACE": [
          -1,
          696
        ],
        "'STRING": [
          -1,
          696
        ],
        "'LBRACE": [
          -1,
          696
        ],
        "'SPY": [
          -1,
          696
        ],
        "'PARENSPACE": [
          -1,
          696
        ],
        "'INT": [
          -1,
          696
        ],
        "'LONG": [
          -1,
          696
        ],
        "'DOUBLE": [
          -1,
          696
        ],
        "'FLOAT": [
          -1,
          696
        ],
        "'BOOLEAN": [
          -1,
          696
        ],
        "'VOID": [
          -1,
          696
        ],
        "'DATA": [
          -1,
          696
        ],
        "'IF": [
          -1,
          696
        ],
        "'FOR": [
          -1,
          696
        ],
        "'RETURN": [
          -1,
          696
        ],
        "'VAR": [
          -1,
          696
        ],
        "'REC": [
          -1,
          696
        ],
        "'ATCHECK": [
          -1,
          696
        ],
        "'SWITCH": [
          -1,
          696
        ],
        "'YIELD": [
          -1,
          696
        ],
        "'DASH": [
          -1,
          696
        ],
        "'BANG": [
          -1,
          696
        ],
        "'LBRACK": [
          -1,
          696
        ],
        "'NUMBER": [
          -1,
          696
        ],
        "'TRUE": [
          -1,
          696
        ],
        "'FALSE": [
          -1,
          696
        ],
        "'NULL": [
          -1,
          696
        ],
        "'PARENAFTERBRACE": [
          -1,
          696
        ],
        "'SIEVE": [
          -1,
          696
        ],
        "'BLOCK": [
          -1,
          696
        ],
        "'TABLE": [
          -1,
          696
        ],
        "'ASK": [
          -1,
          696
        ],
        "'NEW": [
          -1,
          696
        ]
      },
      {
        "'NAME": [
          -1,
          282
        ],
        "'PARENNOSPACE": [
          -1,
          282
        ],
        "'STRING": [
          -1,
          282
        ],
        "'LBRACE": [
          -1,
          282
        ],
        "'RBRACE": [
          -1,
          698
        ],
        "'SPY": [
          -1,
          282
        ],
        "'PARENSPACE": [
          -1,
          282
        ],
        "'INT": [
          -1,
          282
        ],
        "'LONG": [
          -1,
          282
        ],
        "'DOUBLE": [
          -1,
          282
        ],
        "'FLOAT": [
          -1,
          282
        ],
        "'BOOLEAN": [
          -1,
          282
        ],
        "'VOID": [
          -1,
          282
        ],
        "'DATA": [
          -1,
          282
        ],
        "'IF": [
          -1,
          282
        ],
        "'FOR": [
          -1,
          282
        ],
        "'RETURN": [
          -1,
          282
        ],
        "'VAR": [
          -1,
          282
        ],
        "'REC": [
          -1,
          282
        ],
        "'ATCHECK": [
          -1,
          282
        ],
        "'SWITCH": [
          -1,
          282
        ],
        "'CASE": [
          -1,
          698
        ],
        "'DEFAULT": [
          -1,
          698
        ],
        "'YIELD": [
          -1,
          282
        ],
        "'DASH": [
          -1,
          282
        ],
        "'BANG": [
          -1,
          282
        ],
        "'LBRACK": [
          -1,
          282
        ],
        "'NUMBER": [
          -1,
          282
        ],
        "'TRUE": [
          -1,
          282
        ],
        "'FALSE": [
          -1,
          282
        ],
        "'NULL": [
          -1,
          282
        ],
        "'PARENAFTERBRACE": [
          -1,
          282
        ],
        "'SIEVE": [
          -1,
          282
        ],
        "'BLOCK": [
          -1,
          282
        ],
        "'TABLE": [
          -1,
          282
        ],
        "'ASK": [
          -1,
          282
        ],
        "'NEW": [
          -1,
          282
        ]
      },
      {
        "'NAME": [
          -1,
          700
        ],
        "'PARENNOSPACE": [
          -1,
          700
        ],
        "'STRING": [
          -1,
          700
        ],
        "'LBRACE": [
          -1,
          700
        ],
        "'SPY": [
          -1,
          700
        ],
        "'PARENSPACE": [
          -1,
          700
        ],
        "'INT": [
          -1,
          700
        ],
        "'LONG": [
          -1,
          700
        ],
        "'DOUBLE": [
          -1,
          700
        ],
        "'FLOAT": [
          -1,
          700
        ],
        "'BOOLEAN": [
          -1,
          700
        ],
        "'VOID": [
          -1,
          700
        ],
        "'DATA": [
          -1,
          700
        ],
        "'IF": [
          -1,
          700
        ],
        "'FOR": [
          -1,
          700
        ],
        "'RETURN": [
          -1,
          700
        ],
        "'VAR": [
          -1,
          700
        ],
        "'REC": [
          -1,
          700
        ],
        "'ATCHECK": [
          -1,
          700
        ],
        "'SWITCH": [
          -1,
          700
        ],
        "'YIELD": [
          -1,
          700
        ],
        "'DASH": [
          -1,
          700
        ],
        "'BANG": [
          -1,
          700
        ],
        "'LBRACK": [
          -1,
          700
        ],
        "'NUMBER": [
          -1,
          700
        ],
        "'TRUE": [
          -1,
          700
        ],
        "'FALSE": [
          -1,
          700
        ],
        "'NULL": [
          -1,
          700
        ],
        "'PARENAFTERBRACE": [
          -1,
          700
        ],
        "'SIEVE": [
          -1,
          700
        ],
        "'BLOCK": [
          -1,
          700
        ],
        "'TABLE": [
          -1,
          700
        ],
        "'ASK": [
          -1,
          700
        ],
        "'NEW": [
          -1,
          700
        ]
      },
      {
        "$": [
          -1,
          702
        ],
        "'NAME": [
          -1,
          702
        ],
        "'SEMI": [
          -1,
          702
        ],
        "'PARENNOSPACE": [
          -1,
          702
        ],
        "'STRING": [
          -1,
          702
        ],
        "'RPAREN": [
          -1,
          702
        ],
        "'LBRACE": [
          -1,
          702
        ],
        "'RBRACE": [
          -1,
          702
        ],
        "'SPY": [
          -1,
          702
        ],
        "'PARENSPACE": [
          -1,
          702
        ],
        "'COMMA": [
          -1,
          702
        ],
        "'INT": [
          -1,
          702
        ],
        "'LONG": [
          -1,
          702
        ],
        "'DOUBLE": [
          -1,
          702
        ],
        "'FLOAT": [
          -1,
          702
        ],
        "'BOOLEAN": [
          -1,
          702
        ],
        "'VOID": [
          -1,
          702
        ],
        "'LT": [
          -1,
          702
        ],
        "'GT": [
          -1,
          702
        ],
        "'THINARROW": [
          -1,
          702
        ],
        "'DATA": [
          -1,
          702
        ],
        "'IF": [
          -1,
          702
        ],
        "'FOR": [
          -1,
          702
        ],
        "'RETURN": [
          -1,
          702
        ],
        "'VAR": [
          -1,
          702
        ],
        "'REC": [
          -1,
          702
        ],
        "'ATCHECK": [
          -1,
          702
        ],
        "'ASSERTEQUALS": [
          -1,
          702
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          702
        ],
        "'ASSERTTRUE": [
          -1,
          702
        ],
        "'ASSERTFALSE": [
          -1,
          702
        ],
        "'ASSERTSATISFIES": [
          -1,
          702
        ],
        "'ASSERTRAISES": [
          -1,
          702
        ],
        "'IS": [
          -1,
          702
        ],
        "'ISNOT": [
          -1,
          702
        ],
        "'SATISFIES": [
          -1,
          702
        ],
        "'RAISES": [
          -1,
          702
        ],
        "'SWITCH": [
          -1,
          702
        ],
        "'CASE": [
          -1,
          702
        ],
        "'DEFAULT": [
          -1,
          702
        ],
        "'YIELD": [
          -1,
          702
        ],
        "'PLUS": [
          -1,
          702
        ],
        "'DASH": [
          -1,
          702
        ],
        "'TIMES": [
          -1,
          702
        ],
        "'SLASH": [
          -1,
          702
        ],
        "'PERCENT": [
          -1,
          702
        ],
        "'EQUALEQUAL": [
          -1,
          702
        ],
        "'NEQ": [
          -1,
          702
        ],
        "'LEQ": [
          -1,
          702
        ],
        "'GEQ": [
          -1,
          702
        ],
        "'AND": [
          -1,
          702
        ],
        "'OR": [
          -1,
          702
        ],
        "'BANG": [
          -1,
          702
        ],
        "'DOT": [
          -1,
          702
        ],
        "'LBRACK": [
          -1,
          702
        ],
        "'RBRACK": [
          -1,
          702
        ],
        "'NUMBER": [
          -1,
          702
        ],
        "'TRUE": [
          -1,
          702
        ],
        "'FALSE": [
          -1,
          702
        ],
        "'NULL": [
          -1,
          702
        ],
        "'PARENAFTERBRACE": [
          -1,
          702
        ],
        "'SIEVE": [
          -1,
          702
        ],
        "'USING": [
          -1,
          702
        ],
        "'BLOCK": [
          -1,
          702
        ],
        "'TABLE": [
          -1,
          702
        ],
        "'ASK": [
          -1,
          702
        ],
        "'NEW": [
          -1,
          702
        ]
      },
      {
        "'COMMA": [
          527
        ],
        "table-row_I3": [
          528
        ],
        "'SEMI": [
          -1,
          704
        ]
      },
      {
        "'NAME": [
          -1,
          706
        ],
        "'PARENNOSPACE": [
          -1,
          706
        ],
        "'STRING": [
          -1,
          706
        ],
        "'LBRACE": [
          -1,
          706
        ],
        "'RBRACE": [
          -1,
          706
        ],
        "'SPY": [
          -1,
          706
        ],
        "'PARENSPACE": [
          -1,
          706
        ],
        "'INT": [
          -1,
          706
        ],
        "'LONG": [
          -1,
          706
        ],
        "'DOUBLE": [
          -1,
          706
        ],
        "'FLOAT": [
          -1,
          706
        ],
        "'BOOLEAN": [
          -1,
          706
        ],
        "'VOID": [
          -1,
          706
        ],
        "'DATA": [
          -1,
          706
        ],
        "'IF": [
          -1,
          706
        ],
        "'FOR": [
          -1,
          706
        ],
        "'RETURN": [
          -1,
          706
        ],
        "'VAR": [
          -1,
          706
        ],
        "'REC": [
          -1,
          706
        ],
        "'ATCHECK": [
          -1,
          706
        ],
        "'ASSERTEQUALS": [
          -1,
          706
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          706
        ],
        "'ASSERTTRUE": [
          -1,
          706
        ],
        "'ASSERTFALSE": [
          -1,
          706
        ],
        "'ASSERTSATISFIES": [
          -1,
          706
        ],
        "'ASSERTRAISES": [
          -1,
          706
        ],
        "'SWITCH": [
          -1,
          706
        ],
        "'YIELD": [
          -1,
          706
        ],
        "'DASH": [
          -1,
          706
        ],
        "'BANG": [
          -1,
          706
        ],
        "'LBRACK": [
          -1,
          706
        ],
        "'NUMBER": [
          -1,
          706
        ],
        "'TRUE": [
          -1,
          706
        ],
        "'FALSE": [
          -1,
          706
        ],
        "'NULL": [
          -1,
          706
        ],
        "'PARENAFTERBRACE": [
          -1,
          706
        ],
        "'SIEVE": [
          -1,
          706
        ],
        "'BLOCK": [
          -1,
          706
        ],
        "'TABLE": [
          -1,
          706
        ],
        "'ASK": [
          -1,
          706
        ],
        "'NEW": [
          -1,
          706
        ]
      },
      {
        "'PARENSPACE": [
          529
        ]
      },
      {
        "'NAME": [
          -1,
          708
        ],
        "'PARENNOSPACE": [
          -1,
          708
        ],
        "'STRING": [
          -1,
          708
        ],
        "'LBRACE": [
          -1,
          708
        ],
        "'RBRACE": [
          -1,
          708
        ],
        "'SPY": [
          -1,
          708
        ],
        "'PARENSPACE": [
          -1,
          708
        ],
        "'INT": [
          -1,
          708
        ],
        "'LONG": [
          -1,
          708
        ],
        "'DOUBLE": [
          -1,
          708
        ],
        "'FLOAT": [
          -1,
          708
        ],
        "'BOOLEAN": [
          -1,
          708
        ],
        "'VOID": [
          -1,
          708
        ],
        "'DATA": [
          -1,
          708
        ],
        "'IF": [
          -1,
          708
        ],
        "'FOR": [
          -1,
          708
        ],
        "'RETURN": [
          -1,
          708
        ],
        "'VAR": [
          -1,
          708
        ],
        "'REC": [
          -1,
          708
        ],
        "'ATCHECK": [
          -1,
          708
        ],
        "'ASSERTEQUALS": [
          -1,
          708
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          708
        ],
        "'ASSERTTRUE": [
          -1,
          708
        ],
        "'ASSERTFALSE": [
          -1,
          708
        ],
        "'ASSERTSATISFIES": [
          -1,
          708
        ],
        "'ASSERTRAISES": [
          -1,
          708
        ],
        "'SWITCH": [
          -1,
          708
        ],
        "'YIELD": [
          -1,
          708
        ],
        "'DASH": [
          -1,
          708
        ],
        "'BANG": [
          -1,
          708
        ],
        "'LBRACK": [
          -1,
          708
        ],
        "'NUMBER": [
          -1,
          708
        ],
        "'TRUE": [
          -1,
          708
        ],
        "'FALSE": [
          -1,
          708
        ],
        "'NULL": [
          -1,
          708
        ],
        "'PARENAFTERBRACE": [
          -1,
          708
        ],
        "'SIEVE": [
          -1,
          708
        ],
        "'BLOCK": [
          -1,
          708
        ],
        "'TABLE": [
          -1,
          708
        ],
        "'ASK": [
          -1,
          708
        ],
        "'NEW": [
          -1,
          708
        ]
      },
      {
        "'COMMA": [
          530
        ],
        "case-branch_A0_I3_I1": [
          531
        ],
        "'RPAREN": [
          -1,
          710
        ]
      },
      {
        "'COLON": [
          532
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          533
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'SEMI": [
          -1,
          712
        ],
        "'COMMA": [
          -1,
          712
        ]
      },
      {
        "'NAME": [
          100
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          110
        ],
        "full-expr": [
          534
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "'SIEVE": [
          60
        ],
        "'BLOCK": [
          61
        ],
        "'TABLE": [
          62
        ],
        "'ASK": [
          63
        ],
        "'NEW": [
          64
        ]
      },
      {
        "'NAME": [
          535
        ]
      },
      {
        "'RPAREN": [
          -1,
          714
        ],
        "'COMMA": [
          -1,
          714
        ]
      },
      {
        "switch-body": [
          536
        ],
        "switch-body_I0*": [
          488
        ],
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          594
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          594
        ],
        "'BLOCK": [
          -1,
          594
        ],
        "'TABLE": [
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
        "'SEMI": [
          -1,
          716
        ],
        "'COMMA": [
          -1,
          716
        ]
      },
      {
        "'RPAREN": [
          537
        ]
      },
      {
        "'RPAREN": [
          -1,
          718
        ],
        "'COMMA": [
          -1,
          718
        ]
      },
      {
        "'RBRACE": [
          -1,
          720
        ],
        "'CASE": [
          -1,
          720
        ],
        "'DEFAULT": [
          -1,
          720
        ]
      },
      {
        "block": [
          538
        ],
        "'LBRACE": [
          319
        ]
      },
      {
        "'NAME": [
          -1,
          722
        ],
        "'PARENNOSPACE": [
          -1,
          722
        ],
        "'STRING": [
          -1,
          722
        ],
        "'LBRACE": [
          -1,
          722
        ],
        "'RBRACE": [
          -1,
          722
        ],
        "'SPY": [
          -1,
          722
        ],
        "'PARENSPACE": [
          -1,
          722
        ],
        "'INT": [
          -1,
          722
        ],
        "'LONG": [
          -1,
          722
        ],
        "'DOUBLE": [
          -1,
          722
        ],
        "'FLOAT": [
          -1,
          722
        ],
        "'BOOLEAN": [
          -1,
          722
        ],
        "'VOID": [
          -1,
          722
        ],
        "'DATA": [
          -1,
          722
        ],
        "'IF": [
          -1,
          722
        ],
        "'ELSE": [
          -1,
          722
        ],
        "'FOR": [
          -1,
          722
        ],
        "'RETURN": [
          -1,
          722
        ],
        "'VAR": [
          -1,
          722
        ],
        "'REC": [
          -1,
          722
        ],
        "'ATCHECK": [
          -1,
          722
        ],
        "'ASSERTEQUALS": [
          -1,
          722
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          722
        ],
        "'ASSERTTRUE": [
          -1,
          722
        ],
        "'ASSERTFALSE": [
          -1,
          722
        ],
        "'ASSERTSATISFIES": [
          -1,
          722
        ],
        "'ASSERTRAISES": [
          -1,
          722
        ],
        "'SWITCH": [
          -1,
          722
        ],
        "'YIELD": [
          -1,
          722
        ],
        "'DASH": [
          -1,
          722
        ],
        "'BANG": [
          -1,
          722
        ],
        "'LBRACK": [
          -1,
          722
        ],
        "'NUMBER": [
          -1,
          722
        ],
        "'TRUE": [
          -1,
          722
        ],
        "'FALSE": [
          -1,
          722
        ],
        "'NULL": [
          -1,
          722
        ],
        "'PARENAFTERBRACE": [
          -1,
          722
        ],
        "'SIEVE": [
          -1,
          722
        ],
        "'BLOCK": [
          -1,
          722
        ],
        "'TABLE": [
          -1,
          722
        ],
        "'ASK": [
          -1,
          722
        ],
        "'NEW": [
          -1,
          722
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
      "rec-stmt_I5?": 24,
      "assign-stmt_I3?": 25,
      "expr-stmt_I1?": 26,
      "check-block_A0_I6*": 27,
      "check-block_A1_I2*": 28,
      "assert-stmt_A0_I6?": 29,
      "assert-stmt_A1_I6?": 30,
      "assert-stmt_A2_I4?": 31,
      "assert-stmt_A3_I4?": 32,
      "assert-stmt_A4_I6?": 33,
      "assert-stmt_A5_I6?": 34,
      "assert-stmt_A6_I3?": 35,
      "assert-stmt_A7_I3?": 36,
      "assert-stmt_A8_I3?": 37,
      "assert-stmt_A9_I3?": 38,
      "switch-expr_I5*": 39,
      "switch-expr_I6?": 40,
      "case-branch_A0_I3?": 41,
      "case-branch_A0_I3_I1*": 42,
      "switch-body_I0*": 43,
      "yield-stmt_I2?": 44,
      "lambda-expr_A0_I1?": 45,
      "lambda-expr_A0_I1_I1*": 46,
      "lambda-expr_A1_I1?": 47,
      "lambda-expr_A1_I1_I1*": 48,
      "binop-expr_I1*": 49,
      "app-or-access_A0_I2?": 50,
      "app-or-access_A0_I2_I1*": 51,
      "sieve-expr_I4*": 52,
      "sieve-expr_I6*": 53,
      "block-expr_I2*": 54,
      "record-expr_A0_I2*": 55,
      "table-expr_I3*": 56,
      "table-expr_I5*": 57,
      "table-row_I3*": 58,
      "ask-expr_A0_I4*": 59,
      "ask-expr_A1_I4*": 60,
      "new-expr_I3?": 61,
      "new-expr_I3_I1*": 62,
      "construct-expr_A0_I3?": 63,
      "construct-expr_A0_I3_I1*": 64,
      "map-for-expr_A1_I5*": 65,
      "START": 66,
      "if-stmt_I5*,if-stmt_I6?": 67
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
        "rule": 25
      },
      {
        "label": "spy-stmt_I3*",
        "kids": [],
        "rule": 42
      },
      {
        "label": "fun-decl_I3?",
        "kids": [],
        "rule": 46
      },
      {
        "label": "fun-decl_I3_I1*",
        "kids": [],
        "rule": 49
      },
      {
        "label": "fun-decl_I6?",
        "kids": [],
        "rule": 52
      },
      {
        "label": "where-clause_I2*",
        "kids": [],
        "rule": 57
      },
      {
        "label": "type-ann_A6_I1?",
        "kids": [],
        "rule": 68
      },
      {
        "label": "type-ann_A6_I1_I2*",
        "kids": [],
        "rule": 71
      },
      {
        "label": "type-ann_A7_I1?",
        "kids": [],
        "rule": 75
      },
      {
        "label": "type-ann_A7_I1_I1*",
        "kids": [],
        "rule": 78
      },
      {
        "label": "data-decl_I4*",
        "kids": [],
        "rule": 82
      },
      {
        "label": "data-decl_I5?",
        "kids": [],
        "rule": 85
      },
      {
        "label": "variant-decl_A0_I2?",
        "kids": [],
        "rule": 89
      },
      {
        "label": "variant-decl_A0_I2_I1*",
        "kids": [],
        "rule": 92
      },
      {
        "label": "if-stmt_I5*",
        "kids": [],
        "rule": 98
      },
      {
        "label": "if-stmt_I6?",
        "kids": [],
        "rule": 101
      },
      {
        "label": "let-stmt_I4?",
        "kids": [],
        "rule": 108
      },
      {
        "label": "var-stmt_I5?",
        "kids": [],
        "rule": 112
      },
      {
        "label": "rec-stmt_I5?",
        "kids": [],
        "rule": 116
      },
      {
        "label": "assign-stmt_I3?",
        "kids": [],
        "rule": 120
      },
      {
        "label": "expr-stmt_I1?",
        "kids": [],
        "rule": 124
      },
      {
        "label": "check-block_A0_I6*",
        "kids": [],
        "rule": 128
      },
      {
        "label": "check-block_A1_I2*",
        "kids": [],
        "rule": 133
      },
      {
        "label": "assert-stmt_A0_I6?",
        "kids": [],
        "rule": 138
      },
      {
        "label": "assert-stmt_A1_I6?",
        "kids": [],
        "rule": 142
      },
      {
        "label": "assert-stmt_A2_I4?",
        "kids": [],
        "rule": 146
      },
      {
        "label": "assert-stmt_A3_I4?",
        "kids": [],
        "rule": 150
      },
      {
        "label": "assert-stmt_A4_I6?",
        "kids": [],
        "rule": 154
      },
      {
        "label": "assert-stmt_A5_I6?",
        "kids": [],
        "rule": 158
      },
      {
        "label": "assert-stmt_A6_I3?",
        "kids": [],
        "rule": 162
      },
      {
        "label": "assert-stmt_A7_I3?",
        "kids": [],
        "rule": 166
      },
      {
        "label": "assert-stmt_A8_I3?",
        "kids": [],
        "rule": 170
      },
      {
        "label": "assert-stmt_A9_I3?",
        "kids": [],
        "rule": 174
      },
      {
        "label": "switch-expr_I5*",
        "kids": [],
        "rule": 178
      },
      {
        "label": "switch-expr_I6?",
        "kids": [],
        "rule": 181
      },
      {
        "label": "case-branch_A0_I3?",
        "kids": [],
        "rule": 185
      },
      {
        "label": "case-branch_A0_I3_I1*",
        "kids": [],
        "rule": 188
      },
      {
        "label": "switch-body_I0*",
        "kids": [],
        "rule": 194
      },
      {
        "label": "yield-stmt_I2?",
        "kids": [],
        "rule": 198
      },
      {
        "label": "lambda-expr_A0_I1?",
        "kids": [],
        "rule": 202
      },
      {
        "label": "lambda-expr_A0_I1_I1*",
        "kids": [],
        "rule": 205
      },
      {
        "label": "lambda-expr_A1_I1?",
        "kids": [],
        "rule": 209
      },
      {
        "label": "lambda-expr_A1_I1_I1*",
        "kids": [],
        "rule": 212
      },
      {
        "label": "binop-expr_I1*",
        "kids": [],
        "rule": 220
      },
      {
        "label": "app-or-access_A0_I2?",
        "kids": [],
        "rule": 240
      },
      {
        "label": "app-or-access_A0_I2_I1*",
        "kids": [],
        "rule": 243
      },
      {
        "label": "sieve-expr_I4*",
        "kids": [],
        "rule": 267
      },
      {
        "label": "sieve-expr_I6*",
        "kids": [],
        "rule": 270
      },
      {
        "label": "block-expr_I2*",
        "kids": [],
        "rule": 274
      },
      {
        "label": "record-expr_A0_I2*",
        "kids": [],
        "rule": 278
      },
      {
        "label": "table-expr_I3*",
        "kids": [],
        "rule": 284
      },
      {
        "label": "table-expr_I5*",
        "kids": [],
        "rule": 287
      },
      {
        "label": "table-row_I3*",
        "kids": [],
        "rule": 292
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 296
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 300
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 306
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 309
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 313
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 316
      },
      {
        "label": "map-for-expr_A1_I5*",
        "kids": [],
        "rule": 322
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 327
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
