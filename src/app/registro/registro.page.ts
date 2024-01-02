import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = "";
  password: string = "";
  cpassword: String = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async registrar() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert("Error", "Las contraseñas no coinciden");
    }
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(username, password);
      this.showAlert("Usuario Registrado", "Bienvenido " + username);
      this.router.navigate(['login']);
    } catch (err: any) {
      console.dir(err);
      this.showAlert("Error", err.message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons:["ok"]
    });
      await alert.present();
    }
}