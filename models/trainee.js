const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const traineeSchema = mongoose.Schema({
  id: { type: String, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true }
});

traineeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Trainee', traineeSchema);