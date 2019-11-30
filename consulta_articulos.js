const procesa_peticion = require("./procesa_peticion");

const consulta_articulos = async(req, res) => {
    try {
        let respuesta_api = await procesa_peticion(req).catch(error => {
            throw error;
        });

        console.log("=======", respuesta_api)

        return res.json(respuesta_api);
    } catch (error) {
        console.error(error);
        return res.json({
            codigo: 400,
            error: error.message || error
        });
    }
}

module.exports = consulta_articulos;