import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { IonInfiniteScroll } from '@ionic/angular';
import { formatDate } from '@angular/common';




@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  sleepSummaryObservable = [];
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  WithingsData = [];


  constructor(public atrCtrl: AlertController, public router: Router, private oauthService: OAuthService) {  
    this.loadmoreitems(); 
  }

  loadData(event) {
    setTimeout(() => {
      console.log('DONE');
      this.loadmoreitems();
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
    console.log(this.oauthService.hasValidAccessToken());
  }

  ngOnInit() {
    if ( ! this.oauthService.hasValidAccessToken() ) { this.showConfirmAlert(); };
  }

}
