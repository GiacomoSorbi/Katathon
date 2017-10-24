const Event = require('./models/eventModel');
const getRecentEvent = require('./helpers').getRecentEvent;

module.exports = function(app) {
  app.get('/api/currentevent', (req, res) => {
    Event.find().then(doc => {
      // send back most recently added event
      res.send(getRecentEvent(doc));
    });
  });
}