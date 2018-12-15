const mongoose = require('mongoose')
const User = mongoose.model('User')

const simon = new User({
  displayName: 'simon',
  password: 'password',
  email: 'simon@earnwithdrop.com',
})

const devin = new User({
  displayName: 'devin',
  password: 'password',
  email: 'devin@gmail.com',
})

const susan = new User({
  displayName: 'susan',
  password: 'password',
  email: 'susan@earnwithdrop.com',
})

const users = [simon, devin, susan]

module.exports = users
