import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'

@Component({
  selector: 'app-modificar-parametros',
  templateUrl: './modificar-parametros.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class ModificarParametrosComponent {
  parametros:any;
  constructor(private adminService : AdminServiceService) { }
  actualizarPrecioViaje(event: any) {
    this.parametros.precioViaje = event.target.textContent;
  }
  actualizarMinimoBateria(event: any) {
    this.parametros.minimoBateria = event.target.textContent;
  }
  actualizarBateriaViaje(event: any) {
    this.parametros.bateriaViaje = event.target.textContent;
  }
  actualizarMaxVehiculosMantenimiento(event: any) {
    this.parametros.maxVehiculosMantenimiento = event.target.textContent;
  }
  
  
  modificarParametros() {
    try {
      this.adminService.modificarParametros(this.parametros).subscribe({
        error: (error) =>{
          if (error.status==200){
            console.log("La actualización se ha realizado con éxito");
          }
          else{
            console.log(error);
          }
        }
    });
    } catch (error) {

    }
   
  }
  ngOnInit() {
    this.parametros = {
      precioViaje:5,
      minimoBateria:20,
      bateriaViaje:20,
      maxVehiculosMantenimiento:6
    }
  }
}
