import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance-view',
  templateUrl: './maintenance-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class MaintenanceViewComponent {
  customData: any;
  showVehiculosComponent = true;

  constructor(private route: ActivatedRoute) {
    // Tu constructor
  }
  showVehiculos() {
    this.showVehiculosComponent = true;
  }
 
}