// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};