const request = require("request");
const url_peticion = "https://api.mercadolibre.com/sites/MLM/search?nickname=IBUSHAK+OFICIALES&sort=price_asc";

const procesa_peticion = () => new Promise((resolver, rechazar) => {
    request.get(url_peticion, (error, response, body) => {
        if(error){
            return rechazar(error);
        }

        // console.log("response", response);
        // console.log("BODY", body)
        return resolver(JSON.parse(response.body))
    })
})

module.exports = procesa_peticion;