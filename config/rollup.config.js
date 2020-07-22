const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const reactSvg = require('rollup-plugin-react-svg');
const postcssHexRgba = require('postcss-hexrgba');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

const postcssConfig = {
  modules: true,
  plugins: [
    postcssImport(),
    postcssCustomProperties({
      preserve: false,
      importFrom: [
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
  extract: 'dist/styles.css',
};

module.exports.postcssConfig = postcssConfig;
module.exports.default = {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['react', 'prop-types'],
  plugins: [
    postcss(postcssConfig),
    resolve(),
    babel({
      extensions: ['.js', '.jsx', '.svg'],
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'node_modules/react-dom/index.js': ['createPortal', 'findDOMNode'],
      },
    }),
    reactSvg(),
  ],
};