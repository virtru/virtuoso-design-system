// configure Style Dictionary with default & custom configs 
// https://github.com/amzn/style-dictionary/issues/344#issuecomment-543285393
const StyleDictionary = require('style-dictionary');

// replaces former ./config.json
module.exports = {
  "source": ["lib/styles/style_dict/tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css", 
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
