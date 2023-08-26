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
  Image
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Auth from '../../utils/auth'; // Replace with the correct path to AuthService
import customIcon from '../../assets/icons/SkateSpot.svg';


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
          <Image src={customIcon} alt="SkateSpot" />
        </Link>
        <Spacer />
        {user ? (
          <Flex align="center">
            <Link to="/profile">
              <Avatar size="md" src={user.profilePic} alt={user.username} />
            </Link>
            <Text ml={2}>Welcome! {user.username}</Text>
            
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
          <MenuButton as={Button} ml={4} >
            <HamburgerIcon boxSize={5} /> {/* Adjust boxSize as needed */}
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
