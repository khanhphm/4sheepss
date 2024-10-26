// database.js
import { Sequelize } from 'sequelize';
import path from 'path';

// Khởi tạo Sequelize với SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(process.cwd(), 'database.sqlite') // Đặt đường dẫn cho file SQLite
});

// Kiểm tra kết nối
try {
  await sequelize.authenticate();
  console.log('Kết nối thành công với SQLite');
} catch (error) {
  console.error('Không thể kết nối tới SQLite:', error);
}

export default sequelize;
