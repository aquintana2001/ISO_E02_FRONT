import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance-view',
  templateUrl: './maintenance-view.component.html',
  styleUrls: ['./maintenance-view.component.css']
})
export class MaintenanceViewComponent {
  customData: any;
  showVehiculosComponent = true;
  showReservasComponent = false;

  constructor() {
    // Tu constructor
  }
  showVehiculos() {
    this.showVehiculosComponent = true;
    this.showReservasComponent = false;
  }
  showReservas(){
    this.showReservasComponent = true;
    this.showVehiculosComponent= false;
  }
 
}