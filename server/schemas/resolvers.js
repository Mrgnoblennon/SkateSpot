require('dotenv').config()
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Spot = require('../models/Spot');
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      const { id } = args;
      return User.findById(id);
    },
    users: async () => {
      return User.find(); // Retrieve all users from your data source
    },
    spot: async (parent, args) => {
      const { id } = args;
      return Spot.findById(id);
    },
    spots: async () => {
      return Spot.find();
    },
    commentsBySpot: async (parent, args) => {
      const { spotId } = args;
      return Comment.find({ spot: spotId });
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const { username, email, password } = args.input;
      const hashedPassword = await bcrypt.hash(password, 10);
      return User.create({ username, email, password: hashedPassword });
    },
    createSpot: async (parent, args) => {
      const { name, description, location } = args.input;
      return Spot.create({ name, description, location });
    },
    updateSpot: async (parent, args) => {
      const { id, name, description, location } = args.input;
      return Spot.findByIdAndUpdate(id, { name, description, location }, { new: true });
    },
    deleteSpot: async (parent, args) => {
      const { id } = args;
      await Spot.findByIdAndDelete(id);
      return true;
    },
    updateComment: async (parent, args) => {
        const { id, text } = args.input;
        return Comment.findByIdAndUpdate(id, { text }, { new: true });
    },
    createComment: async (parent, args, context) => {
      const { text, spotId } = args.input;
      const user = context.user; // Get the authenticated user
      const spot = await Spot.findById(spotId);
      if (!spot) {
        throw new Error('Spot not found');
      }
      const comment = await Comment.create({
        text,
        user: user.id,
        spot: spotId,
      });
      return comment;
    },
    deleteComment: async (parent, args, context) => {
      const { id } = args;
      const user = context.user; // Get the authenticated user
      const comment = await Comment.findById(id);
      if (!comment) {
        throw new Error('Comment not found');
      }
      // Check if the authenticated user is the creator of the comment
      if (comment.createdBy.toString() !== user.id) {
        throw new Error('You are not authorized to delete this comment');
      }
      await Comment.findByIdAndDelete(id);
      return true;
      },
    loginUser: async (parent, { username, password }) => {
      console.log('Received login request for username:', username);
    
      const user = await User.findOne({ username });
          
      if (!user) {
        console.log('User not found:', username);
        throw new AuthenticationError('User not found');
      }
    
      console.log('User found:', user);
    
      const isPasswordValid = await bcrypt.compare(password, user.password);
    
      if (!isPasswordValid) {
        console.log('Invalid password for user:', username);
        throw new AuthenticationError('Invalid password');
      }
    
      // Create and sign a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h', // Set the token expiration time as needed
      });
    
      console.log('Login successful for user:', username);
    
      return {
        user,
        token,
      };
    }
      
  }
};

module.exports = resolvers;
