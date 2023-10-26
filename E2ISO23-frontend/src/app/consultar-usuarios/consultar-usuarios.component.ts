import { Component, OnInit } from '@angular/core';
import { AccountService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getClientes().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }
}
