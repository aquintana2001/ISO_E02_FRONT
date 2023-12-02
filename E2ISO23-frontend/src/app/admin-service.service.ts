import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from './user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient,private accountService : AccountService) { }
  private baseURLAdminClientes = "https://e2iso23.onrender.com/admin/cliente";
  private baseURLAdminActualizarCliente = "https://e2iso23.onrender.com/admin/actualizarCliente";
  private baseURLAdminDarBajaVehiculo = "https://e2iso23.onrender.com/admin/darBajaVehiculo";
  private baseURLAdminVehiculos = "https://e2iso23.onrender.com/admin/vehiculo";
  private baseURLAdminActualizarVehiculo = "https://e2iso23.onrender.com/admin/actualizarVehiculo";
  private baseURLAdminAltaVehiculo = "https://e2iso23.onrender.com/admin/darAltaVehiculo";
  private baseURLAdminParametros = "https://e2iso23.onrender.com/admin/getParametros";
  private baseURLAdminModificarParametros = "https://e2iso23.onrender.com/admin/actualizarParametros";
  private baseURLAdminObtenerFacturacion = "https://e2iso23.onrender.com/admin/obtenerFacturacion";

  registerAdmin (info : any) {
    let infoUser = this.accountService.getUser()
    const infoEnvio = {
      ...info,
      ...infoUser
    };
    return this.httpClient.post("https://e2iso23.onrender.com/admin/register", infoEnvio);
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
  getParametros(): Observable<any[]> {
    let infoUser = this.accountService.getUser()
    return this.httpClient.post<any[]>(`${this.baseURLAdminParametros}`, infoUser);
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
  obtenerFacturacion (info : any) {
    let infoUser = this.accountService.getUser()
    const infoEnvio = {
      ...info,
      ...infoUser
    };
    return this.httpClient.post(`${this.baseURLAdminObtenerFacturacion}`, infoEnvio);
  }
}
