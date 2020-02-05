/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  devtool: prod ? false : 'source-map',
  devServer: {
    contentBase: './dist',
    port: 9100
  },
  mode,
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev: true,
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Classes - Static'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
