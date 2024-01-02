import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";  

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this;
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(username, password);
      this.router.navigate(['logeado']);
    } catch (err: any) {
      console.dir(err);     
      if(err.code === "auth/invalid-email"){
        this.showAlert("Error","El nombre de usuario o contraseña es incorrecto");
      } 
      if(err.code === "auth/user-not-found"){
        this.showAlert("Error","No se encuentra usuario registrado con ese nombre");

      }
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
