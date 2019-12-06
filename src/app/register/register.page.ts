import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



/** Alert to tell the user he is logged in add this to the constructor for best results */

import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userID = '';
  password = '';
  cpassword = '';

  constructor(public afAuth: AngularFireAuth,
              public alert: AlertController,
              /** redirect the user to another page once the login is successful */
              public router: Router ) { }

  ngOnInit() {
  }

 async register() {
    const { userID, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert('Kennwort falsch', 'Noch mals versuchen');
      return console.error(' PASSWORDS dont match');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userID + '@yahoo.com', password);
      console.log(res);
      this.showAlert('Eingeloggt', ' ');
      /** redirect to pages */
      this.router.navigate(['/home']);
    } catch (error) {
      console.dir(error);
      this.showAlert('err', error.message);
    }
  }
async showAlert( header: string, message: string) {
  const alert = await this.alert.create({
    header,
    message,
    buttons: ['Have a cookie']
  });
  await alert.present();
}

}
