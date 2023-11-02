import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['../registro-admin/registro-admin.component.css']
})
export class AltaVehiculoComponent {

  altaVehiculoForm: FormGroup; // Declaración de FormGroup
    mensajeinfo:string = ""
    mostrarError = 0
    mostrarConfirmacion = 0
  constructor(private adminService : AdminServiceService) { 
    this.altaVehiculoForm = new FormGroup({
      'matricula': new FormControl('', Validators.required),
      'modelo': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'tipo': new FormControl('', Validators.required),
      'nPlazas': new FormControl(''),
      'color': new FormControl(''),
      'casco': new FormControl('')
    });
  }

  AltaVehiculoAdmin(){
      if(this.checkDataInput()){
        this.adminService.altaVehiculo(this.altaVehiculoForm.value).subscribe({
          error: (error) =>{
            if(error.status === 200){
              this.mostrarConfirmacion = 1;
              this.mostrarError = 0;
              this.mensajeinfo = "Vehículo dado de alto correctamente";
            }else{
              this.mostrarError = 1;
              this.mostrarConfirmacion = 0;
              this.mensajeinfo = error.error.message;
            }// Muestra el mensaje de error del servidor
          }
      });
      }
  }
  checkDataInput(){
    if(this.altaVehiculoForm.get('tipo')?.value === "coche"){
      let nlazas = this.altaVehiculoForm.get('nPlazas')?.value;
      if(nlazas && !isNaN(nlazas)){
        return true;
      }
    }else{
      return true;
    }
    return false;
  }

}