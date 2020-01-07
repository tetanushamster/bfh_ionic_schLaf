(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schlafkrankheit-schlafkrankheit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/schlafkrankheit/schlafkrankheit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/schlafkrankheit/schlafkrankheit.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SleepExpert\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>Schlafkrankheit</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <p><b>Definition:</b> Mindestens dreimal pro Woche über einen Zeitraum von ein bis drei Monaten kommt es zu Ein- und / oder Durchschlafstörungen oder frühmorgendlichem Erwachen.\r\n    Die Schlafstörungen sind nicht durch andere körperliche oder psychische Störungen bedingt.</p>\r\n\r\n    <p><b>Folgen:</b> Die unbefriedigende Schlafdauer oder -qualität beeinträchtigt das Befinden und die Leistungsleistungsfähigkeit am Tag. Es kann zu erheblichem Leidensdruckkommen.\r\n    Betroffen: Etwa sechs Prozent der Bevölkerung.</p>\r\n\r\n    <p><b>Diagnose</b> Arztgespräch, Schlaffragebögen, Schlaftagebuch über 14 Tage, gegebenenfalls Aktometrie (Bewegungsmessung, Ruhe- und Aktivitätsprofils tagsüber und nachts über 14 Tage) und weitere Untersuchungen bei Bedarf.</p>\r\n\r\n    <p><b>Verlauf</b> Eine Insomnie kann akut auftreten und wieder abklingen, unter bestimmten Voraussetzungen (Fehlanpassungen auf körperlicher, geistiger und psychischer Ebene) aber auch chronisch werden.</p>\r\n\r\n    <p><b>Therapie:</b> Selbsthilfemaßnahmen wie gesunder Lebensstil und den Schlaf fördernde Verhaltensweisen (\"Schlafkunde\"); zusammen mit dem Arzt/Therapeuten eingeleitete Steuerung der Schlafdauer (kontrollierte Schlafanregung und Schlafeinschränkung), kognitive Verhaltenstherapie. Bei Bedarf kurzzeitige ärztliche Verordnung eines Schlafmittels.</p>\r\n  </ion-card-content>\r\n</ion-card>\r\n"

/***/ }),

/***/ "./src/app/information/schlafkrankheit/schlafkrankheit-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/information/schlafkrankheit/schlafkrankheit-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SchlafkrankheitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafkrankheitPageRoutingModule", function() { return SchlafkrankheitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schlafkrankheit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schlafkrankheit.page */ "./src/app/information/schlafkrankheit/schlafkrankheit.page.ts");




var routes = [
    {
        path: '',
        component: _schlafkrankheit_page__WEBPACK_IMPORTED_MODULE_3__["SchlafkrankheitPage"]
    }
];
var SchlafkrankheitPageRoutingModule = /** @class */ (function () {
    function SchlafkrankheitPageRoutingModule() {
    }
    SchlafkrankheitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SchlafkrankheitPageRoutingModule);
    return SchlafkrankheitPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/information/schlafkrankheit/schlafkrankheit.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/information/schlafkrankheit/schlafkrankheit.module.ts ***!
  \***********************************************************************/
/*! exports provided: SchlafkrankheitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafkrankheitPageModule", function() { return SchlafkrankheitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schlafkrankheit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schlafkrankheit-routing.module */ "./src/app/information/schlafkrankheit/schlafkrankheit-routing.module.ts");
/* harmony import */ var _schlafkrankheit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schlafkrankheit.page */ "./src/app/information/schlafkrankheit/schlafkrankheit.page.ts");







var SchlafkrankheitPageModule = /** @class */ (function () {
    function SchlafkrankheitPageModule() {
    }
    SchlafkrankheitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _schlafkrankheit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchlafkrankheitPageRoutingModule"]
            ],
            declarations: [_schlafkrankheit_page__WEBPACK_IMPORTED_MODULE_6__["SchlafkrankheitPage"]]
        })
    ], SchlafkrankheitPageModule);
    return SchlafkrankheitPageModule;
}());



/***/ }),

/***/ "./src/app/information/schlafkrankheit/schlafkrankheit.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/information/schlafkrankheit/schlafkrankheit.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL3NjaGxhZmtyYW5raGVpdC9zY2hsYWZrcmFua2hlaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/information/schlafkrankheit/schlafkrankheit.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/information/schlafkrankheit/schlafkrankheit.page.ts ***!
  \*********************************************************************/
/*! exports provided: SchlafkrankheitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchlafkrankheitPage", function() { return SchlafkrankheitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SchlafkrankheitPage = /** @class */ (function () {
    function SchlafkrankheitPage() {
    }
    SchlafkrankheitPage.prototype.ngOnInit = function () {
    };
    SchlafkrankheitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schlafkrankheit',
            template: __webpack_require__(/*! raw-loader!./schlafkrankheit.page.html */ "./node_modules/raw-loader/index.js!./src/app/information/schlafkrankheit/schlafkrankheit.page.html"),
            styles: [__webpack_require__(/*! ./schlafkrankheit.page.scss */ "./src/app/information/schlafkrankheit/schlafkrankheit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SchlafkrankheitPage);
    return SchlafkrankheitPage;
}());



/***/ })

}]);
//# sourceMappingURL=schlafkrankheit-schlafkrankheit-module-es5.js.map