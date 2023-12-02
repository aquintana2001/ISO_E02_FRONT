import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'

// Define una interfaz para el tipo de usuario
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
  selector: 'app-consultar-vehiculos',
  templateUrl: './consultar-vehiculos.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class ConsultarVehiculosComponent {
  vehiculos: Vehiculo[] = [];
  constructor(private adminService : AdminServiceService) { }
  vehiculoBackUp: Vehiculo[] = [];

  editarFila(index: number) {
    this.vehiculos[index].editable = true;
  }
  actualizarMatricula(event: any, index: number) {
    this.vehiculos[index].matricula = event.target.textContent;
  }
  actualizarModelo(event: any, index: number) {
    this.vehiculos[index].modelo = event.target.textContent;
  }
  actualizarBateria(event: any, index: number) {
    this.vehiculos[index].bateria = event.target.textContent;
  }
  // actualizarEstado(event: any, index: number) {
  //   this.vehiculos[index].estado = event.target.textContent;
  // }
  actualizarDireccion(event: any, index: number) {
    this.vehiculos[index].direccion = event.target.textContent;
  }
  actualizarTipo(event: any, index: number) {
    this.vehiculos[index].tipo = event.target.textContent;
  }
  actualizarPlazas(event: any, index: number) {
    this.vehiculos[index].nPlazas = event.target.textContent;
  }
  actualizarColor(event: any, index: number) {
    this.vehiculos[index].color = event.target.textContent;
  }
  actualizarCasco(event: any, index: number) {
    this.vehiculos[index].casco = event.target.value;
  }
  eliminarVehiculo(index:number){
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar el vehículo permanentemente?');

    if (confirmacion) {
      try {
        this.adminService.eliminarVehiculo(this.vehiculos[index].id).subscribe({
          error: (error) =>{
            if (error.status==200){
              this.vehiculos.splice(index,1)
              this.vehiculoBackUp.splice(index,1)
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
  guardarCambios(index: number) {
    this.vehiculos[index].editable = false;
    const { editable, ...vehiculo } = this.vehiculos[index];
    try {
      this.adminService.actualizarVehiculo(vehiculo).subscribe({
        error: (error) =>{
          if (error.status==200){
            console.log("La actualización se ha realizado con éxito");
            this.vehiculoBackUp[index]={...this.vehiculos[index]}
          }
          else{
            console.log(error);
            this.vehiculos[index] = this.vehiculoBackUp[index];
            this.adminService.getVehiculos().subscribe((data: any[]) => {
              this.vehiculoBackUp = data.map(vehiculo => ({
                id: vehiculo.id,
                matricula: vehiculo.matricula,
                tipo: vehiculo.tipo,
                modelo: vehiculo.modelo,
                bateria: vehiculo.bateria,
                estado: vehiculo.estado,
                direccion: vehiculo.direccion,
                nPlazas: vehiculo.nPlaza,
                casco: vehiculo.casco,
                color: vehiculo.color,
                editable: false
              }));
            });
          }
        }
    });
    } catch (error) {

    }
   
  }

  cancelarEdicion(index: number) {
    this.vehiculos[index].editable = false;
    this.vehiculos[index] = this.vehiculoBackUp[index];
    this.adminService.getVehiculos().subscribe((data: any[]) => {

      this.vehiculoBackUp = data.map(vehiculo => ({
        id: vehiculo.id,
        matricula: vehiculo.matricula,
        tipo: vehiculo.tipo,
        modelo: vehiculo.modelo,
        bateria: vehiculo.bateria,
        estado: vehiculo.estado,
        direccion: vehiculo.direccion,
        nPlazas: vehiculo.nPlaza,
        casco: vehiculo.casco,
        color: vehiculo.color,
        editable: false
      }));
    });


  }

  ngOnInit() {
    this.adminService.getVehiculos().subscribe((data: any[]) => {
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
      this.vehiculoBackUp = data.map(vehiculo => ({
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
