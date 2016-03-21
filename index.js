'use strict';

const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');

const pablo = require('./pablo.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use('/public', express.static(`${__dirname}/dist/public`));
app.use('/theme', express.static(`${pablo.absolute}/theme`));

app.disable('x-powered-by');

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get('*', (req, res) => res.sendFile(`${__dirname}/index.html`));

module.exports = {
  start: () => {
    app.listen(process.env.PORT || 3000);
  }
};
