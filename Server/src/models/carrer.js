const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Carrer', {
    idCarrer: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  } , { timestamps: false });
};