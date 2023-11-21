import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class AdminViewComponent {
  customData: any;
  showRegisterComponent = false;
  showConsultarClientesComponent = true;
  showAltaVehiculoComponent = false;
  showVehiculosComponent = false;
  showParametrosComponent = false;
  showRegisterMaintenanceComponent = false;
  showRegisterAdmin() {
    this.showRegisterComponent = true;
    this.showConsultarClientesComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showVehiculosComponent = false;
    this.showRegisterMaintenanceComponent = false;
    this.showParametrosComponent = false;
 }

 showClientes() {
    this.showConsultarClientesComponent = true;
    this.showRegisterComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showVehiculosComponent = false;
    this.showRegisterMaintenanceComponent = false;
    this.showParametrosComponent = false;
 }
 showVehiculos(){
    this.showVehiculosComponent = true;
    this.showConsultarClientesComponent = false;
    this.showRegisterComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showRegisterMaintenanceComponent = false;
    this.showParametrosComponent = false;
 }
 showAltaVehiculo(){
    this.showAltaVehiculoComponent = true;
    this.showVehiculosComponent = false;
    this.showConsultarClientesComponent = false;
    this.showRegisterComponent = false;
    this.showRegisterMaintenanceComponent = false;
    this.showParametrosComponent = false;
 }
 showRegisterMaintenance() {
   this.showRegisterComponent = false;
   this.showConsultarClientesComponent = false;
   this.showAltaVehiculoComponent = false;
   this.showVehiculosComponent = false;
   this.showRegisterMaintenanceComponent = true;
   this.showParametrosComponent = false;
}
 showModificarParametros(){
   this.showAltaVehiculoComponent = false;
   this.showVehiculosComponent = false;
   this.showConsultarClientesComponent = false;
   this.showRegisterComponent = false
   this.showRegisterMaintenanceComponent = false;
   this.showParametrosComponent = true;
 }
}
