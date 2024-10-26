// routes/habitProgressRoutes.js
import express from 'express';
import Habit from '../models/Habit.js';
import HabitProgress from '../models/HabitProgress.js';

const router = express.Router();

/* API cho HabitProgress */

// Lấy tiến trình của một Habit
router.get('/:id/progress', async (req, res) => {
  try {
    const habitProgress = await HabitProgress.findAll({ where: { habitId: req.params.id } });
    res.json(habitProgress);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy tiến trình thói quen.' });
  }
});

// Tạo tiến trình mới cho một Habit
router.post('/:id/progress', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      const newProgress = await HabitProgress.create({ ...req.body, habitId: req.params.id });
      res.status(201).json(newProgress);
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tạo tiến trình thói quen.' });
  }
});

// Cập nhật tiến trình của Habit
router.put('/:id/progress/:progressId', async (req, res) => {
  try {
    const progress = await HabitProgress.findByPk(req.params.progressId);
    if (progress) {
      await progress.update(req.body);
      res.json(progress);
    } else {
      res.status(404).json({ error: 'Không tìm thấy tiến trình thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật tiến trình thói quen.' });
  }
});

// Xóa tiến trình của Habit
router.delete('/:id/progress/:progressId', async (req, res) => {
  try {
    const progress = await HabitProgress.findByPk(req.params.progressId);
    if (progress) {
      await progress.destroy();
      res.json({ message: 'Tiến trình thói quen đã được xóa thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy tiến trình thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa tiến trình thói quen.' });
  }
});

export default router;
