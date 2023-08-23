import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    createUser({ variables: { username, email, password } });
  };

  return (
    <Box p={4} width="300px">
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
      <Button mt={4} colorScheme="teal" onClick={handleSignup}>
        Sign Up
      </Button>
    </Box>
  );
}

export default Signup;
