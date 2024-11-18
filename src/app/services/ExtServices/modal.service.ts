import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../user/client.service';
import { RequestObservationComponent } from '../../components/request-observation/request-observation.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:MatDialog, private cliente:ClientService) { }
  
  openModalObservaciones(){
    this.modal.open(RequestObservationComponent, {
      data: { title: 'Sign out', content: 'Are you sure you want to close the section?'},
      panelClass:'modal-dialog"',
      disableClose: true
    });

  }
}
