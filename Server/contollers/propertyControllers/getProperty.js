const { omit } = require('lodash');
const { getProperty } = require('../../services/propertyService');

exports.getPropertyController = async (req, res, next) => {
  try {
    let { params } = req;

    const property = await getProperty(params.id);
    
    res.send(property);
  } catch (err) {
    next(err);
  }
};
