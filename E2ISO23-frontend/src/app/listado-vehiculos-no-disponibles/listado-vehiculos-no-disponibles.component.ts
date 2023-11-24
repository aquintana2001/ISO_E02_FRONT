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
  editable: boolean;
  color: string;
  casco: boolean;
}

@Component({
  selector: 'app-listado-vehiculos-no-disponibles',
  templateUrl: './listado-vehiculos-no-disponibles.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class ListadoVehiculosNoDisponiblesComponent {
  vehiculos: Vehiculo[] = [];
  constructor(private userService : AccountService) { }

  reservar(index: number){
    let infoVehiculo = {
      idVehiculo: this.vehiculos[index].id
    }
    this.userService.reservarVehiculo(infoVehiculo).subscribe({
      error: (error) =>{
        if (error.status==200){
          console.log("Vehiculo reservado correctamente")
        }
        else{
          console.log(error);
        }
      }
  });
  }

  ngOnInit() {
    this.userService.getVehiculosNoDisponibles().subscribe((data: any[]) => {
      this.vehiculos = data.map(vehiculo => ({
        id: vehiculo.id,
        matricula: vehiculo.matricula,
        modelo: vehiculo.modelo,
        bateria: vehiculo.bateria,
        estado: vehiculo.estado,
        direccion: vehiculo.direccion,
        tipo: vehiculo.tipo,
        nPlazas: vehiculo.nPlaza,
        editable: false,
        color: vehiculo.color,
        casco: vehiculo.casco
      }));
    });

  }
}
