(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-entries/add-entries.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-entries/add-entries.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<table>\n<tr>\n    <td>entry type </td>\n <td>   \n<div>\n<select name=\"my-select\" (change)=\"selectChange($event)\">\n    <option [value]=\"0\" >\n        select....\n    </option>\n    <option [value]=\"1\" >\n        text\n    </option>\n    <option [value]=\"2\" >\n        image\n    </option>\n</select>\n</div>\n</td></tr>\n<tr><td>\n<div *ngIf=\"isText\">\n    enter text for entries\n</div>\n</td>\n<td>\n    <div *ngIf=\"isText\">\n      <input type=\"textArea\" name=\"feedback\" [(ngModel)]=\"userEntries.feedback\"/>\n    </div>\n    </td>\n</tr><tr>\n    <td>\n<div *ngIf=\"isImage\">\n    upload file\n\n</div>\n</td>\n<td>\n    <div *ngIf=\"isImage\">\n      \n    <input type=\"file\" (change)=\"selectFile($event)\"/>\n    <input type=\"hidden\" name=\"imgurl\" [(ngModel)]=\"userEntries.imgurl\"/>\n    </div>\n    </td>\n    </tr>\n</table>\n<div>\n<input type=\"button\" value=\"add entries\"(click)=save()/>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit works!</p>\n\n<div>\n    <table>\n    <tr>\n        <td>entry type </td>\n     <td>   \n    <div>\n    <select name=\"my-select\" (change)=\"selectChange($event)\">\n        <option [value]=\"0\" >\n            select....\n        </option>\n        <option [value]=\"1\" >\n            text\n        </option>\n        <option [value]=\"2\" >\n            image\n        </option>\n    </select>\n    </div>\n    </td></tr>\n    <tr><td>\n    <div *ngIf=\"isText\">\n        enter text for entries\n    </div>\n    </td>\n    <td>\n        <div *ngIf=\"isText\">\n          <input type=\"textArea\" name=\"feedback\" [(ngModel)]=\"usersEntriesEdit.feedback\"/>\n        </div>\n        </td>\n    </tr><tr>\n        <td>\n    <div *ngIf=\"isImage\">\n        upload file\n    \n    </div>\n    </td>\n    <td>\n        <div *ngIf=\"isImage\">\n          \n        <input type=\"file\"/>\n        <input type=\"hidden\" name=\"imgurl\" [(ngModel)]=\"usersEntriesEdit.imgurl\"/>\n        </div>\n        </td>\n        </tr>\n    </table>\n    <div>\n    <input type=\"button\" value=\"update entries\"(click)=save()/>\n    </div>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Guest Book App</p>\n\n<router-outlet></router-outlet>\n\n<p>\"\"</p>\n\n<!--\n<app-register-guest></app-register-guest>\n<app-login-guest></app-login-guest>\n<app-add-entries></app-add-entries>\n<app-view-entries></app-view-entries>\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-guest/login-guest.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-guest/login-guest.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\"  (ngSubmit)=\"onSubmit(f1)\" ngNativeValidate>\n<div class=\"mb-3 row\">\n    <label for=\"userName\" class=\"col-sm-2 col-form-label\">username</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"userName\" value=\"\" name=\"login.name\" [(ngModel)]=\"login.name\">\n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userPassword\" class=\"col-sm-2 col-form-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"userPassword\" name=\"login.password\" [(ngModel)]=\"login.password\">\n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <div class=\"col-sm-10\">\n      <input type=\"submit\" name=\"submit\" value=\"Login\" class=\"btn-login-box\" (click)=\"onSubmit()\">\n      </div>\n  </div>\n\n  </form>\n  <a class=\"nav-link\" routerLink=\"#\" (click)=\"go()\">Register as New User</a>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-guest/register-guest.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-guest/register-guest.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\">\n<div class=\"mb-3 row\">\n    <label for=\"userName\" class=\"col-sm-2 col-form-label\">username</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"username\" [(ngModel)]=\"user.userName\">\n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userPassword\" class=\"col-sm-2 col-form-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"userPassword\"  name=\"password\" [(ngModel)]=\"user.password\">\n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userRole\" class=\"col-sm-2 col-form-label\">Role</label>\n    <div class=\"col-sm-10\">\n        <select name=\"my-role\" (change)=\"selectChange($event)\">\n            <option [value]=\"0\" >\n                select....\n            </option>\n            <option [value]=\"1\" >\n                Admin\n            </option>\n            <option [value]=\"2\" >\n                User\n            </option>\n        </select>\n        \n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <div class=\"col-sm-10\">\n        <input type=\"submit\" name=\"submit\" value=\"Register as new user\" class=\"btn-login-box\" (click)=\"onSubmit()\">\n        </div>\n  </div>\n</form>\n   <a class=\"nav-link\" routerLink=\"#\" (click)=\"goToLoggin()\"> login page </a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-entries/view-entries.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-entries/view-entries.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">List of entries\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-5\">\n     <div class=\"col\" >s.no</div>\n      <div class=\"col\">text</div>\n      <div class=\"col\" >image</div>\n      <div class=\"col\" >approved</div>\n      <div class=\"col\" >Action</div>\n      </div>\n      <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-5\"  *ngFor=\"let entries of usersEntriesList\">\n         <div class=\"col\" >{{entries.id}}</div>\n          <div class=\"col\">{{entries.feedback}}</div>\n            <div class=\"col\" ><a class=\"nav-link\" routerLink=\"#\" (click)=downloadfile(entries.imgurl)>{{entries.imgurl}}</a>\n          </div>\n            <div class=\"col\"  *ngIf=\"entries.isApprove;else elseNotDone\"> yes</div>\n            <ng-template #elseNotDone>\n              not\n            </ng-template>\n            <div class=\"col\" >\n                  <table>\n                    <tr>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=approve(entries.id)>Approve </a></td>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=Edit(entries.id)>Edit </a></td>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=Delete(entries.id)>Delete</a></td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n      <input type=\"button\" value=\"add new entries\" (click)=\"go()\">\n    </div>\n"

/***/ }),

/***/ "./src/app/add-entries/add-entries.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-entries/add-entries.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbnRyaWVzL2FkZC1lbnRyaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-entries/add-entries.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-entries/add-entries.component.ts ***!
  \******************************************************/
/*! exports provided: AddEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntriesComponent", function() { return AddEntriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");
/* harmony import */ var _model_UserEntries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/UserEntries */ "./src/app/model/UserEntries.ts");





let AddEntriesComponent = class AddEntriesComponent {
    constructor(entriesService, route) {
        this.entriesService = entriesService;
        this.route = route;
        this.isText = false;
        this.isImage = false;
        this.myEntries = "1";
        this.userEntries = new _model_UserEntries__WEBPACK_IMPORTED_MODULE_4__["UserEntries"]();
    }
    ngOnInit() {
    }
    selectChange(event) {
        this.entriesType = event.target.value;
        if (this.entriesType === "1") {
            this.isText = true;
            this.isImage = false;
        }
        if (this.entriesType === "2") {
            this.isImage = true;
            this.isText = false;
        }
    }
    save() {
        //alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.feedback);
        // alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.imgurl);  
        if (this.entriesType === "1") {
            this.entriesService.saveEntries(this.userEntries).subscribe(data => {
                console.log('Success: ');
                this.route.navigate(['/viewEntries']);
            }, error => {
                console.log('Error: ', error);
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        if (this.entriesType === "2") {
            this.entriesService.saveEntriesForFiles(this.currentFileUpload).subscribe(data => {
                console.log('Success: ');
                this.route.navigate(['/viewEntries']);
            }, error => {
                console.log('Error: ', error);
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        this.route.navigate(['/viewEntries']);
    }
    selectFile(event) {
        const file = event.target.files.item(0);
        let filename = file.name;
        // if (file.type.match('application/vnd.ms-excel.csv')||file.type.match('application/vnd.ms-excel.*')||file.type.match('vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {  
        var size = event.target.files[0].size;
        this.currentFileUpload = event.target.files[0];
        this.selectedFiles = event.target.files;
        //}
    }
};
AddEntriesComponent.ctorParameters = () => [
    { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-entries',
        template: __webpack_require__(/*! raw-loader!./add-entries.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-entries/add-entries.component.html"),
        styles: [__webpack_require__(/*! ./add-entries.component.css */ "./src/app/add-entries/add-entries.component.css")]
    })
], AddEntriesComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entries/add-entries.component */ "./src/app/add-entries/add-entries.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-guest/login-guest.component */ "./src/app/login-guest/login-guest.component.ts");
/* harmony import */ var _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-guest/register-guest.component */ "./src/app/register-guest/register-guest.component.ts");
/* harmony import */ var _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-entries/view-entries.component */ "./src/app/view-entries/view-entries.component.ts");








const routes = [
    {
        path: '',
        component: _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_5__["LoginGuestComponent"]
    },
    {
        path: 'register',
        component: _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_6__["RegisterGuestComponent"]
    },
    {
        path: 'addEntries',
        component: _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_3__["AddEntriesComponent"]
    },
    {
        path: 'viewEntries',
        component: _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_7__["ViewEntriesComponent"]
    },
    {
        path: 'editEntries',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {color: brown; border: 2%; text-align: center; border-color: blueviolet; border-style: dotted;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxZQUFZLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Y29sb3I6IGJyb3duOyBib3JkZXI6IDIlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1jb2xvcjogYmx1ZXZpb2xldDsgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7fSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'this is our angular proram';
        this.months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.isAvailalbe = false;
        this.toDo = ["angular Training"];
    }
    addItem() {
        this.toDo.push('item1');
    }
    clickFunction() {
        alert('clicked');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-guest/login-guest.component */ "./src/app/login-guest/login-guest.component.ts");
/* harmony import */ var _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-guest/register-guest.component */ "./src/app/register-guest/register-guest.component.ts");
/* harmony import */ var _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entries/view-entries.component */ "./src/app/view-entries/view-entries.component.ts");
/* harmony import */ var _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-entries/add-entries.component */ "./src/app/add-entries/add-entries.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_6__["LoginGuestComponent"],
            _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_7__["RegisterGuestComponent"],
            _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_8__["ViewEntriesComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_9__["AddEntriesComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");




let EditComponent = class EditComponent {
    constructor(route, entriesService) {
        this.route = route;
        this.entriesService = entriesService;
        this.isText = false;
        this.isImage = false;
        this.myEntries = "1";
    }
    ngOnInit() {
        if (this.entriesService.editVar !== "0")
            this.getSelectedValue(this.entriesService.editVar);
    }
    getSelectedValue(valId) {
        this.entriesService.edit(valId).subscribe(data => {
            this.usersEntriesEdit = data.data;
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
    selectChange(event) {
        this.entriesType = event.target.value;
        if (this.entriesType === "1") {
            this.isText = true;
            this.isImage = false;
        }
        if (this.entriesType === "2") {
            this.isImage = true;
            this.isText = false;
        }
    }
    save() {
        //alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.feedback);
        // alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.imgurl);  
        this.entriesService.saveEntries(this.usersEntriesEdit).subscribe(data => {
            console.log('Success: ');
            this.route.navigate(['/viewEntries']);
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/entries.service.ts":
/*!************************************!*\
  !*** ./src/app/entries.service.ts ***!
  \************************************/
/*! exports provided: EntriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesService", function() { return EntriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EntriesService = class EntriesService {
    constructor(http) {
        this.http = http;
        this.createAPI = "http://localhost:8080/createEntries";
        this.createAPIForFiles = "http://localhost:8080/createEntriesForFiles";
        this.getAPI = "http://localhost:8080/getEntriesList";
        this.approveAPI = "http://localhost:8080/isApproveEntry";
        this.updateAPI = "http://localhost:8080/updateEntries";
        this.deleteAPI = "http://localhost:8080/deleteEntries";
        this.selectedPageAPI = "http://localhost:8080/getSelectedEntry";
        this.editVar = "0";
    }
    ;
    isApprove(valId) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.approveAPI + "?id=" + valId);
    }
    update(userEntries) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.put(this.updateAPI, userEntries);
    }
    edit(valId) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.selectedPageAPI + "?id=" + valId);
    }
    delete(valId) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.deleteAPI + "?id=" + valId);
    }
    getEntriesList() {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.getAPI);
    }
    saveEntries(userEntries) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.createAPI, userEntries);
    }
    saveEntriesForFiles(file) {
        const formdata = new FormData();
        formdata.append('file', file);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.createAPIForFiles, formdata);
    }
};
EntriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EntriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EntriesService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login-guest/login-guest.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-guest/login-guest.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWd1ZXN0L2xvZ2luLWd1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-guest/login-guest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-guest/login-guest.component.ts ***!
  \******************************************************/
/*! exports provided: LoginGuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuestComponent", function() { return LoginGuestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _model_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Login */ "./src/app/model/Login.ts");





let LoginGuestComponent = class LoginGuestComponent {
    constructor(route, loginService) {
        this.route = route;
        this.loginService = loginService;
        this.login = new _model_Login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
    }
    ngOnInit() {
    }
    go() {
        this.route.navigate(['/register']);
    }
    onSubmit(form) {
        this.loginService.signin(this.login).subscribe(data => {
            console.log('Success: ', data);
            this.route.navigate(['/viewEntries']);
        }, error => {
            console.log('Error: ', error);
        });
    }
};
LoginGuestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
LoginGuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-guest',
        template: __webpack_require__(/*! raw-loader!./login-guest.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-guest/login-guest.component.html"),
        styles: [__webpack_require__(/*! ./login-guest.component.css */ "./src/app/login-guest/login-guest.component.css")]
    })
], LoginGuestComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.API = "http://localhost:8080/login";
        this.registerAPI = "http://localhost:8080/register";
    }
    signin(login) {
        console.log("geting token " + this.API);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('username', login.name)
            .set('password', login.password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/html',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.API + "?username=" + login.name + "&password=" + login.password, { responseType: 'text' });
    }
    register(user) {
        console.log("geting token " + this.API);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.registerAPI, user);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/model/Login.ts":
/*!********************************!*\
  !*** ./src/app/model/Login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
class Login {
}


/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/model/UserEntries.ts":
/*!**************************************!*\
  !*** ./src/app/model/UserEntries.ts ***!
  \**************************************/
/*! exports provided: UserEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntries", function() { return UserEntries; });
class UserEntries {
}


/***/ }),

/***/ "./src/app/register-guest/register-guest.component.css":
/*!*************************************************************!*\
  !*** ./src/app/register-guest/register-guest.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWd1ZXN0L3JlZ2lzdGVyLWd1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register-guest/register-guest.component.ts":
/*!************************************************************!*\
  !*** ./src/app/register-guest/register-guest.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterGuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuestComponent", function() { return RegisterGuestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");





let RegisterGuestComponent = class RegisterGuestComponent {
    constructor(route, loginService) {
        this.route = route;
        this.loginService = loginService;
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() {
    }
    goToLoggin() {
        alert('clicked');
        this.route.navigate(['']);
    }
    onSubmit() {
        this.user.userRole = this.entriesType;
        this.loginService.register(this.user).subscribe(data => {
            console.log('Success: ', data);
            this.route.navigate(['/viewEntries']);
        }, error => {
            console.log('Error: ', error);
        });
    }
    selectChange(event) {
        this.entriesType = event.target.value;
        if (this.entriesType === "1") {
            this.user.userRole = 'Admin';
        }
        if (this.entriesType === "2") {
            this.user.userRole = 'user';
        }
    }
};
RegisterGuestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
RegisterGuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-guest',
        template: __webpack_require__(/*! raw-loader!./register-guest.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-guest/register-guest.component.html"),
        styles: [__webpack_require__(/*! ./register-guest.component.css */ "./src/app/register-guest/register-guest.component.css")]
    })
], RegisterGuestComponent);



/***/ }),

/***/ "./src/app/view-entries/view-entries.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-entries/view-entries.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZW50cmllcy92aWV3LWVudHJpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-entries/view-entries.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-entries/view-entries.component.ts ***!
  \********************************************************/
/*! exports provided: ViewEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntriesComponent", function() { return ViewEntriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");




let ViewEntriesComponent = class ViewEntriesComponent {
    constructor(route, entriesService) {
        this.route = route;
        this.entriesService = entriesService;
        this.usersEntriesList = [];
    }
    ngOnInit() {
        //this.usersEntriesList;
        this.entriesService.getEntriesList().subscribe(data => {
            console.log('Success: ' + data.Success);
            console.log('Success: ' + data.Success);
            this.route.navigate(['/viewEntries']);
            this.usersEntriesList = data.data;
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
    go() {
        this.route.navigate(['/addEntries']);
    }
    approve(valId) {
        //alert('selected id is  '+valId);
        this.entriesService.isApprove(valId).subscribe(data => {
            alert('Appoved');
            this.route.navigate(['/viewEntries']);
            //this.usersEntriesList=data.data;
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
    update(userEntries) {
        alert('selected id is  ' + userEntries.id);
        this.entriesService.update(userEntries).subscribe(data => {
            alert('Edit');
            this.route.navigate(['/updateEntries']);
            //this.usersEntriesList=data.data;
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
    Edit(valId) {
        this.entriesService.editVar = valId;
        alert('selected id is  ' + valId);
        this.route.navigate(['/editEntries']);
    }
    Delete(valId) {
        alert('selected id is  ' + valId);
        this.entriesService.delete(valId).subscribe(data => {
            alert('Deleted');
            this.route.navigate(['/viewEntries']);
            //this.usersEntriesList=data.data;
        }, error => {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    }
    downloadfile(fileName) {
        var filePath = "D:\\test\\" + fileName;
        alert("file downloaded path is " + filePath);
    }
};
ViewEntriesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] }
];
ViewEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-entries',
        template: __webpack_require__(/*! raw-loader!./view-entries.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-entries/view-entries.component.html"),
        styles: [__webpack_require__(/*! ./view-entries.component.css */ "./src/app/view-entries/view-entries.component.css")]
    })
], ViewEntriesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularTest\starter-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map