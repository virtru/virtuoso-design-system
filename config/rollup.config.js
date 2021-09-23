import less from 'rollup-plugin-less';
import svgr from '@svgr/rollup';
import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import postcssImport from 'postcss-import';
// import * as modifyVars from '../lib/styles/antd';

export default {
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
  external: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      antd: 'antd',
    },
  ],
  plugins: [
    nodeResolve(),
    json(),
    peerDepsExternal(),
    // less({
    //   extensions: ['.less'],
    //   inject: true,
    //   insert: true,
    //   include: [
    //     '**/*.less',
    //     'node_modules/antd/dist/antd.less',
    //     'node_modules/antd/lib/style/**/*.less',
    //   ],
    //   option: { javascriptEnabled: true, modifyVars },
    // }),

    postcss({
      production: true,
      extract: true,
      modules: true,
      plugins: [postcssImport()],
      use: [['less', { javascriptEnabled: true }]],
    }),
    babel({
      babelHelpers: 'bundled',
      plugins: [['import', { libraryName: 'antd' }]],
      exclude: ['node_modules/**'],
    }),
    url(),
    commonjs({
      include: ['node_modules/**', 'lib/**'],
    }),
    // svgr(),
    copy({
      targets: [
        // { src: 'lib/styles/antd.js', dest: 'dist/' },
        // {
        //   src: 'lib/styles/build/js/design_tokens.js',
        //   dest: 'dist//build/js',
        // },
        // { src: 'lib/styles/build/**/*.{css,js}', dest: 'dist/' },
        { src: 'lib/styles/typography/fonts/', dest: 'dist/' },
        // { src: 'lib/styles/typography/css/*.css', dest: 'dist/' },
        // {
        //   src: 'lib/components/**/*.js',
        //   dest: 'dist/',
        //   rename: (_, __, fullPath) => `${fullPath.substr(fullPath.indexOf('components/'))}`,
        // },
      ],
    }),
  ],
};
