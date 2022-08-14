'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.hasOne(models.Location, { onDelete: 'CASCADE' });
      Property.hasOne(models.ReviewSummary, { onDelete: 'CASCADE' });
    }
  }
  Property.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Property',
      underscored: true,
      tableName: 'properties',
    }
  );
  return Property;
};
