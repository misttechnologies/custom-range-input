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
        exclude: /(lib|node_modules|bower_components|dist)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.html$/,
        exclude: /example/,
        loader: 'html-loader'
      }
    ]
  }
};
