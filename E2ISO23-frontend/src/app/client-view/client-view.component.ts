import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class ClientViewComponent {
  customData: any;
  showVehiculosComponent = true;
  showReservasComponent = false;
  showPerfilComponent = false;
  constructor(private route: ActivatedRoute) {
    // Tu constructor
  }
  showVehiculos() {
    this.showVehiculosComponent = true;
    this.showReservasComponent = false;
    this.showPerfilComponent = false;
  }
  showReservas() {
    this.showVehiculosComponent = false;
    this.showReservasComponent = true;
    this.showPerfilComponent = false;
  }
  showPerfil() {
    this.showVehiculosComponent = false;
    this.showReservasComponent = false;
    this.showPerfilComponent = true;
  }
}