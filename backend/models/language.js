'use strict';

module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Language.associate = (models) => {
    Language.hasMany(models.Alphabet, {
      foreignKey: 'language_id',
      as: 'alphabets'
    });
  };

  return Language;
};