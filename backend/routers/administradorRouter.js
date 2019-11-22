const express = require("express");
const router = express.Router();

const administradorController = require("../controllers/administradorController");
const miAdmin = new administradorController();

router.get("/admin/", (request, response) => {
    miAdmin
        .obtenerAdmin()
        .then(filas => {
            let respuesta = {};
            respuesta.informacion = filas;
            response.status(200).send(respuesta);
        })
        .catch(error => {
            let respuesta = {};
            respuesta.informacion = error;
            respuesta.mensaje = "Error al consultar";
            response.status(400).send(respuesta);
        });
});
module.exports = router;