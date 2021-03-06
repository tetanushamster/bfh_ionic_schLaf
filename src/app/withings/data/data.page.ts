import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IonSlides } from '@ionic/angular';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';



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
  WithingsData = [];
  lastStartDate: Date;
  doughnutChartLabels: Label[] = ['Wach', 'leichter Schlaf', 'Tiefschlaf'];
  doughnutChartData: MultiDataSet = [ [] ];
  doughnutChartType: ChartType = 'doughnut';
  WithingsItem = {};
  color = "#90EE90";

  constructor(public atrCtrl: AlertController, public router: Router, private oauthService: OAuthService, private http: HttpClient) { }

  getDateAsYMD(somedate: Date) {
    let dateformat = 'yyyy-MM-dd';
    return formatDate(somedate, dateformat, 'en-US');
  }

  getUnixSecondsAsHourMinute(unixseconds: number) {
    let somedate = new Date();
    somedate.setTime(unixseconds * 1000);
    console.log("ZEIT: " + somedate.getHours(),somedate.getMinutes());
    let minuteprefix = "";
    if (somedate.getMinutes() < 10 ) { minuteprefix = "0" }
    let hourprefix = "";
    if (somedate.getHours() < 10 ) { hourprefix = "0" }
    return hourprefix + somedate.getHours() + ":" + minuteprefix + somedate.getMinutes()
   }

  getUnixSecondsAsHourMinuteDuration(unixseconds: number) {
    let somedate = new Date();
    somedate.setTime(unixseconds * 1000);
    if (unixseconds < 60 * 60) {
       return somedate.getMinutes() + "min" 
      } else { 
        return somedate.getHours() + "h " + somedate.getMinutes() + "min" 
      }
  }

  enhanceWithingsDate(data: any[]) {
    let event;
    for (event of data) {
      event.enddateAsHHMM = this.getUnixSecondsAsHourMinute(event.enddate);
      event.startdateAsHHMM = this.getUnixSecondsAsHourMinute(event.startdate);
      event.durationAsHHMM = this.getUnixSecondsAsHourMinuteDuration(event.enddate - event.startdate);
      event.durationtowakeupAsHHMM = this.getUnixSecondsAsHourMinuteDuration(event.data.durationtowakeup);
      event.wakeupdurationAsHHMM = this.getUnixSecondsAsHourMinuteDuration(event.data.wakeupduration);
    }
  return data;
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
        this.WithingsData = this.enhanceWithingsDate(this.WithingsData);
      } else {
        console.log("ENTERED ELSE");
        let seriestmpstorage = msg.body.series;
        this.WithingsData = [...this.WithingsData,...seriestmpstorage.reverse()];
        this.WithingsData = this.enhanceWithingsDate(this.WithingsData);
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
     });
  }
  

  sliderNextEnd() {
    this.currentobservableindex -= 1;
    this.slider.getActiveIndex().then(
      (index)=>{
        this.currentobservableindex = index;
     });
  }

  sliderReachEnd() {
      this.slider.length().then( sliderlength => {
      if (sliderlength > 1) {
        console.log("SLIDER > 1 HAS REACHED END");
        this.lastStartDate.setDate(this.lastStartDate.getDate() - 1);
        this.getWithingsData(this.lastStartDate);
      } else { console.log("SLIDER <= 1 HAS REACHED END"); }
    } )
  }
  

  sliderReachStart() {}

  ChangeObservableIndexOnSwipingMotion(direction) {
    if (direction == "left") {
      this.currentobservableindex += 1;
    }
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
  }

  ngOnInit() {
    if ( ! this.oauthService.hasValidAccessToken() ) { this.showConfirmAlert(); }
    this.getWithingsData(this.lastStartDate);
  }
}