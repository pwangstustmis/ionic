(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-uilayout-uilayout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/uilayout/uilayout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/uilayout/uilayout.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      <ion-title>Ionic-版面UI元件</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-content>\n      版面元件用於擺放上一節常用UI元件，版面元件將包含ion-card(卡片)、ion-grid(格子版面)、ion-list與ion-item(清單與項目)。其他版面元件可參閱<a href='https://ionicframework.com/docs/components' target='_blank'>Ionic官網</a>。\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>ion-card(卡片)</h1>\n        卡片為一方型版面包含ion-card-header(卡片抬頭區域)與ion-card-content(卡片內容區域)，ion-card-header(卡片抬頭區域)包含ion-card-title(標題)與ion-card-subtitle(次標題)，並可設定color(顏色)屬性。ion-card-content(卡片內容區域)顯示使用者設定內容，請注意：版面可包含自己或其他版面。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-card&gt;\n          &lt;ion-card-header&gt;\n            &lt;ion-card-title&gt;南臺校景&lt;/ion-card-title&gt;\n          &lt;/ion-card-header&gt;\n          &lt;ion-card-content&gt;\n            &lt;ion-img src='assets/ionic/uilayout_1.jpg'&gt;&lt;/ion-img&gt;\n          &lt;/ion-card-content&gt;\n        &lt;/ion-card&gt;\n        </pre> 結果如下<br/>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>南臺校景</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-img src='assets/ionic/uilayout_1.jpg'></ion-img>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>ion-grid(格子版面)</h1>\n        ion-grid(格子版面)如同表格由ion-row(列)與ion-col(欄)所構成，每一列可以包含許多欄，ion-grid(格子版面)中ion-row(列)將現在螢幕寬度畫分成12等分，可藉由設定內容對齊方式align-items-start(靠上對齊)、align-items-center(置中對齊)及align-items-end(靠下對齊)。每一列使用者在ion-col(欄)，屬性size設定該欄寬度，同時可藉由offset屬性設定該欄之前要空多少寬度(1到11)，除此之外可藉由樣式class設定欄內容對齊方式ion-text-start(靠左對齊)、ion-text-center(置中對齊)及ion-text-end(靠右對齊)。。原始碼：\n          <pre style='color:indigo'>\n          &lt;ion-grid&gt;\n            &lt;ion-row&gt;\n              &lt;ion-col style='background-color: cornflowerblue;'&gt;\n                &lt;ion-label color='light'&gt;平均分割兩欄&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n              &lt;ion-col style='background-color: darkorange;'&gt;\n                &lt;ion-label color='light'&gt;平均分割兩欄&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n            &lt;/ion-row&gt;\n            &lt;ion-row&gt;\n              &lt;ion-col size='4' style='background-color: cornflowerblue;'&gt;\n                &lt;ion-label color='light'&gt;左1/3&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n              &lt;ion-col style='background-color: darkorange;'&gt;\n                &lt;ion-label color='light'&gt;右2/3&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n            &lt;/ion-row&gt;\n            &lt;ion-row&gt;\n              &lt;ion-col offset='4' style='background-color: cornflowerblue;'&gt;\n                &lt;ion-label color='light'&gt;左空1/3&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n            &lt;/ion-row&gt;\n            &lt;ion-row&gt;\n              &lt;ion-col class='ion-text-center' style='background-color: cornflowerblue;'&gt;\n                &lt;ion-label color='light'&gt;左欄置中對齊&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n              &lt;ion-col class='ion-text-right' style='background-color: darkorange;'&gt;\n                &lt;ion-label color='light'&gt;右欄靠右對齊&lt;/ion-label&gt;\n              &lt;/ion-col&gt;\n            &lt;/ion-row&gt;\n          &lt;/ion-grid&gt;\n          &lt;ion-card&gt;\n          </pre> 結果如下<br/>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>格子版面</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-grid>\n                <ion-row>\n                  <ion-col style='background-color: cornflowerblue;'>\n                    <ion-label color='light'>平均分割兩欄</ion-label>\n                  </ion-col>\n                  <ion-col style='background-color: darkorange;'>\n                      <ion-label color='light'>平均分割兩欄</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size='4' style='background-color: cornflowerblue;'>\n                    <ion-label color='light'>左1/3</ion-label>\n                  </ion-col>\n                  <ion-col style='background-color: darkorange;'>\n                      <ion-label color='light'>右2/3</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col offset='4' style='background-color: cornflowerblue;'>\n                    <ion-label color='light'>左空1/3</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class='ion-text-center' style='background-color: cornflowerblue;'>\n                    <ion-label color='light'>左欄置中對齊</ion-label>\n                  </ion-col>\n                  <ion-col class='ion-text-right' style='background-color: darkorange;'>\n                    <ion-label color='light'>右欄靠右對齊</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-content>\n            <h1 style='color:darkviolet'>ion-list與ion-item(清單與項目)</h1>\n            ion-list(清單)用於包含項目(ion-item)，清單屬性包含inset(縮排：true、false)與lines(下邊線：full、inset與none)。ion-item(項目)用於設定清單內容，包含ion-item(一般項目)、ion-item-divider(分隔項目)與ion-item-group(群組項目)。<p>\n            ion-item(項目)為項目顯示區域，屬性包含color(顏色)、detail(明細圖式：true或false)、detailIcon(明細圖式名稱)、href(連結位置)、lines(底線：full、inset與none)、routerDirection(路由方向：back、forward或root)。ion-item-divider(分隔項目)一般包含文字，用於區隔不同項目群。ion-item-group(群組項目)將許多項目群組成一個項目。原始碼：\n            <pre style='color:indigo'>\n            \n            </pre> 結果如下<br/>\n            \n          </ion-card-content>\n        </ion-card>\n      \n      \n      \n     \n      \n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/uicomponents']\">\n      <ion-icon name=\"arrow-dropleft\" style='font-size:2.5em;'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </ion-content>\n\n  \n"

/***/ }),

/***/ "./src/app/courseionic/uilayout/uilayout.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/courseionic/uilayout/uilayout.module.ts ***!
  \*********************************************************/
/*! exports provided: UilayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UilayoutPageModule", function() { return UilayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uilayout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uilayout.page */ "./src/app/courseionic/uilayout/uilayout.page.ts");







const routes = [
    {
        path: '',
        component: _uilayout_page__WEBPACK_IMPORTED_MODULE_6__["UilayoutPage"]
    }
];
let UilayoutPageModule = class UilayoutPageModule {
};
UilayoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_uilayout_page__WEBPACK_IMPORTED_MODULE_6__["UilayoutPage"]]
    })
], UilayoutPageModule);



/***/ }),

/***/ "./src/app/courseionic/uilayout/uilayout.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/courseionic/uilayout/uilayout.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvdWlsYXlvdXQvRDpcXGdpdGh1YkNvdXJzZXNcXGNvdXJzZWlvbmljL3NyY1xcYXBwXFxjb3Vyc2Vpb25pY1xcdWlsYXlvdXRcXHVpbGF5b3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvdWlsYXlvdXQvdWlsYXlvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2Vpb25pYy91aWxheW91dC91aWxheW91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOjEuM2VtO1xyXG59IiwiaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courseionic/uilayout/uilayout.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/courseionic/uilayout/uilayout.page.ts ***!
  \*******************************************************/
/*! exports provided: UilayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UilayoutPage", function() { return UilayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UilayoutPage = class UilayoutPage {
    constructor() { }
    ngOnInit() {
    }
};
UilayoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uilayout',
        template: __webpack_require__(/*! raw-loader!./uilayout.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/uilayout/uilayout.page.html"),
        styles: [__webpack_require__(/*! ./uilayout.page.scss */ "./src/app/courseionic/uilayout/uilayout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UilayoutPage);



/***/ })

}]);
//# sourceMappingURL=courseionic-uilayout-uilayout-module-es2015.js.map