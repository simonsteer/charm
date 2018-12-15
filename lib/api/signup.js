const { Router } = require('express')
const router = Router()
const User = require('../models/user')

router.post('/', async (req, res, next) => {
  const { email, password } = req.body

  const user = new User({
    email,
    password,
  })
  try {
    const doc = await user.save()
    res.status(201).send(doc)
  } catch (e) {
    next(e)
  }
})

module.exports = router
