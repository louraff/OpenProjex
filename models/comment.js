const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
  });

  CommentSchema.methods.getFormattedDate = function() {
    return `${this.created_at.toLocaleDateString()} ${this.created_at.toLocaleTimeString()}`;
};

  module.exports = mongoose.model('Comment', CommentSchema);
