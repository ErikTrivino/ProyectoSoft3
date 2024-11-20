import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './services/guards/permissions.service';
import { RolesGuard } from './services/guards/roles.service';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RequestReviewComponent } from './components/request-review/request-review.component';
import { CRUDAdminComponent } from './components/crud-admin/crud-admin.component';
import { CrudGestionClientesComponent } from './components/crud-gestion-clientes/crud-gestion-clientes.component';
import { CrudServiciosComponent } from './components/crud-servicios/crud-servicios.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, canActivate: [LoginGuard]
    },
    {
        path: 'home', component: HomeComponent, children: [
            {
                path: 'realizar-solicitud', component: RequestReviewComponent , canActivate: 
                [RolesGuard], data: { expectedRole: ["Cliente"] }
            },
            {
                path: 'lobby', component: LobbyComponent,
            }
            ,
            {
                path: 'crud-admin', component: CrudGestionClientesComponent, canActivate: 
                [RolesGuard], data: { expectedRole: ["Admin"] }
            },
            {
                path: 'solicitudes', component: SolicitudesComponent, canActivate: 
                [RolesGuard], data: { expectedRole: ["Admin","Cliente"] }
            },
            {
                path: 'servicios', component: CrudServiciosComponent , canActivate: 
                [RolesGuard], data: { expectedRole: ["Admin","Cliente"] }
            },{
                path: 'observacion', component: RequestReviewComponent , canActivate: 
                [RolesGuard], data: { expectedRole: ["Cliente"] }
            },
        ]
    },
    {
        path: "**", pathMatch: "full", redirectTo: "", canActivate: [LoginGuard]
    }

];
