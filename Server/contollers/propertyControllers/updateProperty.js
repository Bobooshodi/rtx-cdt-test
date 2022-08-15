const { updateProperty, getProperty } = require('../../services/propertyService');

exports.updatePropertyController = async (req, res, next) => {
  try {
    const data = req.body;

    await updateProperty(data);
    res.send(getProperty(data.uuid));
  } catch (err) {
    next(err);
  }
};
