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
  private baseURLAdminAltaVehiculo = "http://localhost:8080/admin/darAltaVehiculo";

  registerAdmin (info : any) {
    let infoUser = this.accountService.getAdmin()
    const infoEnvio = {
      ...info,
      emailAdmin:infoUser.emailAdmin,
      passwordAdmin:infoUser.passwordAdmin
    };
    return this.httpClient.post("http://localhost:8080/admin/register", infoEnvio);
  }
  getClientes(): Observable<any[]> {
    let infoUser = this.accountService.getAdmin()
    console.log(infoUser)
    return this.httpClient.post<any[]>(`${this.baseURLAdminClientes}`, infoUser);
  }

  getVehiculos(): Observable<any[]> {
    let infoUser = this.accountService.getAdmin()
    return this.httpClient.post<any[]>(`${this.baseURLAdminVehiculos}`, infoUser);
  }
  actualizarCliente(cliente: any): Observable<any> {
    let infoUser = this.accountService.getAdmin()
    const info = {
      ...cliente,
      emailAdmin:infoUser.emailAdmin,
      passwordAdmin:infoUser.passwordAdmin
    };
    const url = `${this.baseURLAdminActualizarCliente}`; 
    return this.httpClient.put(url, info);
  }
  // actualizarVehiculo(vehiculo: any): Observable<any> {
  //   let infoUser = this.accountService.getAdmin()
  //   const info = {
  //     ...vehiculo,
  //     emailAdmin:infoUser.emailAdmin,
  //     passwordAdmin:infoUser.passwordAdmin
  //   };
  //   const url = `${this.baseURLAdminVehiculos}`; 
  //   return this.httpClient.put(url, info);
  // }
  eliminarCliente(emailCliente: any): Observable<any> {
    let infoUser = this.accountService.getAdmin()
    let dataToDelete = {
      email:emailCliente,
      emailAdmin:infoUser.emailAdmin,
      passwordAdmin:infoUser.passwordAdmin
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
    let infoUser = this.accountService.getAdmin()
    const infoEnvio = {
      ...info,
      emailAdmin:infoUser.emailAdmin,
      passwordAdmin:infoUser.passwordAdmin
    };
    return this.httpClient.post(`${this.baseURLAdminAltaVehiculo}`, infoEnvio);
  }
  eliminarVehiculo (info : any) {
    let infoUser = this.accountService.getAdmin()
    let dataToDelete = {
      id:info,
      emailAdmin:infoUser.emailAdmin,
      passwordAdmin:infoUser.passwordAdmin
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
}
