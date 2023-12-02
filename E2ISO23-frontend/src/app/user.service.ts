import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaServiceService } from './reserva-service.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  idReserva:any="";
  private baseURLUserVehiculos = "https://e2iso23.onrender.com/users/vehiculo";
  private baseURLReservaVehiculo = "https://e2iso23.onrender.com/users/reserva";
  private baseURLListarReserva = "https://e2iso23.onrender.com/users/listarReservas";
  private baseURLFinalizarReserva = "https://e2iso23.onrender.com/users/finalizarReserva";
  private baseURLCancelarReserva = "https://e2iso23.onrender.com/users/cancelarReserva";
  private baseURLGetDatos = "https://e2iso23.onrender.com/cliente/getDatos";
  private baseURLModificarDatos = "https://e2iso23.onrender.com/cliente/actualizarDatos";
  private baseURLRecuperarContrasena = "https://e2iso23.onrender.com/users/reset-password"
  private baseURLCambiarContrasena = "https://e2iso23.onrender.com/users/modificarContrasena"
  private baseURLConfirmarRegister = "https://e2iso23.onrender.com/users/confirmarRegister"
  private baseURLConfirmarLogin = "https://e2iso23.onrender.com/users/confirmarLoginCliente"
  private baseURLValorarReserva = "https://e2iso23.onrender.com/cliente/valorarReserva"
  private baseURLEliminarCliente = "https://e2iso23.onrender.com/cliente/darDeBaja";
  constructor(private httpClient: HttpClient,private reservaCompartidaService: ReservaServiceService) { 
    this.reservaCompartidaService.idReserva$.subscribe(idReserva => {
      this.idReserva = idReserva;
    });
  }

  register(info: any): Observable<any> {
    // Especifica el tipo de respuesta que esperas (arraybuffer)
    const options = { responseType: 'arraybuffer' as 'json' };

    return this.httpClient.post<any>("https://e2iso23.onrender.com/users/register", info, options);
  }
  confirmarRegister(info: any): Observable<any> {
    return this.httpClient.post<any[]>(`${this.baseURLConfirmarRegister}`, info);
  }
  login(info: any): Observable<any> {
    return this.httpClient.put("https://e2iso23.onrender.com/users/login", info);
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