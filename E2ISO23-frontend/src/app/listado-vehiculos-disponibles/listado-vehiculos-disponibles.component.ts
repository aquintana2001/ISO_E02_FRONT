import { Component } from '@angular/core';
import { AccountService } from '../user.service'
interface Vehiculo {
  id: string;
  matricula: string;
  tipo: string;
  modelo: string;
  bateria: string;
  estado: string;
  direccion: string;
  nPlazas: string;
  color: string;
  casco: boolean;
}

@Component({
  selector: 'app-listado-vehiculos-disponibles',
  templateUrl: './listado-vehiculos-disponibles.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class ListadoVehiculosDisponiblesComponent {
  vehiculos: Vehiculo[] = [];
  mensajeinfo:any;
  mostrarError = false;
  mostrarConfirmacion = false;
  constructor(private userService : AccountService) { }

  reservar(index: number){
    let infoVehiculo = {
      idVehiculo: this.vehiculos[index].id
    }
    this.userService.reservarVehiculo(infoVehiculo).subscribe({
      error: (error) =>{
        if (error.status==200){
          this.mensajeinfo = "Felicidades ha reservado su vehículo"
          this.mostrarConfirmacion = true;
          this.mostrarError = false;
          this.vehiculos[index].estado = "reservado"
        }
        else{
          this.mensajeinfo = error.error.message;
          this.mostrarError = true;
          this.mostrarConfirmacion = false;
        }
      }
  });
  }

  ngOnInit() {
    this.userService.getVehiculosDisponibles().subscribe((data: any[]) => {
      this.vehiculos = data.map(vehiculo => ({
        id: vehiculo.id,
        matricula: vehiculo.matricula,
        modelo: vehiculo.modelo,
        bateria: vehiculo.bateria,
        estado: vehiculo.estado,
        direccion: vehiculo.direccion,
        tipo: vehiculo.tipo,
        nPlazas: vehiculo.nPlaza,
        color: vehiculo.color,
        casco: vehiculo.casco
      }));
    });

  }
}
