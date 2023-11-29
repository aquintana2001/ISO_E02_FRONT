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

  constructor(private userService : AccountService) { }

  onStarClick(selectedRating: number): void {
    this.rating = selectedRating;
  }
  valorar(){
  // Aquí puedes usar this.rating y this.comentario como desees
    console.log('Valoración:', this.rating);
    console.log('Comentario:', this.comentario);
    let info = {
      valoracion: this.rating,
      comentario: this.comentario
    }
    try {
      this.userService.valorarReserva(info).subscribe({
        error: (error) =>{
          if (error.status==200){
            console.log("Se ha registrado la valoración");
          }
          else{
            console.log(error);
          }
        }
    });
    } catch (error) {

    }
  }
}
