import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home'; // Import the Home component
import SignUp from './pages/SignUp';
import client from './ApolloClient'

const App = () => {
  // Sample user data for testing
  const user = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <ApolloProvider client={client}>
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column">
        <Header user={user} />
        <Flex direction="column" align="center" mt={10}>
          <SignUp/>
        </Flex>
      </Flex>
    </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
