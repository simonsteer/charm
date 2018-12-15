const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String, required: false, unique: false },
  password: { type: String, required: true },
})

userSchema.virtual('public').get(function() {
  const { displayName } = this
  return { displayName }
})

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

userSchema.pre('save', async function(next) {
  const user = this

  if (user.isModified('password') || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10)

      user.password = hash
      next()
    } catch (e) {
      next(e)
    }
  }

  next()
})

module.exports = mongoose.model('User', userSchema)
