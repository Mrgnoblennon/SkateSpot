import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Avatar,
} from '@chakra-ui/react';
import AuthService from '../../utils/auth'; // Replace with the correct path to AuthService

const Header = ({ user }) => {
  const handleSignOut = () => {
    AuthService.logout(); // Call the logout method from your auth service
    // You can also perform any additional actions after signing out
  };

  return (
    <Box bg="blue.500" p={4} boxShadow="md" color="white">
      <Flex align="center">
        <Link to="/">
          <Button fontSize="xl" fontWeight="bold">
            SkateSpot
          </Button>
        </Link>
        <Spacer />
        {user ? (
          <Flex align="center">
            <Avatar size="sm" src={user.profilePic} alt={user.name} />
            <Text ml={2}>{user.name}</Text>
            <Button colorScheme="red" ml={4} onClick={handleSignOut}>
              Log Out
            </Button>
          </Flex>
        ) : (
          <>
            <Link to="/login">
              <Button colorScheme="green" mr={2}>
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="red">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
