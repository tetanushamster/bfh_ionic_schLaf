import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';

// initialize cloud firestore
const db = firebase.firestore();

// get data from firebase
const wakeUp = db.collection("SleepExpert").doc("aufstehen");


@Component({
  selector: 'app-que1',
  templateUrl: './que1.page.html',
  styleUrls: ['./que1.page.scss'],
})

export class Que1Page implements OnInit {
wakeUp = new Date('hh:mm').toDateString();
bettzeit = new Date('hh:mm').toDateString();

  constructor( ) {
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
      
   }
  datum = "  :  ";
 
  bedtimeChanged(data) {
    /** asta face sa ai expus in consola data si ora selectata, ceva tre
     * modificat, dar inca nu stiu ce aume
     */
  
  console.log(this.bettzeit);
  let timedata : string[] = this.bettzeit.split(":");
  console.log(timedata);
  
  // Add a new document in collection "sleepexpert"
  db.collection("SleepExpert").doc("bettzeit").set({
  /** data is always set but not updated --> use update and not set in line 42 */
  hour: timedata[0],
  minute: timedata[1]
  })
  .then(function() {
  console.log("Document successfully written!");
  })
  .catch(function(error) {
  console.error("Error writing document: ", error);
  });
  }
  //display data on screen for the user
getHourAndMinute(){
   
  return this.datum; 
}


  ngOnInit() {
   
  }

}
