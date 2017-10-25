const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

const api = require('./api');
const dbConfig = require('./config');

app.use(webpackDevMiddleware(compiler, {
 publicPath: config.output.publicPath
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.getDBConnection());
mongoose.set('debug', true);

api(app);

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('The app is listening on port 3000');
});