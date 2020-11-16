// configure Style Dictionary with default & custom configs 
// https://github.com/amzn/style-dictionary/issues/344#issuecomment-543285393
const StyleDictionary = require('style-dictionary');

// defines a custom transform for CSS variables
// to translate aliases `{vds.custom.value}` into CSS vars `var(--vds-custom)`
// https://amzn.github.io/style-dictionary/#/api?id=registertransform
const alias_syntax = /\{([^\}]+)\}/gm;
StyleDictionary.registerTransform({
  name: 'css/aliases_to_vars',
  // BUG: expected "value" to work but only "attribute" and "name" work: 
  // https://github.com/amzn/style-dictionary/issues/451
  type: 'attribute', 
  matcher: function(prop) {
    return alias_syntax.test(prop.original.value);
  },
  transformer: function(prop) {
    // console.debug(`\n\nvalue before & after\n ${prop.original.value}`);
    let transformed_value = prop.original.value;
    
    // why? drop ".value" from aliases like "color.red.value"
    transformed_value = transformed_value.replace(/\.value/g, "");
    
    // why? make aliases into kebab-case for CSS variables 
    transformed_value = transformed_value.replace(/\./g, "-");
    
    // why? make mixed capitals into kebab-case for CSS variables 
    transformed_value = transformed_value.replace(/([A-Z])/g, "-$1");
    transformed_value = transformed_value.toLowerCase();
    
    // why? replace alias syntax with CSS variable syntax
    transformed_value = transformed_value.replace(alias_syntax, `var(--$1)`);
    
    // console.debug(` ${transformed_value}`);
    
    // BUG: expected `type: 'value'` to work, but it doesn't 
    // https://github.com/amzn/style-dictionary/issues/451
    // return transformed_value;
    prop.value = transformed_value;
    
    // BUG: tied to "attribute" type defined above, replace if this is fixed: 
    // https://github.com/amzn/style-dictionary/issues/451
    return prop.attributes;
  }
});

StyleDictionary.registerTransformGroup({
  name: 'css-vds',
  transforms: [
    // custom transforms registered above
    "css/aliases_to_vars",

    /* css default transform group = 
     * attribute/cti name/cti/kebab time/seconds content/icon size/rem color/css 
     * https://amzn.github.io/style-dictionary/#/transform_groups?id=css
     **/
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/css",
  ]
});

// replaces former ./config.json
module.exports = {
  "source": ["lib/styles/style_dict/tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css-vds", 
      "buildPath": "lib/styles/build/css/",
      "files": [{
        "destination": "design_tokens.css",
        "format": "css/variables"
      }]
    },
    "js": {
      "transformGroup": "js",
      "buildPath": "lib/styles/build/js/",
      "files": [
        {
          "destination": "design_tokens.js",
          "format": "javascript/module"
        }
      ]
    }
  }
}
