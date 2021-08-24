const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const modifyVars = require('../lib/styles/antd');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../lib/index.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../lib'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.join(__dirname),
          path.join(__dirname, '../lib/styles'),
          path.join(__dirname, '../lib/components'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, '../config/postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }, { cleanupIDs: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/i,
        include: [path.join(__dirname, '..', 'node_modules', 'antd')],
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars,
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'lib/styles/build/**/*.{css,js}', to: '[name].[ext]' },
        { from: 'lib/styles/typography/fonts/' },
        { from: 'lib/styles/typography/css/*.css', to: 'font-style/[name].[ext]' },
      ],
    }),
  ],
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../dist'),
    library: 'virtuoso-design-system',
  },
};
