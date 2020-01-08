import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /** vars for the Authentification of the user */
  userID = '';
  password = '';
 

  constructor(public afAuth: AngularFireAuth,
              public alert: AlertController,
              public router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { userID, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(userID + '@yahoo.com', password)
      .then(data => {
        this.router.navigate(['/home']);
      });
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/wrong-password') {
        this.showAlert('Kennwort falsch', 'Noch mals versuchen');
        console.log ('Falsche Passwort');
      }
      if (err.code === 'auth/user-not-found') {
        this.showAlert('Benutzername falsch', 'Noch mals versuchen');
        console.log ('User invalid');
      }
      if (err.code === 'auth/invalid-email') {
        this.showAlert('Email falsch', 'Noch mals versuchen');
        console.log ('Invalid email');
      }
    }
 
  }
  async showAlert( header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
