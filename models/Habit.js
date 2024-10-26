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
    defaultValue: 'daily', // Options can include 'daily', 'weekly', 'monthly', etc.
  },
  targetCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // The number of times the target needs to be achieved
  },
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

export default Habit;