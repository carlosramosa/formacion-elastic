'use strict';

const pokemon = require('../pokemon.json');

const bodyBulkInsert =
    pokemon.reduce((acc, item, i) => {

        const obj = { index:  { _index: 'pokemon', _type: 'pokemon', _id: i + 1 } };
        return acc.concat([obj, item]);
    }, []);

module.exports = {
    bodyBulkInsert
};
