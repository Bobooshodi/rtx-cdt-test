const { getProperties } = require('../../services/propertyService');

exports.getPropertiesController = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const property = await getProperties();
    res.send(property);
  } catch (err) {
    next(err);
  }
};
