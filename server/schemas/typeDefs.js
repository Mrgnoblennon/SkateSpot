const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Spot {
    id: ID!
    name: String!
    description: String
    location: String
    createdBy: String
    createdAt: String
    updatedAt: String
  }

  input SpotInput {
    name: String!
    description: String
    location: String
  }

  type Query {
    spot(id: ID!): Spot
    spots: [Spot]
  }

  type Mutation {
    createSpot(input: SpotInput!): Spot
    updateSpot(id: ID!, input: SpotInput!): Spot
    deleteSpot(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
