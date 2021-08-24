// import less from 'rollup-plugin-less';

// const path = require('path');
// const alias = require('@rollup/plugin-alias');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
// const reactSvg = require('rollup-plugin-react-svg');
// const copy = require('rollup-plugin-copy');
const json = require('@rollup/plugin-json');
const postcssConfig = require('./postcss.config');

module.exports = {
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
  external: ['react', 'react-proptypes'],
  plugins: [
    nodeResolve(),
    json(),
    peerDepsExternal(),
    postcss(postcssConfig),
    babel({
      plugins: [['import', { libraryName: 'antd', style: true }]],
      exclude: ['node_modules/**'],
    }),
    url(),
    commonjs({
      include: 'node_modules/**',
    }),
    // copy({
    //   targets: [
    //     { src: 'lib/styles/build/**/*.{css,js}', dest: 'dist' },
    //     { src: 'lib/styles/typography/fonts/', dest: 'dist' },
    //     { src: 'lib/styles/typography/css/*.css', dest: 'dist/font-style' },
    //   ],
    // }),
  ],
};
