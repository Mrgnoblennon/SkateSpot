import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../utils/mutations';
import { useAuth } from '../utils/AuthContext';

function AddComment({ spotId }) {
  const [text, setText] = useState('');

  const { user } = useAuth();

  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    onCompleted: (data) => {
      console.log('Comment added successfully', data.createComment);
    },
    onError: (error) => {
      console.error('Comment addition failed', error);
    },
  });

  const handleAddComment = () => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    createComment({ variables: { text, spotId } });
  };

  return (
    <Box p={4} width="300px">
      <FormControl>
        <FormLabel>Comment</FormLabel>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleAddComment} isLoading={loading}>
        Add Comment
      </Button>
    </Box>
  );
}

export default AddComment;
