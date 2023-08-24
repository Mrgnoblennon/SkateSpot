import React from 'react';
import { Box, Flex, Text, Avatar, Spacer, SimpleGrid } from '@chakra-ui/react';
import backgroundImage from '../img/skate.jpeg'; // Import your background image
import styles from '../styles/Home.module.css'; // Import CSS module for styling
import SpotCard from '../components/SpotCard'

const spots = [
  {
    id: 1,
    name: 'Spot 1',
    description: 'Description for Spot 1',
    imageUrl: 'example-image-1.jpg',
    comments: [
      { id: 1, text: 'Comment 1 for Spot 1' },
      { id: 2, text: 'Comment 2 for Spot 1' },
    ],
  },
  {
    id: 2,
    name: 'Spot 1',
    description: 'Description for Spot 1',
    imageUrl: 'example-image-1.jpg',
    comments: [
      { id: 1, text: 'Comment 1 for Spot 1' },
      { id: 2, text: 'Comment 2 for Spot 1' },
    ],
  },
  {
    id: 3,
    name: 'Spot 1',
    description: 'Description for Spot 1',
    imageUrl: 'example-image-1.jpg',
    comments: [
      { id: 1, text: 'Comment 1 for Spot 1' },
      { id: 2, text: 'Comment 2 for Spot 1' },
    ],
  },
  // ... Add more spots
];

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
      <SimpleGrid columns={3} spacing={4} mt={4}>
        {spots.map(spot => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
