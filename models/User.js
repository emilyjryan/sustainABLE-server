// require mongoose ODM
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  favHabits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)