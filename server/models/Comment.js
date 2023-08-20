const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spot', // Reference to the Spot model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
