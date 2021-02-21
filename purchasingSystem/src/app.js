'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config  = require('./config');

const app = express();
const router =  express.Router();

//Conecta ao banco de dados
mongoose.connect(config.connectionString)

//Carrega os Models
const Product = require('./models/productModels');
const Customer = require('./models/customerModels');
const Order = require('./models/orderModels')

//Carregar Rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');
const customerRoutes = require('./routes/customerRoute');
const orderRoutes = require('./routes/orderRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/' ,indexRoutes);
app.use('/products' ,productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);


module.exports = app;