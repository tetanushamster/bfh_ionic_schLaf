import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { IonInfiniteScroll } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  sleepSummaryObservable: Observable<any[]>;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  WithingsData = [];
  lastStartDate: Date;

  constructor(public atrCtrl: AlertController, public router: Router, private oauthService: OAuthService, private http: HttpClient) {
    //this.loadmoreitems();
  }

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
    //this.lastStartDate = startdate;
    console.log("DATA FROM " + startdateymd + " - " + enddateymd);

    let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + this.oauthService.getAccessToken());
    let params = new HttpParams()
        .set("action","getsummary")
        .set("data_fields","durationtosleep,durationtowakeup,deepsleepduration,lightsleepduration,sleep_score,wakeupcount,wakeupduration")
        .set("startdateymd", startdateymd.toString())
        .set("enddateymd", enddateymd.toString());
    return this.http.get<any>('https://wbsapi.withings.net/v2/sleep', {headers, params})
    .subscribe(msg => {this.sleepSummaryObservable = msg.body.series;});
  }

  loadData(event) {
    setTimeout(() => {
      this.loadmoreitems();
      if (typeof this.lastStartDate === 'undefined' || this.lastStartDate === null) {
        console.log("lastStartDate was not initialized"); this.getWithingsData();
      } else { this.getWithingsData(this.lastStartDate); }
      event.target.complete();
    }, 500);
  }

  loadmoreitems() {
    for (let i=0; i<10; i++) {
      this.WithingsData.push(i);
    }
  }

  async showConfirmAlert() {
      const alert = await this.atrCtrl.create({
        header: 'Alert',
        subHeader: 'Subtitle',
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
  }
}