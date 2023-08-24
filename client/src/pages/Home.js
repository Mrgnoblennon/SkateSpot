import React from 'react';
import { Box, Flex, Text, Avatar, Spacer } from '@chakra-ui/react';
import backgroundImage from '../img/skate.jpeg'; // Import your background image
import styles from '../styles/Home.module.css'; // Import CSS module for styling

const Home = ({ user }) => {
  return (
    <Box
      className={styles.homeContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Box className={styles.overlay}>
        <Flex align="center">
          {user ? (
            <Flex align="center">
              <Avatar size="lg" src={user.profilePic} alt={user.name} />
              <Box ml={4}>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Welcome, {user.name}!
                </Text>
                <Text color="white">Explore and share your spots.</Text>
              </Box>
            </Flex>
          ) : (
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="white">
                Welcome to SkateSpot!
              </Text>
              <Text color="white">Explore and share skateboarding spots.</Text>
            </Box>
          )}
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
