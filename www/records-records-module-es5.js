(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["records-records-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/records/records.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/records/records.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/records/records-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/records/records-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecordsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPageRoutingModule", function() { return RecordsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _records_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./records.page */ "./src/app/records/records.page.ts");




var routes = [
    {
        path: '',
        component: _records_page__WEBPACK_IMPORTED_MODULE_3__["RecordsPage"]
    }
];
var RecordsPageRoutingModule = /** @class */ (function () {
    function RecordsPageRoutingModule() {
    }
    RecordsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecordsPageRoutingModule);
    return RecordsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/records/records.module.ts":
/*!*******************************************!*\
  !*** ./src/app/records/records.module.ts ***!
  \*******************************************/
/*! exports provided: RecordsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPageModule", function() { return RecordsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _records_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./records-routing.module */ "./src/app/records/records-routing.module.ts");
/* harmony import */ var _records_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./records.page */ "./src/app/records/records.page.ts");







var RecordsPageModule = /** @class */ (function () {
    function RecordsPageModule() {
    }
    RecordsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _records_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordsPageRoutingModule"]
            ],
            declarations: [_records_page__WEBPACK_IMPORTED_MODULE_6__["RecordsPage"]]
        })
    ], RecordsPageModule);
    return RecordsPageModule;
}());



/***/ }),

/***/ "./src/app/records/records.page.scss":
/*!*******************************************!*\
  !*** ./src/app/records/records.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvcmVjb3Jkcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/records/records.page.ts":
/*!*****************************************!*\
  !*** ./src/app/records/records.page.ts ***!
  \*****************************************/
/*! exports provided: RecordsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPage", function() { return RecordsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecordsPage = /** @class */ (function () {
    function RecordsPage() {
    }
    RecordsPage.prototype.ngOnInit = function () {
    };
    RecordsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-records',
            template: __webpack_require__(/*! raw-loader!./records.page.html */ "./node_modules/raw-loader/index.js!./src/app/records/records.page.html"),
            styles: [__webpack_require__(/*! ./records.page.scss */ "./src/app/records/records.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecordsPage);
    return RecordsPage;
}());



/***/ })

}]);
//# sourceMappingURL=records-records-module-es5.js.map