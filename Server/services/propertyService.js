const { omit, map } = require('lodash');

const {
  bulkCreate,
  create,
  deleteProperty,
  get,
  getAll,
  update
} = require('../repositories/propertyRepository');

exports.createProperty = async (property) => {
  try {
    return create(omit(property, ['id']));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.createMultipleProperties = async (properties) => {
  try {
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

exports.updateProperty = async (property) => {
  try {
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
