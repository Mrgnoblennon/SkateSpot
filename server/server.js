const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const connectToMongoDB = require('./config/connection'); // Import the MongoDB connection function

const startServer = async () => {
  const app = express();

  // Connect to MongoDB
  await connectToMongoDB();

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the Apollo Server
  await server.start();

  // Apply Apollo Server middleware to the /graphql endpoint
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the Express app
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
