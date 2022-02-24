const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
  template: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  digram: {
    type: String,
    required: true
  },
  object: {
    type: String,
    required: true
  },
  senderDisplayName: {
    type: String,
    required: true
  },
  senderEmail: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  toDisplayName: {
    type: String,
    required: true
  },
  toEmail: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  rightAnswer: {
    type: String,
    required: true
  },
  wrongAnswer: {
    type: String,
    required: true
  },
  answers: [{
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  }]
});

module.exports = mongoose.model('Exercise', exerciseSchema);