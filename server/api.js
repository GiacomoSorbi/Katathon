import https from 'https'

import Event from './models/eventModel'
import User from './models/userModel'
import Kata from './models/kataModel'
import { getRecentEvent } from './helpers'

module.exports = (app) => {
  app.get('/api/currentevent', (req, res) => {
    Event.find().then(doc => {
      // send back most recently added event
      res.send(getRecentEvent(doc))
    })
  })

  app.get('/api/newevents', (req, res) => {
    Event.find().then(doc => {
      // send back most recently added event
      res.send(doc.filter(event => event.date >= (Date.now() - 43200)))
    })
  })

  app.get('/api/getuser/', (req, res) => {
    User.findOne({ name: req.query.name },
      (err, results) => {
        res.send(results)
      })
  })

  app.post('/api/updateuser/', (req, res) => {
    // update an existing user with new event

    User.findById(req.body.id,
      (err, results) => {
        if (err) throw err
        results.events.set(results.events.length, { event: req.body.event, score: 0 })
        results.save((err, final) => res.send(final))
      })
  })

  app.post('/api/updatescore', (req, res) => {
    User.findById(req.body.id,
      (err, results) => {
        if (err) throw err
        const currentEvent = results.events.find(event => event.event === req.body.event)
        currentEvent.score += Number(req.body.score)
        results.events.set(results.events.indexOf(currentEvent), currentEvent)
        results.save((err, final) => res.send(final))
      })
  })

  app.post('/api/newuser/', (req, res) => {
    // create a new user for an event
    // TODO: Error if no event id or request is otherwise incomplete
    let responseBody = ''
    https.get('https://www.codewars.com/api/v1/users/' + req.body.name, (response) => {
      response.on('data', (chunk) => {
        responseBody += chunk
      })
      response.on('end', () => {
        const json = JSON.parse(responseBody)
        console.log(json)
        if (json.username && json.username === req.body.name) {
          return User.create({
            name: req.body.name,
            events: [
              {
                event: req.body.event,
                score: 0
              }
            ]
          }, (err, results) => {
            if(err) throw err
            res.send(results)
          })
        }
        res.send(json)
      })
    })
  })

  app.post('/api/newkatas/', (req, res) => {
    // create a new kata for an event
    // TODO: query db for kata and update with event if exists
    // TODO: validate new katas with Codewars API

    req.body.katas.forEach(() => {
      https.get('https://www.codewars.com/api/v1/code-challenge' + req.body)
    })

    const newKatas = req.body.katas.map(kata => ({
      name: kata.name,
      score: kata.score,
      events: [
        {
          event: req.body.event
        }
      ]
    }))
    return Kata.create(newKatas, (err, results) => {
      res.send(results)
    })
  })

  app.get('/api/eventkatas', (req, res) => {
    // find katas selected for a particular event
    // find depending on the requested event ID being present in the kata's events array
    // TODO: Inefficient. Needs a way to query only the katas registered at the requested event

    Kata.find((err, katas) => {
      if (err) throw err
      const eventKatas = katas.filter(kata => kata.events.filter(e => e.event === req.query.event).length)
      res.send(eventKatas)
    })
  })

  app.get('/api/eventusers', (req, res) => {
    // find users registered for a particular event
    // find depending on the requested event ID being present in the user's events array
    // TODO: Inefficient. Needs a way to query only the users registered at the requested event

    User.find((err, users) => {
      if (err) throw err
      const eventUsers = users.filter(user => user.events.filter(e => e.event === req.query.event).length)
      res.send(eventUsers)
    })
  })

  // TODO: update this endpoint route for real-world use
  // TODO: update functionality to test for a user and kata in the current event and update score
  // This POST endpoint exists to receive the webhooks necessary for the server to know when a user has completed a kata
  app.post('/', (req, res) => {
    if (req.body.action === 'solution_finalized') {
      // no need to send response, just check the kata, get user and update score
      res.send(req.body)
    }
  })
}
