/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const fs = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    path: path.join(__dirname, 'dist'),
    filename: '[name].[fullhash:8].js',
    chunkFilename: '[name].[id].[fullhash:8].js'
  },
  devtool: prod ? false : 'source-map',
  devServer: {
    client: {
      logging: 'error',
      overlay: true,
      progress: true
    },
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: '**/index.html'
          },
          noErrorOnMissing: true
        }
      ]
    }),
    new HtmlWebpackPlugin({
      // Use template if "/public/index.html" file exists
      ...(fs.existsSync('./public/index.html')
        ? { template: './public/index.html' }
        : {}),
      title: __dirname
        .substring(__dirname.indexOf('examples') + 'examples'.length + 1)
        .replaceAll(/[\\|/]/g, ' - ')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
