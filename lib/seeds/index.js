const User = require('../models/User')
const users = require('./users')
const mongoose = require('mongoose')
const config = require('config')

const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI

// truncate is just a fancy word for 'delete all of'
const truncateDatabase = async () => {
  // here we delete all our users and posts so we can start with fresh data
  return Promise.all([User.deleteMany()])
}

const makeSeeds = async () => {
  // connect to our mongo database
  await mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true }
  )

  // delete all old data in the database
  await truncateDatabase()

  // save all our users into the database
  await Promise.all(users.map(user => user.save()))

  // that's it! close the connection
  mongoose.connection.close()
}

makeSeeds()
