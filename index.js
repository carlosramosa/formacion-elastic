'use strict';


const { inicializar } = require('./elastic');

inicializar()
    .then(() =>
        process.exit(0)
    );