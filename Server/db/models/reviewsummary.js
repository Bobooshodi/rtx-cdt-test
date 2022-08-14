'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewSummary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReviewSummary.belongsTo(models.Property);
    }
  }
  ReviewSummary.init(
    {
      score: DataTypes.INTEGER,
      scoreDescription: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ReviewSummary',
      underscored: true,
      tableName: 'reviews_summaries',
    }
  );
  return ReviewSummary;
};
