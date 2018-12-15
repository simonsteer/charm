const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.use('/healthcheck', require('./healthcheck'))
router.use('/signup', require('./signup'))
router.use('/login', require('./login'))
router.use('/users', require('./users'))

module.exports = router
