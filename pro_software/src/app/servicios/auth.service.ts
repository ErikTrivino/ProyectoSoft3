import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import { LoginDTO } from '../dto/login-dto';


@Injectable({
 providedIn: 'root'
})
export class AuthService {
  


 private authURL = "http://localhost:8082/api/auth";
 


 constructor(private http: HttpClient) { }

 
 
 /*public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.authURL}/iniciar-sesion`, loginDTO);
 }*/

}