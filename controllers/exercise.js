const Exercise = require('../models/exercise');

exports.postExercise = (req, res, next) => {
  const exercise = req.body;
  console.log(exercise);
  res.status(201).json({
    message: 'Exercise added successfully'
  });
};