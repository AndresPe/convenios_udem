const DatabaseController = require('./databaseController');
const config = require('../config/main.config');

class Registro {
    constructor() {
        this.dbController = new DatabaseController();
    }

    async registrarUsuario(usuario) {
        let query = `INSERT INTO public.basic_info_user (
            id_user, name, last_name, address, telephone, sexo, email)
            VALUES ('${usuario.id_user}', '${usuario.name}', '${usuario.last_name}', 
            '${usuario.address}', '${usuario.telephone}', ${usuario.sexo}, '${usuario.email}');
            INSERT INTO public.login(id_user, user_type, password) VALUES ('${usuario.id_user}', '${usuario.user_type}',
            '${usuario.password}');`;
            let respuesta = await this.dbController.ejecutarSql(query);
            return respuesta;        
    }
}

module.exports = Registro;