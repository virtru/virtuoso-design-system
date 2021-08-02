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
    // why? discourages overly broad selectors
    'plugin/selector-tag-no-without-class': htmlTags,

    // why? disallow units we don't explicitly support
    'declaration-property-unit-whitelist': {
      'font-size': ['px', 'em'],
      'line-height': ['px', 'em'],
    },
    
    // why? allow defining custom properties in bulk
    'custom-property-empty-line-before': null,
    
    // why? #3668FF is easier to read than #3668ff
    'color-hex-case': 'upper',
    
    // why? #FFFFFF is more consistent and explicit than #FFF
    'color-hex-length': 'long',
    
    // why? encourages separation of comments
    'comment-empty-line-before': [
      "always",
      { 
        // unless comments are stylelint or grouped
        'ignore': ["stylelint-commands", "after-comment"],
        // unless comments are within a CSS block
        'except': ["first-nested"], 
      }
    ],
    
    // why? encourages separation of unrelated blocks in the same file
    'max-empty-lines': 5,
    
    // why? trailing zeros align CSS properties for comparisons across lines
    "number-no-trailing-zeros": null,

    // why? composes uses css variables and should not force classnames to be lowercase
    'value-keyword-case': ['lower', {
      ignoreProperties: ['composes'],
    }]
  },
  ignoreFiles: [
    './coverage/**/*.css',
    './devops-ansible/**/*.css',
    './dist/**/*.css'
  ],
};