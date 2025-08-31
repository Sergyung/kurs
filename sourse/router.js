import { Router, urlencoded, static as staticMiddleware } from 'express';
import methodOverride from 'method-override';

import { mainPage, detailPage, setDone } from './controllers/valute.js';

const router = Router();

router.use(staticMiddleware('public'));
router.use(urlencoded({ extended: true }));
router.use(methodOverride('_method'));

router.get('/:id', detailPage);
router.put('/:id', setDone);
router.get('/', mainPage);

export default router;