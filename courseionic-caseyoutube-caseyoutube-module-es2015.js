(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-caseyoutube-caseyoutube-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/caseyoutube/caseyoutube.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/caseyoutube/caseyoutube.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>個案-Youtube播放應用程式</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"--padding:20px\">\n  <ion-card class='ion-text-justify'>\n    <ion-card-content>\n      建立Youtube應用程式包含下列步驟\n      <ion-item>\n        <ion-text color='danger'>1. 開啟Google Youtube Data API並設定憑證</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-text color='danger'>2. Youtube Data API搜尋字串</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-text color='danger'>3. 建立Youtube播放應用頁面架構</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-text color='danger'>4. 設定並顯示搜尋結果</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-text color='danger'>5. 連結顯示結果與影片撥放</ion-text>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class='ion-text-justify'>\n      <ion-card-header color='success'>\n          開啟Google Youtube Data API並設定憑證\n      </ion-card-header>\n      <ion-card-content>\n        Google Youtube Data API設定包含8步驟<p></p>\n        1. 使用Gmail帳號登入<a href='https://console.cloud.google.com/apis' target='_blank'>Google API Console</a>，並選則建立專案。\n        <p>\n          <ion-grid>\n            <ion-row>\n              <ion-col size='6'>\n                <ion-img src='assets/ionic/youtube_1.png'></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </p>\n        2. 輸入專案名稱並設定機構與位置。\n        <p>\n          <ion-grid>\n            <ion-row>\n              <ion-col size='6'>\n                <ion-img src='assets/ionic/youtube_2.png'></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </p>\n        3. 選擇啟用API和服務。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_3.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n        4. 選擇YouTube Data Api V3。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_4.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n\n          5. 選擇啟用。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_5.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n\n          6. 點選建立憑證。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_6.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n\n          7. 使用API請選擇YouTube Data API V3，API護轎來源請選擇瀏覽器JavaScript，要求資料類型請選擇公開資料後，點選我需要那些憑證。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_7.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n\n          8. 請使用憑證搜尋YouTube Data API V3。\n          <p>\n            <ion-grid>\n              <ion-row>\n                <ion-col size='6'>\n                  <ion-img src='assets/ionic/youtube_8.png'></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </p>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-card class='ion-text-justify'>\n      <ion-card-header color='success'>\n        Youtube Data API搜尋字串\n      </ion-card-header>\n      <ion-card-content>\n        開啟瀏覽器並輸入 https://www.googleapis.com/youtube/v3/search?q=查詢關鍵字&maxResults=12&part=snippet&key=憑證 將傳回關於關鍵字影片資訊。\n        <p>\n          <ion-grid>\n            <ion-row>\n              <ion-col size='8'>\n                <ion-img src='assets/ionic/urlsearch_1.png'></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </p>\n        使用者可使用 https://www.youtube.com/watch?v=傳回videoId 來播放該影片，其中thumbnails欄位包含影片高、中與低顯示圖片。\n      </ion-card-content>\n    </ion-card>\n    <ion-card class='ion-text-justify'>\n      <ion-card-header color='success'>\n          建立Youtube播放應用頁面架構\n      </ion-card-header>\n      <ion-card-content>\n        基本版面將包含頁首搜尋關鍵字及內容搜尋清單\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/caseyoutube/caseyoutube-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/courseionic/caseyoutube/caseyoutube-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CaseyoutubePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseyoutubePageRoutingModule", function() { return CaseyoutubePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _caseyoutube_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caseyoutube.page */ "./src/app/courseionic/caseyoutube/caseyoutube.page.ts");




const routes = [
    {
        path: '',
        component: _caseyoutube_page__WEBPACK_IMPORTED_MODULE_3__["CaseyoutubePage"]
    }
];
let CaseyoutubePageRoutingModule = class CaseyoutubePageRoutingModule {
};
CaseyoutubePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CaseyoutubePageRoutingModule);



/***/ }),

/***/ "./src/app/courseionic/caseyoutube/caseyoutube.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/courseionic/caseyoutube/caseyoutube.module.ts ***!
  \***************************************************************/
/*! exports provided: CaseyoutubePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseyoutubePageModule", function() { return CaseyoutubePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _caseyoutube_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caseyoutube-routing.module */ "./src/app/courseionic/caseyoutube/caseyoutube-routing.module.ts");
/* harmony import */ var _caseyoutube_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caseyoutube.page */ "./src/app/courseionic/caseyoutube/caseyoutube.page.ts");







let CaseyoutubePageModule = class CaseyoutubePageModule {
};
CaseyoutubePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _caseyoutube_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaseyoutubePageRoutingModule"]
        ],
        declarations: [_caseyoutube_page__WEBPACK_IMPORTED_MODULE_6__["CaseyoutubePage"]]
    })
], CaseyoutubePageModule);



/***/ }),

/***/ "./src/app/courseionic/caseyoutube/caseyoutube.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/courseionic/caseyoutube/caseyoutube.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvY2FzZXlvdXR1YmUvRDpcXGdpdGh1YkNvdXJzZXNcXGNvdXJzZWlvbmljL3NyY1xcYXBwXFxjb3Vyc2Vpb25pY1xcY2FzZXlvdXR1YmVcXGNhc2V5b3V0dWJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvY2FzZXlvdXR1YmUvY2FzZXlvdXR1YmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2Vpb25pYy9jYXNleW91dHViZS9jYXNleW91dHViZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOjEuM2VtO1xyXG59IiwiaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courseionic/caseyoutube/caseyoutube.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/courseionic/caseyoutube/caseyoutube.page.ts ***!
  \*************************************************************/
/*! exports provided: CaseyoutubePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseyoutubePage", function() { return CaseyoutubePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CaseyoutubePage = class CaseyoutubePage {
    constructor() { }
    ngOnInit() {
    }
};
CaseyoutubePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-caseyoutube',
        template: __webpack_require__(/*! raw-loader!./caseyoutube.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/caseyoutube/caseyoutube.page.html"),
        styles: [__webpack_require__(/*! ./caseyoutube.page.scss */ "./src/app/courseionic/caseyoutube/caseyoutube.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CaseyoutubePage);



/***/ })

}]);
//# sourceMappingURL=courseionic-caseyoutube-caseyoutube-module-es2015.js.map