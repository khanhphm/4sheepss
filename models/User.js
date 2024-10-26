// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  // Cấu hình khác (tùy chọn)
  tableName: 'users',
  timestamps: true, // Để tự động tạo createdAt và updatedAt
});

export default User;
