import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { CRUDAdminComponent } from './crud-admin/crud-admin.component';
import { CrudGestionClientesComponent } from './crud-gestion-clientes/crud-gestion-clientes.component';
import { CrudServiciosComponent } from './crud-servicios/crud-servicios.component';

export const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'lobby', component: LobbyComponent }, 
  { path: 'app-request-review', component: RequestReviewComponent },
  { path: 'crud-admin', component: CRUDAdminComponent },
  { path: 'crud-cliente', component: CrudGestionClientesComponent }
,
{ path: 'crud-servicio', component: CrudServiciosComponent }

];
