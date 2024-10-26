  // routes/habitRoutes.js
  import express from 'express';
  import Habit from '../models/Habit.js';

  const router = express.Router();

  /* API cho Habit */


  // Tạo Habit mới
  router.post('/', async (req, res) => {
    console.log("Received body:", req.body); // Log body nhận được
    try {
      if (!req.body.name || !req.body.frequency || req.body.targetCount == null) {
        console.log(req.body);
        return res.status(400).json({ error: 'Thiếu thông tin cần thiết.' });
      }
      
      const newHabit = await Habit.create(req.body);
      res.redirect('/api/habits'); // Chuyển hướng đến route danh sách thói quen

    } catch (error) {
      console.log(error); // Log chi tiết lỗi
      res.status(500).json({ error: 'Lỗi khi tạo thói quen.' });
    }
});

  // Xóa Habit theo ID
  router.post('/delete/:id', async (req, res) => {
    try {
      const habit = await Habit.findByPk(req.params.id);
      if (!habit) {
        return res.status(404).json({ error: 'Không tìm thấy thói quen.' });
      }
      
      await habit.destroy();

      res.redirect('/api/habits'); // Chuyển hướng đến route danh sách thói quen

    } catch (error) {
      console.error('Lỗi khi xóa thói quen:', error); // Log chi tiết lỗi
      res.status(500).json({ error: 'Lỗi khi xóa thói quen.' });
    }
  });

  // Lấy danh sách thói quen và render
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.findAll();
    res.render('habits', { habits });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách thói quen.' });
  }
});

// Chỉnh sửa thói quen
router.get('/:id/edit', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      res.render('editHabit', { habit });
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thói quen.' });
  }
});

// Cập nhật Habit theo ID
router.post('/update/:id', async (req, res) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    if (habit) {
      await habit.update(req.body);
      res.redirect('/api/habits');
    } else {
      res.status(404).json({ error: 'Không tìm thấy thói quen.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thói quen.' });
  }
});


export default router;
