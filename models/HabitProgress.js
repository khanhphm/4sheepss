// models/HabitProgress.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Habit = require('./Habit');

const HabitProgress = sequelize.define('HabitProgress', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Số lần hoàn thành trong ngày
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // true nếu thói quen đã hoàn thành theo yêu cầu trong ngày
  },
}, {
  timestamps: true,
});

// Định nghĩa quan hệ: Mỗi Habit có nhiều HabitProgress
Habit.hasMany(HabitProgress, { foreignKey: 'habitId', onDelete: 'CASCADE' });
HabitProgress.belongsTo(Habit, { foreignKey: 'habitId' });

module.exports = HabitProgress;
