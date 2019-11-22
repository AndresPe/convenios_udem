const express = require('express');
const router = express.Router();

const usuarioController = require("../controllers/loginController");
const loginController = new usuarioController();


router.get("/", (request, response) => {
    response.status(200).send("ESTE ES UN TEXTO PUBLICO");
});

router.post("/login/", (request, response) => {
    let body = request.body
    let respuesta = {}
    loginController.login(body).then(usuario => {
            console.log(usuario); 
            let miToken = loginController.crearToken(usuario);
            respuesta.estado = true;
            respuesta.informacion = miToken;
            respuesta.mensaje = "Usuario identificado."
            response.status(200).send(respuesta);
        }).catch(error => {
            console.log(error);
            respuesta.estado = false
            respuesta.informacion = error
            respuesta.mensaje = "Error al consultar el usuario";
            response.status(400).send(respuesta)
        });
});

module.exports = router;