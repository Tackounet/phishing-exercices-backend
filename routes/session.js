const express = require('express');
const SessionController = require('../controllers/session');

const router = express.Router();

router.post('', SessionController.createSession);
router.get('', SessionController.getSession);

module.exports = router;
