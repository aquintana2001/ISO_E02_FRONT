import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURLAdmin = "http://localhost:8080/admin/cliente";
  private baseURLAdminVehiculos = "http://localhost:8080/admin/vehiculo";


  constructor(private httpClient:HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURLAdmin}`);
  }

  getVehiculos(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURLAdminVehiculos}`);
  }
  register(info: any): Observable<any> {
    // Retorna el Observable directamente sin usar catchError
    return this.httpClient.post("http://localhost:8080/users/register", info);
  }

}