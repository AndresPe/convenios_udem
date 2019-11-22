const DatabaseController = require("./databaseController");

class Admin {
    constructor() {
        this.dbController = new DatabaseController();
    }

    async obtenerAdmin() {
        let query = "SELECT * FROM intercambio_estudiante_externo";
        let respuesta = await this.dbController.ejecutarSql(query);
        return respuesta.rows;
    }
}
module.exports = Admin;