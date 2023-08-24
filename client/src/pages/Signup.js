import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Text , Heading} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import backgroundImage from '../img/shop.jpeg'; // Replace with your image path

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      const user = data.createUser;
      console.log('User created:', user);
      // Handle success, e.g., show a success message or redirect
    },
    onError: (error) => {
      console.error('User creation failed', error);
      // Handle error, e.g., display an error message
    },
  });

  const handleSignup = () => {
    // Check if password and confirmPassword match before proceeding
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);
    createUser({ variables: { username, email, password } });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="100%" // Adjust the background size as needed
      backgroundPosition="bottom left"
    >
      <Box p={4} width="300px" bg="white" borderRadius="md" boxShadow="md">
      <Heading mb={4}>Sign Up</Heading>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <FormControl mt={2}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {!passwordsMatch && (
          <Text color="red" mt={2}>
            Passwords do not match
          </Text>
        )}
        <Button mt={4} colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button>
        <Text mt={2} fontSize="sm" color="gray.500">
          Already have an account? <a href="/login">Log in</a>
        </Text>
      </Box>
    </Box>
  );
}

export default Signup;
