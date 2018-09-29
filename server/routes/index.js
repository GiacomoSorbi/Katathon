import express from 'express'
const router = express.Router()


import { katathon, addUser, leaderBoard, katathons, newKatathon, updateKatathon } from '../controllers'

router.get('/events', katathons)

router.post('/events', newKatathon)

router.put('/events', updateKatathon)

router.get('/', katathon)

router.post('/adduser', addUser)

router.get('/:katathonId', leaderBoard)

export default router
