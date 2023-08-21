import React from 'react';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home'; // Import the Home component

const App = () => {
  // Sample user data for testing
  const user = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column">
        <Header user={user} />
        <Flex direction="column" align="center" mt={10}>
          <Home user={user} /> {/* Use the Home component */}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
