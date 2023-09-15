import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  nombre: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private dataService: DataService) {}

  ingresarNombre() {
    if (this.nombre.trim() !== '' && this.contrasena.trim() !== '') {
      this.dataService.cambiarNombre(this.nombre);
      
      
      this.navCtrl.navigateForward('/home');
    }
  }
}