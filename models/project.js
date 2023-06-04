const mongoose = require('mongoose');
const CommentSchema = require('./comment').schema; 

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    gitUsername: String,
    projectURL: String,
    description: String,
    createdDate: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [CommentSchema],
    likes: {type: Schema.Types.ObjectId, ref: 'User'},
    avatar: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Project', projectSchema);