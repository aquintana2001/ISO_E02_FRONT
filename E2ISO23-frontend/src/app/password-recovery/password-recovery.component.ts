import { AccountService } from '../user.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {
  mensajeinfo:string = ""
  mostrarConfirmacion = 0
  loginForm: FormGroup;
  
  constructor(private userService : AccountService, private router: Router, private route: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
  });
  }
 onSubmit() {
    console.log('Login Form Submitted', this.loginForm.value);
    
    try {
      this.userService.recoveryPassword(this.loginForm.value).subscribe({
        error: (error) =>{
          console.log(error);
          if(error.status === 200){
            this.mostrarConfirmacion = 1;
            this.mensajeinfo = "Se ha enviado un correo electrónico de recuperación de contraseña";
          }
        }
    });
    } catch (error) {
      console.error('Error en el componente:', error);
      // Realiza acciones adicionales en caso de un error en el componente
    }
 }
}
