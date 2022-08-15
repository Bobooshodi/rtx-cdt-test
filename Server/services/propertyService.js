const { omit, map } = require('lodash');

const {
  bulkCreate,
  create,
  deleteProperty,
  get,
  getAll,
  update
} = require('../repositories/propertyRepository');

exports.createProperty = async (data) => {
  try {
    const property = {
      ...data,
      image: data.heroImage.url,
      reviewSummary: data.reviews.summary,
    };

    return create(omit(property, ['id']));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.createMultipleProperties = async (data) => {
  try {
    const properties = data.map((property) => ({
      ...property,
      image: property.heroImage.url,
      ReviewSummary: property.reviews.summary,
    }));
    return bulkCreate(properties);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.getProperty = async (uuid) => {
  try {
    return await get({
      where: { uuid },
      attributes: { exclude: ['id'] },
      include: { all: true }
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.getProperties = async (filters = {}) => {
  try {
    return await getAll({
      where: filters,
      attributes: { exclude: ['id'] },
      include: { all: true }
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.updateProperty = async (data) => {
  try {
    const property = {
      ...data,
      image: data.heroImage.url,
      ReviewSummary: data.reviews.summary,
    };

    return update(property, { where: { uuid: property.uuid } });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.deleteProperty = async (uuid) => {
  try {
    return deleteProperty({ where: { uuid } });
  } catch (e) {
    console.error(e);
    throw e;
  }
};
