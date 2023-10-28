import { Component } from '@angular/core';
import { AccountService } from '../user.service';
import { isNgContent } from '@angular/compiler';

// Define una interfaz para el tipo de usuario
interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  dni: string;
  telefono: string;
  fechaNacimiento: string;
  carnet: string;
  activo: boolean;
  editable: boolean; // Agrega la propiedad 'editable'
}

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent {
  usuarios: Usuario[] = [];
  constructor(private accountService: AccountService) { }
  usuarioBackUp: Usuario[] = [];


  editarFila(index: number) {
    this.usuarios[index].editable = true;
  }
  eliminarFila(index: number) {
    this.accountService.eliminarCliente(this.usuarioBackUp[index].email);
    this.usuarios.splice(index,1)
    this.usuarioBackUp.splice(index,1)
  }
  actualizarNombre(event: any, index: number) {
    this.usuarios[index].nombre = event.target.textContent;
  }
  actualizarApellidos(event: any, index: number) {
    this.usuarios[index].apellidos = event.target.textContent;
  }
  actualizarEmail(event: any, index: number) {
    this.usuarios[index].email = event.target.textContent;
  }
  actualizarDni(event: any, index: number) {
    this.usuarios[index].dni = event.target.textContent;
  }
  actualizarTelefono(event: any, index: number) {
    this.usuarios[index].telefono = event.target.textContent;
  }
  actualizarFechaNacimiento(event: any, index: number) {
    this.usuarios[index].fechaNacimiento = event.target.textContent;
  }
  actualizarCarnet(event: any, index: number) {
    this.usuarios[index].carnet = event.target.textContent;
  }
  actualizarActivo(event: any, index: number) {
    this.usuarios[index].activo = event.target.textContent;
  }
  guardarCambios(index: number) {
    this.usuarios[index].editable = false;
    const { editable, ...cliente } = this.usuarios[index];

    console.log(cliente);
    try {
      this.accountService.actualizarCliente(cliente).subscribe({
        error: (error) =>{
          if (error.status==200){
            console.log("La actualización se ha realizado con éxito");
            this.usuarioBackUp[index]={...this.usuarios[index]}
          }
          else{
            console.log(error);
          }
        }
    });
    } catch (error) {
      
    }
   
  }
  

  cancelarEdicion(index: number) {
    this.usuarios[index].editable = false;
    console.log(this.usuarios[index]);
    console.log(this.usuarioBackUp[index]);

    this.usuarios[index] = this.usuarioBackUp[index];
  }

  ngOnInit() {
    this.accountService.getClientes().subscribe((data: any[]) => {
      this.usuarios = data.map(usuario => ({
        email: usuario.email,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        password: usuario.password,
        activo: usuario.activo,
        intentos: usuario.intentos,
        fechaNacimiento: usuario.fechaNacimiento,
        carnet: usuario.carnet,
        telefono: usuario.telefono,
        dni: usuario.dni,
        editable: false
      }));
      this.usuarioBackUp = data.map(usuario => ({
        email: usuario.email,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        password: usuario.password,
        activo: usuario.activo,
        intentos: usuario.intentos,
        fechaNacimiento: usuario.fechaNacimiento,
        carnet: usuario.carnet,
        telefono: usuario.telefono,
        dni: usuario.dni,
        editable: false
      }));
    });

  }
  
}
