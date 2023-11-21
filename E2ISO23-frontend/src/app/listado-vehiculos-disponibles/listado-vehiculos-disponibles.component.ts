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
  selector: 'app-listado-vehiculos-disponibles',
  templateUrl: './listado-vehiculos-disponibles.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class ListadoVehiculosDisponiblesComponent {
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
    this.userService.getVehiculosDisponibles().subscribe((data: any[]) => {
      this.vehiculos = data.map(vehiculo => ({
        id: vehiculo.id,
        matricula: vehiculo.matricula,
        modelo: vehiculo.modelo,
        bateria: vehiculo.bateria,
        estado: vehiculo.estado,
        direccion: vehiculo.direccion,
        tipo: vehiculo.tipo,
        // nPlaza: { value: vehiculo.nPlaza, editable: false },
        nPlazas: vehiculo.nPlaza,
        editable: false,
        color: vehiculo.color,
        casco: vehiculo.casco
        // color: { value: vehiculo.color, editable: false },
        // casco: { value: vehiculo.casco, editable: false }
      }));
    });

  }
}
