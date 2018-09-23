import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
  date: Number
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
