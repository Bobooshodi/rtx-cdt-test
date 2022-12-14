const { createProperty } = require('../../services/propertyService');

exports.createPropertyController = async (req, res, next) => {
  try {
    const data = req.body;
    const property = await createProperty(data);
    res.send(property);
  } catch (err) {
    next(err);
  }
};
