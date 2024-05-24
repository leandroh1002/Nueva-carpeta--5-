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
      allowNull: false,
    },
    typeOfPerson: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  } , { timestamps: false });
};