
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  gitUsername: {type: String},
  gitData: Object,
  googleId: {
    type: String
  },
  email: String,
  avatar: String, 
  bio: String,
  savedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'  
}] || [],
githubId: String,
gitUsername: String,
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;



// User.collection.dropIndex('gitUsername_1', function(err, result) {
//   if (err) {
//       console.log('Error in dropping index!', err);
//   }
// });

