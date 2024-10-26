import express from 'express';

const router = express.Router();

// Định nghĩa các route
router.get('/', (req, res) => {
    res.redirect('/habit'); // Redirect về trang Habit
});

router.get('/habit', (req, res) => {
    res.render('habit');
});

router.get('/analysis', (req, res) => {
    res.render('analysis');
});

router.get('/about', (req, res) => {
    res.render('about');
});

export default router;
