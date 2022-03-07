const Exercise = require('../models/exercise');

exports.postExercise = (req, res, next) => {
  const exercise = new Exercise({
    template: req.body.template,
    title: req.body.title,
    description: req.body.description,
    digram: req.body.digram,
    object: req.body.object,
    senderDisplayName: req.body.senderDisplayName,
    senderEmail: req.body.senderEmail,
    time: req.body.time,
    toDisplayName: req.body.toDisplayName,
    toEmail: req.body.toEmail,
    body: req.body.body,
    legitimate: req.body.legitimate,
    rightAnswer: req.body.rightAnswer,
    wrongAnswer: req.body.wrongAnswer
  });
  console.log(exercise);
  exercise.save().then(createdExercise => {
    res.status(201).json({
      message: 'Exercise added successfully!',
      exercise: {
        ...createdExercise,
        id: createdExercise._id
      }
    });
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Fail to create an exercise!'
    });
  });
};

exports.getExercises = (req, res, next) => {
  Exercise.find().then(exercises => {
    res.status(200).json({
      message: 'Exercises fetched',
      exercises: exercises
    });
  }).catch(error => {
    res.status(400).json({
      message: 'Error when fetching the exercises',
      defaultMessage: error
    });
  });
};

exports.getExercise = (req, res, next) => {
  Exercise.findById(req.params.id).then(exercise => {
    if (exercise) {
      res.status(200).json({
        message: 'Exercise fetched successfully!',
        exercise: exercise
      });
    } else {
      res.status(404).json({
        message: 'Exercise not found'
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: 'Fetching exercise failed'
    });
  });
};

exports.putExercise = (req, res, next) => {
  const exercise = new Exercise({
    _id: req.body.id,
    template: req.body.template,
    title: req.body.title,
    description: req.body.description,
    digram: req.body.digram,
    object: req.body.object,
    senderDisplayName: req.body.senderDisplayName,
    senderEmail: req.body.senderEmail,
    time: req.body.time,
    toDisplayName: req.body.toDisplayName,
    toEmail: req.body.toEmail,
    body: req.body.body,
    legitimate: req.body.legitimate,
    rightAnswer: req.body.rightAnswer,
    wrongAnswer: req.body.wrongAnswer
  });
  Exercise.updateOne({ _id: req.params.id }, exercise).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Exercise updated successfully!',
      exercise: exercise
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Fetching exercise failed'
    });
  });
};