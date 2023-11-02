//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Component } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})

export class RegistroAdminComponent{
    registroAdminForm: FormGroup; // Declaración de FormGroup
    mensajeinfo:string = ""
    mostrarError = 0
    mostrarConfirmacion = 0
  constructor(private adminService : AdminServiceService) { 
    this.registroAdminForm = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellidos': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required),
    });
  }

  registerAdmin(){
    if(this.checkDataInput()){
      this.mostrarError = 0;
      this.mostrarConfirmacion = 0;
      try {
        this.adminService.registerAdmin(this.registroAdminForm.value).subscribe({
          error: (error) =>{
            this.mostrarError = 1;
            this.mostrarConfirmacion = 0;
            this.mensajeinfo = error.error.message; // Muestra el mensaje de error del servidor
          }
      });
      } catch (error) {
        console.error('Error en el componente:', error);
        // Realiza acciones adicionales en caso de un error en el componente
      }
      if(this.mostrarError==0){
        this.mostrarConfirmacion = 1;
        this.mostrarError==0;
        this.mensajeinfo = "Registrado correctamente";
      }
    }
  }
  checkDataInput(){
    if(this.checkPasword()){
      return true;
    }
    this.mostrarError = 1;
    return false;
  }
  checkPasword(){
    let password1 = this.registroAdminForm.get('password1');
    let password2 = this.registroAdminForm.get('password2');
  
    if (password1 && password2 && password1.value && password2.value && password1.value === password2.value) {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if(!regex.test(password1.value?.toString() || '')){
        this.mensajeinfo = "Las contraseñas debe incluir como mínimo una mayúscula, una minúscula, un número y un carácter especial (*,/,-,etc)";
        return false;
      }else{
        return true;
      }
      
    } else {
      this.mensajeinfo = "Las contraseñas no coinciden";
      return false;
    }
  }

}