import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaServiceService } from './reserva-service.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  idReserva:any="";
  private baseURLUserVehiculos = "http://localhost:8080/users/vehiculo";
  private baseURLReservaVehiculo = "http://localhost:8080/users/reserva";
  private baseURLListarReserva = "http://localhost:8080/users/listarReservas";
  private baseURLFinalizarReserva = "http://localhost:8080/users/finalizarReserva";
  private baseURLCancelarReserva = "http://localhost:8080/users/cancelarReserva";
  private baseURLGetDatos = "http://localhost:8080/cliente/getDatos";
  private baseURLModificarDatos = "http://localhost:8080/cliente/actualizarDatos";
  private baseURLRecuperarContrasena = "http://localhost:8080/users/reset-password"
  private baseURLCambiarContrasena = "http://localhost:8080/users/modificarContrasena"
  private baseURLConfirmarRegister = "http://localhost:8080/users/confirmarRegister"
  private baseURLConfirmarLogin = "http://localhost:8080/users/confirmarLoginCliente"
  private baseURLValorarReserva = "http://localhost:8080/cliente/valorarReserva"
  private baseURLEliminarCliente = "http://localhost:8080/cliente/darDeBaja";
  constructor(private httpClient: HttpClient,private reservaCompartidaService: ReservaServiceService) { 
    this.reservaCompartidaService.idReserva$.subscribe(idReserva => {
      this.idReserva = idReserva;
    });
  }

  register(info: any): Observable<any> {
    // Especifica el tipo de respuesta que esperas (arraybuffer)
    const options = { responseType: 'arraybuffer' as 'json' };

    return this.httpClient.post<any>("http://localhost:8080/users/register", info, options);
  }
  confirmarRegister(info: any): Observable<any> {
    return this.httpClient.post<any[]>(`${this.baseURLConfirmarRegister}`, info);
  }
  login(info: any): Observable<any> {
    return this.httpClient.put("http://localhost:8080/users/login", info);
  }
  confirmarLogin(info: any): Observable<any> {
    console.log(info);
    return this.httpClient.post<any[]>(`${this.baseURLConfirmarLogin}`, info);
  }
  getUser() {
    let userDataRaw = localStorage.getItem('userData');
    if (userDataRaw){
      let userData = JSON.parse(userDataRaw)
      let info ={
        emailUser: userData.email,
        passwordUser: userData.password
      }
      return info;
    }
    return null;
  }
  
  getVehiculosDisponibles(): Observable<any[]> {
      let infoUser = this.getUser()
      return this.httpClient.post<any[]>(`${this.baseURLUserVehiculos}`, infoUser);
  }

  getVehiculosNoDisponibles(): Observable<any[]> {
    let infoUser = this.getUser()
    return this.httpClient.post<any[]>(`${this.baseURLUserVehiculos}`, infoUser);
}

  reservarVehiculo(info: any): Observable<any[]>{
    let infoUser = this.getUser()
    let infoEnvio = {
      ...infoUser,
      ...info
    }
    return this.httpClient.post<any[]>(`${this.baseURLReservaVehiculo}`, infoEnvio);
  }
  getReservas(): Observable<any[]> {
    let infoUser = this.getUser()
    return this.httpClient.post<any[]>(`${this.baseURLListarReserva}`, infoUser);
  }
  finalizarReserva (info : any) {
    let infoUser = this.getUser()
    let infoEnvio = {
      idReserva:info,
      ...infoUser
    };
    const url = `${this.baseURLFinalizarReserva}`; 
    return this.httpClient.put(url, infoEnvio);
  }
  cancelarReserva (info : any) {
    let infoUser = this.getUser()
    let infoEnvio = {
      idReserva:info,
      ...infoUser
    };
    const url = `${this.baseURLCancelarReserva}`; 
    return this.httpClient.put(url, infoEnvio);
  }
  getDatos(): Observable<any[]> {
    let infoUser = this.getUser()
    return this.httpClient.post<any[]>(`${this.baseURLGetDatos}`, infoUser);
  }
  changePassword(info: any): Observable<any[]> {
    return this.httpClient.post<any[]>(`${this.baseURLCambiarContrasena}`, info);
  }
  recoveryPassword(info: any): Observable<any[]> {
    return this.httpClient.post<any[]>(`${this.baseURLRecuperarContrasena}`, info);
  }
  modificarDatos(info: any): Observable<any[]> {
    let infoUser = this.getUser()
    let infoEnvio = {
      ...info,
      password:infoUser?.passwordUser
    }
    return this.httpClient.put<any[]>(`${this.baseURLModificarDatos}`, infoEnvio);
  }
  valorarReserva(info: any): Observable<any[]> {
    let infoUser = this.getUser()
    let infoEnvio = {
      ...info,
      idReserva:this.idReserva,
      ...infoUser
    } 
    return this.httpClient.put<any[]>(`${this.baseURLValorarReserva}`, infoEnvio);
  }
  eliminarCliente(): Observable<any> {
    let infoUser = this.getUser()
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: infoUser // Incluir los datos en la propiedad "body"
    };
    let url = `${this.baseURLEliminarCliente}`; 
    return this.httpClient.request('delete', url, httpOptions)
  }
}