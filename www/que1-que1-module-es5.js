(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["que1-que1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/window/que1/que1.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/window/que1/que1.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n\r\n  <!--back button-->\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" position=\"left\">\r\n      <ion-back-button defaultHref=\"home\">\r\n\r\n      </ion-back-button> Zurück\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Schlaffenster bestimmen\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n <ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"1\">\r\n    \r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-item>\r\n       \r\n      <ion-label class=\"ion-text-wrap\">\r\n        Wann möchten Sie morgen aufstehen?\r\n      </ion-label>\r\n    </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row>\r\n\r\n      <ion-col>\r\n        <!-- emply space -> Time to the right of the window -->\r\n      </ion-col>\r\n\r\n      \r\n      <ion-item >\r\n        <ion-label \r\n        id = \"wakeUp\"\r\n        position=\"floating\">HH:mm</ion-label>\r\n        <ion-datetime \r\n        displayFormat=\"HH:mm\"  \r\n        value=\"{{getHourAndMinute()}}\"></ion-datetime>\r\n      </ion-item></ion-row>\r\n  \r\n</ion-grid>\r\n    \r\n\r\n    \r\n\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/img/sheep.png\">\r\n          </ion-avatar>\r\n    \r\n          <ion-label class=\"ion-text-wrap\">\r\n            Wann gehen Sie ins Bett, damit Sie zu dieser Zeit aufstehen können?\r\n          </ion-label>\r\n        </ion-item>  \r\n        \r\n        <ion-grid> <ion-row>\r\n\r\n          <ion-col>\r\n            <!-- emply space -> Time to the right of the window -->\r\n          </ion-col>\r\n  \r\n  \r\n          <ion-item>\r\n            <ion-label position=\"floating\">HH:mm</ion-label>\r\n            <ion-datetime displayFormat=\"HH:mm\"\r\n            [(ngModel)]=\"bettzeit\" \r\n          (ionChange) =\"bedtimeChanged($event)\" >></ion-datetime>\r\n          </ion-item></ion-row></ion-grid>\r\n          \r\n          \r\n    <div magin-vertical text-right>\r\n      <!-- @ margin-verical text-right := makes the items be on the \r\n      right side of the page-->\r\n\r\n      <ion-button href=\"/window/que2/\" color =\"primary\">\r\n        <!-- Add icon to the button\r\n          @slot start:= positions the icon in front of the name -->\r\n        <ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon>\r\n        <!-- name of button-->\r\n        Weiter\r\n\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n\r\n    <!--Progeress bar: just for estetics and ffun-->\r\n    <ion-progress-bar color=\"secondary\" value=\"0.2\"></ion-progress-bar>\r\n\r\n\r\n  </ion-card>\r\n\r\n  <!-- make the radio buttons or a toggle button-->\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/window/que1/que1-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/window/que1/que1-routing.module.ts ***!
  \****************************************************/
/*! exports provided: Que1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que1PageRoutingModule", function() { return Que1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _que1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./que1.page */ "./src/app/window/que1/que1.page.ts");




var routes = [
    {
        path: '',
        component: _que1_page__WEBPACK_IMPORTED_MODULE_3__["Que1Page"]
    }
];
var Que1PageRoutingModule = /** @class */ (function () {
    function Que1PageRoutingModule() {
    }
    Que1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Que1PageRoutingModule);
    return Que1PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/window/que1/que1.module.ts":
/*!********************************************!*\
  !*** ./src/app/window/que1/que1.module.ts ***!
  \********************************************/
/*! exports provided: Que1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que1PageModule", function() { return Que1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _que1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./que1-routing.module */ "./src/app/window/que1/que1-routing.module.ts");
/* harmony import */ var _que1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./que1.page */ "./src/app/window/que1/que1.page.ts");







var Que1PageModule = /** @class */ (function () {
    function Que1PageModule() {
    }
    Que1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _que1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Que1PageRoutingModule"]
            ],
            declarations: [_que1_page__WEBPACK_IMPORTED_MODULE_6__["Que1Page"]]
        })
    ], Que1PageModule);
    return Que1PageModule;
}());



/***/ }),

/***/ "./src/app/window/que1/que1.page.scss":
/*!********************************************!*\
  !*** ./src/app/window/que1/que1.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvdy9xdWUxL3F1ZTEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/window/que1/que1.page.ts":
/*!******************************************!*\
  !*** ./src/app/window/que1/que1.page.ts ***!
  \******************************************/
/*! exports provided: Que1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que1Page", function() { return Que1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




// initialize cloud firestore
var db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
// get data from firebase
var wakeUp = db.collection("SleepExpert").doc("aufstehen");
wakeUp.get().then(function (doc) {
    if (doc.exists) {
        console.log("Aufstehen:", doc.data());
        var data = doc.data();
        console.log(data.hour, ":", data.minute);
    }
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});
var Que1Page = /** @class */ (function () {
    function Que1Page() {
        this.wakeUp = new Date('hh:mm').toDateString();
        this.bettzeit = new Date('hh:mm').toDateString();
        this.datum = " ";
    }
    Que1Page.prototype.bedtimeChanged = function (data) {
        /** asta face sa ai expus in consola data si ora selectata, ceva tre
         * modificat, dar inca nu stiu ce aume
         */
        console.log(this.bettzeit);
        var timedata = this.bettzeit.split(":");
        console.log(timedata);
        // Add a new document in collection "sleepexpert"
        db.collection("SleepExpert").doc("bettzeit").set({
            /** data is always set but not updated --> use update and not set in line 42 */
            hour: timedata[0],
            minute: timedata[1]
        })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    //display data on screen for the user
    Que1Page.prototype.getHourAndMinute = function () {
        return this.datum;
    };
    Que1Page.prototype.ngOnInit = function () {
    };
    Que1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-que1',
            template: __webpack_require__(/*! raw-loader!./que1.page.html */ "./node_modules/raw-loader/index.js!./src/app/window/que1/que1.page.html"),
            styles: [__webpack_require__(/*! ./que1.page.scss */ "./src/app/window/que1/que1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Que1Page);
    return Que1Page;
}());



/***/ })

}]);
//# sourceMappingURL=que1-que1-module-es5.js.map