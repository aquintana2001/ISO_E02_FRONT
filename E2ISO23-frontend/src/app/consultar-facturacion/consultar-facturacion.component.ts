import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-facturacion',
  templateUrl: './consultar-facturacion.component.html',
  styleUrls: ['../registro-admin/registro-admin.component.css']
})
export class ConsultarFacturacionComponent {
  mensajeinfo:string = ""
  mostrarError = 0
  mostrarConfirmacion = 0
  loginForm: FormGroup;
  constructor(private adminService : AdminServiceService) { 
    this.loginForm = new FormGroup({
      'fechaInicio': new FormControl('', Validators.required),
      'fechaFin': new FormControl('', Validators.required),
  });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    
  }
}
