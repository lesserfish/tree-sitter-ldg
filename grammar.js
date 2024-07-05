const lua = require("tree-sitter-lua/grammar");

module.exports = grammar(lua, {
  name: "ldg",

  rules: {
    ldg: ($) =>
      seq(
          $.dialogue_code,
          $.dialogue_source
    ),
    dialogue_code: ($) =>
      seq(
          '[',
          /\d+/,
          ']',
    ),
    dialogue_source: ($) =>
      seq(
          '{',
          repeat(lua.grammar.rules.statement),
          optional(lua.grammar.rules.return_statement),
          '}'
      ),
  },
});
