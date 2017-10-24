const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const getDBConnection = require('./config/config').getDBConnection;
const getRecentEvent = require('./helpers').getRecentEvent;

mongoose.connect(getDBConnection());

const {Schema} = mongoose;

const eventSchema = new Schema({
  date: Number,
});

const Event = mongoose.model('Event', eventSchema);

 app.use(webpackDevMiddleware(compiler, {
   publicPath: config.output.publicPath
 }));

app.get('/api/currentevent', (req, res) => {
  Event.find().then(doc => {
    // send back most recently added event
    res.send(getRecentEvent(doc));
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('The app is listening on port 3000');
});