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
const sheepSugestion = db.collection('SleepExpert').doc('sleepingWindow');

@Component({
  selector: 'app-que3',
  templateUrl: './que3.page.html',
  styleUrls: ['./que3.page.scss'],
})

export class Que3Page implements OnInit {
  aufstehen = new Date('hh:mm').toDateString();
  // wakeUp = new Date('hh:mm').toDateString();
  // sleep = new Date('hh:mm').toDateString();
  // gutgeschlafen  = "";
  datum = '';
  datumBed = '';
  gutgeschlafen = '';
  //added for subtraction
  datumH = '';
  wouldLikeToWakeUpAtInteger;
  datumM = '';
  datumBedH = '';
  wouldLikeToGoToBedAtInteger;
  timeInBedSelected;
  datumBedM = '';
  resultRecomandation;
  recomandation = '';
  sleepingWindow;
  difference = 0;
  sugestion: any;
  
  constructor() {
   // this.sheeptext = this.getBestTimeToFallAsleep();
    // get data from DB AND display on new page for user 2 see
    wakeUp.get().then(doc =>  {
      if (doc.exists) {
        console.log('Aufstehen:', doc.data());
        const data = doc.data();
        this.datum = data.hour + ':' + data.minute;
        // added for subtraction
        this.datumH = data.hour;
        //added this in front
        this.wouldLikeToWakeUpAtInteger = parseInt(this.datumH,10);
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
          this.wouldLikeToGoToBedAtInteger = parseInt(this.datumBedH, 10);
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
          
          
          // tslint:disable-next-line:align
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
      //amount of naptime in H
      //console.log ('Entered getRecomandation, wouldLikeToGoToBed is ' + this.wouldLikeToGoToBedAtInteger);
      //console.log ('Entered getRecomandation, wouldLikeToWakeUpAt is ' + this.wouldLikeToWakeUpAtInteger);
      if (this.wouldLikeToGoToBedAtInteger > this.wouldLikeToWakeUpAtInteger){
        this.timeInBedSelected = (24 - this.wouldLikeToGoToBedAtInteger) + this.wouldLikeToWakeUpAtInteger;
      //  return this.division;
      //  console.log ('time is reset');
      } else {
        this.timeInBedSelected = this.wouldLikeToWakeUpAtInteger - this.wouldLikeToGoToBedAtInteger;
      }
      // return this.timeInBedSelected;
       
      
    }
    // if he goes to le sleep 2 early --> and sleeping windo 
   getGoToBedTimestampAfterSleepingWindowCorrection(desiredStartOfNapTime,difference){
   
    let wouldLikeToGoToBedAtIntegerPlusDifference;
     //returns the timestamp in H for optimal nap time
    
    wouldLikeToGoToBedAtIntegerPlusDifference = desiredStartOfNapTime + difference;
    if (wouldLikeToGoToBedAtIntegerPlusDifference > 24) {
      wouldLikeToGoToBedAtIntegerPlusDifference = wouldLikeToGoToBedAtIntegerPlusDifference - 24;
      return wouldLikeToGoToBedAtIntegerPlusDifference;
    } else {
      return wouldLikeToGoToBedAtIntegerPlusDifference; 
   }
  }
    getBestTimeToFallAsleep(){
      this.getRecomandation();
      this.difference = this.timeInBedSelected - this.sleepingWindow;
    //console.log("SW is at : " + this.sleepingWindow);
      switch(true){
        case (this.difference == 0):
          this.timeInBedSelected = this.sleepingWindow;
          // tslint:disable-next-line: max-line-length
          return 'Die gewählte Schlafzeit entspricht entspricht ihrem optimalen Schlaffenster. Das Schlafschaf wünscht Ihnen eine erholsame Nacht.';
          break;
        case (this.difference >= 1): 
        //this.timeInBedSelected = this.sleepingWindow - 1;
        return 'Achtung, die gewählte Schlafzeit entspricht nicht ihrem optimalen Schlaffenster.'+ 
         'Mit der aktuellen Auswahl werden Sie voraussichtlich ' + this.difference + " Stunde(n) zu lange im Bett verbringen." +
         'Damit Sie das Schlaffenster treffen, können Sie um ' + 
         this.getGoToBedTimestampAfterSleepingWindowCorrection(this.wouldLikeToGoToBedAtInteger,this.difference) 
         + ' Uhr ins Bett gehen.';
        
        break;
         case (this.difference <= -1): 
         return 'Achtung, die gewählte Schlafzeit entspricht nicht ihrem optimalen Schlaffenster.'+ 
         'Mit der aktuellen Auswahl werden Sie voraussichtlich ' + Math.abs(this.difference) + " Stunde(n) zu wenig im Bett verbringen." +
         'Damit Sie das Schlaffenster treffen, können Sie um ' +
         this.getGoToBedTimestampAfterSleepingWindowCorrection(this.wouldLikeToGoToBedAtInteger,this.difference) 
         + ' Uhr ins Bett gehen.';
          break;
          case (this.difference == 0): 
         this.timeInBedSelected >= this.sleepingWindow - 3;
         return 'Die erwünste schlaffzeit entspricht nicht eure von Artzt gegebene Schlaffenster.' 
          + "Bitte gehen Sie ins Bett" + this.timeInBedSelected + "Stunde später"; 
          break;
      }
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

  ngOnInit() {
    
  }

}
