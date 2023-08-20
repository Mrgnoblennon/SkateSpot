const bcrypt = require('bcrypt');
const connectToMongoDB = require('../config/connection');
const User = require('../models/User')
const Spot = require ('../models/Spot');
const Comment = require('../models/Comment')
const userSeeds = require('./userSeeds.json');
const spotSeeds = require('./spotSeeds.json');
const commentSeeds = require('./commentSeeds.json');

const seedDatabase = async () => {
  try {
    await connectToMongoDB();

    // Clear existing data
    await Comment.deleteMany({});
    await Spot.deleteMany({});
    await User.deleteMany({});

    // Create users
    const createdUsers = await User.create(userSeeds);

    // Create spots with associations to users
    const spotData = spotSeeds.map((spot) => ({
      ...spot,
      createdBy: createdUsers[0]._id,
    }));
    const createdSpots = await Spot.create(spotData);

    // Create comments with associations to users and spots
    const commentData = commentSeeds.map((comment) => {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const randomSpotIndex = Math.floor(Math.random() * createdSpots.length);
    
      return {
        ...comment,
        user: createdUsers[randomUserIndex]._id,
        spot: createdSpots[randomSpotIndex]._id,
        createdBy: createdUsers[randomUserIndex]._id, // Set createdBy to a valid user's _id
      };
    });
    await Comment.create(commentData);

    console.log('Seed data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
};

seedDatabase();