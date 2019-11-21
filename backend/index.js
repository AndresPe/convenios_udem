const express = require('express')
const app = express()

//Recibir el json por body
app.use(express.json());

//LoginRouter es una ruta pública
const loginRouters = require("./routers/loginRouters");
const loginController = require("./controllers/loginController");
const controllerLogin = new loginController();
app.use("/", loginRouters)


//No encontró la ruta solicitada
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
        respuesta.informacion = "";
        respuesta.mensaje = "No autorizado, token invalido";
        response.status(401).send(respuesta)
    }
});

app.use("/", (request, response) => {
    response.status(404).send("Not found");
});


let port = 3000

app.listen(port, () => {
    console.log("El api esta corriendo en el http://localhost:" + port);
})