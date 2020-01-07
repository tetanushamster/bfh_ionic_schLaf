(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/information.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/information.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n  <ion-card-content>\r\n    <ion-button routerLink=\"/information/therapie\" expand=\"block\">Therapie</ion-button>\r\n    <ion-button routerLink=\"/information/schlafkrankheit\" expand=\"block\">Schlafkrankheit</ion-button>\r\n    <ion-button routerLink=\"/information/schlafhygene\" expand=\"block\">Schlafhygiene</ion-button>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/information/information-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/information/information-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "./src/app/information/information.page.ts");




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    },
    {
        path: 'therapie',
        loadChildren: () => __webpack_require__.e(/*! import() | therapie-therapie-module */ "therapie-therapie-module").then(__webpack_require__.bind(null, /*! ./therapie/therapie.module */ "./src/app/information/therapie/therapie.module.ts")).then(m => m.TherapiePageModule)
    },
    {
        path: 'schlafkrankheit',
        loadChildren: () => __webpack_require__.e(/*! import() | schlafkrankheit-schlafkrankheit-module */ "schlafkrankheit-schlafkrankheit-module").then(__webpack_require__.bind(null, /*! ./schlafkrankheit/schlafkrankheit.module */ "./src/app/information/schlafkrankheit/schlafkrankheit.module.ts")).then(m => m.SchlafkrankheitPageModule)
    },
    {
        path: 'schlafhygene',
        loadChildren: () => __webpack_require__.e(/*! import() | schlafhygene-schlafhygene-module */ "schlafhygene-schlafhygene-module").then(__webpack_require__.bind(null, /*! ./schlafhygene/schlafhygene.module */ "./src/app/information/schlafhygene/schlafhygene.module.ts")).then(m => m.SchlafhygenePageModule)
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "./src/app/information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information-routing.module */ "./src/app/information/information-routing.module.ts");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information.page */ "./src/app/information/information.page.ts");







let InformationPageModule = class InformationPageModule {
};
InformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformationPageRoutingModule"]
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
    })
], InformationPageModule);



/***/ }),

/***/ "./src/app/information/information.page.scss":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/information/information.page.ts":
/*!*************************************************!*\
  !*** ./src/app/information/information.page.ts ***!
  \*************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationPage = class InformationPage {
    constructor() { }
    ngOnInit() {
    }
};
InformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: __webpack_require__(/*! raw-loader!./information.page.html */ "./node_modules/raw-loader/index.js!./src/app/information/information.page.html"),
        styles: [__webpack_require__(/*! ./information.page.scss */ "./src/app/information/information.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InformationPage);



/***/ })

}]);
//# sourceMappingURL=information-information-module-es2015.js.map