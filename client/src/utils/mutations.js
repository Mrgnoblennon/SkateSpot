import { gql } from '@apollo/client';

// Signup Mutation
export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(input: { username: $username, email: $email, password: $password }) {
      id
      username
      email
      password
    }
  }
`;

// Login Mutation
export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    user {
      _id
      username
      email
    }
    token
  }
}
`;

// Create Spot Mutation
export const CREATE_SPOT = gql`
  mutation CreateSpot($name: String!, $description: String, $location: String) {
    createSpot(input: { name: $name, description: $description, location: $location }) {
      id
      name
      description
      location
      createdBy
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!, $spotId: ID!) {
    createComment(input: { text: $text, spotId: $spotId }) {
      id
      text
    }
  }
`;