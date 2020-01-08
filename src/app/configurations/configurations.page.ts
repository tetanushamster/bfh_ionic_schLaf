import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);
// initialize cloud firestore 
var db = firebase.firestore();

// get data from patient

const gutgeschlafen = db.collection('SleepExpert').doc('gutgeschlafen');
 
@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {
  sleepingWindowInput = new Date('h').toDateString();
  gutgeschlafen = '';
  constructor() { 
    gutgeschlafen.get().then ( doc => {
      if (doc.exists) {
        console.log('user Choice:', doc.data());
       // let done: boolean = false;
        const data = doc.data();
        this.gutgeschlafen = data.gutgeschlafen;
        console.log('Selected choice ' + data.gutgeschlafen);
       } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
        }
      }).catch(function(error) {
       console.log('Error getting document:', error);
      });
  }
  dateChanged() {
    /** asta face sa ai expus in consola data si ora selectata, ceva tre
     * modificat, dar inca nu stiu ce aume
     */

 console.log(this.sleepingWindowInput);
 let timedata : string[] = this.sleepingWindowInput.split(":");
 console.log(timedata);

  // Add a new document in collection "sleepexpert"

  //** adauga asta la urmatoarela pagini casa  mearga bine */
  db.collection("SleepExpert").doc("sleepingWindow").set({
    /** data is always set but not updated --> use update and not set in line 42 */
  hour: timedata[0] 
  }).then(function() {
  console.log("Document successfully written!");
}).catch(function(error) {
  console.error("Error writing document: ", error);
});

  }
 

  ngOnInit() {
    
  }

}
