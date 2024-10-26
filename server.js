import express from 'express';
import path from 'path';
import sequelize from './database.js';
import userRoutes from './routes/userRoutes.js';
import habitRoutes from './routes/habitRoutes.js';
import habitProgressRoutes from './routes/habitProgressRoutes.js'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Cấu hình view engine EJS và thư mục tĩnh
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public'))); // Cấu hình thư mục public
app.use(bodyParser.urlencoded({ extended: true }));

// Route chính và API user
app.get('/', (req, res) => res.render('index'));
app.use('/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/habits', habitProgressRoutes); // Đây là route cho tiến trình, sử dụng prefix /api/habits
// Đồng bộ models với cơ sở dữ liệu
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
});
