'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router =  express.Router();

//Carregar Rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/' ,indexRoutes);
app.use('/products' ,productRoutes);



module.exports = app;