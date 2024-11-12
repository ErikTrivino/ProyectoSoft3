import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'proyecto_software';

  constructor(private router: Router) { }

  onLogin() {

    this.router.navigate(['/lobby']);
  }
}
