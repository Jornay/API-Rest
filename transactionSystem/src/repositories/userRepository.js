'use strict'

const User = require('../models/userModels');

exports.create = async(data) =>{
    var user = new User(data);
    await user.save();
}