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

const getUser = async (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: `Invalid ID` });
    } else {
      return res.status(200).json(user);
    }
  });
};

// @desc CREATE New User
// @route POST /users
// @access PRIVATE

const createUser = async (req, res) => {
  const { username, password, role, active } = req.body;

  // Check for duplicate user
  const foundUser = await User.find({ username }).lean();

  if (foundUser?.length) {
    return res.status(409).json({ message: `Username already in use.` });
  }

  // Check given fields
  if (!username || !password || !role) {
    return res.status(400).json({ message: `All fields are required.` });
  }

  // Hash Password
  const hashedPw = await bcrypt.hash(password, parseInt(process.env.SALT));

  const newUser = await User.create({
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
    return res.status(400).json({ message: `Invalid User Data` });
  }
};

// @desc UPDATE Sepcific User
// @route PATCH /users/:id
// @access PRIVATE

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { ...userData } = req.body;

  // Hash new User Password if Password is being updated
  if (userData.password?.length) {
    userData.password = await bcrypt.hash(
      userData.password,
      parseInt(process.env.SALT)
    );
  }

  // Check for duplicate username
  const username = userData.username;
  const duplicateUser = await User.find({ username }).lean();
  if (duplicateUser?.length) {
    return res.status(409).json({ message: `Username already in use` });
  }

  User.findByIdAndUpdate({ _id: id }, { ...userData }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: `Invalid ID` });
    } else {
      return res.status(200).json({ message: `User with ${id} ID, updated.` });
    }
  });
};

// @desc DELETE Specific User
// @route DELETE /users/:id
// @access PRIVATE

const deleteUser = async (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: `Invalid ID` });
    } else {
      return res.status(200).json({ message: `User ${user.username} deleted` });
    }
  });
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
