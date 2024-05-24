const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Publish', {
    idPublish: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    perfil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requirement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  } , { timestamps: false });
};