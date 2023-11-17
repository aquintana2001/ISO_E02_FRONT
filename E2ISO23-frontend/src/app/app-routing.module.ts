import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; 
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component'; 
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component'; 
import { ConsultarVehiculosComponent } from './consultar-vehiculos/consultar-vehiculos.component';
import { ClientViewComponent } from './client-view/client-view.component'
import { AdminViewComponent } from './admin-view/admin-view.component'


const routes: Routes = [ 
    { path: '', component: MainPageComponent }, // Ruta para la página de inicio
    { path: 'consultar-usuarios', component: ConsultarUsuariosComponent },// Ruta para consultar usuarios
    { path: 'consultar-vehiculos', component: ConsultarVehiculosComponent },
    { path: 'client-view', component: ClientViewComponent },
    { path: 'admin-view', component: AdminViewComponent },// Ruta para registrar administrador o personal de mantenimiento
    { path: 'password-recovery', component: PasswordRecoveryComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
