const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              [
                'import',
                {
                  libraryName: 'antd',
                  libraryDirectory: 'es',
                  style: true,
                },
                'antd',
              ],
              [
                'import',
                {
                  libraryName: 'virtuoso-design-system',
                  libraryDirectory: 'dist',
                  style: true,
                },
                'virtuoso-design-system',
              ],
            ],
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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
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
