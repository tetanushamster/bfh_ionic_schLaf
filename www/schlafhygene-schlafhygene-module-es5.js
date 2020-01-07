(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schlafhygene-schlafhygene-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/schlafhygene/schlafhygene.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/schlafhygene/schlafhygene.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SleepExpert\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>Schlafhygiene</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n  Als Schlafhygiene werden alle Gewohnheiten und Umstände bezeichnet, die für einen gesunden Schlaf förderlich sind.\r\n  Für Menschen, die von Schlafstörungen betroffen sind, ist eine gute Schlafhygiene unverzichtbar: Die konsequente Befolgung einiger einfacher Regeln bewirkt oft schon eine deutliche Verbesserung der Schlafqualität, selbst wenn keine Wunder erwartet werden dürfen. \r\n  Das Führen eines Schlaftagebuchs hilft dabei, die Einhaltung der Regeln und deren Auswirkungen zu überprüfen und Veränderungen festzustellen. \r\n  </ion-card-content>\r\n  </ion-card>"

/***/ }),

/***/ "./src/app/information/schlafhygene/schlafhygene-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/information/schlafhygene/schlafhygene-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SchlafhygenePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafhygenePageRoutingModule", function() { return SchlafhygenePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schlafhygene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schlafhygene.page */ "./src/app/information/schlafhygene/schlafhygene.page.ts");




var routes = [
    {
        path: '',
        component: _schlafhygene_page__WEBPACK_IMPORTED_MODULE_3__["SchlafhygenePage"]
    }
];
var SchlafhygenePageRoutingModule = /** @class */ (function () {
    function SchlafhygenePageRoutingModule() {
    }
    SchlafhygenePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SchlafhygenePageRoutingModule);
    return SchlafhygenePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/information/schlafhygene/schlafhygene.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/information/schlafhygene/schlafhygene.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchlafhygenePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafhygenePageModule", function() { return SchlafhygenePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schlafhygene_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schlafhygene-routing.module */ "./src/app/information/schlafhygene/schlafhygene-routing.module.ts");
/* harmony import */ var _schlafhygene_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schlafhygene.page */ "./src/app/information/schlafhygene/schlafhygene.page.ts");







var SchlafhygenePageModule = /** @class */ (function () {
    function SchlafhygenePageModule() {
    }
    SchlafhygenePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _schlafhygene_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchlafhygenePageRoutingModule"]
            ],
            declarations: [_schlafhygene_page__WEBPACK_IMPORTED_MODULE_6__["SchlafhygenePage"]]
        })
    ], SchlafhygenePageModule);
    return SchlafhygenePageModule;
}());



/***/ }),

/***/ "./src/app/information/schlafhygene/schlafhygene.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/information/schlafhygene/schlafhygene.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL3NjaGxhZmh5Z2VuZS9zY2hsYWZoeWdlbmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/information/schlafhygene/schlafhygene.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/information/schlafhygene/schlafhygene.page.ts ***!
  \***************************************************************/
/*! exports provided: SchlafhygenePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafhygenePage", function() { return SchlafhygenePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SchlafhygenePage = /** @class */ (function () {
    function SchlafhygenePage() {
    }
    SchlafhygenePage.prototype.ngOnInit = function () {
    };
    SchlafhygenePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schlafhygene',
            template: __webpack_require__(/*! raw-loader!./schlafhygene.page.html */ "./node_modules/raw-loader/index.js!./src/app/information/schlafhygene/schlafhygene.page.html"),
            styles: [__webpack_require__(/*! ./schlafhygene.page.scss */ "./src/app/information/schlafhygene/schlafhygene.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SchlafhygenePage);
    return SchlafhygenePage;
}());



/***/ })

}]);
//# sourceMappingURL=schlafhygene-schlafhygene-module-es5.js.map