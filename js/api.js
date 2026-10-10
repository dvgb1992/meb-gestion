import { solicitudesIniciales } from "./datos.js";

// Consultar las solicitudes registradas
export async function obtenerSolicitudes() {
    return [...solicitudesIniciales];
}

// Registrar una nueva solicitud
export async function crearSolicitud(solicitud) {
    return {
        ...solicitud,
        id: Date.now(),
        estado: "Pendiente"
    };
}
