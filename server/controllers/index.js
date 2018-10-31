import https from 'https'

import Katathon from '../models/katathonModel'

import {
  dateToTimestamp,
  getNextEvent
} from '../helpers'

export const newKatathon = async (req, res) => {
  try {
    // Should be date from our front end application.
    // I am not sure how we would set the date at our front end application so for now
    // the format should be yyyy,mm,dd Example: (2018-10-22)
    const eventDateTimestamp = await dateToTimestamp(req.body.date)

    // Create Katathon and save it to the db
    const newKatathon = await new Katathon({
      date: eventDateTimestamp
    }).save()

    if (newKatathon) {
      res.status(200).json({
        result: 'Success',
        data: newKatathon,
        message: 'The new event has been successfully created. Please add the katas to the event'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'Failed',
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
        result: 'Success',
        data: katathon,
        message: 'New kata has been added to the Katathon'
      })
    }
  } catch(err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `Unable to create a new kata. Error ${err}`
    })
  }
}

export const updateKata = async (req, res) => {
  // Update Kata
  try {
    const { katathonId, _id } = req.params
    const { kataId, name, slug, link, score } = req.body

    const bodyCopy = {
      kataId,
      name,
      slug,
      link,
      score
    }

    const katathon = await Katathon.findById(katathonId)

    katathon.katas = katathon.katas.map(kata => kata._id === _id ? Object.assign(kata, bodyCopy) : kata)
    katathon.save()

    res.status(200).json({
      result: 'Success',
      data: katathon,
      message: 'Kata has been updated successfully'
    })
  }catch(err) {
    res.status(400).json({
      result: 'Failed',
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
        result: 'Not Found',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `query list of Katathons failed. Error ${err}`
    })
  }
}

export const updateKatathon = async (req, res) => {
  // Update Katathon
  try {
    const eventDate = await dateToTimestamp(req.body.date)

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
        result: 'Not Found',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch(err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `Unable to update Katathon. Error ${err}`
    })
  }
}


export const nextKatathon = async (req, res) => {
  try {
    const katathons = await Katathon.find({ completed: false })
    if(katathons.length > 0) {
      const nextKatathon = getNextEvent(katathons)
      res.status(200).json({
        result: 'Success',
        data: nextKatathon,
        message: 'Next Katathon found successfully'
      })
    }else {
      res.status(404).json({
        result: 'Not Found',
        data: [],
        message: 'No Katathon event found'
      })
    }
  } catch (err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `query next Katathon failed. Error ${err}`
    })
  }
}

export const addUser = (req, res) => {
  try {
    const { userName } = req.body

    https.get(`https://www.codewars.com/api/v1/users/${userName}/code-challenges/completed?page=0`, (httpsResponse) => {
      let data = ''

      httpsResponse.on('data', (chunk) => {
        data += chunk
      })

      httpsResponse.on('end', async () => {
        try {
          const userResponse = JSON.parse(data)

          if (userResponse.success === false) {
            throw new Error('User not found')
          }
          const newUser = {
            userName
          }
          const katathon = await Katathon.findById(req.params.katathonId)

          if (!katathon) {
            throw new Error('Katathon not found')
          }

          const isNew = katathon.users.every(user => user.userName !== userName)

          if (!isNew) {
            throw new Error('User already in katathon')
          }

          katathon.users = [newUser, ...katathon.users]
          katathon.save()
          res.status(200).json({
            result: 'Success',
            data: katathon,
            message: 'New user has been added to the Katathon'
          })
        } catch (err) {
          res.status(400).json({
            result: 'Failed',
            data: [],
            message: `Unable to add new user. Error ${err}`
          })
        }
      })
    })
      .on('error', (err) => {
        throw new Error(err)
      })
  } catch (err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `Unable to add new user. Error ${err}`
    })
  }
}

export const leaderBoard = async (req, res) => {
  try {
    const katathon = await Katathon.findById(req.params.katathonId)

    if (!katathon) {
      throw new Error('Katathon not found')
    }

    const allUsers = katathon.users.map(user => ({
      userName: user.userName,
      userScore: user.userScore
    }))

    res.status(200).json({
      result: 'Success',
      data: allUsers,
      message: ''
    })
  } catch (err) {
    res.status(400).json({
      result: 'Failed',
      data: [],
      message: `Unable to add get leader board. Error ${err}`
    })
  }
}
