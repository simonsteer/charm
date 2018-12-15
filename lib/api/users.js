const { Router } = require('express')
const router = Router()
const User = require('../models/user')
const token = require('../services/token')
const auth = require('../middleware/auth')

router.get('/current', auth, async (req, res, next) => {
  try {
    const id = req.token.user.id
    console.log('user id: ' + id)
    const doc = await User.findById(id)

    console.log({ user: doc })

    res.status(200).json(doc)
  } catch (e) {
    console.log('why')
    next(e)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const doc = await User.find()
    res.status(200).json(doc)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const doc = await User.findById(id)

    res.status(200).json({
      message: 'success',
      payload: doc.public,
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
