const { updateProperty, getProperty } = require('../../services/propertyService');

exports.updatePropertyController = async (req, res, next) => {
  try {
    const { body: data, params } = req;

    data.uuid = data.uuid || params.id;

    await updateProperty(data);
    const updatedProperty = await getProperty(data.uuid);
    res.send(updatedProperty);
  } catch (err) {
    next(err);
  }
};
