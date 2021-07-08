const path = require('path');


module.exports = async ({ config }) => {
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, '../lib'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
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
        path.join(__dirname, '..', 'node_modules', 'antd'),
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
          },
        },
      ],
    })
    .concat({
      test: /\.svg$/,
      use: [
        "babel-loader",
        {
          loader: "react-svg-loader",
          options: {
            svgo: {
              plugins: [
                { removeTitle: false },
                { cleanupIDs: false },
              ],
              floatPrecision: 2
            }
          }
        }
      ]
    });

  return config;
};
