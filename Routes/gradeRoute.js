const express = require('express')
const router = express.Router()
const gradeController = require('./../Controllers/gradeController')

router.post('/grade', gradeController.createGrade)
router.get('/grade', gradeController.getGrades)
router.get('/grade/:id', gradeController.getGrade )
router.patch('/grade/:id', gradeController.editGrade )
router.delete('/grade/:id', gradeController.deleteGrade )

module.exports = router