'use strict'

const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/customerRepository');
const md5 = require('md5');

const emailServices = require('../services/emailService');


exports.post  = async(req, res, next) =>{
    
    let contract = new ValidationContract();    
    contract.hasMinLen(req.body.name , 3 , 'Número de caracteres para o nome deve ser maior que 3');
    contract.isEmail(req.body.email  , 'Email inválido');
    contract.hasMinLen(req.body.password , 3 , 'Número de caracteres para a senha deve ser maior que 3');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }


    try{
        await repository.create({
            name    : req.body.name,
            email   : req.body.email,
            password: md5(req.body.password + global.SALT_KEY) //Vai encriptar a senha do usuário
        })
        emailServices.send(
            req.body.email, 
            'Bem vindo ao Node Store',
            global.EMAIL_TMPL.replace('{0}', req.body.name)
        )
        res.status(201).send({message: 'Cliente cadastrado com sucesso'});
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};