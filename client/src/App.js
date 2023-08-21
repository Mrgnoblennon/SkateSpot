import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './utils/auth';
import { ApolloProvider } from '@apollo/client';
import client from './utils/ApolloClient'; // Import your Apollo Client instance
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ApolloProvider client={client}>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
