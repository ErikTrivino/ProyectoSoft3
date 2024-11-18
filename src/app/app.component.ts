import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TokenServicesService } from './services/ExtServices/token-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NgIf,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Telesai';
  isLogged = false;

  email: string = "";

  constructor(private tokenService: TokenServicesService) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.email = this.tokenService.getEmail();
    }
  }

  public logout() {
    this.tokenService.isLogged();
  }
}
