// app.js
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import habitRoutes from './routes/habitRoutes.js';
import habitProgressRoutes from './routes/habitProgressRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Đồng bộ database
sequelize.sync().then(() => {
  console.log("Database đã được đồng bộ.");
}).catch(err => console.error("Lỗi đồng bộ database:", err));

// Sử dụng các route
app.use('/api/habits', habitRoutes);
app.use('/api/habits', habitProgressRoutes); // Đây là route cho tiến trình, sử dụng prefix /api/habits

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
