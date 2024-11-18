import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-review',
  standalone: true,
  imports: [FormsModule, CommonModule,HeaderComponent],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.css'
})
export class RequestReviewComponent {

  showDateTimeModal = false;
  selectedDate: string = '';
  selectedTimeSlot: string = '';
  timeSlots: string[] = ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'];
 
  fechaHoraInput!:string;

  // Método para mostrar u ocultar la ventana emergente
  toggleDateTimeModal() {
    this.showDateTimeModal = !this.showDateTimeModal;
  }
 // Método para confirmar la fecha y el horario seleccionados
 confirmDateTime() {
  console.log(`Fecha seleccionada: ${this.selectedDate}`);
  console.log(`Horario seleccionado: ${this.selectedTimeSlot}`);
  this.showDateTimeModal = false; // Cerrar la ventana después de confirmar
}

}
