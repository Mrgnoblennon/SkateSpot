import { useMutation, gql } from '@apollo/client';
import jwtDecode from 'jwt-decode';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        email
        // Other user fields
      }
    }
  }
`;

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export const useLogin = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const login = async (username, password) => {
    try {
      const response = await loginMutation({
        variables: { username, password },
      });

      const { token, user } = response.data.login;
      localStorage.setItem('authToken', token);

      const decodedToken = jwtDecode(token);
      const { userId } = decodedToken; // Replace with your actual payload key

      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  return { login, data, loading, error };
};

export const useLogout = () => {
  const [logoutMutation] = useMutation(LOGOUT_MUTATION);

  const logout = async () => {
    try {
      await logoutMutation();
      localStorage.removeItem('authToken');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return { logout };
};
