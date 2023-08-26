const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Login {
    user: User
    token: String
  }

  type Spot {
    id: ID!
    name: String!
    description: String
    location: String
    createdBy: String
    createdAt: String
    updatedAt: String
  }

  type Comment {
    id: ID!
    text: String!
    user: User!
    spot: Spot!
    createdAt: String
    updatedAt: String
  }

  type Query {
    user(id: ID!): User
    users: [User]
    spot(id: ID!): Spot
    spots: [Spot]
    commentsBySpot(spotId: ID!): [Comment]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    loginUser(username: String!, password: String!): Login
    createSpot(input: CreateSpotInput!): Spot
    updateSpot(input: UpdateSpotInput!): Spot
    deleteSpot(id: ID!): Boolean
    createComment(input: CreateCommentInput!): Comment
    updateComment(input: UpdateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input CreateSpotInput {
    name: String!
    description: String
    location: String
  }

  input UpdateSpotInput {
    id: ID!
    name: String
    description: String
    location: String
  }

  input CreateCommentInput {
    text: String!
    user: ID!
    spot: ID!
  }

  input UpdateCommentInput {
    id: ID!
    text: String
  }
`;

module.exports = typeDefs;
