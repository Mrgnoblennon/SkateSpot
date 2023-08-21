import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Avatar,
} from '@chakra-ui/react';

const Header = ({ user }) => {
  return (
    <Box bg="blue.500" p={4} boxShadow="md" color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          SkateSpot
        </Text>
        <Spacer />
        {user ? (
          <Flex align="center">
            <Avatar size="sm" src={user.profilePic} alt={user.name} />
            <Text ml={2}>{user.name}</Text>
            <Button colorScheme="red" ml={4}>
              Log Out
            </Button>
          </Flex>
        ) : (
          <Button colorScheme="green">
            Log In
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
