// const path = require('path');
// const postcssHexRgba = require('postcss-hexrgba');
import postcssImport from 'postcss-import';
// const postcssCustomProperties = require('postcss-custom-properties');
// const postcssCustomMedia = require('postcss-custom-media');
import * as modifyVars from '../lib/styles/antd';

export default {
  autoModules: false,
  modules: { generateScopedName: '[hash:base64]' },
  plugins: [
    // postcssImport(),
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
