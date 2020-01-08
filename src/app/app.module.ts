import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { IonicStorageModule } from '@ionic/storage';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-CH';

registerLocaleData(localeDe, 'de');

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import {AngularFireModule } from '@angular/fire';

/** in enviroment is the "code" for fire */
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Import for the alarm clock
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NgCircleProgressModule } from 'ng-circle-progress';

// Import for PieChart looking good

@NgModule({
  declarations: [
    AppComponent ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
              allowedUrls: ['https://sleepexpert.voxte.ch/withings/identity'],
              sendAccessToken: true
              }
            }),
    /** add AngularFireModule.initilaizeApp to the NGModule */
    AngularFireModule.initializeApp(environment.firebase, 'bhf_ionic_schlaf'),
    AngularFireAuthModule,
    /** AngularFirestoreModule: so you can use the firestore database */
    AngularFirestoreModule,
    
    //progress circle
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#a6cbf9",
      innerStrokeColor: "#7db7fd",
      animationDuration: 300,
      responsive: true,
      
    }) 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /** Write: provide: FirestoreSettingsToken if you get a compile error */
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
