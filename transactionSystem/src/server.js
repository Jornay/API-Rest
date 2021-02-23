const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const app = express();




mongoose.connect('<Your Connection Mongo>')


app.use(bodyParser.json());

app.use('/',userRoute);

//ABRIR O SERVIDOR WEB (localhost:...)
app.listen(3000, () =>{
    console.log("teste")
})


