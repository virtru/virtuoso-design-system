const path = require('path');
const modifyVars = require('../lib/styles/antd');

module.exports = async ({ config }) => {
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, '../lib'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg', '.ts', '.tsx'],
  };

  config.module.rules = config.module.rules
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
