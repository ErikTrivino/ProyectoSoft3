export interface ObservacionDTO {
    idObservacion?: number;
    idSolicitud?: number;
    descripcion?: string;
    fechaObservacion?: string; // formato ISO (YYYY-MM-DDTHH:mm:ss)
}