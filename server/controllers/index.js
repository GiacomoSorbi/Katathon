import Katathon from '../models/katathonModel'

import {
  dateToString,
  getNextEvent
} from '../helpers'

export const newKatathon = async (req, res) => {
  try {
    // Should be date from our front end application.
    // I am not sure how we would set the date at our front end application so for now
    // the format should be yyyy,mm,dd Example: (2018-10-22)
    const eventDate = await dateToString(req.body.date)

    // Create Katathon and save it to the db
    const newKatathon = await new Katathon({
      date: eventDate
    }).save()

    if (newKatathon) {
      res.status(200).json({
        result: 'success',
        data: newKatathon,
        message: 'The new event has been successfully created. Please add the katas to the event'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'failed',
      data: {},
      message: `Unable to create a new event. Error ${err}`
    })
  }
}

export const addKata = async (req, res) => {
  try {
    const { kataId, name, slug, link, score } = req.body
    // Create new kata
    const newKata = {
      kataId,
      name,
      slug,
      link,
      score
    }

    const katathon = await Katathon.findById(req.params.katathonId)

    if(katathon) {
      katathon.katas = [newKata, ...katathon.katas]
      katathon.save()
      res.status(200).json({
        result: 'success',
        data: katathon,
        message: 'New kata has been added to the Katathon'
      })
    }
  } catch(err) {
    res.status(400).json({
      result: 'failed',
      data: [],
      message: `Unable to create a new kata. Error ${err}`
    })
  }
}

export const updateKata = async (req, res) => {
  // Update Kata
  try {
    const { katathonId, kataId } = req.params
    const { name, slug, link, score } = req.body

    const katathon = await Katathon.findById(katathonId)

    katathon.katas = katathon.katas.map(kata => {
      if(kata.kataId == kataId) {
        if(name) kata.name = name
        if(slug) kata.slug = slug
        if(link) kata.link = link
        if(score) kata.score = score
      }
      return kata
    })

    katathon.save()
    res.status(200).json({
      result: 'Success',
      data: katathon,
      message: 'Kata has been updated successfully'
    })
  }catch(err) {
    res.status(400).json({
      result: 'failed',
      data: [],
      message: `Unable to update kata. Error ${err}`
    })
  }
}

export const listKatathons = async (req, res) => {
  // Return list of events ordered by recent added
  try {
    const katathons = await Katathon.find({ completed: false }).sort({ date_created: -1 })
    if(katathons.length > 0) {
      res.status(200).json({
        result: 'Success',
        data: katathons,
        message: 'query list of Katathons successfully'
      })
    }else {
      res.status(404).json({
        result: '404',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'failed',
      data: [],
      message: `query list of Katathons failed. Error ${err}`
    })
  }
}

export const updateKatathon = async (req, res) => {
  // Update Katathon
  try {
    const eventDate = await dateToString(req.body.date)

    const katathon = await Katathon.findById(req.params.katathonId)

    if(katathon && eventDate) {
      katathon.set({ date: eventDate })
      katathon.save()
      res.status(200).json({
        result: 'Success',
        data: katathon,
        message: 'Katathon has been updeted successfully'
      })
    } else {
      res.status(404).json({
        result: '404',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch(err) {
    res.status(400).json({
      result: 'failed',
      data: [],
      message: `Unable to update Katathon. Error ${err}`
    })
  }
}


export const nextKatathon = async (req, res) => {
  try {
    const katathons = await Katathon.find({ completed: false }).sort({ date_created: -1 })
    // console.log(katathons)
    if(katathons.length > 0) {
      const nextKatathon = getNextEvent(katathons)
      res.status(200).json({
        result: 'Success',
        data: nextKatathon,
        message: 'Next Katathon found successfully'
      })
    }else {
      res.status(404).json({
        result: '404',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'failed',
      data: [],
      message: `query next Katathon failed. Error ${err}`
    })
  }
}

export const addUser = (req, res) => {
  res.send('Add new user')
}

export const leaderBoard = (req, res) => {
  res.send('Katathon board')
}
