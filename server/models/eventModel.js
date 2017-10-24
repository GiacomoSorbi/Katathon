const mongoose = require('mongoose');

const {Schema} = mongoose;

const eventSchema = new Schema({
  date: Number,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;