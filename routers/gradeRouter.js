const express = require('express');

const router = express.Router();

const gradeController = require('../controllers/gradeController');

router.post('/', gradeController.createGrade);
router.get('/', gradeController.getGrades);
router.get('/:grade', gradeController.getDetailsByGrade);



module.exports = router;
