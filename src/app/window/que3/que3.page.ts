import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';

// initialize cloud firestore
const db = firebase.firestore();

// get data from firebase
const wakeUp = db.collection('SleepExpert').doc('aufstehen');
const sleep = db.collection('SleepExpert').doc('bettzeit');
const gutgeschlafen = db.collection('SleepExpert').doc('gutgeschlafen');
const schlaffenster = 8;

@Component({
  selector: 'app-que3',
  templateUrl: './que3.page.html',
  styleUrls: ['./que3.page.scss'],
})
export class Que3Page implements OnInit {
  // wakeUp = new Date('hh:mm').toDateString();
  // sleep = new Date('hh:mm').toDateString();
  // gutgeschlafen  = "";
  datum = '';
  datumBed = '';
  gutgeschlafen = '';
  //added for subtraction
  datumH = '';
  datumInteger;
  datumM = '';
  datumBedH = '';
  datumBedInteger;
  datumBedM = '';
  resultRecomandation; 
  recomandation = '';

  constructor() {
    // get data from DB AND display on new page for user 2 see
    wakeUp.get().then(doc =>  {
      if (doc.exists) {
        console.log('Aufstehen:', doc.data());
        const data = doc.data();
        this.datum = data.hour + ':' + data.minute;
        // added for subtraction
        this.datumH = data.hour;
        //added this in front
        this.datumInteger = parseInt(this.datumH,10);
        this.datumM = data.minute;
        
        console.log('TIME Desired to wake up' + data.hour,':', data.minute);
       } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
        }
      }).catch(function(error) {
       console.log('Error getting document:', error);
      });

    sleep.get().then ( doc => {
        if (doc.exists) {
          // tslint:disable-next-line:quotemark
          console.log("Bettzeit:", doc.data());
          const data = doc.data();
          this.datumBed = data.hour + ':' + data.minute;
          //added for subtrction
          this. datumBedH = data.hour;
          this.datumBedInteger = parseInt(this.datumBedH, 10);
          this.datumBedM = data.minute;
          
          console.log('TIME to set to sleep up ' + data.hour,':', data.minute);
         } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
          }
        }).catch(function(error) {
         console.log('Error getting document:', error);
        });

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

    // display data on screen for the user
    getHourAndMinute() {

      return this.datum;
    }
    getSleep() {
      return this.datumBed;
    }

    // calculating recomended bedtime
    getRecomandation() {
      this.resultRecomandation =  this.datumBedInteger - this.datumInteger;
      if ( this.resultRecomandation >= schlaffenster){
        console.log ('sleep duration is ok');
        
        this.recomandation = this.resultRecomandation;
      }else {
        console.log('Sleep not ');
      }
     return this.recomandation;

    }

  ngOnInit() {
  }

}
