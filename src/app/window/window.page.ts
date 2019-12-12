import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserData, UserDataService } from '../services/user-data.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';


firebase.initializeApp(environment.firebase);
// initialize cloud firestore 
var db = firebase.firestore();

@Component({
  selector: 'app-window',
  templateUrl: './window.page.html',
  styleUrls: ['./window.page.scss']
})

export class WindowPage implements OnInit {
  /** get the information from the services: */

  // private udata: Observable<UserData[]>;

  aufstehen = new Date('hh:mm').toDateString();

  constructor(  ) {

  }

  dateChanged(data) {
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

 
  ngOnInit() {
   
  }
}
