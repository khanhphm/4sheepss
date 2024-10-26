// app.js
const sequelize = require('./config/database');
const Habit = require('./models/Habit');
const HabitProgress = require('./models/HabitProgress');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // Đồng bộ cấu trúc bảng với CSDL
    console.log("Database đã được đồng bộ thành công.");
  } catch (error) {
    console.error("Lỗi đồng bộ database:", error);
  }
})();
