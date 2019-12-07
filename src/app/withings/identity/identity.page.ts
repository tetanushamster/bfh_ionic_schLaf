import { Component, OnInit } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.page.html',
  styleUrls: ['./identity.page.scss'],
})
export class IdentityPage implements OnInit {

  constructor(private oauthService: OAuthService) { 
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Login-Url
    this.oauthService.loginUrl = "https://account.withings.com/oauth2_user/authorize2"; //Id-Provider?
    this.oauthService.issuer = "https://account.withings.com/oauth2_user/authorize2"

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = "https://sleepexpert.voxte.ch/withings/identity" //window.location.origin + "/index.html";

    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "75567fc18fe0881c2757206ee375044433a5a76e12f6796d1f300b605683f22d";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "user.activity" //"openid profile email user.activity";
    this.oauthService.customQueryParams = { 'scope': 'user.activity' , 'response_type' : 'code'}

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    this.oauthService.logoutUrl = "https://account.withings.com/logout";

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It doesn't send the user the the login page
    this.oauthService.tryLogin();
  }

public login() {
    this.oauthService.initLoginFlow();
}

public logoff() {
    this.oauthService.logOut();
}

public debug() {
    console.log(this.oauthService.getIdentityClaims())
}

public get name() {
    let claims : any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
}

ngOnInit() {  }

}