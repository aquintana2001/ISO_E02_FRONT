import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; 
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component'; 


const routes: Routes = [ 
    { path: '', component: MainPageComponent }, // Ruta para la página de inicio
    { path: 'consultar-usuarios', component: ConsultarUsuariosComponent }// Ruta para consultar usuarios

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
