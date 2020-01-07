(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["que2-que2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/window/que2/que2.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/window/que2/que2.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n\r\n  <!--back button-->\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" position=\"left\">\r\n      <ion-back-button defaultHref=\"home\">\r\n\r\n      </ion-back-button> Zurück\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-card>\r\n  \r\n     \r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Schlaffenster bestimmen\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"1\">\r\n    \r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-item>\r\n       \r\n      <ion-label class=\"ion-text-wrap\">\r\n        Wann möchten Sie morgen aufstehen?\r\n      </ion-label>\r\n    </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row>\r\n   <ion-col>\r\n    <!-- emply space -> Time to the right of the window -->\r\n     </ion-col>\r\n\r\n     <ion-item>\r\n        <ion-label>HH:mm</ion-label>\r\n        <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\r\n      </ion-item></ion-row></ion-grid>\r\n    \r\n\r\n   <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col> \r\n       <ion-item>\r\n         <ion-label class=\"ion-text-wrap\">\r\n            Wann gehen Sie ins Bett, damit Sie zu dieser Zeit aufstehen können?\r\n          </ion-label>\r\n        </ion-item>  \r\n      </ion-col></ion-row>\r\n       \r\n   <ion-grid> <ion-row>\r\n\r\n          <ion-col>\r\n            <!-- emply space -> Time to the right of the window -->\r\n          </ion-col>\r\n  \r\n  \r\n          <ion-item>\r\n            <ion-label id = \"sleep\"\r\n            position=\"floating\">HH:mm</ion-label>\r\n            <ion-datetime \r\n            displayFormat=\"HH:mm\"\r\n             value=\"{{getSleep()}}\"></ion-datetime>\r\n          </ion-item></ion-row>\r\n        </ion-grid>\r\n       \r\n          <ion-item> \r\n           <ion-avatar slot=\"start\"><img src=\"assets/img/sheep.png\"></ion-avatar> \r\n          <ion-label class=\"ion-text-wrap\">\r\n            Können Sie dann gut schlafen?\r\n          </ion-label>\r\n          \r\n        </ion-item> \r\n        <ion-radio-group \r\n        [(ngModel)]=\"changed\"\r\n        (ionChange) =\"restChanged($event)\">\r\n          \r\n           <ion-item>\r\n            <ion-label>Ja</ion-label><ion-icon name=\"happy\"></ion-icon>\r\n            <ion-radio \r\n            id = \"ja\"\r\n            value=\"ja\"></ion-radio>\r\n            <ion-item>   </ion-item>\r\n          <ion-label></ion-label><ion-label></ion-label>\r\n              <ion-label>Nein</ion-label><ion-icon name=\"sad\"></ion-icon>\r\n              <ion-radio \r\n              id = \"nein\"\r\n              value=\"nein\"></ion-radio>\r\n              \r\n            </ion-item>\r\n        </ion-radio-group>\r\n       \r\n    \r\n     \r\n           \r\n           \r\n        \r\n        \r\n          \r\n          \r\n    <div magin-vertical text-right>\r\n      <!-- @ margin-verical text-right := makes the items be on the \r\n      right side of the page-->\r\n\r\n      <ion-button href=\"/window/que3/\" fill=\"outline\" color=\"#c3dcfb\">\r\n        <!-- Add icon to the button\r\n          @slot start:= positions the icon in front of the name -->\r\n        <ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon>\r\n        <!-- name of button-->\r\n        Weiter\r\n\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n\r\n    <!--Progeress bar: just for estetics and ffun-->\r\n    <ion-progress-bar color=\"secondary\" value=\"0.3\"></ion-progress-bar>\r\n\r\n\r\n  </ion-card>\r\n\r\n  <!-- make the radio buttons or a toggle button-->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/window/que2/que2-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/window/que2/que2-routing.module.ts ***!
  \****************************************************/
/*! exports provided: Que2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que2PageRoutingModule", function() { return Que2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _que2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./que2.page */ "./src/app/window/que2/que2.page.ts");




const routes = [
    {
        path: '',
        component: _que2_page__WEBPACK_IMPORTED_MODULE_3__["Que2Page"]
    }
];
let Que2PageRoutingModule = class Que2PageRoutingModule {
};
Que2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Que2PageRoutingModule);



/***/ }),

/***/ "./src/app/window/que2/que2.module.ts":
/*!********************************************!*\
  !*** ./src/app/window/que2/que2.module.ts ***!
  \********************************************/
/*! exports provided: Que2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que2PageModule", function() { return Que2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _que2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./que2-routing.module */ "./src/app/window/que2/que2-routing.module.ts");
/* harmony import */ var _que2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./que2.page */ "./src/app/window/que2/que2.page.ts");







let Que2PageModule = class Que2PageModule {
};
Que2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _que2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Que2PageRoutingModule"]
        ],
        declarations: [_que2_page__WEBPACK_IMPORTED_MODULE_6__["Que2Page"]]
    })
], Que2PageModule);



/***/ }),

/***/ "./src/app/window/que2/que2.page.scss":
/*!********************************************!*\
  !*** ./src/app/window/que2/que2.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvdy9xdWUyL3F1ZTIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/window/que2/que2.page.ts":
/*!******************************************!*\
  !*** ./src/app/window/que2/que2.page.ts ***!
  \******************************************/
/*! exports provided: Que2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Que2Page", function() { return Que2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




// initialize cloud firestore
const db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
// get data from firebase
const wakeUp = db.collection("SleepExpert").doc("aufstehen");
const sleep = db.collection("SleepExpert").doc("bettzeit");
wakeUp.get().then(function (doc) {
    if (doc.exists) {
        console.log("Aufstehen:", doc.data());
        let data = doc.data();
        console.log(data.hour, ":", data.minute);
    }
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});
sleep.get().then(function (doc) {
    if (doc.exists) {
        console.log("Bettzeit:", doc.data());
        let data = doc.data();
        console.log(data.hour, ":", data.minute);
    }
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});
let Que2Page = class Que2Page {
    constructor() {
        this.wakeUp = new Date('hh:mm').toDateString();
        this.sleep = new Date('hh:mm').toDateString();
        this.changed = true;
        this.datum = " ";
    }
    getSleep() {
        return "01:00 ";
    }
    restChanged(ch) {
        console.log(this.changed);
        //** adauga asta la urmatoarela pagini casa  mearga bine */
        db.collection("SleepExpert").doc("changed").set({
            /** data is always set but not updated --> use update and not set in line 42 */
            changed: true
        }).then(function () {
            console.log("Document successfully written!");
        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });
    }
    ngOnInit() {
    }
};
Que2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-que2',
        template: __webpack_require__(/*! raw-loader!./que2.page.html */ "./node_modules/raw-loader/index.js!./src/app/window/que2/que2.page.html"),
        styles: [__webpack_require__(/*! ./que2.page.scss */ "./src/app/window/que2/que2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Que2Page);



/***/ })

}]);
//# sourceMappingURL=que2-que2-module-es2015.js.map