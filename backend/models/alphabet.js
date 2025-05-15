'use strict';

module.exports = (sequelize, DataTypes) => {
  const Alphabet = sequelize.define('Alphabet', {
    character: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pronunciation: {
      type: DataTypes.STRING
    },
    audio_url: {
      type: DataTypes.TEXT
    },
    display_order: {
      type: DataTypes.INTEGER
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Alphabet.associate = (models) => {
    Alphabet.belongsTo(models.Language, {
      foreignKey: 'language_id',
      as: 'language'
    });
  };

  return Alphabet;
};