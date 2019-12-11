import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';

// initialize cloud firestore
const db = firebase.firestore();

// get data from firebase
const wakeUp = db.collection("SleepExpert").doc("aufstehen");
const sleep = db.collection("SleepExpert").doc("bettzeit");


wakeUp.get().then(function(doc) {
if (doc.exists) {
  console.log("Aufstehen:", doc.data());

  let data = doc.data();
  console.log(data.hour,":", data.minute);

 } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
 console.log("Error getting document:", error);
});

sleep.get().then(function(doc) {
  if (doc.exists) {
    console.log("Bettzeit:", doc.data());
  
    let data = doc.data();
    console.log(data.hour,":", data.minute);
  
   } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch(function(error) {
   console.log("Error getting document:", error);
  });

@Component({
  selector: 'app-que2',
  templateUrl: './que2.page.html',
  styleUrls: ['./que2.page.scss'],
})
export class Que2Page implements OnInit {
  wakeUp = new Date('hh:mm').toDateString();
  sleep = new Date('hh:mm').toDateString();
    
  changed = true;
  constructor() { 
  
  }
  datum = " ";
  
  getSleep(){
    return "01:00 ";
  }
  restChanged(ch){
    console.log(this.changed);
      //** adauga asta la urmatoarela pagini casa  mearga bine */
  db.collection("SleepExpert").doc("changed").set({
    /** data is always set but not updated --> use update and not set in line 42 */
  changed: true
  }).then(function() {
  console.log("Document successfully written!");
}).catch(function(error) {
  console.error("Error writing document: ", error);
});
  }
  
  ngOnInit() {
  }

}
