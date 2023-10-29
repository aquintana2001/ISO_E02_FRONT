import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }
  private baseURLAdminClientes = "http://localhost:8080/admin/cliente";
  private baseURLAdminActualizarCliente = "http://localhost:8080/admin/actualizarCliente";
  private baseURLAdminEliminarCliente = "http://localhost:8080/admin/eliminarCliente";
  private baseURLAdminDarBajaVehiculo = "http://localhost:8080/admin/darBajaVehiculo";
  private baseURLAdminVehiculos = "http://localhost:8080/admin/vehiculo";
  private baseURLAdminAltaVehiculo = "http://localhost:8080/admin/darAltaVehiculo";

  registerAdmin (info : any) {
    info = {...info,emailAdmin:"pepe@pepe.com",passwordAdmin:"Hola123*"}
    return this.httpClient.post("http://localhost:8080/admin/register", info);
  }
  getClientes(): Observable<any[]> {
    const info = {
      emailAdmin: "pepe@pepe.com",
      passwordAdmin: "Hola123*"
    };
    return this.httpClient.post<any[]>(`${this.baseURLAdminClientes}`, info);
  }

  getVehiculos(): Observable<any[]> {
    const info = {
      emailAdmin: "pepe@pepe.com",
      passwordAdmin: "Hola123*"
    };
    return this.httpClient.post<any[]>(`${this.baseURLAdminVehiculos}`, info);
  }
  actualizarCliente(cliente: any): Observable<any> {
    const info = {
      ...cliente,
      emailAdmin: "pepe@pepe.com",
      passwordAdmin: "Hola123*"
    };
    const url = `${this.baseURLAdminActualizarCliente}`; 
    return this.httpClient.put(url, info);
  }
  actualizarVehiculo(vehiculo: any): Observable<any> {
    const info = {
      ...vehiculo,
      emailAdmin: "pepe@pepe.com",
      passwordAdmin: "Hola123*"
    };
    const url = `${this.baseURLAdminVehiculos}`; 
    return this.httpClient.put(url, info);
  }
  // eliminarCliente(emailCliente: any): Observable<any> {
  //   const info = {
  //     ...emailCliente,
  //     emailAdmin: "pepe@pepe.com",
  //     passwordAdmin: "Hola123*"
  //   };
  //   const url = `${this.baseURLAdminEliminarCliente}`; 
  //   return this.httpClient.delete(url, info);
  // }
  // eliminarVehiculo(id: any): Observable<any> {

  //   const info = {
  //     ...id,
  //     emailAdmin: "pepe@pepe.com",
  //     passwordAdmin: "Hola123*"
  //   };
  //   const url = `${this.baseURLAdminDarBajaVehiculo}`; 
  //   return this.httpClient.delete(url, info);
  // }
  altaVehiculo (info : any) {
    info = {...info,emailAdmin:"pepe@pepe.com",passwordAdmin:"Hola123*"}
    return this.httpClient.post(`${this.baseURLAdminAltaVehiculo}`, info);
  }
}
