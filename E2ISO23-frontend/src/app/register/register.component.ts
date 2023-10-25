
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
  registerForm = new FormGroup({
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
  
  nombre?: string = "Guillermo"
  apellidos?: string = "Santos"
  email?: string = "guillermo.santos1@alu.uclm.es"
  password1?: string = "Pepito123*"
  password2?: string = "Pepito123*"
  fechaNacimiento?: string = "11-12-1999"
  carnet?: string = "A"
  telefono?: string = "626165188"
  dni?: string = "039432343Q"


constructor(private accountService : AccountService) { 
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
      fechaNacimiento:this.fechaNacimiento,
      carnet:this.carnet,
      telefono:this.telefono,
      dni:this.dni
    }
    console.log(info);

    this.accountService.register(info).subscribe(
      (      respuesta: any) =>{
      alert(respuesta)
      console.log(respuesta)
    },(error: { error: { message: any; }; }) => {
      alert(error.error.message)
    })
  }

}
