//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../user.service';
import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  mensajeinfo: string = "";
  mostrarError = 0;
  mostrarConfirmacion = 0;
  codigo:any;
  imagenUrl: any;
  constructor(private accountService: AccountService) {
    this.registerForm = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellidos': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required),
      'fechaNacimiento': new FormControl('', Validators.required),
      'carnet': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'dni': new FormControl('', Validators.required),
    });
  }

  register() {
    if (this.checkDataInput()) {
      this.mostrarError = 0;
      this.mostrarConfirmacion = 0;
      try {
        this.accountService.register(this.registerForm.value).subscribe({
          next: (response: any) => {
            // La solicitud fue exitosa
            console.log('Datos de la imagen:', response);
            this.mostrarConfirmacion = 1;
            this.mostrarError = 0;
            this.mensajeinfo = "Sólo falta activar la doble autenticación";
            this.imagenUrl = this.arrayBufferToBase64(response); // Ajusta según la estructura de tu respuesta

            // Puedes usar imagenUrl en tu componente o hacer lo que necesites con la imagen
          },
          error: (error) => {
            // Hubo un error en la solicitud
            if (error.status !== 200) {
              this.mostrarError = 1;
              this.mostrarConfirmacion = 0;
            }
          }
        });
      } catch (error) {
        console.error('Error en el componente:', error);
        // Realiza acciones adicionales en caso de un error en el componente
      }
    }
  }
  confirmarRegister(){
    let info = {
      email: this.registerForm.value.email,
      codigo: this.codigo
    }
    console.log(info)
    this.accountService.confirmarRegister(info).subscribe({
      next: (response: any) => {
        // La solicitud fue exitosa
        this.mostrarConfirmacion = 1;
        this.mostrarError = 0;
        this.mensajeinfo = "Register hecho correctamente";

        // Puedes usar imagenUrl en tu componente o hacer lo que necesites con la imagen
      },
      error: (error) => {
        // Hubo un error en la solicitud
        if (error.status !== 200) {
          this.mostrarError = 1;
          this.mostrarConfirmacion = 0;
        }
      }
    });
  }
  checkDataInput() {
    if (this.checkPasword() && this.checkDNI()) {
      return true;
    }
    this.mostrarError = 1;
    return false;
  }
  checkDNI() {
    const dniControl = this.registerForm.get('dni');

    if (!dniControl) {
      // Manejar el caso en el que el control de formulario sea nulo
      this.mensajeinfo = "Debes introducir un valor en el campo DNI";
      return false;
    }

    const dniValue = dniControl.value?.toString() || '';
    const dniRegex = /^\d{8}[A-Za-z]$/;

    if (!dniRegex.test(dniValue)) {
      this.mensajeinfo = "El formato del DNI no es correcto";
      return false; // El formato no es correcto
    }

    // Obtén los 8 dígitos del DNI
    const numDNI = dniValue.slice(0, 8);

    // Lista de letras válidas para el DNI
    const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';

    // Calcula el valor esperado de la letra
    const valorEsperado = letrasValidas[parseInt(numDNI, 10) % 23];

    // Obtiene la letra del DNI
    const letraDNI = dniValue.charAt(8).toUpperCase();
    if (letraDNI === valorEsperado) {
      return true;
    } else {
      this.mensajeinfo = "Letra incorrecta del DNI";
      return false;
    }
  }
  checkPasword() {
    let password1 = this.registerForm.get('password1');
    let password2 = this.registerForm.get('password2');

    if (password1 && password2 && password1.value && password2.value && password1.value === password2.value) {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!regex.test(password1.value?.toString() || '')) {
        this.mensajeinfo = "Las contraseñas debe incluir como mínimo una mayúscula, una minúscula, un número y un carácter especial (*,/,-,etc)";
        return false;
      } else {
        return true;
      }

    } else {
      this.mensajeinfo = "Las contraseñas no coinciden";
      return false;
    }
  }
  arrayBufferToBase64(buffer: any) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return 'data:image/jpeg;base64,' + btoa(binary);
  }
}