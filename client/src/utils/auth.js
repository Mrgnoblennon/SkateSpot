import decode from 'jwt-decode';



class AuthService {
  getProfile() {
    const token = this.getToken();
    const decodedToken = decode(token);
    console.log('Decoded Token:', decodedToken); // Debug log
    return decodedToken;
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  // may need more fields
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    const decodedToken = decode(idToken);
    
    if (decodedToken) {
      const { username, email } = decodedToken;
      // Optionally, you can store these values in localStorage or state for easy access across the app
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
    }
    
    window.location.assign('/profile');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
