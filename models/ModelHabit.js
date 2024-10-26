// models/Habit.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
    defaultValue: 'daily', // daily, weekly, monthly, etc.
  },
  targetCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Số lần cần đạt được mục tiêu
  },
}, {
  timestamps: true, // tự động tạo createdAt và updatedAt
});

module.exports = Habit;
