import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { enviroments } from '../../../environments/enviroments.prod'
import { loginDTO } from '../../dto/loginDTO';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  public getToken(login:loginDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+'/auth/login', login); 
  }

}
