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
      addSpot: (parent, args) => {
        // Logic to add a new spot
        const { name, description } = args;
        // Implement your data insertion logic here and return the newly added spot
        const newSpot = { id: 'new-spot-id', name, description }; // Replace with actual data insertion
        return newSpot;
      },
    },
  };
  
  module.exports = resolvers;
  