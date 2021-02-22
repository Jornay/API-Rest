'use strict'

const repository = require('../repositories/userRepository');

exports.post = async(req,res,next) => {

    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            CPF : req.body.cpf,
        })
        req.status(201).send({messege: 'Usuário criado com sucesso.'});
    }
    catch(e){
        res.status(501).send({
            messege: 'Falha ao criar o Usuário...'
        });
    }
};