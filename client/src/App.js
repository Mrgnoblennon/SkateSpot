import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import client from './utils/ApolloClient';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Spot from './pages/Spot';
import SpotDetail from './pages/SpotDetail';
import AuthService from './utils/auth';

function App() {
  const loggedIn = AuthService.loggedIn(); // Determine if user is logged in
  const user = loggedIn ? AuthService.getProfile() : null; // Get user profile if logged in

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Header user={user} /> {/* Pass the user prop to the Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={loggedIn ? <Profile user={user} /> : <Login />} />
          {/* Only render Profile component if user is logged in, else render Login */}
          <Route path="/spot" element={loggedIn ? <Spot user={user} /> : <Login />} />
          {/* Only render Spot component if user is logged in, else render Login */}
          <Route path="/detail" element={<SpotDetail />} />
          {/* ... Other routes */}
        </Routes>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
