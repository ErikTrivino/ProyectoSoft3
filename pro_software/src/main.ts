import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RequestReviewComponent } from './app/request-review/request-review.component';
import { CRUDAdminComponent } from './app/crud-admin/crud-admin.component';
import { RequestObservationComponent } from './app/request-observation/request-observation.component';

bootstrapApplication(RequestObservationComponent, appConfig)
  .catch((err) => console.error(err));
