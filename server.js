import express from 'express';
import path from 'path';

const app = express();

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// Middleware để sử dụng CSS từ thư mục public
app.use(express.static(path.join(process.cwd(), 'public')));

// Route chính
app.get('/', (req, res) => {
  res.render('index'); // Render file index.ejs
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
