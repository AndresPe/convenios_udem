function registrarSolicitud(){
    let url = "http://localhost:3000/solicitud/";
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let pais_nacimiento = document.getElementById("pais_nacimiento").value;
    let provincia_nacimiento = document.getElementById("provincia_nacimiento").value;
    let ciudad_nacimiento = document.getElementById("ciudad_nacimiento").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let direccion_actual = document.getElementById("direccion_actual").value;
    let pais_actual = document.getElementById("pais_actual").value;
    let provincia_actual = document.getElementById("provincia_actual").value;
    let ciudad_actual = document.getElementById("ciudad_nacimiento").value;
    let nombre_contacto = document.getElementById("nombre_contacto").value;
    let apellido_contacto = document.getElementById("apellido_contacto").value;
    let telefono_contacto = document.getElementById("telefono_contacto").value;
    let correo_contacto = document.getElementById("correo_contacto").value;
    let direccion_contacto = document.getElementById("direccion_contacto").value;
    let ciudad_colombia = document.getElementById("ciudad_colombia").value;
    let barrio_colombia = document.getElementById("barrio_colombia").value;
    let telefono_colombia = document.getElementById("telefono_colombia").value;
    let embajada_colombia = document.getElementById("embajada_colombia").value;
    let tipo_intercambio = "Académico";
    let periodo_estudio = document.getElementById("periodo_estudio").value;
    let duracion = document.getElementById("duracion").value;
    let semestre = document.getElementById("semestre").value;
    let fecha_llegada = document.getElementById("fecha_llegada").value;
    let fecha_partida = document.getElementById("fecha_partida").value;
    let como_udem = document.getElementById("como_udem").value;
    let idioma_nativo = document.getElementById("idioma_nativo").value;
    
    let user_type = 3;
    let body = {fecha_nacimiento, pais_nacimiento, provincia_nacimiento,
    ciudad_nacimiento, nacionalidad, direccion_actual, pais_actual, provincia_actual, ciudad_actual,
    nombre_contacto, apellido_contacto, telefono_contacto, correo_contacto, direccion_contacto, ciudad_colombia,
    barrio_colombia, telefono_colombia, embajada_colombia, tipo_intercambio, periodo_estudio, duracion, semestre,
    fecha_llegada, fecha_partida, como_udem, idioma_nativo}
    axios.post(url, body).then(response => {
        let data = response.data
        if (data.estado == true) {
            let informacion = data.mensaje;
            sessionStorage.setItem("body", informacion);
            window.location = "estudiante.html"
            //estaba copiando igual que en el login pero 
            //aca no va lo del token, analizar para enviar lo necesario
        }
    });
}


