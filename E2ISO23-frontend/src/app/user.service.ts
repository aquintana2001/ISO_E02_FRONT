import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURLAdmin = "http://localhost:8080/admin/cliente";

  constructor(private httpClient:HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURLAdmin}`);
  }
  
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