//! Minimal schema defined so OAuth can be installed. COME BACK TO THIS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);