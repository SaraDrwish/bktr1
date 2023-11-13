const express = require('express');
const router = express.Router();
const examController = require('../Controllers/examController');

router.post('/exams', examController.createExam);
 
module.exports = router;