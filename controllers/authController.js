const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const getUserByEmail = require('../utils/getUserByEmail');
const sendResponse = require('../utils/sendResponse');
const hashPassword = require('../utils/hashPassword');
const comparePassword = require('../utils/comparePassword');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existing = await getUserByEmail(email);
    if (existing)
      return res.status(400).json({ message: 'Email already registered' });

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken(newUser);

    // Send response
    sendResponse(res, 201, newUser, token);
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existing = await getUserByEmail(email);
    if (!existing)
      return res.status(400).json({ message: 'Invalid email or password' });

    // Compare password
    const isMatch = await comparePassword(password, existing.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    // Generate JWT
    const token = generateToken(existing);

    // Send response
    sendResponse(res, 200, existing, token);
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
