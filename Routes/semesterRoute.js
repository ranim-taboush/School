const express = require('express')
const router = express.Router()
const semesterController = require('./../Controllers/semesterController')
const authenticate = require('./../middleware/verifyJWT')

router.post('/semester', authenticate, semesterController.createSemester)
router.get('/semester', semesterController.getSemesters)
router.get('/semester/:id', semesterController.getSemester)
router.patch('/semester/:id', authenticate, semesterController.editSemester)
router.delete('/semester/:id', authenticate, semesterController.deleteSemester)

module.exports = router