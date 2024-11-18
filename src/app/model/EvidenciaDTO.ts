export interface EvidenciaDTO {
    idEvidencia?: number;
    idSolicitud?: number;
    urlEvidencia?: string;
    tipo?: string; // puede ser nulo
    idEstado?: number; // puede ser nulo
}