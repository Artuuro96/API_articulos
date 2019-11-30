const procesa_informacion = respuesta_api => {
    return respuesta_api.results.map(articulo => {
        return {
            seller_id: articulo.seller.id,
            seller_name: articulo.seller.nickname,
            marca: obtener_marca(articulo.attributes),
            envio_gratis: articulo.shipping.free_shipping,
            tipo_logistica: articulo.shipping.logistic_type,
            condicion_articulo: articulo.condition,
            lugar_operacion: articulo.seller_address.state.name,
            rango_precios: obtener_rango(respuesta_api, articulo.price),
            precio: articulo.price
        }
    });
}

const obtener_marca = atributos => {
    var marca = null;
    atributos.forEach(atributo => {
        if(atributo.name == "Marca"){
            marca = atributo.value_name;
        }
    });
    return marca;
}

const obtener_rango = (respuesta_api, precio_articulo) => {
    let filtros = respuesta_api.available_filters;
    let valores = filtros.find(filtro => {
        return filtro.id == "price"
    });
    var rango = null;

    for (let i = 0; i < valores.values.length; i++) {
        let limite_precio = 0;

        if(i == 0){
            if(precio_articulo < Number(valores.values[i].id.replace("*-", ""))){
                rango = valores.values[i].name;
                break;
            }
        }

        if(i == 1){
            limite_precio = valores.values[i].id.split("-");
    
            if(precio_articulo >= Number(limite_precio[0]) && precio_articulo < Number(limite_precio[1])){
                rango = valores.values[i].name;
                break;
            }
        }
        
        if(i == 2) {
            if(precio_articulo >= Number(valores.values[i].id.replace("-*", ""))){
                rango = valores.values[i].name;
                break;
            }
        }
    }

    return rango;
}

module.exports = procesa_informacion;