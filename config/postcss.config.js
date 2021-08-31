// const path = require('path');
// const postcssHexRgba = require('postcss-hexrgba');
const postcssImport = require('postcss-import');
// const postcssCustomProperties = require('postcss-custom-properties');
// const postcssCustomMedia = require('postcss-custom-media');
const modifyVars = require('../lib/styles/antd');

module.exports = {
  autoModules: false,
  modules: { generateScopedName: '[hash:base64]' },
  plugins: [
    postcssImport(),
    // postcssCustomProperties({
    //   preserve: false,
    //   importFrom: [
    //     'lib/styles/tokens.css',
    //     'lib/styles/common.css',
    //     'lib/styles/build/css/design_tokens.css',
    //   ],
    // }),
    // postcssHexRgba,
    // postcssCustomMedia({
    //   importFrom: [
    //     'lib/styles/tokens.css',
    //     'lib/styles/common.css',
    //     'lib/styles/build/css/design_tokens.css',
    //   ],
    // }),
  ],
  extensions: ['.css', '.scss', '.less'],
  use: [
    ['css', { javascriptEnabled: true, modifyVars }],
    ['less', { javascriptEnabled: true, modifyVars }],
  ],
  extract: true,
};
