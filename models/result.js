const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  exerciseId: { type: String, trim: true, required: true },
  exerciseTitle: { type: String, trim: true, required: true },
  traineeId: { type: String, trim: true, required: true },
  traineeName: { type: String, trim: true, required: true },
  sessionId: { type: String, trim: true, required: true },
  answers: { type: [] },
  score: { type: Number, required: true },
  isCorrect:  { type: Boolean, default: null },
  isPhishing: { type: Boolean, default: null }
});

module.exports = mongoose.model('Result', resultSchema);