const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    // new BundleAnalyzerPlugin({ openAnalyzer: false, generateStatsFile: true }),
    new Dotenv({
      path: './.env'
    })
  ],
  devServer: {
    port: 3400,
    historyApiFallback: true,
    // writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            // options: {
            //   sassOptions: {
            //     includePaths: [path.resolve('src'), path.resolve('node_modules')]
            //   }
            // }
          }
        ]
      }
    ]
  }
});
