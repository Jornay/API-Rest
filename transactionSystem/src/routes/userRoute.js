'use strict'
const controller = require("../controllers/userController");

const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    return response.send('Testado com sucesso');
})

router.post('/user', controller.post);

module.exports = router