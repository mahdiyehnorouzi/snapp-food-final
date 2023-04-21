// webpack.config.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const DotenvValues = require('dotenv').config({ path: './.env' });
const isDev = DotenvValues.parsed.NODE_ENV === 'development';

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
  filename: 'index.html',
  inject: 'body',
  environment: DotenvValues.parsed.NODE_ENV,
  templateParameters: {
    PUBLIC_URL: isDev ? '/public' : ''
  }
});

module.exports = {
  context: __dirname,
  entry: '../src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/,
        options: {
          // this will disable any type checking
          transpileOnly: true
        }
      },
      {
        loader: 'babel-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(svg|png|gif|jpg|ico)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        include: [path.resolve('assets', 'icons')]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new Dotenv({
      path: './.env'
    }),
    htmlWebpackPlugin
  ],

  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      '~': path.resolve('assets'),
      '@': path.resolve('src')
    }
  }
};
