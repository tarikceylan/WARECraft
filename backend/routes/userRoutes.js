const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');
const { authAdmin, authEmployee } = require('../middleware/auth');

router.use(authEmployee);

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser);

router.use(authAdmin);

router.route('/').post(createUser);
router.route('/:id').patch(updateUser).delete(deleteUser);

module.exports = router;
