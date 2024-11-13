import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-crud-admin',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './crud-admin.component.html',
  styleUrl: './crud-admin.component.css'
})
export class CRUDAdminComponent {

}
