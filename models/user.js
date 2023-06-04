//! Minimal schema defined so OAuth can be installed. COME BACK TO THIS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  gitUsername: {type: String},
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String, 
  bio: String,
  savedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'  
}] || []
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);