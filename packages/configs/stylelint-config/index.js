module.exports = {
  extends: './ideal.js',
  // Disabling all rules with errors from `ideal.js` (which represents the ideal state)
  // Process:
  // 1. Delete a line from `rules`
  // 2. Lint
  // 3. Fix (first run auto-fix with `npm run lint:style:fix`, then manually fix rest)
  // 4. PR
  // When `rules` is empty, we rename `ideal.js` to `index.js` and delete this file.
  rules: {
    'at-rule-name-space-after': null,
    'function-comma-space-after': null,
    'max-nesting-depth': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': null,
    'selector-list-comma-newline-after': null,
    'selector-max-class': null,
    // 'order/properties-order': null,
    'selector-no-qualifying-type': null,
    'plugin/selector-bem-pattern': null,
    'no-duplicate-selectors': null,
    'function-comma-space-before': null,
    // 'plugin/declaration-block-order': null, @todo: swap for another stylelint plugin that isn't deprecated
    'scss/selector-no-redundant-nesting-selector': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'property-no-vendor-prefix': null,
    indentation: null,
    'number-no-trailing-zeros': null,
    'color-named': null,
    'color-no-hex': null,
    'length-zero-no-unit': null,
    'scale-unlimited/declaration-strict-value': null,
    'color-hex-case': null,
    'scss/dollar-variable-pattern': null,
    'color-hex-length': null,
    'declaration-colon-newline-after': null,
    'function-calc-no-unspaced-operator': null,
    'block-no-empty': null,
    'declaration-block-trailing-semicolon': null,
    'selector-pseudo-class-no-unknown': null,
    'declaration-colon-space-after': null,
    'font-weight-notation': null,
    'media-feature-colon-space-after': null,
    'media-query-list-comma-space-after': null,
    'value-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': null,
    'string-quotes': null,
    'value-list-comma-space-after': null,
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,
    'function-max-empty-lines': null,
    'comment-empty-line-before': null,
    'block-closing-brace-newline-before': null,
    'max-empty-lines': null,
    'function-parentheses-space-inside': null,
    'no-eol-whitespace': null,
  },
};
