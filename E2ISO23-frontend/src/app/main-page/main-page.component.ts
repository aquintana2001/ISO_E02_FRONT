import { Component } from '@angular/core';

@Component({
 selector: 'app-main-page',
 templateUrl: './main-page.component.html',
 styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
 showRegisterComponent = false;
 showLoginComponent = true;

 showRegister() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
 }

 showLogin() {
    this.showLoginComponent = true;
    this.showRegisterComponent = false;
 }
}
