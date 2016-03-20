'use strict';

const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');

const app = module.exports = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use('/assets', express.static(`${__dirname}/dist/assets`));

app.disable('x-powered-by');

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get('*', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(process.env.PORT || 3000);
