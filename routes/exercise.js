const express = require('express');
const ExerciseController = require('../controllers/exercise');

const router = express.Router();

router.post('', ExerciseController.postExercise);
// router.put('/:id', checkAuth, extractFile, ExercisesController.updatePost);
// router.get('', PostController.getPostsList);
// router.get('/:id', PostController.getPost);
// router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;