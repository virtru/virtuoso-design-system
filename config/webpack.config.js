const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../lib/index.js'),
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, '../lib'),
  //   },
  // },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   include: [
      //     path.join(__dirname),
      //     path.join(__dirname, '../lib/styles'),
      //     path.join(__dirname, '../lib/components'),
      //   ],
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //         modules: true,
      //         localIdentName: '[name]__[local]--[hash:base64:5]',
      //       },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         config: {
      //           path: path.join(__dirname, '../config/postcss.config.js'),
      //         },
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         fallback: 'file-loader',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      // {
      //   test: /\.less$/i,
      //   include: [path.join(__dirname, '..', 'node_modules', 'antd')],
      //   loader: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         modifyVars: {
      //           'primary-color': '#164EB6',
      //           'primary-1': '#DEEEFF',
      //           'primary-2': '#B2D6FF',
      //           'primary-5': '#3668FF',
      //           'primary-6': '#3668FF', // Core brand color
      //           'primary-7': '#164EB6',
      //           'success-color': '#75B749', // Primary green
      //           'error-color': '#A70A0E', // Primary red
      //           'btn-primary-bg': '#164EB6',
      //           'disabled-bg': '#C6CBD4',
      //           'btn-disable-border': '#C6CBD4',
      //           'btn-disable-color': '#FFFFFF',
      //           'btn-default-ghost-color': '#164EB6',
      //         },
      //         javascriptEnabled: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'lib/styles/build/**/*.{css,js}', to: '[name].[ext]' },
    //     { from: 'lib/styles/typography/fonts/' },
    //     { from: 'lib/styles/typography/css/*.css', to: 'font-style/[name].[ext]' },
    //   ],
    // }),
  ],
  output: {
    filename: 'bundle.cjs.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../dist'),
    library: 'virtuoso-design-system',
  },
};
