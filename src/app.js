const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

//rotas
const index = require('./routes/index');
const planetaRoute = require('./routes/planetaRoute');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());     

app.use('/', index);
app.use('/planetas', planetaRoute);

module.exports = app;