const jwt = require("jsonwebtoken")
const databaseController = require("../controllers/databaseController")
const config = require("../config/main.config")

class user {
    constructor(){
        this.dbController = new databaseController
    }

    async login(informacion){
        let usuario = informacion.usuario;
        let password = informacion.password;
    
        let query = `SELECT * FROM login WHERE id_user = '${usuario}' and password = '${password}'`;//poner el md5
        let respuesta = await this.dbController.ejecutarSql(query);
        return respuesta.rows[0]
    }

    crearToken(informacion){
        let options = {expiresIn: 300};
        return jwt.sign(informacion, config.SECRET_KEY, options);
    }

    validarToken(token){
        return jwt.verify(token, config.SECRET_KEY);
    }
}

module.exports = user;

