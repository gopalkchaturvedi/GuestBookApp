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

module.exports = "<div>\n<table>\n<tr>\n    <td>entry type </td>\n <td>   \n<div>\n<select name=\"my-select\" (change)=\"selectChange($event)\">\n    <option [value]=\"0\" >\n        select....\n    </option>\n    <option [value]=\"1\" >\n        text\n    </option>\n    <option [value]=\"2\" >\n        image\n    </option>\n</select>\n</div>\n</td></tr>\n<tr><td>\n<div *ngIf=\"isText\">\n    enter text for entries\n</div>\n</td>\n<td>\n    <div *ngIf=\"isText\">\n      <input type=\"textArea\" name=\"feedback\" [(ngModel)]=\"userEntries.feedback\"/>\n    </div>\n    </td>\n</tr><tr>\n    <td>\n<div *ngIf=\"isImage\">\n    upload file\n\n</div>\n</td>\n    <td>\n    <div *ngIf=\"isImage\">\n      \n        <input type=\"file\" (change)=\"selectFile($event)\"/>\n        <input type=\"hidden\" name=\"imgurl\" [(ngModel)]=\"userEntries.imgurl\"/>\n    </div>\n    </td>\n    </tr>\n    <tr><td><div>\n        {{message}}\n    </div></td></tr>\n    <tr>\n        <td>\n                        <div>\n                            <input type=\"button\" [disabled]=\"enableButton\" value=\"add entries\"(click)=save()/>\n                        </div>\n                   \n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div>\n             \n                <input type=\"button\" value=\"view Entries\"(click)=back()/>\n            </div>\n    \n        </td>\n    </tr>\n</table>\n</div>\n"

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

module.exports = "    <div>\n    <table>\n    <tr>\n        <td>entry type :</td>\n     <td>   \n    <div>\n    <select name=\"my-select\" (change)=\"selectChange($event)\" [(ngModel)]=\"entriesType\">\n        <option [value]=\"0\" >\n            select....\n        </option>\n        <option [value]=\"1\" >\n            text\n        </option>\n        <option [value]=\"2\" >\n            image\n        </option>\n    </select>\n    </div>\n    </td></tr>\n    <tr><td>\n    <div *ngIf=\"isText\">\n        enter text for entries\n    </div>\n    </td>\n    <td>\n        <div *ngIf=\"isText\">\n          <input type=\"textArea\" name=\"feedback\" [(ngModel)]=\"usersEntriesEdit.feedback\"/>\n        </div>\n        </td>\n    </tr>\n    <tr>\n        <div *ngIf=\"isImage\">\n        <td>\n        uploaded  file Name:\n        </td>\n        <td>\n            {{usersEntriesEdit.imgurl}}\n              </td>\n        </div>\n    \n    </tr>\n    <tr>\n    <td>\n            <div *ngIf=\"isImage\">\n            \n            choose file to update\n            </div>\n\n        </td><td>\n            <div *ngIf=\"isImage\">\n        <input type=\"file\" vlaue=\" select file to update\"(change)=\"selectFile($event)\" [(ngModel)]=\"usersEntriesEdit.imgurl\"/>\n        \n        </div>\n        </td>\n        </tr>\n        <tr>\n            <td>\n                <div>\n                    <input type=\"button\" value=\"back\"(click)=back()/>\n                </div>\n        \n            </td>\n        </tr>\n\n    </table>\n    <div>\n    <input type=\"button\" value=\"update entries\"(click)=save()/>\n    </div>\n    </div>\n    "

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

module.exports = "<form name=\"form\"  (ngSubmit)=\"onSubmit(f1)\" ngNativeValidate>\n<div class=\"mb-3 row\">\n    <label for=\"userName\" class=\"col-sm-2 col-form-label\">username</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"userName\" value=\"\" name=\"login.name\" [(ngModel)]=\"login.name\">\n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userPassword\" class=\"col-sm-2 col-form-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"userPassword\" name=\"login.password\" [(ngModel)]=\"login.password\">\n    </div>\n  </div>\n  <div calss=\"center\">\n    {{message}}\n  </div>\n  <div class=\"mb-3 row\">\n    <div class=\"col-sm-10\">\n      <input type=\"submit\" name=\"submit\" value=\"Login\" class=\"btn-login-box\" (click)=\"onSubmit()\">\n      </div>\n  </div>\n\n  </form>\n  <a class=\"nav-link\" routerLink=\"#\" (click)=\"go()\">Register as New User</a>\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-guest/register-guest.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-guest/register-guest.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" #myForm=\"ngForm\">\n<div class=\"mb-3 row\">\n    <label for=\"userName\" class=\"col-sm-2 col-form-label\">username</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"username\" [(ngModel)]=\"user.userName\"\n      required #txtUserName=\"ngModel\">\n      <span *ngIf=\"txtUserName.invalid && txtUserName.touched\" class=\"text-danger\">User Name is required.</span> \n    \n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userPassword\" class=\"col-sm-2 col-form-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"userPassword\"  name=\"password\" [(ngModel)]=\"user.password\"\n      required #txtUserPass=\"ngModel\">\n      <span *ngIf=\"txtUserPass.invalid && txtUserName.touched\" class=\"text-danger\">Password is required.</span> \n      <span *ngIf=\"txtUserPass.noWhiteSpace\" class=\"text-danger\">Password is required.</span> \n    \n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <label for=\"userRole\" class=\"col-sm-2 col-form-label\">Role</label>\n    <div class=\"col-sm-10\">\n        <select name=\"my-role\" (change)=\"selectChange($event)\">\n            <option [value]=\"0\" >\n                select....\n            </option>\n            <option [value]=\"1\" >\n                Admin\n            </option>\n            <option [value]=\"2\" >\n                User\n            </option>\n        </select>\n        \n    </div>\n  </div>\n  <div class=\"mb-3 row\">\n    <div class=\"col-sm-10\">\n        <input type=\"submit\" name=\"submit\" value=\"Register as new user\" class=\"btn-login-box\" (click)=\"onSubmit()\">\n        </div>\n        <div>{{message}}</div>\n  </div>\n</form>\n   <a class=\"nav-link\" routerLink=\"#\" (click)=\"goToLoggin()\"> login page </a>\n   <ngx-alerts></ngx-alerts>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-entries/view-entries.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-entries/view-entries.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"container\" *ngIf=\"isRecords;else NoRecordFound\"-->\n<div class=\"col-sm-12\" align=\"right\">\n  <a class=\"nav-link\" routerLink=\"#\" (click)=logout()>logout </a>\n \n  </div>  \n<div class=\"container\">\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-5\" *ngIf=\"isRecords;else NoRecordFound\">\n     <div class=\"col\" ><b>S.No</b></div>\n      <div class=\"col\"><b>Feedback</b></div>\n      <div class=\"col\" ><b>Image</b></div>\n      <div class=\"col\" ><b>Approved</b></div>\n      <div [hidden]=\"!isAction\" class=\"col\" ><b>Action</b></div>\n      </div>\n      <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-5\"  *ngFor=\"let entries of usersEntriesList\">\n         <div class=\"col\" >{{entries.id}}</div>\n          <div class=\"col\">{{entries.feedback}}</div>\n            <div class=\"col\" ><a class=\"nav-link\" routerLink=\"#\" (click)=downloadfile(entries.id,entries.image)>{{entries.imgurl}}</a>\n          </div>\n            <div class=\"col\"  *ngIf=\"entries.isApprove;else elseNotDone\"> Approved</div>\n            <ng-template #elseNotDone>\n              Not Approved\n            </ng-template>\n            <div [hidden]=\"!isAction\" class=\"col\" >\n                  <table>\n                    <tr>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=approve(entries.id)>Approve </a></td>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=Edit(entries.id)>Edit </a></td>\n                      <td><a class=\"nav-link\" routerLink=\"#\" (click)=Delete(entries.id)>Delete</a></td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <!--div>\n                {{message}}\n                </div-->\n\n                <ng-template #NoRecordFound>\n                  <div class=\"d-flex justify-content-center align-items-center\" style=\"height:100px;\">\n                 <div class=\"bg-primary\">no record found</div>    \n             </div>\n             </ng-template>\n         \n\n      <input type=\"button\" value=\"add new entries\" (click)=\"addEntries()\">\n      \n    </div>\n    <div class=\"container row\">\n      <div class=\"col-md-12\">\n          <div *ngIf=retrievedImage>\n              <img [src]=\"retrievedImage\">\n          </div>\n      </div>\n  </div>\n    "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _model_UserEntries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/UserEntries */ "./src/app/model/UserEntries.ts");






var AddEntriesComponent = /** @class */ (function () {
    function AddEntriesComponent(entriesService, route) {
        this.entriesService = entriesService;
        this.route = route;
        this.isText = false;
        this.isImage = false;
        this.myEntries = "1";
        this.userEntries = new _model_UserEntries__WEBPACK_IMPORTED_MODULE_5__["UserEntries"]();
        this.usr = new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.enableButton = true;
        this.message = "";
    }
    AddEntriesComponent.prototype.ngOnInit = function () {
        this.usrData = localStorage.getItem("userData");
        //this.usr=JSON.parse(this.usrData);
        this.message = "";
    };
    AddEntriesComponent.prototype.selectChange = function (event) {
        this.message = "";
        this.entriesType = event.target.value;
        this.enableButton = true;
        if (this.entriesType === "1") {
            this.isText = true;
            this.isImage = false;
            this.enableButton = false;
        }
        if (this.entriesType === "2") {
            this.isImage = true;
            this.isText = false;
        }
    };
    AddEntriesComponent.prototype.save = function () {
        var _this = this;
        var usrData = localStorage.getItem("userData");
        console.log("user data in view " + usrData);
        this.usr = JSON.parse(usrData);
        this.userEntries.userId = this.usr.id;
        console.log(this.usr.id + "user id in  id " + this.userEntries.userId);
        if (this.entriesType === "1") {
            this.entriesService.saveEntries(this.userEntries).subscribe(function (data) {
                console.log('Success: ');
                //this.route.navigate(['/viewEntries']);
                _this.message = "user entries added successfully";
            }, function (error) {
                console.log('Error: ', error);
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        if (this.entriesType === "2") {
            this.entriesService.saveEntriesForFiles(this.currentFileUpload, this.usr.id).subscribe(function (data) {
                console.log('Success: ');
                _this.message = data.message;
            }, function (error) {
                // console.log('Error: ', error);
                _this.message = "File Exeeded, it stored limit,please upload file less then 1 MB ";
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        //this.route.navigate(['/viewEntries']);
    };
    AddEntriesComponent.prototype.back = function () {
        this.route.navigate(['/viewEntries']);
    };
    AddEntriesComponent.prototype.selectFile = function (event) {
        this.message = "";
        var file = event.target.files.item(0);
        var filename = file.name;
        //alert("file type "+file.type );
        if (file.type.match('image/*') || file.type.match('image/jpeg')) {
            var size = event.target.files[0].size;
            this.currentFileUpload = event.target.files[0];
            this.selectedFiles = event.target.files;
            this.enableButton = false;
        }
        else {
            //alert('invalid file type, please upload image file');
            this.enableButton = true;
            this.message = " Invalid File Type , Please select image file only ";
        }
    };
    AddEntriesComponent.ctorParameters = function () { return [
        { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AddEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-entries',
            template: __webpack_require__(/*! raw-loader!./add-entries.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-entries/add-entries.component.html"),
            styles: [__webpack_require__(/*! ./add-entries.component.css */ "./src/app/add-entries/add-entries.component.css")]
        })
    ], AddEntriesComponent);
    return AddEntriesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entries/add-entries.component */ "./src/app/add-entries/add-entries.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-guest/login-guest.component */ "./src/app/login-guest/login-guest.component.ts");
/* harmony import */ var _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-guest/register-guest.component */ "./src/app/register-guest/register-guest.component.ts");
/* harmony import */ var _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entries/view-entries.component */ "./src/app/view-entries/view-entries.component.ts");









var routes = [
    {
        path: '',
        component: _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_6__["LoginGuestComponent"]
    },
    {
        path: 'register',
        component: _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_7__["RegisterGuestComponent"]
    },
    {
        path: 'addEntries',
        component: _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_3__["AddEntriesComponent"]
    },
    {
        path: 'viewEntries',
        component: _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_8__["ViewEntriesComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'editEntries',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'this is our angular proram';
        this.months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.isAvailalbe = false;
        this.toDo = ["angular Training"];
    }
    AppComponent.prototype.addItem = function () {
        this.toDo.push('item1');
    };
    AppComponent.prototype.clickFunction = function () {
        alert('clicked');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_guest_login_guest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-guest/login-guest.component */ "./src/app/login-guest/login-guest.component.ts");
/* harmony import */ var _register_guest_register_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-guest/register-guest.component */ "./src/app/register-guest/register-guest.component.ts");
/* harmony import */ var _view_entries_view_entries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entries/view-entries.component */ "./src/app/view-entries/view-entries.component.ts");
/* harmony import */ var _add_entries_add_entries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-entries/add-entries.component */ "./src/app/add-entries/add-entries.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm2015/ngx-alerts.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
                ngx_alerts__WEBPACK_IMPORTED_MODULE_14__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000 }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] }, _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var usrData = localStorage.getItem("userData");
        console.log("user data in view " + usrData);
        return usrData ? true : false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _model_UserEntries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/UserEntries */ "./src/app/model/UserEntries.ts");






var EditComponent = /** @class */ (function () {
    function EditComponent(route, entriesService) {
        this.route = route;
        this.entriesService = entriesService;
        this.isText = false;
        this.isImage = false;
        this.myEntries = "1";
        this.userEntries = new _model_UserEntries__WEBPACK_IMPORTED_MODULE_5__["UserEntries"]();
        this.usr = new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.enableButton = true;
        this.message = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var usrData = localStorage.getItem("userData");
        if (this.entriesService.editVar !== "0")
            this.getSelectedValue(this.entriesService.editVar);
    };
    EditComponent.prototype.getSelectedValue = function (valId) {
        var _this = this;
        this.entriesService.edit(valId).subscribe(function (data) {
            console.log(data.data);
            _this.usersEntriesEdit = data.data;
            _this.loadChange();
        }, function (error) {
            //console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    EditComponent.prototype.selectChange = function (event) {
        this.entriesType = event.target.value;
        this.message = "";
        this.enableButton = true;
        if (this.entriesType === "1") {
            this.isText = true;
            this.isImage = false;
            this.enableButton = false;
        }
        if (this.entriesType === "2") {
            this.isImage = true;
            this.isText = false;
            this.enableButton = true;
        }
    };
    EditComponent.prototype.loadChange = function () {
        this.message = "";
        this.enableButton = true;
        // console.log(this.usersEntriesEdit.feedback +" entries type "+ this.entriesType);
        if (this.usersEntriesEdit.feedback != null) {
            this.entriesType = "1";
            console.log(this.usersEntriesEdit.feedback + " entries type " + this.entriesType);
            this.isText = true;
            this.isImage = false;
            this.enableButton = false;
        }
        if (this.usersEntriesEdit.imgurl != null) {
            this.entriesType = "2";
            this.isImage = true;
            this.isText = false;
            //this.enableButton=true;
        }
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        var usrData = localStorage.getItem("userData");
        console.log("user data in view " + usrData + "   " + this.entriesService.editVar);
        this.usr = JSON.parse(usrData);
        this.usersEntriesEdit.userId = this.usr.id;
        this.usersEntriesEdit.id = Number(this.entriesService.editVar);
        console.log(this.usr.id + "user id in  id " + this.userEntries.userId);
        if (this.entriesType === "1") {
            this.entriesService.update(this.usersEntriesEdit).subscribe(function (data) {
                console.log('Success: ');
                _this.route.navigate(['/viewEntries']);
            }, function (error) {
                console.log('Error: ', error);
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        if (this.entriesType === "2") {
            this.entriesService.updateEntriesForFiles(this.currentFileUpload, this.usr.id, this.usersEntriesEdit.id).subscribe(function (data) {
                console.log('Success: ');
                _this.route.navigate(['/viewEntries']);
            }, function (error) {
                console.log('Error: ', error);
                _this.message = "File Exeeded, it stored limit,please upload file less then 1 MB ";
                // this.alertService.warning("Invalid Username or Password") ;
            });
        }
        this.route.navigate(['/viewEntries']);
    };
    EditComponent.prototype.back = function () {
        this.route.navigate(['/viewEntries']);
    };
    EditComponent.prototype.selectFile = function (event) {
        this.message = "";
        var file = event.target.files.item(0);
        var filename = file.name;
        if (file.type.match('image/*') || file.type.match('image/jpeg')) {
            var size = event.target.files[0].size;
            this.currentFileUpload = event.target.files[0];
            this.selectedFiles = event.target.files;
            this.enableButton = false;
        }
        else {
            //alert('invalid file type, please upload image file');
            this.enableButton = true;
            this.message = " Invalid File Type , Please select image file only ";
        }
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        })
    ], EditComponent);
    return EditComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EntriesService = /** @class */ (function () {
    function EntriesService(http) {
        this.http = http;
        this.createAPI = "http://localhost:8080/createEntries";
        //createAPIForFiles = "http://localhost:8080/createEntriesForFiles";
        this.createAPIForFiles = "http://localhost:8080/storeFileData";
        this.updateAPIForFiles = "http://localhost:8080/updateStoreFileData";
        this.getAllEntries = "http://localhost:8080/getEntriesList";
        this.getEntriesByUserId = "http://localhost:8080/secured/getEntriesList";
        this.approveAPI = "http://localhost:8080/isApproveEntry";
        this.updateAPI = "http://localhost:8080/open/updateEntries";
        this.deleteAPI = "http://localhost:8080/deleteEntries";
        this.downLoadfile = "http://localhost:8080/downLoadfile";
        this.selectedPageAPI = "http://localhost:8080/getSelectedEntry";
        this.editVar = "0";
    }
    ;
    EntriesService.prototype.isApprove = function (valId) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.approveAPI + "?id=" + valId);
    };
    EntriesService.prototype.update = function (userEntries) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.put(this.updateAPI, userEntries);
    };
    EntriesService.prototype.edit = function (valId) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.selectedPageAPI + "?id=" + valId);
    };
    EntriesService.prototype.delete = function (valId) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.get(this.deleteAPI + "?id=" + valId);
    };
    EntriesService.prototype.getEntriesList = function (usr) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        if (usr.userRole === 'admin') {
            return this.http.get(this.getEntriesByUserId + "?id=" + 0);
        }
        else {
            return this.http.get(this.getEntriesByUserId + "?id=" + usr.id);
        }
    };
    EntriesService.prototype.saveEntries = function (userEntries) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.createAPI, userEntries);
    };
    EntriesService.prototype.updateEntriesForFiles = function (file, useruserId, id) {
        console.log("useruserId " + useruserId);
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('userId', useruserId);
        formdata.append('Id', id);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.put(this.updateAPIForFiles, formdata);
    };
    EntriesService.prototype.saveEntriesForFiles = function (file, useruserId) {
        console.log("useruserId " + useruserId);
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('userId', useruserId);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.createAPIForFiles, formdata);
    };
    EntriesService.prototype.downloadfile = function (valId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*',
            }),
            responseType: 'blob',
        };
        console.log('gettin response');
        return this.http.post(this.downLoadfile, valId, httpOptions);
    };
    EntriesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EntriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], EntriesService);
    return EntriesService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _model_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Login */ "./src/app/model/Login.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _model_ResponseObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/ResponseObj */ "./src/app/model/ResponseObj.ts");







var LoginGuestComponent = /** @class */ (function () {
    function LoginGuestComponent(route, loginService) {
        this.route = route;
        this.loginService = loginService;
        this.login = new _model_Login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.obj = new _model_ResponseObj__WEBPACK_IMPORTED_MODULE_6__["ResponseObj"]();
    }
    LoginGuestComponent.prototype.ngOnInit = function () {
        this.message = this.loginService.message;
    };
    LoginGuestComponent.prototype.go = function () {
        this.route.navigate(['/register']);
    };
    LoginGuestComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loginService.signin(this.login).subscribe(function (data) {
            //console.log('Success: ', data);
            var usrData = JSON.stringify(data.data);
            _this.user = JSON.parse(usrData);
            //console.log('user2: ',  usrData );
            //console.log('user3: ', this.user.id+" name "+this.user.userName );
            localStorage.setItem("userData", usrData);
            if (data.code === 200)
                _this.route.navigate(['/viewEntries']);
            else
                _this.message = data.message;
        }, function (error) {
            console.log('Error: ', error);
        });
    };
    LoginGuestComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    LoginGuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-guest',
            template: __webpack_require__(/*! raw-loader!./login-guest.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-guest/login-guest.component.html"),
            styles: [__webpack_require__(/*! ./login-guest.component.css */ "./src/app/login-guest/login-guest.component.css")]
        })
    ], LoginGuestComponent);
    return LoginGuestComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.API = "http://localhost:8080/open/login";
        this.SecureAPI = "http://localhost:8080/secured/login";
        this.registerAPI = "http://localhost:8080/open/register";
    }
    /*
    signin(login:Login):Observable<any>{
      console.log("geting token "+this.API);
      const body = new HttpParams()
      .set('username', login.name)
      .set('password', login.password);
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':  'application/html',*/
    // 'Accept': '*/*' 
    /*  })
      
   // };
   //return this.http.get(this.API+"?username="+login.name+"&password="+login.password);

  }*/
    LoginService.prototype.signin = function (login) {
        console.log("getting token " + this.SecureAPI);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('username', login.name)
            .set('password', login.password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.SecureAPI, body);
        //return this.http.get(this.API+"?username="+login.name+"&password="+login.password);
    };
    LoginService.prototype.register = function (user) {
        this.message = "";
        console.log("geting token " + this.API);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        };
        return this.http.post(this.registerAPI, user);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



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
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/model/ResponseObj.ts":
/*!**************************************!*\
  !*** ./src/app/model/ResponseObj.ts ***!
  \**************************************/
/*! exports provided: ResponseObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseObj", function() { return ResponseObj; });
var ResponseObj = /** @class */ (function () {
    function ResponseObj() {
    }
    return ResponseObj;
}());



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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



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
var UserEntries = /** @class */ (function () {
    function UserEntries() {
    }
    return UserEntries;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm2015/ngx-alerts.js");






var RegisterGuestComponent = /** @class */ (function () {
    function RegisterGuestComponent(route, loginService, alertService) {
        this.route = route;
        this.loginService = loginService;
        this.alertService = alertService;
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.message = "";
    }
    RegisterGuestComponent.prototype.ngOnInit = function () {
        this.message = "";
    };
    RegisterGuestComponent.prototype.goToLoggin = function () {
        this.route.navigate(['']);
    };
    RegisterGuestComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.user.userName.trim().length > 0 && this.user.password.trim().length > 0 && !(this.user.userRole === undefined)) {
            this.loginService.register(this.user).subscribe(function (data) {
                // console.log('Success: ', data);
                if (data.code === 200)
                    _this.loginService.message = data.message;
                else
                    _this.loginService.message = "error while registering usr pls try again";
                _this.route.navigate(['']);
            }, function (error) {
                _this.loginService.message = "error while registering usr pls try again";
            });
        }
        else {
            this.message = "either user name or password or role is empty, pls try again";
        }
    };
    RegisterGuestComponent.prototype.selectChange = function (event) {
        this.entriesType = event.target.value;
        if (this.entriesType === "1") {
            this.user.userRole = 'admin';
        }
        if (this.entriesType === "2") {
            this.user.userRole = 'user';
        }
    };
    RegisterGuestComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    RegisterGuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-guest',
            template: __webpack_require__(/*! raw-loader!./register-guest.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-guest/register-guest.component.html"),
            styles: [__webpack_require__(/*! ./register-guest.component.css */ "./src/app/register-guest/register-guest.component.css")]
        })
    ], RegisterGuestComponent);
    return RegisterGuestComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entries.service */ "./src/app/entries.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");






var ViewEntriesComponent = /** @class */ (function () {
    function ViewEntriesComponent(route, entriesService) {
        this.route = route;
        this.entriesService = entriesService;
        this.usersEntriesList = [];
        this.usr = new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.isRecords = false;
        console.log('constor');
        this.loadData();
    }
    ViewEntriesComponent.prototype.ngOnInit = function () {
        console.log('oninit');
        this.loadData();
    };
    ViewEntriesComponent.prototype.loadData = function () {
        var _this = this;
        console.log("user data in view ");
        var usrData = localStorage.getItem("userData");
        console.log("user data in view " + usrData);
        this.usr = JSON.parse(usrData);
        //this.usersEntriesList;
        console.log("user role" + this.usr.userRole);
        if (this.usr.userRole === 'admin')
            this.isAction = true;
        else
            this.isAction = false;
        this.entriesService.getEntriesList(this.usr).subscribe(function (data) {
            console.log(data.code + '  message' + data.message);
            console.log(data.code + '  message' + data.code);
            if (data.code === 200) { //this.route.navigate(['/viewEntries']);
                _this.usersEntriesList = data.data;
                _this.isRecords = true;
            }
            if (data.code === 403) {
                //alert("error");
                // this.route.navigate(['']);
            }
            else {
                _this.message = data.message;
                _this.route.navigate(['/viewEntries']);
            }
        }, function (error) {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    ViewEntriesComponent.prototype.addEntries = function () {
        this.route.navigate(['/addEntries']);
    };
    ViewEntriesComponent.prototype.approve = function (valId) {
        var _this = this;
        //alert('selected id is  '+valId);
        this.entriesService.isApprove(valId).subscribe(function (data) {
            _this.ngOnInit();
            // alert('Appoved');
            //this.route.navigate(['/viewEntries']);
            //this.usersEntriesList=data.data;
        }, function (error) {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    ViewEntriesComponent.prototype.update = function (userEntries) {
        var _this = this;
        //alert('selected id is  '+userEntries.id);
        this.entriesService.update(userEntries).subscribe(function (data) {
            // alert('Edit');
            _this.route.navigate(['/updateEntries']);
            //this.usersEntriesList=data.data;
        }, function (error) {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    ViewEntriesComponent.prototype.Edit = function (valId) {
        this.entriesService.editVar = valId;
        this.route.navigate(['/editEntries']);
    };
    ViewEntriesComponent.prototype.Delete = function (valId) {
        var _this = this;
        //alert('selected id is  '+valId);
        this.entriesService.delete(valId).subscribe(function (data) {
            // alert('Deleted');
            _this.ngOnInit();
            //this.route.navigate(['/viewEntries']);
            //this.usersEntriesList=data.data;
        }, function (error) {
            console.log('Error: ', error);
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    ViewEntriesComponent.prototype.downloadfile = function (valId) {
        var _this = this;
        console.log('downloading file');
        this.entriesService.downloadfile(valId).subscribe(function (response) {
            //alert('downloaded'+response);
            _this.downloadFile(response);
        }, function (error) {
            console.log('Error: ');
            // this.alertService.warning("Invalid Username or Password") ;
        });
    };
    ViewEntriesComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/*' });
        var file = new File([blob], "photo5" + '.jpg', { type: 'application/*' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(file);
    };
    ViewEntriesComponent.prototype.logout = function () {
        localStorage.clear();
        var usrData = localStorage.getItem("userData");
        //console.log("user data in view "+usrData);
        //alert(usrData);
        this.route.navigate(['']);
    };
    ViewEntriesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] }
    ]; };
    ViewEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-entries',
            template: __webpack_require__(/*! raw-loader!./view-entries.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-entries/view-entries.component.html"),
            styles: [__webpack_require__(/*! ./view-entries.component.css */ "./src/app/view-entries/view-entries.component.css")]
        })
    ], ViewEntriesComponent);
    return ViewEntriesComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map