// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const exercisesRoutes = require('./routes/exercises');
// const exerciseRoutes = require('./routes/exercise');
const traineeRoutes = require('./routes/trainee');
const SessionRoutes = require('./routes/session');
// const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://api_phishing_training:R9Qn3Vy2J0l1uEdwlz9d@localhost/phishing_training')
  .then(() => {
    console.log('Connected to database!');
  }).catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/media/images', express.static(path.join('media/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/exercises', exercisesRoutes);
// app.use('/api/exercise', exerciseRoutes);
app.use('/api/trainees', traineeRoutes);
app.use('/api/sessions', SessionRoutes);
// app.use('/api/user', userRoutes);

module.exports = app;
