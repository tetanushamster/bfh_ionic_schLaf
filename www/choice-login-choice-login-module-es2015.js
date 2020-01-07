(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choice-login-choice-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/choice-login/choice-login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choice-login/choice-login.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/sheep.png\">\n      </ion-avatar>\n      <ion-title>SleepExpert</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title> Bitte loggen Sie sich ein oder registrieren sie sich</ion-card-title>\n      </ion-card-header>\n     <ion-grid>\n       <ion-col>\n         \n         \n      <!-- access button-->\n      <ion-button expand=\"full\" href=\"../login\" >\n        <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n        Einloggen\n      </ion-button>\n      \n       </ion-col>\n       \n       <ion-col>\n         <ion-button expand=\"full\" href = \"../register\" >\n          <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n          Registrieren\n        </ion-button>\n       </ion-col> \n     \n     </ion-grid>   \n      \n \n      \n     \n    <br>\n    </ion-card>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/choice-login/choice-login-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/choice-login/choice-login-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChoiceLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceLoginPageRoutingModule", function() { return ChoiceLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choice_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choice-login.page */ "./src/app/choice-login/choice-login.page.ts");




const routes = [
    {
        path: '',
        component: _choice_login_page__WEBPACK_IMPORTED_MODULE_3__["ChoiceLoginPage"]
    }
];
let ChoiceLoginPageRoutingModule = class ChoiceLoginPageRoutingModule {
};
ChoiceLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoiceLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/choice-login/choice-login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/choice-login/choice-login.module.ts ***!
  \*****************************************************/
/*! exports provided: ChoiceLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceLoginPageModule", function() { return ChoiceLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choice_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choice-login-routing.module */ "./src/app/choice-login/choice-login-routing.module.ts");
/* harmony import */ var _choice_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choice-login.page */ "./src/app/choice-login/choice-login.page.ts");







let ChoiceLoginPageModule = class ChoiceLoginPageModule {
};
ChoiceLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choice_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoiceLoginPageRoutingModule"]
        ],
        declarations: [_choice_login_page__WEBPACK_IMPORTED_MODULE_6__["ChoiceLoginPage"]]
    })
], ChoiceLoginPageModule);



/***/ }),

/***/ "./src/app/choice-login/choice-login.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/choice-login/choice-login.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob2ljZS1sb2dpbi9jaG9pY2UtbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/choice-login/choice-login.page.ts":
/*!***************************************************!*\
  !*** ./src/app/choice-login/choice-login.page.ts ***!
  \***************************************************/
/*! exports provided: ChoiceLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceLoginPage", function() { return ChoiceLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChoiceLoginPage = class ChoiceLoginPage {
    constructor() { }
    ngOnInit() {
    }
};
ChoiceLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choice-login',
        template: __webpack_require__(/*! raw-loader!./choice-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/choice-login/choice-login.page.html"),
        styles: [__webpack_require__(/*! ./choice-login.page.scss */ "./src/app/choice-login/choice-login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChoiceLoginPage);



/***/ })

}]);
//# sourceMappingURL=choice-login-choice-login-module-es2015.js.map