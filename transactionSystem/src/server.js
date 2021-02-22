const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./routes/userRoute');
const app = express();




mongoose.connect('mongodb+srv://omnistechDB:190581@cluster0.ccswx.mongodb.net/test')

app.set(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const router = express.Router();


const route = router.get('/', (request, response) => {
    return response.send('Testado com sucesso');
})

app.use('/',route);
app.use('/user', userModel());


