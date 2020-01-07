(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["withings-withings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/withings/withings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/withings/withings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SleepExpert\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n   \r\n      <ion-list lines=\"none\">\r\n        <ion-item href=\"/withings/data\">\r\n          <ion-icon slot=\"withings\" color=\"medium\" name=\"data\"></ion-icon>\r\n          <ion-label>Meine Aufzeichnungen</ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"/withings/identity\">\r\n          <ion-icon slot=\"withings\" color=\"medium\" name=\"identity\"></ion-icon>\r\n          <ion-label>App verknüpfen</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/withings/withings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/withings/withings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WithingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithingsPageRoutingModule", function() { return WithingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _withings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withings.page */ "./src/app/withings/withings.page.ts");




var routes = [
    {
        path: '',
        component: _withings_page__WEBPACK_IMPORTED_MODULE_3__["WithingsPage"]
    },
    {
        path: 'identity',
        loadChildren: function () { return __webpack_require__.e(/*! import() | identity-identity-module */ "identity-identity-module").then(__webpack_require__.bind(null, /*! ./identity/identity.module */ "./src/app/withings/identity/identity.module.ts")).then(function (m) { return m.IdentityPageModule; }); }
    },
    {
        path: 'data',
        loadChildren: function () { return __webpack_require__.e(/*! import() | data-data-module */ "data-data-module").then(__webpack_require__.bind(null, /*! ./data/data.module */ "./src/app/withings/data/data.module.ts")).then(function (m) { return m.DataPageModule; }); }
    }
];
var WithingsPageRoutingModule = /** @class */ (function () {
    function WithingsPageRoutingModule() {
    }
    WithingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WithingsPageRoutingModule);
    return WithingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/withings/withings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/withings/withings.module.ts ***!
  \*********************************************/
/*! exports provided: WithingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithingsPageModule", function() { return WithingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _withings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withings-routing.module */ "./src/app/withings/withings-routing.module.ts");
/* harmony import */ var _withings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withings.page */ "./src/app/withings/withings.page.ts");







var WithingsPageModule = /** @class */ (function () {
    function WithingsPageModule() {
    }
    WithingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _withings_routing_module__WEBPACK_IMPORTED_MODULE_5__["WithingsPageRoutingModule"]
            ],
            declarations: [_withings_page__WEBPACK_IMPORTED_MODULE_6__["WithingsPage"]]
        })
    ], WithingsPageModule);
    return WithingsPageModule;
}());



/***/ }),

/***/ "./src/app/withings/withings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/withings/withings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhpbmdzL3dpdGhpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/withings/withings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/withings/withings.page.ts ***!
  \*******************************************/
/*! exports provided: WithingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithingsPage", function() { return WithingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WithingsPage = /** @class */ (function () {
    function WithingsPage() {
    }
    WithingsPage.prototype.ngOnInit = function () {
    };
    WithingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withings',
            template: __webpack_require__(/*! raw-loader!./withings.page.html */ "./node_modules/raw-loader/index.js!./src/app/withings/withings.page.html"),
            styles: [__webpack_require__(/*! ./withings.page.scss */ "./src/app/withings/withings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WithingsPage);
    return WithingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=withings-withings-module-es5.js.map