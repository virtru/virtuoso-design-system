const path = require('path');
const alias = require('@rollup/plugin-alias');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const reactSvg = require('rollup-plugin-react-svg');
const copy = require('rollup-plugin-copy');
const json = require('@rollup/plugin-json');
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
      entries: [{ find: '@', replacement: path.join(__dirname, '..', 'lib') }],
    }),
    postcss({
      ...postcssConfig,
      use: [
        'sass',
        [
          'less',
          {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#164EB6',
              'primary-1': '#DEEEFF',
              'primary-2': '#B2D6FF',
              'primary-5': '#3668FF',
              'primary-6': '#3668FF', // Core brand color
              'primary-7': '#164EB6',
              'success-color': '#75B749', // Primary green
              'error-color': '#A70A0E', // Primary red
              'btn-primary-bg': '#164EB6',
              'disabled-bg': '#C6CBD4',
              'btn-disable-border': '#C6CBD4',
              'btn-disable-color': '#FFFFFF',
              'btn-default-ghost-color': '#164EB6',
            },
          },
        ],
      ],
    }),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.svg'],
      exclude: 'node_modules/**',
      // plugins: [['import', { libraryName: 'antd', style: true }]],
    }),
    commonjs(),
    reactSvg({
      // svgo options
      svgo: {
        plugins: [{ removeTitle: false }, { cleanupIDs: false }], // passed to svgo
        multipass: true,
      },
    }),
    copy({
      targets: [
        { src: 'lib/styles/build/**/*.{css,js}', dest: 'dist' },
        { src: 'lib/styles/typography/fonts/', dest: 'dist' },
        { src: 'lib/styles/typography/css/*.css', dest: 'dist/font-style' },
      ],
    }),
    json(),
  ],
};
