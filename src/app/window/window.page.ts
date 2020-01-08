import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserData, UserDataService } from '../services/user-data.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


firebase.initializeApp(environment.firebase);
// initialize cloud firestore 
var db = firebase.firestore();
const sheepSugestion = db.collection('SleepExpert').doc('sleepingWindow');
@Component({
  selector: 'app-window',
  templateUrl: './window.page.html',
  styleUrls: ['./window.page.scss']
})

export class WindowPage implements OnInit {
  /** get the information from the services: */
  
  sleepingWindow;
  aufstehen = new Date('hh:mm').toDateString();
  sugestion: any;

  constructor( public alertCtrl: AlertController,
    public router: Router) {
  }

  dateChanged() {
    /** asta face sa ai expus in consola data si ora selectata, ceva tre
     * modificat, dar inca nu stiu ce aume
     */

 console.log(this.aufstehen);
 let timedata : string[] = this.aufstehen.split(":");
 console.log(timedata);

  // Add a new document in collection "sleepexpert"

  //** adauga asta la urmatoarela pagini casa  mearga bine */
  db.collection("SleepExpert").doc("aufstehen").set({
    /** data is always set but not updated --> use update and not set in line 42 */
  hour: timedata[0],
  minute: timedata[1]
  }).then(function() {
  console.log("Document successfully written!");
}).catch(function(error) {
  console.error("Error writing document: ", error);
});
 }

  async showConfirmAlert(){
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Bitte definieren Sie zuerst Ihr Schlaffenster in den Einstellungen.',
      buttons: [
        { text: 'Einstellungen', handler: () => {this.router.navigate(['/configurations']); }},
        { text: 'Zurück', handler: () => {this.router.navigate(['/home']); }}
      ]});
    await alert.present();
  }
 
  ngOnInit() {
          // tslint:disable-next-line: align
          sheepSugestion.get().then(doc =>  {
            if (doc.exists) {
              console.log('Sleep Sugestion:', doc.data());
              const data = doc.data();
              this.sugestion = data.hour;
              this.sleepingWindow = parseInt(this.sugestion,10);
              console.log('TIME Desired to wake up' + data.hour);
            } else {
                  // doc.data() will be undefined in this case
                  console.log('No such document!');
              }
              if(!this.sleepingWindow) {this.showConfirmAlert() };
            }).catch(function(error) {
            console.log('Error getting document:', error);
            });
  }
}
