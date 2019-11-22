(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-installionic-installionic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/installionic/installionic.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/installionic/installionic.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      <ion-title>Ionic-軟體安裝</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        軟體安裝僅包含將Ionic應用顯示於瀏覽器，涵蓋安裝node.js，安裝完node.js，Windows請開啟Window Powershell視窗，Mac請開啟terminal。\n        <ul>\n          <li>Windows請輸入<ion-label color='danger'>npm install -g ionic</ion-label></li>\n          <li>Mac請輸入<ion-label color='danger'>sudo npm install -g ionic</ion-label></li>\n        </ul>\n        <h1 style='color:darkviolet'>第一個Project</h1>\n        Ionic利用<a href='https://ionicframework.com/docs/cli'>CLI</a>(Command Line Interface)命令來建立project、新增頁面與在瀏覽器顯示等，詳細命令請參閱連結，接下來將說明如何建立空白(blank)、側邊選單(sidemenu)與跳頁按鈕(tabs)範本專案。\n        <ul>\n            <li>空白專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 blank</ion-text>。Ionic CLI中ionic start用於建立專案，請在start之後設定專案名稱，專案名稱不可為中文、不能有空白、不能包含特殊文字、不能全數字，命令最後blank代表空白專案。由於Ionic支援多個開發框架，專案建立時，請選擇Angular最為程式框架，建立完專案後，系統會在現在位置新增一個<ion-text color='danger'>專案名稱</ion-text>的檔案夾，<ion-text color='danger'>請注意：除了建立專案ionic start命令之外，所有其他Ionic CLI命令都必須在專案目錄下執行，使用者可以利用 cd 專案名稱 來進入該專案目錄。</ion-text></li>\n            <li>側邊選單專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 sidemenu</ion-text>。命令最後sidemenu代表側邊選單專案。</li>\n            <li>跳頁選單專案範本，請在命令提示字元視窗請輸入<ion-text color='danger'>ionic start 專案名稱 tabs</ion-text>。命令最後tabs代表跳頁選單專案。</li>\n            <li><ion-text color='danger'>專案建立後，在專案目錄中輸入 ionic serve 會將專案顯示於瀏覽器。請注意ionic serve開啟一本地端伺服器來執行專案，使用者可以在命令提示字元視窗輸入 Ctrl C 來停止伺服器，但是如果使用者沒有停止伺服器，使用者對專案進行任何修改都會即時顯示於瀏覽器。</ion-text></li>\n          </ul>\n    </ion-card-content>\n  </ion-card>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button [routerLink]=\"['/ionichome']\">\n    <ion-icon name=\"arrow-dropleft\" style='font-size:2.5em;'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button [routerLink]=\"['/projstruct']\">\n    <ion-icon name=\"arrow-dropright\" style='font-size:2.5em;'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/installionic/installionic.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/courseionic/installionic/installionic.module.ts ***!
  \*****************************************************************/
/*! exports provided: InstallionicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallionicPageModule", function() { return InstallionicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installionic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installionic.page */ "./src/app/courseionic/installionic/installionic.page.ts");







const routes = [
    {
        path: '',
        component: _installionic_page__WEBPACK_IMPORTED_MODULE_6__["InstallionicPage"]
    }
];
let InstallionicPageModule = class InstallionicPageModule {
};
InstallionicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_installionic_page__WEBPACK_IMPORTED_MODULE_6__["InstallionicPage"]]
    })
], InstallionicPageModule);



/***/ }),

/***/ "./src/app/courseionic/installionic/installionic.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/courseionic/installionic/installionic.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvaW5zdGFsbGlvbmljL0Q6XFxnaXRodWJDb3Vyc2VzXFxjb3Vyc2Vpb25pYy9zcmNcXGFwcFxcY291cnNlaW9uaWNcXGluc3RhbGxpb25pY1xcaW5zdGFsbGlvbmljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvaW5zdGFsbGlvbmljL2luc3RhbGxpb25pYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZWlvbmljL2luc3RhbGxpb25pYy9pbnN0YWxsaW9uaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZToxLjNlbTtcclxufSIsImlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/courseionic/installionic/installionic.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/courseionic/installionic/installionic.page.ts ***!
  \***************************************************************/
/*! exports provided: InstallionicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallionicPage", function() { return InstallionicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InstallionicPage = class InstallionicPage {
    constructor() { }
    ngOnInit() {
    }
};
InstallionicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installionic',
        template: __webpack_require__(/*! raw-loader!./installionic.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/installionic/installionic.page.html"),
        styles: [__webpack_require__(/*! ./installionic.page.scss */ "./src/app/courseionic/installionic/installionic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InstallionicPage);



/***/ })

}]);
//# sourceMappingURL=courseionic-installionic-installionic-module-es2015.js.map