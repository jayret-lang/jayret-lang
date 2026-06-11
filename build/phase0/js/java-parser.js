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
        "name": "block-expr",
        "symbols": [
          "'BLOCK",
          "'LBRACE",
          "@block-expr_I2*",
          "'RBRACE"
        ]
      },
      "266": {
        "name": "block-expr_I2*",
        "symbols": []
      },
      "267": {
        "name": "block-expr_I2*",
        "symbols": [
          "@block-expr_I2*",
          "@block-expr_I2"
        ]
      },
      "268": {
        "name": "block-expr_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "269": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "@record-field",
          "@record-expr_A0_I2*",
          "'RBRACE"
        ]
      },
      "270": {
        "name": "record-expr_A0_I2*",
        "symbols": []
      },
      "271": {
        "name": "record-expr_A0_I2*",
        "symbols": [
          "@record-expr_A0_I2*",
          "@record-expr_A0_I2"
        ]
      },
      "272": {
        "name": "record-expr_A0_I2",
        "symbols": [
          "'COMMA",
          "@record-field"
        ]
      },
      "273": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "274": {
        "name": "record-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "275": {
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
      "276": {
        "name": "table-expr_I3*",
        "symbols": []
      },
      "277": {
        "name": "table-expr_I3*",
        "symbols": [
          "@table-expr_I3*",
          "@table-expr_I3"
        ]
      },
      "278": {
        "name": "table-expr_I3",
        "symbols": [
          "'COMMA",
          "@table-header"
        ]
      },
      "279": {
        "name": "table-expr_I5*",
        "symbols": []
      },
      "280": {
        "name": "table-expr_I5*",
        "symbols": [
          "@table-expr_I5*",
          "@table-expr_I5"
        ]
      },
      "281": {
        "name": "table-expr_I5",
        "symbols": [
          "@table-row",
          "'SEMI"
        ]
      },
      "282": {
        "name": "table-header",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "283": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "'COLON",
          "@full-expr",
          "@table-row_I3*"
        ]
      },
      "284": {
        "name": "table-row_I3*",
        "symbols": []
      },
      "285": {
        "name": "table-row_I3*",
        "symbols": [
          "@table-row_I3*",
          "@table-row_I3"
        ]
      },
      "286": {
        "name": "table-row_I3",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "287": {
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
      "288": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "289": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "290": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "291": {
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
      "292": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "293": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "294": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "295": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "296": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "297": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "298": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "299": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "300": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "301": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "302": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "303": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "304": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "305": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "306": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "307": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "308": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "309": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "310": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "311": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "312": {
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
      "313": {
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
      "314": {
        "name": "map-for-expr_A1_I5*",
        "symbols": []
      },
      "315": {
        "name": "map-for-expr_A1_I5*",
        "symbols": [
          "@map-for-expr_A1_I5*",
          "@map-for-expr_A1_I5"
        ]
      },
      "316": {
        "name": "map-for-expr_A1_I5",
        "symbols": [
          "'COMMA",
          "@for-bind"
        ]
      },
      "317": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr"
        ]
      },
      "318": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "319": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "415": {
        "position": 1,
        "like": 0
      },
      "476": {
        "position": 1,
        "like": 1
      },
      "786": {
        "position": 2,
        "like": 0
      },
      "788": {
        "position": 1,
        "like": 12
      },
      "3002": {
        "position": 2,
        "like": 3
      },
      "3034": {
        "position": 1,
        "like": 4
      },
      "3291": {
        "position": 1,
        "like": 67
      },
      "3292": {
        "position": 1,
        "like": 254
      },
      "3407": {
        "position": 1,
        "like": 250
      },
      "3451": {
        "position": 2,
        "like": 14
      },
      "3481": {
        "position": 1,
        "like": 15
      },
      "3511": {
        "position": 1,
        "like": 16
      },
      "3541": {
        "position": 1,
        "like": 17
      },
      "3571": {
        "position": 1,
        "like": 18
      },
      "3601": {
        "position": 1,
        "like": 19
      },
      "3631": {
        "position": 1,
        "like": 20
      },
      "3661": {
        "position": 1,
        "like": 21
      },
      "3691": {
        "position": 1,
        "like": 22
      },
      "3721": {
        "position": 1,
        "like": 23
      },
      "4040": {
        "position": 1,
        "like": 61
      },
      "4042": {
        "position": 1,
        "like": 62
      },
      "4044": {
        "position": 1,
        "like": 63
      },
      "4046": {
        "position": 1,
        "like": 64
      },
      "4048": {
        "position": 1,
        "like": 65
      },
      "4050": {
        "position": 1,
        "like": 66
      },
      "4082": {
        "position": 1,
        "like": 123
      },
      "4319": {
        "position": 1,
        "like": 257
      },
      "4407": {
        "position": 1,
        "like": 217
      },
      "4438": {
        "position": 1,
        "like": 218
      },
      "4469": {
        "position": 1,
        "like": 219
      },
      "4670": {
        "position": 1,
        "like": 238
      },
      "5021": {
        "position": 1,
        "like": 248
      },
      "5065": {
        "position": 1,
        "like": 249
      },
      "5109": {
        "position": 1,
        "like": 251
      },
      "5153": {
        "position": 1,
        "like": 252
      },
      "5197": {
        "position": 1,
        "like": 253
      },
      "5285": {
        "position": 1,
        "like": 258
      },
      "5329": {
        "position": 1,
        "like": 259
      },
      "5373": {
        "position": 1,
        "like": 260
      },
      "5417": {
        "position": 1,
        "like": 261
      },
      "5461": {
        "position": 1,
        "like": 262
      },
      "5505": {
        "position": 1,
        "like": 263
      },
      "5549": {
        "position": 1,
        "like": 264
      },
      "6037": {
        "position": 2,
        "like": 67
      },
      "6039": {
        "position": 1,
        "like": 69
      },
      "6081": {
        "position": 1,
        "like": 216
      },
      "6087": {
        "position": 1,
        "like": 211
      },
      "6124": {
        "position": 1,
        "like": 210
      },
      "6129": {
        "position": 2,
        "like": 273
      },
      "6238": {
        "position": 1,
        "like": 77
      },
      "6258": {
        "position": 1,
        "like": 76
      },
      "6338": {
        "position": 1,
        "like": 203
      },
      "6340": {
        "position": 1,
        "like": 204
      },
      "6468": {
        "position": 1,
        "like": 126
      },
      "6498": {
        "position": 2,
        "like": 123
      },
      "6528": {
        "position": 1,
        "like": 125
      },
      "6802": {
        "position": 2,
        "like": 219
      },
      "7139": {
        "position": 2,
        "like": 237
      },
      "7182": {
        "position": 2,
        "like": 236
      },
      "7568": {
        "position": 2,
        "like": 311
      },
      "7983": {
        "position": 3,
        "like": 5
      },
      "8111": {
        "position": 3,
        "like": 9
      },
      "8224": {
        "position": 3,
        "like": 119
      },
      "8341": {
        "position": 2,
        "like": 215
      },
      "8344": {
        "position": 2,
        "like": 211
      },
      "8480": {
        "position": 2,
        "like": 77
      },
      "8497": {
        "position": 3,
        "like": 255
      },
      "8572": {
        "position": 2,
        "like": 204
      },
      "10831": {
        "position": 1,
        "like": 232
      },
      "10849": {
        "position": 1,
        "like": 233
      },
      "10867": {
        "position": 2,
        "like": 221
      },
      "10953": {
        "position": 1,
        "like": 223
      },
      "10971": {
        "position": 1,
        "like": 224
      },
      "10989": {
        "position": 1,
        "like": 225
      },
      "11007": {
        "position": 1,
        "like": 226
      },
      "11025": {
        "position": 1,
        "like": 227
      },
      "11043": {
        "position": 1,
        "like": 228
      },
      "11061": {
        "position": 1,
        "like": 229
      },
      "11079": {
        "position": 1,
        "like": 230
      },
      "11097": {
        "position": 1,
        "like": 231
      },
      "11115": {
        "position": 1,
        "like": 234
      },
      "11133": {
        "position": 1,
        "like": 235
      },
      "11158": {
        "position": 1,
        "like": 242
      },
      "11221": {
        "position": 1,
        "like": 241
      },
      "11245": {
        "position": 3,
        "like": 246
      },
      "11512": {
        "position": 3,
        "like": 256
      },
      "12062": {
        "position": 1,
        "like": 122
      },
      "12092": {
        "position": 4,
        "like": 119
      },
      "12122": {
        "position": 1,
        "like": 121
      },
      "12155": {
        "position": 2,
        "like": 213
      },
      "12196": {
        "position": 3,
        "like": 274
      },
      "12234": {
        "position": 4,
        "like": 269
      },
      "12281": {
        "position": 2,
        "like": 271
      },
      "12287": {
        "position": 2,
        "like": 79
      },
      "12337": {
        "position": 2,
        "like": 206
      },
      "12373": {
        "position": 1,
        "like": 47
      },
      "12375": {
        "position": 1,
        "like": 48
      },
      "12381": {
        "position": 4,
        "like": 107
      },
      "12499": {
        "position": 1,
        "like": 95
      },
      "12655": {
        "position": 1,
        "like": 28
      },
      "12696": {
        "position": 1,
        "like": 29
      },
      "12737": {
        "position": 1,
        "like": 32
      },
      "12778": {
        "position": 1,
        "like": 34
      },
      "12819": {
        "position": 1,
        "like": 35
      },
      "12860": {
        "position": 1,
        "like": 36
      },
      "12901": {
        "position": 1,
        "like": 37
      },
      "12942": {
        "position": 1,
        "like": 40
      },
      "13013": {
        "position": 4,
        "like": 132
      },
      "13043": {
        "position": 1,
        "like": 135
      },
      "13084": {
        "position": 1,
        "like": 30
      },
      "13125": {
        "position": 1,
        "like": 31
      },
      "13166": {
        "position": 1,
        "like": 33
      },
      "13207": {
        "position": 1,
        "like": 38
      },
      "13248": {
        "position": 1,
        "like": 39
      },
      "13384": {
        "position": 1,
        "like": 136
      },
      "13861": {
        "position": 2,
        "like": 134
      },
      "14788": {
        "position": 2,
        "like": 222
      },
      "14831": {
        "position": 2,
        "like": 242
      },
      "14838": {
        "position": 4,
        "like": 239
      },
      "14882": {
        "position": 4,
        "like": 247
      },
      "14928": {
        "position": 1,
        "like": 307
      },
      "14980": {
        "position": 1,
        "like": 306
      },
      "15074": {
        "position": 4,
        "like": 265
      },
      "15118": {
        "position": 1,
        "like": 268
      },
      "15153": {
        "position": 2,
        "like": 267
      },
      "15188": {
        "position": 2,
        "like": 282
      },
      "15402": {
        "position": 1,
        "like": 300
      },
      "15452": {
        "position": 1,
        "like": 299
      },
      "15454": {
        "position": 5,
        "like": 6
      },
      "15550": {
        "position": 5,
        "like": 10
      },
      "15617": {
        "position": 4,
        "like": 70
      },
      "15619": {
        "position": 2,
        "like": 72
      },
      "15622": {
        "position": 2,
        "like": 214
      },
      "15625": {
        "position": 5,
        "like": 208
      },
      "15656": {
        "position": 2,
        "like": 272
      },
      "15659": {
        "position": 2,
        "like": 80
      },
      "15662": {
        "position": 5,
        "like": 74
      },
      "15664": {
        "position": 5,
        "like": 201
      },
      "15695": {
        "position": 2,
        "like": 207
      },
      "15698": {
        "position": 2,
        "like": 55
      },
      "15761": {
        "position": 2,
        "like": 48
      },
      "15768": {
        "position": 1,
        "like": 110
      },
      "15798": {
        "position": 5,
        "like": 107
      },
      "15828": {
        "position": 1,
        "like": 109
      },
      "15904": {
        "position": 5,
        "like": 111
      },
      "16021": {
        "position": 5,
        "like": 115
      },
      "16461": {
        "position": 2,
        "like": 106
      },
      "16789": {
        "position": 2,
        "like": 197
      },
      "17033": {
        "position": 2,
        "like": 244
      },
      "17036": {
        "position": 2,
        "like": 307
      },
      "17043": {
        "position": 5,
        "like": 304
      },
      "17236": {
        "position": 2,
        "like": 277
      },
      "17239": {
        "position": 3,
        "like": 295
      },
      "17404": {
        "position": 2,
        "like": 300
      },
      "17411": {
        "position": 5,
        "like": 297
      },
      "17455": {
        "position": 6,
        "like": 7
      },
      "17519": {
        "position": 6,
        "like": 11
      },
      "17551": {
        "position": 2,
        "like": 73
      },
      "17554": {
        "position": 6,
        "like": 45
      },
      "17802": {
        "position": 2,
        "like": 50
      },
      "17811": {
        "position": 1,
        "like": 90
      },
      "17813": {
        "position": 1,
        "like": 91
      },
      "17820": {
        "position": 1,
        "like": 87
      },
      "17854": {
        "position": 2,
        "like": 83
      },
      "17857": {
        "position": 1,
        "like": 86
      },
      "17859": {
        "position": 1,
        "like": 114
      },
      "17889": {
        "position": 6,
        "like": 111
      },
      "17919": {
        "position": 1,
        "like": 113
      },
      "17949": {
        "position": 1,
        "like": 118
      },
      "17979": {
        "position": 6,
        "like": 115
      },
      "18009": {
        "position": 1,
        "like": 117
      },
      "18125": {
        "position": 3,
        "like": 161
      },
      "18286": {
        "position": 3,
        "like": 165
      },
      "18447": {
        "position": 3,
        "like": 169
      },
      "18608": {
        "position": 3,
        "like": 173
      },
      "18810": {
        "position": 3,
        "like": 105
      },
      "19097": {
        "position": 1,
        "like": 200
      },
      "19138": {
        "position": 3,
        "like": 197
      },
      "19179": {
        "position": 1,
        "like": 199
      },
      "19391": {
        "position": 2,
        "like": 245
      },
      "19397": {
        "position": 2,
        "like": 309
      },
      "19549": {
        "position": 2,
        "like": 278
      },
      "19552": {
        "position": 6,
        "like": 287
      },
      "19615": {
        "position": 2,
        "like": 289
      },
      "19697": {
        "position": 2,
        "like": 293
      },
      "19721": {
        "position": 2,
        "like": 302
      },
      "19756": {
        "position": 7,
        "like": 45
      },
      "19786": {
        "position": 1,
        "like": 53
      },
      "19816": {
        "position": 1,
        "like": 54
      },
      "19976": {
        "position": 2,
        "like": 51
      },
      "19979": {
        "position": 2,
        "like": 96
      },
      "19982": {
        "position": 4,
        "like": 88
      },
      "19985": {
        "position": 2,
        "like": 91
      },
      "19992": {
        "position": 2,
        "like": 84
      },
      "19995": {
        "position": 7,
        "like": 81
      },
      "20125": {
        "position": 1,
        "like": 164
      },
      "20166": {
        "position": 4,
        "like": 161
      },
      "20207": {
        "position": 1,
        "like": 163
      },
      "20248": {
        "position": 1,
        "like": 168
      },
      "20289": {
        "position": 4,
        "like": 165
      },
      "20330": {
        "position": 1,
        "like": 167
      },
      "20371": {
        "position": 1,
        "like": 172
      },
      "20412": {
        "position": 4,
        "like": 169
      },
      "20453": {
        "position": 1,
        "like": 171
      },
      "20494": {
        "position": 1,
        "like": 176
      },
      "20535": {
        "position": 4,
        "like": 173
      },
      "20576": {
        "position": 1,
        "like": 175
      },
      "20740": {
        "position": 4,
        "like": 145
      },
      "20901": {
        "position": 4,
        "like": 149
      },
      "21339": {
        "position": 2,
        "like": 179
      },
      "21343": {
        "position": 1,
        "like": 180
      },
      "21347": {
        "position": 1,
        "like": 182
      },
      "21349": {
        "position": 1,
        "like": 183
      },
      "21361": {
        "position": 2,
        "like": 310
      },
      "21418": {
        "position": 2,
        "like": 315
      },
      "21465": {
        "position": 7,
        "like": 275
      },
      "21509": {
        "position": 2,
        "like": 280
      },
      "21517": {
        "position": 2,
        "like": 290
      },
      "21536": {
        "position": 2,
        "like": 294
      },
      "21601": {
        "position": 2,
        "like": 303
      },
      "21604": {
        "position": 8,
        "like": 8
      },
      "21746": {
        "position": 3,
        "like": 24
      },
      "21777": {
        "position": 2,
        "like": 26
      },
      "21812": {
        "position": 1,
        "like": 27
      },
      "21850": {
        "position": 2,
        "like": 93
      },
      "21894": {
        "position": 2,
        "like": 43
      },
      "21900": {
        "position": 5,
        "like": 97
      },
      "22159": {
        "position": 1,
        "like": 148
      },
      "22200": {
        "position": 5,
        "like": 145
      },
      "22241": {
        "position": 1,
        "like": 147
      },
      "22282": {
        "position": 1,
        "like": 152
      },
      "22323": {
        "position": 5,
        "like": 149
      },
      "22364": {
        "position": 1,
        "like": 151
      },
      "22487": {
        "position": 8,
        "like": 127
      },
      "22517": {
        "position": 1,
        "like": 130
      },
      "22558": {
        "position": 1,
        "like": 131
      },
      "22599": {
        "position": 2,
        "like": 129
      },
      "22640": {
        "position": 8,
        "like": 177
      },
      "22761": {
        "position": 4,
        "like": 318
      },
      "22764": {
        "position": 4,
        "like": 317
      },
      "22812": {
        "position": 2,
        "like": 316
      },
      "22859": {
        "position": 2,
        "like": 281
      },
      "22864": {
        "position": 8,
        "like": 291
      },
      "22908": {
        "position": 3,
        "like": 296
      },
      "23061": {
        "position": 2,
        "like": 94
      },
      "23064": {
        "position": 6,
        "like": 41
      },
      "23105": {
        "position": 2,
        "like": 44
      },
      "23108": {
        "position": 6,
        "like": 97
      },
      "23393": {
        "position": 6,
        "like": 137
      },
      "23554": {
        "position": 6,
        "like": 141
      },
      "23715": {
        "position": 6,
        "like": 153
      },
      "23876": {
        "position": 6,
        "like": 157
      },
      "24050": {
        "position": 3,
        "like": 192
      },
      "24121": {
        "position": 9,
        "like": 313
      },
      "24209": {
        "position": 3,
        "like": 283
      },
      "24215": {
        "position": 4,
        "like": 56
      },
      "24245": {
        "position": 1,
        "like": 59
      },
      "24286": {
        "position": 2,
        "like": 58
      },
      "24327": {
        "position": 1,
        "like": 60
      },
      "24368": {
        "position": 7,
        "like": 97
      },
      "24409": {
        "position": 2,
        "like": 99
      },
      "24534": {
        "position": 1,
        "like": 102
      },
      "24616": {
        "position": 1,
        "like": 140
      },
      "24657": {
        "position": 7,
        "like": 137
      },
      "24698": {
        "position": 1,
        "like": 139
      },
      "24739": {
        "position": 1,
        "like": 144
      },
      "24780": {
        "position": 7,
        "like": 141
      },
      "24821": {
        "position": 1,
        "like": 143
      },
      "24862": {
        "position": 1,
        "like": 156
      },
      "24903": {
        "position": 7,
        "like": 153
      },
      "24944": {
        "position": 1,
        "like": 155
      },
      "24985": {
        "position": 1,
        "like": 160
      },
      "25026": {
        "position": 7,
        "like": 157
      },
      "25067": {
        "position": 1,
        "like": 159
      },
      "25108": {
        "position": 1,
        "like": 187
      },
      "25118": {
        "position": 1,
        "like": 186
      },
      "25120": {
        "position": 4,
        "like": 191
      },
      "25128": {
        "position": 1,
        "like": 196
      },
      "25162": {
        "position": 2,
        "like": 193
      },
      "25164": {
        "position": 2,
        "like": 195
      },
      "25198": {
        "position": 10,
        "like": 312
      },
      "25242": {
        "position": 4,
        "like": 283
      },
      "25249": {
        "position": 2,
        "like": 103
      },
      "25332": {
        "position": 8,
        "like": 104
      },
      "25373": {
        "position": 2,
        "like": 187
      },
      "25387": {
        "position": 2,
        "like": 285
      },
      "25435": {
        "position": 2,
        "like": 189
      },
      "25442": {
        "position": 2,
        "like": 286
      },
      "25487": {
        "position": 2,
        "like": 190
      },
      "25490": {
        "position": 7,
        "like": 184
      },
      "25536": {
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
      "266": "Inline",
      "267": [
        "ListSnoc",
        "block-expr_I2*",
        "block-expr_I2",
        true
      ],
      "268": "Inline",
      "269": "dA",
      "270": "Inline",
      "271": [
        "ListSnoc",
        "record-expr_A0_I2*",
        "record-expr_A0_I2",
        true
      ],
      "272": "Inline",
      "273": "dA",
      "274": "dA",
      "275": "dA",
      "276": "Inline",
      "277": [
        "ListSnoc",
        "table-expr_I3*",
        "table-expr_I3",
        true
      ],
      "278": "Inline",
      "279": "Inline",
      "280": [
        "ListSnoc",
        "table-expr_I5*",
        "table-expr_I5",
        true
      ],
      "281": "Inline",
      "282": "dA",
      "283": "dA",
      "284": "Inline",
      "285": [
        "ListSnoc",
        "table-row_I3*",
        "table-row_I3",
        true
      ],
      "286": "Inline",
      "287": "dA",
      "288": "Inline",
      "289": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "290": "Inline",
      "291": "dA",
      "292": "Inline",
      "293": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "294": "Inline",
      "295": "dA",
      "296": "dA",
      "297": "dA",
      "298": "Inline",
      "299": "Inline",
      "300": "Inline",
      "301": "Inline",
      "302": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "303": "Inline",
      "304": "dA",
      "305": "Inline",
      "306": "Inline",
      "307": "Inline",
      "308": "Inline",
      "309": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "310": "Inline",
      "311": "dA",
      "312": "dA",
      "313": "dA",
      "314": "Inline",
      "315": [
        "ListSnoc",
        "map-for-expr_A1_I5*",
        "map-for-expr_A1_I5",
        true
      ],
      "316": "Inline",
      "317": "dA",
      "318": "dA",
      "319": "dA"
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
      273,
      270,
      271,
      272,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      291,
      288,
      289,
      290,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      311,
      305,
      306,
      307,
      308,
      309,
      310,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      415,
      4,
      12,
      4,
      13,
      5,
      476,
      0,
      786,
      0,
      788,
      0,
      3002,
      0,
      3034,
      0,
      3292,
      0,
      3291,
      12,
      68,
      12,
      209,
      47,
      3407,
      0,
      3451,
      0,
      3481,
      0,
      3511,
      0,
      3541,
      0,
      3571,
      0,
      3601,
      0,
      3631,
      0,
      3661,
      0,
      3691,
      0,
      3721,
      0,
      202,
      45,
      75,
      14,
      4040,
      0,
      4042,
      0,
      4044,
      0,
      4046,
      0,
      4048,
      0,
      4050,
      0,
      4082,
      26,
      124,
      26,
      4319,
      0,
      4407,
      0,
      4438,
      0,
      4469,
      49,
      220,
      49,
      4670,
      0,
      5021,
      0,
      5065,
      0,
      5109,
      0,
      5153,
      0,
      5197,
      0,
      5285,
      0,
      5329,
      0,
      5373,
      0,
      5417,
      0,
      5461,
      0,
      5505,
      0,
      5549,
      0,
      6037,
      0,
      6039,
      0,
      6081,
      0,
      6087,
      48,
      212,
      48,
      6124,
      0,
      6129,
      0,
      270,
      53,
      78,
      15,
      6238,
      15,
      6258,
      0,
      6338,
      0,
      6340,
      46,
      205,
      46,
      6468,
      0,
      6498,
      0,
      6528,
      0,
      133,
      28,
      6802,
      0,
      7139,
      0,
      7182,
      0,
      240,
      50,
      7568,
      0,
      266,
      52,
      7983,
      0,
      8111,
      0,
      71,
      13,
      8224,
      25,
      120,
      25,
      8341,
      0,
      8344,
      0,
      8480,
      0,
      8497,
      0,
      8572,
      0,
      46,
      8,
      10831,
      0,
      10849,
      0,
      10867,
      0,
      10953,
      0,
      10971,
      0,
      10989,
      0,
      11007,
      0,
      11025,
      0,
      11043,
      0,
      11061,
      0,
      11079,
      0,
      11097,
      0,
      11115,
      0,
      11133,
      0,
      11158,
      51,
      243,
      51,
      11221,
      0,
      11245,
      0,
      305,
      61,
      11512,
      0,
      276,
      54,
      298,
      59,
      12062,
      0,
      12092,
      0,
      12122,
      0,
      12155,
      0,
      12196,
      0,
      12234,
      0,
      12281,
      0,
      12287,
      0,
      12337,
      0,
      12373,
      0,
      12375,
      9,
      49,
      9,
      12381,
      22,
      108,
      22,
      12499,
      0,
      82,
      16,
      12655,
      0,
      12696,
      0,
      12737,
      0,
      12778,
      0,
      12819,
      0,
      12860,
      0,
      12901,
      0,
      12942,
      0,
      13013,
      0,
      13043,
      0,
      13084,
      0,
      13125,
      0,
      13166,
      0,
      13207,
      0,
      13248,
      0,
      13384,
      0,
      13861,
      0,
      14788,
      0,
      14831,
      0,
      14838,
      0,
      14882,
      0,
      308,
      62,
      14928,
      62,
      14980,
      0,
      15074,
      0,
      15118,
      0,
      15153,
      0,
      15188,
      0,
      288,
      57,
      292,
      58,
      15402,
      60,
      301,
      60,
      15452,
      0,
      15454,
      0,
      15550,
      0,
      15617,
      0,
      15619,
      0,
      15622,
      0,
      15625,
      0,
      15656,
      0,
      15659,
      0,
      15662,
      0,
      15664,
      0,
      15695,
      0,
      15698,
      0,
      15761,
      0,
      15768,
      0,
      15798,
      0,
      15828,
      0,
      89,
      18,
      85,
      17,
      15904,
      23,
      112,
      23,
      16021,
      24,
      116,
      24,
      16461,
      0,
      16789,
      44,
      198,
      44,
      178,
      39,
      17033,
      0,
      17036,
      0,
      17043,
      0,
      314,
      63,
      279,
      55,
      17236,
      0,
      17239,
      0,
      17404,
      0,
      17411,
      0,
      17455,
      0,
      17519,
      0,
      17551,
      0,
      17554,
      10,
      52,
      10,
      25,
      6,
      17802,
      0,
      17811,
      0,
      17813,
      19,
      92,
      19,
      17820,
      0,
      17854,
      0,
      17857,
      0,
      17859,
      0,
      17889,
      0,
      17919,
      0,
      17949,
      0,
      17979,
      0,
      18009,
      0,
      42,
      7,
      18125,
      35,
      162,
      35,
      18286,
      36,
      166,
      36,
      18447,
      37,
      170,
      37,
      18608,
      38,
      174,
      38,
      18810,
      0,
      19097,
      0,
      19138,
      0,
      19179,
      0,
      128,
      27,
      181,
      40,
      19391,
      0,
      19397,
      0,
      19549,
      0,
      19552,
      0,
      19615,
      0,
      19697,
      0,
      19721,
      0,
      19756,
      0,
      19786,
      0,
      19816,
      0,
      19976,
      0,
      19979,
      0,
      19982,
      0,
      19985,
      0,
      19992,
      0,
      19995,
      0,
      20125,
      0,
      20166,
      0,
      20207,
      0,
      20248,
      0,
      20289,
      0,
      20330,
      0,
      20371,
      0,
      20412,
      0,
      20453,
      0,
      20494,
      0,
      20535,
      0,
      20576,
      0,
      20740,
      31,
      146,
      31,
      20901,
      32,
      150,
      32,
      21339,
      0,
      21343,
      0,
      21347,
      0,
      21349,
      0,
      21361,
      0,
      21418,
      0,
      21465,
      0,
      21509,
      0,
      21517,
      0,
      21536,
      0,
      21601,
      0,
      21604,
      0,
      57,
      11,
      21746,
      0,
      21777,
      0,
      21812,
      0,
      21850,
      0,
      21894,
      0,
      21900,
      65,
      98,
      20,
      22159,
      0,
      22200,
      0,
      22241,
      0,
      22282,
      0,
      22323,
      0,
      22364,
      0,
      22487,
      0,
      22517,
      0,
      22558,
      0,
      22599,
      0,
      22640,
      0,
      194,
      43,
      22761,
      0,
      22764,
      0,
      22812,
      0,
      22859,
      0,
      22864,
      0,
      22908,
      0,
      23061,
      0,
      23064,
      0,
      23105,
      0,
      23108,
      21,
      101,
      21,
      23393,
      29,
      138,
      29,
      23554,
      30,
      142,
      30,
      23715,
      33,
      154,
      33,
      23876,
      34,
      158,
      34,
      185,
      41,
      24050,
      0,
      24121,
      0,
      24209,
      56,
      284,
      56,
      24215,
      0,
      24245,
      0,
      24286,
      0,
      24327,
      0,
      24368,
      0,
      24409,
      0,
      24534,
      0,
      24616,
      0,
      24657,
      0,
      24698,
      0,
      24739,
      0,
      24780,
      0,
      24821,
      0,
      24862,
      0,
      24903,
      0,
      24944,
      0,
      24985,
      0,
      25026,
      0,
      25067,
      0,
      25108,
      42,
      188,
      42,
      25118,
      0,
      25120,
      0,
      25128,
      0,
      25162,
      0,
      25164,
      0,
      25198,
      0,
      25242,
      0,
      25249,
      0,
      25332,
      0,
      25373,
      0,
      25387,
      0,
      25435,
      0,
      25442,
      0,
      25487,
      0,
      25490,
      0,
      25536,
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
          63
        ]
      },
      {
        "'NAME": [
          64
        ]
      },
      {
        "type-ann_A6_I1?": [
          65
        ],
        "type-ann_A6_I1": [
          66
        ],
        "'LT": [
          67,
          22
        ],
        "'COLONEQUALS": [
          68
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
          69
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          71
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
          72
        ],
        "lambda-expr_A1_I1?": [
          73
        ],
        "lambda-expr_A1_I1": [
          74
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
          75
        ],
        "'RBRACE": [
          76
        ],
        "record-field": [
          77
        ]
      },
      {
        "'NAME": [
          78
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
          79
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
          80
        ],
        "type-ann_A7_I1": [
          81
        ],
        "full-expr": [
          82
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
          83
        ],
        "lambda-expr_A0_I1": [
          84
        ],
        "lambda-param": [
          85
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
          86
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
          87
        ]
      },
      {
        "'SEMI": [
          88
        ],
        "expr-stmt_I1?": [
          89
        ],
        "expr-stmt_I1": [
          90
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
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          92
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
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          93
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
          94
        ],
        "'VOID": [
          95
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
          96
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
          97
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
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          100
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          101
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'PARENNOSPACE": [
          102,
          82
        ],
        "'DOT": [
          103
        ],
        "'LBRACK": [
          104,
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
          105
        ],
        "'FOR": [
          106
        ],
        "'RBRACK": [
          107
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
          98
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
          108
        ],
        "full-expr": [
          109
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'LBRACE": [
          110
        ]
      },
      {
        "'LBRACE": [
          111
        ]
      },
      {
        "'LBRACE": [
          112
        ]
      },
      {
        "'NAME": [
          113
        ]
      },
      {
        "'SEMI": [
          114
        ],
        "'AS": [
          115
        ],
        "'PARENNOSPACE": [
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
        "'NAME": [
          -1,
          108
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'COMMA": [
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
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          120
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
          98
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
          108
        ],
        "full-expr": [
          121
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "type-ann_A6_I1?": [
          65
        ],
        "type-ann_A6_I1": [
          66
        ],
        "'LT": [
          67
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          112
        ],
        "'COMMA": [
          -1,
          112
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          122
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
          80
        ],
        "type-ann_A7_I1": [
          81
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          123
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          124
        ],
        "'RPAREN": [
          -1,
          114,
          116
        ],
        "'COMMA": [
          -1,
          116
        ]
      },
      {
        "'RPAREN": [
          125
        ]
      },
      {
        "'RPAREN": [
          -1,
          118
        ]
      },
      {
        "'COLON": [
          126
        ]
      },
      {
        "$": [
          -1,
          120
        ],
        "'NAME": [
          -1,
          120
        ],
        "'SEMI": [
          -1,
          120
        ],
        "'PARENNOSPACE": [
          -1,
          120
        ],
        "'STRING": [
          -1,
          120
        ],
        "'RPAREN": [
          -1,
          120
        ],
        "'LBRACE": [
          -1,
          120
        ],
        "'RBRACE": [
          -1,
          120
        ],
        "'SPY": [
          -1,
          120
        ],
        "'PARENSPACE": [
          -1,
          120
        ],
        "'COMMA": [
          -1,
          120
        ],
        "'INT": [
          -1,
          120
        ],
        "'LONG": [
          -1,
          120
        ],
        "'DOUBLE": [
          -1,
          120
        ],
        "'FLOAT": [
          -1,
          120
        ],
        "'BOOLEAN": [
          -1,
          120
        ],
        "'VOID": [
          -1,
          120
        ],
        "'LT": [
          -1,
          120
        ],
        "'GT": [
          -1,
          120
        ],
        "'THINARROW": [
          -1,
          120
        ],
        "'DATA": [
          -1,
          120
        ],
        "'IF": [
          -1,
          120
        ],
        "'FOR": [
          -1,
          120
        ],
        "'RETURN": [
          -1,
          120
        ],
        "'VAR": [
          -1,
          120
        ],
        "'REC": [
          -1,
          120
        ],
        "'ATCHECK": [
          -1,
          120
        ],
        "'ASSERTEQUALS": [
          -1,
          120
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          120
        ],
        "'ASSERTTRUE": [
          -1,
          120
        ],
        "'ASSERTFALSE": [
          -1,
          120
        ],
        "'ASSERTSATISFIES": [
          -1,
          120
        ],
        "'ASSERTRAISES": [
          -1,
          120
        ],
        "'IS": [
          -1,
          120
        ],
        "'ISNOT": [
          -1,
          120
        ],
        "'SATISFIES": [
          -1,
          120
        ],
        "'RAISES": [
          -1,
          120
        ],
        "'SWITCH": [
          -1,
          120
        ],
        "'CASE": [
          -1,
          120
        ],
        "'DEFAULT": [
          -1,
          120
        ],
        "'YIELD": [
          -1,
          120
        ],
        "'PLUS": [
          -1,
          120
        ],
        "'DASH": [
          -1,
          120
        ],
        "'TIMES": [
          -1,
          120
        ],
        "'SLASH": [
          -1,
          120
        ],
        "'PERCENT": [
          -1,
          120
        ],
        "'EQUALEQUAL": [
          -1,
          120
        ],
        "'NEQ": [
          -1,
          120
        ],
        "'LEQ": [
          -1,
          120
        ],
        "'GEQ": [
          -1,
          120
        ],
        "'AND": [
          -1,
          120
        ],
        "'OR": [
          -1,
          120
        ],
        "'BANG": [
          -1,
          120
        ],
        "'DOT": [
          -1,
          120
        ],
        "'LBRACK": [
          -1,
          120
        ],
        "'RBRACK": [
          -1,
          120
        ],
        "'NUMBER": [
          -1,
          120
        ],
        "'TRUE": [
          -1,
          120
        ],
        "'FALSE": [
          -1,
          120
        ],
        "'NULL": [
          -1,
          120
        ],
        "'PARENAFTERBRACE": [
          -1,
          120
        ],
        "'BLOCK": [
          -1,
          120
        ],
        "'TABLE": [
          -1,
          120
        ],
        "'ASK": [
          -1,
          120
        ],
        "'NEW": [
          -1,
          120
        ]
      },
      {
        "record-expr_A0_I2*": [
          127
        ],
        "'RBRACE": [
          -1,
          122
        ],
        "'COMMA": [
          -1,
          122
        ]
      },
      {
        "type-ann_A6_I1?": [
          65
        ],
        "type-ann_A6_I1": [
          66
        ],
        "'LT": [
          67,
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
          112,
          22
        ],
        "'COMMA": [
          -1,
          24,
          112,
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
          123
        ],
        "type-ann_A7_I1_I1*": [
          128
        ],
        "'COMMA": [
          -1,
          124
        ],
        "'THINARROW": [
          -1,
          126,
          124
        ]
      },
      {
        "'THINARROW": [
          129
        ]
      },
      {
        "'THINARROW": [
          -1,
          128
        ]
      },
      {
        "'RPAREN": [
          130
        ]
      },
      {
        "'RPAREN": [
          131
        ]
      },
      {
        "'RPAREN": [
          -1,
          130
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          132
        ],
        "'RPAREN": [
          -1,
          132,
          134
        ],
        "'COMMA": [
          -1,
          134
        ]
      },
      {
        "'PARENNOSPACE": [
          133
        ],
        "'EQUALS": [
          134
        ]
      },
      {
        "'LBRACE": [
          135
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
        "'PARENNOSPACE": [
          -1,
          136
        ],
        "'STRING": [
          -1,
          136
        ],
        "'LBRACE": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          136
        ],
        "'YIELD": [
          -1,
          136
        ],
        "'DASH": [
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
        "'BLOCK": [
          -1,
          136
        ],
        "'TABLE": [
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
        "type-ann_A6_I1?": [
          65
        ],
        "type-ann_A6_I1": [
          66
        ],
        "'LT": [
          67
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
          136
        ]
      },
      {
        "'NAME": [
          137
        ]
      },
      {
        "check-block_A1_I2*": [
          138
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
        "'NAME": [
          139
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          140
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'LT": [
          141
        ],
        "'GT": [
          142
        ],
        "binop-expr_I1": [
          143
        ],
        "binop": [
          144
        ],
        "'PLUS": [
          145
        ],
        "'DASH": [
          146,
          144
        ],
        "'TIMES": [
          147
        ],
        "'SLASH": [
          148
        ],
        "'PERCENT": [
          149
        ],
        "'EQUALEQUAL": [
          150
        ],
        "'NEQ": [
          151
        ],
        "'LEQ": [
          152
        ],
        "'GEQ": [
          153
        ],
        "'AND": [
          154
        ],
        "'OR": [
          155
        ],
        "$": [
          -1,
          144
        ],
        "'NAME": [
          -1,
          144
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'THINARROW": [
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
        "'IS": [
          -1,
          144
        ],
        "'ISNOT": [
          -1,
          144
        ],
        "'SATISFIES": [
          -1,
          144
        ],
        "'RAISES": [
          -1,
          144
        ],
        "'SWITCH": [
          -1,
          144
        ],
        "'CASE": [
          -1,
          144
        ],
        "'DEFAULT": [
          -1,
          144
        ],
        "'YIELD": [
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
        "'RBRACK": [
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
          98
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
          108
        ],
        "full-expr": [
          82
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
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
        "'LT": [
          -1,
          146
        ],
        "'GT": [
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
        "'PLUS": [
          -1,
          146
        ],
        "'DASH": [
          -1,
          146
        ],
        "'TIMES": [
          -1,
          146
        ],
        "'SLASH": [
          -1,
          146
        ],
        "'PERCENT": [
          -1,
          146
        ],
        "'EQUALEQUAL": [
          -1,
          146
        ],
        "'NEQ": [
          -1,
          146
        ],
        "'LEQ": [
          -1,
          146
        ],
        "'GEQ": [
          -1,
          146
        ],
        "'AND": [
          -1,
          146
        ],
        "'OR": [
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
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          156
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
          157
        ],
        "app-or-access_A0_I2": [
          158
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ],
        "'RPAREN": [
          -1,
          150
        ]
      },
      {
        "'NAME": [
          159
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          160
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'COLON": [
          161
        ]
      },
      {
        "'NAME": [
          162
        ],
        "'PARENSPACE": [
          163
        ]
      },
      {
        "$": [
          -1,
          152
        ],
        "'NAME": [
          -1,
          152
        ],
        "'SEMI": [
          -1,
          152
        ],
        "'PARENNOSPACE": [
          -1,
          152
        ],
        "'STRING": [
          -1,
          152
        ],
        "'RPAREN": [
          -1,
          152
        ],
        "'LBRACE": [
          -1,
          152
        ],
        "'RBRACE": [
          -1,
          152
        ],
        "'SPY": [
          -1,
          152
        ],
        "'PARENSPACE": [
          -1,
          152
        ],
        "'COMMA": [
          -1,
          152
        ],
        "'INT": [
          -1,
          152
        ],
        "'LONG": [
          -1,
          152
        ],
        "'DOUBLE": [
          -1,
          152
        ],
        "'FLOAT": [
          -1,
          152
        ],
        "'BOOLEAN": [
          -1,
          152
        ],
        "'VOID": [
          -1,
          152
        ],
        "'LT": [
          -1,
          152
        ],
        "'GT": [
          -1,
          152
        ],
        "'THINARROW": [
          -1,
          152
        ],
        "'DATA": [
          -1,
          152
        ],
        "'IF": [
          -1,
          152
        ],
        "'FOR": [
          -1,
          152
        ],
        "'RETURN": [
          -1,
          152
        ],
        "'VAR": [
          -1,
          152
        ],
        "'REC": [
          -1,
          152
        ],
        "'ATCHECK": [
          -1,
          152
        ],
        "'ASSERTEQUALS": [
          -1,
          152
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          152
        ],
        "'ASSERTTRUE": [
          -1,
          152
        ],
        "'ASSERTFALSE": [
          -1,
          152
        ],
        "'ASSERTSATISFIES": [
          -1,
          152
        ],
        "'ASSERTRAISES": [
          -1,
          152
        ],
        "'IS": [
          -1,
          152
        ],
        "'ISNOT": [
          -1,
          152
        ],
        "'SATISFIES": [
          -1,
          152
        ],
        "'RAISES": [
          -1,
          152
        ],
        "'SWITCH": [
          -1,
          152
        ],
        "'CASE": [
          -1,
          152
        ],
        "'DEFAULT": [
          -1,
          152
        ],
        "'YIELD": [
          -1,
          152
        ],
        "'PLUS": [
          -1,
          152
        ],
        "'DASH": [
          -1,
          152
        ],
        "'TIMES": [
          -1,
          152
        ],
        "'SLASH": [
          -1,
          152
        ],
        "'PERCENT": [
          -1,
          152
        ],
        "'EQUALEQUAL": [
          -1,
          152
        ],
        "'NEQ": [
          -1,
          152
        ],
        "'LEQ": [
          -1,
          152
        ],
        "'GEQ": [
          -1,
          152
        ],
        "'AND": [
          -1,
          152
        ],
        "'OR": [
          -1,
          152
        ],
        "'BANG": [
          -1,
          152
        ],
        "'DOT": [
          -1,
          152
        ],
        "'LBRACK": [
          -1,
          152
        ],
        "'RBRACK": [
          -1,
          152
        ],
        "'NUMBER": [
          -1,
          152
        ],
        "'TRUE": [
          -1,
          152
        ],
        "'FALSE": [
          -1,
          152
        ],
        "'NULL": [
          -1,
          152
        ],
        "'PARENAFTERBRACE": [
          -1,
          152
        ],
        "'BLOCK": [
          -1,
          152
        ],
        "'TABLE": [
          -1,
          152
        ],
        "'ASK": [
          -1,
          152
        ],
        "'NEW": [
          -1,
          152
        ]
      },
      {
        "'NAME": [
          78
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
          71
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
          82
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
          83
        ],
        "lambda-expr_A0_I1": [
          84
        ],
        "lambda-param": [
          85
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ],
        "'RPAREN": [
          -1,
          52
        ]
      },
      {
        "'RPAREN": [
          164
        ]
      },
      {
        "block-expr_I2*": [
          165
        ],
        "'NAME": [
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
        "'SWITCH": [
          -1,
          154
        ],
        "'YIELD": [
          -1,
          154
        ],
        "'DASH": [
          -1,
          154
        ],
        "'BANG": [
          -1,
          154
        ],
        "'LBRACK": [
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
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          166
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
          167
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          168
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "ask-branch": [
          169
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'PARENNOSPACE": [
          170
        ]
      },
      {
        "$": [
          -1,
          156
        ],
        "'IMPORT": [
          -1,
          156
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
        "'INCLUDE": [
          -1,
          156
        ],
        "'LBRACE": [
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
          171
        ]
      },
      {
        "'STRING": [
          172
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
          173
        ]
      },
      {
        "'STRING": [
          174
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          175
        ],
        "'COMMA": [
          -1,
          160
        ],
        "'GT": [
          -1,
          160
        ]
      },
      {
        "'SEMI": [
          176
        ],
        "assign-stmt_I3?": [
          177
        ],
        "assign-stmt_I3": [
          178
        ],
        "$": [
          -1,
          162,
          164
        ],
        "'NAME": [
          -1,
          162,
          164
        ],
        "'PARENNOSPACE": [
          -1,
          162,
          164
        ],
        "'STRING": [
          -1,
          162,
          164
        ],
        "'LBRACE": [
          -1,
          162,
          164
        ],
        "'RBRACE": [
          -1,
          162,
          164
        ],
        "'SPY": [
          -1,
          162,
          164
        ],
        "'PARENSPACE": [
          -1,
          162,
          164
        ],
        "'INT": [
          -1,
          162,
          164
        ],
        "'LONG": [
          -1,
          162,
          164
        ],
        "'DOUBLE": [
          -1,
          162,
          164
        ],
        "'FLOAT": [
          -1,
          162,
          164
        ],
        "'BOOLEAN": [
          -1,
          162,
          164
        ],
        "'VOID": [
          -1,
          162,
          164
        ],
        "'DATA": [
          -1,
          162,
          164
        ],
        "'IF": [
          -1,
          162,
          164
        ],
        "'FOR": [
          -1,
          162,
          164
        ],
        "'RETURN": [
          -1,
          162,
          164
        ],
        "'VAR": [
          -1,
          162,
          164
        ],
        "'REC": [
          -1,
          162,
          164
        ],
        "'ATCHECK": [
          -1,
          162,
          164
        ],
        "'ASSERTEQUALS": [
          -1,
          162,
          164
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          162,
          164
        ],
        "'ASSERTTRUE": [
          -1,
          162,
          164
        ],
        "'ASSERTFALSE": [
          -1,
          162,
          164
        ],
        "'ASSERTSATISFIES": [
          -1,
          162,
          164
        ],
        "'ASSERTRAISES": [
          -1,
          162,
          164
        ],
        "'SWITCH": [
          -1,
          162,
          164
        ],
        "'YIELD": [
          -1,
          162,
          164
        ],
        "'DASH": [
          -1,
          162,
          164
        ],
        "'BANG": [
          -1,
          162,
          164
        ],
        "'LBRACK": [
          -1,
          162,
          164
        ],
        "'NUMBER": [
          -1,
          162,
          164
        ],
        "'TRUE": [
          -1,
          162,
          164
        ],
        "'FALSE": [
          -1,
          162,
          164
        ],
        "'NULL": [
          -1,
          162,
          164
        ],
        "'PARENAFTERBRACE": [
          -1,
          162,
          164
        ],
        "'BLOCK": [
          -1,
          162,
          164
        ],
        "'TABLE": [
          -1,
          162,
          164
        ],
        "'ASK": [
          -1,
          162,
          164
        ],
        "'NEW": [
          -1,
          162,
          164
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          128
        ],
        "'COMMA": [
          -1,
          124
        ],
        "'THINARROW": [
          -1,
          126,
          124
        ]
      },
      {
        "'RPAREN": [
          -1,
          166
        ],
        "'COMMA": [
          -1,
          166
        ]
      },
      {
        "'COMMA": [
          179
        ],
        "lambda-expr_A1_I1_I1": [
          180
        ],
        "'RPAREN": [
          -1,
          168
        ]
      },
      {
        "'THINARROW": [
          181
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          182
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RBRACE": [
          183
        ],
        "'COMMA": [
          184
        ],
        "record-expr_A0_I2": [
          185
        ]
      },
      {
        "'COMMA": [
          186
        ],
        "type-ann_A7_I1_I1": [
          187
        ],
        "'THINARROW": [
          -1,
          170
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          188
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
          172
        ],
        "'NAME": [
          -1,
          172
        ],
        "'SEMI": [
          -1,
          172
        ],
        "'PARENNOSPACE": [
          -1,
          172
        ],
        "'STRING": [
          -1,
          172
        ],
        "'RPAREN": [
          -1,
          172
        ],
        "'LBRACE": [
          -1,
          172
        ],
        "'RBRACE": [
          -1,
          172
        ],
        "'SPY": [
          -1,
          172
        ],
        "'PARENSPACE": [
          -1,
          172
        ],
        "'COMMA": [
          -1,
          172
        ],
        "'INT": [
          -1,
          172
        ],
        "'LONG": [
          -1,
          172
        ],
        "'DOUBLE": [
          -1,
          172
        ],
        "'FLOAT": [
          -1,
          172
        ],
        "'BOOLEAN": [
          -1,
          172
        ],
        "'VOID": [
          -1,
          172
        ],
        "'LT": [
          -1,
          172
        ],
        "'GT": [
          -1,
          172
        ],
        "'THINARROW": [
          -1,
          172
        ],
        "'DATA": [
          -1,
          172
        ],
        "'IF": [
          -1,
          172
        ],
        "'FOR": [
          -1,
          172
        ],
        "'RETURN": [
          -1,
          172
        ],
        "'VAR": [
          -1,
          172
        ],
        "'REC": [
          -1,
          172
        ],
        "'ATCHECK": [
          -1,
          172
        ],
        "'ASSERTEQUALS": [
          -1,
          172
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          172
        ],
        "'ASSERTTRUE": [
          -1,
          172
        ],
        "'ASSERTFALSE": [
          -1,
          172
        ],
        "'ASSERTSATISFIES": [
          -1,
          172
        ],
        "'ASSERTRAISES": [
          -1,
          172
        ],
        "'IS": [
          -1,
          172
        ],
        "'ISNOT": [
          -1,
          172
        ],
        "'SATISFIES": [
          -1,
          172
        ],
        "'RAISES": [
          -1,
          172
        ],
        "'SWITCH": [
          -1,
          172
        ],
        "'CASE": [
          -1,
          172
        ],
        "'DEFAULT": [
          -1,
          172
        ],
        "'YIELD": [
          -1,
          172
        ],
        "'PLUS": [
          -1,
          172
        ],
        "'DASH": [
          -1,
          172
        ],
        "'TIMES": [
          -1,
          172
        ],
        "'SLASH": [
          -1,
          172
        ],
        "'PERCENT": [
          -1,
          172
        ],
        "'EQUALEQUAL": [
          -1,
          172
        ],
        "'NEQ": [
          -1,
          172
        ],
        "'LEQ": [
          -1,
          172
        ],
        "'GEQ": [
          -1,
          172
        ],
        "'AND": [
          -1,
          172
        ],
        "'OR": [
          -1,
          172
        ],
        "'BANG": [
          -1,
          172
        ],
        "'DOT": [
          -1,
          172
        ],
        "'LBRACK": [
          -1,
          172
        ],
        "'RBRACK": [
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
        "'BLOCK": [
          -1,
          172
        ],
        "'TABLE": [
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
        "'THINARROW": [
          189
        ]
      },
      {
        "'COMMA": [
          190
        ],
        "lambda-expr_A0_I1_I1": [
          191
        ],
        "'RPAREN": [
          -1,
          174
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          192
        ],
        "fun-decl_I3?": [
          193
        ],
        "fun-decl_I3": [
          194
        ],
        "param": [
          195
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
          176
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          196
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          197
        ],
        "variant-decl": [
          198
        ]
      },
      {
        "'EQUALS": [
          199
        ]
      },
      {
        "'EQUALS": [
          200
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          209
        ],
        "block-stmt": [
          210
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          214
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          217
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
          218
        ],
        "full-expr": [
          219
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          222
        ],
        "'ASSERTEQUALS": [
          223
        ],
        "'ASSERTNOTEQUALS": [
          224
        ],
        "'ASSERTTRUE": [
          225
        ],
        "'ASSERTFALSE": [
          226
        ],
        "'ASSERTSATISFIES": [
          227
        ],
        "'ASSERTRAISES": [
          228
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          229
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'PARENNOSPACE": [
          230
        ]
      },
      {
        "'RPAREN": [
          231
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
        "'LBRACE": [
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
        "'BLOCK": [
          -1,
          178
        ],
        "'TABLE": [
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
        "$": [
          -1,
          182
        ],
        "'NAME": [
          -1,
          182
        ],
        "'SEMI": [
          -1,
          182
        ],
        "'PARENNOSPACE": [
          -1,
          182
        ],
        "'STRING": [
          -1,
          182
        ],
        "'RPAREN": [
          -1,
          182
        ],
        "'LBRACE": [
          -1,
          182
        ],
        "'RBRACE": [
          -1,
          182
        ],
        "'SPY": [
          -1,
          182
        ],
        "'PARENSPACE": [
          -1,
          182
        ],
        "'COMMA": [
          -1,
          182
        ],
        "'INT": [
          -1,
          182
        ],
        "'LONG": [
          -1,
          182
        ],
        "'DOUBLE": [
          -1,
          182
        ],
        "'FLOAT": [
          -1,
          182
        ],
        "'BOOLEAN": [
          -1,
          182
        ],
        "'VOID": [
          -1,
          182
        ],
        "'LT": [
          -1,
          182
        ],
        "'GT": [
          -1,
          182
        ],
        "'THINARROW": [
          -1,
          182
        ],
        "'DATA": [
          -1,
          182
        ],
        "'IF": [
          -1,
          182
        ],
        "'FOR": [
          -1,
          182
        ],
        "'RETURN": [
          -1,
          182
        ],
        "'VAR": [
          -1,
          182
        ],
        "'REC": [
          -1,
          182
        ],
        "'ATCHECK": [
          -1,
          182
        ],
        "'ASSERTEQUALS": [
          -1,
          182
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          182
        ],
        "'ASSERTTRUE": [
          -1,
          182
        ],
        "'ASSERTFALSE": [
          -1,
          182
        ],
        "'ASSERTSATISFIES": [
          -1,
          182
        ],
        "'ASSERTRAISES": [
          -1,
          182
        ],
        "'IS": [
          -1,
          182
        ],
        "'ISNOT": [
          -1,
          182
        ],
        "'SATISFIES": [
          -1,
          182
        ],
        "'RAISES": [
          -1,
          182
        ],
        "'SWITCH": [
          -1,
          182
        ],
        "'CASE": [
          -1,
          182
        ],
        "'DEFAULT": [
          -1,
          182
        ],
        "'YIELD": [
          -1,
          182
        ],
        "'PLUS": [
          -1,
          182
        ],
        "'DASH": [
          -1,
          182
        ],
        "'TIMES": [
          -1,
          182
        ],
        "'SLASH": [
          -1,
          182
        ],
        "'PERCENT": [
          -1,
          182
        ],
        "'EQUALEQUAL": [
          -1,
          182
        ],
        "'NEQ": [
          -1,
          182
        ],
        "'LEQ": [
          -1,
          182
        ],
        "'GEQ": [
          -1,
          182
        ],
        "'AND": [
          -1,
          182
        ],
        "'OR": [
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
        "'RBRACK": [
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
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          232
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'LBRACE": [
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
        "app-or-access_A0_I2_I1*": [
          233
        ],
        "'RPAREN": [
          -1,
          206,
          208
        ],
        "'COMMA": [
          -1,
          208
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
          210
        ]
      },
      {
        "$": [
          -1,
          212
        ],
        "'NAME": [
          -1,
          212
        ],
        "'SEMI": [
          -1,
          212
        ],
        "'PARENNOSPACE": [
          -1,
          212
        ],
        "'STRING": [
          -1,
          212
        ],
        "'RPAREN": [
          -1,
          212
        ],
        "'LBRACE": [
          -1,
          212
        ],
        "'RBRACE": [
          -1,
          212
        ],
        "'SPY": [
          -1,
          212
        ],
        "'PARENSPACE": [
          -1,
          212
        ],
        "'COMMA": [
          -1,
          212
        ],
        "'INT": [
          -1,
          212
        ],
        "'LONG": [
          -1,
          212
        ],
        "'DOUBLE": [
          -1,
          212
        ],
        "'FLOAT": [
          -1,
          212
        ],
        "'BOOLEAN": [
          -1,
          212
        ],
        "'VOID": [
          -1,
          212
        ],
        "'LT": [
          -1,
          212
        ],
        "'GT": [
          -1,
          212
        ],
        "'THINARROW": [
          -1,
          212
        ],
        "'DATA": [
          -1,
          212
        ],
        "'IF": [
          -1,
          212
        ],
        "'FOR": [
          -1,
          212
        ],
        "'RETURN": [
          -1,
          212
        ],
        "'VAR": [
          -1,
          212
        ],
        "'REC": [
          -1,
          212
        ],
        "'ATCHECK": [
          -1,
          212
        ],
        "'ASSERTEQUALS": [
          -1,
          212
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          212
        ],
        "'ASSERTTRUE": [
          -1,
          212
        ],
        "'ASSERTFALSE": [
          -1,
          212
        ],
        "'ASSERTSATISFIES": [
          -1,
          212
        ],
        "'ASSERTRAISES": [
          -1,
          212
        ],
        "'IS": [
          -1,
          212
        ],
        "'ISNOT": [
          -1,
          212
        ],
        "'SATISFIES": [
          -1,
          212
        ],
        "'RAISES": [
          -1,
          212
        ],
        "'SWITCH": [
          -1,
          212
        ],
        "'CASE": [
          -1,
          212
        ],
        "'DEFAULT": [
          -1,
          212
        ],
        "'YIELD": [
          -1,
          212
        ],
        "'PLUS": [
          -1,
          212
        ],
        "'DASH": [
          -1,
          212
        ],
        "'TIMES": [
          -1,
          212
        ],
        "'SLASH": [
          -1,
          212
        ],
        "'PERCENT": [
          -1,
          212
        ],
        "'EQUALEQUAL": [
          -1,
          212
        ],
        "'NEQ": [
          -1,
          212
        ],
        "'LEQ": [
          -1,
          212
        ],
        "'GEQ": [
          -1,
          212
        ],
        "'AND": [
          -1,
          212
        ],
        "'OR": [
          -1,
          212
        ],
        "'BANG": [
          -1,
          212
        ],
        "'DOT": [
          -1,
          212
        ],
        "'LBRACK": [
          -1,
          212
        ],
        "'RBRACK": [
          -1,
          212
        ],
        "'NUMBER": [
          -1,
          212
        ],
        "'TRUE": [
          -1,
          212
        ],
        "'FALSE": [
          -1,
          212
        ],
        "'NULL": [
          -1,
          212
        ],
        "'PARENAFTERBRACE": [
          -1,
          212
        ],
        "'BLOCK": [
          -1,
          212
        ],
        "'TABLE": [
          -1,
          212
        ],
        "'ASK": [
          -1,
          212
        ],
        "'NEW": [
          -1,
          212
        ]
      },
      {
        "'RBRACK": [
          235
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          236
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ],
        "construct-expr_A0_I3?": [
          237
        ],
        "construct-expr_A0_I3": [
          238
        ],
        "'RBRACK": [
          -1,
          214
        ]
      },
      {
        "'PARENNOSPACE": [
          239
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          240
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
          216
        ],
        "'NAME": [
          -1,
          216
        ],
        "'SEMI": [
          -1,
          216
        ],
        "'PARENNOSPACE": [
          -1,
          216
        ],
        "'STRING": [
          -1,
          216
        ],
        "'RPAREN": [
          -1,
          216
        ],
        "'LBRACE": [
          -1,
          216
        ],
        "'RBRACE": [
          -1,
          216
        ],
        "'SPY": [
          -1,
          216
        ],
        "'PARENSPACE": [
          -1,
          216
        ],
        "'COMMA": [
          -1,
          216
        ],
        "'INT": [
          -1,
          216
        ],
        "'LONG": [
          -1,
          216
        ],
        "'DOUBLE": [
          -1,
          216
        ],
        "'FLOAT": [
          -1,
          216
        ],
        "'BOOLEAN": [
          -1,
          216
        ],
        "'VOID": [
          -1,
          216
        ],
        "'LT": [
          -1,
          216
        ],
        "'GT": [
          -1,
          216
        ],
        "'THINARROW": [
          -1,
          216
        ],
        "'DATA": [
          -1,
          216
        ],
        "'IF": [
          -1,
          216
        ],
        "'FOR": [
          -1,
          216
        ],
        "'RETURN": [
          -1,
          216
        ],
        "'VAR": [
          -1,
          216
        ],
        "'REC": [
          -1,
          216
        ],
        "'ATCHECK": [
          -1,
          216
        ],
        "'ASSERTEQUALS": [
          -1,
          216
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          216
        ],
        "'ASSERTTRUE": [
          -1,
          216
        ],
        "'ASSERTFALSE": [
          -1,
          216
        ],
        "'ASSERTSATISFIES": [
          -1,
          216
        ],
        "'ASSERTRAISES": [
          -1,
          216
        ],
        "'IS": [
          -1,
          216
        ],
        "'ISNOT": [
          -1,
          216
        ],
        "'SATISFIES": [
          -1,
          216
        ],
        "'RAISES": [
          -1,
          216
        ],
        "'SWITCH": [
          -1,
          216
        ],
        "'CASE": [
          -1,
          216
        ],
        "'DEFAULT": [
          -1,
          216
        ],
        "'YIELD": [
          -1,
          216
        ],
        "'PLUS": [
          -1,
          216
        ],
        "'DASH": [
          -1,
          216
        ],
        "'TIMES": [
          -1,
          216
        ],
        "'SLASH": [
          -1,
          216
        ],
        "'PERCENT": [
          -1,
          216
        ],
        "'EQUALEQUAL": [
          -1,
          216
        ],
        "'NEQ": [
          -1,
          216
        ],
        "'LEQ": [
          -1,
          216
        ],
        "'GEQ": [
          -1,
          216
        ],
        "'AND": [
          -1,
          216
        ],
        "'OR": [
          -1,
          216
        ],
        "'BANG": [
          -1,
          216
        ],
        "'DOT": [
          -1,
          216
        ],
        "'LBRACK": [
          -1,
          216
        ],
        "'RBRACK": [
          -1,
          216
        ],
        "'NUMBER": [
          -1,
          216
        ],
        "'TRUE": [
          -1,
          216
        ],
        "'FALSE": [
          -1,
          216
        ],
        "'NULL": [
          -1,
          216
        ],
        "'PARENAFTERBRACE": [
          -1,
          216
        ],
        "'BLOCK": [
          -1,
          216
        ],
        "'TABLE": [
          -1,
          216
        ],
        "'ASK": [
          -1,
          216
        ],
        "'NEW": [
          -1,
          216
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          241
        ],
        "block-stmt": [
          242
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          214
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
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
          218
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          229
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
        "'BLOCK": [
          59
        ],
        "block-expr_I2": [
          243
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          244
        ]
      },
      {
        "table-expr_I3*": [
          245
        ],
        "'SEMI": [
          -1,
          218
        ],
        "'COMMA": [
          -1,
          218
        ]
      },
      {
        "'THINARROW": [
          246
        ]
      },
      {
        "'SEMI": [
          247
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          248
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ],
        "new-expr_I3?": [
          249
        ],
        "new-expr_I3": [
          250
        ],
        "'RPAREN": [
          -1,
          220
        ]
      },
      {
        "'SEMI": [
          251
        ]
      },
      {
        "'RPAREN": [
          252
        ]
      },
      {
        "'SEMI": [
          253
        ]
      },
      {
        "'RPAREN": [
          254
        ]
      },
      {
        "'COMMA": [
          255
        ],
        "'GT": [
          256
        ],
        "type-ann_A6_I1_I2": [
          257
        ]
      },
      {
        "$": [
          -1,
          222
        ],
        "'NAME": [
          -1,
          222
        ],
        "'PARENNOSPACE": [
          -1,
          222
        ],
        "'STRING": [
          -1,
          222
        ],
        "'LBRACE": [
          -1,
          222
        ],
        "'RBRACE": [
          -1,
          222
        ],
        "'SPY": [
          -1,
          222
        ],
        "'PARENSPACE": [
          -1,
          222
        ],
        "'INT": [
          -1,
          222
        ],
        "'LONG": [
          -1,
          222
        ],
        "'DOUBLE": [
          -1,
          222
        ],
        "'FLOAT": [
          -1,
          222
        ],
        "'BOOLEAN": [
          -1,
          222
        ],
        "'VOID": [
          -1,
          222
        ],
        "'DATA": [
          -1,
          222
        ],
        "'IF": [
          -1,
          222
        ],
        "'FOR": [
          -1,
          222
        ],
        "'RETURN": [
          -1,
          222
        ],
        "'VAR": [
          -1,
          222
        ],
        "'REC": [
          -1,
          222
        ],
        "'ATCHECK": [
          -1,
          222
        ],
        "'ASSERTEQUALS": [
          -1,
          222
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          222
        ],
        "'ASSERTTRUE": [
          -1,
          222
        ],
        "'ASSERTFALSE": [
          -1,
          222
        ],
        "'ASSERTSATISFIES": [
          -1,
          222
        ],
        "'ASSERTRAISES": [
          -1,
          222
        ],
        "'SWITCH": [
          -1,
          222
        ],
        "'YIELD": [
          -1,
          222
        ],
        "'DASH": [
          -1,
          222
        ],
        "'BANG": [
          -1,
          222
        ],
        "'LBRACK": [
          -1,
          222
        ],
        "'NUMBER": [
          -1,
          222
        ],
        "'TRUE": [
          -1,
          222
        ],
        "'FALSE": [
          -1,
          222
        ],
        "'NULL": [
          -1,
          222
        ],
        "'PARENAFTERBRACE": [
          -1,
          222
        ],
        "'BLOCK": [
          -1,
          222
        ],
        "'TABLE": [
          -1,
          222
        ],
        "'ASK": [
          -1,
          222
        ],
        "'NEW": [
          -1,
          222
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
        "'NAME": [
          69
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          71
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
          258
        ]
      },
      {
        "'RPAREN": [
          -1,
          228
        ],
        "'COMMA": [
          -1,
          228
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          259
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RBRACE": [
          -1,
          230
        ],
        "'COMMA": [
          -1,
          230
        ]
      },
      {
        "$": [
          -1,
          232
        ],
        "'NAME": [
          -1,
          232
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          232
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          232
        ],
        "'GT": [
          -1,
          232
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          232
        ],
        "'ISNOT": [
          -1,
          232
        ],
        "'SATISFIES": [
          -1,
          232
        ],
        "'RAISES": [
          -1,
          232
        ],
        "'SWITCH": [
          -1,
          232
        ],
        "'CASE": [
          -1,
          232
        ],
        "'DEFAULT": [
          -1,
          232
        ],
        "'YIELD": [
          -1,
          232
        ],
        "'PLUS": [
          -1,
          232
        ],
        "'DASH": [
          -1,
          232
        ],
        "'TIMES": [
          -1,
          232
        ],
        "'SLASH": [
          -1,
          232
        ],
        "'PERCENT": [
          -1,
          232
        ],
        "'EQUALEQUAL": [
          -1,
          232
        ],
        "'NEQ": [
          -1,
          232
        ],
        "'LEQ": [
          -1,
          232
        ],
        "'GEQ": [
          -1,
          232
        ],
        "'AND": [
          -1,
          232
        ],
        "'OR": [
          -1,
          232
        ],
        "'BANG": [
          -1,
          232
        ],
        "'DOT": [
          -1,
          232
        ],
        "'LBRACK": [
          -1,
          232
        ],
        "'RBRACK": [
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
        "'BLOCK": [
          -1,
          232
        ],
        "'TABLE": [
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
          75
        ],
        "record-field": [
          260
        ]
      },
      {
        "'RBRACE": [
          -1,
          234
        ],
        "'COMMA": [
          -1,
          234
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          261
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
          236
        ],
        "'THINARROW": [
          -1,
          236
        ]
      },
      {
        "'RPAREN": [
          262
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          263
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          69
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          71
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
          264
        ]
      },
      {
        "'RPAREN": [
          -1,
          238
        ],
        "'COMMA": [
          -1,
          238
        ]
      },
      {
        "'NAME": [
          265
        ]
      },
      {
        "'RPAREN": [
          266
        ]
      },
      {
        "'RPAREN": [
          -1,
          240
        ]
      },
      {
        "fun-decl_I3_I1*": [
          267
        ],
        "'RPAREN": [
          -1,
          242,
          244
        ],
        "'COMMA": [
          -1,
          244
        ]
      },
      {
        "'SEMI": [
          268
        ],
        "let-stmt_I4?": [
          269
        ],
        "let-stmt_I4": [
          270
        ],
        "$": [
          -1,
          246,
          248
        ],
        "'NAME": [
          -1,
          246,
          248
        ],
        "'PARENNOSPACE": [
          -1,
          246,
          248
        ],
        "'STRING": [
          -1,
          246,
          248
        ],
        "'LBRACE": [
          -1,
          246,
          248
        ],
        "'RBRACE": [
          -1,
          246,
          248
        ],
        "'SPY": [
          -1,
          246,
          248
        ],
        "'PARENSPACE": [
          -1,
          246,
          248
        ],
        "'INT": [
          -1,
          246,
          248
        ],
        "'LONG": [
          -1,
          246,
          248
        ],
        "'DOUBLE": [
          -1,
          246,
          248
        ],
        "'FLOAT": [
          -1,
          246,
          248
        ],
        "'BOOLEAN": [
          -1,
          246,
          248
        ],
        "'VOID": [
          -1,
          246,
          248
        ],
        "'DATA": [
          -1,
          246,
          248
        ],
        "'IF": [
          -1,
          246,
          248
        ],
        "'FOR": [
          -1,
          246,
          248
        ],
        "'RETURN": [
          -1,
          246,
          248
        ],
        "'VAR": [
          -1,
          246,
          248
        ],
        "'REC": [
          -1,
          246,
          248
        ],
        "'ATCHECK": [
          -1,
          246,
          248
        ],
        "'ASSERTEQUALS": [
          -1,
          246,
          248
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          246,
          248
        ],
        "'ASSERTTRUE": [
          -1,
          246,
          248
        ],
        "'ASSERTFALSE": [
          -1,
          246,
          248
        ],
        "'ASSERTSATISFIES": [
          -1,
          246,
          248
        ],
        "'ASSERTRAISES": [
          -1,
          246,
          248
        ],
        "'SWITCH": [
          -1,
          246,
          248
        ],
        "'YIELD": [
          -1,
          246,
          248
        ],
        "'DASH": [
          -1,
          246,
          248
        ],
        "'BANG": [
          -1,
          246,
          248
        ],
        "'LBRACK": [
          -1,
          246,
          248
        ],
        "'NUMBER": [
          -1,
          246,
          248
        ],
        "'TRUE": [
          -1,
          246,
          248
        ],
        "'FALSE": [
          -1,
          246,
          248
        ],
        "'NULL": [
          -1,
          246,
          248
        ],
        "'PARENAFTERBRACE": [
          -1,
          246,
          248
        ],
        "'BLOCK": [
          -1,
          246,
          248
        ],
        "'TABLE": [
          -1,
          246,
          248
        ],
        "'ASK": [
          -1,
          246,
          248
        ],
        "'NEW": [
          -1,
          246,
          248
        ]
      },
      {
        "'PARENNOSPACE": [
          271
        ],
        "'SEMI": [
          -1,
          250
        ],
        "'RBRACE": [
          -1,
          250
        ]
      },
      {
        "data-decl_I4*": [
          272
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
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          273
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          274
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          254
        ],
        "'TABLE": [
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
        "$": [
          -1,
          270
        ],
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
        "'PARENSPACE": [
          275
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
          276
        ]
      },
      {
        "'SEMI": [
          88
        ],
        "expr-stmt_I1?": [
          89
        ],
        "expr-stmt_I1": [
          90
        ],
        "'IS": [
          277
        ],
        "'ISNOT": [
          278
        ],
        "'SATISFIES": [
          279
        ],
        "'RAISES": [
          280
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
          281
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'SEMI": [
          282
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
          108
        ],
        "full-expr": [
          283
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'PARENNOSPACE": [
          284
        ]
      },
      {
        "'PARENNOSPACE": [
          285
        ]
      },
      {
        "'PARENNOSPACE": [
          286
        ]
      },
      {
        "'PARENNOSPACE": [
          287
        ]
      },
      {
        "'PARENNOSPACE": [
          288
        ]
      },
      {
        "'PARENNOSPACE": [
          289
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          290
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RPAREN": [
          291
        ]
      },
      {
        "'LBRACE": [
          292
        ]
      },
      {
        "$": [
          -1,
          288
        ],
        "'NAME": [
          -1,
          288
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          288
        ],
        "'GT": [
          -1,
          288
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          288
        ],
        "'ISNOT": [
          -1,
          288
        ],
        "'SATISFIES": [
          -1,
          288
        ],
        "'RAISES": [
          -1,
          288
        ],
        "'SWITCH": [
          -1,
          288
        ],
        "'CASE": [
          -1,
          288
        ],
        "'DEFAULT": [
          -1,
          288
        ],
        "'YIELD": [
          -1,
          288
        ],
        "'PLUS": [
          -1,
          288
        ],
        "'DASH": [
          -1,
          288
        ],
        "'TIMES": [
          -1,
          288
        ],
        "'SLASH": [
          -1,
          288
        ],
        "'PERCENT": [
          -1,
          288
        ],
        "'EQUALEQUAL": [
          -1,
          288
        ],
        "'NEQ": [
          -1,
          288
        ],
        "'LEQ": [
          -1,
          288
        ],
        "'GEQ": [
          -1,
          288
        ],
        "'AND": [
          -1,
          288
        ],
        "'OR": [
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
        "'RBRACK": [
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
        "'COMMA": [
          293
        ],
        "app-or-access_A0_I2_I1": [
          294
        ],
        "'RPAREN": [
          -1,
          290
        ]
      },
      {
        "$": [
          -1,
          292
        ],
        "'NAME": [
          -1,
          292
        ],
        "'SEMI": [
          -1,
          292
        ],
        "'PARENNOSPACE": [
          -1,
          292
        ],
        "'STRING": [
          -1,
          292
        ],
        "'RPAREN": [
          -1,
          292
        ],
        "'LBRACE": [
          -1,
          292
        ],
        "'RBRACE": [
          -1,
          292
        ],
        "'SPY": [
          -1,
          292
        ],
        "'PARENSPACE": [
          -1,
          292
        ],
        "'COMMA": [
          -1,
          292
        ],
        "'INT": [
          -1,
          292
        ],
        "'LONG": [
          -1,
          292
        ],
        "'DOUBLE": [
          -1,
          292
        ],
        "'FLOAT": [
          -1,
          292
        ],
        "'BOOLEAN": [
          -1,
          292
        ],
        "'VOID": [
          -1,
          292
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          292
        ],
        "'IF": [
          -1,
          292
        ],
        "'FOR": [
          -1,
          292
        ],
        "'RETURN": [
          -1,
          292
        ],
        "'VAR": [
          -1,
          292
        ],
        "'REC": [
          -1,
          292
        ],
        "'ATCHECK": [
          -1,
          292
        ],
        "'ASSERTEQUALS": [
          -1,
          292
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          292
        ],
        "'ASSERTTRUE": [
          -1,
          292
        ],
        "'ASSERTFALSE": [
          -1,
          292
        ],
        "'ASSERTSATISFIES": [
          -1,
          292
        ],
        "'ASSERTRAISES": [
          -1,
          292
        ],
        "'IS": [
          -1,
          292
        ],
        "'ISNOT": [
          -1,
          292
        ],
        "'SATISFIES": [
          -1,
          292
        ],
        "'RAISES": [
          -1,
          292
        ],
        "'SWITCH": [
          -1,
          292
        ],
        "'CASE": [
          -1,
          292
        ],
        "'DEFAULT": [
          -1,
          292
        ],
        "'YIELD": [
          -1,
          292
        ],
        "'PLUS": [
          -1,
          292
        ],
        "'DASH": [
          -1,
          292
        ],
        "'TIMES": [
          -1,
          292
        ],
        "'SLASH": [
          -1,
          292
        ],
        "'PERCENT": [
          -1,
          292
        ],
        "'EQUALEQUAL": [
          -1,
          292
        ],
        "'NEQ": [
          -1,
          292
        ],
        "'LEQ": [
          -1,
          292
        ],
        "'GEQ": [
          -1,
          292
        ],
        "'AND": [
          -1,
          292
        ],
        "'OR": [
          -1,
          292
        ],
        "'BANG": [
          -1,
          292
        ],
        "'DOT": [
          -1,
          292
        ],
        "'LBRACK": [
          -1,
          292
        ],
        "'RBRACK": [
          -1,
          292
        ],
        "'NUMBER": [
          -1,
          292
        ],
        "'TRUE": [
          -1,
          292
        ],
        "'FALSE": [
          -1,
          292
        ],
        "'NULL": [
          -1,
          292
        ],
        "'PARENAFTERBRACE": [
          -1,
          292
        ],
        "'BLOCK": [
          -1,
          292
        ],
        "'TABLE": [
          -1,
          292
        ],
        "'ASK": [
          -1,
          292
        ],
        "'NEW": [
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
        "construct-expr_A0_I3_I1*": [
          295
        ],
        "'COMMA": [
          -1,
          296
        ],
        "'RBRACK": [
          -1,
          298,
          296
        ]
      },
      {
        "'RBRACK": [
          296
        ]
      },
      {
        "'RBRACK": [
          -1,
          300
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          297
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
          298
        ]
      },
      {
        "'NAME": [
          299
        ]
      },
      {
        "$": [
          -1,
          302
        ],
        "'NAME": [
          -1,
          302
        ],
        "'SEMI": [
          -1,
          302
        ],
        "'PARENNOSPACE": [
          -1,
          302
        ],
        "'STRING": [
          -1,
          302
        ],
        "'RPAREN": [
          -1,
          302
        ],
        "'LBRACE": [
          -1,
          302
        ],
        "'RBRACE": [
          -1,
          302
        ],
        "'SPY": [
          -1,
          302
        ],
        "'PARENSPACE": [
          -1,
          302
        ],
        "'COMMA": [
          -1,
          302
        ],
        "'INT": [
          -1,
          302
        ],
        "'LONG": [
          -1,
          302
        ],
        "'DOUBLE": [
          -1,
          302
        ],
        "'FLOAT": [
          -1,
          302
        ],
        "'BOOLEAN": [
          -1,
          302
        ],
        "'VOID": [
          -1,
          302
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          302
        ],
        "'IF": [
          -1,
          302
        ],
        "'FOR": [
          -1,
          302
        ],
        "'RETURN": [
          -1,
          302
        ],
        "'VAR": [
          -1,
          302
        ],
        "'REC": [
          -1,
          302
        ],
        "'ATCHECK": [
          -1,
          302
        ],
        "'ASSERTEQUALS": [
          -1,
          302
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          302
        ],
        "'ASSERTTRUE": [
          -1,
          302
        ],
        "'ASSERTFALSE": [
          -1,
          302
        ],
        "'ASSERTSATISFIES": [
          -1,
          302
        ],
        "'ASSERTRAISES": [
          -1,
          302
        ],
        "'IS": [
          -1,
          302
        ],
        "'ISNOT": [
          -1,
          302
        ],
        "'SATISFIES": [
          -1,
          302
        ],
        "'RAISES": [
          -1,
          302
        ],
        "'SWITCH": [
          -1,
          302
        ],
        "'CASE": [
          -1,
          302
        ],
        "'DEFAULT": [
          -1,
          302
        ],
        "'YIELD": [
          -1,
          302
        ],
        "'PLUS": [
          -1,
          302
        ],
        "'DASH": [
          -1,
          302
        ],
        "'TIMES": [
          -1,
          302
        ],
        "'SLASH": [
          -1,
          302
        ],
        "'PERCENT": [
          -1,
          302
        ],
        "'EQUALEQUAL": [
          -1,
          302
        ],
        "'NEQ": [
          -1,
          302
        ],
        "'LEQ": [
          -1,
          302
        ],
        "'GEQ": [
          -1,
          302
        ],
        "'AND": [
          -1,
          302
        ],
        "'OR": [
          -1,
          302
        ],
        "'BANG": [
          -1,
          302
        ],
        "'DOT": [
          -1,
          302
        ],
        "'LBRACK": [
          -1,
          302
        ],
        "'RBRACK": [
          -1,
          302
        ],
        "'NUMBER": [
          -1,
          302
        ],
        "'TRUE": [
          -1,
          302
        ],
        "'FALSE": [
          -1,
          302
        ],
        "'NULL": [
          -1,
          302
        ],
        "'PARENAFTERBRACE": [
          -1,
          302
        ],
        "'BLOCK": [
          -1,
          302
        ],
        "'TABLE": [
          -1,
          302
        ],
        "'ASK": [
          -1,
          302
        ],
        "'NEW": [
          -1,
          302
        ]
      },
      {
        "'NAME": [
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          304
        ],
        "'ATCHECK": [
          -1,
          304
        ],
        "'SWITCH": [
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
        "'BLOCK": [
          -1,
          304
        ],
        "'TABLE": [
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
        "'NAME": [
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
        "'SWITCH": [
          -1,
          306
        ],
        "'YIELD": [
          -1,
          306
        ],
        "'DASH": [
          -1,
          306
        ],
        "'BANG": [
          -1,
          306
        ],
        "'LBRACK": [
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
        "'SEMI": [
          -1,
          308
        ],
        "'COMMA": [
          -1,
          308
        ]
      },
      {
        "'SEMI": [
          300
        ],
        "'COMMA": [
          301
        ],
        "table-expr_I3": [
          302
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          303
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "ask-expr_A0_I4*": [
          304
        ],
        "ask-expr_A1_I4*": [
          305
        ],
        "'NAME": [
          -1,
          310,
          312
        ],
        "'STRING": [
          -1,
          310,
          312
        ],
        "'LBRACE": [
          -1,
          310,
          312
        ],
        "'RBRACE": [
          -1,
          310
        ],
        "'PARENSPACE": [
          -1,
          310,
          312
        ],
        "'SWITCH": [
          -1,
          310,
          312
        ],
        "'DASH": [
          -1,
          310,
          312
        ],
        "'BANG": [
          -1,
          310,
          312
        ],
        "'LBRACK": [
          -1,
          310,
          312
        ],
        "'NUMBER": [
          -1,
          310,
          312
        ],
        "'TRUE": [
          -1,
          310,
          312
        ],
        "'FALSE": [
          -1,
          310,
          312
        ],
        "'NULL": [
          -1,
          310,
          312
        ],
        "'PARENAFTERBRACE": [
          -1,
          310,
          312
        ],
        "'BLOCK": [
          -1,
          310,
          312
        ],
        "'TABLE": [
          -1,
          310,
          312
        ],
        "'ASK": [
          -1,
          310,
          312
        ],
        "'OTHERWISE": [
          -1,
          312
        ],
        "'NEW": [
          -1,
          310,
          312
        ]
      },
      {
        "new-expr_I3_I1*": [
          306
        ],
        "'RPAREN": [
          -1,
          314,
          316
        ],
        "'COMMA": [
          -1,
          316
        ]
      },
      {
        "'RPAREN": [
          307
        ]
      },
      {
        "'RPAREN": [
          -1,
          318
        ]
      },
      {
        "$": [
          -1,
          320
        ],
        "'IMPORT": [
          -1,
          320
        ],
        "'NAME": [
          -1,
          320
        ],
        "'PARENNOSPACE": [
          -1,
          320
        ],
        "'STRING": [
          -1,
          320
        ],
        "'INCLUDE": [
          -1,
          320
        ],
        "'LBRACE": [
          -1,
          320
        ],
        "'PARENSPACE": [
          -1,
          320
        ],
        "'INT": [
          -1,
          320
        ],
        "'LONG": [
          -1,
          320
        ],
        "'DOUBLE": [
          -1,
          320
        ],
        "'FLOAT": [
          -1,
          320
        ],
        "'BOOLEAN": [
          -1,
          320
        ],
        "'VOID": [
          -1,
          320
        ],
        "'DATA": [
          -1,
          320
        ],
        "'VAR": [
          -1,
          320
        ],
        "'REC": [
          -1,
          320
        ],
        "'ATCHECK": [
          -1,
          320
        ],
        "'SWITCH": [
          -1,
          320
        ],
        "'DASH": [
          -1,
          320
        ],
        "'BANG": [
          -1,
          320
        ],
        "'LBRACK": [
          -1,
          320
        ],
        "'NUMBER": [
          -1,
          320
        ],
        "'TRUE": [
          -1,
          320
        ],
        "'FALSE": [
          -1,
          320
        ],
        "'NULL": [
          -1,
          320
        ],
        "'PARENAFTERBRACE": [
          -1,
          320
        ],
        "'BLOCK": [
          -1,
          320
        ],
        "'TABLE": [
          -1,
          320
        ],
        "'ASK": [
          -1,
          320
        ],
        "'NEW": [
          -1,
          320
        ]
      },
      {
        "'SEMI": [
          308
        ],
        "'AS": [
          309
        ]
      },
      {
        "$": [
          -1,
          322
        ],
        "'IMPORT": [
          -1,
          322
        ],
        "'NAME": [
          -1,
          322
        ],
        "'PARENNOSPACE": [
          -1,
          322
        ],
        "'STRING": [
          -1,
          322
        ],
        "'INCLUDE": [
          -1,
          322
        ],
        "'LBRACE": [
          -1,
          322
        ],
        "'PARENSPACE": [
          -1,
          322
        ],
        "'INT": [
          -1,
          322
        ],
        "'LONG": [
          -1,
          322
        ],
        "'DOUBLE": [
          -1,
          322
        ],
        "'FLOAT": [
          -1,
          322
        ],
        "'BOOLEAN": [
          -1,
          322
        ],
        "'VOID": [
          -1,
          322
        ],
        "'DATA": [
          -1,
          322
        ],
        "'VAR": [
          -1,
          322
        ],
        "'REC": [
          -1,
          322
        ],
        "'ATCHECK": [
          -1,
          322
        ],
        "'SWITCH": [
          -1,
          322
        ],
        "'DASH": [
          -1,
          322
        ],
        "'BANG": [
          -1,
          322
        ],
        "'LBRACK": [
          -1,
          322
        ],
        "'NUMBER": [
          -1,
          322
        ],
        "'TRUE": [
          -1,
          322
        ],
        "'FALSE": [
          -1,
          322
        ],
        "'NULL": [
          -1,
          322
        ],
        "'PARENAFTERBRACE": [
          -1,
          322
        ],
        "'BLOCK": [
          -1,
          322
        ],
        "'TABLE": [
          -1,
          322
        ],
        "'ASK": [
          -1,
          322
        ],
        "'NEW": [
          -1,
          322
        ]
      },
      {
        "'SEMI": [
          310
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          311
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
          324
        ],
        "'RPAREN": [
          -1,
          324
        ],
        "'COMMA": [
          -1,
          324
        ],
        "'GT": [
          -1,
          324
        ],
        "'THINARROW": [
          -1,
          324
        ]
      },
      {
        "'COMMA": [
          -1,
          326
        ],
        "'GT": [
          -1,
          326
        ]
      },
      {
        "'RPAREN": [
          -1,
          328
        ],
        "'COMMA": [
          -1,
          328
        ]
      },
      {
        "$": [
          -1,
          330
        ],
        "'NAME": [
          -1,
          330
        ],
        "'SEMI": [
          -1,
          330
        ],
        "'PARENNOSPACE": [
          -1,
          330
        ],
        "'STRING": [
          -1,
          330
        ],
        "'RPAREN": [
          -1,
          330
        ],
        "'LBRACE": [
          -1,
          330
        ],
        "'RBRACE": [
          -1,
          330
        ],
        "'SPY": [
          -1,
          330
        ],
        "'PARENSPACE": [
          -1,
          330
        ],
        "'COMMA": [
          -1,
          330
        ],
        "'INT": [
          -1,
          330
        ],
        "'LONG": [
          -1,
          330
        ],
        "'DOUBLE": [
          -1,
          330
        ],
        "'FLOAT": [
          -1,
          330
        ],
        "'BOOLEAN": [
          -1,
          330
        ],
        "'VOID": [
          -1,
          330
        ],
        "'DATA": [
          -1,
          330
        ],
        "'IF": [
          -1,
          330
        ],
        "'FOR": [
          -1,
          330
        ],
        "'RETURN": [
          -1,
          330
        ],
        "'VAR": [
          -1,
          330
        ],
        "'REC": [
          -1,
          330
        ],
        "'ATCHECK": [
          -1,
          330
        ],
        "'ASSERTEQUALS": [
          -1,
          330
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          330
        ],
        "'ASSERTTRUE": [
          -1,
          330
        ],
        "'ASSERTFALSE": [
          -1,
          330
        ],
        "'ASSERTSATISFIES": [
          -1,
          330
        ],
        "'ASSERTRAISES": [
          -1,
          330
        ],
        "'IS": [
          -1,
          330
        ],
        "'ISNOT": [
          -1,
          330
        ],
        "'SATISFIES": [
          -1,
          330
        ],
        "'RAISES": [
          -1,
          330
        ],
        "'SWITCH": [
          -1,
          330
        ],
        "'CASE": [
          -1,
          330
        ],
        "'DEFAULT": [
          -1,
          330
        ],
        "'YIELD": [
          -1,
          330
        ],
        "'DASH": [
          -1,
          330
        ],
        "'BANG": [
          -1,
          330
        ],
        "'LBRACK": [
          -1,
          330
        ],
        "'RBRACK": [
          -1,
          330
        ],
        "'NUMBER": [
          -1,
          330
        ],
        "'TRUE": [
          -1,
          330
        ],
        "'FALSE": [
          -1,
          330
        ],
        "'NULL": [
          -1,
          330
        ],
        "'PARENAFTERBRACE": [
          -1,
          330
        ],
        "'BLOCK": [
          -1,
          330
        ],
        "'TABLE": [
          -1,
          330
        ],
        "'ASK": [
          -1,
          330
        ],
        "'NEW": [
          -1,
          330
        ]
      },
      {
        "'RBRACE": [
          -1,
          332
        ],
        "'COMMA": [
          -1,
          332
        ]
      },
      {
        "'COMMA": [
          -1,
          334
        ],
        "'THINARROW": [
          -1,
          334
        ]
      },
      {
        "'NAME": [
          -1,
          336
        ],
        "'RPAREN": [
          -1,
          336
        ],
        "'COMMA": [
          -1,
          336
        ],
        "'GT": [
          -1,
          336
        ],
        "'THINARROW": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'DASH": [
          -1,
          338
        ],
        "'BANG": [
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
        "'BLOCK": [
          -1,
          338
        ],
        "'TABLE": [
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
        "'RPAREN": [
          -1,
          340
        ],
        "'COMMA": [
          -1,
          340
        ]
      },
      {
        "'RPAREN": [
          -1,
          342
        ],
        "'COMMA": [
          -1,
          342
        ]
      },
      {
        "block": [
          312
        ],
        "'LBRACE": [
          313
        ]
      },
      {
        "'COMMA": [
          314
        ],
        "fun-decl_I3_I1": [
          315
        ],
        "'RPAREN": [
          -1,
          344
        ]
      },
      {
        "$": [
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
        "'LBRACE": [
          -1,
          346
        ],
        "'RBRACE": [
          -1,
          346
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          346
        ],
        "'FOR": [
          -1,
          346
        ],
        "'RETURN": [
          -1,
          346
        ],
        "'VAR": [
          -1,
          346
        ],
        "'REC": [
          -1,
          346
        ],
        "'ATCHECK": [
          -1,
          346
        ],
        "'ASSERTEQUALS": [
          -1,
          346
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          346
        ],
        "'ASSERTTRUE": [
          -1,
          346
        ],
        "'ASSERTFALSE": [
          -1,
          346
        ],
        "'ASSERTSATISFIES": [
          -1,
          346
        ],
        "'ASSERTRAISES": [
          -1,
          346
        ],
        "'SWITCH": [
          -1,
          346
        ],
        "'YIELD": [
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
        "'BLOCK": [
          -1,
          346
        ],
        "'TABLE": [
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
        "$": [
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
        "'LBRACE": [
          -1,
          348
        ],
        "'RBRACE": [
          -1,
          348
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          348
        ],
        "'FOR": [
          -1,
          348
        ],
        "'RETURN": [
          -1,
          348
        ],
        "'VAR": [
          -1,
          348
        ],
        "'REC": [
          -1,
          348
        ],
        "'ATCHECK": [
          -1,
          348
        ],
        "'ASSERTEQUALS": [
          -1,
          348
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          348
        ],
        "'ASSERTTRUE": [
          -1,
          348
        ],
        "'ASSERTFALSE": [
          -1,
          348
        ],
        "'ASSERTSATISFIES": [
          -1,
          348
        ],
        "'ASSERTRAISES": [
          -1,
          348
        ],
        "'SWITCH": [
          -1,
          348
        ],
        "'YIELD": [
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
        "'BLOCK": [
          -1,
          348
        ],
        "'TABLE": [
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
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          316
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
          317
        ],
        "variant-decl_A0_I2": [
          318
        ],
        "variant-member": [
          319
        ],
        "'RPAREN": [
          -1,
          352
        ]
      },
      {
        "'SEMI": [
          320
        ],
        "data-decl_I5?": [
          321
        ],
        "data-decl_I4": [
          322
        ],
        "data-decl_I5": [
          323
        ],
        "'RBRACE": [
          -1,
          354
        ]
      },
      {
        "'SEMI": [
          324
        ],
        "var-stmt_I5?": [
          325
        ],
        "var-stmt_I5": [
          326
        ],
        "$": [
          -1,
          356,
          358
        ],
        "'NAME": [
          -1,
          356,
          358
        ],
        "'PARENNOSPACE": [
          -1,
          356,
          358
        ],
        "'STRING": [
          -1,
          356,
          358
        ],
        "'LBRACE": [
          -1,
          356,
          358
        ],
        "'RBRACE": [
          -1,
          356,
          358
        ],
        "'SPY": [
          -1,
          356,
          358
        ],
        "'PARENSPACE": [
          -1,
          356,
          358
        ],
        "'INT": [
          -1,
          356,
          358
        ],
        "'LONG": [
          -1,
          356,
          358
        ],
        "'DOUBLE": [
          -1,
          356,
          358
        ],
        "'FLOAT": [
          -1,
          356,
          358
        ],
        "'BOOLEAN": [
          -1,
          356,
          358
        ],
        "'VOID": [
          -1,
          356,
          358
        ],
        "'DATA": [
          -1,
          356,
          358
        ],
        "'IF": [
          -1,
          356,
          358
        ],
        "'FOR": [
          -1,
          356,
          358
        ],
        "'RETURN": [
          -1,
          356,
          358
        ],
        "'VAR": [
          -1,
          356,
          358
        ],
        "'REC": [
          -1,
          356,
          358
        ],
        "'ATCHECK": [
          -1,
          356,
          358
        ],
        "'ASSERTEQUALS": [
          -1,
          356,
          358
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          356,
          358
        ],
        "'ASSERTTRUE": [
          -1,
          356,
          358
        ],
        "'ASSERTFALSE": [
          -1,
          356,
          358
        ],
        "'ASSERTSATISFIES": [
          -1,
          356,
          358
        ],
        "'ASSERTRAISES": [
          -1,
          356,
          358
        ],
        "'SWITCH": [
          -1,
          356,
          358
        ],
        "'YIELD": [
          -1,
          356,
          358
        ],
        "'DASH": [
          -1,
          356,
          358
        ],
        "'BANG": [
          -1,
          356,
          358
        ],
        "'LBRACK": [
          -1,
          356,
          358
        ],
        "'NUMBER": [
          -1,
          356,
          358
        ],
        "'TRUE": [
          -1,
          356,
          358
        ],
        "'FALSE": [
          -1,
          356,
          358
        ],
        "'NULL": [
          -1,
          356,
          358
        ],
        "'PARENAFTERBRACE": [
          -1,
          356,
          358
        ],
        "'BLOCK": [
          -1,
          356,
          358
        ],
        "'TABLE": [
          -1,
          356,
          358
        ],
        "'ASK": [
          -1,
          356,
          358
        ],
        "'NEW": [
          -1,
          356,
          358
        ]
      },
      {
        "'SEMI": [
          327
        ],
        "rec-stmt_I5?": [
          328
        ],
        "rec-stmt_I5": [
          329
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
        "'NAME": [
          330
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          331
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          332
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          333
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          334
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          335
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          336
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
          364
        ],
        "'PARENNOSPACE": [
          -1,
          364
        ],
        "'STRING": [
          -1,
          364
        ],
        "'LBRACE": [
          -1,
          364
        ],
        "'RBRACE": [
          -1,
          364
        ],
        "'SPY": [
          -1,
          364
        ],
        "'PARENSPACE": [
          -1,
          364
        ],
        "'INT": [
          -1,
          364
        ],
        "'LONG": [
          -1,
          364
        ],
        "'DOUBLE": [
          -1,
          364
        ],
        "'FLOAT": [
          -1,
          364
        ],
        "'BOOLEAN": [
          -1,
          364
        ],
        "'VOID": [
          -1,
          364
        ],
        "'DATA": [
          -1,
          364
        ],
        "'IF": [
          -1,
          364
        ],
        "'FOR": [
          -1,
          364
        ],
        "'RETURN": [
          -1,
          364
        ],
        "'VAR": [
          -1,
          364
        ],
        "'REC": [
          -1,
          364
        ],
        "'ATCHECK": [
          -1,
          364
        ],
        "'ASSERTEQUALS": [
          -1,
          364
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          364
        ],
        "'ASSERTTRUE": [
          -1,
          364
        ],
        "'ASSERTFALSE": [
          -1,
          364
        ],
        "'ASSERTSATISFIES": [
          -1,
          364
        ],
        "'ASSERTRAISES": [
          -1,
          364
        ],
        "'SWITCH": [
          -1,
          364
        ],
        "'YIELD": [
          -1,
          364
        ],
        "'DASH": [
          -1,
          364
        ],
        "'BANG": [
          -1,
          364
        ],
        "'LBRACK": [
          -1,
          364
        ],
        "'NUMBER": [
          -1,
          364
        ],
        "'TRUE": [
          -1,
          364
        ],
        "'FALSE": [
          -1,
          364
        ],
        "'NULL": [
          -1,
          364
        ],
        "'PARENAFTERBRACE": [
          -1,
          364
        ],
        "'BLOCK": [
          -1,
          364
        ],
        "'TABLE": [
          -1,
          364
        ],
        "'ASK": [
          -1,
          364
        ],
        "'NEW": [
          -1,
          364
        ]
      },
      {
        "'SEMI": [
          337
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          342
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          343
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'SEMI": [
          344
        ],
        "yield-stmt_I2?": [
          345
        ],
        "yield-stmt_I2": [
          346
        ],
        "'NAME": [
          -1,
          366,
          368
        ],
        "'PARENNOSPACE": [
          -1,
          366,
          368
        ],
        "'STRING": [
          -1,
          366,
          368
        ],
        "'LBRACE": [
          -1,
          366,
          368
        ],
        "'RBRACE": [
          -1,
          366,
          368
        ],
        "'SPY": [
          -1,
          366,
          368
        ],
        "'PARENSPACE": [
          -1,
          366,
          368
        ],
        "'INT": [
          -1,
          366,
          368
        ],
        "'LONG": [
          -1,
          366,
          368
        ],
        "'DOUBLE": [
          -1,
          366,
          368
        ],
        "'FLOAT": [
          -1,
          366,
          368
        ],
        "'BOOLEAN": [
          -1,
          366,
          368
        ],
        "'VOID": [
          -1,
          366,
          368
        ],
        "'DATA": [
          -1,
          366,
          368
        ],
        "'IF": [
          -1,
          366,
          368
        ],
        "'FOR": [
          -1,
          366,
          368
        ],
        "'RETURN": [
          -1,
          366,
          368
        ],
        "'VAR": [
          -1,
          366,
          368
        ],
        "'REC": [
          -1,
          366,
          368
        ],
        "'ATCHECK": [
          -1,
          366,
          368
        ],
        "'ASSERTEQUALS": [
          -1,
          366,
          368
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          366,
          368
        ],
        "'ASSERTTRUE": [
          -1,
          366,
          368
        ],
        "'ASSERTFALSE": [
          -1,
          366,
          368
        ],
        "'ASSERTSATISFIES": [
          -1,
          366,
          368
        ],
        "'ASSERTRAISES": [
          -1,
          366,
          368
        ],
        "'SWITCH": [
          -1,
          366,
          368
        ],
        "'CASE": [
          -1,
          366,
          368
        ],
        "'DEFAULT": [
          -1,
          366,
          368
        ],
        "'YIELD": [
          -1,
          366,
          368
        ],
        "'DASH": [
          -1,
          366,
          368
        ],
        "'BANG": [
          -1,
          366,
          368
        ],
        "'LBRACK": [
          -1,
          366,
          368
        ],
        "'NUMBER": [
          -1,
          366,
          368
        ],
        "'TRUE": [
          -1,
          366,
          368
        ],
        "'FALSE": [
          -1,
          366,
          368
        ],
        "'NULL": [
          -1,
          366,
          368
        ],
        "'PARENAFTERBRACE": [
          -1,
          366,
          368
        ],
        "'BLOCK": [
          -1,
          366,
          368
        ],
        "'TABLE": [
          -1,
          366,
          368
        ],
        "'ASK": [
          -1,
          366,
          368
        ],
        "'NEW": [
          -1,
          366,
          368
        ]
      },
      {
        "'LBRACE": [
          347
        ]
      },
      {
        "switch-expr_I5*": [
          348
        ],
        "'RBRACE": [
          -1,
          370
        ],
        "'CASE": [
          -1,
          370
        ],
        "'DEFAULT": [
          -1,
          370
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RPAREN": [
          -1,
          372
        ],
        "'COMMA": [
          -1,
          372
        ]
      },
      {
        "'COMMA": [
          350
        ],
        "construct-expr_A0_I3_I1": [
          351
        ],
        "'RBRACK": [
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
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          376
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          376
        ],
        "'GT": [
          -1,
          376
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          376
        ],
        "'ISNOT": [
          -1,
          376
        ],
        "'SATISFIES": [
          -1,
          376
        ],
        "'RAISES": [
          -1,
          376
        ],
        "'SWITCH": [
          -1,
          376
        ],
        "'CASE": [
          -1,
          376
        ],
        "'DEFAULT": [
          -1,
          376
        ],
        "'YIELD": [
          -1,
          376
        ],
        "'PLUS": [
          -1,
          376
        ],
        "'DASH": [
          -1,
          376
        ],
        "'TIMES": [
          -1,
          376
        ],
        "'SLASH": [
          -1,
          376
        ],
        "'PERCENT": [
          -1,
          376
        ],
        "'EQUALEQUAL": [
          -1,
          376
        ],
        "'NEQ": [
          -1,
          376
        ],
        "'LEQ": [
          -1,
          376
        ],
        "'GEQ": [
          -1,
          376
        ],
        "'AND": [
          -1,
          376
        ],
        "'OR": [
          -1,
          376
        ],
        "'BANG": [
          -1,
          376
        ],
        "'DOT": [
          -1,
          376
        ],
        "'LBRACK": [
          -1,
          376
        ],
        "'RBRACK": [
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
        "'BLOCK": [
          -1,
          376
        ],
        "'TABLE": [
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
        "'NAME": [
          352
        ]
      },
      {
        "map-for-expr_A1_I5*": [
          353
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
        "'COLON": [
          354
        ]
      },
      {
        "table-expr_I5*": [
          355
        ],
        "'RBRACE": [
          -1,
          380
        ],
        "'ROW": [
          -1,
          380
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          166
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
          356
        ]
      },
      {
        "'SEMI": [
          -1,
          382
        ],
        "'COMMA": [
          -1,
          382
        ]
      },
      {
        "'SEMI": [
          -1,
          384
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          357
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          168
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "ask-branch": [
          358
        ],
        "ask-expr_A0_I4": [
          359
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          99
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          168
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "ask-branch": [
          360
        ],
        "otherwise-branch": [
          361
        ],
        "ask-expr_A1_I4": [
          362
        ],
        "'OTHERWISE": [
          363
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'COMMA": [
          364
        ],
        "new-expr_I3_I1": [
          365
        ],
        "'RPAREN": [
          -1,
          386
        ]
      },
      {
        "$": [
          -1,
          388
        ],
        "'NAME": [
          -1,
          388
        ],
        "'SEMI": [
          -1,
          388
        ],
        "'PARENNOSPACE": [
          -1,
          388
        ],
        "'STRING": [
          -1,
          388
        ],
        "'RPAREN": [
          -1,
          388
        ],
        "'LBRACE": [
          -1,
          388
        ],
        "'RBRACE": [
          -1,
          388
        ],
        "'SPY": [
          -1,
          388
        ],
        "'PARENSPACE": [
          -1,
          388
        ],
        "'COMMA": [
          -1,
          388
        ],
        "'INT": [
          -1,
          388
        ],
        "'LONG": [
          -1,
          388
        ],
        "'DOUBLE": [
          -1,
          388
        ],
        "'FLOAT": [
          -1,
          388
        ],
        "'BOOLEAN": [
          -1,
          388
        ],
        "'VOID": [
          -1,
          388
        ],
        "'LT": [
          -1,
          388
        ],
        "'GT": [
          -1,
          388
        ],
        "'THINARROW": [
          -1,
          388
        ],
        "'DATA": [
          -1,
          388
        ],
        "'IF": [
          -1,
          388
        ],
        "'FOR": [
          -1,
          388
        ],
        "'RETURN": [
          -1,
          388
        ],
        "'VAR": [
          -1,
          388
        ],
        "'REC": [
          -1,
          388
        ],
        "'ATCHECK": [
          -1,
          388
        ],
        "'ASSERTEQUALS": [
          -1,
          388
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          388
        ],
        "'ASSERTTRUE": [
          -1,
          388
        ],
        "'ASSERTFALSE": [
          -1,
          388
        ],
        "'ASSERTSATISFIES": [
          -1,
          388
        ],
        "'ASSERTRAISES": [
          -1,
          388
        ],
        "'IS": [
          -1,
          388
        ],
        "'ISNOT": [
          -1,
          388
        ],
        "'SATISFIES": [
          -1,
          388
        ],
        "'RAISES": [
          -1,
          388
        ],
        "'SWITCH": [
          -1,
          388
        ],
        "'CASE": [
          -1,
          388
        ],
        "'DEFAULT": [
          -1,
          388
        ],
        "'YIELD": [
          -1,
          388
        ],
        "'PLUS": [
          -1,
          388
        ],
        "'DASH": [
          -1,
          388
        ],
        "'TIMES": [
          -1,
          388
        ],
        "'SLASH": [
          -1,
          388
        ],
        "'PERCENT": [
          -1,
          388
        ],
        "'EQUALEQUAL": [
          -1,
          388
        ],
        "'NEQ": [
          -1,
          388
        ],
        "'LEQ": [
          -1,
          388
        ],
        "'GEQ": [
          -1,
          388
        ],
        "'AND": [
          -1,
          388
        ],
        "'OR": [
          -1,
          388
        ],
        "'BANG": [
          -1,
          388
        ],
        "'DOT": [
          -1,
          388
        ],
        "'LBRACK": [
          -1,
          388
        ],
        "'RBRACK": [
          -1,
          388
        ],
        "'NUMBER": [
          -1,
          388
        ],
        "'TRUE": [
          -1,
          388
        ],
        "'FALSE": [
          -1,
          388
        ],
        "'NULL": [
          -1,
          388
        ],
        "'PARENAFTERBRACE": [
          -1,
          388
        ],
        "'BLOCK": [
          -1,
          388
        ],
        "'TABLE": [
          -1,
          388
        ],
        "'ASK": [
          -1,
          388
        ],
        "'NEW": [
          -1,
          388
        ]
      },
      {
        "$": [
          -1,
          390
        ],
        "'IMPORT": [
          -1,
          390
        ],
        "'NAME": [
          -1,
          390
        ],
        "'PARENNOSPACE": [
          -1,
          390
        ],
        "'STRING": [
          -1,
          390
        ],
        "'INCLUDE": [
          -1,
          390
        ],
        "'LBRACE": [
          -1,
          390
        ],
        "'PARENSPACE": [
          -1,
          390
        ],
        "'INT": [
          -1,
          390
        ],
        "'LONG": [
          -1,
          390
        ],
        "'DOUBLE": [
          -1,
          390
        ],
        "'FLOAT": [
          -1,
          390
        ],
        "'BOOLEAN": [
          -1,
          390
        ],
        "'VOID": [
          -1,
          390
        ],
        "'DATA": [
          -1,
          390
        ],
        "'VAR": [
          -1,
          390
        ],
        "'REC": [
          -1,
          390
        ],
        "'ATCHECK": [
          -1,
          390
        ],
        "'SWITCH": [
          -1,
          390
        ],
        "'DASH": [
          -1,
          390
        ],
        "'BANG": [
          -1,
          390
        ],
        "'LBRACK": [
          -1,
          390
        ],
        "'NUMBER": [
          -1,
          390
        ],
        "'TRUE": [
          -1,
          390
        ],
        "'FALSE": [
          -1,
          390
        ],
        "'NULL": [
          -1,
          390
        ],
        "'PARENAFTERBRACE": [
          -1,
          390
        ],
        "'BLOCK": [
          -1,
          390
        ],
        "'TABLE": [
          -1,
          390
        ],
        "'ASK": [
          -1,
          390
        ],
        "'NEW": [
          -1,
          390
        ]
      },
      {
        "'NAME": [
          366
        ]
      },
      {
        "$": [
          -1,
          392
        ],
        "'IMPORT": [
          -1,
          392
        ],
        "'NAME": [
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
        "'INCLUDE": [
          -1,
          392
        ],
        "'LBRACE": [
          -1,
          392
        ],
        "'PARENSPACE": [
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
        "'DATA": [
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
        "'SWITCH": [
          -1,
          392
        ],
        "'DASH": [
          -1,
          392
        ],
        "'BANG": [
          -1,
          392
        ],
        "'LBRACK": [
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
        "'COMMA": [
          -1,
          394
        ],
        "'GT": [
          -1,
          394
        ]
      },
      {
        "fun-decl_I6?": [
          367
        ],
        "fun-decl_I6": [
          368
        ],
        "where-clause": [
          369
        ],
        "'WHERE": [
          370
        ],
        "$": [
          -1,
          396,
          398
        ],
        "'NAME": [
          -1,
          396,
          398
        ],
        "'PARENNOSPACE": [
          -1,
          396,
          398
        ],
        "'STRING": [
          -1,
          396,
          398
        ],
        "'LBRACE": [
          -1,
          396,
          398
        ],
        "'RBRACE": [
          -1,
          396,
          398
        ],
        "'SPY": [
          -1,
          396,
          398
        ],
        "'PARENSPACE": [
          -1,
          396,
          398
        ],
        "'INT": [
          -1,
          396,
          398
        ],
        "'LONG": [
          -1,
          396,
          398
        ],
        "'DOUBLE": [
          -1,
          396,
          398
        ],
        "'FLOAT": [
          -1,
          396,
          398
        ],
        "'BOOLEAN": [
          -1,
          396,
          398
        ],
        "'VOID": [
          -1,
          396,
          398
        ],
        "'DATA": [
          -1,
          396,
          398
        ],
        "'IF": [
          -1,
          396,
          398
        ],
        "'FOR": [
          -1,
          396,
          398
        ],
        "'RETURN": [
          -1,
          396,
          398
        ],
        "'VAR": [
          -1,
          396,
          398
        ],
        "'REC": [
          -1,
          396,
          398
        ],
        "'ATCHECK": [
          -1,
          396,
          398
        ],
        "'ASSERTEQUALS": [
          -1,
          396,
          398
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          396,
          398
        ],
        "'ASSERTTRUE": [
          -1,
          396,
          398
        ],
        "'ASSERTFALSE": [
          -1,
          396,
          398
        ],
        "'ASSERTSATISFIES": [
          -1,
          396,
          398
        ],
        "'ASSERTRAISES": [
          -1,
          396,
          398
        ],
        "'SWITCH": [
          -1,
          396,
          398
        ],
        "'YIELD": [
          -1,
          396,
          398
        ],
        "'DASH": [
          -1,
          396,
          398
        ],
        "'BANG": [
          -1,
          396,
          398
        ],
        "'LBRACK": [
          -1,
          396,
          398
        ],
        "'NUMBER": [
          -1,
          396,
          398
        ],
        "'TRUE": [
          -1,
          396,
          398
        ],
        "'FALSE": [
          -1,
          396,
          398
        ],
        "'NULL": [
          -1,
          396,
          398
        ],
        "'PARENAFTERBRACE": [
          -1,
          396,
          398
        ],
        "'BLOCK": [
          -1,
          396,
          398
        ],
        "'TABLE": [
          -1,
          396,
          398
        ],
        "'ASK": [
          -1,
          396,
          398
        ],
        "'NEW": [
          -1,
          396,
          398
        ]
      },
      {
        "block_I1*": [
          371
        ],
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          400
        ],
        "'ATCHECK": [
          -1,
          400
        ],
        "'SWITCH": [
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
        "'BLOCK": [
          -1,
          400
        ],
        "'TABLE": [
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
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          192
        ],
        "param": [
          372
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
          402
        ],
        "'COMMA": [
          -1,
          402
        ]
      },
      {
        "'NAME": [
          373
        ]
      },
      {
        "'RPAREN": [
          374
        ]
      },
      {
        "'RPAREN": [
          -1,
          404
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          375
        ],
        "'RPAREN": [
          -1,
          406,
          408
        ],
        "'COMMA": [
          -1,
          408
        ]
      },
      {
        "'NAME": [
          197
        ],
        "variant-decl": [
          376
        ],
        "'RBRACE": [
          -1,
          410
        ]
      },
      {
        "'RBRACE": [
          377
        ]
      },
      {
        "'SEMI": [
          -1,
          412
        ],
        "'RBRACE": [
          -1,
          412
        ]
      },
      {
        "'RBRACE": [
          -1,
          414
        ]
      },
      {
        "$": [
          -1,
          416
        ],
        "'NAME": [
          -1,
          416
        ],
        "'PARENNOSPACE": [
          -1,
          416
        ],
        "'STRING": [
          -1,
          416
        ],
        "'LBRACE": [
          -1,
          416
        ],
        "'RBRACE": [
          -1,
          416
        ],
        "'SPY": [
          -1,
          416
        ],
        "'PARENSPACE": [
          -1,
          416
        ],
        "'INT": [
          -1,
          416
        ],
        "'LONG": [
          -1,
          416
        ],
        "'DOUBLE": [
          -1,
          416
        ],
        "'FLOAT": [
          -1,
          416
        ],
        "'BOOLEAN": [
          -1,
          416
        ],
        "'VOID": [
          -1,
          416
        ],
        "'DATA": [
          -1,
          416
        ],
        "'IF": [
          -1,
          416
        ],
        "'FOR": [
          -1,
          416
        ],
        "'RETURN": [
          -1,
          416
        ],
        "'VAR": [
          -1,
          416
        ],
        "'REC": [
          -1,
          416
        ],
        "'ATCHECK": [
          -1,
          416
        ],
        "'ASSERTEQUALS": [
          -1,
          416
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          416
        ],
        "'ASSERTTRUE": [
          -1,
          416
        ],
        "'ASSERTFALSE": [
          -1,
          416
        ],
        "'ASSERTSATISFIES": [
          -1,
          416
        ],
        "'ASSERTRAISES": [
          -1,
          416
        ],
        "'SWITCH": [
          -1,
          416
        ],
        "'YIELD": [
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
        "'BLOCK": [
          -1,
          416
        ],
        "'TABLE": [
          -1,
          416
        ],
        "'ASK": [
          -1,
          416
        ],
        "'NEW": [
          -1,
          416
        ]
      },
      {
        "$": [
          -1,
          418
        ],
        "'NAME": [
          -1,
          418
        ],
        "'PARENNOSPACE": [
          -1,
          418
        ],
        "'STRING": [
          -1,
          418
        ],
        "'LBRACE": [
          -1,
          418
        ],
        "'RBRACE": [
          -1,
          418
        ],
        "'SPY": [
          -1,
          418
        ],
        "'PARENSPACE": [
          -1,
          418
        ],
        "'INT": [
          -1,
          418
        ],
        "'LONG": [
          -1,
          418
        ],
        "'DOUBLE": [
          -1,
          418
        ],
        "'FLOAT": [
          -1,
          418
        ],
        "'BOOLEAN": [
          -1,
          418
        ],
        "'VOID": [
          -1,
          418
        ],
        "'DATA": [
          -1,
          418
        ],
        "'IF": [
          -1,
          418
        ],
        "'FOR": [
          -1,
          418
        ],
        "'RETURN": [
          -1,
          418
        ],
        "'VAR": [
          -1,
          418
        ],
        "'REC": [
          -1,
          418
        ],
        "'ATCHECK": [
          -1,
          418
        ],
        "'ASSERTEQUALS": [
          -1,
          418
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          418
        ],
        "'ASSERTTRUE": [
          -1,
          418
        ],
        "'ASSERTFALSE": [
          -1,
          418
        ],
        "'ASSERTSATISFIES": [
          -1,
          418
        ],
        "'ASSERTRAISES": [
          -1,
          418
        ],
        "'SWITCH": [
          -1,
          418
        ],
        "'YIELD": [
          -1,
          418
        ],
        "'DASH": [
          -1,
          418
        ],
        "'BANG": [
          -1,
          418
        ],
        "'LBRACK": [
          -1,
          418
        ],
        "'NUMBER": [
          -1,
          418
        ],
        "'TRUE": [
          -1,
          418
        ],
        "'FALSE": [
          -1,
          418
        ],
        "'NULL": [
          -1,
          418
        ],
        "'PARENAFTERBRACE": [
          -1,
          418
        ],
        "'BLOCK": [
          -1,
          418
        ],
        "'TABLE": [
          -1,
          418
        ],
        "'ASK": [
          -1,
          418
        ],
        "'NEW": [
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
        "spy-stmt_I3*": [
          378
        ],
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
        "'RPAREN": [
          379
        ]
      },
      {
        "'SEMI": [
          380
        ],
        "assert-stmt_A6_I3?": [
          381
        ],
        "assert-stmt_A6_I3": [
          382
        ],
        "'NAME": [
          -1,
          430,
          432
        ],
        "'PARENNOSPACE": [
          -1,
          430,
          432
        ],
        "'STRING": [
          -1,
          430,
          432
        ],
        "'LBRACE": [
          -1,
          430,
          432
        ],
        "'RBRACE": [
          -1,
          430,
          432
        ],
        "'SPY": [
          -1,
          430,
          432
        ],
        "'PARENSPACE": [
          -1,
          430,
          432
        ],
        "'INT": [
          -1,
          430,
          432
        ],
        "'LONG": [
          -1,
          430,
          432
        ],
        "'DOUBLE": [
          -1,
          430,
          432
        ],
        "'FLOAT": [
          -1,
          430,
          432
        ],
        "'BOOLEAN": [
          -1,
          430,
          432
        ],
        "'VOID": [
          -1,
          430,
          432
        ],
        "'DATA": [
          -1,
          430,
          432
        ],
        "'IF": [
          -1,
          430,
          432
        ],
        "'FOR": [
          -1,
          430,
          432
        ],
        "'RETURN": [
          -1,
          430,
          432
        ],
        "'VAR": [
          -1,
          430,
          432
        ],
        "'REC": [
          -1,
          430,
          432
        ],
        "'ATCHECK": [
          -1,
          430,
          432
        ],
        "'ASSERTEQUALS": [
          -1,
          430,
          432
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          430,
          432
        ],
        "'ASSERTTRUE": [
          -1,
          430,
          432
        ],
        "'ASSERTFALSE": [
          -1,
          430,
          432
        ],
        "'ASSERTSATISFIES": [
          -1,
          430,
          432
        ],
        "'ASSERTRAISES": [
          -1,
          430,
          432
        ],
        "'SWITCH": [
          -1,
          430,
          432
        ],
        "'YIELD": [
          -1,
          430,
          432
        ],
        "'DASH": [
          -1,
          430,
          432
        ],
        "'BANG": [
          -1,
          430,
          432
        ],
        "'LBRACK": [
          -1,
          430,
          432
        ],
        "'NUMBER": [
          -1,
          430,
          432
        ],
        "'TRUE": [
          -1,
          430,
          432
        ],
        "'FALSE": [
          -1,
          430,
          432
        ],
        "'NULL": [
          -1,
          430,
          432
        ],
        "'PARENAFTERBRACE": [
          -1,
          430,
          432
        ],
        "'BLOCK": [
          -1,
          430,
          432
        ],
        "'TABLE": [
          -1,
          430,
          432
        ],
        "'ASK": [
          -1,
          430,
          432
        ],
        "'NEW": [
          -1,
          430,
          432
        ]
      },
      {
        "'SEMI": [
          383
        ],
        "assert-stmt_A7_I3?": [
          384
        ],
        "assert-stmt_A7_I3": [
          385
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
          386
        ],
        "assert-stmt_A8_I3?": [
          387
        ],
        "assert-stmt_A8_I3": [
          388
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
          389
        ],
        "assert-stmt_A9_I3?": [
          390
        ],
        "assert-stmt_A9_I3": [
          391
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
        "'NAME": [
          392
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          446
        ],
        "'TABLE": [
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
        "'COMMA": [
          393
        ]
      },
      {
        "'COMMA": [
          394
        ]
      },
      {
        "'RPAREN": [
          395
        ]
      },
      {
        "'RPAREN": [
          396
        ]
      },
      {
        "'COMMA": [
          397
        ]
      },
      {
        "'COMMA": [
          398
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
        "'LBRACE": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          448
        ],
        "'DEFAULT": [
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
        "'BLOCK": [
          -1,
          448
        ],
        "'TABLE": [
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
        "'CASE": [
          -1,
          450
        ],
        "'DEFAULT": [
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
        "check-block_A0_I6*": [
          399
        ],
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
        "switch-expr_I6?": [
          400
        ],
        "switch-expr_I5": [
          401
        ],
        "case-branch": [
          402
        ],
        "switch-expr_I6": [
          403
        ],
        "default-branch": [
          404
        ],
        "'CASE": [
          405
        ],
        "'DEFAULT": [
          406
        ],
        "'RBRACE": [
          -1,
          456
        ]
      },
      {
        "'RPAREN": [
          -1,
          458
        ],
        "'COMMA": [
          -1,
          458
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          407
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'COMMA": [
          -1,
          460
        ],
        "'RBRACK": [
          -1,
          460
        ]
      },
      {
        "'COLON": [
          408
        ],
        "'EQUALS": [
          409
        ]
      },
      {
        "'RPAREN": [
          410
        ],
        "'COMMA": [
          411
        ],
        "map-for-expr_A1_I5": [
          412
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          413
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RBRACE": [
          414
        ],
        "table-expr_I5": [
          415
        ],
        "table-row": [
          416
        ],
        "'ROW": [
          417
        ]
      },
      {
        "'SEMI": [
          -1,
          462
        ],
        "'COMMA": [
          -1,
          462
        ]
      },
      {
        "$": [
          -1,
          464
        ],
        "'NAME": [
          -1,
          464
        ],
        "'SEMI": [
          -1,
          464
        ],
        "'PARENNOSPACE": [
          -1,
          464
        ],
        "'STRING": [
          -1,
          464
        ],
        "'RPAREN": [
          -1,
          464
        ],
        "'LBRACE": [
          -1,
          464
        ],
        "'RBRACE": [
          -1,
          464
        ],
        "'SPY": [
          -1,
          464
        ],
        "'PARENSPACE": [
          -1,
          464
        ],
        "'COMMA": [
          -1,
          464
        ],
        "'INT": [
          -1,
          464
        ],
        "'LONG": [
          -1,
          464
        ],
        "'DOUBLE": [
          -1,
          464
        ],
        "'FLOAT": [
          -1,
          464
        ],
        "'BOOLEAN": [
          -1,
          464
        ],
        "'VOID": [
          -1,
          464
        ],
        "'LT": [
          -1,
          464
        ],
        "'GT": [
          -1,
          464
        ],
        "'THINARROW": [
          -1,
          464
        ],
        "'DATA": [
          -1,
          464
        ],
        "'IF": [
          -1,
          464
        ],
        "'FOR": [
          -1,
          464
        ],
        "'RETURN": [
          -1,
          464
        ],
        "'VAR": [
          -1,
          464
        ],
        "'REC": [
          -1,
          464
        ],
        "'ATCHECK": [
          -1,
          464
        ],
        "'ASSERTEQUALS": [
          -1,
          464
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          464
        ],
        "'ASSERTTRUE": [
          -1,
          464
        ],
        "'ASSERTFALSE": [
          -1,
          464
        ],
        "'ASSERTSATISFIES": [
          -1,
          464
        ],
        "'ASSERTRAISES": [
          -1,
          464
        ],
        "'IS": [
          -1,
          464
        ],
        "'ISNOT": [
          -1,
          464
        ],
        "'SATISFIES": [
          -1,
          464
        ],
        "'RAISES": [
          -1,
          464
        ],
        "'SWITCH": [
          -1,
          464
        ],
        "'CASE": [
          -1,
          464
        ],
        "'DEFAULT": [
          -1,
          464
        ],
        "'YIELD": [
          -1,
          464
        ],
        "'PLUS": [
          -1,
          464
        ],
        "'DASH": [
          -1,
          464
        ],
        "'TIMES": [
          -1,
          464
        ],
        "'SLASH": [
          -1,
          464
        ],
        "'PERCENT": [
          -1,
          464
        ],
        "'EQUALEQUAL": [
          -1,
          464
        ],
        "'NEQ": [
          -1,
          464
        ],
        "'LEQ": [
          -1,
          464
        ],
        "'GEQ": [
          -1,
          464
        ],
        "'AND": [
          -1,
          464
        ],
        "'OR": [
          -1,
          464
        ],
        "'BANG": [
          -1,
          464
        ],
        "'DOT": [
          -1,
          464
        ],
        "'LBRACK": [
          -1,
          464
        ],
        "'RBRACK": [
          -1,
          464
        ],
        "'NUMBER": [
          -1,
          464
        ],
        "'TRUE": [
          -1,
          464
        ],
        "'FALSE": [
          -1,
          464
        ],
        "'NULL": [
          -1,
          464
        ],
        "'PARENAFTERBRACE": [
          -1,
          464
        ],
        "'BLOCK": [
          -1,
          464
        ],
        "'TABLE": [
          -1,
          464
        ],
        "'ASK": [
          -1,
          464
        ],
        "'NEW": [
          -1,
          464
        ]
      },
      {
        "'SEMI": [
          418
        ]
      },
      {
        "'NAME": [
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
        "'PARENSPACE": [
          -1,
          466
        ],
        "'SWITCH": [
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
        "'SEMI": [
          419
        ]
      },
      {
        "'SEMI": [
          420
        ]
      },
      {
        "'NAME": [
          -1,
          468
        ],
        "'STRING": [
          -1,
          468
        ],
        "'LBRACE": [
          -1,
          468
        ],
        "'PARENSPACE": [
          -1,
          468
        ],
        "'SWITCH": [
          -1,
          468
        ],
        "'DASH": [
          -1,
          468
        ],
        "'BANG": [
          -1,
          468
        ],
        "'LBRACK": [
          -1,
          468
        ],
        "'NUMBER": [
          -1,
          468
        ],
        "'TRUE": [
          -1,
          468
        ],
        "'FALSE": [
          -1,
          468
        ],
        "'NULL": [
          -1,
          468
        ],
        "'PARENAFTERBRACE": [
          -1,
          468
        ],
        "'BLOCK": [
          -1,
          468
        ],
        "'TABLE": [
          -1,
          468
        ],
        "'ASK": [
          -1,
          468
        ],
        "'OTHERWISE": [
          -1,
          468
        ],
        "'NEW": [
          -1,
          468
        ]
      },
      {
        "'THINARROW": [
          421
        ]
      },
      {
        "'NAME": [
          98
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
          108
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RPAREN": [
          -1,
          470
        ],
        "'COMMA": [
          -1,
          470
        ]
      },
      {
        "'SEMI": [
          423
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
        "'PARENNOSPACE": [
          -1,
          472
        ],
        "'STRING": [
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
        "'SWITCH": [
          -1,
          472
        ],
        "'YIELD": [
          -1,
          472
        ],
        "'DASH": [
          -1,
          472
        ],
        "'BANG": [
          -1,
          472
        ],
        "'LBRACK": [
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
        "$": [
          -1,
          474
        ],
        "'NAME": [
          -1,
          474
        ],
        "'PARENNOSPACE": [
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
        "'SPY": [
          -1,
          474
        ],
        "'PARENSPACE": [
          -1,
          474
        ],
        "'INT": [
          -1,
          474
        ],
        "'LONG": [
          -1,
          474
        ],
        "'DOUBLE": [
          -1,
          474
        ],
        "'FLOAT": [
          -1,
          474
        ],
        "'BOOLEAN": [
          -1,
          474
        ],
        "'VOID": [
          -1,
          474
        ],
        "'DATA": [
          -1,
          474
        ],
        "'IF": [
          -1,
          474
        ],
        "'FOR": [
          -1,
          474
        ],
        "'RETURN": [
          -1,
          474
        ],
        "'VAR": [
          -1,
          474
        ],
        "'REC": [
          -1,
          474
        ],
        "'ATCHECK": [
          -1,
          474
        ],
        "'ASSERTEQUALS": [
          -1,
          474
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          474
        ],
        "'ASSERTTRUE": [
          -1,
          474
        ],
        "'ASSERTFALSE": [
          -1,
          474
        ],
        "'ASSERTSATISFIES": [
          -1,
          474
        ],
        "'ASSERTRAISES": [
          -1,
          474
        ],
        "'SWITCH": [
          -1,
          474
        ],
        "'YIELD": [
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
        "$": [
          -1,
          476
        ],
        "'NAME": [
          -1,
          476
        ],
        "'PARENNOSPACE": [
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
        "'RBRACE": [
          -1,
          476
        ],
        "'SPY": [
          -1,
          476
        ],
        "'PARENSPACE": [
          -1,
          476
        ],
        "'INT": [
          -1,
          476
        ],
        "'LONG": [
          -1,
          476
        ],
        "'DOUBLE": [
          -1,
          476
        ],
        "'FLOAT": [
          -1,
          476
        ],
        "'BOOLEAN": [
          -1,
          476
        ],
        "'VOID": [
          -1,
          476
        ],
        "'DATA": [
          -1,
          476
        ],
        "'IF": [
          -1,
          476
        ],
        "'FOR": [
          -1,
          476
        ],
        "'RETURN": [
          -1,
          476
        ],
        "'VAR": [
          -1,
          476
        ],
        "'REC": [
          -1,
          476
        ],
        "'ATCHECK": [
          -1,
          476
        ],
        "'ASSERTEQUALS": [
          -1,
          476
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          476
        ],
        "'ASSERTTRUE": [
          -1,
          476
        ],
        "'ASSERTFALSE": [
          -1,
          476
        ],
        "'ASSERTSATISFIES": [
          -1,
          476
        ],
        "'ASSERTRAISES": [
          -1,
          476
        ],
        "'SWITCH": [
          -1,
          476
        ],
        "'YIELD": [
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
        "'NEW": [
          -1,
          476
        ]
      },
      {
        "'LBRACE": [
          424
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          425
        ],
        "block_I1": [
          426
        ],
        "block-stmt": [
          427
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          214
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
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
          218
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          229
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'RPAREN": [
          -1,
          480
        ],
        "'COMMA": [
          -1,
          480
        ]
      },
      {
        "'SEMI": [
          -1,
          482
        ],
        "'RBRACE": [
          -1,
          482
        ]
      },
      {
        "'COMMA": [
          428
        ],
        "variant-decl_A0_I2_I1": [
          429
        ],
        "'RPAREN": [
          -1,
          484
        ]
      },
      {
        "'SEMI": [
          -1,
          486
        ],
        "'RBRACE": [
          -1,
          486
        ]
      },
      {
        "$": [
          -1,
          488
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          488
        ],
        "'TABLE": [
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
        "'RPAREN": [
          430
        ],
        "spy-stmt_I3": [
          431
        ],
        "'COMMA": [
          432
        ]
      },
      {
        "block": [
          433
        ],
        "'LBRACE": [
          313
        ]
      },
      {
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          490
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          492
        ],
        "'ATCHECK": [
          -1,
          492
        ],
        "'ASSERTEQUALS": [
          -1,
          492
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          492
        ],
        "'ASSERTTRUE": [
          -1,
          492
        ],
        "'ASSERTFALSE": [
          -1,
          492
        ],
        "'ASSERTSATISFIES": [
          -1,
          492
        ],
        "'ASSERTRAISES": [
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
        "'BLOCK": [
          -1,
          492
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
          -1,
          494
        ],
        "'ATCHECK": [
          -1,
          494
        ],
        "'ASSERTEQUALS": [
          -1,
          494
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          494
        ],
        "'ASSERTTRUE": [
          -1,
          494
        ],
        "'ASSERTFALSE": [
          -1,
          494
        ],
        "'ASSERTSATISFIES": [
          -1,
          494
        ],
        "'ASSERTRAISES": [
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
        "'BLOCK": [
          -1,
          494
        ],
        "'TABLE": [
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
        "'COLON": [
          434
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          435
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          436
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'SEMI": [
          437
        ],
        "assert-stmt_A2_I4?": [
          438
        ],
        "assert-stmt_A2_I4": [
          439
        ],
        "'NAME": [
          -1,
          514,
          516
        ],
        "'PARENNOSPACE": [
          -1,
          514,
          516
        ],
        "'STRING": [
          -1,
          514,
          516
        ],
        "'LBRACE": [
          -1,
          514,
          516
        ],
        "'RBRACE": [
          -1,
          514,
          516
        ],
        "'SPY": [
          -1,
          514,
          516
        ],
        "'PARENSPACE": [
          -1,
          514,
          516
        ],
        "'INT": [
          -1,
          514,
          516
        ],
        "'LONG": [
          -1,
          514,
          516
        ],
        "'DOUBLE": [
          -1,
          514,
          516
        ],
        "'FLOAT": [
          -1,
          514,
          516
        ],
        "'BOOLEAN": [
          -1,
          514,
          516
        ],
        "'VOID": [
          -1,
          514,
          516
        ],
        "'DATA": [
          -1,
          514,
          516
        ],
        "'IF": [
          -1,
          514,
          516
        ],
        "'FOR": [
          -1,
          514,
          516
        ],
        "'RETURN": [
          -1,
          514,
          516
        ],
        "'VAR": [
          -1,
          514,
          516
        ],
        "'REC": [
          -1,
          514,
          516
        ],
        "'ATCHECK": [
          -1,
          514,
          516
        ],
        "'ASSERTEQUALS": [
          -1,
          514,
          516
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          514,
          516
        ],
        "'ASSERTTRUE": [
          -1,
          514,
          516
        ],
        "'ASSERTFALSE": [
          -1,
          514,
          516
        ],
        "'ASSERTSATISFIES": [
          -1,
          514,
          516
        ],
        "'ASSERTRAISES": [
          -1,
          514,
          516
        ],
        "'SWITCH": [
          -1,
          514,
          516
        ],
        "'YIELD": [
          -1,
          514,
          516
        ],
        "'DASH": [
          -1,
          514,
          516
        ],
        "'BANG": [
          -1,
          514,
          516
        ],
        "'LBRACK": [
          -1,
          514,
          516
        ],
        "'NUMBER": [
          -1,
          514,
          516
        ],
        "'TRUE": [
          -1,
          514,
          516
        ],
        "'FALSE": [
          -1,
          514,
          516
        ],
        "'NULL": [
          -1,
          514,
          516
        ],
        "'PARENAFTERBRACE": [
          -1,
          514,
          516
        ],
        "'BLOCK": [
          -1,
          514,
          516
        ],
        "'TABLE": [
          -1,
          514,
          516
        ],
        "'ASK": [
          -1,
          514,
          516
        ],
        "'NEW": [
          -1,
          514,
          516
        ]
      },
      {
        "'SEMI": [
          440
        ],
        "assert-stmt_A3_I4?": [
          441
        ],
        "assert-stmt_A3_I4": [
          442
        ],
        "'NAME": [
          -1,
          518,
          520
        ],
        "'PARENNOSPACE": [
          -1,
          518,
          520
        ],
        "'STRING": [
          -1,
          518,
          520
        ],
        "'LBRACE": [
          -1,
          518,
          520
        ],
        "'RBRACE": [
          -1,
          518,
          520
        ],
        "'SPY": [
          -1,
          518,
          520
        ],
        "'PARENSPACE": [
          -1,
          518,
          520
        ],
        "'INT": [
          -1,
          518,
          520
        ],
        "'LONG": [
          -1,
          518,
          520
        ],
        "'DOUBLE": [
          -1,
          518,
          520
        ],
        "'FLOAT": [
          -1,
          518,
          520
        ],
        "'BOOLEAN": [
          -1,
          518,
          520
        ],
        "'VOID": [
          -1,
          518,
          520
        ],
        "'DATA": [
          -1,
          518,
          520
        ],
        "'IF": [
          -1,
          518,
          520
        ],
        "'FOR": [
          -1,
          518,
          520
        ],
        "'RETURN": [
          -1,
          518,
          520
        ],
        "'VAR": [
          -1,
          518,
          520
        ],
        "'REC": [
          -1,
          518,
          520
        ],
        "'ATCHECK": [
          -1,
          518,
          520
        ],
        "'ASSERTEQUALS": [
          -1,
          518,
          520
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          518,
          520
        ],
        "'ASSERTTRUE": [
          -1,
          518,
          520
        ],
        "'ASSERTFALSE": [
          -1,
          518,
          520
        ],
        "'ASSERTSATISFIES": [
          -1,
          518,
          520
        ],
        "'ASSERTRAISES": [
          -1,
          518,
          520
        ],
        "'SWITCH": [
          -1,
          518,
          520
        ],
        "'YIELD": [
          -1,
          518,
          520
        ],
        "'DASH": [
          -1,
          518,
          520
        ],
        "'BANG": [
          -1,
          518,
          520
        ],
        "'LBRACK": [
          -1,
          518,
          520
        ],
        "'NUMBER": [
          -1,
          518,
          520
        ],
        "'TRUE": [
          -1,
          518,
          520
        ],
        "'FALSE": [
          -1,
          518,
          520
        ],
        "'NULL": [
          -1,
          518,
          520
        ],
        "'PARENAFTERBRACE": [
          -1,
          518,
          520
        ],
        "'BLOCK": [
          -1,
          518,
          520
        ],
        "'TABLE": [
          -1,
          518,
          520
        ],
        "'ASK": [
          -1,
          518,
          520
        ],
        "'NEW": [
          -1,
          518,
          520
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          443
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          444
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          445
        ],
        "block-stmt": [
          446
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          214
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          447
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
          218
        ],
        "full-expr": [
          219
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          448
        ],
        "'ASSERTEQUALS": [
          223
        ],
        "'ASSERTNOTEQUALS": [
          224
        ],
        "'ASSERTTRUE": [
          225
        ],
        "'ASSERTFALSE": [
          226
        ],
        "'ASSERTSATISFIES": [
          227
        ],
        "'ASSERTRAISES": [
          228
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          229
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RBRACE": [
          449
        ]
      },
      {
        "'RBRACE": [
          -1,
          522
        ],
        "'CASE": [
          -1,
          522
        ],
        "'DEFAULT": [
          -1,
          522
        ]
      },
      {
        "'RBRACE": [
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
        ]
      },
      {
        "'RBRACE": [
          -1,
          526
        ]
      },
      {
        "'RBRACE": [
          -1,
          528
        ]
      },
      {
        "'NAME": [
          450
        ]
      },
      {
        "'COLON": [
          451
        ]
      },
      {
        "'COMMA": [
          -1,
          530
        ],
        "'RBRACK": [
          -1,
          530
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          452
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          453
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "block": [
          454
        ],
        "'LBRACE": [
          313
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          297
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
          455
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
        "'RPAREN": [
          456
        ]
      },
      {
        "$": [
          -1,
          534
        ],
        "'NAME": [
          -1,
          534
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          534
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          534
        ],
        "'GT": [
          -1,
          534
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          534
        ],
        "'ISNOT": [
          -1,
          534
        ],
        "'SATISFIES": [
          -1,
          534
        ],
        "'RAISES": [
          -1,
          534
        ],
        "'SWITCH": [
          -1,
          534
        ],
        "'CASE": [
          -1,
          534
        ],
        "'DEFAULT": [
          -1,
          534
        ],
        "'YIELD": [
          -1,
          534
        ],
        "'PLUS": [
          -1,
          534
        ],
        "'DASH": [
          -1,
          534
        ],
        "'TIMES": [
          -1,
          534
        ],
        "'SLASH": [
          -1,
          534
        ],
        "'PERCENT": [
          -1,
          534
        ],
        "'EQUALEQUAL": [
          -1,
          534
        ],
        "'NEQ": [
          -1,
          534
        ],
        "'LEQ": [
          -1,
          534
        ],
        "'GEQ": [
          -1,
          534
        ],
        "'AND": [
          -1,
          534
        ],
        "'OR": [
          -1,
          534
        ],
        "'BANG": [
          -1,
          534
        ],
        "'DOT": [
          -1,
          534
        ],
        "'LBRACK": [
          -1,
          534
        ],
        "'RBRACK": [
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
        "'BLOCK": [
          -1,
          534
        ],
        "'TABLE": [
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
        "'RBRACE": [
          -1,
          536
        ],
        "'ROW": [
          -1,
          536
        ]
      },
      {
        "'SEMI": [
          457
        ]
      },
      {
        "'COLON": [
          458
        ]
      },
      {
        "'NAME": [
          -1,
          538
        ],
        "'STRING": [
          -1,
          538
        ],
        "'LBRACE": [
          -1,
          538
        ],
        "'RBRACE": [
          -1,
          538
        ],
        "'PARENSPACE": [
          -1,
          538
        ],
        "'SWITCH": [
          -1,
          538
        ],
        "'DASH": [
          -1,
          538
        ],
        "'BANG": [
          -1,
          538
        ],
        "'LBRACK": [
          -1,
          538
        ],
        "'NUMBER": [
          -1,
          538
        ],
        "'TRUE": [
          -1,
          538
        ],
        "'FALSE": [
          -1,
          538
        ],
        "'NULL": [
          -1,
          538
        ],
        "'PARENAFTERBRACE": [
          -1,
          538
        ],
        "'BLOCK": [
          -1,
          538
        ],
        "'TABLE": [
          -1,
          538
        ],
        "'ASK": [
          -1,
          538
        ],
        "'NEW": [
          -1,
          538
        ]
      },
      {
        "'NAME": [
          -1,
          540
        ],
        "'STRING": [
          -1,
          540
        ],
        "'LBRACE": [
          -1,
          540
        ],
        "'PARENSPACE": [
          -1,
          540
        ],
        "'SWITCH": [
          -1,
          540
        ],
        "'DASH": [
          -1,
          540
        ],
        "'BANG": [
          -1,
          540
        ],
        "'LBRACK": [
          -1,
          540
        ],
        "'NUMBER": [
          -1,
          540
        ],
        "'TRUE": [
          -1,
          540
        ],
        "'FALSE": [
          -1,
          540
        ],
        "'NULL": [
          -1,
          540
        ],
        "'PARENAFTERBRACE": [
          -1,
          540
        ],
        "'BLOCK": [
          -1,
          540
        ],
        "'TABLE": [
          -1,
          540
        ],
        "'ASK": [
          -1,
          540
        ],
        "'OTHERWISE": [
          -1,
          540
        ],
        "'NEW": [
          -1,
          540
        ]
      },
      {
        "'RBRACE": [
          459
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          460
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RPAREN": [
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
        "'IMPORT": [
          -1,
          544
        ],
        "'NAME": [
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
        "'INCLUDE": [
          -1,
          544
        ],
        "'LBRACE": [
          -1,
          544
        ],
        "'PARENSPACE": [
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
        "'DATA": [
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
        "'SWITCH": [
          -1,
          544
        ],
        "'DASH": [
          -1,
          544
        ],
        "'BANG": [
          -1,
          544
        ],
        "'LBRACK": [
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
        "where-clause_I2*": [
          461
        ],
        "'NAME": [
          -1,
          546
        ],
        "'PARENNOSPACE": [
          -1,
          546
        ],
        "'STRING": [
          -1,
          546
        ],
        "'LBRACE": [
          -1,
          546
        ],
        "'RBRACE": [
          -1,
          546
        ],
        "'SPY": [
          -1,
          546
        ],
        "'PARENSPACE": [
          -1,
          546
        ],
        "'INT": [
          -1,
          546
        ],
        "'LONG": [
          -1,
          546
        ],
        "'DOUBLE": [
          -1,
          546
        ],
        "'FLOAT": [
          -1,
          546
        ],
        "'BOOLEAN": [
          -1,
          546
        ],
        "'VOID": [
          -1,
          546
        ],
        "'DATA": [
          -1,
          546
        ],
        "'IF": [
          -1,
          546
        ],
        "'FOR": [
          -1,
          546
        ],
        "'RETURN": [
          -1,
          546
        ],
        "'VAR": [
          -1,
          546
        ],
        "'REC": [
          -1,
          546
        ],
        "'ATCHECK": [
          -1,
          546
        ],
        "'ASSERTEQUALS": [
          -1,
          546
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          546
        ],
        "'ASSERTTRUE": [
          -1,
          546
        ],
        "'ASSERTFALSE": [
          -1,
          546
        ],
        "'ASSERTSATISFIES": [
          -1,
          546
        ],
        "'ASSERTRAISES": [
          -1,
          546
        ],
        "'SWITCH": [
          -1,
          546
        ],
        "'YIELD": [
          -1,
          546
        ],
        "'DASH": [
          -1,
          546
        ],
        "'BANG": [
          -1,
          546
        ],
        "'LBRACK": [
          -1,
          546
        ],
        "'NUMBER": [
          -1,
          546
        ],
        "'TRUE": [
          -1,
          546
        ],
        "'FALSE": [
          -1,
          546
        ],
        "'NULL": [
          -1,
          546
        ],
        "'PARENAFTERBRACE": [
          -1,
          546
        ],
        "'BLOCK": [
          -1,
          546
        ],
        "'TABLE": [
          -1,
          546
        ],
        "'ASK": [
          -1,
          546
        ],
        "'NEW": [
          -1,
          546
        ]
      },
      {
        "$": [
          -1,
          548
        ],
        "'NAME": [
          -1,
          548
        ],
        "'PARENNOSPACE": [
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
        "'SPY": [
          -1,
          548
        ],
        "'PARENSPACE": [
          -1,
          548
        ],
        "'WHERE": [
          -1,
          548
        ],
        "'INT": [
          -1,
          548
        ],
        "'LONG": [
          -1,
          548
        ],
        "'DOUBLE": [
          -1,
          548
        ],
        "'FLOAT": [
          -1,
          548
        ],
        "'BOOLEAN": [
          -1,
          548
        ],
        "'VOID": [
          -1,
          548
        ],
        "'DATA": [
          -1,
          548
        ],
        "'IF": [
          -1,
          548
        ],
        "'ELSE": [
          -1,
          548
        ],
        "'FOR": [
          -1,
          548
        ],
        "'RETURN": [
          -1,
          548
        ],
        "'VAR": [
          -1,
          548
        ],
        "'REC": [
          -1,
          548
        ],
        "'ATCHECK": [
          -1,
          548
        ],
        "'ASSERTEQUALS": [
          -1,
          548
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          548
        ],
        "'ASSERTTRUE": [
          -1,
          548
        ],
        "'ASSERTFALSE": [
          -1,
          548
        ],
        "'ASSERTSATISFIES": [
          -1,
          548
        ],
        "'ASSERTRAISES": [
          -1,
          548
        ],
        "'SWITCH": [
          -1,
          548
        ],
        "'YIELD": [
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
        "'RBRACK": [
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
        "'PARENNOSPACE": [
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
        "'RBRACE": [
          -1,
          550
        ],
        "'SPY": [
          -1,
          550
        ],
        "'PARENSPACE": [
          -1,
          550
        ],
        "'INT": [
          -1,
          550
        ],
        "'LONG": [
          -1,
          550
        ],
        "'DOUBLE": [
          -1,
          550
        ],
        "'FLOAT": [
          -1,
          550
        ],
        "'BOOLEAN": [
          -1,
          550
        ],
        "'VOID": [
          -1,
          550
        ],
        "'DATA": [
          -1,
          550
        ],
        "'IF": [
          -1,
          550
        ],
        "'FOR": [
          -1,
          550
        ],
        "'RETURN": [
          -1,
          550
        ],
        "'VAR": [
          -1,
          550
        ],
        "'REC": [
          -1,
          550
        ],
        "'ATCHECK": [
          -1,
          550
        ],
        "'SWITCH": [
          -1,
          550
        ],
        "'YIELD": [
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
        "'NEW": [
          -1,
          550
        ]
      },
      {
        "'NAME": [
          -1,
          552
        ],
        "'PARENNOSPACE": [
          -1,
          552
        ],
        "'STRING": [
          -1,
          552
        ],
        "'LBRACE": [
          -1,
          552
        ],
        "'RBRACE": [
          -1,
          552
        ],
        "'SPY": [
          -1,
          552
        ],
        "'PARENSPACE": [
          -1,
          552
        ],
        "'INT": [
          -1,
          552
        ],
        "'LONG": [
          -1,
          552
        ],
        "'DOUBLE": [
          -1,
          552
        ],
        "'FLOAT": [
          -1,
          552
        ],
        "'BOOLEAN": [
          -1,
          552
        ],
        "'VOID": [
          -1,
          552
        ],
        "'DATA": [
          -1,
          552
        ],
        "'IF": [
          -1,
          552
        ],
        "'FOR": [
          -1,
          552
        ],
        "'RETURN": [
          -1,
          552
        ],
        "'VAR": [
          -1,
          552
        ],
        "'REC": [
          -1,
          552
        ],
        "'ATCHECK": [
          -1,
          552
        ],
        "'SWITCH": [
          -1,
          552
        ],
        "'YIELD": [
          -1,
          552
        ],
        "'DASH": [
          -1,
          552
        ],
        "'BANG": [
          -1,
          552
        ],
        "'LBRACK": [
          -1,
          552
        ],
        "'NUMBER": [
          -1,
          552
        ],
        "'TRUE": [
          -1,
          552
        ],
        "'FALSE": [
          -1,
          552
        ],
        "'NULL": [
          -1,
          552
        ],
        "'PARENAFTERBRACE": [
          -1,
          552
        ],
        "'BLOCK": [
          -1,
          552
        ],
        "'TABLE": [
          -1,
          552
        ],
        "'ASK": [
          -1,
          552
        ],
        "'NEW": [
          -1,
          552
        ]
      },
      {
        "'NAME": [
          91
        ],
        "'PARENSPACE": [
          70
        ],
        "type-ann": [
          316
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
          462
        ]
      },
      {
        "'RPAREN": [
          -1,
          554
        ],
        "'COMMA": [
          -1,
          554
        ]
      },
      {
        "'SEMI": [
          463
        ]
      },
      {
        "'RPAREN": [
          -1,
          556
        ],
        "'COMMA": [
          -1,
          556
        ]
      },
      {
        "'NAME": [
          464
        ]
      },
      {
        "if-stmt_I5*": [
          465
        ],
        "'NAME": [
          -1,
          558,
          560
        ],
        "'PARENNOSPACE": [
          -1,
          558,
          560
        ],
        "'STRING": [
          -1,
          558,
          560
        ],
        "'LBRACE": [
          -1,
          558,
          560
        ],
        "'RBRACE": [
          -1,
          558,
          560
        ],
        "'SPY": [
          -1,
          558,
          560
        ],
        "'PARENSPACE": [
          -1,
          558,
          560
        ],
        "'INT": [
          -1,
          558,
          560
        ],
        "'LONG": [
          -1,
          558,
          560
        ],
        "'DOUBLE": [
          -1,
          558,
          560
        ],
        "'FLOAT": [
          -1,
          558,
          560
        ],
        "'BOOLEAN": [
          -1,
          558,
          560
        ],
        "'VOID": [
          -1,
          558,
          560
        ],
        "'DATA": [
          -1,
          558,
          560
        ],
        "'IF": [
          -1,
          558,
          560
        ],
        "'ELSE": [
          -1,
          560
        ],
        "'FOR": [
          -1,
          558,
          560
        ],
        "'RETURN": [
          -1,
          558,
          560
        ],
        "'VAR": [
          -1,
          558,
          560
        ],
        "'REC": [
          -1,
          558,
          560
        ],
        "'ATCHECK": [
          -1,
          558,
          560
        ],
        "'ASSERTEQUALS": [
          -1,
          558,
          560
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          558,
          560
        ],
        "'ASSERTTRUE": [
          -1,
          558,
          560
        ],
        "'ASSERTFALSE": [
          -1,
          558,
          560
        ],
        "'ASSERTSATISFIES": [
          -1,
          558,
          560
        ],
        "'ASSERTRAISES": [
          -1,
          558,
          560
        ],
        "'SWITCH": [
          -1,
          558,
          560
        ],
        "'YIELD": [
          -1,
          558,
          560
        ],
        "'DASH": [
          -1,
          558,
          560
        ],
        "'BANG": [
          -1,
          558,
          560
        ],
        "'LBRACK": [
          -1,
          558,
          560
        ],
        "'NUMBER": [
          -1,
          558,
          560
        ],
        "'TRUE": [
          -1,
          558,
          560
        ],
        "'FALSE": [
          -1,
          558,
          560
        ],
        "'NULL": [
          -1,
          558,
          560
        ],
        "'PARENAFTERBRACE": [
          -1,
          558,
          560
        ],
        "'BLOCK": [
          -1,
          558,
          560
        ],
        "'TABLE": [
          -1,
          558,
          560
        ],
        "'ASK": [
          -1,
          558,
          560
        ],
        "'NEW": [
          -1,
          558,
          560
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          466
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'RPAREN": [
          467
        ]
      },
      {
        "'RPAREN": [
          468
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          564
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          566
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          568
        ],
        "'TABLE": [
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
        "'LBRACE": [
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
        "'REC": [
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
        "'BLOCK": [
          -1,
          570
        ],
        "'TABLE": [
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
        "'RPAREN": [
          469
        ]
      },
      {
        "'RPAREN": [
          470
        ]
      },
      {
        "$": [
          -1,
          574
        ],
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
        "$": [
          -1,
          582
        ],
        "'NAME": [
          -1,
          582
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          582
        ],
        "'GT": [
          -1,
          582
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          582
        ],
        "'ISNOT": [
          -1,
          582
        ],
        "'SATISFIES": [
          -1,
          582
        ],
        "'RAISES": [
          -1,
          582
        ],
        "'SWITCH": [
          -1,
          582
        ],
        "'CASE": [
          -1,
          582
        ],
        "'DEFAULT": [
          -1,
          582
        ],
        "'YIELD": [
          -1,
          582
        ],
        "'PLUS": [
          -1,
          582
        ],
        "'DASH": [
          -1,
          582
        ],
        "'TIMES": [
          -1,
          582
        ],
        "'SLASH": [
          -1,
          582
        ],
        "'PERCENT": [
          -1,
          582
        ],
        "'EQUALEQUAL": [
          -1,
          582
        ],
        "'NEQ": [
          -1,
          582
        ],
        "'LEQ": [
          -1,
          582
        ],
        "'GEQ": [
          -1,
          582
        ],
        "'AND": [
          -1,
          582
        ],
        "'OR": [
          -1,
          582
        ],
        "'BANG": [
          -1,
          582
        ],
        "'DOT": [
          -1,
          582
        ],
        "'LBRACK": [
          -1,
          582
        ],
        "'RBRACK": [
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
        "'PARENNOSPACE": [
          471
        ],
        "'COLON": [
          472
        ]
      },
      {
        "switch-body": [
          473
        ],
        "switch-body_I0*": [
          474
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
        "'RPAREN": [
          -1,
          586
        ],
        "'COMMA": [
          -1,
          586
        ]
      },
      {
        "'RPAREN": [
          -1,
          588
        ],
        "'COMMA": [
          -1,
          588
        ]
      },
      {
        "'RBRACK": [
          475
        ]
      },
      {
        "'RPAREN": [
          -1,
          590
        ],
        "'COMMA": [
          -1,
          590
        ]
      },
      {
        "block": [
          476
        ],
        "'LBRACE": [
          313
        ]
      },
      {
        "'RBRACE": [
          -1,
          592
        ],
        "'ROW": [
          -1,
          592
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          477
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "$": [
          -1,
          594
        ],
        "'NAME": [
          -1,
          594
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          594
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          594
        ],
        "'GT": [
          -1,
          594
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          594
        ],
        "'ISNOT": [
          -1,
          594
        ],
        "'SATISFIES": [
          -1,
          594
        ],
        "'RAISES": [
          -1,
          594
        ],
        "'SWITCH": [
          -1,
          594
        ],
        "'CASE": [
          -1,
          594
        ],
        "'DEFAULT": [
          -1,
          594
        ],
        "'YIELD": [
          -1,
          594
        ],
        "'PLUS": [
          -1,
          594
        ],
        "'DASH": [
          -1,
          594
        ],
        "'TIMES": [
          -1,
          594
        ],
        "'SLASH": [
          -1,
          594
        ],
        "'PERCENT": [
          -1,
          594
        ],
        "'EQUALEQUAL": [
          -1,
          594
        ],
        "'NEQ": [
          -1,
          594
        ],
        "'LEQ": [
          -1,
          594
        ],
        "'GEQ": [
          -1,
          594
        ],
        "'AND": [
          -1,
          594
        ],
        "'OR": [
          -1,
          594
        ],
        "'BANG": [
          -1,
          594
        ],
        "'DOT": [
          -1,
          594
        ],
        "'LBRACK": [
          -1,
          594
        ],
        "'RBRACK": [
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
          596
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          478
        ],
        "block-stmt": [
          479
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          214
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "where-clause_I2": [
          480
        ],
        "assert-stmt": [
          481
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
          218
        ],
        "full-expr": [
          219
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          223
        ],
        "'ASSERTNOTEQUALS": [
          224
        ],
        "'ASSERTTRUE": [
          225
        ],
        "'ASSERTFALSE": [
          226
        ],
        "'ASSERTSATISFIES": [
          227
        ],
        "'ASSERTRAISES": [
          228
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          229
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
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
        "'NAME": [
          -1,
          600
        ],
        "'PARENNOSPACE": [
          -1,
          600
        ],
        "'STRING": [
          -1,
          600
        ],
        "'LBRACE": [
          -1,
          600
        ],
        "'RBRACE": [
          -1,
          600
        ],
        "'SPY": [
          -1,
          600
        ],
        "'PARENSPACE": [
          -1,
          600
        ],
        "'INT": [
          -1,
          600
        ],
        "'LONG": [
          -1,
          600
        ],
        "'DOUBLE": [
          -1,
          600
        ],
        "'FLOAT": [
          -1,
          600
        ],
        "'BOOLEAN": [
          -1,
          600
        ],
        "'VOID": [
          -1,
          600
        ],
        "'DATA": [
          -1,
          600
        ],
        "'IF": [
          -1,
          600
        ],
        "'FOR": [
          -1,
          600
        ],
        "'RETURN": [
          -1,
          600
        ],
        "'VAR": [
          -1,
          600
        ],
        "'REC": [
          -1,
          600
        ],
        "'ATCHECK": [
          -1,
          600
        ],
        "'ASSERTEQUALS": [
          -1,
          600
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          600
        ],
        "'ASSERTTRUE": [
          -1,
          600
        ],
        "'ASSERTFALSE": [
          -1,
          600
        ],
        "'ASSERTSATISFIES": [
          -1,
          600
        ],
        "'ASSERTRAISES": [
          -1,
          600
        ],
        "'SWITCH": [
          -1,
          600
        ],
        "'YIELD": [
          -1,
          600
        ],
        "'DASH": [
          -1,
          600
        ],
        "'BANG": [
          -1,
          600
        ],
        "'LBRACK": [
          -1,
          600
        ],
        "'NUMBER": [
          -1,
          600
        ],
        "'TRUE": [
          -1,
          600
        ],
        "'FALSE": [
          -1,
          600
        ],
        "'NULL": [
          -1,
          600
        ],
        "'PARENAFTERBRACE": [
          -1,
          600
        ],
        "'BLOCK": [
          -1,
          600
        ],
        "'TABLE": [
          -1,
          600
        ],
        "'ASK": [
          -1,
          600
        ],
        "'NEW": [
          -1,
          600
        ]
      },
      {
        "'RPAREN": [
          -1,
          602
        ],
        "'COMMA": [
          -1,
          602
        ]
      },
      {
        "if-stmt_I6?": [
          482
        ],
        "if-stmt_I5": [
          483
        ],
        "'ELSE": [
          484
        ],
        "if-stmt_I6": [
          485
        ],
        "'NAME": [
          -1,
          604,
          606
        ],
        "'PARENNOSPACE": [
          -1,
          604,
          606
        ],
        "'STRING": [
          -1,
          604,
          606
        ],
        "'LBRACE": [
          -1,
          604,
          606
        ],
        "'RBRACE": [
          -1,
          604,
          606
        ],
        "'SPY": [
          -1,
          604,
          606
        ],
        "'PARENSPACE": [
          -1,
          604,
          606
        ],
        "'INT": [
          -1,
          604,
          606
        ],
        "'LONG": [
          -1,
          604,
          606
        ],
        "'DOUBLE": [
          -1,
          604,
          606
        ],
        "'FLOAT": [
          -1,
          604,
          606
        ],
        "'BOOLEAN": [
          -1,
          604,
          606
        ],
        "'VOID": [
          -1,
          604,
          606
        ],
        "'DATA": [
          -1,
          604,
          606
        ],
        "'IF": [
          -1,
          604,
          606
        ],
        "'FOR": [
          -1,
          604,
          606
        ],
        "'RETURN": [
          -1,
          604,
          606
        ],
        "'VAR": [
          -1,
          604,
          606
        ],
        "'REC": [
          -1,
          604,
          606
        ],
        "'ATCHECK": [
          -1,
          604,
          606
        ],
        "'ASSERTEQUALS": [
          -1,
          604,
          606
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          604,
          606
        ],
        "'ASSERTTRUE": [
          -1,
          604,
          606
        ],
        "'ASSERTFALSE": [
          -1,
          604,
          606
        ],
        "'ASSERTSATISFIES": [
          -1,
          604,
          606
        ],
        "'ASSERTRAISES": [
          -1,
          604,
          606
        ],
        "'SWITCH": [
          -1,
          604,
          606
        ],
        "'YIELD": [
          -1,
          604,
          606
        ],
        "'DASH": [
          -1,
          604,
          606
        ],
        "'BANG": [
          -1,
          604,
          606
        ],
        "'LBRACK": [
          -1,
          604,
          606
        ],
        "'NUMBER": [
          -1,
          604,
          606
        ],
        "'TRUE": [
          -1,
          604,
          606
        ],
        "'FALSE": [
          -1,
          604,
          606
        ],
        "'NULL": [
          -1,
          604,
          606
        ],
        "'PARENAFTERBRACE": [
          -1,
          604,
          606
        ],
        "'BLOCK": [
          -1,
          604,
          606
        ],
        "'TABLE": [
          -1,
          604,
          606
        ],
        "'ASK": [
          -1,
          604,
          606
        ],
        "'NEW": [
          -1,
          604,
          606
        ]
      },
      {
        "'RPAREN": [
          486
        ]
      },
      {
        "'SEMI": [
          487
        ],
        "assert-stmt_A0_I6?": [
          488
        ],
        "assert-stmt_A0_I6": [
          489
        ],
        "'NAME": [
          -1,
          608,
          610
        ],
        "'PARENNOSPACE": [
          -1,
          608,
          610
        ],
        "'STRING": [
          -1,
          608,
          610
        ],
        "'LBRACE": [
          -1,
          608,
          610
        ],
        "'RBRACE": [
          -1,
          608,
          610
        ],
        "'SPY": [
          -1,
          608,
          610
        ],
        "'PARENSPACE": [
          -1,
          608,
          610
        ],
        "'INT": [
          -1,
          608,
          610
        ],
        "'LONG": [
          -1,
          608,
          610
        ],
        "'DOUBLE": [
          -1,
          608,
          610
        ],
        "'FLOAT": [
          -1,
          608,
          610
        ],
        "'BOOLEAN": [
          -1,
          608,
          610
        ],
        "'VOID": [
          -1,
          608,
          610
        ],
        "'DATA": [
          -1,
          608,
          610
        ],
        "'IF": [
          -1,
          608,
          610
        ],
        "'FOR": [
          -1,
          608,
          610
        ],
        "'RETURN": [
          -1,
          608,
          610
        ],
        "'VAR": [
          -1,
          608,
          610
        ],
        "'REC": [
          -1,
          608,
          610
        ],
        "'ATCHECK": [
          -1,
          608,
          610
        ],
        "'ASSERTEQUALS": [
          -1,
          608,
          610
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          608,
          610
        ],
        "'ASSERTTRUE": [
          -1,
          608,
          610
        ],
        "'ASSERTFALSE": [
          -1,
          608,
          610
        ],
        "'ASSERTSATISFIES": [
          -1,
          608,
          610
        ],
        "'ASSERTRAISES": [
          -1,
          608,
          610
        ],
        "'SWITCH": [
          -1,
          608,
          610
        ],
        "'YIELD": [
          -1,
          608,
          610
        ],
        "'DASH": [
          -1,
          608,
          610
        ],
        "'BANG": [
          -1,
          608,
          610
        ],
        "'LBRACK": [
          -1,
          608,
          610
        ],
        "'NUMBER": [
          -1,
          608,
          610
        ],
        "'TRUE": [
          -1,
          608,
          610
        ],
        "'FALSE": [
          -1,
          608,
          610
        ],
        "'NULL": [
          -1,
          608,
          610
        ],
        "'PARENAFTERBRACE": [
          -1,
          608,
          610
        ],
        "'BLOCK": [
          -1,
          608,
          610
        ],
        "'TABLE": [
          -1,
          608,
          610
        ],
        "'ASK": [
          -1,
          608,
          610
        ],
        "'NEW": [
          -1,
          608,
          610
        ]
      },
      {
        "'SEMI": [
          490
        ],
        "assert-stmt_A1_I6?": [
          491
        ],
        "assert-stmt_A1_I6": [
          492
        ],
        "'NAME": [
          -1,
          612,
          614
        ],
        "'PARENNOSPACE": [
          -1,
          612,
          614
        ],
        "'STRING": [
          -1,
          612,
          614
        ],
        "'LBRACE": [
          -1,
          612,
          614
        ],
        "'RBRACE": [
          -1,
          612,
          614
        ],
        "'SPY": [
          -1,
          612,
          614
        ],
        "'PARENSPACE": [
          -1,
          612,
          614
        ],
        "'INT": [
          -1,
          612,
          614
        ],
        "'LONG": [
          -1,
          612,
          614
        ],
        "'DOUBLE": [
          -1,
          612,
          614
        ],
        "'FLOAT": [
          -1,
          612,
          614
        ],
        "'BOOLEAN": [
          -1,
          612,
          614
        ],
        "'VOID": [
          -1,
          612,
          614
        ],
        "'DATA": [
          -1,
          612,
          614
        ],
        "'IF": [
          -1,
          612,
          614
        ],
        "'FOR": [
          -1,
          612,
          614
        ],
        "'RETURN": [
          -1,
          612,
          614
        ],
        "'VAR": [
          -1,
          612,
          614
        ],
        "'REC": [
          -1,
          612,
          614
        ],
        "'ATCHECK": [
          -1,
          612,
          614
        ],
        "'ASSERTEQUALS": [
          -1,
          612,
          614
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          612,
          614
        ],
        "'ASSERTTRUE": [
          -1,
          612,
          614
        ],
        "'ASSERTFALSE": [
          -1,
          612,
          614
        ],
        "'ASSERTSATISFIES": [
          -1,
          612,
          614
        ],
        "'ASSERTRAISES": [
          -1,
          612,
          614
        ],
        "'SWITCH": [
          -1,
          612,
          614
        ],
        "'YIELD": [
          -1,
          612,
          614
        ],
        "'DASH": [
          -1,
          612,
          614
        ],
        "'BANG": [
          -1,
          612,
          614
        ],
        "'LBRACK": [
          -1,
          612,
          614
        ],
        "'NUMBER": [
          -1,
          612,
          614
        ],
        "'TRUE": [
          -1,
          612,
          614
        ],
        "'FALSE": [
          -1,
          612,
          614
        ],
        "'NULL": [
          -1,
          612,
          614
        ],
        "'PARENAFTERBRACE": [
          -1,
          612,
          614
        ],
        "'BLOCK": [
          -1,
          612,
          614
        ],
        "'TABLE": [
          -1,
          612,
          614
        ],
        "'ASK": [
          -1,
          612,
          614
        ],
        "'NEW": [
          -1,
          612,
          614
        ]
      },
      {
        "'SEMI": [
          493
        ],
        "assert-stmt_A4_I6?": [
          494
        ],
        "assert-stmt_A4_I6": [
          495
        ],
        "'NAME": [
          -1,
          616,
          618
        ],
        "'PARENNOSPACE": [
          -1,
          616,
          618
        ],
        "'STRING": [
          -1,
          616,
          618
        ],
        "'LBRACE": [
          -1,
          616,
          618
        ],
        "'RBRACE": [
          -1,
          616,
          618
        ],
        "'SPY": [
          -1,
          616,
          618
        ],
        "'PARENSPACE": [
          -1,
          616,
          618
        ],
        "'INT": [
          -1,
          616,
          618
        ],
        "'LONG": [
          -1,
          616,
          618
        ],
        "'DOUBLE": [
          -1,
          616,
          618
        ],
        "'FLOAT": [
          -1,
          616,
          618
        ],
        "'BOOLEAN": [
          -1,
          616,
          618
        ],
        "'VOID": [
          -1,
          616,
          618
        ],
        "'DATA": [
          -1,
          616,
          618
        ],
        "'IF": [
          -1,
          616,
          618
        ],
        "'FOR": [
          -1,
          616,
          618
        ],
        "'RETURN": [
          -1,
          616,
          618
        ],
        "'VAR": [
          -1,
          616,
          618
        ],
        "'REC": [
          -1,
          616,
          618
        ],
        "'ATCHECK": [
          -1,
          616,
          618
        ],
        "'ASSERTEQUALS": [
          -1,
          616,
          618
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          616,
          618
        ],
        "'ASSERTTRUE": [
          -1,
          616,
          618
        ],
        "'ASSERTFALSE": [
          -1,
          616,
          618
        ],
        "'ASSERTSATISFIES": [
          -1,
          616,
          618
        ],
        "'ASSERTRAISES": [
          -1,
          616,
          618
        ],
        "'SWITCH": [
          -1,
          616,
          618
        ],
        "'YIELD": [
          -1,
          616,
          618
        ],
        "'DASH": [
          -1,
          616,
          618
        ],
        "'BANG": [
          -1,
          616,
          618
        ],
        "'LBRACK": [
          -1,
          616,
          618
        ],
        "'NUMBER": [
          -1,
          616,
          618
        ],
        "'TRUE": [
          -1,
          616,
          618
        ],
        "'FALSE": [
          -1,
          616,
          618
        ],
        "'NULL": [
          -1,
          616,
          618
        ],
        "'PARENAFTERBRACE": [
          -1,
          616,
          618
        ],
        "'BLOCK": [
          -1,
          616,
          618
        ],
        "'TABLE": [
          -1,
          616,
          618
        ],
        "'ASK": [
          -1,
          616,
          618
        ],
        "'NEW": [
          -1,
          616,
          618
        ]
      },
      {
        "'SEMI": [
          496
        ],
        "assert-stmt_A5_I6?": [
          497
        ],
        "assert-stmt_A5_I6": [
          498
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
        "'NAME": [
          499
        ],
        "case-branch_A0_I3?": [
          500
        ],
        "case-branch_A0_I3": [
          501
        ],
        "'RPAREN": [
          -1,
          624
        ]
      },
      {
        "switch-body": [
          502
        ],
        "switch-body_I0*": [
          474
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
        "'RBRACE": [
          -1,
          626
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
          201
        ],
        "data-decl": [
          202
        ],
        "check-block": [
          203
        ],
        "let-stmt": [
          204
        ],
        "var-stmt": [
          205
        ],
        "rec-stmt": [
          206
        ],
        "assign-stmt": [
          207
        ],
        "expr-stmt": [
          208
        ],
        "'LBRACE": [
          23
        ],
        "block-stmt": [
          503
        ],
        "if-stmt": [
          211
        ],
        "for-stmt": [
          212
        ],
        "return-stmt": [
          213
        ],
        "yield-stmt": [
          504
        ],
        "spy-stmt": [
          215
        ],
        "'SPY": [
          216
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
          218
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          220
        ],
        "'RETURN": [
          221
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
          505
        ],
        "'YIELD": [
          229
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "$": [
          -1,
          628
        ],
        "'NAME": [
          -1,
          628
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          628
        ],
        "'LBRACE": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          628
        ],
        "'GT": [
          -1,
          628
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          628
        ],
        "'ISNOT": [
          -1,
          628
        ],
        "'SATISFIES": [
          -1,
          628
        ],
        "'RAISES": [
          -1,
          628
        ],
        "'SWITCH": [
          -1,
          628
        ],
        "'CASE": [
          -1,
          628
        ],
        "'DEFAULT": [
          -1,
          628
        ],
        "'YIELD": [
          -1,
          628
        ],
        "'PLUS": [
          -1,
          628
        ],
        "'DASH": [
          -1,
          628
        ],
        "'TIMES": [
          -1,
          628
        ],
        "'SLASH": [
          -1,
          628
        ],
        "'PERCENT": [
          -1,
          628
        ],
        "'EQUALEQUAL": [
          -1,
          628
        ],
        "'NEQ": [
          -1,
          628
        ],
        "'LEQ": [
          -1,
          628
        ],
        "'GEQ": [
          -1,
          628
        ],
        "'AND": [
          -1,
          628
        ],
        "'OR": [
          -1,
          628
        ],
        "'BANG": [
          -1,
          628
        ],
        "'DOT": [
          -1,
          628
        ],
        "'LBRACK": [
          -1,
          628
        ],
        "'RBRACK": [
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
        "'BLOCK": [
          -1,
          628
        ],
        "'TABLE": [
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
      },
      {
        "'RBRACK": [
          506
        ]
      },
      {
        "table-row_I3*": [
          507
        ],
        "'SEMI": [
          -1,
          630,
          632
        ],
        "'COMMA": [
          -1,
          632
        ]
      },
      {
        "$": [
          -1,
          634
        ],
        "'NAME": [
          -1,
          634
        ],
        "'PARENNOSPACE": [
          -1,
          634
        ],
        "'STRING": [
          -1,
          634
        ],
        "'LBRACE": [
          -1,
          634
        ],
        "'RBRACE": [
          -1,
          634
        ],
        "'SPY": [
          -1,
          634
        ],
        "'PARENSPACE": [
          -1,
          634
        ],
        "'INT": [
          -1,
          634
        ],
        "'LONG": [
          -1,
          634
        ],
        "'DOUBLE": [
          -1,
          634
        ],
        "'FLOAT": [
          -1,
          634
        ],
        "'BOOLEAN": [
          -1,
          634
        ],
        "'VOID": [
          -1,
          634
        ],
        "'DATA": [
          -1,
          634
        ],
        "'IF": [
          -1,
          634
        ],
        "'FOR": [
          -1,
          634
        ],
        "'RETURN": [
          -1,
          634
        ],
        "'VAR": [
          -1,
          634
        ],
        "'REC": [
          -1,
          634
        ],
        "'ATCHECK": [
          -1,
          634
        ],
        "'ASSERTEQUALS": [
          -1,
          634
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          634
        ],
        "'ASSERTTRUE": [
          -1,
          634
        ],
        "'ASSERTFALSE": [
          -1,
          634
        ],
        "'ASSERTSATISFIES": [
          -1,
          634
        ],
        "'ASSERTRAISES": [
          -1,
          634
        ],
        "'SWITCH": [
          -1,
          634
        ],
        "'YIELD": [
          -1,
          634
        ],
        "'DASH": [
          -1,
          634
        ],
        "'BANG": [
          -1,
          634
        ],
        "'LBRACK": [
          -1,
          634
        ],
        "'NUMBER": [
          -1,
          634
        ],
        "'TRUE": [
          -1,
          634
        ],
        "'FALSE": [
          -1,
          634
        ],
        "'NULL": [
          -1,
          634
        ],
        "'PARENAFTERBRACE": [
          -1,
          634
        ],
        "'BLOCK": [
          -1,
          634
        ],
        "'TABLE": [
          -1,
          634
        ],
        "'ASK": [
          -1,
          634
        ],
        "'NEW": [
          -1,
          634
        ]
      },
      {
        "'NAME": [
          -1,
          636
        ],
        "'PARENNOSPACE": [
          -1,
          636
        ],
        "'STRING": [
          -1,
          636
        ],
        "'LBRACE": [
          -1,
          636
        ],
        "'RBRACE": [
          -1,
          636
        ],
        "'SPY": [
          -1,
          636
        ],
        "'PARENSPACE": [
          -1,
          636
        ],
        "'INT": [
          -1,
          636
        ],
        "'LONG": [
          -1,
          636
        ],
        "'DOUBLE": [
          -1,
          636
        ],
        "'FLOAT": [
          -1,
          636
        ],
        "'BOOLEAN": [
          -1,
          636
        ],
        "'VOID": [
          -1,
          636
        ],
        "'DATA": [
          -1,
          636
        ],
        "'IF": [
          -1,
          636
        ],
        "'FOR": [
          -1,
          636
        ],
        "'RETURN": [
          -1,
          636
        ],
        "'VAR": [
          -1,
          636
        ],
        "'REC": [
          -1,
          636
        ],
        "'ATCHECK": [
          -1,
          636
        ],
        "'ASSERTEQUALS": [
          -1,
          636
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          636
        ],
        "'ASSERTTRUE": [
          -1,
          636
        ],
        "'ASSERTFALSE": [
          -1,
          636
        ],
        "'ASSERTSATISFIES": [
          -1,
          636
        ],
        "'ASSERTRAISES": [
          -1,
          636
        ],
        "'SWITCH": [
          -1,
          636
        ],
        "'YIELD": [
          -1,
          636
        ],
        "'DASH": [
          -1,
          636
        ],
        "'BANG": [
          -1,
          636
        ],
        "'LBRACK": [
          -1,
          636
        ],
        "'NUMBER": [
          -1,
          636
        ],
        "'TRUE": [
          -1,
          636
        ],
        "'FALSE": [
          -1,
          636
        ],
        "'NULL": [
          -1,
          636
        ],
        "'PARENAFTERBRACE": [
          -1,
          636
        ],
        "'BLOCK": [
          -1,
          636
        ],
        "'TABLE": [
          -1,
          636
        ],
        "'ASK": [
          -1,
          636
        ],
        "'NEW": [
          -1,
          636
        ]
      },
      {
        "'NAME": [
          -1,
          638
        ],
        "'PARENNOSPACE": [
          -1,
          638
        ],
        "'STRING": [
          -1,
          638
        ],
        "'LBRACE": [
          -1,
          638
        ],
        "'RBRACE": [
          -1,
          638
        ],
        "'SPY": [
          -1,
          638
        ],
        "'PARENSPACE": [
          -1,
          638
        ],
        "'INT": [
          -1,
          638
        ],
        "'LONG": [
          -1,
          638
        ],
        "'DOUBLE": [
          -1,
          638
        ],
        "'FLOAT": [
          -1,
          638
        ],
        "'BOOLEAN": [
          -1,
          638
        ],
        "'VOID": [
          -1,
          638
        ],
        "'DATA": [
          -1,
          638
        ],
        "'IF": [
          -1,
          638
        ],
        "'FOR": [
          -1,
          638
        ],
        "'RETURN": [
          -1,
          638
        ],
        "'VAR": [
          -1,
          638
        ],
        "'REC": [
          -1,
          638
        ],
        "'ATCHECK": [
          -1,
          638
        ],
        "'ASSERTEQUALS": [
          -1,
          638
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          638
        ],
        "'ASSERTTRUE": [
          -1,
          638
        ],
        "'ASSERTFALSE": [
          -1,
          638
        ],
        "'ASSERTSATISFIES": [
          -1,
          638
        ],
        "'ASSERTRAISES": [
          -1,
          638
        ],
        "'SWITCH": [
          -1,
          638
        ],
        "'YIELD": [
          -1,
          638
        ],
        "'DASH": [
          -1,
          638
        ],
        "'BANG": [
          -1,
          638
        ],
        "'LBRACK": [
          -1,
          638
        ],
        "'NUMBER": [
          -1,
          638
        ],
        "'TRUE": [
          -1,
          638
        ],
        "'FALSE": [
          -1,
          638
        ],
        "'NULL": [
          -1,
          638
        ],
        "'PARENAFTERBRACE": [
          -1,
          638
        ],
        "'BLOCK": [
          -1,
          638
        ],
        "'TABLE": [
          -1,
          638
        ],
        "'ASK": [
          -1,
          638
        ],
        "'NEW": [
          -1,
          638
        ]
      },
      {
        "'NAME": [
          -1,
          640
        ],
        "'PARENNOSPACE": [
          -1,
          640
        ],
        "'STRING": [
          -1,
          640
        ],
        "'LBRACE": [
          -1,
          640
        ],
        "'RBRACE": [
          -1,
          640
        ],
        "'SPY": [
          -1,
          640
        ],
        "'PARENSPACE": [
          -1,
          640
        ],
        "'INT": [
          -1,
          640
        ],
        "'LONG": [
          -1,
          640
        ],
        "'DOUBLE": [
          -1,
          640
        ],
        "'FLOAT": [
          -1,
          640
        ],
        "'BOOLEAN": [
          -1,
          640
        ],
        "'VOID": [
          -1,
          640
        ],
        "'DATA": [
          -1,
          640
        ],
        "'IF": [
          -1,
          640
        ],
        "'FOR": [
          -1,
          640
        ],
        "'RETURN": [
          -1,
          640
        ],
        "'VAR": [
          -1,
          640
        ],
        "'REC": [
          -1,
          640
        ],
        "'ATCHECK": [
          -1,
          640
        ],
        "'ASSERTEQUALS": [
          -1,
          640
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          640
        ],
        "'ASSERTTRUE": [
          -1,
          640
        ],
        "'ASSERTFALSE": [
          -1,
          640
        ],
        "'ASSERTSATISFIES": [
          -1,
          640
        ],
        "'ASSERTRAISES": [
          -1,
          640
        ],
        "'SWITCH": [
          -1,
          640
        ],
        "'YIELD": [
          -1,
          640
        ],
        "'DASH": [
          -1,
          640
        ],
        "'BANG": [
          -1,
          640
        ],
        "'LBRACK": [
          -1,
          640
        ],
        "'NUMBER": [
          -1,
          640
        ],
        "'TRUE": [
          -1,
          640
        ],
        "'FALSE": [
          -1,
          640
        ],
        "'NULL": [
          -1,
          640
        ],
        "'PARENAFTERBRACE": [
          -1,
          640
        ],
        "'BLOCK": [
          -1,
          640
        ],
        "'TABLE": [
          -1,
          640
        ],
        "'ASK": [
          -1,
          640
        ],
        "'NEW": [
          -1,
          640
        ]
      },
      {
        "'NAME": [
          -1,
          642
        ],
        "'PARENNOSPACE": [
          -1,
          642
        ],
        "'STRING": [
          -1,
          642
        ],
        "'LBRACE": [
          -1,
          642
        ],
        "'RBRACE": [
          -1,
          642
        ],
        "'SPY": [
          -1,
          642
        ],
        "'PARENSPACE": [
          -1,
          642
        ],
        "'INT": [
          -1,
          642
        ],
        "'LONG": [
          -1,
          642
        ],
        "'DOUBLE": [
          -1,
          642
        ],
        "'FLOAT": [
          -1,
          642
        ],
        "'BOOLEAN": [
          -1,
          642
        ],
        "'VOID": [
          -1,
          642
        ],
        "'DATA": [
          -1,
          642
        ],
        "'IF": [
          -1,
          642
        ],
        "'FOR": [
          -1,
          642
        ],
        "'RETURN": [
          -1,
          642
        ],
        "'VAR": [
          -1,
          642
        ],
        "'REC": [
          -1,
          642
        ],
        "'ATCHECK": [
          -1,
          642
        ],
        "'ASSERTEQUALS": [
          -1,
          642
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          642
        ],
        "'ASSERTTRUE": [
          -1,
          642
        ],
        "'ASSERTFALSE": [
          -1,
          642
        ],
        "'ASSERTSATISFIES": [
          -1,
          642
        ],
        "'ASSERTRAISES": [
          -1,
          642
        ],
        "'SWITCH": [
          -1,
          642
        ],
        "'YIELD": [
          -1,
          642
        ],
        "'DASH": [
          -1,
          642
        ],
        "'BANG": [
          -1,
          642
        ],
        "'LBRACK": [
          -1,
          642
        ],
        "'NUMBER": [
          -1,
          642
        ],
        "'TRUE": [
          -1,
          642
        ],
        "'FALSE": [
          -1,
          642
        ],
        "'NULL": [
          -1,
          642
        ],
        "'PARENAFTERBRACE": [
          -1,
          642
        ],
        "'BLOCK": [
          -1,
          642
        ],
        "'TABLE": [
          -1,
          642
        ],
        "'ASK": [
          -1,
          642
        ],
        "'NEW": [
          -1,
          642
        ]
      },
      {
        "'NAME": [
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
        "'DATA": [
          -1,
          644
        ],
        "'IF": [
          -1,
          644
        ],
        "'ELSE": [
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
        "'SWITCH": [
          -1,
          644
        ],
        "'YIELD": [
          -1,
          644
        ],
        "'DASH": [
          -1,
          644
        ],
        "'BANG": [
          -1,
          644
        ],
        "'LBRACK": [
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
        "block": [
          508
        ],
        "'LBRACE": [
          313
        ],
        "'IF": [
          509
        ]
      },
      {
        "'NAME": [
          -1,
          646
        ],
        "'PARENNOSPACE": [
          -1,
          646
        ],
        "'STRING": [
          -1,
          646
        ],
        "'LBRACE": [
          -1,
          646
        ],
        "'RBRACE": [
          -1,
          646
        ],
        "'SPY": [
          -1,
          646
        ],
        "'PARENSPACE": [
          -1,
          646
        ],
        "'INT": [
          -1,
          646
        ],
        "'LONG": [
          -1,
          646
        ],
        "'DOUBLE": [
          -1,
          646
        ],
        "'FLOAT": [
          -1,
          646
        ],
        "'BOOLEAN": [
          -1,
          646
        ],
        "'VOID": [
          -1,
          646
        ],
        "'DATA": [
          -1,
          646
        ],
        "'IF": [
          -1,
          646
        ],
        "'FOR": [
          -1,
          646
        ],
        "'RETURN": [
          -1,
          646
        ],
        "'VAR": [
          -1,
          646
        ],
        "'REC": [
          -1,
          646
        ],
        "'ATCHECK": [
          -1,
          646
        ],
        "'ASSERTEQUALS": [
          -1,
          646
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          646
        ],
        "'ASSERTTRUE": [
          -1,
          646
        ],
        "'ASSERTFALSE": [
          -1,
          646
        ],
        "'ASSERTSATISFIES": [
          -1,
          646
        ],
        "'ASSERTRAISES": [
          -1,
          646
        ],
        "'SWITCH": [
          -1,
          646
        ],
        "'YIELD": [
          -1,
          646
        ],
        "'DASH": [
          -1,
          646
        ],
        "'BANG": [
          -1,
          646
        ],
        "'LBRACK": [
          -1,
          646
        ],
        "'NUMBER": [
          -1,
          646
        ],
        "'TRUE": [
          -1,
          646
        ],
        "'FALSE": [
          -1,
          646
        ],
        "'NULL": [
          -1,
          646
        ],
        "'PARENAFTERBRACE": [
          -1,
          646
        ],
        "'BLOCK": [
          -1,
          646
        ],
        "'TABLE": [
          -1,
          646
        ],
        "'ASK": [
          -1,
          646
        ],
        "'NEW": [
          -1,
          646
        ]
      },
      {
        "block": [
          510
        ],
        "'LBRACE": [
          313
        ]
      },
      {
        "'NAME": [
          -1,
          648
        ],
        "'PARENNOSPACE": [
          -1,
          648
        ],
        "'STRING": [
          -1,
          648
        ],
        "'LBRACE": [
          -1,
          648
        ],
        "'RBRACE": [
          -1,
          648
        ],
        "'SPY": [
          -1,
          648
        ],
        "'PARENSPACE": [
          -1,
          648
        ],
        "'INT": [
          -1,
          648
        ],
        "'LONG": [
          -1,
          648
        ],
        "'DOUBLE": [
          -1,
          648
        ],
        "'FLOAT": [
          -1,
          648
        ],
        "'BOOLEAN": [
          -1,
          648
        ],
        "'VOID": [
          -1,
          648
        ],
        "'DATA": [
          -1,
          648
        ],
        "'IF": [
          -1,
          648
        ],
        "'FOR": [
          -1,
          648
        ],
        "'RETURN": [
          -1,
          648
        ],
        "'VAR": [
          -1,
          648
        ],
        "'REC": [
          -1,
          648
        ],
        "'ATCHECK": [
          -1,
          648
        ],
        "'ASSERTEQUALS": [
          -1,
          648
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          648
        ],
        "'ASSERTTRUE": [
          -1,
          648
        ],
        "'ASSERTFALSE": [
          -1,
          648
        ],
        "'ASSERTSATISFIES": [
          -1,
          648
        ],
        "'ASSERTRAISES": [
          -1,
          648
        ],
        "'SWITCH": [
          -1,
          648
        ],
        "'YIELD": [
          -1,
          648
        ],
        "'DASH": [
          -1,
          648
        ],
        "'BANG": [
          -1,
          648
        ],
        "'LBRACK": [
          -1,
          648
        ],
        "'NUMBER": [
          -1,
          648
        ],
        "'TRUE": [
          -1,
          648
        ],
        "'FALSE": [
          -1,
          648
        ],
        "'NULL": [
          -1,
          648
        ],
        "'PARENAFTERBRACE": [
          -1,
          648
        ],
        "'BLOCK": [
          -1,
          648
        ],
        "'TABLE": [
          -1,
          648
        ],
        "'ASK": [
          -1,
          648
        ],
        "'NEW": [
          -1,
          648
        ]
      },
      {
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
        "case-branch_A0_I3_I1*": [
          511
        ],
        "'RPAREN": [
          -1,
          672,
          674
        ],
        "'COMMA": [
          -1,
          674
        ]
      },
      {
        "'RPAREN": [
          512
        ]
      },
      {
        "'RPAREN": [
          -1,
          676
        ]
      },
      {
        "'RBRACE": [
          -1,
          678
        ],
        "'CASE": [
          -1,
          678
        ],
        "'DEFAULT": [
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
          682
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
        "'SWITCH": [
          -1,
          280
        ],
        "'CASE": [
          -1,
          682
        ],
        "'DEFAULT": [
          -1,
          682
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
        "$": [
          -1,
          686
        ],
        "'NAME": [
          -1,
          686
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          686
        ],
        "'GT": [
          -1,
          686
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          686
        ],
        "'ISNOT": [
          -1,
          686
        ],
        "'SATISFIES": [
          -1,
          686
        ],
        "'RAISES": [
          -1,
          686
        ],
        "'SWITCH": [
          -1,
          686
        ],
        "'CASE": [
          -1,
          686
        ],
        "'DEFAULT": [
          -1,
          686
        ],
        "'YIELD": [
          -1,
          686
        ],
        "'PLUS": [
          -1,
          686
        ],
        "'DASH": [
          -1,
          686
        ],
        "'TIMES": [
          -1,
          686
        ],
        "'SLASH": [
          -1,
          686
        ],
        "'PERCENT": [
          -1,
          686
        ],
        "'EQUALEQUAL": [
          -1,
          686
        ],
        "'NEQ": [
          -1,
          686
        ],
        "'LEQ": [
          -1,
          686
        ],
        "'GEQ": [
          -1,
          686
        ],
        "'AND": [
          -1,
          686
        ],
        "'OR": [
          -1,
          686
        ],
        "'BANG": [
          -1,
          686
        ],
        "'DOT": [
          -1,
          686
        ],
        "'LBRACK": [
          -1,
          686
        ],
        "'RBRACK": [
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
        "'COMMA": [
          513
        ],
        "table-row_I3": [
          514
        ],
        "'SEMI": [
          -1,
          688
        ]
      },
      {
        "'NAME": [
          -1,
          690
        ],
        "'PARENNOSPACE": [
          -1,
          690
        ],
        "'STRING": [
          -1,
          690
        ],
        "'LBRACE": [
          -1,
          690
        ],
        "'RBRACE": [
          -1,
          690
        ],
        "'SPY": [
          -1,
          690
        ],
        "'PARENSPACE": [
          -1,
          690
        ],
        "'INT": [
          -1,
          690
        ],
        "'LONG": [
          -1,
          690
        ],
        "'DOUBLE": [
          -1,
          690
        ],
        "'FLOAT": [
          -1,
          690
        ],
        "'BOOLEAN": [
          -1,
          690
        ],
        "'VOID": [
          -1,
          690
        ],
        "'DATA": [
          -1,
          690
        ],
        "'IF": [
          -1,
          690
        ],
        "'FOR": [
          -1,
          690
        ],
        "'RETURN": [
          -1,
          690
        ],
        "'VAR": [
          -1,
          690
        ],
        "'REC": [
          -1,
          690
        ],
        "'ATCHECK": [
          -1,
          690
        ],
        "'ASSERTEQUALS": [
          -1,
          690
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          690
        ],
        "'ASSERTTRUE": [
          -1,
          690
        ],
        "'ASSERTFALSE": [
          -1,
          690
        ],
        "'ASSERTSATISFIES": [
          -1,
          690
        ],
        "'ASSERTRAISES": [
          -1,
          690
        ],
        "'SWITCH": [
          -1,
          690
        ],
        "'YIELD": [
          -1,
          690
        ],
        "'DASH": [
          -1,
          690
        ],
        "'BANG": [
          -1,
          690
        ],
        "'LBRACK": [
          -1,
          690
        ],
        "'NUMBER": [
          -1,
          690
        ],
        "'TRUE": [
          -1,
          690
        ],
        "'FALSE": [
          -1,
          690
        ],
        "'NULL": [
          -1,
          690
        ],
        "'PARENAFTERBRACE": [
          -1,
          690
        ],
        "'BLOCK": [
          -1,
          690
        ],
        "'TABLE": [
          -1,
          690
        ],
        "'ASK": [
          -1,
          690
        ],
        "'NEW": [
          -1,
          690
        ]
      },
      {
        "'PARENSPACE": [
          515
        ]
      },
      {
        "'NAME": [
          -1,
          692
        ],
        "'PARENNOSPACE": [
          -1,
          692
        ],
        "'STRING": [
          -1,
          692
        ],
        "'LBRACE": [
          -1,
          692
        ],
        "'RBRACE": [
          -1,
          692
        ],
        "'SPY": [
          -1,
          692
        ],
        "'PARENSPACE": [
          -1,
          692
        ],
        "'INT": [
          -1,
          692
        ],
        "'LONG": [
          -1,
          692
        ],
        "'DOUBLE": [
          -1,
          692
        ],
        "'FLOAT": [
          -1,
          692
        ],
        "'BOOLEAN": [
          -1,
          692
        ],
        "'VOID": [
          -1,
          692
        ],
        "'DATA": [
          -1,
          692
        ],
        "'IF": [
          -1,
          692
        ],
        "'FOR": [
          -1,
          692
        ],
        "'RETURN": [
          -1,
          692
        ],
        "'VAR": [
          -1,
          692
        ],
        "'REC": [
          -1,
          692
        ],
        "'ATCHECK": [
          -1,
          692
        ],
        "'ASSERTEQUALS": [
          -1,
          692
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          692
        ],
        "'ASSERTTRUE": [
          -1,
          692
        ],
        "'ASSERTFALSE": [
          -1,
          692
        ],
        "'ASSERTSATISFIES": [
          -1,
          692
        ],
        "'ASSERTRAISES": [
          -1,
          692
        ],
        "'SWITCH": [
          -1,
          692
        ],
        "'YIELD": [
          -1,
          692
        ],
        "'DASH": [
          -1,
          692
        ],
        "'BANG": [
          -1,
          692
        ],
        "'LBRACK": [
          -1,
          692
        ],
        "'NUMBER": [
          -1,
          692
        ],
        "'TRUE": [
          -1,
          692
        ],
        "'FALSE": [
          -1,
          692
        ],
        "'NULL": [
          -1,
          692
        ],
        "'PARENAFTERBRACE": [
          -1,
          692
        ],
        "'BLOCK": [
          -1,
          692
        ],
        "'TABLE": [
          -1,
          692
        ],
        "'ASK": [
          -1,
          692
        ],
        "'NEW": [
          -1,
          692
        ]
      },
      {
        "'COMMA": [
          516
        ],
        "case-branch_A0_I3_I1": [
          517
        ],
        "'RPAREN": [
          -1,
          694
        ]
      },
      {
        "'COLON": [
          518
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          519
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'SEMI": [
          -1,
          696
        ],
        "'COMMA": [
          -1,
          696
        ]
      },
      {
        "'NAME": [
          98
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
          108
        ],
        "full-expr": [
          520
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
        "'BLOCK": [
          59
        ],
        "'TABLE": [
          60
        ],
        "'ASK": [
          61
        ],
        "'NEW": [
          62
        ]
      },
      {
        "'NAME": [
          521
        ]
      },
      {
        "'RPAREN": [
          -1,
          698
        ],
        "'COMMA": [
          -1,
          698
        ]
      },
      {
        "switch-body": [
          522
        ],
        "switch-body_I0*": [
          474
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
        "'SEMI": [
          -1,
          700
        ],
        "'COMMA": [
          -1,
          700
        ]
      },
      {
        "'RPAREN": [
          523
        ]
      },
      {
        "'RPAREN": [
          -1,
          702
        ],
        "'COMMA": [
          -1,
          702
        ]
      },
      {
        "'RBRACE": [
          -1,
          704
        ],
        "'CASE": [
          -1,
          704
        ],
        "'DEFAULT": [
          -1,
          704
        ]
      },
      {
        "block": [
          524
        ],
        "'LBRACE": [
          313
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
        "'ELSE": [
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
      "block-expr_I2*": 52,
      "record-expr_A0_I2*": 53,
      "table-expr_I3*": 54,
      "table-expr_I5*": 55,
      "table-row_I3*": 56,
      "ask-expr_A0_I4*": 57,
      "ask-expr_A1_I4*": 58,
      "new-expr_I3?": 59,
      "new-expr_I3_I1*": 60,
      "construct-expr_A0_I3?": 61,
      "construct-expr_A0_I3_I1*": 62,
      "map-for-expr_A1_I5*": 63,
      "START": 64,
      "if-stmt_I5*,if-stmt_I6?": 65
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
        "label": "block-expr_I2*",
        "kids": [],
        "rule": 266
      },
      {
        "label": "record-expr_A0_I2*",
        "kids": [],
        "rule": 270
      },
      {
        "label": "table-expr_I3*",
        "kids": [],
        "rule": 276
      },
      {
        "label": "table-expr_I5*",
        "kids": [],
        "rule": 279
      },
      {
        "label": "table-row_I3*",
        "kids": [],
        "rule": 284
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 288
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 292
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 298
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 301
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 305
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 308
      },
      {
        "label": "map-for-expr_A1_I5*",
        "kids": [],
        "rule": 314
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 319
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
