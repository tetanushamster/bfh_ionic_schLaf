import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 /* public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Schlaftagebuch',
      url: '/protocol',
      icon: 'book'
    },
    {
      title: 'Aufzeichnungen',
      url: '/records',
      icon: 'stats'
    },
    {
      title: 'Schlaffenster',
      url: '/window',
      icon: 'bed'
    },
    {
      title: 'Informationen',
      url: '/information',
      icon: 'information-circle-outline'
    }
  ]; */

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });
 
    });
  }
}
