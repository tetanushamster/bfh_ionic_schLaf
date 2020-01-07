(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["protocol-protocol-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/protocol/protocol.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/protocol/protocol.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title> Schlaftagebuch</ion-card-title>\r\n          </ion-card-header>  \r\n  <ion-label class=\"ion-text-wrap\">{{today | date:\"EEEE a\":de}}<br>{{today | date:\"dd.MM.yyyy\":de}}</ion-label>\r\n\r\n  <ion-button expand=\"block\" href=\"/questions/\"><ion-icon slot=\"start\" name=\"book\"></ion-icon>Neuer Tagebucheintrag</ion-button>\r\n    </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/protocol/protocol-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/protocol/protocol-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProtocolPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolPageRoutingModule", function() { return ProtocolPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _protocol_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./protocol.page */ "./src/app/protocol/protocol.page.ts");




const routes = [
    {
        path: '',
        component: _protocol_page__WEBPACK_IMPORTED_MODULE_3__["ProtocolPage"]
    }
];
let ProtocolPageRoutingModule = class ProtocolPageRoutingModule {
};
ProtocolPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProtocolPageRoutingModule);



/***/ }),

/***/ "./src/app/protocol/protocol.module.ts":
/*!*********************************************!*\
  !*** ./src/app/protocol/protocol.module.ts ***!
  \*********************************************/
/*! exports provided: ProtocolPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolPageModule", function() { return ProtocolPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _protocol_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocol-routing.module */ "./src/app/protocol/protocol-routing.module.ts");
/* harmony import */ var _protocol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./protocol.page */ "./src/app/protocol/protocol.page.ts");







let ProtocolPageModule = class ProtocolPageModule {
};
ProtocolPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _protocol_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProtocolPageRoutingModule"]
        ],
        declarations: [_protocol_page__WEBPACK_IMPORTED_MODULE_6__["ProtocolPage"]]
    })
], ProtocolPageModule);



/***/ }),

/***/ "./src/app/protocol/protocol.page.scss":
/*!*********************************************!*\
  !*** ./src/app/protocol/protocol.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RvY29sL3Byb3RvY29sLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/protocol/protocol.page.ts":
/*!*******************************************!*\
  !*** ./src/app/protocol/protocol.page.ts ***!
  \*******************************************/
/*! exports provided: ProtocolPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolPage", function() { return ProtocolPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProtocolPage = class ProtocolPage {
    constructor() {
        this.today = Date.now();
    }
    ngOnInit() {
    }
};
ProtocolPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-protocol',
        template: __webpack_require__(/*! raw-loader!./protocol.page.html */ "./node_modules/raw-loader/index.js!./src/app/protocol/protocol.page.html"),
        styles: [__webpack_require__(/*! ./protocol.page.scss */ "./src/app/protocol/protocol.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProtocolPage);



/***/ })

}]);
//# sourceMappingURL=protocol-protocol-module-es2015.js.map