const { getListFromAPI } = require('../services/externalAPIHandler.js');

exports.getSourceDataFromAPI = async (req, res, next) => {
    try {
      // 6. Call handler to response with data
      const data = await getListFromAPI();
      res.send(data);

    } catch (err) {
      next(err);
    }
  }