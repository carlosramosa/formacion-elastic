'use strict';

const elasticsearch = require('elasticsearch');
const insertar = require('./insertar');
const crearIndice = require('./crearIndice');

const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

const inicializar = () =>
    crearIndice(client)
        .then(() => {
            console.log('################################\nÍNDICE CREADO CON ÉXITO\n################################');
            return insertar(client);
        })
        .then(() =>
            console.log('##############################\nPOKEMONS INSERTADOS CON ÉXITO\n#############################')
        )
        .catch( e =>
            console.log(e)
        );

module.exports.inicializar = inicializar;
