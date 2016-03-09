var path = require('path');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'src', 'dest'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },
    { test: /\.scss$/,
      loader: 'style!css!autoprefixer!sass'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  devtool: "cheap-module-eval-source-map"
}
