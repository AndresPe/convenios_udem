const express = require('express');
const router = express.Router();

const RegistroController = require('../controllers/registroController');
const registrar = new RegistroController();

router.post("/registrar/", (request, response) => {
    let registro = request.body;
    registrar.registrarUsuario(registro)
    .then(() => {
        let respuesta = {};
        respuesta.estado = true;
        respuesta.informacion = registro;
        respuesta.mensaje = "Registró"
        response.status(200).send(respuesta);
    })
    .catch(error => {
        console.log(error);

        let respuesta = {};
        respuesta.estado = false;
        respuesta.informacion = error;
        respuesta.mensaje = "no se registro, hubo error"
        response.status(400).send(respuesta);        
    })
})