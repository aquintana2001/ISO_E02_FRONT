import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent implements OnInit {
    clientes: any[] = []; 
    HttpClient: any;

  constructor(private AccountService: HttpClient) { }

  ngOnInit() {
    this.HttpClient.obtenerClientes().subscribe((data: any[]) => {
      this.clientes = data;
    });
  }
}
