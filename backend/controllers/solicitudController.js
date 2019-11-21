const DatabaseController = require('./databaseController');
const config = require('../config/main.config');

class Solicitud {
    constructor() {
        this.dbController = new DatabaseController();
    }

    async crearSolicitud(solicitud){
        let query = `INSERT INTO public.info_nacimiento(
            identificacion, fecha, pais, provincia, ciudad)
            VALUES (?, ?, ?, ?, ?);`
    }
}