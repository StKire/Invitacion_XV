// CONFIGURACIÓN DE LA INVITACIÓN
// Aquí puedes modificar toda la información de la página
const infoInvitacion = {
    padres: "Tienen el honor de invitarlos a la",
    tipoEvento: "Quinceañera",
    relacion: "De su hija",
    nombre: "Rubi Telles",
    diaSemana: "Sábado",
    mes: "Julio",
    diaNumero: "04",
    hora: "5:00pm",
    direccion: "Vicente Guerrero Mz.269 Lt.19, Manzana 008 Lote 18, Jardines de Morelos, Ecatepec de Morelos, Méx.",
    urlMapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8418.494633569502!2d-99.00179738420606!3d19.592753386090216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ee30a5409e33%3A0xa0fd585304114c76!2sSALONES%20FASAFRE!5e1!3m2!1ses!2smx!4v1777781448083!5m2!1ses!2smx",
    fechaCuentaRegresiva: "July 04, 2026 17:00:00" // Formato en inglés para el contador
};

// Cargar la información en el HTML cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("parents-text").innerHTML = infoInvitacion.padres;
    document.getElementById("event-type").innerHTML = infoInvitacion.tipoEvento;
    document.getElementById("relation-text").innerHTML = infoInvitacion.relacion;
    document.getElementById("quinceanera-name").innerHTML = infoInvitacion.nombre;
    document.getElementById("event-day").innerHTML = infoInvitacion.diaSemana;
    document.getElementById("event-month").innerHTML = infoInvitacion.mes;
    document.getElementById("event-date").innerHTML = infoInvitacion.diaNumero;
    document.getElementById("event-time").innerHTML = infoInvitacion.hora;
    document.getElementById("event-address").innerHTML = infoInvitacion.direccion;
    document.getElementById("event-map").src = infoInvitacion.urlMapa;
});

// Lógica del Contador
const fechaEvento = new Date(infoInvitacion.fechaCuentaRegresiva).getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    // Evitar números negativos si ya pasó el evento
    if (diferencia < 0) {
        document.getElementById("contador").innerHTML = "<h2>¡Llegó el gran día!</h2>";
        return;
    }

    document.getElementById("contador").innerHTML = `
        <div class="time-box">
            <span>${dias}</span>
            <div class="label">Días</div>
        </div>
        <div class="time-box">
            <span>${horas}</span>
            <div class="label">Horas</div>
        </div>
        <div class="time-box">
            <span>${minutos}</span>
            <div class="label">Minutos</div>
        </div>
        <div class="time-box">
            <span>${segundos}</span>
            <div class="label">Segundos</div>
        </div>
    `;
}, 1000);
