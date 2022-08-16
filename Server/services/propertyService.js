const {
  bulkCreate,
  create,
  deleteProperty,
  get,
  getAll,
  update,
  count
} = require('../repositories/propertyRepository');

exports.createProperty = async (property) => {
  try {
    const newProperty = await create(property);
    return this.getProperty(newProperty.dataValues.uuid);
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

exports.getProperties = async (filters = {}, options = {}) => {
  try {
    return await getAll({
      where: filters,
      attributes: { exclude: ['id'] },
      include: { all: true },
      ...options
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.updateProperty = async (property) => {
  try {
    return update(property, { where: { uuid: property.uuid }, returning: true });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.deleteWithUUID = async (uuid) => {
  try {
    return deleteProperty({ where: { uuid } });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.countProperties = async (filters = {}) => {
  try {
    return count(filters);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
