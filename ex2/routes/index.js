var express = require('express');
var router = express.Router();
var axios = require('axios')


// GET PAGINA INICIAL
router.get('/', function(req, res, next){
    axios.get('http://localhost:16000/contratos')
        .then(response => res.status(201).render('index',{
            'title': 'Lista de Contratos',
            'contratos': response.data,
            'data': new Date().toLocaleString()}))
        .catch(error => res.status(501).render('error',{'error': error}))
});


// GET PAGINA DO CONTRATO
router.get('/:id', function(req, res, next){
    axios.get('http://localhost:16000/contratos/' + req.params.id)
        .then(response => res.status(201).render('contrato',{
            'title': 'Lista de Contratos',
            'contrato': response.data,
            'voltar': '/',
            'data': new Date().toLocaleString()}))
        .catch(error => res.status(501).render('error',{'error': error}))
});


// GET PAGINA DA ENTIDADE
router.get('/entidades/:nipc', function(req, res, next){
    axios.get('http://localhost:16000/contratos?nipc=' + req.params.nipc)
        .then(response => {

            let sum = 0;
            response.data.forEach(element => sum += element.precoContratual)

            res.status(201).render('entidade',{
                'title': 'Contratos da Entidade',
                'contratos': response.data,
                'entidade': response.data[0].entidade_comunicante,
                'nipc': req.params.nipc,
                'sum': sum,
                'voltar': '/',
                'data': new Date().toLocaleString()})
        })
        .catch(error => res.status(501).render('error',{'error': error}))
});


module.exports = router;