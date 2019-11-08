const express = require('express')
const app = express()



//No encontró la ruta solicitada
app.use("/", (request, response) => {
    response.status(404).send("Not Found");
});


let port = 3000

app.listen(port, () => {
    console.log("El api esta corriendo en el http://localhost:" + port);
})