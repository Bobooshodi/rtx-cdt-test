'use strict'

const { Router } = require('express');

// 4. Import routes
const externalAPIRoutes = require('./externalAPI.js');
const { createPropertyController } = require('../contollers/propertyControllers/createProperty.js');
const { getPropertiesController } = require('../contollers/propertyControllers/getProperties.js');
const { createBulkPropertiesController } = require('../contollers/propertyControllers/createBulkProperties.js');

const router = Router({
  caseSensitive: true
})

// 5. Use imported routes in router
router.use('/external', externalAPIRoutes);
router.post('/properties/bulk-create', createBulkPropertiesController);

router.route('/properties')
      .post(createPropertyController)
      .get(getPropertiesController);

module.exports = router;