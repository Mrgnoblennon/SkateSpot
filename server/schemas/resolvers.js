const Spot = require('../models/Spot'); // Import your Spot model

const resolvers = {
  Query: {
    spot: async (parent, args) => {
      const { id } = args;
      return Spot.findById(id);
    },
    spots: async () => {
      return Spot.find();
    },
  },
  Mutation: {
    createSpot: async (parent, args) => {
      const { name, description, location } = args.input;
      const newSpot = new Spot({ name, description, location });
      await newSpot.save();
      return newSpot;
    },
    updateSpot: async (parent, args) => {
      const { id, input } = args;
      return Spot.findByIdAndUpdate(id, input, { new: true });
    },
    deleteSpot: async (parent, args) => {
      const { id } = args;
      await Spot.findByIdAndDelete(id);
      return true;
    },
  },
};

module.exports = resolvers;
