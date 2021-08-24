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
              'primary-5': '#011D4A',
              'primary-6': '#011D4A', // Core brand color
              'primary-7': '#164EB6',
              'success-color': '#75B749', // Primary green
              'error-color': '#A70A0E', // Primary red
              'btn-primary-bg': '#164EB6',
              'disabled-bg': '#C6CBD4',
              'btn-disable-border': '#C6CBD4',
              'btn-disable-color': '#FFFFFF',
              'font-family': "'Open Sans', Helvetica, Arial, sans-serif",
              'text-color': '#2D323B',
              'text-color-secondary': '#515864',
              // buttons
              'btn-font-weight': '700',
              'border-radius-base': '3px',
              'btn-font-size-sm': '13px',
              'btn-padding-horizontal-base': '18px',
              'btn-height-base': '36px',
              // header
              'layout-header-background': '#011D4A',
              'layout-trigger-background': '#011D4A',
              'layout-body-background': '#FFFFFF',
              'menu-item-active-bg': '#011D4A',
              'menu-item-padding-horizontal': '12px',
              'menu-highlight-color': '#011D4A',
              'menu-dark-color': '#FFFFFF',
              'layout-header-color': '#FFFFFF',
              'layout-header-padding': '0 24px',
              'menu-item-font-size': '16px',
              'layout-header-height': '54px',
              'menu-dark-item-active-bg': '#011D4A',
              // pagination
              'pagination-item-size': '18px',
              'pagination-item-size-sm': '18px',
              // dropdown
              'menu-item-group-title-color': '#515864',
              'menu-item-color': '#515864',
              'menu-item-group-title-font-size': '1.3rem',
              'dropdown-font-size': '1.3rem',
              'dropdown-line-height': '1.8rem',
              'dropdown-vertical-padding': '8px',
              'control-padding-horizontal': '24px',
              // table
              'table-header-color': '#2D323B',
              'table-selected-row-bg': '#F3F5F7',
              'table-row-hover-bg': '#F3F5F7',
              'table-font-size': '13px',
              'table-header-bg': '@component-background',
              'table-padding-vertical': '7px',
              'table-border-color': '#F3F5F7'
              // layout (left)
            },
            javascriptEnabled: true,
          }
        },
      ],
    },);

  return config;
};
