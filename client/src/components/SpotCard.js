import React from 'react';
import { Box, Text, Image, Stack } from '@chakra-ui/react';

const SpotCard = ({ spot }) => {
  return (
    <Box boxShadow="md" p={4} borderRadius="md" borderWidth="1px">
      <Image src={spot.imageUrl} alt={spot.name} />
      <Text mt={2} fontWeight="bold">
        {spot.name}
      </Text>
      <Text>{spot.description}</Text>
      <Stack mt={2}>
        {spot.comments.slice(0, 2).map(comment => (
          <Text key={comment.id}>{comment.text}</Text>
        ))}
      </Stack>
    </Box>
  );
};

export default SpotCard;
