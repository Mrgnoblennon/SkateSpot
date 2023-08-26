import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Auth from '../../utils/auth'; // Replace with the correct path to AuthService

const Header = ({ user }) => {
  console.log("User:", user); // undefined
  const handleSignOut = () => {
    Auth.logout(); // Call the logout method from your auth service
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
            <Avatar size="sm" src={user.profilePic} alt={user.username} />
            <Text ml={2}>{user.username}</Text>
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
          </>
        )}
        <Menu>
          <MenuButton as={Button} ml={4}>
            Actions
          </MenuButton>
          <MenuList>
            {/* will need further implementation*/}
            <MenuItem color="blue.500">About Us</MenuItem>
            <MenuItem color="blue.500">Contact Us</MenuItem>

            {user && (
              <>
                <MenuItem color="blue.500">Edit Profile</MenuItem>
                <MenuItem color="blue.500">Settings</MenuItem>
                <MenuItem onClick={handleSignOut} color="red.500">
                  Log Out
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
