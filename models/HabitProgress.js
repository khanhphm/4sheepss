// models/HabitProgress.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Habit from './Habit.js'; // Use ES6 import for Habit

const HabitProgress = sequelize.define('HabitProgress', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Number of times completed in a day
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // true if the habit is completed as required for the day
  },
}, {
  timestamps: true,
});

// Define relationships: Each Habit can have many HabitProgress entries
Habit.hasMany(HabitProgress, { foreignKey: 'habitId', onDelete: 'CASCADE' });
HabitProgress.belongsTo(Habit, { foreignKey: 'habitId' });

export default HabitProgress; // Use ES6 export