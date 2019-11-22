(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/home/home.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Ionic</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"--padding:20px\">\n  <ion-card class='ion-text-justify'>\n    <ion-card-content>\n      行動程式設計主要分為原生(native)與混合式(hybrid)模式。原生模式是指應用程式使用特定平台語言進行開發如Android使用Java，iOS使用Objective C或Swift。原生模式具高效能、高使用者經驗與使用最新平台功能等優勢，但是也具單一平台、高開發成本與開發時程長等缺點。相對於原生模式，混合式框架(Hybrid Framework)一般使用網頁(Web)技術，將網頁封裝成Web View顯示於手機或平板，由於混合式框架使用Web技術，因此它具跨平台、低開發成本與較短開發時程等優勢，但是它也具低效能、較差使用者經驗與無法使用最新功能等缺點。雖然混合式框架具上述限制，但對跨領域同學，它是最容易進入行動程式設計的框架。<p></p>\n      網路上以許多開源混合式框架，課程選擇<a href='https://ionicframework.com/' target='_blank'>Ionic</a>(https://ionicframework.com/)是因為Ionic不僅僅在混合式框架名列前茅，同時Ionic應用涵蓋行動應用與漸進式網頁應用(Progressive Web Application,PWA)。接下來將介紹如何安裝Ionic，並說明如何將Ionic應用程式執行於瀏覽器，而將Ionic應用程式發布於手機或平板，將在後續課程介紹。\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/installionic']\">\n      <ion-icon name=\"arrow-dropright\" style='font-size:2.5em;'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/home/home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/courseionic/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/courseionic/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/courseionic/home/home.page.scss":
/*!*************************************************!*\
  !*** ./src/app/courseionic/home/home.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvaG9tZS9EOlxcZ2l0aHViQ291cnNlc1xcY291cnNlaW9uaWMvc3JjXFxhcHBcXGNvdXJzZWlvbmljXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlaW9uaWMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6MS4zZW07XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEuM2VtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/courseionic/home/home.page.ts":
/*!***********************************************!*\
  !*** ./src/app/courseionic/home/home.page.ts ***!
  \***********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/courseionic/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=courseionic-home-home-module-es2015.js.map