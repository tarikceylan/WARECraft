const User = require('../models/User');

// @desc GET All Users
// @route GET /users
// @access PRIVATE

const getAllUsers = async (req, res) => {};

// @desc GET Specific Users
// @route GET /users/:id
// @access PRIVATE

const getUser = async (req, res) => {};

// @desc CREATE New User
// @route POST /users
// @access PRIVATE

const createUser = async (req, res) => {};

// @desc UPDATE Sepcific User
// @route PATCH /users/:id
// @access PRIVATE

const updateUser = async (req, res) => {};

// @desc DELETE Specific User
// @route DELETE /users/:id
// @access PRIVATE

const deleteUser = async (req, res) => {};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
