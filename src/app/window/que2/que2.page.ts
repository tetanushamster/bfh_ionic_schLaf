import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';

// initialize cloud firestore
const db = firebase.firestore();

// get data from firebase
const wakeUp = db.collection("SleepExpert").doc("aufstehen");
const sleep = db.collection("SleepExpert").doc("bettzeit");


@Component({
  selector: 'app-que2',
  templateUrl: './que2.page.html',
  styleUrls: ['./que2.page.scss'],
})
export class Que2Page implements OnInit {
  datum = "  :  ";
  datumBed = "  :  ";
  gutgeschlafen;
  
  constructor() { 
    // get data from DB AND display on new page for user 2 see
    wakeUp.get().then(doc =>  {
      if (doc.exists) {
        console.log("Aufstehen:", doc.data());     
        let data = doc.data();
        this.datum = data.hour + ":" + data.minute;
        console.log("TIME Desired to wake up" + data.hour,":", data.minute);
       } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
       console.log("Error getting document:", error);
      });
      
      sleep.get().then ( doc => {
        if (doc.exists) {
          console.log("Bettzeit:", doc.data());     
          let data = doc.data();
          this.datumBed = data.hour + ":" + data.minute;
          console.log("TIME to set to sleep up " + data.hour,":", data.minute);
         } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
        }).catch(function(error) {
         console.log("Error getting document:", error);
        });
  
  }
  
    //display data on screen for the user
    getHourAndMinute(){
      
      return this.datum; 
    }
    getSleep (){
      return this.datumBed;
    }
    // Bool yes/no choice
  restChanged(ch){
    console.log("GUTGESCHLAFEN IS OF VALUE:" + this.gutgeschlafen);
      //** adauga asta la urmatoarela pagini casa  mearga bine */
   db.collection("SleepExpert").doc("gutgeschlafen").set({
    /** data is always set but not updated --> use update and not set in line 42 */
    gutgeschlafen: this.gutgeschlafen
  }).then(function() {
  console.log("Document successfully written!");
}).catch(function(error) {
  console.error("Error writing document: ", error);
});
  }
 
  ngOnInit() {
  }

}
