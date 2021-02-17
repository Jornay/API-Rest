'use strict'

const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');


router.post('/' , order.post);
router.get('/' , order.get);



module.exports = router