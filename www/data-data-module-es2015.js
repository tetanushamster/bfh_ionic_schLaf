(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-data-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/withings/data/data.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/withings/data/data.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SleepExpert\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/withings/data/data-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/withings/data/data-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageRoutingModule", function() { return DataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.page */ "./src/app/withings/data/data.page.ts");




const routes = [
    {
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_3__["DataPage"]
    }
];
let DataPageRoutingModule = class DataPageRoutingModule {
};
DataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataPageRoutingModule);



/***/ }),

/***/ "./src/app/withings/data/data.module.ts":
/*!**********************************************!*\
  !*** ./src/app/withings/data/data.module.ts ***!
  \**********************************************/
/*! exports provided: DataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageModule", function() { return DataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-routing.module */ "./src/app/withings/data/data-routing.module.ts");
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.page */ "./src/app/withings/data/data.page.ts");







let DataPageModule = class DataPageModule {
};
DataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _data_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataPageRoutingModule"]
        ],
        declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]]
    })
], DataPageModule);



/***/ }),

/***/ "./src/app/withings/data/data.page.scss":
/*!**********************************************!*\
  !*** ./src/app/withings/data/data.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhpbmdzL2RhdGEvZGF0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/withings/data/data.page.ts":
/*!********************************************!*\
  !*** ./src/app/withings/data/data.page.ts ***!
  \********************************************/
/*! exports provided: DataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPage", function() { return DataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataPage = class DataPage {
    constructor() { }
    ngOnInit() {
    }
};
DataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data',
        template: __webpack_require__(/*! raw-loader!./data.page.html */ "./node_modules/raw-loader/index.js!./src/app/withings/data/data.page.html"),
        styles: [__webpack_require__(/*! ./data.page.scss */ "./src/app/withings/data/data.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataPage);



/***/ })

}]);
//# sourceMappingURL=data-data-module-es2015.js.map