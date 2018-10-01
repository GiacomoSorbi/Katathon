
import mongoose, { Schema } from 'mongoose'

const KatathonSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  katas: [
    {
      kataId: {
        type: String
      },
      name: {
        type: String,
        required: true
      },
      slug: {
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
  },
  date_created: {
    type: Date,
    default: Date.now
  }
})

const Katathon = mongoose.model('Katathon', KatathonSchema)

export default Katathon
