import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InfoUsuarioCrudDTO } from '../dto/info-usuario';
import { UsuarioDTO } from '../dto/usuario-dto';
import { ClienteService } from '../servicios/cliente.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para las peticiones HTTP

@Component({
  selector: 'app-crud-gestion-clientes',
  standalone: true,
  imports: [
    HttpClientModule, // Para manejar peticiones HTTP
    CommonModule, // Para usar directivas como *ngFor, *ngIf
  ],
  templateUrl: './crud-gestion-clientes.component.html',
  styleUrls: ['./crud-gestion-clientes.component.css'],
})
export class CrudGestionClientesComponent implements OnInit {
  clientes: InfoUsuarioCrudDTO[] = []; // Lista de clientes
  clienteSeleccionado: UsuarioDTO | null = null; // Cliente actualmente seleccionado para edición

  constructor(private serviceCliente: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes(); // Cargar clientes al inicializar el componente
  }

  // Método para cargar todos los clientes desde el servicio
  private cargarClientes(): void {
    this.serviceCliente.getAllUsuarios().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
        Swal.fire('Error', 'No se pudieron cargar los clientes.', 'error');
      },
    });
  }

  // Método para buscar un cliente en la lista
  buscarCliente(termino: string): void {
    if (!termino.trim()) {
      this.cargarClientes(); // Si el término está vacío, recarga la lista completa
      return;
    }
    this.clientes = this.clientes.filter(
      (cliente) =>
        cliente.cedula.toLowerCase().includes(termino.toLowerCase()) ||
        cliente.nombrecompleto.toLowerCase().includes(termino.toLowerCase())
    );
  }

  // Método para mostrar la información de un cliente en un modal
  verInfoCliente(cliente: InfoUsuarioCrudDTO): void {
    Swal.fire({
      title: 'Información del Cliente',
      html: `<p><strong>Nombre:</strong> ${cliente.nombrecompleto}</p>
             <p><strong>Usuario:</strong> ${cliente.username}</p>
             <p><strong>Cédula:</strong> ${cliente.cedula}</p>
             <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
             <p><strong>Email:</strong> ${cliente.email}</p>`,
      icon: 'info',
      confirmButtonText: 'Cerrar',
    });
  }

  // Método para editar un cliente
  editarCliente(cliente: InfoUsuarioCrudDTO): void {
    this.clienteSeleccionado = { ...cliente };
    // Lógica para abrir un formulario de edición (puedes implementarlo con un modal)
  }

  // Método para guardar un cliente (nuevo o actualizado)
  guardarCliente(cliente: UsuarioDTO): void {
    if (cliente.idusuario) {
      // Si el cliente tiene ID, actualiza sus datos
      this.serviceCliente.updateUsuario(cliente).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Cliente actualizado correctamente.', 'success');
          this.cargarClientes(); // Recarga la lista de clientes
        },
        error: (error) => {
          console.error('Error al actualizar cliente:', error);
          Swal.fire('Error', 'No se pudo actualizar el cliente.', 'error');
        },
      });
    } else {
      // Si el cliente no tiene ID, crea un nuevo cliente
      this.serviceCliente.saveUsuario(cliente).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Cliente agregado correctamente.', 'success');
          this.cargarClientes(); // Recarga la lista de clientes
        },
        error: (error) => {
          console.error('Error al guardar cliente:', error);
          Swal.fire('Error', 'No se pudo guardar el cliente.', 'error');
        },
      });
    }
  }

  // Método para eliminar un cliente
  eliminarCliente(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceCliente.deleteUsuario(id).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'El cliente ha sido eliminado.', 'success');
            this.cargarClientes(); // Recarga la lista de clientes
          },
          error: (error) => {
            console.error('Error al eliminar cliente:', error);
            Swal.fire('Error', 'No se pudo eliminar el cliente.', 'error');
          },
        });
      }
    });
  }

  // Método para abrir el modal de nuevo cliente
  abrirModalNuevoCliente(): void {
    this.clienteSeleccionado = null; // Limpia el cliente seleccionado
    // Implementa lógica para mostrar un formulario de creación
  }
}
