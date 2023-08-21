import React from 'react';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import Login from './pages/Login'; // Import the Login component

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column" align="center" mt={10}>
        <Login /> {/* Use the Login component */}
      </Flex>
    </ChakraProvider>
  );
};

export default App;
