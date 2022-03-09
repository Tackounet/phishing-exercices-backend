const Trainee = require('../models/trainee');
const Result = require('../models/result');
const Score = require('../models/score');

exports.registerTrainee = (req, res, next) => {
  const trainee = new Trainee({
    id: req.body.id,
    name: req.body.name
  });
  trainee.save().then(createdTrainee => {
    res.status(201).json({
      message: 'Trainee added successfully!',
      trainee: {
        ...createdTrainee,
        id: createdTrainee.id
      }
    });
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Fail to create an trainee!'
    });
  });
};

exports.saveResult = (req, res, next) => {
  const result = new Result({
    exerciseId: req.body.exerciseId,
    exerciseTitle: req.body.exerciseTitle,
    traineeId: req.body.traineeId,
    traineeName: req.body.traineeName,
    sessionId: req.body.sessionId,
    answsers: req.body.answers,
    score: req.body.score,
    isCorrect: req.body.isCorrect,
    isPhishing: req.body.isPhishing
  });
  result.save().then(saveResult => {
    res.status(201).json({
      message: 'Result added successfully!',
      result: {
        ...saveResult,
        result: saveResult
      }
    });
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Fail to create an result!'
    });
  });
};

exports.getResults = (req, res, next) => {
  Result.find({ sessionId: req.params.id }).then(results => {
    if (results) {
      res.status(200).json({
        message: 'Results fetched successfully!',
        results: results
      });
    } else {
      res.status(404).json({
        message: 'Results not found'
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: 'Fetching results failed'
    });
  });
};

exports.saveStats = (req, res, next) => {
  const stats = new Score({
    sessionId: req.body.sessionId,
    traineeId: req.body.traineeId,
    traineeName: req.body.traineeName,
    score: req.body.score
  });
  stats.save().then(savedStats => {
    res.status(201).json({
      message: 'Stats added successfully!',
      stats: {
        ...savedStats,
        stats: savedStats
      }
    });
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Fail to create an stats!'
    });
  });
};