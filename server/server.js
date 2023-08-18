const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const connectToMongoDB = require('./config/connection'); // Import the MongoDB connection function

const app = express();

// Connect to MongoDB
connectToMongoDB();

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
