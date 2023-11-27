import { AccountService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../password-recovery/password-recovery.component.css']
})
export class ChangePasswordComponent implements OnInit {
  mensajeinfo: string = "";
  mostrarError = 0;
  mostrarConfirmacion = 0;
  loginForm: FormGroup;
  token: string = "";

  constructor(private userService: AccountService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pwd1': new FormControl('', Validators.required),
      'pwd2': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Obtén el valor del token de los parámetros de la consulta en la URL
    let tokenAux = this.route.snapshot.queryParamMap.get('token');
    if (tokenAux)
      this.token = tokenAux;
    console.log(this.token)
  }

  onSubmit() {
    console.log('Login Form Submitted', this.loginForm.value);
    let info = {
      ...this.loginForm.value,
      token: this.token
    };

    try {
      this.userService.changePassword(info).subscribe({
        error: (error) => {
          console.log(error);
          if (error.status === 200) {
            this.mostrarConfirmacion = 1;
            this.mostrarError = 0;
            this.mensajeinfo = "Contraseña cambiada correctamente";
          } else {
            this.mostrarError = 1;
            this.mostrarConfirmacion = 0;
            this.mensajeinfo = error.error;
          }
        }
      });
    } catch (error) {
      console.error('Error en el componente:', error);
      // Realiza acciones adicionales en caso de un error en el componente
    }
  }
}