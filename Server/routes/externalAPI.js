import { Router } from 'express';
import { getSourceDataFromAPI } from '../contollers/getSourceData.js';

const router = Router();

router.get('/fromSource', getSourceDataFromAPI);

export default router;