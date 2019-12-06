import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /** vars for the Authentification of the user */
  userID: string ='';
  password: string = "";
  
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const { userID, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(userID + '@yahoo.com', password);
    } catch (err){
      console.dir(err);
      if (err.code == "auth/user-not-found"){
        console.log ("User not found");
      }
      if (err.code == "auth/invalid-email"){
        console.log ("Invalid email");
      }
    }
  }
}
