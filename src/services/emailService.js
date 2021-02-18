'use strict'

var config = require('../config');
var sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(config.sendgridKey);


exports.send = async (to, subject, body) => {
    let teste = {
        to : to,
        from : 'lucasdeafg@yahoo.com.br',
        subject: subject,
        html: body
    }
    sendgrid.send(teste);
}
