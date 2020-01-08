import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { Route } from '@angular/compiler/src/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { formatDate } from "@angular/common";

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  //issuer: 'https://account.withings.com/oauth2_user/authorize2',
  issuer: 'https://account.withings.com/oauth2_user/authorize2',
  // URL of the SPA to redirect the user to after login
  redirectUri: 'https://sleepexpert.ch/authorize',
  responseType: 'code',
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  //scope: 'openid profile email voucher',
  //scope: 'user.activity' 
}

@Component({
  selector: 'app-identity',
  templateUrl: './identity.page.html',
  styleUrls: ['./identity.page.scss'],
})
export class IdentityPage implements OnInit {

  authentication_code : string;
  private sleepSummaryObservable: Observable<any> ;

  constructor(private oauthService: OAuthService, private route: ActivatedRoute, private http: HttpClient) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.showDebugInformation = true;
    this.oauthService.loginUrl = "https://account.withings.com/oauth2_user/authorize2"; //Id-Provider
    this.oauthService.logoutUrl = "https://account.withings.com/logout";
    this.oauthService.issuer = "https://account.withings.com/oauth2_user/authorize2";
    this.oauthService.tokenEndpoint = "https://account.withings.com/oauth2/token";
    this.oauthService.redirectUri = "https://sleepexpert.ch/withings/identity"; //window.location.origin + "/index.html";
    this.oauthService.clientId = "75567fc18fe0881c2757206ee375044433a5a76e12f6796d1f300b605683f22d";
    this.oauthService.dummyClientSecret = "cdbed08c93de9bc94afa4dcfbff800f23e818056415f2e17094fb14663eaa119";
    this.oauthService.scope = "user.activity";
    this.oauthService.customQueryParams = { 'scope': 'user.activity' , 'response_type' : 'code', 'grant_type': 'authorization_code'};
    this.oauthService.responseType = 'code';
    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage instead of localStorage
    this.oauthService.setStorage(sessionStorage);
  }

public login() {
    this.oauthService.initCodeFlow();
}

public logoff() {
    this.oauthService.logOut();
}

public hasValidAccessTokenAsBool() {
  if (this.oauthService.hasValidAccessToken()) {
    return true; 
  }  else {
      return false;
    }
}

public get name() {
    let claims : any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
}

ngOnInit() {
  if (this.route.snapshot.queryParams.code) {
    this.authentication_code = this.route.snapshot.queryParams.code;
    this.oauthService.tryLogin();
  }
 }}