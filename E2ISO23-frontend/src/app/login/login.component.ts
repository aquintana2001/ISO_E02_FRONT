import { AccountService } from '../user.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeinfo:string = ""
  mostrarError = 0
  mostrarConfirmacion = 0
  loginForm: FormGroup;
  codigo = 0;
  constructor(private userService : AccountService, private router: Router, private route: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
  });
  }
 onSubmit() {
    try {
      this.userService.login(this.loginForm.value).subscribe({
        error: (error) =>{
          if(error.status === 200){
            if(error.error.text =="cliente"){
              this.mensajeinfo = "Introduzca el código de doble verificación";
            }else if(error.error.text =="admin"){
              this.guardarDatosEnLocalStorage(this.loginForm.value);
              this.redirigirConDatosAdmin();
              this.mensajeinfo = "Login correcto";
            }else{
              this.guardarDatosEnLocalStorage(this.loginForm.value);
              this.redirigirConDatosMantenimiento();
              this.mensajeinfo = "Login correcto";
            }
            this.mostrarConfirmacion = 1;
            this.mostrarError = 0;
            
          }else{
            this.mostrarError = 1;
            this.mostrarConfirmacion = 0;
            this.mensajeinfo = error.error.message;
          }
        }
    });
    } catch (error) {
      console.error('Error en el componente:', error);
      // Realiza acciones adicionales en caso de un error en el componente
    }
 }
  confirmarLogin(){
    let infoEnvio ={
      ...this.loginForm.value,
      codigo:this.codigo
    }
    try {
      this.userService.confirmarLogin(infoEnvio).subscribe({
        error: (error) =>{
          console.log(error);
          if(error.status === 200){
            this.mostrarConfirmacion = 1;
            this.mostrarError = 0;
            this.mensajeinfo = "Login correcto";
            this.guardarDatosEnLocalStorage(this.loginForm.value);
            this.redirigirConDatosCliente();
          }else{
            this.mostrarError = 1;
            this.mostrarConfirmacion = 0;
            this.mensajeinfo = "Código incorrecto";
          }
        }
    });
    } catch (error) {
      console.error('Error en el componente:', error);
      // Realiza acciones adicionales en caso de un error en el componente
    }
    

  }
  redirigirConDatosCliente() {
    const navigationExtras: NavigationExtras = {
      state: {
        customData: this.loginForm.value
      }
    };
    this.router.navigate(['/client-view'], navigationExtras);
  }
  redirigirConDatosAdmin() {
    const navigationExtras: NavigationExtras = {
      state: {
        customData: this.loginForm.value
      }
    };
    this.router.navigate(['/admin-view'], navigationExtras);
  }
  redirigirConDatosMantenimiento() {
    const navigationExtras: NavigationExtras = {
      state: {
        customData: this.loginForm.value
      }
    };
    this.router.navigate(['/maintenance-view'], navigationExtras);
  }
  private guardarDatosEnLocalStorage(data: any) {
    // Almacena los datos en localStorage con una clave específica
    localStorage.setItem('userData', JSON.stringify(data));
  }
}
