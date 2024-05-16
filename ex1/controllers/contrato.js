const Contrato = require('../models/contrato')
//var ObjectId = require('mongoose').Types.ObjectId; 


module.exports.list = () => {
    return Contrato.find().exec()
}


module.exports.findById = id => {
    return Contrato.findOne({idcontrato: id}).exec()
}


module.exports.insert = contrato => {
    return Contrato.create(contrato)
}


module.exports.update = (id,contrato) => {
    return Contrato.findOneAndUpdate({idcontrato: id},contrato,{new : true})
}


module.exports.delete = id => {
    return Contrato.deleteOne({idcontrato: id})
}


module.exports.getContratosByEntidade = entidade => {
    return Contrato.find({entidade_comunicante: entidade}).exec()
}


module.exports.getContratosByNIPC = nipc => {
    return Contrato.find({NIPC_entidade_comunicante: nipc}).exec()
}


module.exports.getContratosByProcedimento = procedimento => {
    return Contrato.find({tipoprocedimento: procedimento}).exec()
}


module.exports.getEntidadesComunicantes = () => {
    return Contrato.aggregate([
        { $group: { _id: "$entidade_comunicante" } },
        { $sort: { "_id": 1 } }
    ])
}


module.exports.getTiposProcedimento = () => {
    return Contrato.aggregate([
        { $group: { _id: "$tipoprocedimento" } },
        { $sort: { "_id": 1 } }
    ])
}