const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Spot {
    id: ID
    name: String
    description: String
  }

  type Query {
    spot(id: ID): Spot
  }

  type Mutation {
    addSpot(name: String, description: String): Spot
  }
`;

module.exports = typeDefs;
