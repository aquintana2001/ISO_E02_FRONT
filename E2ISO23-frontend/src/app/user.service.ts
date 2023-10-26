import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient:HttpClient) { }

  register (info : any) {
    this.httpClient.post("http://localhost:8080/users/register",info)
    .subscribe(
      respuesta => {
      console.log(respuesta)
      },
      _error =>{
          alert("Error");
      })
    }
}