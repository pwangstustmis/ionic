(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courseionic-uicomponents-uicomponents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courseionic/uicomponents/uicomponents.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courseionic/uicomponents/uicomponents.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Ionic-常用UI元件</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n    本單元包含常用UI元件：徽章(ion-badge)、按鈕(ion-button)、核取方塊(ion-checkbox)、碎片(chip)、浮動動作按鈕(ion-fab)、圖示(ion-icon)、文字方塊(ion-input)、文字區域(ion-textarea)、圓形圖片(ion-avatar)、圖片(ion-img)、方形圖片(ion-thumbnail)、選項按鈕(ion-radio)、範圍選取(ion-range)、下拉式方塊(ion-select)，其他元件可參閱<a href='https://ionicframework.com/docs/components' target='_blank'>Ionic官網</a>。\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <h1 style='color:darkviolet'>徽章(ion-badge)</h1>\n      經常用於顯示數字，例如Line或簡訊顯示未讀訊息數。原始碼：\n       <pre style='color:indigo'>&lt;ion-badge color='success'&gt;80&lt;/ion-badge&gt;</pre> 結果如下<br/>\n      <ion-badge color='success'>80</ion-badge>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>按鈕(ion-button)</h1>\n        按鈕包含顏色(color)、擴展(expand)、填滿(fill)與大小(size)屬性。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。擴展包含block與full。填滿包含clear、outline與solid。大小包含small、default與large。按鈕經常會結合圖示或圖片，這些會在後續元件進行說明。原始碼：\n  <pre style='color:indigo'>\n  &lt;ion-button&gt;預設按鈕&lt;/ion-button&gt;\n  &lt;ion-button color='success'&gt;綠色按鈕&lt;/ion-button&gt;\n  &lt;ion-button color='success' expand='block'&gt;綠色擴展block按鈕&lt;/ion-button&gt;\n  &lt;ion-button color='success' fill='outline'&gt;綠色空心按鈕&lt;/ion-button&gt;\n  &lt;ion-button color='success' fill='outline' size='large'&gt;綠色空心大按鈕&lt;/ion-button&gt;\n  </pre> 結果如下<br/>\n        <ion-button>預設按鈕</ion-button>\n        <ion-button color='success'>綠色按鈕</ion-button>\n        <ion-button color='success' expand='block'>綠色擴展block按鈕</ion-button>\n        <ion-button color='success' fill='outline'>綠色空心按鈕</ion-button>\n        <ion-button color='success' fill='outline' size='large'>綠色空心大按鈕</ion-button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>核取方塊(ion-checkbox)</h1>\n        核取方塊包含顏色(color)、核取(checked)、無功能(disabled)與值(value)屬性。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。核取為布林值true或false，如果checked為true代表勾選。disabled為布林值true或false，代表核取方塊是否可使用。值用與程式結合，設定勾選時的核取方塊值。原始碼：\n      <pre style='color:indigo'>\n      &lt;ion-checkbox&gt;&lt;/ion-checkbox&gt;預設核取方塊\n      &lt;ion-checkbox color='success'&gt;&lt;/ion-checkbox&gt;綠色核取方塊\n      &lt;ion-checkbox color='success' checked='true'&gt;&lt;/ion-checkbox&gt;已經核取綠色核取方塊\n      &lt;ion-checkbox color='success' disabled='true'&gt;&lt;/ion-checkbox&gt;無法核取綠色核取方塊\n      </pre> 結果如下<br/>\n        <ion-checkbox></ion-checkbox>預設核取方塊\n        <ion-checkbox color='success'></ion-checkbox>綠色核取方塊\n        <ion-checkbox color='success' checked='true'></ion-checkbox>已經核取綠色核取方塊 \n        <ion-checkbox color='success' disabled='true'></ion-checkbox>無法核取綠色核取方塊 \n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>碎片(ion-chip)</h1>\n        碎片唯一橢圓形點選區域，經常用於包含文字、圖示等，屬性包含顏色(color)與框線(outline)。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。框線為布林值true或false，如果為true代表空心框線。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-chip&gt;預設碎片&lt;/ion-chip&gt;\n        &lt;ion-chip color='success'&gt;綠色碎片&lt;/ion-chipx&gt;\n        &lt;ion-chip color='success' outline='true'&gt;綠色空心框線碎片&lt;/ion-chip&gt;\n        </pre> 結果如下<br/>\n          <ion-chip>預設碎片</ion-chip>\n          <ion-chip color='success'>綠色碎片</ion-chip>\n          <ion-chip color='success' outline='true'>綠色空心框線碎片</ion-chip> \n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>浮動動作按鈕(ion-fab)</h1>\n        浮動動作按鈕(ion-fab)為放置浮動按鈕(ion-fab-button)容器，屬性包含垂直位置(vertical)、水平位置(horizontal)與位置(slot)。垂直位置包含top、center與bottom。水平位置包含start、center與end，位置為fixed設定固定。原始碼：\n          <pre style='color:indigo'>\n          &lt;ion-fab vertical='bottom' horizontal='start' slot='fixed'&gt;\n            &lt;ion-fab-button&gt;\n              &lt;ion-icon name='add'&gt;&lt;/ion-icon&gt;\n            &lt;/ion-fab-button&gt;\n          &lt;ion-fab&gt;\n          </pre>\n          浮動動作按鈕另一個控制項為浮動按鈕群組(ion-fab-list)，首先在浮動動作按鈕(ion-fab)宣告一個浮動按鈕(ion-fab-button)作為群組按鈕的開關，之後藉由浮動按鈕群組(ion-fab-list)包含多個浮動按鈕，浮動按鈕群組(ion-fab-list)包含彈出方向屬性(side)，可設為top、bottom、start與end，方向分別為上、下、左與右。由於課程講義已經包含浮動動作按鈕，在這裡僅顯示原始碼。\n          <pre style='color:indigo'>\n          &lt;ion-fab vertical='bottom' horizontal='end' slot='fixed'&gt;\n            &lt;ion-fab-button&gt;\n              分享\n            &lt;/ion-fab-button&gt;\n            &lt;ion-fab-list side='top'&gt;\n              &lt;ion-fab-button&gt;Facebook&lt;/ion-fab-button&gt;\n              &lt;ion-fab-button&gt;Twitter&lt;/ion-fab-button&gt;\n            &lt;/ion-fab-list&gt;\n          &lt;/ion-fab&gt;\n          </pre>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>圖示(ion-icon)</h1>\n        Ionic提供許多開源預設圖示，請參閱<a href='https://ionicons.com/' target='_blank'>圖示官網</a>。圖示屬性包含顏色(color)、名稱(name)與大小(size)。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。名稱屬性為該圖示名稱。大小包含small、default與large，如需更大的圖示，請使用CSS樣式中font-size來設定。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-icon name='logo-facebook'&gt;&lt;/ion-icon&gt;\n        &lt;ion-icon name='logo-facebook' color='primary' size='large'&gt;&lt;/ion-icon&gt;\n        &lt;ion-icon name='logo-facebook' color='primary' style='font-size:36pt;'&gt;&lt;/ion-icon&gt;\n        </pre> 結果如下<br/>\n        <ion-icon name='logo-facebook'></ion-icon>\n        <ion-icon name='logo-facebook' color='primary' size='large'></ion-icon>\n        <ion-icon name='logo-facebook' color='primary' style='font-size:36pt;'></ion-icon><p></p>\n        按鈕也可以結合圖示來製作純圖示按鈕或圖示與文字按鈕。製作圖示與文字按鈕，可在圖示中加入slot屬性，屬性值為start或end，用語設定圖示位置在左或在右。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-button&gt;  \n          &lt;ion-icon name='logo-facebook'&gt;&lt;/ion-icon&gt;\n        &lt;/ion-button&gt;\n        &lt;ion-button&gt;  \n          &lt;ion-icon name='logo-facebook' slot='start'&gt;&lt;/ion-icon&gt;\n          Facebook\n        &lt;/ion-button&gt;\n        &lt;ion-button&gt;  \n          &lt;ion-icon name='logo-facebook' slot='end'&gt;&lt;/ion-icon&gt;\n          Facebook\n        &lt;/ion-button&gt;\n        </pre> 結果如下<br/>\n        <ion-button>\n          <ion-icon name='logo-facebook'></ion-icon>\n        </ion-button>\n        <ion-button>\n        <ion-icon name='logo-facebook' slot='start'></ion-icon>\n          Facebook\n        </ion-button>\n        <ion-button>\n          <ion-icon name='logo-facebook' slot='end'></ion-icon>\n          Facebook\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>文字方塊(ion-input)</h1>\n        文字方塊用於進行文字輸入，一般會與程式做結合，在這裡僅介紹常用屬性，詳細屬性請參閱<a href='https://ionicframework.com/docs/api/input' target='_blank'>官網文字方塊</a>。文字方塊包含自動大寫(autocapitalize)、自動完成(autocomplete)、自動修正(autocorrect)、清除按鈕(clearInput)、顏色(color)、輸入模式(inputmode)、指示文字(placeholder)、必須輸入(required)、拼字檢查(spellcheck)、類型(type)與值(value)。<p></p>\n        自動大寫包含on、off，用於設定是否開啟英文自動大寫。自動完成包含on、off，用於設定是否讓瀏覽器自動完成輸入自。自動修正包含on、off，用於設定是否開啟自動修正。清除按鈕為布林值true、false，用以設定是否在文字方塊後顯示清除按鈕。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。輸入模式包含text、tel、url、email、numeric、decimal與search，其目的是限定輸入選擇，例如設定為numeric時，就只會出現數字鍵盤。指示文字用於設定預先擺置的指示文字，當使用者輸入時，該文字會消失。必須輸入為布林值true、false，用於設定該文字欄位為必須輸入。拼字檢查為布林值true、false，用於設定是否開啟拼字檢查。類型包含date、email、numbr、password、search、tel、text、time與url，用於設定輸入類型，常用為text與password。值用於設定文字方塊輸入值，一般為程式變數。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-input type='text' color='primary' placeholder='帳號' clearInput='true'&gt;&lt;/ion-input&gt;\n        </pre> 結果如下<br/>\n        <ion-item>\n          <ion-input type='text' color='primary' placeholder='帳號' clearInput='true'></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>圓形圖片(ion-avatar)</h1>\n        圓形圖片常用於碎片或清單，標籤內包含圖片。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-avatar&gt;\n          &lt;ion-img src='圖片位置與名稱'&gt;&lt;/ion-img&gt;\n        &lt;/ion-avatar&gt;\n        </pre> 結果如下<br/>\n        <ion-avatar>\n          <ion-img src='assets/ionic/avatar-demo.png'></ion-img>\n        </ion-avatar>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>圖片(ion-img)</h1>\n        圖片包含src屬性用於設定圖片位置，圖片位置可以是本地或是遠端，遠端圖片一定要設定http://位置，本地端圖片一定要放在assets檔案夾。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-img src='圖片位置與名稱'&gt;&lt;/ion-img&gt;\n        </pre> 結果如下<br/>\n        <ion-img src='assets/ionic/avatar-demo.png'></ion-img>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>方形圖片(ion-thumbnail)</h1>\n        方形圖片常用於清單，標籤內包含圖片。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-thumbnail&gt;\n          &lt;ion-img src='圖片位置與名稱'&gt;&lt;/ion-img&gt;\n        &lt;/ion-thumbnail&gt;\n        </pre> 結果如下<br/>\n        <ion-thumbnail>\n          <ion-img src='assets/ionic/avatar-demo.png'></ion-img>\n        </ion-thumbnail>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>選項按鈕(ion-radio)</h1>\n        選項按鈕包含兩個標籤選項按鈕群組(ion-radio-group)與選項按鈕(ion-radio)，選項按鈕群組包含數個選項按進行單選選擇，選項按鈕屬性包含checked、color、value等，屬性checked為布林值true、false，用以設定是否選取。顏色包含primary、secondary、tertiary、success、warning、danger、light、medium與dark。value用於設定選到後要儲存值。用於清單項目(ion-item)中，可加入slot值為start或end來設定核取方塊位置。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-radio-group&gt;\n          &lt;ion-item&gt;\n            &lt;ion-label&gt;女&lt;/ion-label&gt;\n            &lt;ion-radio slot='end' value='female'&gt;&lt;/ion-radio&gt;\n          &lt;/ion-item&gt;\n          &lt;ion-item&gt;\n            &lt;ion-label&gt;男&lt;/ion-label&gt;\n            &lt;ion-radio slot='end' value='male'&gt;&lt;/ion-radio&gt;\n          &lt;/ion-item&gt;\n        &lt;/ion-radio-group&gt;\n        </pre> 結果如下<br/>\n        <ion-radio-group>\n          <ion-item>\n            <ion-label>女</ion-label>\n            <ion-radio slot='end' value='female'></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>男</ion-label>\n            <ion-radio slot='end' value='male'></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>範圍(ion-range)</h1>\n        範圍按鈕屬性包含color(顏色)、dual-knobs(雙選擇鈕)、max(最大值)、min(最小值)、pin(指示針)、snaps(吸附)、step(間距值)、ticks(間距符號)、value(選擇值)。範圍前後文字或圖示，可搭配slot值為start或end來指定標示開始或最後位置，但是標示標籤必須至於ion-range標籤內。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-item&gt;\n          &lt;ion-range color='primary' pin='true'>&lt;/ion-range>\n        &lt;/ion-item&gt;\n        &lt;ion-item&gt;\n          &lt;ion-range color='primary' pin='true' dual-knobs='true'&gt;&lt;/ion-range&gt;\n        &lt;/ion-item&gt;\n        &lt;ion-item&gt;\n          &lt;ion-range color='primary' pin='true' dual-knobs='true' min='0' max='100'&gt;&lt;/ion-range&gt;\n        &lt;/ion-item&gt;\n        &lt;ion-item&gt;\n          &lt;ion-range color='primary' pin='true' min='0' max='100' snaps='true' ticks='true' step='5'&gt;\n            &lt;ion-label slot='start'&gt;0&lt;/ion-label&gt;\n            &lt;ion-label slot='end'&gt;100&lt;/ion-label&gt;\n          &lt;/ion-range&gt;\n        &lt;/ion-item&gt;\n        </pre> 結果如下<br/>\n        <ion-item>\n          <ion-range color='primary' pin='true'></ion-range>\n        </ion-item>\n        <ion-item>\n          <ion-range color='primary' pin='true' dual-knobs='true'></ion-range>\n        </ion-item>\n        <ion-item>\n          <ion-range color='primary' pin='true' dual-knobs='true' min='0' max='100'></ion-range>\n        </ion-item>\n        <ion-item>\n          <ion-range color='primary' pin='true' min='0' max='100' snaps='true' ticks='true' step='5'>\n              <ion-label slot='start'>0</ion-label>\n              <ion-label slot='end'>100</ion-label>\n          </ion-range>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <h1 style='color:darkviolet'>下拉式方塊(ion-select)</h1>\n        下拉式方塊(ion-select)搭配下拉式選項(ion-select-option)，下拉式方塊(ion-select)屬性包含cancelText(取消按鈕文字)、multiple(是否多選)、okText(確定按鈕文字)，下拉式選項(ion-select-option)屬性包含selected(預先選取)、value(選項值)。原始碼：\n        <pre style='color:indigo'>\n        &lt;ion-item&gt;\n          &lt;ion-label&gt;學歷&lt;/ion-label&gt;\n          &lt;ion-select okText='確定' cancelText='取消'&gt;\n            &lt;ion-select-option value='1'&gt;專科以下&lt;/ion-select-option&gt;\n            &lt;ion-select-option value='2'&gt;大專&lt;/ion-select-option&gt;\n            &lt;ion-select-option value='3'&gt;研究所以上&lt;/ion-select-option&gt;\n          &lt;/ion-select&gt;\n        &lt;/ion-item&gt;    \n        </pre> 結果如下<br/>\n        <ion-item>\n            <ion-label>學歷</ion-label>\n            <ion-select okText='確定' cancelText='取消'>\n              <ion-select-option value='1'>專科以下</ion-select-option>\n              <ion-select-option value='2'>大專</ion-select-option>\n              <ion-select-option value='3'>研究所以上</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card-content>\n    </ion-card>\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button [routerLink]=\"['/pagedesign']\">\n    <ion-icon name=\"arrow-dropleft\" style='font-size:2.5em;'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n<ion-fab-button [routerLink]=\"['/uilayout']\">\n  <ion-icon name=\"arrow-dropright\" style='font-size:2.5em;'></ion-icon>\n</ion-fab-button>\n</ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/courseionic/uicomponents/uicomponents.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/courseionic/uicomponents/uicomponents.module.ts ***!
  \*****************************************************************/
/*! exports provided: UicomponentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UicomponentsPageModule", function() { return UicomponentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uicomponents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uicomponents.page */ "./src/app/courseionic/uicomponents/uicomponents.page.ts");







var routes = [
    {
        path: '',
        component: _uicomponents_page__WEBPACK_IMPORTED_MODULE_6__["UicomponentsPage"]
    }
];
var UicomponentsPageModule = /** @class */ (function () {
    function UicomponentsPageModule() {
    }
    UicomponentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_uicomponents_page__WEBPACK_IMPORTED_MODULE_6__["UicomponentsPage"]]
        })
    ], UicomponentsPageModule);
    return UicomponentsPageModule;
}());



/***/ }),

/***/ "./src/app/courseionic/uicomponents/uicomponents.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/courseionic/uicomponents/uicomponents.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none;\n}\n\nion-card-content {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlaW9uaWMvdWljb21wb25lbnRzL0Q6XFxnaXRodWJDb3Vyc2VzXFxjb3Vyc2Vpb25pYy9zcmNcXGFwcFxcY291cnNlaW9uaWNcXHVpY29tcG9uZW50c1xcdWljb21wb25lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cnNlaW9uaWMvdWljb21wb25lbnRzL3VpY29tcG9uZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZWlvbmljL3VpY29tcG9uZW50cy91aWNvbXBvbmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZToxLjNlbTtcclxufSIsImlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/courseionic/uicomponents/uicomponents.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/courseionic/uicomponents/uicomponents.page.ts ***!
  \***************************************************************/
/*! exports provided: UicomponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UicomponentsPage", function() { return UicomponentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UicomponentsPage = /** @class */ (function () {
    function UicomponentsPage() {
    }
    UicomponentsPage.prototype.ngOnInit = function () {
    };
    UicomponentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uicomponents',
            template: __webpack_require__(/*! raw-loader!./uicomponents.page.html */ "./node_modules/raw-loader/index.js!./src/app/courseionic/uicomponents/uicomponents.page.html"),
            styles: [__webpack_require__(/*! ./uicomponents.page.scss */ "./src/app/courseionic/uicomponents/uicomponents.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UicomponentsPage);
    return UicomponentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=courseionic-uicomponents-uicomponents-module-es5.js.map