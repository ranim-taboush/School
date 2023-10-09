const express = require('express')
const router = express.Router()
const chapterController = require('./../Controllers/chapterController')
const authenticate = require('./../middleware/verifyJWT')

router.post('/chapter', authenticate, chapterController.createChapter)
router.get('/chapter', chapterController.getChapters)
router.get('/chapter/:id', chapterController.getChapter )
router.patch('/chapter/:id', authenticate, chapterController.editChapter )
router.delete('/chapter/:id', authenticate, chapterController.deleteChapter )

module.exports = router