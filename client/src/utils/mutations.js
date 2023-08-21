import { gql } from '@apollo/client';

// Signup Mutation
export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(input: { username: $username, email: $email, password: $password }) {
      id
      username
      email
    }
  }
`;

// Login Mutation
export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      username
      email
      token
    }
  }
`;
