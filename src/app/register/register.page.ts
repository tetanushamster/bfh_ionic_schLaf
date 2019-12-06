import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userID: string = "";
  password: string = "";
  cpassword: string ="";
  
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
 async register(){
    const { userID, password, cpassword } = this;
    if (password !== cpassword){
       return console.error(" PASSWORDS dont match");
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userID + '@yahoo.com', password);
      console.log(res);
    } catch (error) {
      console.dir(error);
    }
  }

}
