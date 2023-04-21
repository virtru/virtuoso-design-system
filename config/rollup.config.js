import glob from 'glob';
import path from 'path';
import less from 'rollup-plugin-less';
import svgr from '@svgr/rollup';

const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const copy = require('rollup-plugin-copy');
const json = require('@rollup/plugin-json');
const modifyVars = require('../lib/styles/antd');
const postcssConfig = require('./postcss.config');

module.exports = {
  input: {
    bundle: 'lib/index.js',
    ...glob.sync('lib/utils/*.js').reduce((previousValue, currentValue) => {
      const file = currentValue.replace('lib/', '');

      // eslint-disable-next-line no-param-reassign
      previousValue[file.replace(path.extname(file.replace('utils/', '')), '')] = currentValue;

      return previousValue;
    }, {}),
  },
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      dir: 'dist',
      entryFileNames: '[name].cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      classnames: 'classnames',
      antd: 'antd',
    },
    // Make antd library styles to be external to current project
    /^antd[.]*/,
    'lib/styles/antd.js',
  ],
  plugins: [
    nodeResolve(),
    json(),
    peerDepsExternal(),
    less({
      extensions: ['.less'],
      inject: true,
      insert: true,
      include: [
        '**/*.less',
        'node_modules/antd/dist/antd.less',
        'node_modules/antd/lib/style/**/*.less',
      ],
      option: { javascriptEnabled: true, modifyVars },
    }),
    postcss(postcssConfig),
    babel({
      babelHelpers: 'bundled',
      plugins: [['import', { libraryName: 'antd' }]],
      exclude: ['node_modules/**'],
    }),
    url(),
    commonjs({
      include: ['node_modules/**', 'lib/**'],
    }),
    svgr(),
    copy({
      targets: [
        { src: 'lib/styles/antd.js', dest: 'dist/' },
        {
          src: 'lib/styles/build/js/design_tokens.js',
          dest: 'dist//build/js',
        },
        { src: 'lib/styles/build/**/*.{css,js}', dest: 'dist/' },
        { src: 'lib/styles/typography/fonts/', dest: 'dist/' },
        { src: 'lib/styles/typography/css/*.css', dest: 'dist/' },
        {
          src: 'lib/components/**/*.js',
          dest: 'dist/',
          rename: (_, __, fullPath) => `${fullPath.substr(fullPath.indexOf('components/'))}`,
        },
      ],
    }),
  ],
};
