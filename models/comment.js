const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
  });

  module.exports = mongoose.model('Comment', CommentSchema);
