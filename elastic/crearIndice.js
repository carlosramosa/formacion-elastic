'use strict';


module.exports = client =>
    client.indices.create({
        index: "pokemon",
        body: {
            "mappings": {
                "pokemon": {
                    'properties': {
                        'id': {'type': 'integer'},
                        'identifier': {'type': 'keyword'},
                        'species_id': {'type': 'integer'},
                        'height': {'type': 'integer'},
                        'weight': {'type': 'integer'},
                        'base_experience': {'type': 'integer'},
                        'order': {'type': 'integer'},
                        'is_default': {'type': 'integer'}
                    }
                }
            }
        }
    });