import { Component } from '@angular/core';
import { AccountService } from '../user.service'
interface Datos {
  email: string,
  nombre: string,
  apellidos:string,
  dni: string,
  telefono: string,
  fechaNacimiento: string,
  carnet: string // Agrega la propiedad 'editable'
}
@Component({
  selector: 'app-mis-datos-cliente',
  templateUrl: './mis-datos-cliente.component.html',
  styleUrls: ['../consultar-usuarios/consultar-usuarios.component.css']
})
export class MisDatosClienteComponent {

  datos!: Datos;
  datosBackup!: Datos;
  editable:boolean = false;
  mensajeinfo:string="";
  mostrarError:boolean=false;
  mostrarConfirmacion:boolean=false;
  constructor(private userSerivce : AccountService) { }
  actualizarNombre(event: any) {
    this.datos.nombre = event.target.textContent;
  }
  actualizarApellidos(event: any) {
    this.datos.apellidos = event.target.textContent;
  }
  actualizarDni(event: any) {
    this.datos.dni = event.target.textContent;
  }
  actualizarTelefono(event: any) {
    this.datos.telefono = event.target.textContent;
  }
  actualizarFechaNacimiento(event: any) {
    this.datos.fechaNacimiento = event.target.textContent;
  }
  actualizarCarnet(event: any) {
    this.datos.carnet = event.target.textContent;
  }
  
  
  modificarDatos() {
    try {
      this.userSerivce.modificarDatos(this.datos).subscribe({
        error: (error) =>{
          if (error.status==200){
            console.log("La actualización se ha realizado con éxito");
            this.editable = false;
            this.datosBackup = this.datos
          }
          else{
            console.log(error);
          }
        }
    });
    } catch (error) {

    }
   
  }
  editarDatos(){
    this.editable=true;
  }
  cancelarEdicion(){
    this.editable=false;
    console.log(this.datos)
    console.log(this.datosBackup)
    this.datos = {...this.datosBackup};
    console.log(this.datos)
    this.userSerivce.getDatos().subscribe((data: any) => {
      if (data) {
        this.datosBackup = {
          email: data.email,
          nombre: data.nombre,
          apellidos: data.apellidos,
          dni: data.dni,
          telefono: data.telefono,
          fechaNacimiento: data.fechaNacimiento,
          carnet: data.carnet
        };
      }
    });    
  }
  ngOnInit() {
    this.userSerivce.getDatos().subscribe((data: any) => {
      if (data) {
        console.log(data)
        this.datos = {
          email: data.email,
          nombre: data.nombre,
          apellidos: data.apellidos,
          dni: data.dni,
          telefono: data.telefono,
          fechaNacimiento: data.fechaNacimiento,
          carnet: data.carnet
        };
        this.datosBackup = {...this.datos};
      }
    });    
      
    }
}


