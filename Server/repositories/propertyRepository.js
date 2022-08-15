const { Location, Property, ReviewSummary } = require('../db/models');

exports.create = async (property) => {
  try {
    console.log(property);
    const newProperty = await Property.create(property);

    if (property.Location) {
      await newProperty.createLocation(property.location);
    }

    if (property.ReviewSummary) {
      await newProperty.createReviewSummary(property.reviewSummary);
    }

    return newProperty;
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.bulkCreate = async (properties) => {
  try {
    console.log(properties);
    const newProperties = await Property.bulkCreate(properties, {
      include: [
        {
          model: Location,
        },
        {
          model: ReviewSummary,
        },
      ],
    });

    return this.getAll({
      where: { id: newProperties.map((property) => property.id) },
      attributes: { exclude: ['id'] },
      include: { all: true },
    });
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.getAll = async (options = {}) => {
  try {
    return Property.findAll(options);
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.get = async (options) => {
  try {
    return Property.findOne(options);
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.update = async (data, options) => {
  try {
    return Property.update(data, options);
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.deleteProperty = async (options) => {
  try {
    return Property.update(options);
  } catch (e) {
    console.error(e);

    throw e;
  }
};

exports.count = async (filters = {}) => {
  return Property.count({
    where: filters
  });
}
