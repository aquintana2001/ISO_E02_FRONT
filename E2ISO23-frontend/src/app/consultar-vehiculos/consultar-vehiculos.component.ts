import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { isNgContent } from '@angular/compiler';

// Define una interfaz para el tipo de usuario
interface Vehiculo {
  id: string;
  matricula: string;
  tipo: string;
  modelo: string;
  bateria: string;
  estado: string;
  direccion: string;
  nPlaza: string;
  editable: boolean;
  casco: string;
  color: string; // Agrega la propiedad 'editable'
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
  // eliminarFila(index: number) {
  //   console.log(this.vehiculoBackUp[index].id);

  //   this.adminService.eliminarVehiculo(this.vehiculoBackUp[index].id);
  //   this.vehiculos.splice(index,1)
  //   this.vehiculoBackUp.splice(index,1)
  // }
  actualizarMatricula(event: any, index: number) {
    this.vehiculos[index].matricula = event.target.textContent;
  }
  actualizarModelo(event: any, index: number) {
    this.vehiculos[index].modelo = event.target.textContent;
  }
  actualizarBateria(event: any, index: number) {
    this.vehiculos[index].bateria = event.target.textContent;
  }
  actualizarEstado(event: any, index: number) {
    this.vehiculos[index].estado = event.target.textContent;
  }
  actualizarDireccion(event: any, index: number) {
    this.vehiculos[index].direccion = event.target.textContent;
  }
  actualizarTipo(event: any, index: number) {
    this.vehiculos[index].tipo = event.target.textContent;
  }
  actualizarPlazas(event: any, index: number) {
    this.vehiculos[index].nPlaza = event.target.textContent;
  }
  eliminarVehiculo(index:number){
    try {
          this.adminService.eliminarVehiculo(this.vehiculos[index].id).subscribe({
            error: (error) =>{
              if (error.status==200){
                console.log("Se ha dado de baja correctamente");
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
  // guardarCambios(index: number) {
  //   this.vehiculos[index].editable = false;
  //   const { editable, ...vehiculo } = this.vehiculos[index];

  //   console.log(vehiculo);
  //   try {
  //     this.adminService.actualizarVehiculo(vehiculo).subscribe({
  //       error: (error) =>{
  //         if (error.status==200){
  //           console.log("La actualización se ha realizado con éxito");
  //           this.vehiculoBackUp[index]={...this.vehiculos[index]}
  //         }
  //         else{
  //           console.log(error);
  //         }
  //       }
  //   });
  //   } catch (error) {
      
  //   }
   
  // }
  

  // cancelarEdicion(index: number) {
  //   this.vehiculos[index].editable = false;
  //   console.log(this.vehiculos[index]);
  //   console.log(this.vehiculoBackUp[index]);

  //   this.vehiculos[index] = this.vehiculoBackUp[index];
  // }

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
        nPlaza: vehiculo.nPlaza,
        editable: false,
        casco: vehiculo.casco,
        color: vehiculo.color
      }));
      this.vehiculoBackUp = data.map(vehiculo => ({
        id: vehiculo.id,
        matricula: vehiculo.matricula,
        modelo: vehiculo.modelo,
        bateria: vehiculo.bateria,
        estado: vehiculo.estado,
        direccion: vehiculo.direccion,
        tipo: vehiculo.tipo,
        nPlaza: vehiculo.nPlaza,
        editable: false,
        casco: vehiculo.casco,
        color: vehiculo.color
      }));
    });

  }
  
}
