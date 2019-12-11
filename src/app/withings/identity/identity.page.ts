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
  redirectUri: 'https://sleepexpert.voxte.ch/authorize',
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
  private sleepSummaryObservable : Observable<any> ; 

  constructor(private oauthService: OAuthService, private route: ActivatedRoute, private http: HttpClient) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.showDebugInformation = true;
    this.oauthService.loginUrl = "https://account.withings.com/oauth2_user/authorize2"; //Id-Provider
    this.oauthService.logoutUrl = "https://account.withings.com/logout";
    this.oauthService.issuer = "https://account.withings.com/oauth2_user/authorize2";
    this.oauthService.tokenEndpoint = "https://account.withings.com/oauth2/token";
    this.oauthService.redirectUri = "https://sleepexpert.voxte.ch/withings/identity"; //window.location.origin + "/index.html";
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
    let format = 'yyyy-MM-dd';
    let date = new Date();
    let formattedDate = formatDate(date, format, "en-US");
    console.log(formattedDate);
}

public debug() {
    //console.log(this.oauthService.getIdentityClaims());
    //this.route.queryParams.subscribe(params => {console.log(params.code);});
    let dateformat = 'yyyy-MM-dd';
    //let enddateymd = new Date();
    let startdateymd = "2019-12-03"
    let enddate  = new Date();
    let enddateymd = formatDate(enddate, dateformat,"en-US");
    //startdate.setDate(startdate.getDate() - 7)
    //this.sleepSummaryObservable = this.http.get("https://my-json-server.typicode.com/typicode/demo/comments");
    let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + this.oauthService.getAccessToken());
    let params = new HttpParams()
        .set("action","getsummary")
        .set("data_fields","durationtosleep,durationtowakeup,deepsleepduration,lightsleepduration,sleep_score,wakeupcount,wakeupduration")
        .set("startdateymd", startdateymd.toString())
        .set("enddateymd", enddateymd.toString());
    console.log(startdateymd, enddateymd, this.oauthService.getAccessToken() );
    console.log("startdateymd="+startdateymd+"&enddateymd="+enddateymd);
    this.http.get("https://wbsapi.withings.net/v2/sleep", {headers, params}).subscribe((res : any[])=>{console.log(res)});
    console.log("IS VALID ? : " + this.oauthService.hasValidAccessToken())
    //this.sleepSummaryObservable = 
    //console.log(this.sleepSummaryObservable)
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