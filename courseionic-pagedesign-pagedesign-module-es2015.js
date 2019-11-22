(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-pagedesign-pagedesign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/pagedesign/pagedesign.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/pagedesign/pagedesign.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Ionic-頁面設計</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-content>\n      Ionic使用Web技術開發行動應用，因此頁面設計方式同網頁設計，頁面包含網頁標籤(HTML markup)與Ionic元件標籤，初學者可以參考<a href='https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank'>Mazilla</a>中文網站使，用最短時間了解如何設定HTML標籤。了解如何設定標籤之後，接下來將說明Ionic基本頁面設計。<p></p>\n      Ionic頁面設計使用標籤標註每個元件，標註開始為<ion-text color='danger'>&lt;標註名稱&gt;</ion-text>，結束為<ion-text color='danger'>&lt;/標註名稱&gt;</ion-text>。Ionic頁面可包含三個區域擋頭(ion-header)、內容(ion-content)及註腳(ion-footer)，但至少要包含內容區域，下列程式碼可以看到檔頭包含工具列(ion-toolbar)，工具列則包含頁面標題(ion-title)，工具列中color='danger'與標題列class='ion-text-center'為標籤屬性設定，用於設定工具列顏色為紅色及標題列文字置中。<ion-text color='danger'>請注意：工具列經常置於檔頭或註腳，用於擺放標題或按鈕列。</ion-text>了解Ionic基本頁面版面後，我們將介紹常用使用者介面元件(User Interface components)，元件詳細說明可參閱<a href='https://ionicframework.com/docs/components' target='_blank'>Ionic官網</a>。\n      <ion-grid>\n        <ion-row>\n          <ion-col size='4'>\n              <ion-img src='assets/ionic/pagelayout.png'></ion-img>\n          </ion-col>\n          <ion-col>\n              <pre style='color:indigo'>\n        &lt;ion-header&gt;\n          &lt;ion-toolbar color='danger'&gt;\n            &lt;ion-title class='ion-text-center'&gt;\n              這是頁面擋頭-工具列-標題\n            &lt;/ion-title&gt;\n          &lt;/ion-toolbar&gt;\n        &lt;/ion-header&gt;      \n        &lt;ion-content&gt;\n          這是頁面內容\n        &lt;/ion-content&gt;      \n        &lt;ion-footer&gt;\n          &lt;ion-toolbar color=\"primary\"&gt;\n            這是頁面註腳\n          &lt;/ion-toolbar&gt;\n        &lt;/ion-footer&gt;\n              </pre>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n<ion-fab-button [routerLink]=\"['/uicomponents']\">\n  <ion-icon name=\"arrow-dropright\" style='font-size:2.5em;'></ion-icon>\n</ion-fab-button>\n</ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/pagedesign/pagedesign.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/courseionic/pagedesign/pagedesign.module.ts ***!
  \*************************************************************/
/*! exports provided: PagedesignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedesignPageModule", function() { return PagedesignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagedesign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagedesign.page */ "./src/app/courseionic/pagedesign/pagedesign.page.ts");







const routes = [
    {
        path: '',
        component: _pagedesign_page__WEBPACK_IMPORTED_MODULE_6__["PagedesignPage"]
    }
];
let PagedesignPageModule = class PagedesignPageModule {
};
PagedesignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pagedesign_page__WEBPACK_IMPORTED_MODULE_6__["PagedesignPage"]]
    })
], PagedesignPageModule);



/***/ }),

/***/ "./src/app/courseionic/pagedesign/pagedesign.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/courseionic/pagedesign/pagedesign.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvcGFnZWRlc2lnbi9EOlxcZ2l0aHViQ291cnNlc1xcY291cnNlaW9uaWMvc3JjXFxhcHBcXGNvdXJzZWlvbmljXFxwYWdlZGVzaWduXFxwYWdlZGVzaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvcGFnZWRlc2lnbi9wYWdlZGVzaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlaW9uaWMvcGFnZWRlc2lnbi9wYWdlZGVzaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6MS4zZW07XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEuM2VtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/courseionic/pagedesign/pagedesign.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/courseionic/pagedesign/pagedesign.page.ts ***!
  \***********************************************************/
/*! exports provided: PagedesignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedesignPage", function() { return PagedesignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagedesignPage = class PagedesignPage {
    constructor() { }
    ngOnInit() {
    }
};
PagedesignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagedesign',
        template: __webpack_require__(/*! raw-loader!./pagedesign.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/pagedesign/pagedesign.page.html"),
        styles: [__webpack_require__(/*! ./pagedesign.page.scss */ "./src/app/courseionic/pagedesign/pagedesign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagedesignPage);



/***/ })

}]);
//# sourceMappingURL=courseionic-pagedesign-pagedesign-module-es2015.js.map