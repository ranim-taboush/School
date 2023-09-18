const express = require('express')
const router = express.Router()
const levelController = require('./../Controllers/levelController')

router.post('/level', levelController.createLevel)
router.get('/level', levelController.getLevels)
router.get('/level/:id', levelController.getLevel)
router.patch('/level/:id', levelController.editLevel)
router.delete('/level/:id', levelController.deleteLevel)

module.exports = router