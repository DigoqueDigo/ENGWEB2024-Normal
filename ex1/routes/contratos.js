var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');


// GET PAGINA INICIAL
router.get('/', function(req, res, next){

    if (req.query.entidade){
        Contrato.getContratosByEntidade(req.query.entidade)
            .then(response => res.status(201).jsonp(response))
            .catch(error => res.status(501).render('error',{'error': error}))
    }

    else if (req.query.tipo){
        Contrato.getContratosByProcedimento(req.query.tipo)
            .then(response => res.status(201).jsonp(response))
            .catch(error => res.status(501).render('error',{'error': error}))
    }

    else if (req.query.nipc){
        Contrato.getContratosByNIPC(req.query.nipc)
            .then(response => res.status(201).jsonp(response))
            .catch(error => res.status(501).render('error',{'error': error}))
    }

    else{
        Contrato.list()
            .then(response => res.status(201).jsonp(response))
            .catch(error => res.status(501).render('error',{'error': error}))
    }
});


// GET PAGINA DAS ENTIDADES
router.get('/entidades', function(req, res, next){
    Contrato.getEntidadesComunicantes()
        .then(response => res.status(202).jsonp(response))
        .catch(error => res.status(502).render('error',{'error': error}))
});


// GET PAGINA DOS TIPOS
router.get('/tipos', function(req, res, next){
    Contrato.getTiposProcedimento()
        .then(response => res.status(202).jsonp(response))
        .catch(error => res.status(502).render('error',{'error': error}))
});


// GET PAGINA DO CONTRATO
router.get('/:id', function(req, res, next){
    Contrato.findById(req.params.id)
        .then(response => res.status(202).jsonp(response))
        .catch(error => res.status(502).render('error',{'error': error}))
});


router.post('/', function(req, res, next){
    Contrato.insert(req.body)
        .then(response => res.status(203).jsonp(response))
        .catch(error => res.status(503).render('error',{'error': error}))
});


router.put('/:id', function(req, res, next){
    Contrato.update(req.params.id,req.body)
        .then(response => res.status(204).end())
        .catch(error => res.status(504).render('error',{'error': error}))
});


router.delete('/:id', function(req, res, next){
    Contrato.delete(req.params.id)
        .then(response => res.status(205).end())
        .catch(error => res.status(505).render('error',{'error': error}))
});


module.exports = router;