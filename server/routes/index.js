import express from 'express'
const router = express.Router()


import { katathon, addUser, leaderBoard, katathons, newKatathon, updateKatathon } from '../controllers'

router.get('/katathon', katathon)

router.post('/adduser', addUser)

router.get('/katathon/current', leaderBoard)

router.get('/katathon/events', katathons)

router.post('/katathon/events', newKatathon)

router.put('/katathon/events', updateKatathon)

export default router
