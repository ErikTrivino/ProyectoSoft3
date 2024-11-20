import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { enviroments } from '../../../environments/enviroments.prod';
import { ServicioDTO } from '../../model/ServicioDTO';
import { SolicitudDTO, SolicitudParams } from '../../model/SolicitudDTO';
import { ClienteDTO } from '../../components/crud-gestion-clientes/cliente-dto';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private apiUrl = enviroments.urlApi;

    constructor(private http: HttpClient, private local: TokenServicesService) { }

    public getClientAll(): Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>(this.apiUrl + '/moderator/allUsuarios');
    }

    public getServiciosAll(): Observable<ServicioDTO[]> {
        return this.http.get<ServicioDTO[]>(this.apiUrl+"/servicio");
    }

    public getServicioById(id: number): Observable<ServicioDTO> {
        return this.http.get<ServicioDTO>(`${this.apiUrl}/servicio/${id}`);
    }

    public saveServicio(servicio: ServicioDTO): Observable<any> {
        return this.http.post(`${this.apiUrl}/servicio/save`, servicio);
    }

    public updateServicio(servicio: ServicioDTO): Observable<any> {
        return this.http.post(`${this.apiUrl}/servicio/update`, servicio);
    }

    public deleteServicio(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/servicio/delete/${id}`);
    }

    public verificarDisponibilidad5Dias(): Observable<any> {
        return this.http.get(`${this.apiUrl}/solicitud/disponible`);
    }

    public getAllSolicitudes(): Observable<any> {
        return this.http.get(this.apiUrl + "/solicitud");
    }

    public getSolicitudById(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    public generarActa(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/solicitud/acta/${id}`);
    }

    public crearSolicitud(solicitud: SolicitudParams): Observable<any> {
        return this.http.post(`${this.apiUrl}/solicitud/crear`, solicitud);
    }

    public validarSolicitud(idSolicitud: number): Observable<any> {
        return this.http.post(`${this.apiUrl}/solicitud/validar/${idSolicitud}`, null);
    }

    public eliminarSolicitud(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }


    /**
     * Sube una evidencia para una solicitud específica.
     * @param file Archivo a subir.
     * @param idSolicitud ID de la solicitud asociada.
     * @returns Observable con la respuesta del servidor.
     */
    addEvidencia(formData: FormData, idSolicitud: number): Observable<any> {
        return this.http.post(`${this.apiUrl}/add/${idSolicitud}`, formData);
    }

    /**
     * Elimina una evidencia por su ID.
     * @param id ID de la evidencia.
     * @returns Observable con la respuesta del servidor.
     */
    deleteEvidencia(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }

    /**
     * Obtiene una evidencia por su ID.
     * @param id ID de la evidencia.
     * @returns Observable con la evidencia.
     */
    getEvidenciaById(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/evidencia/${id}`);
    }

}
