//! Minimal schema defined so OAuth can be installed. COME BACK TO THIS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  gitUsername: {type: String, unique: true},
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String, 
  bio: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);