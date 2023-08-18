const Spot = require('../models/Spot');

const resolvers = {
    Query: {
      spot: (parent, args) => {
        // Logic to fetch a spot by ID
        const spotId = args.id;
        // Implement your data fetching logic here and return the result
        const spot = {}; // Replace with actual data fetching
        return spot;
      },
    },
    Mutation: {
        addSpot: async (parent, args) => {
          const { name, description } = args;
          const newSpot = await Spot.create({ name, description });
          return newSpot;
        },
    },
};

module.exports = resolvers;
  