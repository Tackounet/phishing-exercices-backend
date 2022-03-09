const express = require('express');
const ExerciseController = require('../controllers/exercises');

const router = express.Router();

router.post('', ExerciseController.postExercise);
router.get('', ExerciseController.getExercises);
router.get('/:id', ExerciseController.getExercise);
router.put('/:id', ExerciseController.putExercise);

module.exports = router;
