(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["que3-que3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/window/que3/que3.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/window/que3/que3.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n\r\n  <!--back button-->\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" position=\"left\">\r\n      <ion-back-button defaultHref=\"home\">\r\n\r\n      </ion-back-button> Zurück\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Schlaffenster bestimmen\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"1\">\r\n    \r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-item>\r\n       \r\n      <ion-label class=\"ion-text-wrap\">\r\n        Wann möchten Sie morgen aufstehen?\r\n      </ion-label>\r\n    </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row>\r\n\r\n      <ion-col>\r\n        <!-- emply space -> Time to the right of the window -->\r\n      </ion-col>\r\n\r\n\r\n      <ion-item>\r\n        <ion-label>HH:mm</ion-label>\r\n        <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\r\n      </ion-item></ion-row>\r\n  \r\n      <ion-row>\r\n        <ion-col size=\"1\">\r\n      </ion-col> \r\n      <ion-col>\r\n        <ion-item> \r\n          <ion-label class=\"ion-text-wrap\">\r\n            Wann gehen Sie normalerweise ins Bett, um dieses Zeit aufzustehen?\r\n          </ion-label>\r\n        </ion-item>          \r\n      </ion-col>\r\n      <ion-col>\r\n        <!-- emply space -> Time to the right of the window -->\r\n      </ion-col>\r\n\r\n\r\n      <ion-item>\r\n        <ion-label>HH:mm</ion-label>\r\n        <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\r\n      </ion-item>    \r\n      </ion-row>\r\n      \r\n</ion-grid>\r\n    \r\n\r\n    \r\n\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/img/sheep.png\">\r\n          </ion-avatar>\r\n    \r\n           \r\n        </ion-item>  \r\n       \r\n          \r\n          \r\n    <div magin-vertical text-right>\r\n      <!-- @ margin-verical text-right := makes the items be on the \r\n      right side of the page-->\r\n\r\n      <ion-button href=\"/window/que4/\" fill=\"outline\" color=\"#c3dcfb\">\r\n        <!-- Add icon to the button\r\n          @slot start:= positions the icon in front of the name -->\r\n        <ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon>\r\n        <!-- name of button-->\r\n        Weiter\r\n\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n\r\n    <!--Progeress bar: just for estetics and ffun-->\r\n    <ion-progress-bar color=\"secondary\" value=\"0.4\"></ion-progress-bar>\r\n\r\n\r\n  </ion-card>\r\n\r\n  <!-- make the radio buttons or a toggle button-->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/window/que3/que3-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/window/que3/que3-routing.module.ts ***!
  \****************************************************/
/*! exports provided: Que3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que3PageRoutingModule", function() { return Que3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _que3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./que3.page */ "./src/app/window/que3/que3.page.ts");




var routes = [
    {
        path: '',
        component: _que3_page__WEBPACK_IMPORTED_MODULE_3__["Que3Page"]
    }
];
var Que3PageRoutingModule = /** @class */ (function () {
    function Que3PageRoutingModule() {
    }
    Que3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Que3PageRoutingModule);
    return Que3PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/window/que3/que3.module.ts":
/*!********************************************!*\
  !*** ./src/app/window/que3/que3.module.ts ***!
  \********************************************/
/*! exports provided: Que3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que3PageModule", function() { return Que3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _que3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./que3-routing.module */ "./src/app/window/que3/que3-routing.module.ts");
/* harmony import */ var _que3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./que3.page */ "./src/app/window/que3/que3.page.ts");







var Que3PageModule = /** @class */ (function () {
    function Que3PageModule() {
    }
    Que3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _que3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Que3PageRoutingModule"]
            ],
            declarations: [_que3_page__WEBPACK_IMPORTED_MODULE_6__["Que3Page"]]
        })
    ], Que3PageModule);
    return Que3PageModule;
}());



/***/ }),

/***/ "./src/app/window/que3/que3.page.scss":
/*!********************************************!*\
  !*** ./src/app/window/que3/que3.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvdy9xdWUzL3F1ZTMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/window/que3/que3.page.ts":
/*!******************************************!*\
  !*** ./src/app/window/que3/que3.page.ts ***!
  \******************************************/
/*! exports provided: Que3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que3Page", function() { return Que3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Que3Page = /** @class */ (function () {
    function Que3Page() {
    }
    Que3Page.prototype.ngOnInit = function () {
    };
    Que3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-que3',
            template: __webpack_require__(/*! raw-loader!./que3.page.html */ "./node_modules/raw-loader/index.js!./src/app/window/que3/que3.page.html"),
            styles: [__webpack_require__(/*! ./que3.page.scss */ "./src/app/window/que3/que3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Que3Page);
    return Que3Page;
}());



/***/ })

}]);
//# sourceMappingURL=que3-que3-module-es5.js.map