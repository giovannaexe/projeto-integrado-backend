const express = require('express')
const controller = require('../controllers/usersController')
const router = express.Router()

router.post('/registrar', controller.registrar)

router.post('/login', controller.login)

module.exports = router
