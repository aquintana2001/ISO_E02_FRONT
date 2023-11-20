import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURLUserVehiculos = "http://localhost:8080/cliente/vehiculo";
  constructor(private httpClient: HttpClient) { }

  register(info: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/users/register", info);
  }
  login(info: any): Observable<any> {
    return this.httpClient.put("http://localhost:8080/users/login", info);
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
}