/* global require, module, __dirname */
const webpack = require("webpack");
const path    = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "customrangeinput.js",
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ["css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|vendor|dist)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ["es2015"]
        }
      },
      {
        test: /\.html$/,
        exclude: /example/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
