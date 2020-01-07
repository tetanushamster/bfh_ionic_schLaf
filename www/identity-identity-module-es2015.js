(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identity-identity-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/withings/identity/identity.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/withings/identity/identity.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-title>\r\n            SleepExpert\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n  \r\n  <ion-content>\r\n        <h1 *ngIf=\"!name\">\r\n                Hallo\r\n        </h1>\r\n        <h1 *ngIf=\"name\">\r\n                Hallo, {{name}}\r\n        </h1>\r\n  \r\n      <button class=\"btn btn-default\" (click)=\"login()\">\r\n          Login\r\n      </button>\r\n      <button class=\"btn btn-default\" (click)=\"logoff()\">\r\n          Logout\r\n      </button>\r\n      <button class=\"btn btn-default\" (click)=\"debug()\">\r\n          DEBUG\r\n      </button>\r\n\r\n      <li *ngFor=\"let product of sleepSummaryObservable | async\" >\r\n          -- id: {{product}}\r\n      </li>\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/withings/identity/identity-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/withings/identity/identity-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: IdentityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityPageRoutingModule", function() { return IdentityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _identity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity.page */ "./src/app/withings/identity/identity.page.ts");




const routes = [
    {
        path: '',
        component: _identity_page__WEBPACK_IMPORTED_MODULE_3__["IdentityPage"]
    }
];
let IdentityPageRoutingModule = class IdentityPageRoutingModule {
};
IdentityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdentityPageRoutingModule);



/***/ }),

/***/ "./src/app/withings/identity/identity.module.ts":
/*!******************************************************!*\
  !*** ./src/app/withings/identity/identity.module.ts ***!
  \******************************************************/
/*! exports provided: IdentityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityPageModule", function() { return IdentityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity-routing.module */ "./src/app/withings/identity/identity-routing.module.ts");
/* harmony import */ var _identity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity.page */ "./src/app/withings/identity/identity.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");









let IdentityPageModule = class IdentityPageModule {
};
IdentityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdentityPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__["OAuthModule"].forRoot({
                resourceServer: {
                    allowedUrls: ['https://sleepexpert.voxte.ch/'],
                    sendAccessToken: true
                }
            })
        ],
        declarations: [_identity_page__WEBPACK_IMPORTED_MODULE_6__["IdentityPage"]]
    })
], IdentityPageModule);



/***/ }),

/***/ "./src/app/withings/identity/identity.page.scss":
/*!******************************************************!*\
  !*** ./src/app/withings/identity/identity.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhpbmdzL2lkZW50aXR5L2lkZW50aXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/withings/identity/identity.page.ts":
/*!****************************************************!*\
  !*** ./src/app/withings/identity/identity.page.ts ***!
  \****************************************************/
/*! exports provided: authConfig, IdentityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityPage", function() { return IdentityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







const authConfig = {
    // Url of the Identity Provider
    //issuer: 'https://account.withings.com/oauth2_user/authorize2',
    issuer: 'https://account.withings.com/oauth2_user/authorize2',
    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://sleepexpert.voxte.ch/authorize',
    responseType: 'code',
};
let IdentityPage = class IdentityPage {
    constructor(oauthService, route, http) {
        this.oauthService = oauthService;
        this.route = route;
        this.http = http;
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["JwksValidationHandler"]();
        this.oauthService.showDebugInformation = true;
        this.oauthService.loginUrl = "https://account.withings.com/oauth2_user/authorize2"; //Id-Provider
        this.oauthService.logoutUrl = "https://account.withings.com/logout";
        this.oauthService.issuer = "https://account.withings.com/oauth2_user/authorize2";
        this.oauthService.tokenEndpoint = "https://account.withings.com/oauth2/token";
        this.oauthService.redirectUri = "https://sleepexpert.voxte.ch/withings/identity"; //window.location.origin + "/index.html";
        this.oauthService.clientId = "75567fc18fe0881c2757206ee375044433a5a76e12f6796d1f300b605683f22d";
        this.oauthService.dummyClientSecret = "cdbed08c93de9bc94afa4dcfbff800f23e818056415f2e17094fb14663eaa119";
        this.oauthService.scope = "user.activity";
        this.oauthService.customQueryParams = { 'scope': 'user.activity', 'response_type': 'code', 'grant_type': 'authorization_code' };
        this.oauthService.responseType = 'code';
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage instead of localStorage
        this.oauthService.setStorage(sessionStorage);
    }
    login() {
        this.oauthService.initCodeFlow();
    }
    logoff() {
        //this.oauthService.logOut();
        let format = 'yyyy-MM-dd';
        let date = new Date();
        let formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(date, format, "en-US");
        console.log(formattedDate);
    }
    debug() {
        //console.log(this.oauthService.getIdentityClaims());
        //this.route.queryParams.subscribe(params => {console.log(params.code);});
        let dateformat = 'yyyy-MM-dd';
        //let enddateymd = new Date();
        let startdateymd = "2019-12-03";
        let enddate = new Date();
        let enddateymd = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(enddate, dateformat, "en-US");
        //startdate.setDate(startdate.getDate() - 7)
        //this.sleepSummaryObservable = this.http.get("https://my-json-server.typicode.com/typicode/demo/comments");
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set("Authorization", "Bearer " + this.oauthService.getAccessToken());
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set("action", "getsummary")
            .set("data_fields", "durationtosleep,durationtowakeup,deepsleepduration,lightsleepduration,sleep_score,wakeupcount,wakeupduration")
            .set("startdateymd", startdateymd.toString())
            .set("enddateymd", enddateymd.toString());
        console.log(startdateymd, enddateymd, this.oauthService.getAccessToken());
        console.log("startdateymd=" + startdateymd + "&enddateymd=" + enddateymd);
        this.http.get("https://wbsapi.withings.net/v2/sleep", { headers, params }).subscribe((res) => { console.log(res); });
        //this.sleepSummaryObservable = 
        //console.log(this.sleepSummaryObservable)
    }
    get name() {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims)
            return null;
        return claims;
    }
    ngOnInit() {
        if (this.route.snapshot.queryParams.code) {
            console.log("NOW TRYING TO LOG IN TO GET ACCESS TOKEN");
            this.authentication_code = this.route.snapshot.queryParams.code;
            this.oauthService.tryLogin();
        }
    }
};
IdentityPage.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
IdentityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-identity',
        template: __webpack_require__(/*! raw-loader!./identity.page.html */ "./node_modules/raw-loader/index.js!./src/app/withings/identity/identity.page.html"),
        styles: [__webpack_require__(/*! ./identity.page.scss */ "./src/app/withings/identity/identity.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], IdentityPage);



/***/ })

}]);
//# sourceMappingURL=identity-identity-module-es2015.js.map