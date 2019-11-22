(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-projstruct-projstruct-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/projstruct/projstruct.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/projstruct/projstruct.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      <ion-title>Ionic-專案架構</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        要利用Ionic開發行動應用專案，首先要了解專案架構，本單元以空白專案架構為例，空白專案與其它專案的差異在於頁面個數，空白專案僅有一頁，而其他專案則包含多頁。<p></p>\n        <ion-grid>\n          <ion-row>\n            <ion-col size='3'>\n              <ion-img src='assets/ionic/projstruct_1.jpg' style='width:266px;height:420px;'></ion-img>\n            </ion-col>\n            <ion-col>\n              project中與使用者最息息相關的為src中app目錄，app目錄包含根模組(app.module.ts)、根元件(app.component.ts)、路由元件(app-routing.module.ts)、首頁目錄(home)與外部資源目錄(assets)，根模組(app.module.ts)用於宣告模組包含元件、匯入模組所需元件、提供服務給其他模組，根元件(app.component.ts)用於設定app程式起始動作，路由元件(app-routing.module.ts)用於設定app路由(跳頁)設定，初學者無須設定根模組、根元件、路由元件，我們會於後續課程進行說明。對初學者而言，最息息相關為頁面目錄與外部資源目錄。<p></p>\n              頁面目錄用於儲放每個頁面檔案，每個頁面至少包含3個檔案，以主頁面home為例，它包含頁面檔案home.page.html，頁面樣式home.page.scss與頁面資料與控制程式home.page.ts，當使用者設計靜態行動應用，使用者僅需使用頁面檔案home.page.html，如要擴展靜態應用至動態應用，則需設定home.page.ts加入程式互動。assets用於儲存應用程式中所需外部資源如圖片、影片或聲音等。\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <ul>\n          <li>Windows請輸入<ion-label color='danger'>npm install -g ionic</ion-label></li>\n          <li>Mac請輸入<ion-label color='danger'>sudo npm install -g ionic</ion-label></li>\n        </ul>\n        <h1 style='color:darkviolet'>第一個Project</h1>\n        Ionic利用<a href='https://ionicframework.com/docs/cli'>CLI</a>(Command Line Interface)命令來建立project、新增頁面與在瀏覽器顯示等，詳細命令請參閱連結，接下來將說明如何建立空白(blank)、側邊選單(sidemenu)與跳頁按鈕(tabs)範本專案。\n        <ul>\n            <li>空白專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 blank</ion-text>。Ionic CLI中ionic start用於建立專案，請在start之後設定專案名稱，專案名稱不可為中文、不能有空白、不能包含特殊文字、不能全數字，命令最後blank代表空白專案。由於Ionic支援多個開發框架，專案建立時，請選擇Angular最為程式框架，建立完專案後，系統會在現在位置新增一個<ion-text color='danger'>專案名稱</ion-text>的檔案夾，<ion-text color='danger'>請注意：除了建立專案ionic start命令之外，所有其他Ionic CLI命令都必須在專案目錄下執行，使用者可以利用 cd 專案名稱 來進入該專案目錄。</ion-text></li>\n            <li>側邊選單專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 sidemenu</ion-text>。命令最後sidemenu代表側邊選單專案。</li>\n            <li>跳頁選單專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 tabs</ion-text>。命令最後tabs代表跳頁選單專案。</li>\n            <li><ion-text color='danger'>專案建立後，在專案目錄中輸入 ionic serve 會將專案顯示於瀏覽器。請注意ionic serve開啟一本地端伺服器來執行專案，使用者可以在命令提示字元視窗輸入 Ctrl C 來停止伺服器，但是如果使用者沒有停止伺服器，使用者對專案進行任何修改都會即時顯示於瀏覽器。</ion-text></li>\n          </ul>\n    </ion-card-content>\n  </ion-card>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button [routerLink]=\"['/installionic']\">\n    <ion-icon name=\"arrow-dropleft\" style='font-size:2.5em;'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/projstruct/projstruct.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/courseionic/projstruct/projstruct.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjstructPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjstructPageModule", function() { return ProjstructPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projstruct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projstruct.page */ "./src/app/courseionic/projstruct/projstruct.page.ts");







const routes = [
    {
        path: '',
        component: _projstruct_page__WEBPACK_IMPORTED_MODULE_6__["ProjstructPage"]
    }
];
let ProjstructPageModule = class ProjstructPageModule {
};
ProjstructPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_projstruct_page__WEBPACK_IMPORTED_MODULE_6__["ProjstructPage"]]
    })
], ProjstructPageModule);



/***/ }),

/***/ "./src/app/courseionic/projstruct/projstruct.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/courseionic/projstruct/projstruct.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvcHJvanN0cnVjdC9EOlxcZ2l0aHViQ291cnNlc1xcY291cnNlaW9uaWMvc3JjXFxhcHBcXGNvdXJzZWlvbmljXFxwcm9qc3RydWN0XFxwcm9qc3RydWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvcHJvanN0cnVjdC9wcm9qc3RydWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlaW9uaWMvcHJvanN0cnVjdC9wcm9qc3RydWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6MS4zZW07XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEuM2VtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/courseionic/projstruct/projstruct.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/courseionic/projstruct/projstruct.page.ts ***!
  \***********************************************************/
/*! exports provided: ProjstructPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjstructPage", function() { return ProjstructPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjstructPage = class ProjstructPage {
    constructor() { }
    ngOnInit() {
    }
};
ProjstructPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projstruct',
        template: __webpack_require__(/*! raw-loader!./projstruct.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/projstruct/projstruct.page.html"),
        styles: [__webpack_require__(/*! ./projstruct.page.scss */ "./src/app/courseionic/projstruct/projstruct.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjstructPage);



/***/ })

}]);
//# sourceMappingURL=courseionic-projstruct-projstruct-module-es2015.js.map