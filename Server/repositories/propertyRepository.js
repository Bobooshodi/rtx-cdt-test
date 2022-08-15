const { omit } = require('lodash');
const { Op } = require('sequelize');
const { Location, Property, ReviewSummary } = require('../db/models');

const associatedModels = [
  {
    name: 'Location',
    model: Location
  },
  {
    name: 'ReviewSummary',
    model: ReviewSummary
  }
]

exports.create = async (property) => {
  try {
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
    options = makeQueryOptions(options);

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
  let options = makeQueryOptions({
    where: filters
  });

  return Property.count(options);
}

const makeQueryOptions = (options) => {
  try {
    for(const [key, value] of Object.entries(options.where)) {
      if (typeof value === 'object') {
        if (key.includes('.')) {
          const associationDetails = key.split('.');
          const associatedModel = associatedModels.find((model) => model.name === associationDetails[0])

          switch (true) {
            case value.hasOwnProperty('exists'):
              options.include = { 
                model: associatedModel.model,
                where: { [associationDetails[1]]: value.exists === true || value.exists === 'true' ? { [Op.not]: null } : { [Op.is]: null } }
              }

              // Add other cases E.g. gt, lt, gte, tec.
            default:
              options.include = options.include;
          }
        } else {
          if (value.hasOwnProperty('exists')) {
            options.where = { ...options.where, [key]: value.exists ? { [Op.not]: null } : { [Op.is]: null }
          }
          // Add other Cases E.g. gt, lt, gte, tec.
        }
        }

        options.where = omit(options.where, key);
      }
    }

    return options;
  } catch (e) {
    console.error(e);

    throw e;
  }
}
