import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth'; // Replace with the correct path to AuthService

import backgroundImage from '../img/bowl.jpeg'; // Replace with your image path

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = AuthService;

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      console.log(data);
      const token = data.loginUser.token;
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="100%" // Adjust the background size as needed
    >
      <Box p={4} width="300px" bg="white" borderRadius="md" boxShadow="md">
        <Heading mb={4}>Log In</Heading>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
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
        <Button
          mt={4}
          colorScheme="teal"
          onClick={handleLogin}
          isLoading={loading}
        >
          Log In
        </Button>
        <Text mt={2} fontSize="sm" color="gray.500">
          Don't have an account? <a href="/signup">Sign up</a>
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
