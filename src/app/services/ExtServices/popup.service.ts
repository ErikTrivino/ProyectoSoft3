import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(mensaje:string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2000, // Duración en milisegundos
    });
  }
}
