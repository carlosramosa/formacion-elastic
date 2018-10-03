'use strict'; 

const { bodyBulkInsert } = require('./queries');

module.exports = client =>

    client.bulk(
    {
        body: bodyBulkInsert
    }
);
