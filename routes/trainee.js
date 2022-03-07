const express = require('express');
const TraineeController = require('../controllers/trainee');

const router = express.Router();

router.post('/result', TraineeController.postResult);
router.post('/score', TraineeController.postScore);
router.post('/register', TraineeController.registerTrainee);
router.post('/result', TraineeController.saveResult);
router.post('/stats', TraineeController.saveStats);
// router.put('/:id', checkAuth, extractFile, ExercisesController.updatePost);
// router.get('', PostController.getPostsList);
// router.get('/:id', PostController.getPost);
// router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;