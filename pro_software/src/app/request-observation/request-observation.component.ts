import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-observation',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './request-observation.component.html',
  styleUrls: ['./request-observation.component.css']
})
export class RequestObservationComponent {
  numero: string = '';
  estado: string = '';
  cliente: string = '';
  ubicacion: string = '';
  servicio: string = '';
  supervisor: string = '';
  operario: string = '';
  observacion: string = '';

  onClose() {
  
  }

  onValidate() {
  
  }

  onReject() {

  }

  onEvidenceClick() {
    
    console.log("Evidencia clickeada");
  }

  onDownloadActa() {
  
    console.log("Descargar acta");
  }
}

