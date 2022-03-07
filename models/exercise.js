const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
  template: {type: Number, required: true, default: 0},
  title: { type: String, trim: true, required: true },
  description: {type: String, trim: true, required: true},
  digram: {type: String, trim: true, required: true},
  object: {type: String, trim: true, required: true},
  senderDisplayName: {type: String, trim: true, required: true},
  senderEmail: {type: String, trim: true, required: true},
  time: {type: String, trim: true, required: true},
  toDisplayName: {type: String, trim: true, required: true},
  toEmail: {type: String, trim: true, required: true},
  body: {type: String, trim: true, required: true},
  legitimate: { type: Boolean, required: true, default: true },
  rightAnswer: {
    type: {
      text: {type: String, trim: true, required: true},
      items: {
        type: [{
          id: {type: String, trim: true, required: true},
          score: {type: Number, required: true},
          text: {type: String, trim: true, required: true}
        }],
        default: []
      }
    }
  },
  wrongAnswer: {
    type: {
      text: { type: String, trim: true, required: true },
      items: {
        type: [{
          id: { type: String, trim: true },
          score: { type: Number },
          text: { type: String, trim: true }
        }],
        default: []
      }
    }
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema);