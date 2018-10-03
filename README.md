
# PASO 1

DIRECCIÓN DE CEREBRO
http://localhost:9000

DIRECCIÓN DE ELASTIC SEARCH
http://elasticsearch:9200

# PASO 2

Ahora vamos a hacer un volcado de datos en nuestro elastic. 
Para ello, primero, vamos a generar un mapping:
```json
PUT pokemon
{
    "settings" : {
        "number_of_shards" : 1
    },
    "mappings": {
        "doc": {
            "properties": {
                "id": {"type": "integer"},
                "identifier": {"type": "keyword"},
                "species_id": {"type": "integer"},
                "height": {"type": "integer"},
                "weight": {"type": "integer"},
                "base_experience": {"type": "integer"},
                "order": {"type": "integer"},
                "is_default": {"type": "integer"}
            }
        }
    }
}
```