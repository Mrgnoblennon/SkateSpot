import React from 'react';
import { Box } from '@chakra-ui/react';
import AddComment from '../components/AddComment'; // Import the AddComment component

function SpotDetail({ spotId }) {
  return (
    <Box>
      {/* Display spot details here */}
      {/* ... */}
      
      {/* AddComment component */}
      <AddComment spotId={spotId} />
    </Box>
  );
}

export default SpotDetail;
