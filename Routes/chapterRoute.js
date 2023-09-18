const express = require('express')
const router = express.Router()
const chapterController = require('./../Controllers/chapterController')

router.post('/chapter', chapterController.createChapter)
router.get('/chapter', chapterController.getChapters)
router.get('/chapter/:id', chapterController.getChapter )
router.patch('/chapter/:id', chapterController.editChapter )
router.delete('/chapter/:id', chapterController.deleteChapter )

module.exports = router