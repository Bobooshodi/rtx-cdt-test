const { deleteWithUUID } = require('../../services/propertyService');

exports.deletePropertyController = async (req, res, next) => {
  try {
    let { params } = req;

    const opRes = await deleteWithUUID(params.id);
    
    res.send(opRes === 1);
  } catch (err) {
    next(err);
  }
};
