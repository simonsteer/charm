const { Router } = require('express')
const router = Router()
const User = require('../models/user')
const token = require('../services/token')

router.post('/', async (req, res, next) => {
  const { email, password } = req.body
  try {
    const doc = await User.findOne({ email })

    const userExists = !!doc
    if (!userExists) {
      res.status(404).send('user not found')
    }

    try {
      const passwordMatches = await doc.comparePassword(password)

      if (passwordMatches) {
        const _token = token.create(doc)
        res.status(200).send({ token: _token })
      }

      next(new Error('unauthorized'))
    } catch (e) {
      next(e)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
