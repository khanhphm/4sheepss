// routes/habitRoutes.js
import express from 'express';
import Habit from '../models/Habit.js';
import HabitProgress from '../models/HabitProgress.js';

const router = express.Router();

/* API cho Habit */

// Lấy danh sách tất cả Habit
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.findAll();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách thói quen.' });
  }
});

// Tạo Habit mới
router.post('/', async (req, res) => {
  try {
    const newHabit = await Habit.create(req.body);
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tạo thói quen.' });
  }
});

// Lấy thông tin Habit theo ID
router.get('/:id', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      res.json(habit);
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thói quen.' });
  }
});

// Cập nhật Habit theo ID
router.put('/:id', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      await habit.update(req.body);
      res.json(habit);
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thói quen.' });
  }
});

// Xóa Habit theo ID
router.delete('/:id', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      await habit.destroy();
      res.json({ message: 'Thói quen đã được xóa thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa thói quen.' });
  }
});

export default router;
