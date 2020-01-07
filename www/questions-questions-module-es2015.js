(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      SleepExpert\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title> Schlaftagebuch</ion-card-title>\r\n          </ion-card-header>  \r\n    <form #form=\"ngForm\" (ngSubmit)=\"logForm(form)\">\r\n     <ion-list>\r\n      <ion-grid>\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"2.5\"><ion-avatar><img src=\"assets/img/sheep.png\"></ion-avatar></ion-col>\r\n      </ion-row>\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Guten Morgen! Ich werde Ihnen nun einige Fragen stellen, um einen neuen Tagebucheintrag zu erfassen.</ion-label></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie war die Schlafqualität? (1=sehr gut / 8=sehr schlecht)</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"9\" ><ion-range min=\"0\" max=\"8\" step=\"1\" snaps=\"true\" pin=\"true\" [(ngModel)]=\"form.a1\" name=\"a1\"></ion-range></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie ist Ihr Gefühl des Erholtseins? (1=sehr gut / 8=sehr schlecht)</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"9\" ><ion-range min=\"0\" max=\"8\" step=\"1\" snaps=\"true\" pin=\"true\" [(ngModel)]=\"form.a2\" name=\"a2\"></ion-range></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie war Ihre Müdigkeit beim Zubettgehen? (1=keine Müdigkeit / 8=starke Müdikgeit)</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"9\" ><ion-range min=\"0\" max=\"8\" step=\"1\" snaps=\"true\" pin=\"true\" [(ngModel)]=\"form.a3\" name=\"a3\"></ion-range></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wann sind Sie zu Bett gegangen?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-datetime class=\"qinput\" display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Weiter\" cancel-text=\"Abbrechen\" [(ngModel)]=\"form.a4\" name=\"a4\"></ion-datetime></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Was haben Sie noch im Bett gemacht?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"9\" ><ion-input class=\"qinput\" placeholder=\"z.B. Buch lesen, Fernseh geschaut, ..\" [(ngModel)]=\"form.a5\" name=\"a5\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wann haben Sie das Licht gelöscht?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-datetime class=\"qinput\" display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Weiter\" cancel-text=\"Abbrechen\" [(ngModel)]=\"form.a6\" name=\"a6\"></ion-datetime></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Geschätzte Einschlafdauer</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-input class=\"qinput\" type=\"number\"  placeholder=\"0:00h\" [(ngModel)]=\"form.a7\" name=\"a7\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie oft sind Sie aufgewacht?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-input class=\"qinput\" type=\"number\" placeholder=\"z.B. 2 mal\"  [(ngModel)]=\"form.a8\" name=\"a8\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie lange waren Sie dann jeweils wach?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-input class=\"qinput\" type=\"number\"  placeholder=\"0:00h\" [(ngModel)]=\"form.a9\" name=\"a9\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wann sind Sie endgültig aufgewacht?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-datetime class=\"qinput\" display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Weiter\" cancel-text=\"Abbrechen\" [(ngModel)]=\"form.a10\" name=\"a10\"></ion-datetime></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wann sind Sie morgens aufgestanden?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-datetime class=\"qinput\" display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Weiter\" cancel-text=\"Abbrechen\" [(ngModel)]=\"form.a11\" name=\"a11\"></ion-datetime></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie lange haben Sie geschlafen?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-input class=\"qinput\" type=\"number\" placeholder=\"0:00h\" [(ngModel)]=\"form.a12\" name=\"a12\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Wie lange haben Sie insgesamt im Bett gelegen?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"3\" ><ion-input class=\"qinput\" type=\"number\" placeholder=\"0:00h\" [(ngModel)]=\"form.a13\" name=\"a13\"></ion-input></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row align-items-start>\r\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">Haben Sie Schlafmittel genommen?</ion-label></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"4.5\" >\r\n          <ion-radio-group [(ngModel)]=\"form.a14a\" name=\"a14a\">\r\n            <ion-label float-right> Nein </ion-label>\r\n            <ion-radio slot=\"start\" value=false color=\"primary\" float-right></ion-radio>\r\n            <ion-label float-right> Ja </ion-label>\r\n            <ion-radio slot=\"start\" value=true color=\"primary\" float-right></ion-radio>\r\n          </ion-radio-group></ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"9\" ><ion-input class=\"qinput\" placeholder=\"z.B. Temesta\" float-right  [(ngModel)]=\"form.a14b\" name=\"a14b\"></ion-input><ion-input class=\"qinput\" type=\"number\" placeholder=\"z.B. 1\"  [(ngModel)]=\"form.a14c\" name=\"a14d\"></ion-input>\r\n          <ion-select class=\"qinput\" placeholder=\"Dosierung\" cancelText=\"Abbrechen\" okText=\"Weiter\"  [(ngModel)]=\"form.a14d\" name=\"a14d\">\r\n          <ion-select-option value=\"stk\">Stück</ion-select-option>\r\n          <ion-select-option value=\"mg\">mg</ion-select-option>\r\n          <ion-select-option value=\"ml\">ml</ion-select-option>\r\n        </ion-select></ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row justify-content-end>\r\n        <ion-col size=\"4\" ><button ion-button type=\"submit\" block>Speichern</button>\r\n          <!-- <ion-button expand=\"block\" (click)=\"onSubmit()\">Speichern<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>--></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </ion-list>\r\n    </form>\r\n  </ion-card>\r\n\r\n\r\n  <!-- <ion-item *ngFor=\"let x of qlist; let i = index\">\r\n        <ion-label>\r\n          \r\n        <h2> {{x.quest}} </h2>\r\n        <div *ngIf=\"x.answertype == '1'\"><ion-range min=\"0\" max=\"8\" step=\"1\" snaps=\"true\" pin=\"true\"></ion-range></div>\r\n        <div *ngIf=\"x.answertype == '2'\"><ion-datetime display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Fertig\" cancel-text=\"Abbrechen\"></ion-datetime></div>\r\n        <div *ngIf=\"x.answertype == '3'\"><ion-datetime display-format=\"h.mm\" picker-format=\"h.mm\" hourValues=\"0,1,2,3,4,5,6\" minuteValues=\"0,15,30,45\" placeholder=\"0.00\"  done-text=\"Fertig\" cancel-text=\"Abbrechen\"></ion-datetime></div>\r\n        <div *ngIf=\"x.answertype == '4'\"><ion-input placeholder=\"z.B. Buch lesen, Fernseh geschaut, ..\"></ion-input></div>\r\n        <div *ngIf=\"x.answertype == '5'\"><ion-input type=\"number\" placeholder=\"z.B. 2\"></ion-input>mal</div>\r\n        <div *ngIf=\"x.answertype == '6'\"><ion-button>Nein</ion-button><ion-button>Ja</ion-button></div>\r\n        <ion-button expand=\"block\" disabled={{x.nextbtn}}>Weiter<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n        </ion-label>\r\n        </ion-item>\r\n     -->\r\n<!--\r\n     <ion-item>\r\n       <ion-label>\r\n         <h2>{{qlist[x].quest}}</h2>\r\n         <div *ngIf=\"qlist[x].answertype == '1'\"><ion-range min=\"0\" max=\"8\" step=\"1\" snaps=\"true\" pin=\"true\"></ion-range></div>\r\n        <div *ngIf=\"qlist[x].answertype == '2'\"><ion-datetime display-format=\"HH:mm\" picker-format=\"HH:mm\" done-text=\"Fertig\" cancel-text=\"Abbrechen\"></ion-datetime></div>\r\n        <div *ngIf=\"qlist[x].answertype == '3'\"><ion-datetime display-format=\"h.mm\" picker-format=\"h.mm\" hourValues=\"0,1,2,3,4,5,6\" minuteValues=\"0,15,30,45\" placeholder=\"0.00\"  done-text=\"Fertig\" cancel-text=\"Abbrechen\"></ion-datetime></div>\r\n        <div *ngIf=\"qlist[x].answertype == '4'\"><ion-input placeholder=\"z.B. Buch lesen, Fernseh geschaut, ..\"></ion-input></div>\r\n        <div *ngIf=\"qlist[x].answertype == '5'\"><ion-input type=\"number\" placeholder=\"z.B. 2\"></ion-input>mal</div>\r\n        <div *ngIf=\"qlist[x].answertype == '6'\"><ion-button>Nein</ion-button><ion-button>Ja</ion-button></div>\r\n        <ion-button expand=\"block\" disabled={{qlist[x].nextbtn}} (click)=btnBack(x)> Zurück<ion-icon name=\"arrow-backward\"></ion-icon></ion-button>\r\n        <ion-button expand=\"block\" disabled={{qlist[x].nextbtn}} (click)=btnForward(x)> Weiter<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n        </ion-label\r\n        ></ion-item>\r\n\r\n       -->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/questions/questions-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageRoutingModule", function() { return QuestionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.page */ "./src/app/questions/questions.page.ts");




const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_3__["QuestionsPage"]
    }
];
let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {
};
QuestionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionsPageRoutingModule);



/***/ }),

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/questions/questions-routing.module.ts");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions.page */ "./src/app/questions/questions.page.ts");







let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionsPageRoutingModule"]
        ],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]]
    })
], QuestionsPageModule);



/***/ }),

/***/ "./src/app/questions/questions.page.scss":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qinput {\n  border: solid .6px grey;\n  border-radius: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL0M6XFxVc2Vyc1xcRWxseTIxNzhcXERvd25sb2Fkc1xcTWVkSW5mb1xcSW5cXFNlbWVzdHJ1bCA5XFxLbGluaWNhbCBhcHBzIGZvciB0YWJsZXRzXFxiZmhfaW9uaWNfc2NoTGFmL3NyY1xcYXBwXFxxdWVzdGlvbnNcXHF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx1QkFBdUI7RUFDdkIsa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xaW5wdXQge1xyXG5ib3JkZXI6IHNvbGlkIC42cHggZ3JleTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.page.ts":
/*!*********************************************!*\
  !*** ./src/app/questions/questions.page.ts ***!
  \*********************************************/
/*! exports provided: QuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuestionsPage = class QuestionsPage {
    constructor(firestore, router) {
        this.firestore = firestore;
        this.router = router;
        this.now = new Date();
    }
    ngOnInit() {
    }
    logForm(form) {
        return new Promise((resolve, reject) => {
            this.firestore
                .collection("protocol")
                .add({ q1: form.a1, q2: form.a2,
                q3: form.a3, q4: form.a4,
                q5: form.a5, q6: form.a6,
                q7: form.a7, q8: form.a8, q9: form.a9,
                q10: form.a10, q11: form.a11, q12: form.a12,
                q13: form.a13, q14a: form.a14a, q14b: form.a14b,
                q14c: form.a14c, q14d: form.a14d,
                user: 'dummy', time: this.now })
                .then(res => { this.router.navigateByUrl('/protocol'); }, err => reject(err));
        });
    }
};
QuestionsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuestionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.page.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.page.html"),
        styles: [__webpack_require__(/*! ./questions.page.scss */ "./src/app/questions/questions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], QuestionsPage);



/***/ })

}]);
//# sourceMappingURL=questions-questions-module-es2015.js.map