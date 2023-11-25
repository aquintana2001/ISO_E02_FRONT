import { Component } from '@angular/core';
import { AccountService } from '../user.service';

interface Reserva {
  id: string;
  vehiculo: string;
  fecha: string;
  estado: string;
  valoracion:string;
  comentario: string;
}

@Component({
  selector: 'app-consultar-reservas-cliente',
  templateUrl: './consultar-reservas-cliente.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})

export class ConsultarReservasClienteComponent {
  reservas: Reserva[] = [];
  
  mensajeinfo:any;
  mostrarError = false;
  mostrarConfirmacion = false;
  constructor(private userService : AccountService) { }

  finalizarReserva(index:number){
    const confirmacion = window.confirm('¿Estás seguro de que quieres finalizar la reserva?');

    if (confirmacion) {
      try {
        this.userService.finalizarReserva(this.reservas[index].id).subscribe({
          error: (error) =>{
            if (error.status==200){
              this.reservas[index].estado="finalizada"
              console.log("Finalizada tarea");
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
  ngOnInit() {
    this.userService.getReservas().subscribe((data: any[]) => {
      this.reservas = data.map(reserva => ({
        id: reserva.id,
        vehiculo: reserva.vehiculo.modelo,
        fecha: reserva.fecha,
        estado: reserva.estado,
        valoracion:reserva.valoracion,
        comentario: reserva.comentario
      }));
    });
  }
}