const express = require('express')
const router = express.Router()
const subjectController = require('./../Controllers/subjectController')

router.post('/subject', subjectController.createSubject)
router.get('/subject', subjectController.getSubjects)
router.get('/subject/:id', subjectController.getSubject)
router.patch('/subject/:id', subjectController.editSubject)
router.delete('/subject/:id', subjectController.deleteSubject)

module.exports = router