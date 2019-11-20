const express = require('express')
//const cors = require("cors");
const app = express()

const rutaRegistro = require("./routers/registroRouter");

app.use(express.json());
//app.use(cors());


app.use(rutaRegistro);

//No encontró la ruta solicitada
app.use("/", (request, response) => {
    response.status(404).send("Not Found");
});


let port = 3000

app.listen(port, () => {
    console.log("El api esta corriendo en el http://localhost:" + port);
})