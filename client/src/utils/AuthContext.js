import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tokenString = localStorage.getItem('token');
    
    if (tokenString) {
      const token = JSON.parse(tokenString); // Use JSON.parse
      const decodedToken = jwtDecode(token);
      
      if (decodedToken.exp * 1000 < Date.now()) {
        // Token has expired, log out the user
        logout();
      } else {
        setUser(decodedToken);
      }
    }
  }, []);

  const login = async (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return auth;
}
