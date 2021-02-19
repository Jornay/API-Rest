'use strict'

const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.acessKeySendGrid);

exports.send = async(to, subject, body) => {
  const msg = {
    to: to, // Change to your recipient
    from: 'lucasdeafg2@gmail.com', // Change to your verified sender
    subject: subject,
    html: body
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email Enviado')
    })
    .catch((error) => {
      console.error(error)
    });
};