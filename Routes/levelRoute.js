const express = require('express')
const router = express.Router()
const levelController = require('./../Controllers/levelController')
const authenticate = require('./../middleware/verifyJWT')

router.post('/level', authenticate, levelController.createLevel)
router.get('/level', levelController.getLevels)
router.get('/level/:id', levelController.getLevel)
router.patch('/level/:id', authenticate, levelController.editLevel)
router.delete('/level/:id', authenticate, levelController.deleteLevel)

module.exports = router