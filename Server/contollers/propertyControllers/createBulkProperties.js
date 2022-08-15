const { createMultipleProperties } = require('../../services/propertyService');

exports.createBulkPropertiesController = async (req, res, next) => {
  try {
    const data = req.body;
    const properties = await createMultipleProperties(data);
    res.send(properties);
  } catch (err) {
    next(err);
  }
};
