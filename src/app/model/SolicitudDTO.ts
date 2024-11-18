export interface SolicitudDTO {
    idSolicitud: number;
    idCliente?: number;
    idUbicacion?: number;
    idServicio?: number;
    idOperario?: number;
    idSupervisor?: number;
    fechaSolicitud?: string; // formato ISO (YYYY-MM-DD)
    idEstado?: number;
}

export interface SolicitudDTO {
    idSolicitud: number;
    clienteNombre?: any;
    estado?: any;
    evidenciaUrl?: any;
    ubicacion?: string,
    servicio?: string,
    operario?: string | undefined,
    supervisor?: string,
    fechaRevision?: string; // puede ser nulo
    fechaValidacion?: string; // puede ser nulo
    descripcion?: string; // puede ser nulo
}

export interface SolicitudParams {
    idUbicacion?: number;
    idServicio?: number;
    fechaRevision?: string;
    descripcion?: string;
}