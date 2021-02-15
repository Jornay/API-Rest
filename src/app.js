'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router =  express.Router();

//Conecta ao banco de dados
mongoose.connect('mongodb+srv://NodeJs:190581@cluster0.bxkcf.mongodb.net/test')

//Carrega os Models
const Product = require('./models/productModels');

//Carregar Rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/' ,indexRoutes);
app.use('/products' ,productRoutes);



module.exports = app;