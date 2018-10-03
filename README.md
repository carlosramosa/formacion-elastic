
# PASO 1

Levantamos Cerebro y Elastic Search

```docker
docker-compose -d
```

# PASO 2

Nos dirigimos a nuestro navegador favorito e introducimos la siguiente URL:
```
http://localhost:9000
```

A continuación, introducimos la siguiente URL en el apartado Node address:
```
http://elasticsearch:9200
```

# PASO 3

Ejecutamos la siguiente instrucción para lanzar un script que genere un índice y lo rellene con documentos:
```
npm run inicializarElastic
```