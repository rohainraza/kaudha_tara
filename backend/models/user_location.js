module.exports = (sequelize, DataTypes) => {
    const UserLocation = sequelize.define("UserLocation", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    });
  
    return UserLocation;
  };