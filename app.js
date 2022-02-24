// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const exercisesRoutes = require('./routes/exercises');
const exerciseRoutes = require('./routes/exercise');
// const userRoutes = require('./routes/user');

const app = express();

// mongoose.connect('mongodb+srv://db_admin_user:' + process.env.MONGO_ATLAS_PW + '@cluster0-ejqsm.mongodb.net/mean?retryWrites=true&w=majority')
//   .then(() => {
//     console.log('Connected to database!');
//   }).catch(() => {
//     console.log('Connection failed!');
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/media/images', express.static(path.join('media/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/exercises', exercisesRoutes);
app.use('/api/exercise', exerciseRoutes);
// app.use('/api/user', userRoutes);

module.exports = app;
