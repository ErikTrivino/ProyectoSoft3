import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RequestReviewComponent } from './app/request-review/request-review.component';
import { CRUDAdminComponent } from './app/crud-admin/crud-admin.component';
import { RequestObservationComponent } from './app/request-observation/request-observation.component';
import { CrudGestionClientesComponent } from './app/crud-gestion-clientes/crud-gestion-clientes.component';
import { CrudServiciosComponent } from './app/crud-servicios/crud-servicios.component';

bootstrapApplication(CrudGestionClientesComponent, appConfig)
  .catch((err) => console.error(err));
