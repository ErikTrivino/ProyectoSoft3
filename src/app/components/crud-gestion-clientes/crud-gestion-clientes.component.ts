import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import Swal from 'sweetalert2';
import { ClienteDTO } from './cliente-dto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ClientService } from '../../services/user/client.service';

@Component({
  selector: 'app-crud-gestion-clientes',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './crud-gestion-clientes.component.html',
  styleUrl: './crud-gestion-clientes.component.css'
})


export class CrudGestionClientesComponent {
  constructor( 
    private routes: Router,
    private clienteService : ClientService) {

  }

  ngOnInit(): void {
    this.cargarClientes();
  }

  clientes: ClienteDTO[] = [
    { nombrecompleto: 'Erik', username: 'erik123', cedula: '22113334444', telefono: '3125665', email: 'erik@gmail.com', password: '' },
    { nombrecompleto: 'Ana', username: 'ana456', cedula: '2244556677', telefono: '3214567', email: 'ana@gmail.com', password: '' },
    { nombrecompleto: 'Luis', username: 'luis789', cedula: '9988776655', telefono: '3344556', email: 'luis@gmail.com', password: '' }
  ];

  buscarCliente(termino: string) {
    this.clientes = this.clientes.filter(cliente =>
      cliente.nombrecompleto.toLowerCase().includes(termino.toLowerCase()) ||
      cliente.username.includes(termino)
    );
  }

  cargarClientes(): void {
    this.clienteService.getClientAll().subscribe((data) => {
      this.clientes = data;
    });
  }

  verInfoCliente(cliente: ClienteDTO) {
    Swal.fire({
      title: 'Información de Cliente',
      html: `<p><strong>Nombre:</strong> ${cliente.nombrecompleto}</p>
             <p><strong>Usuario:</strong> ${cliente.username}</p>
             <p><strong>Cédula:</strong> ${cliente.cedula}</p>
             <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
             <p><strong>Email:</strong> ${cliente.email}</p>`,
      icon: 'info',
      confirmButtonText: 'Cerrar'}); 
  }

}