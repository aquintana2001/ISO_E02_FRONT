import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
        username: userData.email,
        password: userData.password
      }
      return info;
    }
    return null;

  }
  getAdmin() {
    let userDataRaw = localStorage.getItem('userData');
    if (userDataRaw){
      let userData = JSON.parse(userDataRaw)
      let info ={
        emailAdmin: userData.email,
        passwordAdmin: userData.password
      }
      return info;
    }
    return null;
  }
}