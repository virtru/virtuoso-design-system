const htmlTags = require('html-tags');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-selector-tag-no-without-class',
  ],
  rules: {
    'plugin/selector-tag-no-without-class': htmlTags,
    'declaration-property-unit-whitelist': {
      'font-size': ['px', 'em'],
      'line-height': ['px', 'em'],
    },
    'custom-property-empty-line-before': null,
  },
  ignoreFiles: [
    './coverage/**/*.css',
    './devops-ansible/**/*.css',
    './dist/**/*.css'
  ],
};