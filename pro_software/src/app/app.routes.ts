import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RequestReviewComponent } from './request-review/request-review.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lobby', component: LobbyComponent }, 
  { path: 'request-review', component: RequestReviewComponent }
];
