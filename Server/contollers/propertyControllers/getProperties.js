const { omit } = require('lodash');
const { getProperties, countProperties } = require('../../services/propertyService');

exports.getPropertiesController = async (req, res, next) => {
  try {
    let { query: filters } = req;
    let result = {};

    if (!filters || filters.all) {
      const totalItems = countProperties();
      properties = await getProperties();

      result.data = properties;
      result.pagination = { totalItems, rowsPerPage: totalItems, currentPage: 1 };
    } else {
      filters.rowsPerPage = filters.rowsPerPage || 5;

      const options = {
        offset: filters.rowsPerPage * (filters.page - 1) || 0,
        limit: filters.rowsPerPage || 5
      }

      const pagination = {
        currentPage: filters.page,
        rowsPerPage: filters.rowsPerPage
      }

      filters  = omit(filters, ['rowsPerPage', 'page']);

      const totalItems = 92 // await countProperties(filters);
      pagination.totalItems = totalItems;
      pagination.lastPage = Math.ceil(totalItems / pagination.rowsPerPage);

      properties = await getProperties(filters, options);
      pagination.currentPageItems = properties.length;

      result = { data: properties, pagination }
    }

    res.send(result);
  } catch (err) {
    next(err);
  }
};
