import { Injectable } from '@angular/core';
import { UsuarioDTO } from '../../model/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any[]=[];
  private message: string="";
  private usuario?: UsuarioDTO;

  setData(data: any[]) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setMessage(message:string){
    this.message=message;
  }

  getMessage(){
    return this.message;
  }

  setUsuario(usuario : UsuarioDTO){
    this.usuario=usuario;
  }

  getUsuario(){
    return this.usuario;
  }
}
