function login(){
    let url = "http://localhost:3000/login/";
    let id_user = document.getElementById("usuario").value;
    let password = document.getElementById("clave").value;
    let body = {id_user, password};
    axios.post(url, body).then(response => {
        let data = response.data;
        if (data.estado == true) {
            let informacion = data.informacion;
            sessionStorage.setItem("token", informacion);
            window.location = "formulario.html";
        }
    });
}