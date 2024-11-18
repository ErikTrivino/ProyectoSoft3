import { Component, OnInit } from '@angular/core';
import { SolicitudDTO } from '../../model/SolicitudDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ClientService } from '../../services/user/client.service';
import { EvidenciaDTO } from '../../model/EvidenciaDTO';

@Component({
    selector: 'app-solicitudes',
    standalone: true,
    templateUrl: './solicitudes.component.html',
    styleUrls: ['./solicitudes.component.css'],
    imports: [FormsModule, RouterModule, HttpClientModule,
      CommonModule],
})
export class SolicitudesComponent implements OnInit {

    constructor( private routes: Router, private local: TokenServicesService, private clienteService : ClientService) {

    }

    solicitudes: SolicitudDTO[] = []; // Lista completa de solicitudes
    solicitudesFiltradas: SolicitudDTO[] = []; // Lista para mostrar en la tabla
    solicitudSelect!: SolicitudDTO;
    searchTerm: string = '';
    showEvidencia = false;
    showSolictud = false;
    urlActa="";
    urlFirma="";

    estados: { [key: number]: string } = {
        1: 'Creada',
        2: 'En progreso',
        3: 'Completada',
    };

    ngOnInit(): void {
      
        this.clienteService.getAllSolicitudes().subscribe({
          next: (data: any) => {
            this.solicitudes= data;
            this.solicitudesFiltradas = [...this.solicitudes];
          },
          error: (error: any ) =>{

          }
        });
    }
  

    filtrarSolicitudes(): void {
        
        
        const term = this.searchTerm.toLowerCase();
        console.log("filtro "+ term);
        this.solicitudesFiltradas = this.solicitudes.filter(
            (solicitud) =>
                solicitud.idSolicitud.toString().includes(term) ||
                solicitud.operario?.toString().toLowerCase().includes(term)
        );
    }

    getEvidenciaLink(tipo: string): void {
        
        if (tipo == "Firma") {
            window.open(this.urlFirma, '_blank');
        } else if(tipo == "Acta") {
            window.open(this.urlActa, '_blank');
        }
    }    
    
    verInfo(solicitud: SolicitudDTO): void {
        this.solicitudSelect = solicitud;
        this.toggleDateTimeModal(solicitud);
        this.showSolictud = !this.showSolictud;
    }

    toggleDateTimeModal(solicitud:SolicitudDTO) {
        this.clienteService.getEvidenciaById(solicitud.idSolicitud).subscribe({
            next: (data: any) => {
               if(data.respuesta.length>1){
                    this.urlFirma=data.respuesta[0].urlEvidencia;
                    this.urlActa=data.respuesta[1].urlEvidencia;
                    return;
                }
                this.urlFirma=data.respuesta.urlEvidencia;
            },
            error: (error: any ) =>{
                alert("No tiene evidencias")
            }
          });
    }

    onClose() {
        this.showSolictud = !this.showSolictud;
    }
  
    onValidate() {
        this.clienteService.generarActa(this.solicitudSelect.idSolicitud).subscribe({
            next: (data: any) => {
                this.urlActa=data.url;
                this.getEvidenciaLink("Acta");
            },
            error: (error: any ) =>{
                alert(error.error.respuesta)
            }
          });
    }
  
    onReject() {
        this.showSolictud = !this.showSolictud;
    }
  
    onEvidenceClick() {
       this.getEvidenciaLink("Firma");
    }
  
    onDownloadActa() {
        this.getEvidenciaLink("Acta");
    }
}
