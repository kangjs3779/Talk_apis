const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Test = sequelize.define('Test', {
  TestId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Title: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  Content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Test',
  timestamps: false // 만약 createdAt, updatedAt 컬럼이 없다면
});

module.exports = Test;
