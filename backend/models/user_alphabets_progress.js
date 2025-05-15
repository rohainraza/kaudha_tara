'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserAlphabetProgress = sequelize.define('UserAlphabetProgress', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alphabet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_learned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    attempts: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    last_reviewed: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'user_alphabet_progress',
    timestamps: true  // createdAt and updatedAt
  });

  UserAlphabetProgress.associate = (models) => {
    UserAlphabetProgress.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    UserAlphabetProgress.belongsTo(models.Alphabet, {
      foreignKey: 'alphabet_id',
      as: 'alphabet'
    });
  };

  return UserAlphabetProgress;
};