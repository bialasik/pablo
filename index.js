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

app.engine('html', require('hbs').__express);

app.set('view engine', 'html');
app.set('views', __dirname);

app.disable('x-powered-by');

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get('*', (req, res) => {
  const context = { theme: pablo.theme, content: pablo.content };
  res.render('index', { title: pablo.title, state: JSON.stringify(context) });
});

module.exports = () => app.listen(process.env.PORT || 3000);
