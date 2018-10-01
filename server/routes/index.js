import express from 'express'
const router = express.Router()


import * as controller from '../controllers'

router.post('/events', controller.newKatathon)

router.get('/events', controller.listKatathons)

router.put('/events/:katathonId', controller.updateKatathon)

router.post('/addkata/:katathonId', controller.addKata)

router.put('/:katathonId/:kataId', controller.updateKata)

router.get('/', controller.nextKatathon)

router.post('/adduser/:katathonId', controller.addUser)

router.get('/:katathonId', controller.leaderBoard)

export default router
