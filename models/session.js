const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sessionSchema = mongoose.Schema({
  id: { type: String, trim: true, required: true, unique: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

sessionSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Session', sessionSchema);