const mongoose = require('mongoose');

const {Schema} = mongoose;

const kataSchema = new Schema({
  name: String,
  score: Number,
  events: [{}]
});

const Kata = mongoose.model('Kata', kataSchema);

module.exports = Kata;