import { obtenerSolicitudes, crearSolicitud } from "./api.js";

import {
mostrarSolicitudes,
mostrarError,
ocultarError,
mostrarMensajeFormulario
} from "./ui.js";

let solicitudes = [];

async function cargarSolicitudes() {
try {
ocultarError();
solicitudes = await obtenerSolicitudes();
mostrarSolicitudes(solicitudes);
} catch (error) {
mostrarError("No fue posible cargar las solicitudes.");
}
}

const formulario = document.getElementById("formulario-solicitud");
const campoBusqueda = document.getElementById("busqueda");

campoBusqueda.addEventListener("input", () => {
const texto = campoBusqueda.value.trim().toLowerCase();

```
const filtradas = solicitudes.filter((solicitud) => {
    return (
        solicitud.cliente.toLowerCase().includes(texto) ||
        solicitud.servicio.toLowerCase().includes(texto) ||
        solicitud.estado.toLowerCase().includes(texto)
    );
});

mostrarSolicitudes(filtradas);
```

});

formulario.addEventListener("submit", async (evento) => {
evento.preventDefault();

```
try {
    ocultarError();

    const cliente = document.getElementById("cliente").value.trim();
    const servicio = document.getElementById("servicio").value;
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!cliente || !servicio || descripcion.length < 5) {
        mostrarMensajeFormulario(
            "Completa todos los campos correctamente."
        );
        return;
    }

    const nuevaSolicitud = await crearSolicitud({
        cliente,
        servicio,
        descripcion
    });

    solicitudes.push(nuevaSolicitud);
    mostrarSolicitudes(solicitudes);
    formulario.reset();
    mostrarMensajeFormulario("¡Solicitud registrada correctamente!");

} catch (error) {
    mostrarError("No fue posible registrar la solicitud.");
}
```

});

cargarSolicitudes();
