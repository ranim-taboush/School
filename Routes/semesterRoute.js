const express = require('express')
const router = express.Router()
const semesterController = require('./../Controllers/semesterController')

router.post('/semester', semesterController.createSemester)
router.get('/semester', semesterController.getSemesters)
router.get('/semester/:id', semesterController.getSemester)
router.patch('/semester/:id', semesterController.editSemester)
router.delete('/semester/:id', semesterController.deleteSemester)

module.exports = router