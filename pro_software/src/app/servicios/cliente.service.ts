import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Observable } from 'rxjs';

import { InfoUsuarioCrudDTO } from '../dto/info-usuario';
import { UsuarioDTO } from '../dto/usuario-dto';




@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = "https://github.com/jdccboom/app-backend-telesai/moderator";

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('AuthToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  constructor(private http: HttpClient) { }



  // Obtener todos los usuarios
  public getAllUsuarios(): Observable<InfoUsuarioCrudDTO[]> {
    return this.http.get<InfoUsuarioCrudDTO[]>(`${this.apiURL}/allUsuarios`, { headers: this.getAuthHeaders() });
  }

  // Obtener un usuario por ID
  public getUsuarioById(id: number): Observable<InfoUsuarioCrudDTO> {
    return this.http.get<InfoUsuarioCrudDTO>(`${this.apiURL}/getUsuario/${id}`, { headers: this.getAuthHeaders() });
  }

  // Guardar un nuevo usuario
  public saveUsuario(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.apiURL}/usuario/save`, usuario, { headers: this.getAuthHeaders() });
  }

  // Actualizar un usuario existente
  public updateUsuario(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.apiURL}/usuario/update`, usuario, { headers: this.getAuthHeaders() });
  }

  // Eliminar un usuario por ID
  public deleteUsuario(id: number): Observable<String> {
    return this.http.delete<String>(`${this.apiURL}/usuario/delete/${id}`, { headers: this.getAuthHeaders() });
  }


}
