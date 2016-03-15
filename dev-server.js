const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();

const port = 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'src', 'client', 'index.html')));

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:' + port);
});
