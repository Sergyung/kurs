import express from 'express';
import { config } from 'dotenv';

import './sourse/models/__loaddatabase.js';
import router from './sourse/router.js';

config();

const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './sourse/templates');

app.use('/', router);

app.listen(port, () => { console.log('server started')});