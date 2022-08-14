'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsTo(models.Property);
    }
  }
  Location.init(
    {
      country: DataTypes.STRING,
      address: DataTypes.STRING,
      latLng: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Location',
      underscored: true,
      tableName: 'locations',
    }
  );
  return Location;
};
