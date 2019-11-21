const DatabaseController = require('./databaseController');
const config = require('../config/main.config');

class Solicitud {
    constructor() {
        this.dbController = new DatabaseController();
    }

    async crearSolicitud(solicitud) {
        var date = new Date(); //Obtienes la fecha
        var fecha_solicitud = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        console.log(fecha_solicitud);

        let query = `INSERT INTO public.info_nacimiento(
            identificacion, fecha, pais, provincia, ciudad)
            VALUES ('${solicitud.identificacion_estudiante}', '${solicitud.fecha}', 
            '${solicitud.pais}', '${solicitud.provincia}', '${solicitud.ciudad_nacimiento}');
            INSERT INTO public.info_contacto_emergencia(
                identificacion_estudiante, nombre, apellidos, telefono, email, direccion)
                VALUES ('${solicitud.identificacion_estudiante}', '${solicitud.nombre}',
                '${solicitud.apellidos}', '${solicitud.telefono_emergencia}', '${solicitud.email}', 
                '${solicitud.direccion}');
                INSERT INTO public.residencia_colombiana(
                    identificacion_estudiante, ciudad, barrio, telefono, consulado_embajada)
                    VALUES ('${solicitud.identificacion_estudiante}', '${solicitud.ciudad_colombia}', '${solicitud.barrio}',
                    '${solicitud.telefono_colombia}', '${solicitud.consulado_embajada}');
                    INSERT INTO public.intercambio_estudiante_externo(
                        identificacion_estudiante, tipo_intercambio, periodo_estudios, duracion, 
                        semestre, fecha_llegada, fecha_salida, como_conocio_udem, idioma_nativo)
                        VALUES ('${solicitud.identificacion_estudiante}', '${solicitud.tipo_intercambio}', 
                        '${solicitud.periodo_estudios}', ${solicitud.duracion}, ${solicitud.semestre},
                         '${solicitud.fecha_llegada}', '${solicitud.fecha_salida}', '${solicitud.como_conocio_udem}', 
                         '${solicitud.idioma_nativo}');
                         INSERT INTO public.info_residencia_actual(
                            identificacion, nacionalidad, direccion, pais, providencia, ciudad)
                            VALUES ('${solicitud.identificacion_estudiante}', '${solicitud.nacionalidad}',
                            '${solicitud.direccion_actual}', '${solicitud.pais_actual}', '${solicitud.providencia}',
                            '${solicitud.ciudad_actual}');
                            INSERT INTO public.solicitud(
                                id, identificacion_estudiante, tipo_solicitud, fecha_registro)
                                VALUES (${solicitud.id}, '${solicitud.identificacion_estudiante}', '${solicitud.tipo_intercambio}',
                                '${fecha_solicitud}');`;

        let respuesta = await this.dbController.ejecutarSql(query);
        return respuesta;
    }

    /**
      *
      * @param {*} id
      */
    async cancelarSolicitud(id_estudiante) {
        let query = `DELETE FROM info_nacimiento WHERE id=${id_estudiante};
         DELETE FROM info_contacto_emergencia WHERE id=${id_estudiante};
         DELETE FROM residencia_colombiana WHERE id=${id_estudiante};
         DELETE FROM intercambio_estudiante_externo WHERE id=${id_estudiante};`;
        let respuesta = await this.dbController.ejecutarSql(query);
        return respuesta;
    }
}

module.exports = Solicitud;