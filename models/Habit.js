// models/Habit.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Habit = sequelize.define('Habit', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'daily', // Các tùy chọn có thể là 'daily', 'weekly', 'monthly', v.v.
  },
  targetCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Số lần cần đạt được mục tiêu
  },
}, {
  timestamps: true, // Tự động tạo trường createdAt và updatedAt
});

export default Habit;
