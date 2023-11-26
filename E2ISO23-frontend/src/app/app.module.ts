import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ConsultarVehiculosComponent } from './consultar-vehiculos/consultar-vehiculos.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AltaVehiculoComponent } from './alta-vehiculo/alta-vehiculo.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { MaintenanceViewComponent } from './maintenance-view/maintenance-view.component';
import { ListadoVehiculosDisponiblesComponent } from './listado-vehiculos-disponibles/listado-vehiculos-disponibles.component';
import { ModificarParametrosComponent } from './modificar-parametros/modificar-parametros.component';
import { RegistroMantenimientoComponent } from './registro-mantenimiento/registro-mantenimiento.component';
import { ConsultarReservasClienteComponent } from './consultar-reservas-cliente/consultar-reservas-cliente.component';
import { ConsultarFacturacionComponent } from './consultar-facturacion/consultar-facturacion.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
 declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    ConsultarUsuariosComponent,
    ConsultarVehiculosComponent,
    RegistroAdminComponent,
    AdminViewComponent,
    ClientViewComponent,
    AltaVehiculoComponent,
    PasswordRecoveryComponent,
    MaintenanceViewComponent,
    ListadoVehiculosDisponiblesComponent,
    ModificarParametrosComponent,
    RegistroMantenimientoComponent,
    ConsultarReservasClienteComponent,
    ConsultarFacturacionComponent,
    ChangePasswordComponent
    
 ],
 imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }