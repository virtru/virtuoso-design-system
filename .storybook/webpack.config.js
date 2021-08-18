const path = require('path');

module.exports = async ({ config }) => {
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
              'font-family': "'Open Sans', Helvetica, Arial, sans-serif",
              'btn-font-weight': '700',
              'border-radius-base': '3px',
              'font-size-base': '13px',
              'padding-md': '19px',
              'height-base': '36px'
            },
            javascriptEnabled: true,
          }
        },
      ],
    },);

  return config;
};
