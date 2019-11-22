function registro(){
    let url = "http://localhost:3000/registrar/";
    let id_user = document.getElementById("identificacion").value;
    let name = document.getElementById("nombre").value;
    let last_name = document.getElementById("apellidos").value;
    let address = document.getElementById("direccion").value;
    let sexo = 0; // esto debe ser tomado desde el radiobutton pero no recuerdo
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telefono").value;
    let password = document.getElementById("contraseña").value;
    let user_type = 3;
    let body = {id_user, name,last_name, address,
    sexo, email, telephone, password,user_type}
    axios.post(url, body).then(response => {
        let data = response.data
        if (data.estado == true) {
            let informacion = data.mensaje;
            sessionStorage.setItem("body", informacion);
            window.location = "login.html"
            //estaba copiando igual que en el login pero 
            //aca no va lo del token, analizar para enviar lo necesario
        }
    });
}