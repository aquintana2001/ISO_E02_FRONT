import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component'; // Asegúrate de importar el componente


const routes: Routes = [
  { path: 'consultar-usuarios', component: ConsultarUsuariosComponent } // Nueva ruta para consultar usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
