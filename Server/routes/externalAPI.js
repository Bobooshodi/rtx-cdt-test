const { Router } = require('express');
const { getSourceDataFromAPI } = require('../contollers/getSourceData.js');

const router = Router();

router.get('/fromSource', getSourceDataFromAPI);

module.exports = router;