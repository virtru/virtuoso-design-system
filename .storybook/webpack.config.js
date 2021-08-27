const path = require('path');
const modifyVars = require('../lib/styles/antd');

module.exports = async ({ config }) => {
  // config.optimization = {
  //   sideEffects: true,
  // };
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, '../lib'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg', '.ts', '.tsx'],
  };

  config.module.rules = config.module.rules
    .filter(rule => {
      if (rule && rule.test && typeof rule.test.test === 'function') {
        return !rule.test.test('styles.css');
      } else {
        return false;
      }
    })
    .concat({
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
              path: path.join(__dirname, '../config'),
            },
          },
        },
      ],
    })
    .concat({
      test: /\.css$/,
      include: [
        path.join(__dirname, '..', 'node_modules', '@storybook'),
      ],
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    })
    .filter(rule => !rule.test.test('font.ttf'))
    .concat({
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            esModule: false
          },
        },
      ],
    })
    .concat({
      test: /\.(ts|tsx|jsx)$/,
      include: path.resolve(__dirname, "../stories"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    })
    .concat({
      test: /\.svg$/,
      use: [
        '@svgr/webpack', 
        'url-loader'
      ],
    })
    .concat({
      test: /\.less$/i,
      include: [
        path.join(__dirname, '..', 'node_modules', 'antd'),
      ],
      loader: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            modifyVars,
            javascriptEnabled: true,
          }
        },
      ],
    },);

  return config;
};
