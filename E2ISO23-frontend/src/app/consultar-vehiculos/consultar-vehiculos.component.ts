import { Component, OnInit } from '@angular/core';
import { AccountService } from '../user.service';


@Component({
  selector: 'app-consultar-vehiculos',
  templateUrl: './consultar-vehiculos.component.html',
  styleUrls: ['./consultar-vehiculos.component.css']
})
export class ConsultarVehiculosComponent implements OnInit {
  vehiculos: any[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getVehiculos().subscribe((data: any[]) => {
      this.vehiculos = data;
    });
  }
}
