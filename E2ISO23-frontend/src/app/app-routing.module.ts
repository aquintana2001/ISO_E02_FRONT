import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; 
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component'; 
import { RegistroAdminComponent } from './registro-admin/registro-admin.component'; 
import { ConsultarVehiculosComponent } from './consultar-vehiculos/consultar-vehiculos.component';
import { ClientViewComponent } from './client-view/client-view.component'
import { AdminViewComponent } from './admin-view/admin-view.component'


const routes: Routes = [ 
    { path: '', component: MainPageComponent }, // Ruta para la página de inicio
    { path: 'consultar-usuarios', component: ConsultarUsuariosComponent },// Ruta para consultar usuarios
    { path: 'consultar-vehiculos', component: ConsultarVehiculosComponent },// Ruta para consultar vehiculos
    { path: 'registro-admin', component: RegistroAdminComponent },
    { path: 'client-view', component: ClientViewComponent },
    { path: 'admin-view', component: AdminViewComponent }// Ruta para registrar administrador o personal de mantenimiento


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
