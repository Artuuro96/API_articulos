# API_articulos

Servicio para consultar el top 1000 de articulos con menor precio. En este caso la empresa que fue tomada para la consulta de este servicio es Ibushak, pero se puede cambiar desde la url de la api que consulta en mercado libre

## Inicio
Para arrancar el servicio basta con teclear el siguiente comando en la ubicación del achivo index.js
```bash
node index.js
```
Esto arrancará el servidor en su máquina en el puerto 3000

## Uso

Hacer una peticion GET a la url

```
http://localhost:3000/api/consultar/articulos
```

## Respuesta

```
"codigo": 200,
"datos": [
    {
        "seller_id": 154901871,
        "seller_name": "IBUSHAK OFICIALES",
        "marca": "Battery Master",
        "envio_gratis": false,
        "tipo_logistica": "drop_off",
        "condicion_articulo": "new",
        "lugar_operacion": "Estado De México",
        "rango_precios": "Hasta $200"
    },
    {
        "seller_id": 154901871,
        "seller_name": "IBUSHAK OFICIALES",
        "marca": "Argos",
        "envio_gratis": false,
        "tipo_logistica": "drop_off",
        "condicion_articulo": "new",
        "lugar_operacion": "Estado De México",
        "rango_precios": "Hasta $200"
    },
    .
    .
    .
    {
        "seller_id": 154901871,
        "seller_name": "IBUSHAK OFICIALES",
        "marca": "Ibushak-Igoto",
        "envio_gratis": false,
        "tipo_logistica": "fulfillment",
        "condicion_articulo": "new",
        "lugar_operacion": "Estado De México",
        "rango_precios": "Hasta $200"
    }
]
```



