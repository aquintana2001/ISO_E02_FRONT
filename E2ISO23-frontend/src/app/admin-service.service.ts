import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from './user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient,private accountService : AccountService) { }
  private baseURLAdminClientes = "http://localhost:8080/admin/cliente";
  private baseURLAdminActualizarCliente = "http://localhost:8080/admin/actualizarCliente";
  private baseURLAdminEliminarCliente = "http://localhost:8080/admin/eliminarCliente";
  private baseURLAdminDarBajaVehiculo = "http://localhost:8080/admin/darBajaVehiculo";
  private baseURLAdminVehiculos = "http://localhost:8080/admin/vehiculo";
  private baseURLAdminActualizarVehiculo = "http://localhost:8080/admin/actualizarVehiculo";
  private baseURLAdminAltaVehiculo = "http://localhost:8080/admin/darAltaVehiculo";
  private baseURLAdminModificarParametros = "http://localhost:8080/admin/actualizarParametros";

  registerAdmin (info : any) {
    let infoUser = this.accountService.getUser()
    const infoEnvio = {
      ...info,
      ...infoUser
    };
    return this.httpClient.post("http://localhost:8080/admin/register", infoEnvio);
  }
  getClientes(): Observable<any[]> {
    let infoUser = this.accountService.getUser()
    console.log(infoUser)
    return this.httpClient.post<any[]>(`${this.baseURLAdminClientes}`, infoUser);
  }

  getVehiculos(): Observable<any[]> {
    let infoUser = this.accountService.getUser()
    return this.httpClient.post<any[]>(`${this.baseURLAdminVehiculos}`, infoUser);
  }
  actualizarCliente(cliente: any): Observable<any> {
    let infoUser = this.accountService.getUser()
    const info = {
      ...cliente,
      ...infoUser
    };
    const url = `${this.baseURLAdminActualizarCliente}`; 
    return this.httpClient.put(url, info);
  }
  actualizarVehiculo(vehiculo: any): Observable<any> {
    let infoUser = this.accountService.getUser()
    const info = {
      ...vehiculo,
      ...infoUser
    };
    const url = `${this.baseURLAdminActualizarVehiculo}`; 
    return this.httpClient.put(url, info);
  }
  eliminarCliente(emailCliente: any): Observable<any> {
    let infoUser = this.accountService.getUser()
    let dataToDelete = {
      email:emailCliente,
      ...infoUser
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: dataToDelete // Incluir los datos en la propiedad "body"
    };
    let url = `${this.baseURLAdminEliminarCliente}`; 
    return this.httpClient.request('delete', url, httpOptions)
  }

  altaVehiculo (info : any) {
    let infoUser = this.accountService.getUser()
    const infoEnvio = {
      ...info,
      ...infoUser
    };
    return this.httpClient.post(`${this.baseURLAdminAltaVehiculo}`, infoEnvio);
  }
  eliminarVehiculo (info : any) {
    let infoUser = this.accountService.getUser()
    let dataToDelete = {
      id:info,
      ...infoUser
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: dataToDelete // Incluir los datos en la propiedad "body"
    };
    let url = `${this.baseURLAdminDarBajaVehiculo}`; 
    return this.httpClient.request('delete', url, httpOptions)
  }
  modificarParametros (info: any) {
    let infoUser = this.accountService.getUser();
    let infoEnvio = {
      ...info,
      ...infoUser
    }
    const url = `${this.baseURLAdminModificarParametros}`; 
    return this.httpClient.put(url, infoEnvio);
  }
}
