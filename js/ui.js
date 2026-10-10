export function mostrarSolicitudes(solicitudes) {
const lista = document.getElementById("lista-solicitudes");
const contador = document.getElementById("contador");
const mensajeVacio = document.getElementById("mensaje-vacio");
const mensajeCarga = document.getElementById("mensaje-carga");

```
lista.replaceChildren();

contador.textContent =
    solicitudes.length + (solicitudes.length === 1
        ? " solicitud"
        : " solicitudes");

mensajeCarga.hidden = true;
mensajeVacio.hidden = solicitudes.length > 0;

solicitudes.forEach((solicitud) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-solicitud";

    const titulo = document.createElement("h3");
    titulo.textContent = solicitud.cliente;

    const servicio = document.createElement("p");
    servicio.textContent = "Servicio: " + solicitud.servicio;

    const descripcion = document.createElement("p");
    descripcion.textContent =
        "Descripción: " + solicitud.descripcion;

    const estado = document.createElement("p");
    estado.textContent = "Estado: " + solicitud.estado;

    tarjeta.append(titulo, servicio, descripcion, estado);
    lista.appendChild(tarjeta);
});
```

}

export function mostrarError(mensaje) {
const elemento = document.getElementById("mensaje-error");
elemento.textContent = mensaje;
elemento.hidden = false;
}

export function ocultarError() {
const elemento = document.getElementById("mensaje-error");
elemento.textContent = "";
elemento.hidden = true;
}

export function mostrarMensajeFormulario(mensaje) {
document.getElementById("mensaje-formulario").textContent = mensaje;
}
