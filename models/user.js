
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


// const User = mongoose.model('User', userSchema);

// User.collection.dropIndex('gitUsername_1', function(err, result) {
//   if (err) {
//       console.log('Error in dropping index!', err);
//   }
// });

// module.exports = User;