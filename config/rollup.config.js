const path = require('path');
const alias = require('@rollup/plugin-alias');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const reactSvg = require('rollup-plugin-react-svg');
const postcssConfig = require('./postcss.config');

module.exports = {
  input: 'lib/components/index.js',
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
    alias({
      entries: [
        { find: '@', replacement: path.join(__dirname, '..', 'lib') }
      ],
    }),
    postcss(postcssConfig),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.svg'],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    reactSvg(),
  ],
};
