import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServicioDTO } from '../../model/ServicioDTO';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/user/client.service';

@Component({
  selector: 'app-crud-servicios',
  standalone: true,
  imports: [HeaderComponent, FormsModule, RouterModule, CommonModule],
  templateUrl: './crud-servicios.component.html',
  styleUrl: './crud-servicios.component.css'
})
export class CrudServiciosComponent {
  searchTerm: any;

  constructor(private clienteService: ClientService){
  }

  servicios: ServicioDTO[] = [];
  serviciosFiltro: ServicioDTO[] = [];

  cargarServicios(): void {
    this.clienteService.getServiciosAll().subscribe((data) => {
      this.servicios = data;
      this.servicios=this.servicios.sort((a, b) =>  a.idServicio - b.idServicio);
    });
    
  }

  
  ngOnInit(): void {
    this.cargarServicios();
  }

  filtrarSolicitudes(): void {
        
        
    const term = this.searchTerm.toLowerCase();
    console.log("filtro "+ term);
    this.serviciosFiltro = this.servicios.filter(
        (service) =>
            service.idServicio.toString().includes(term) ||
            service.nombreServicio?.toString().toLowerCase().includes(term)
    );
}

}
