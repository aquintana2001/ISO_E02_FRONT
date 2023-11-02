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
  
  constructor(private userService : AccountService, private router: Router, private route: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
  });
  }
 onSubmit() {
    console.log('Login Form Submitted', this.loginForm.value);
    
    try {
      this.userService.login(this.loginForm.value).subscribe({
        error: (error) =>{
          console.log(error);
          if(error.status === 200){
            if(error.error.text =="cliente"){
              this.redirigirConDatosCliente()
            }else{
              this.redirigirConDatosAdmin()
            }
            this.mostrarConfirmacion = 1;
            this.mostrarError = 0;
            this.mensajeinfo = "Login correcto";
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
  redirigirConDatosCliente() {
    const navigationExtras: NavigationExtras = {
      state: {
        customData: this.loginForm.value
      }
    };
    this.router.navigate(['/client-view'], navigationExtras);
  }
  redirigirConDatosAdmin() {
    customData: this.loginForm.value
    const navigationExtras: NavigationExtras = {
      state: {
        customData: this.loginForm.value
      }
    };
    this.router.navigate(['/admin-view'], navigationExtras);
  }
}
