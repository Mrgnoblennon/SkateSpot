import React from 'react';
import { Box, Text, Button, Flex, Spacer, Avatar } from '@chakra-ui/react';

const Home = ({ user }) => {
  return (
    <Box p={4} width="100%">
      <Flex align="center">
        {user ? (
          <Flex align="center">
            <Avatar size="lg" src={user.profilePic} alt={user.name} />
            <Box ml={4}>
              <Text fontSize="xl" fontWeight="bold">
                Welcome, {user.name}!
              </Text>
              <Text>Explore and share your spots.</Text>
            </Box>
          </Flex>
        ) : (
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Welcome to SkateSpot!
            </Text>
            <Text>Explore and share skateboarding spots.</Text>
            <Button colorScheme="green" mt={4}>
              Log In
            </Button>
            <Button colorScheme="blue" mt={2}>
              Sign Up
            </Button>
          </Box>
        )}
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Home;
