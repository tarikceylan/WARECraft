const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
  const { username, password } = req.body;

  // Check Fields
  if (!username || !password) {
    return res.status(400).json({ message: `All fields are required` });
  }

  const foundUser = await User.findOne({ username }).exec();

  // Check user status
  if (!foundUser || !foundUser.active) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  // Verify password
  const verifiedPw = await bcrypt.compare(password, foundUser.password);
  if (!verifiedPw) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  // Sign Access Token
  const accessToken = jwt.sign(
    {
      UserInfo: { username: foundUser.username, roles: foundUser.role },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );

  // Sign Refresh Token
  const refreshToken = jwt.sign(
    { username: foundUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );

  // Place Refresh Token in a secure cookie
  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
};

const userLogout = async (req, res) => {};

module.exports = { userLogin, userLogout };
