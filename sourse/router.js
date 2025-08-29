import { Router } from 'express';

import { mainPage, detailPage } from './controllers/valute.js';

const router = Router();

router.get('/:id', detailPage);
router.get('/', mainPage);

export default router;