'use strict'

import { Router } from 'express';

// 4. Import routes
import externalAPIRoutes from './externalAPI.js';

const router = Router({
  caseSensitive: true
})

// 5. Use imported routes in router
router.use('/api', externalAPIRoutes);

export default router;