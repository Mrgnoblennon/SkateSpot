import React from 'react';
import Signup from '../../pages/Signup'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import { Link } from 'react-router-dom';
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
        <Link to="/"> {Home}
        <Button fontSize="xl" fontWeight="bold">
          SkateSpot
        </Button>
        </Link>
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
          <>
            <Link to="/login"> {Login}
            <Button colorScheme="green" mr={2}>
              Log In
            </Button>
            </Link>
            <Link to="/signup"> {Signup}
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
