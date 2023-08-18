const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
  name: String,
  description: String,
  // Add more fields as needed
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
