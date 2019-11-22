const express = require('express')
const cors = require("cors");
const app = express()

//LoginRouter es una ruta pública
const rutaRegistro = require("./routers/registroRouter")
const loginRouters = require("./routers/loginRouters");
const loginController = require("./controllers/loginController");
const rutaSolicitud = require("./routers/solicitudRouter")
const controllerLogin = new loginController();

// Recibir json por http methods (body-parser)
app.use(express.json());
app.use(cors());

//LoginRouter y rutaRegistro son rutas públicas
app.use(rutaRegistro);
app.use("/", loginRouters)
app.use(rutaSolicitud);

//Middleware
app.use("/", (request, response, next) => {
    try {
        let token = request.headers.token;
        let informacionUsuario = controllerLogin.validarToken(token);
        if (token && informacionUsuario) {
            next()
        } else {
            let respuesta = {}
            respuesta.estado = false;
            respuesta.informacion = "";
            respuesta.mensaje = "No autorizado, falta token";
            response.status(401).send(respuesta);
        }
    } catch (error) {
        let respuesta = {}
        respuesta.estado = false;
        respuesta.informacion = error;
        respuesta.mensaje = "No autorizado, token invalido";
        console.log(respuesta);
        response.status(401).send(respuesta)
    }
});

//app.use(rutaSolicitud);

//No encontró la ruta solicitada
app.use("/", (request, response) => {
    response.status(404).send("Not found");
});


let port = 3000

app.listen(port, () => {
    console.log("El api esta corriendo en el http://localhost:" + port);
})