(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["therapie-therapie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/therapie/therapie.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/therapie/therapie.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SleepExpert\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-card>\r\n<ion-card-header>\r\n<ion-card-title>Therapie</ion-card-title>\r\n</ion-card-header>    \r\n<ion-card-content>\r\n    Aufklärung und Beratung über Schlafstörungen sind die Grundlagen einer Behandlung. Diese umfasst ein Gespräch über den normalen, altersentsprechenden Schlaf und individuelle Schwankungen sowie schlafbezogene Ängste. Mit einer Reihe von Maßnahmen (Schlafhygiene) können Betroffene den Weg zu einem besseren und erholsameren Schlaf selbst bereiten:\r\n    <ul>\r\n    <li>geregelte Schlafzeiten (\"Schlaffenster\")</li>\r\n    <li>nur bei Müdigkeit ins Bett gehen</li> \r\n    <li>ruhiger, abgedunkelter, mit 15-18 °C temperierter Schlafraum</li> \r\n    <li>ein angenehmes „Zu-Bett-Geh-Ritual\"</li>\r\n    </ul>\r\n</ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/information/therapie/therapie-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/information/therapie/therapie-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TherapiePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapiePageRoutingModule", function() { return TherapiePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _therapie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./therapie.page */ "./src/app/information/therapie/therapie.page.ts");




var routes = [
    {
        path: '',
        component: _therapie_page__WEBPACK_IMPORTED_MODULE_3__["TherapiePage"]
    }
];
var TherapiePageRoutingModule = /** @class */ (function () {
    function TherapiePageRoutingModule() {
    }
    TherapiePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TherapiePageRoutingModule);
    return TherapiePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/information/therapie/therapie.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/information/therapie/therapie.module.ts ***!
  \*********************************************************/
/*! exports provided: TherapiePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapiePageModule", function() { return TherapiePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _therapie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./therapie-routing.module */ "./src/app/information/therapie/therapie-routing.module.ts");
/* harmony import */ var _therapie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./therapie.page */ "./src/app/information/therapie/therapie.page.ts");







var TherapiePageModule = /** @class */ (function () {
    function TherapiePageModule() {
    }
    TherapiePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _therapie_routing_module__WEBPACK_IMPORTED_MODULE_5__["TherapiePageRoutingModule"]
            ],
            declarations: [_therapie_page__WEBPACK_IMPORTED_MODULE_6__["TherapiePage"]]
        })
    ], TherapiePageModule);
    return TherapiePageModule;
}());



/***/ }),

/***/ "./src/app/information/therapie/therapie.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/information/therapie/therapie.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL3RoZXJhcGllL3RoZXJhcGllLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/information/therapie/therapie.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/information/therapie/therapie.page.ts ***!
  \*******************************************************/
/*! exports provided: TherapiePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapiePage", function() { return TherapiePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TherapiePage = /** @class */ (function () {
    function TherapiePage() {
    }
    TherapiePage.prototype.ngOnInit = function () {
    };
    TherapiePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-therapie',
            template: __webpack_require__(/*! raw-loader!./therapie.page.html */ "./node_modules/raw-loader/index.js!./src/app/information/therapie/therapie.page.html"),
            styles: [__webpack_require__(/*! ./therapie.page.scss */ "./src/app/information/therapie/therapie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TherapiePage);
    return TherapiePage;
}());



/***/ })

}]);
//# sourceMappingURL=therapie-therapie-module-es5.js.map