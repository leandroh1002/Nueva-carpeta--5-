const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('People', {
    idPeople: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutMe: {
      type: DataTypes.STRING,
      allowNull: true,  // No obligatorio
    },
    typeOfPerson: {
      type: DataTypes.ENUM('Alumno', 'Admin'),
      allowNull: true,  // No obligatorio
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,  // No obligatorio
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,  // No obligatorio
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,  // No obligatorio
    },
  }, { timestamps: false });
};
