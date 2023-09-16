import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular'; 
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombre: string = '';
  contrasena: string = '';


  
  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private alertController: AlertController,

  ) {}

  async ingresarNombre() {
    if (this.nombre.trim() !== '' && this.contrasena.trim() !== '') {
      this.dataService.cambiarNombre(this.nombre); 
      this.navCtrl.navigateForward('/home');
    } else {
      const alert = await this.alertController.create({
        header: 'Campos vacíos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}