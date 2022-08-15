const { getListFromAPI } = require('../services/externalAPIHandler');
const { createMultipleProperties } = require('../services/propertyService');

exports.seedDatabaseFromAPI = async () => {
  try {
    const res = await getListFromAPI();
    const properties = [];

    for (let i = 0; i < res.outlets.availability.results.length; i++) {
      const data = res.outlets.availability.results[i];

      const newProperty = {
        name: data.property.name,
        image: data.property.heroImage?.url,
        Location: data.property.location,
        ReviewSummary: {
          score: data.property.reviews?.summary?.score,
          scoreDescription: data.property.reviews?.summary?.scoreDescription,
          text: data.property.reviews?.summary?.text,
        },
      }

      properties.push(newProperty);
    }

    await createMultipleProperties(properties);

    return true;
  } catch (e) {
    console.error('Unable to Seed Database: ', e);
    return false;
  }
};
