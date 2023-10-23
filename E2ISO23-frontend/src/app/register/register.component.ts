
import { Component, OnInit } from '@angular/core';
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
  registerForm = new FormGroup({
    'nombre': new FormControl('', Validators.required),
    'apellidos': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password1': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
    'ciudad': new FormControl('', Validators.required),
    'carnet': new FormControl('', Validators.required),
    'telefono': new FormControl('', Validators.required),
    'dni': new FormControl('', Validators.required),
  });
  
  nombre?: String
  apellidos?: String
  email?: String
  password1?: String
  password2?: String
  ciudad?: String
  carnet?: boolean
  telefono?: String
  dni?: String

  constructor(private userService : AccountService) { 
  }

  ngOnInit(): void {
  }

  register(){
    let info = {
      nombre : this.nombre,
      apellidos:this.apellidos,
      email:this.email,
      password1:this.password1,
      password2:this.password2,
      ciudad:this.ciudad,
      carnet:this.carnet,
      telefono:this.telefono,
      dni:this.dni
    }

    this.userService.register(info).subscribe(
      respuesta =>{
      alert(respuesta)
      console.log(respuesta)
    },error => {
      alert(error.error.message)
    })
  }

}
