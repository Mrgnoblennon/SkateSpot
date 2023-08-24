import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { useAuth } from '../utils/AuthContext';

function Login() {
  const [username, setUsername] = useState(''); // Changed to username
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      const token = data.login.token;
      login(token);
      console.log('Logged in successfully');
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    
    loginUser({ variables: { username, password } });
  };

  return (
    <Box p={4} width="300px">
      <FormControl>
        <FormLabel>Username</FormLabel> {/* Changed label to Username */}
        <Input
          type="text" // Changed to text
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleLogin} isLoading={loading}>
        Log In
      </Button>
    </Box>
  );
}

export default Login;
