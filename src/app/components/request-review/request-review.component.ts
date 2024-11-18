import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/user/client.service';
import { SolicitudDTO, SolicitudParams } from '../../model/SolicitudDTO';

@Component({
  selector: 'app-request-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.css'
})
export class RequestReviewComponent {

  constructor(private clienteService: ClientService) {
  }

  solicitud:SolicitudParams=
  {
    idUbicacion: 1,
    idServicio: 2,
    fechaRevision: "2024-11-19",
    descripcion: "Problemas de fugas"
  }

  showDateTimeModal = false;
  selectedDate: string = '';
  selectedTimeSlot: string = '';
  timeSlots: string[] = ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'];
  servicios: any[] = [];
  ubicaciones: any[] = [
    {
      "idubicacion": 1,
      "nombreubicacion": "Oficina Central",
      "direccion": "Calle Falsa 123",
      "idcliente": 2
    }
  ];
 
  fechaHoraInput!:string;
  
  toggleDateTimeModal() {
    this.showDateTimeModal = !this.showDateTimeModal;
  }

 confirmDateTime() {
  console.log(`Fecha seleccionada: ${this.selectedDate}`);
  console.log(`Horario seleccionado: ${this.selectedTimeSlot}`);
  
  this.showDateTimeModal = false;
}

  ngOnInit(): void {
    this.cargarServicios();
  }

  cargarServicios(): void {
    this.clienteService.getServiciosAll().subscribe((data) => {
      this.servicios = data;
    });
  }

  realizarSolicitud(): void {
    this.solicitud.fechaRevision=this.selectedDate;
    this.clienteService.crearSolicitud(this.solicitud).subscribe((data) => {
      alert("Solicitud creada correctamente");
    });
  }
}
