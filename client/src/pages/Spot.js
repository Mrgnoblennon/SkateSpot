import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_SPOT } from '../utils/mutations'; // Import your CREATE_SPOT mutation

function Spot() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const [createSpot] = useMutation(CREATE_SPOT);

  const handleCreateSpot = async () => {
    try {
      const { data } = await createSpot({
        variables: {
          input: { name, description, location },
        },
      });
      console.log('Spot created:', data.createSpot);
      // You can perform additional actions after spot creation
    } catch (error) {
      console.error('Spot creation failed:', error);
    }
  };

  return (
    <Box p={4} width="300px">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Location</FormLabel>
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleCreateSpot}>
        Create Spot
      </Button>
    </Box>
  );
}

export default Spot;
