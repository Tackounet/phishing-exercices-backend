const express = require('express');
const ExercisesController = require('../controllers/exercises');

const router = express.Router();

router.get('', ExercisesController.getExercises);
// router.put('/:id', checkAuth, extractFile, ExercisesController.updatePost);
// router.get('', PostController.getPostsList);
// router.get('/:id', PostController.getPost);
// router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;