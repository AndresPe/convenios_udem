let informacionTemp = [];

//No funciona, no hay una ruta get en solicitud
function get() {
    let token = sessionStorage.getItem("token");
    let options = {};
    options.headers = { token };
    axios
        .get("http://localhost:3000/solicitud", options)
        .then(response => {
            let data = response.data;
            let solicitud = data.informacion;
            informacionTemp = solicitud;
        })
        .catch(error => {
            console.log(error.toString());
        });
}


function obtenerDatos() {
    // Obteniendo los valores de los campos
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let pais_nacimiento = document.getElementById("pais_nacimiento").value;
    let descripcion = document.getElementById("descripcion").value;
    let estado = document.getElementById("estado").value;
    let fecha = document.getElementById("fecha").value;
    let registro = {
        id,
        nombre,
        descripcion,
        estado,
        fecha
    };
    return registro;
}

function crearSolicitud() {
    let solicitud = obtenerDatos();
    let token = sessionStorage.getItem("token");
    let options = {};
    options.headers = { token };
    axios
        .post("http://localhost:3000/solicitud", solicitud, options)
        .then(response => {
            console.log(response);
            get();
        })
        .catch(error => {
            console.log(error);
        });
}

get();

