const path = require('path');
const postcssHexRgba = require('postcss-hexrgba');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  modules: true,
  plugins: [
    postcssImport(),
    postcssCustomProperties({
      preserve: false,
      importFrom: [
        'lib/styles/tokens.css',
        'node_modules/virtru-design-params/src/colors/colors.css',
        'node_modules/virtru-design-params/src/text/text.css',
        'node_modules/virtru-design-params/src/typography/typography.css',
      ],
    }),
    postcssHexRgba,
    postcssCustomMedia({
      importFrom: ['node_modules/virtru-design-params/src/screen/screen.css'],
    }),
  ],
  extract: path.resolve('dist/styles.css'),
};
