import { Component } from '@angular/core';
import { AccountService } from '../user.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-valorar-reserva',
  templateUrl: './valorar-reserva.component.html',
  styleUrls: ['./valorar-reserva.component.css']
})
export class ValorarReservaComponent {
  rating: number = 0;
  comentario: string = '';
  mensajeinfo: any;
  mostrarConfirmacion = false;

  constructor(private userService: AccountService) { }

  onStarClick(selectedRating: number): void {
    this.rating = selectedRating;
  }
  valorar() {
    // Aquí puedes usar this.rating y this.comentario como desees

    let info = {
      valoracion: this.rating,
      comentario: this.comentario
    }
    try {
      this.userService.valorarReserva(info).subscribe({
        next: (response) => {
          console.log("Se ha registrado la valoración");
          this.mensajeinfo = "Se ha registrado la valoración y se ha finalizado la reserva";
          this.mostrarConfirmacion = true;
          console.log(response);

        },
        error: (error) => {
          console.log(error);
        }
      });
    } catch (error) {
      // Manejo de errores sincrónicos (fuera de observables)
    }

  }
}
