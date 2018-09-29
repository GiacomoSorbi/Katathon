
import mongoose, { Schema } from 'mongoose'

const KatathonSchema = new Schema({
  date: {
    type: Number,
    required: true
  },
  katas: [
    {
      name: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      score: {
        type: Number,
        required: true
      }
    }
  ],
  users: [
    {
      userId: {
        type: String
      },
      userName: {
        type: String
      },
      userScore: {
        type: Number,
        default: 0
      }
    }
  ],
  completed: {
    type: Boolean,
    default: false
  }
})

const Katathon = mongoose.model('Katathon', KatathonSchema)

export default Katathon
