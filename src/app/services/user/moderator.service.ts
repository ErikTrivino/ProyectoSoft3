import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';
import { enviroments } from '../../../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  private apiUrl = enviroments.urlApi;

    constructor(private http: HttpClient) { }

    public deactivateUserAccount(moderatorId: string, userId: string):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/deactivateUserAccount`, null, { params: { moderatorId, userId } });
    }

    public getListHistoryReviews(moderatorId: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/moderadores/getListHistoryReviews`, { params: { moderatorId } });
    }

    public getAllBusinessPending():Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/moderadores/getAllBusinessPending`);
    }

    public logOutUser():Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/logOutUser`, null);
    }
  }