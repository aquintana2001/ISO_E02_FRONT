import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm = new FormGroup({
   email2: new FormControl('', [Validators.required, Validators.email]),
   'password': new FormControl('', Validators.required)
 });

 onSubmit() {
    // Add your login logic here
    console.log('Login Form Submitted', this.loginForm.value);
 }
}
