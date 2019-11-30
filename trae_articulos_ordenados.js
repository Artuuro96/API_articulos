const request = require("request");

const procesa_peticion = (offset) => new Promise((resolver, rechazar) => {
    let url_peticion = `https://api.mercadolibre.com/sites/MLM/search?nickname=IBUSHAK+OFICIALES&sort=price_asc&search_type=scan&offset=${offset}`
    request.get(url_peticion, (error, response, body) => {
        if(error){
            return rechazar(error);
        }

        if(response.statusCode != 200)
            return rechazar("Algo salió mal al hacer la petición a la API de mercado libre");
        // console.log("response", response);
        // console.log("BODY", body)
        return resolver(JSON.parse(response.body));
    })
})

module.exports = procesa_peticion;