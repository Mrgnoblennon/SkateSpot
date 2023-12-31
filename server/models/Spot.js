const { Schema, model } = require('mongoose');

const spotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment', // Reference to the Comment model
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Spot = model('Spot', spotSchema);

module.exports = Spot;
