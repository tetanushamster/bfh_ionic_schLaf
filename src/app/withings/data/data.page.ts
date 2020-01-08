import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { IonInfiniteScroll } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IonSlides } from '@ionic/angular';

import { map } from 'rxjs/operators';
import { merge, concat } from 'rxjs';
import { reverse } from 'dns';



@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})


export class DataPage implements OnInit {
  @ViewChild('slider', {static: true}) private slider: IonSlides;
  sliderOpts = { "loop" : true }
  currentobservableindex = 0;
  sleepSummaryObservable: Observable<any[]>;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  WithingsData = [];
  lastStartDate: Date;
  

  constructor(public atrCtrl: AlertController, public router: Router, private oauthService: OAuthService, private http: HttpClient) { }

  getDateAsYMD(somedate: Date) {
    let dateformat = 'yyyy-MM-dd';
    return formatDate(somedate, dateformat, 'en-US');
  }

  getWithingsData(someenddate?: Date, somestartdate?: Date) {
    let enddate = someenddate;
    let startdate = somestartdate;
    let enddateymd;
    let startdateymd;

    if (!enddate) {
      enddate = new Date();
    }
    enddateymd = this.getDateAsYMD(enddate);
    // set startdate to 7 days befor eenddate, as this is the max range allowed by the withings api
    if (!startdate) {
      startdate = new Date(enddate.getTime() - (7 * 24 * 60 * 60 * 1000));
    }
    startdateymd = this.getDateAsYMD(startdate);
    this.lastStartDate = startdate;
    console.log("DATA FROM " + startdateymd + " - " + enddateymd);
 

    let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + this.oauthService.getAccessToken());
    let params = new HttpParams()
        .set("action","getsummary")
        .set("data_fields","durationtosleep,durationtowakeup,deepsleepduration,lightsleepduration,sleep_score,wakeupcount,wakeupduration")
        .set("startdateymd", startdateymd.toString())
        .set("enddateymd", enddateymd.toString());
    return this.http.get<any>('https://wbsapi.withings.net/v2/sleep', {headers, params})
    .subscribe(msg => { 
      if (this.WithingsData.length == 0) {
        console.log("ENTERED IF")
        let seriestmpstorage = msg.body.series;
        this.WithingsData = seriestmpstorage.reverse();
        //this.slider.slideTo(6);
      } else {
        console.log("ENTERED ELSE");
        let seriestmpstorage = msg.body.series;
        this.WithingsData = [...this.WithingsData,...seriestmpstorage.reverse()];
        //this.slider.slideTo(8);
        console.log("Withings Data is");
        console.log(this.WithingsData);
        }
    });
  }

  loadData(event) {
    setTimeout(() => {
      if (typeof this.lastStartDate === 'undefined' || this.lastStartDate === null) {
        console.log("lastStartDate was not initialized"); this.getWithingsData();
      } else { this.getWithingsData(this.lastStartDate); }
      event.target.complete();
    }, 500);
  }

  sliderPrivEnd() {
    this.currentobservableindex += 1;
    this.slider.getActiveIndex().then(
      (index)=>{
        this.currentobservableindex = index;
        console.log("SLIDER INDEX AT" + this.currentobservableindex);
     });
  }

  sliderNextEnd() {
    this.currentobservableindex -= 1;
    this.slider.getActiveIndex().then(
      (index)=>{
        this.currentobservableindex = index;
        console.log("SLIDER INDEX AT" + this.currentobservableindex);
     });
  }

  sliderReachEnd() {
    this.lastStartDate.setDate(this.lastStartDate.getDate() - 1)
    this.getWithingsData(this.lastStartDate);
  }

  sliderReachStart() {}

  ChangeObservableIndexOnSwipingMotion(direction) {
    if (direction == "left") {
      this.currentobservableindex += 1;
    }
    console.log(direction);
  }

  async showConfirmAlert() {
      const alert = await this.atrCtrl.create({
        header: '',
        subHeader: '',
        message: 'Bitte loggen loggen sie sich zuerst via Withings ein.',
        buttons: [
          { text: 'Zum Login', handler: () => {this.router.navigate(['/withings/identity']); }},
          { text: 'Zurück', handler: () => {this.router.navigate(['/home']); }}
        ]});
      await alert.present();
  }

  debug() {
    console.log("TOKEN IS VALID: " + this.oauthService.hasValidAccessToken());
    this.getWithingsData(this.lastStartDate);
    console.log(this.sleepSummaryObservable[1]);
  }

  ngOnInit() {
    if ( ! this.oauthService.hasValidAccessToken() ) { this.showConfirmAlert(); }
    this.getWithingsData(this.lastStartDate);
  }
}