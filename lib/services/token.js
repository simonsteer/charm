const jwt = require('jsonwebtoken')

const SECRET = 'secret'

// a service to create a new token
// takes a user, sends back an assigned token

const create = user => {
  const { _id } = user
  const payload = {
    user: {
      id: _id,
    },
  }

  return jwt.sign(payload, SECRET)
}

const verify = token => jwt.verify(token, SECRET)

module.exports = {
  create,
  verify,
}
