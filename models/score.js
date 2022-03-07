const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  sessionId: { type: String, trim: true, required: true },
  traineeId: { type: String, trim: true, required: true },
  traineeName: { type: String, trim: true, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model('Score', scoreSchema);
