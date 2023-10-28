import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURLAdmin = "http://localhost:8080/admin/cliente";
  private baseURLAdminActualizarCliente = "http://localhost:8080/admin/actualizarCliente";
  private baseURLAdminEliminarCliente = "http://localhost:8080/admin/eliminarCliente";
  private baseURLAdminVehiculos = "http://localhost:8080/admin/vehiculo";

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURLAdmin}`);
  }

  getVehiculos(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURLAdminVehiculos}`);
  }

  register(info: any) {
    this.httpClient.post("http://localhost:8080/users/register", info)
      .subscribe(
        respuesta => {
          console.log(respuesta);
        },
        error => {
          alert("Error");
        }
      );
  }
  
  actualizarCliente(cliente: any): Observable<any> {
    const url = `${this.baseURLAdminActualizarCliente}`; 
    return this.httpClient.put(url, cliente);
  }
  eliminarCliente(emailCliente: any): Observable<any> {
    const url = `${this.baseURLAdminEliminarCliente}`; 
    return this.httpClient.delete(url, emailCliente);
  }

  
}