import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

firebase.initializeApp(environment.firebase);
// initialize cloud firestore 
var db = firebase.firestore();

// get data from patient
const gutgeschlafen = db.collection('SleepExpert').doc('gutgeschlafen');
const wakeUp = db.collection('SleepExpert').doc('aufstehen');
const sleep = db.collection('SleepExpert').doc('bettzeit');

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {
  //vars for acces data 
  wouldLikeToWakeUpAtInteger;
  wouldLikeToGoToBedAtInteger;
  timeInBedSelected;
  sleepingWindowInput = new Date('h').toDateString();
  gutgeschlafen = '';
  datum: string;
  datumH: any;
  datumM: any;
  datumBed: string;
  datumBedH: any;
  datumBedM: any;
  
  constructor(public alertCtrl: AlertController) { 
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
      
      // tslint:disable-next-line: align
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
  
      // tslint:disable-next-line: align
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
            // tslint:disable-next-line: no-trailing-whitespace
            
            // tslint:disable-next-line: whitespace
            console.log('TIME to set to sleep up ' + data.hour,':', data.minute);
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
        // tslint:disable-next-line: align
        db.collection("SleepExpert").doc("sleepingWindow").set({
          /** data is always set but not updated --> use update and not set in line 42 */
        hour: timedata[0] 
        }).then(function() {
        // tslint:disable-next-line: quotemark
        console.log("Document successfully written!");
      }).catch(function(error) {
        console.error("Error writing document: ", error);
      });
      //toast: data is sent to DB as sleep window for the user
      this.showConfirmAlert();
      
  }
  async showConfirmAlert(){
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Der Anzahl Stunden wurde in die Datenbank gespeichert',
      });
    await alert.present();
    
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
    return this.timeInBedSelected;
     
    
  }

  ngOnInit() {
   
  }

}
