import Axios from "axios";

function registro(){
    let url = "http://localhost:3000/registrar/";
    let id_user = document.getElementById("identificacion");
    let name = document.getElementById("nombre");
    let last_name = document.getElementById("apellidos");
    let address = document.getElementById("direccion");
    let sexo = 0; // esto debe ser tomado desde el radiobutton pero no recuerdo
    let email = document.getElementById("email");
    let telephone = document.getElementById("telefono");
    let password = document.getElementById("contraseña")
    let user_type = 3;
    let body = {id_user, name,last_name, address,
    sexo, email, telephone, password,user_type}
    Axios.post(url, body).then(response => {
        let data = response.data
        if (data.estado == true) {
            let informacion = data.informacion;
            //estaba copiando igual que en el login pero 
            //aca no va lo del token, analizar para enviar lo necesario
        }
    });
}