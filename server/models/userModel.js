import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  name: String,
  events: [{}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
