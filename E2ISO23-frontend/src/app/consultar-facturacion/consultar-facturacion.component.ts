import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Factura {
  nombre: string;
  deuda: string;
}

@Component({
  selector: 'app-consultar-facturacion',
  templateUrl: './consultar-facturacion.component.html',
  styleUrls: ['../registro-admin/registro-admin.component.css','../consultar-usuarios/consultar-usuarios.component.css']
})
export class ConsultarFacturacionComponent {
  mensajeinfo: string = "";
  mostrarError = 0;
  loginForm: FormGroup;
  facturas: Factura[] = [];

  constructor(private adminService: AdminServiceService) {
    this.loginForm = new FormGroup({
      'primerDia': new FormControl('', Validators.required),
      'ultimoDia': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.adminService.obtenerFacturacion(this.loginForm.value).subscribe({
      next: (response) => {
        if (Array.isArray(response) && response.length > 0) {
          this.facturas = [];
          let total = 0;
          for (let i = 0; i < response.length; i++) {
            // Crea un objeto Factura para cada elemento en el array
            let factura: Factura = {
              nombre: response[i].split(':')[0].trim(),
              deuda: response[i].split(':')[1].trim()
            };
            total += parseFloat(factura.deuda);
            this.facturas.push(factura);
          }
          let factura: Factura = {
            nombre: "TOTAL",
            deuda: total.toString()
          };
          this.facturas.push(factura)

        } else {
          console.log('La respuesta no es un array válido o está vacía.');
        }
        this.mostrarError = 0;
      },
      error: (error) => {
        if (error.status === 200) {
          this.mensajeinfo = error.error.message;
          this.mostrarError = 1;
        }
      }
    });
  }
}
