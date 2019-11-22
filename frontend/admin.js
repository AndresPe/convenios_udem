let solicitudTemp = [];

//Obtener datos
function get() {
    let token = sessionStorage.getItem("token");
    let options = {};
    options.headers = {
        token
    };
    axios
        .get("http://localhost:3000/admin", options)
        .then(response => {
            let data = response.data;
            let admin = data.informacion;
            solicitudTemp = admin;
            let tbody = document.getElementById("admin");
            tbody.innerHTML = "";
            for (let index = 0; index < admin.length; index++) {
                let element = admin[index];
                let row = "";
                row += "<tr>";
                row += "<td>" + element["id"] + "</td>";
                row += "<td>" + element["intercambio"] + "</td>";
                row += "<td>" + element["periodo"] + "</td>";
                row += "<td>" + element["semestre"] + "</td>";
                row += "<td>" + element["fecha_llegada"] + "</td>";
                row += "<td>" + element["vigente"] + "</td>";
                row +=
                    "<td><button onclick='ver(" +
                    element["id"] +
                    ")'> Ver </button> </td>";
        
                row += "</tr>";
                tbody.innerHTML += row;
            }
        })
        .catch(error => {
            console.log(error.toString());
        });
}
get();