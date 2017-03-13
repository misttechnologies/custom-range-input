const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: "./dist",
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
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
