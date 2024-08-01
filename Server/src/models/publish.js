const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Publish', {
    idPublish: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    namePublish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task: {
      type: DataTypes.TEXT, // Cambiado a TEXT para permitir cadenas largas
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // Cambiado a TEXT para permitir cadenas largas
      allowNull: true,
    },
    perfil: {
      type: DataTypes.TEXT, // Cambiado a TEXT para permitir cadenas largas
      allowNull: false,
    },
    requirement: {
      type: DataTypes.TEXT, // Cambiado a TEXT para permitir cadenas largas
      allowNull: false,
    },
    offer: {
      type: DataTypes.TEXT, // Cambiado a TEXT para permitir cadenas largas
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, { timestamps: false });
};
