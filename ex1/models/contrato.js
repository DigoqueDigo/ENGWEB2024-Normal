const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContratoSchema = new Schema({
    idcontrato: String,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
}, {versionKey: false});


module.exports = mongoose.model('contratos', ContratoSchema);
