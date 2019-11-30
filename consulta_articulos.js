const trae_articulos_ordenados = require("./trae_articulos_ordenados");
const procesa_informacion = require("./procesa_informacion");

const consulta_articulos = async(req, res) => {
    try {
        let datos = [];
        let offset = 0;
    
        do {
            console.log("OFFSET", offset);
            
            let respuesta_api = await trae_articulos_ordenados(offset).catch(error => {
                throw error;
            });

            let nuevos_datos = procesa_informacion(respuesta_api);

            datos = datos.concat(nuevos_datos)

            offset = offset + 50;
            
        } while (offset < 1000);

        console.log("Numero de datos", datos.length)

        return res.json({
            codigo: 200,
            datos
        });

    } catch (error) {
        console.error(error);
        return res.json({
            codigo: 400,
            error: error.message || error
        });
    }
}

module.exports = consulta_articulos;