'use strict'

const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/orderRepository');
const guid = require('guid');

exports.post  = async(req, res, next) =>{
    
    let data = {
        customer: '',
        number: '',
        items: []
    }
    data.number = guid.raw().substring(0,6);

    try{
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0,6),
            items: req.body.items,
        });
        res.status(201).send({message: 'Pedido cadastrado com sucesso'});
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar seu Pedido'
        });
    }
};



exports.get = async(req, res, next) => {
    

    try {
         var data = await repository.get();
         res.status(200).send(data);
     }
     catch(e){
         res.status(500).send({
             message: 'Falha ao processar sua requisição'
         });
     };
     
 }
 