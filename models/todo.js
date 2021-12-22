const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class todo extends Model {}

todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
 
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = todo;