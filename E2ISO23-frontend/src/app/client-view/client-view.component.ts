import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class ClientViewComponent {
  customData: any;
  email:string = "Guillermo.san6@alu.uclm";
  password:string = "Hola123*";
  constructor(private route: ActivatedRoute) {
    // Tu constructor
  }
  
  ngOnInit() {
    this.customData = this.route.snapshot.paramMap.get('customData'); // Accede a los datos personalizados

  }
}