import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import Swal from 'sweetalert2';
import { ClienteDTO } from './cliente-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-gestion-clientes',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './crud-gestion-clientes.component.html',
  styleUrl: './crud-gestion-clientes.component.css'
})


export class CrudGestionClientesComponent {
  clientes: ClienteDTO[] = [
    { nombre: 'Erik', usuario: 'erik123', cedula: '22113334444', telefono: '3125665', email: 'erik@gmail.com', contrasena: '' },
    { nombre: 'Ana', usuario: 'ana456', cedula: '2244556677', telefono: '3214567', email: 'ana@gmail.com', contrasena: '' },
    { nombre: 'Luis', usuario: 'luis789', cedula: '9988776655', telefono: '3344556', email: 'luis@gmail.com', contrasena: '' }
  ];

  buscarCliente(termino: string) {
    this.clientes = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      cliente.usuario.includes(termino)
    );
  }

  verInfoCliente(cliente: ClienteDTO) {
    Swal.fire({
      title: 'Información de Cliente',
      html: `<p><strong>Nombre:</strong> ${cliente.nombre}</p>
             <p><strong>Usuario:</strong> ${cliente.usuario}</p>
             <p><strong>Cédula:</strong> ${cliente.cedula}</p>
             <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
             <p><strong>Email:</strong> ${cliente.email}</p>`,
      icon: 'info',
      confirmButtonText: 'Cerrar'
});
  }

}