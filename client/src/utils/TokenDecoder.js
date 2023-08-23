import React from 'react';
import jwtDecode from 'jwt-decode';

const TokenDecoder = () => {
  const token = process.env.REACT_APP_JWT_TOKEN;
  if (!token) {
    return <p>No token available</p>;
  }

  const decodedToken = jwtDecode(token);

  // Assuming your JWT payload has a "data" field
  const userData = decodedToken.data;

  return (
    <div>
      <h1>Decoded Token Data</h1>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      {/* ...other user data */}
    </div>
  );
};

export default TokenDecoder;
