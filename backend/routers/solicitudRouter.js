const express = require('express');
const router = express.Router();
const SolicitudController = require("../controllers/solicitudController");
const solicitudes = new SolicitudController();

router.get("/validar-token/", (request, response) => {
  try {
    let token = request.headers.token;
    let respuesta = {}
    respuesta.estado = true;
    respuesta.informacion = solicitudes.validarToken(token);
    respuesta.mensaje = "Token verificado";
    response.status(200).send(respuesta);
  } catch (error) {
    let respuesta = {}
    respuesta.estado = false;
    respuesta.informacion = error;
    respuesta.mensaje = "Token NO verificado";
    response.status(401).send(respuesta);
  }
});

router.post("/solicitud/", (request, response) => {
    let solicitud = request.body;
    solicitudes
      .crearSolicitud(solicitud)
      .then(() => {
        let respuesta = {};
        respuesta.estado = true;
        respuesta.informacion = solicitud;
        respuesta.mensaje = "Se ha registrado la solicitud";
        response.status(200).send(respuesta);
      })
      .catch(error => {
        console.log(error);
  
        let respuesta = {};
        respuesta.estado = false;
        respuesta.informacion = error;
        respuesta.mensaje = "La solicitud no se registró, hubo un error";
        response.status(400).send(respuesta);
      });
  });

  router.delete("/tareas/:id_estudiante", (request, response) => {
    let id_estudiante = request.params.id_estudiante;
    solicitudes
      .cancelarSolicitud(id_estudiante)
      .then(() => {
        let respuesta = {};
        respuesta.estado = true;
        respuesta.informacion = {};
        respuesta.mensaje = "LA solicitud ha sido cancelada";
        response.status(200).send(respuesta);
      })
      .catch(error => {
        let respuesta = {};
        console.log(error);        
        respuesta.estado = false;
        respuesta.informacion = {};
        respuesta.mensaje = "La solicitud no se canceló, hubo un error";
        response.status(400).send(respuesta);
      });
  });

module.exports = router;