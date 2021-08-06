const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../lib/index.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../lib'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg', '.less'],
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
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'lib/styles/build/**/*.{css,js}', to: '[name].[ext]' },
        { from: 'lib/styles/typography/fonts/' },
        { from: 'lib/styles/typography/css/*.css', to: 'font-style/[name].[ext]' },
      ],
    }),
  ],
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  // },
};
