const Session = require('../models/session');

exports.createSession = (req, res, next) => {
  const session = new Session({
    id: req.body.id,
    createdAt: new Date()
  });
  session.save().then(createdSession => {
    res.status(201).json({
      message: 'Session added successfully!',
      session: {
        ...createdSession,
        id: createdSession._id
      }
    });
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Fail to create an session!'
    });
  });
};

exports.getSession = (req, res, next) => {
  Session.findOne().sort([['createdAt', -1]]).then(session => {
    res.status(200).json({
      message: 'Session fetched',
      sessionId: session.id
    });
  }).catch(error => {
    res.status(400).json({
      message: 'Error when fetching the session',
      defaultMessage: error
    });
  });
};