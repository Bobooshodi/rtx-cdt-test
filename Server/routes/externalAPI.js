const { Router } = require('express');
const { getSourceDataFromAPI } = require('../contollers/getSourceData.js');

const router = Router();

router.get('/from-source', getSourceDataFromAPI);

module.exports = router;