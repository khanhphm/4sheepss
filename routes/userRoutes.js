import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.render('users', { users });
});

// Create a new user
router.post('/', async (req, res) => {
  const { username, email } = req.body;
  const user = await User.create({ username, email });
  res.redirect('/users');
});

// Update a user
router.put('/:id', async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findByPk(req.params.id);
  await user.update({ username, email });
  res.json(user);
});

// Delete a user
router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.destroy();
  res.json({ message: 'User deleted' });
});

export default router;
