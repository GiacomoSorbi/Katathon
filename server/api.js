const Event = require('./models/eventModel');
const User = require('./models/userModel');
const Kata = require('./models/kataModel');
const getRecentEvent = require('./helpers').getRecentEvent;

module.exports = (app) => {
  app.get('/api/currentevent', (req, res) => {
    Event.find().then(doc => {
      // send back most recently added event
      res.send(getRecentEvent(doc));
    });
  });

  app.get('/api/getuser/', (req, res) => {
    User.findOne({name: req.query.name},
      (err, results) => {
        res.send(results);
      });
  })

  app.post('/api/newuser/', (req, res) => {
    // create a new user for an event
    // TODO: validate username with Codewars API
    // TODO: query DB for username and update with event if exists
    return User.create({
      name: req.body.name,
      events: [
        {
          event: req.body.event,
          score: 0
        }
      ]
    }, (err, results) => {
      res.send(results);
    });
  });

  app.post('/api/newkata/', (req, res) => {
    // create a new kata for an event
    // TODO: query db for kata and update with event if exists
    // TODO: validate new katas with Codewars API
    let newKatas = req.body.katas.map(kata => ({
      name: kata.name,
      score: kata.score,
      events: [
        {
          event: req.body.event
        }
      ]
    }));
    return Kata.create(newKatas, (err, results) => {
      res.send(results);
    });
  });

  app.get('/api/eventkatas', (req, res) => {
    // TODO: this will likely break if there is more than one event listed in a kata's events
    Kata.find({events: [{event: req.query.event}]}).then(katas => {
      res.send(katas);
    });
  });

  app.get('/api/eventusers', (req, res) => {
    // TODO: needs a way to find users depending on an event ID in the event property of objects in their events array
    User.find().then(users => {
      res.send(users);
    })
  });
}