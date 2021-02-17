'use strict'

const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/customerRepository');


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
        await repository.create(req.body)
        res.status(201).send({message: 'Cliente cadastrado com sucesso'});
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};