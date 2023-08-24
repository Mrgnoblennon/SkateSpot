const jwt = require('jsonwebtoken');

const secret = 'meow'; // Replace with your actual secret key
const expiration = '1h'; // Adjust expiration as needed

module.exports = {
  authMiddleware: function (req, res, next) {
    console.log('authMiddleware called')
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      next();
    } catch (error) {
      console.log('Invalid token');
      return res.status(403).json({ message: 'Invalid token' });
    }
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
