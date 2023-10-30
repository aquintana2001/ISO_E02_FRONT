import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class AdminViewComponent {
  customData: any;
  email:string = "pepe@pepe.com";
  password:string = "Hola123*";
  showRegisterComponent = false;
  showConsultarClientesComponent = true;
  showAltaVehiculoComponent = false;
  showVehiculosComponent = false
 
  constructor(private route: ActivatedRoute) {
    // Tu constructor
  }
  
  ngOnInit() {
    this.customData = this.route.snapshot.paramMap.get('customData'); // Accede a los datos personalizados

  }
  showRegisterAdmin() {
    this.showRegisterComponent = true;
    this.showConsultarClientesComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showVehiculosComponent = false;
 }

 showClientes() {
    this.showConsultarClientesComponent = true;
    this.showRegisterComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showVehiculosComponent = false;
 }
 showVehiculos(){
    this.showVehiculosComponent = true;
    this.showConsultarClientesComponent = false;
    this.showRegisterComponent = false;
    this.showAltaVehiculoComponent = false;
 }
 showAltaVehiculo(){
    this.showAltaVehiculoComponent = true;
    this.showVehiculosComponent = false;
    this.showConsultarClientesComponent = false;
    this.showRegisterComponent = false;
 }
}
