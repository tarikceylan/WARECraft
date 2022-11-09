const User = require('../models/User');
const bcrypt = require('bcrypt');

// @desc GET All Users
// @route GET /users
// @access PRIVATE

const getAllUsers = async (req, res) => {
  const userList = await User.find().select('-password').lean();
  if (!userList?.length) {
    return res
      .status(400)
      .json({ message: `There are no users in the system` });
  }
  return res.status(200).json(userList);
};

// @desc GET Specific Users
// @route GET /users/:id
// @access PRIVATE

const getUser = async (req, res) => {};

// @desc CREATE New User
// @route POST /users
// @access PRIVATE

const createUser = async (req, res) => {
  const { username, password, role, active } = req.body;

  // Check for duplicate user
  const foundUser = await User.find({ username }).lean();

  if (foundUser?.length) {
    return res.status(409).json({ message: 'User exists' });
  }

  // Check given fields
  if (!username || !password || !role) {
    return res.status(400).json({ message: `All fields are required.` });
  }

  // Hash Password
  const hashedPw = await bcrypt.hash(password, parseInt(process.env.SALT));

  const newUser = User.create({
    username,
    password: hashedPw,
    role,
    active,
  });

  if (newUser) {
    return res
      .status(201)
      .json({ message: `User created. Username: ${username}` });
  } else {
    return res.status(400).json({ message: `Invalid user data` });
  }
};

// @desc UPDATE Sepcific User
// @route PATCH /users/:id
// @access PRIVATE

const updateUser = async (req, res) => {};

// @desc DELETE Specific User
// @route DELETE /users/:id
// @access PRIVATE

const deleteUser = async (req, res) => {};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
