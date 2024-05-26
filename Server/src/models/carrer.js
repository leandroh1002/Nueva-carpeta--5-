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
      type: DataTypes.ENUM('Economia y Administracion', 'Ciencias de la salud', 'Ingenieria', 'Humanidades', 'Ciencias Juridicas, Politicas y sociales'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  } , { timestamps: false });
};