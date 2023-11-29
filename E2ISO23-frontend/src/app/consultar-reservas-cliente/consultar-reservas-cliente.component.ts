import { Component } from '@angular/core';
import { AccountService } from '../user.service';
import { ValorarReservaComponent } from '../valorar-reserva/valorar-reserva.component';
import { ReservaServiceService } from '../reserva-service.service';
interface Reserva {
  id: string;
  vehiculo: string;
  fecha: string;
  estado: string;
  valoracion:string;
  comentario: string;
  estadoVehiculo: string;
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
  mostrarValorarReserva = false;
  constructor(private userService : AccountService,private reservaCompartidaService: ReservaServiceService) { }

  finalizarReserva(index:number){
    const confirmacion = window.confirm('¿Estás seguro de que quieres finalizar la reserva?');

    if (confirmacion) {
      try {
        this.userService.finalizarReserva(this.reservas[index].id).subscribe({
          error: (error) =>{
            if (error.status==200){
              this.reservas[index].estado="finalizada";
              if(this.reservas[index].estadoVehiculo==="reservado"){
                console.log(this.reservas[index].id)
                this.reservaCompartidaService.actualizarIdReserva(this.reservas[index].id);
                this.mostrarValorarReserva = true;
              }
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
  cancelarReserva(index:number){
    const confirmacion = window.confirm('¿Estás seguro de que quieres cancelar la reserva?');

    if (confirmacion) {
      try {
        this.userService.cancelarReserva(this.reservas[index].id).subscribe({
          error: (error) =>{
            if (error.status==200){
              this.reservas[index].estado="cancelada"
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
      console.log(data);
      this.reservas = data.map(reserva => ({
        id: reserva.id,
        vehiculo: reserva.vehiculo.modelo,
        fecha: reserva.fecha,
        estado: reserva.estado,
        valoracion:reserva.valoracion,
        comentario: reserva.comentario,
        estadoVehiculo: reserva.vehiculo.estado
      }));
    });
  }
}
