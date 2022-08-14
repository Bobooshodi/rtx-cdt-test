import { getListFromAPI } from '../services/externalAPIHandler.js';

export const getSourceDataFromAPI = async (req, res, next) => {
    try {
      // 6. Call handler to response with data
      const data = await getListFromAPI();
      res.send(data);

    } catch (err) {
      next(err);
    }
  }