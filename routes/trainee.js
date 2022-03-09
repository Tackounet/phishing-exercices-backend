const express = require('express');
const TraineeController = require('../controllers/trainee');

const router = express.Router();

router.post('/register', TraineeController.registerTrainee);
router.post('/result', TraineeController.saveResult);
router.get('/result/:id', TraineeController.getResults);
router.post('/stats', TraineeController.saveStats);

module.exports = router;