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

export class RegisterComponent{
  registerForm: FormGroup;

  constructor(private accountService : AccountService) { 
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

  ngOnInit(): void {

  }

  register(){
    console.log(this.registerForm.value)
    if(!this.checkDataInput()){
      // this.accountService.register(this.registerForm.value);
    }
  }
  checkDataInput(){
    if(this.checkSamePasword() || this.checkDNI()){
      return true;
    }
    return false;
  }
  checkDNI() {
    throw new Error('Method not implemented.');
    return false;
  }
  checkSamePasword(){
    const password1 = this.registerForm.get('password1');
    const password2 = this.registerForm.get('password2');
  
    if (password1 && password2 && password1.value && password2.value && password1.value === password2.value) {
      return true;
    } else {
      return false;
    }
  }

}