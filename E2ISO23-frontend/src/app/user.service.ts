import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURLAdminClientes = "http://localhost:8080/admin/cliente";
  private baseURLAdminActualizarCliente = "http://localhost:8080/admin/actualizarCliente";
  private baseURLAdminEliminarCliente = "http://localhost:8080/admin/eliminarCliente";
  private baseURLAdminDarBajaVehiculo = "http://localhost:8080/admin/darBajaVehiculo";

  private baseURLAdminVehiculos = "http://localhost:8080/admin/vehiculo";

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<any[]> {
    const info = {
      email: "pepe@pepe.com",
      password: "Hola123*"
    };
    return this.httpClient.post<any[]>(`${this.baseURLAdminClientes}`, info);
  }

  getVehiculos(): Observable<any[]> {
    const info = {
      email: "pepe@pepe.com",
      password: "Hola123*"
    };
    return this.httpClient.post<any[]>(`${this.baseURLAdminVehiculos}`, info);
  }

  register(info: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/users/register", info);
  }
  
  actualizarCliente(cliente: any): Observable<any> {
    const url = `${this.baseURLAdminActualizarCliente}`; 
    return this.httpClient.put(url, cliente);
  }
  actualizarVehiculo(vehiculo: any): Observable<any> {
    const url = `${this.baseURLAdminVehiculos}`; 
    return this.httpClient.put(url, vehiculo);
  }
  eliminarCliente(emailCliente: any): Observable<any> {
    const url = `${this.baseURLAdminEliminarCliente}`; 
    return this.httpClient.delete(url, emailCliente);
  }
  eliminarVehiculo(id: any): Observable<any> {
    const url = `${this.baseURLAdminDarBajaVehiculo}`;
    const info = {
      emailAdmin: "pepe@pepe.com",
      password: "Hola123*",
      id: id
    }; 
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        emailAdmin: "pepe@pepe.com",
        password: "Hola123*",
        id: id
      },
    };
    console.log(id);
    return this.httpClient.delete(url, options);
  }

  
}