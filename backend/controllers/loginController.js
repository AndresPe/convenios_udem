const jwt = require("jsonwebtoken")
const databaseController = require("../controllers/databaseController")
const config = require("../config/main.config")

class user {
    constructor(){
        this.dbController = new databaseController();
    }

    async login(informacion){
        let usuario = informacion.id_user;
        let password = informacion.password;
        //falta el tipo de usuario y poner en la query
    
        let query = `SELECT * FROM login WHERE id_user = '${usuario}' and password = md5('${password}')`;
        let respuesta = await this.dbController.ejecutarSql(query);
        return respuesta.rows[0]
    }

    crearToken(informacion){
        let options = {expiresIn: 30};
        return jwt.sign(informacion, config.SECRET_KEY, options);
    }

    validarToken(token){
        return jwt.verify(token, config.SECRET_KEY);
    }
}

module.exports = user;

