import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  username:any;
  password:any;

  constructor(private httpClient: HttpClient) { }

  register(info: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/users/register", info);
  }
  login(info: any): Observable<any> {
    this.username=info.email;
    this.password=info.password;
    return this.httpClient.put("http://localhost:8080/users/login", info);
  }
  getUser() {
    let info ={
      username: this.username,
      password: this.password
    }
    return info;
  }
  getAdmin() {
    let info ={
      emailAdmin: this.username,
      passwordAdmin: this.password
    }
    return info;
  }
}