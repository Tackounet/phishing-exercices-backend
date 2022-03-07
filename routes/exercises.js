const express = require('express');
const ExerciseController = require('../controllers/exercises');

const router = express.Router();

router.post('', ExerciseController.postExercise);
router.get('', ExerciseController.getExercises);
router.get('/:id', ExerciseController.getExercise);
router.put('/:id', ExerciseController.putExercise);
// router.put('/:id', checkAuth, extractFile, ExercisesController.updatePost);
// router.get('', PostController.getPostsList);
// router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;
