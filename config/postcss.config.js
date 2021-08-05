const path = require('path');
// const postcssHexRgba = require('postcss-hexrgba');
// const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  // autoModules: false,
  // modules: { generateScopedName: '[hash:base64]' },
  plugins: [
    // postcssImport(),
    postcssCustomProperties({
      preserve: false,
      importFrom: [
        'lib/styles/tokens.css',
        'lib/styles/common.css',
        'lib/styles/build/css/design_tokens.css',
      ],
    }),
    // postcssHexRgba,
    postcssCustomMedia({
      importFrom: [
        'lib/styles/tokens.css',
        'lib/styles/common.css',
        'lib/styles/build/css/design_tokens.css',
      ],
    }),
  ],
  use: [
    [
      'sass',
      'less',
      {
        javascriptEnabled: true,
        // modifyVars: themeVariables,
      },
    ],
  ],
  extract: path.resolve('dist/styles.css'),
};
