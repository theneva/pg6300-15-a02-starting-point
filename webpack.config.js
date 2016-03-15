const webpack = require('webpack');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'client');
module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(srcDir, 'index.js'),
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      include: srcDir
    }],
  }
};
