(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _layouts_manage_list_manage_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/manage-list/manage-list.component */ "./src/app/layouts/manage-list/manage-list.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _workboard_workboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workboard/workboard.component */ "./src/app/workboard/workboard.component.ts");








var ROUTES = [
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '', component: _layouts_manage_list_manage_list_component__WEBPACK_IMPORTED_MODULE_5__["ManageListComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
        children: [
            { path: 'detail/:project_id', component: _workboard_workboard_component__WEBPACK_IMPORTED_MODULE_7__["WorkboardComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            providers: [
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'TodoMana';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_module_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-module-ui.module */ "./src/app/common-module-ui.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_manage_list_manage_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/manage-list/manage-list.component */ "./src/app/layouts/manage-list/manage-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _services_user_user_info_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user/user-info-service.service */ "./src/app/services/user/user-info-service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_header_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/header-interceptor */ "./src/app/user/header-interceptor.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "./src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var _workboard_workboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workboard/workboard.component */ "./src/app/workboard/workboard.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _layouts_manage_list_manage_list_component__WEBPACK_IMPORTED_MODULE_7__["ManageListComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_15__["TaskComponent"],
                _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailComponent"],
                _workboard_workboard_component__WEBPACK_IMPORTED_MODULE_17__["WorkboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
                _common_module_ui_module__WEBPACK_IMPORTED_MODULE_4__["CommonModuleUi"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NgZorroAntdModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                _services_user_user_info_service_service__WEBPACK_IMPORTED_MODULE_10__["UserInfoServiceService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: _user_header_interceptor__WEBPACK_IMPORTED_MODULE_13__["HeaderInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-module-ui.module.ts":
/*!********************************************!*\
  !*** ./src/app/common-module-ui.module.ts ***!
  \********************************************/
/*! exports provided: CommonModuleUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModuleUi", function() { return CommonModuleUi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/fesm5/covalent-core-layout.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/fesm5/covalent-core-steps.js");
/* harmony import */ var _covalent_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @covalent/http */ "./node_modules/@covalent/http/fesm5/covalent-http.js");
/* harmony import */ var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @covalent/dynamic-forms */ "./node_modules/@covalent/dynamic-forms/fesm5/covalent-dynamic-forms.js");
/* harmony import */ var _covalent_core_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @covalent/core/search */ "./node_modules/@covalent/core/fesm5/covalent-core-search.js");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/fesm5/covalent-core-dialogs.js");
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @covalent/core/loading */ "./node_modules/@covalent/core/fesm5/covalent-core-loading.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
















var CommonModuleUi = /** @class */ (function () {
    function CommonModuleUi() {
    }
    CommonModuleUi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _covalent_core_layout__WEBPACK_IMPORTED_MODULE_6__["CovalentLayoutModule"],
                _covalent_core_steps__WEBPACK_IMPORTED_MODULE_7__["CovalentStepsModule"],
                _covalent_http__WEBPACK_IMPORTED_MODULE_8__["CovalentHttpModule"].forRoot(),
                _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_9__["CovalentDynamicFormsModule"],
                _covalent_core_search__WEBPACK_IMPORTED_MODULE_10__["CovalentSearchModule"],
                _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_11__["CovalentDialogsModule"],
                _covalent_core_loading__WEBPACK_IMPORTED_MODULE_12__["CovalentLoadingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _covalent_core_layout__WEBPACK_IMPORTED_MODULE_6__["CovalentLayoutModule"],
                _covalent_core_steps__WEBPACK_IMPORTED_MODULE_7__["CovalentStepsModule"],
                _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_9__["CovalentDynamicFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_11__["CovalentDialogsModule"],
                _covalent_core_search__WEBPACK_IMPORTED_MODULE_10__["CovalentSearchModule"],
                _covalent_core_loading__WEBPACK_IMPORTED_MODULE_12__["CovalentLoadingModule"],
            ],
            providers: [
                _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_11__["TdDialogService"],
                _covalent_core_loading__WEBPACK_IMPORTED_MODULE_12__["TdLoadingService"]
            ]
        })
    ], CommonModuleUi);
    return CommonModuleUi;
}());



/***/ }),

/***/ "./src/app/layouts/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\" class=\"header-login\" role=\"heading\">\n    <span>Quản lí nhân sự</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layouts/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/manage-list/manage-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layouts/manage-list/manage-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-space {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9tYW5hZ2UtbGlzdC9tYW5hZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbWFuYWdlLWxpc3QvbWFuYWdlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/manage-list/manage-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/manage-list/manage-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td-layout>\n  <td-navigation-drawer *ngIf=\"userInfo\" flex sidenavTitle=\"Tài khoản\" logo=\"menu\"\n    name=\"{{userInfo.lname}} {{userInfo.fname}}\" email=\"{{userInfo.email}}\">\n    <mat-nav-list>\n      <a mat-list-item>\n        <mat-icon>home</mat-icon>Trang chủ\n      </a>\n      <a mat-list-item>\n        <mat-icon>account_box</mat-icon>Thông tin tài khoản\n      </a>\n      <a mat-list-item *ngIf=\"isAdmin\">\n        <mat-icon>how_to_reg</mat-icon>Duyệt tài khoản\n      </a>\n      <a mat-list-item (click)=\"logout()\">\n        <mat-icon>exit_to_app</mat-icon>Đăng xuất\n      </a>\n\n    </mat-nav-list>\n    <div td-navigation-drawer-menu>\n      <mat-nav-list>\n      </mat-nav-list>\n    </div>\n  </td-navigation-drawer>\n  <td-layout-nav-list #navList [opened]=\"media.registerQuery('gt-sm') | async\" color=\"warn\"\n    [mode]=\"(media.registerQuery('gt-sm') | async) ? 'side' : 'over'\"\n    [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '500px' : '300px'\">\n    <div td-sidenav-toolbar-content layout=\"row\" layout-align=\"start center\">\n      <button mat-icon-button tdLayoutToggle>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon [routerLink]=\"['/']\" class=\"mat-icon-logo cursor-pointer\" svgIcon=\"assets:teradata\"></mat-icon>\n      <span [routerLink]=\"['/']\" class=\"cursor-pointer\">Quản lí công việc</span>\n    </div>\n    <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n      <button mat-icon-button tdLayoutNavListOpen [hideWhenOpened]=\"true\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n      <span flex></span>\n      <!-- <a routerLink=\"/invoices\" md-button class=\"mat-button\">Cá nhân</a> -->\n      <!-- <a routerLink=\"/customers\" md-button class=\"mat-button\">Nhóm</a> -->\n    </div>\n    <mat-nav-list td-sidenav-content [tdLayoutNavListClose]=\"!media.query('gt-sm')\">\n      <a mat-list-item  (click)='addProject()' color='warn'>\n        <mat-icon color='primary'>add</mat-icon>\n        <h3 matLine>Thêm dự án</h3>\n        <p matLine></p>\n      </a>\n      <a mat-list-item >\n          <mat-icon color='primary' >list</mat-icon>\n          <h3 matLine>Danh sách dự án</h3>\n          <p matLine></p>\n        </a>\n      <a mat-list-item *ngFor=\"let project of projects\" (click)='detailProject(project.projectId)'>\n        <mat-icon matListAvatar color='warn'>work</mat-icon>\n        <h3 matLine>{{project.projectName}}</h3>\n        <p matLine>{{project.description}}</p>\n        <br>\n        <button mat-icon-button color='primary' (click)='addMember(project.projectId)'>\n            <mat-icon color='primary' >person_add</mat-icon>\n        </button>\n        <button *ngIf=\"userInfo.username == project.ownerId\"mat-icon-button color='primary' (click)='deleteProject(project.projectId)'>\n            <mat-icon color='warn' >delete</mat-icon>\n        </button>\n        <button *ngIf=\"userInfo.username != project.ownerId\"mat-icon-button color='primary' (click)='leaveProject(project.projectId)'>\n            <mat-icon color='warn' >block</mat-icon>\n        </button>\n        <button mat-icon-button (click)='showListMember(project.projectId)'>\n            <mat-icon color='accent' >people</mat-icon>\n        </button>\n      </a>\n      <mat-divider [inset]=\"true\"></mat-divider>\n    </mat-nav-list>\n    <div tdMediaToggle=\"gt-xs\" style=\"height:100%;\">\n      <mat-card>\n        <router-outlet></router-outlet>\n        <!-- <app-user-detail></app-user-detail> -->\n        <!-- <app-workboard></app-workboard> -->\n      </mat-card>\n    </div>\n  </td-layout-nav-list>\n\n  <td-layout-footer>\n    <div layout=\"row\" layout-align=\"start center\">\n      <span class=\"mat-caption\">Copyright &copy; 2019 NAHUEN. All rights reserved</span>\n    </div>\n  </td-layout-footer>\n</td-layout>\n\n<!--  add projec -->\n<nz-modal [(nzVisible)]=\"isVisibleModalAddProject\" [nzTitle]=\"modalTitleAddPro\" [nzContent]=\"modalContentAddPro\" [nzFooter]=\"modalFooterAddPro\"\n  nzWidth=\"500\" nzHeight=\"500\" (nzOnCancel)=\"cancelModalAddPro()\">\n  <ng-template #modalTitleAddPro>\n    Thêm dự án\n  </ng-template>\n  <ng-template #modalContentAddPro>\n      <input nz-input placeholder=\"Tên dự án\" [(ngModel)]=\"projectName\" />\n      <br />\n      <br />\n      <input nz-input placeholder=\"Mô tả\" [(ngModel)]=\"descProject\" />\n    <!-- <app-address-map *ngIf=\"isVisibleModalMap\" [ownername]=\"ownername\" [area]=\"area\" [address]=\"address\" [lat]=\"lat\" [lng]=\"lng\" [image]=\"images\"> </app-address-map> -->\n  </ng-template>\n  <ng-template #modalFooterAddPro>\n      <button nz-button nzType=\"primary\" (click)=\"saveProject()\" >Thêm</button>\n    </ng-template>\n</nz-modal>\n\n\n<!-- add member -->\n<nz-modal [(nzVisible)]=\"isVisibleModalAddMem\" [nzTitle]=\"modalTitleAddMem\" [nzContent]=\"modalContentAddMem\" [nzFooter]=\"modalFooterAddMem\"\nnzWidth=\"500\" nzHeight=\"500\" (nzOnCancel)=\"cancelModalAddMem()\">\n<ng-template #modalTitleAddMem>\n  Thêm thành viên\n</ng-template>\n<ng-template #modalContentAddMem>\n    <input nz-input placeholder=\"Mã thành viên\" [(ngModel)]=\"memberId\" />\n    <br />\n</ng-template>\n<ng-template #modalFooterAddMem>\n    <button nz-button nzType=\"primary\" (click)=\"saveMem()\" >Thêm</button>\n  </ng-template>\n</nz-modal>\n\n<!-- lisy member -->\n<nz-modal [(nzVisible)]=\"isVisibleModalListMem\" [nzTitle]=\"modalTitleList\" [nzContent]=\"modalContentList\" [nzFooter]=\"modalFooterList\"\nnzWidth=\"500\" nzHeight=\"500\" (nzOnCancel)=\"cancelModalList()\">\n<ng-template #modalTitleList>\n  Danh sách thành viên\n</ng-template>\n<ng-template #modalContentList>\n  <h3 *ngFor=\"let member of listMember\">\n    <mat-icon>person</mat-icon>\n    {{member}}</h3>\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-template #modalFooterList>\n  </ng-template>\n</nz-modal>"

/***/ }),

/***/ "./src/app/layouts/manage-list/manage-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/manage-list/manage-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageListComponent", function() { return ManageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covalent_core_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core/media */ "./node_modules/@covalent/core/fesm5/covalent-core-media.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_user_user_info_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user-info-service.service */ "./src/app/services/user/user-info-service.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/dialog-service.service */ "./src/app/services/common/dialog-service.service.ts");








var ManageListComponent = /** @class */ (function () {
    function ManageListComponent(media, authService, userInfoSerivce, projecService, router, notify) {
        this.media = media;
        this.authService = authService;
        this.userInfoSerivce = userInfoSerivce;
        this.projecService = projecService;
        this.router = router;
        this.notify = notify;
        this.isAdmin = false;
        this.projects = [];
        this.isVisibleModalAddProject = false;
        // for list mem
        this.listMember = [];
        this.isVisibleModalListMem = false;
        this.isVisibleModalAddMem = false;
    }
    ManageListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userInfoSerivce.getUserInfo().subscribe(function (resData) {
                            console.log('1');
                            _this.userInfo = resData;
                            if (_this.userInfo.roleId && _this.userInfo.roleId == "1") {
                                _this.isAdmin = true;
                            }
                            else {
                                _this.isAdmin = false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.projecService.getListProject().subscribe(function (res) {
                                if (res.code == '1000') {
                                    res.listProject.forEach(function (proMember) {
                                        _this.projects.push(proMember.project);
                                    });
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageListComponent.prototype.updateListProject = function () {
        var _this = this;
        this.projects = [];
        this.projecService.getListProject().subscribe(function (res) {
            if (res.code == '1000') {
                res.listProject.forEach(function (proMember) {
                    _this.projects.push(proMember.project);
                });
            }
        });
    };
    // isRoleAdmin() : boolean{
    //   if( this.userInfo.role && this.userInfo.role == '1'){
    //     return true;
    //   }
    //   return false;
    // }
    ManageListComponent.prototype.detailProject = function (projectId) {
        console.log(projectId);
        this.router.navigate(['/detail/' + projectId]);
        // this.router.navigate(['/login']);
    };
    ManageListComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ManageListComponent.prototype.deleteProject = function (projectId) {
    };
    ManageListComponent.prototype.leaveProject = function (projectId) {
    };
    ManageListComponent.prototype.addProject = function (projectId) {
        this.isVisibleModalAddProject = true;
    };
    ManageListComponent.prototype.cancelModalAddPro = function () {
        this.isVisibleModalAddProject = false;
    };
    ManageListComponent.prototype.saveProject = function () {
        var _this = this;
        if (this.projectName && this.descProject) {
            this.isVisibleModalAddProject = false;
            var dataReq = {
                "project_name": this.projectName,
                "type": "PRIVATE",
                "description": this.descProject
            };
            this.projecService.addProject(dataReq).subscribe(function (res) {
                if (res.code == '1000') {
                    _this.notify.showNotify('success', 'Thành công', 'Thêm dự án thành công!');
                    _this.updateListProject();
                }
                else {
                    _this.notify.showNotify('error', 'Lỗi ', 'Có lỗi khi thêm!');
                }
            });
        }
        else {
            this.notify.showNotify('error', 'Lỗi', 'Nhập đủ thông tin');
        }
    };
    ManageListComponent.prototype.addMember = function (projectId) {
        this.projectIdForAddMem = projectId;
        this.isVisibleModalAddMem = true;
    };
    ManageListComponent.prototype.cancelModalAddMem = function () {
        this.isVisibleModalAddMem = false;
    };
    ManageListComponent.prototype.saveMem = function () {
        var _this = this;
        if (this.projectIdForAddMem && this.memberId) {
            this.cancelModalAddMem();
            this.projecService.addMember(this.projectIdForAddMem, this.memberId).subscribe(function (res) {
                if (res.code == '1000') {
                    _this.notify.showNotify('success', 'Thành công', 'Thêm thành viên thành công!');
                }
                else {
                    if (res.code == '1111') {
                        _this.notify.showNotify('error', 'Lỗi ', 'Không tìn thấy người dùng ' + _this.memberId);
                    }
                    _this.notify.showNotify('error', 'Lỗi ', 'Có lỗi khi thêm!');
                }
            });
        }
        else {
            this.notify.showNotify('error', 'Lỗi', 'Nhập đủ thông tin');
        }
    };
    ManageListComponent.prototype.showListMember = function (projectId) {
        var _this = this;
        this.projecService.getDetailProject(projectId).subscribe(function (res) {
            if (res.code == '1000') {
                _this.listMember = res.project.listMember.split(',');
            }
        });
        this.isVisibleModalListMem = true;
    };
    ManageListComponent.prototype.cancelModalList = function () {
        this.isVisibleModalListMem = false;
    };
    ManageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'layouts-manage-list',
            template: __webpack_require__(/*! ./manage-list.component.html */ "./src/app/layouts/manage-list/manage-list.component.html"),
            providers: [
                _covalent_core_media__WEBPACK_IMPORTED_MODULE_2__["TdMediaService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"],
            ],
            styles: [__webpack_require__(/*! ./manage-list.component.css */ "./src/app/layouts/manage-list/manage-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covalent_core_media__WEBPACK_IMPORTED_MODULE_2__["TdMediaService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"],
            _services_user_user_info_service_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoServiceService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_7__["DialogServiceService"]])
    ], ManageListComponent);
    return ManageListComponent;
}());



/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/layouts/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layouts/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/layouts/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/dialog-service.service */ "./src/app/services/common/dialog-service.service.ts");
/* harmony import */ var _common_loading_effect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/loading-effect.service */ "./src/app/services/common/loading-effect.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








var server;
server = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server;
var loginApi = server + "oauth/token";
var registrationApi = server + "register";
var getStatusApi = server + "getStatusUser";
var verifyApi = server + "verify?verify_code=";
var httpOptionsAuth = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic bG9naW5zZXJ2aWNlOmRldmdsYW4tc2VjcmV0'
    })
};
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, http, dialogService, loadingService) {
        this.router = router;
        this.http = http;
        this.dialogService = dialogService;
        this.loadingService = loadingService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (!this.isGuest()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    AuthGuardService.prototype.isGuest = function () {
        if (localStorage.getItem('access_token')) {
            // let refreshToken = {
            //   'grant_type': 'refresh_token',
            //   'refesh_token': this.cookieService.get('refresh_token'),
            // }
            // this.http.post<jwtData>(loginApi, refreshToken, httpOptions).subscribe(tokenData => {
            //   localStorage.setItem('acces_token', tokenData.access_token);
            //   localStorage.setItem('refresh_token', tokenData.refresh_token);
            // }, error => {
            //   return true;
            // });
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService.prototype.getUser = function () {
        // return username;
    };
    AuthGuardService.prototype.login = function (usernameLg, passwordLg) {
        var _this = this;
        var user = {
            'grant_type': 'password',
            'username': usernameLg,
            'password': passwordLg,
        };
        var userLoginDataEncodedUrl = Object.keys(user).filter(function (k) { return user.hasOwnProperty(k); }).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(user[k]); }).join('&');
        this.loadingService.showLoading();
        this.http.post(loginApi, userLoginDataEncodedUrl, httpOptionsAuth).subscribe(function (tokenData) {
            _this.loadingService.stopLoading();
            if (!tokenData) {
                _this.dialogService.openAlert('Tài khoản và mật khẩu không chính xác!');
            }
            else {
                _this.cookieTokenData(tokenData, usernameLg);
            }
        }, function (error) {
            _this.loadingService.stopLoading();
            _this.dialogService.openAlert('Không thể đăng nhập!');
        });
        this.loadingService.showLoading();
        this.http.post(getStatusApi, JSON.stringify({ "username": user.username }), httpOptions)
            .subscribe(function (res) {
            _this.loadingService.stopLoading();
            if (res.status == 'VERIFY') {
                _this.router.navigate(['']);
            }
            else {
                localStorage.clear();
                _this.dialogService.openPrompt('Xác thưc tài khoản', 'Mã xác nhận đã được gửi vào email của bạn. Nhập mã xác nhận vào đây!')
                    .afterClosed().subscribe(function (value) {
                    if (value) {
                        var httpOptions_1 = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                'Authorization': 'Bearer' + localStorage.getItem('access_token'),
                            })
                        };
                        _this.loadingService.showLoading();
                        _this.http.get(verifyApi + value.toString(), httpOptions_1).subscribe(function (res) {
                            _this.loadingService.stopLoading();
                            if (res.code == '1000') {
                                _this.dialogService.openAlert('Đăng kí thành công!');
                                _this.router.navigate(['']);
                            }
                            else {
                                _this.dialogService.openAlert('Không thể xác thực!');
                            }
                        });
                    }
                    else {
                        _this.dialogService.openAlert('Không thể xác thực!');
                    }
                });
            }
        });
        this.loadingService.stopLoading();
    };
    AuthGuardService.prototype.cookieTokenData = function (tokenData, username) {
        localStorage.clear();
        localStorage.setItem('username', username);
        localStorage.setItem('access_token', tokenData.access_token);
        localStorage.setItem('refresh_token', tokenData.refresh_token);
    };
    AuthGuardService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    AuthGuardService.prototype.registration = function (username, password, email, fname, lname) {
        var _this = this;
        var dataRegister = {
            'username': username,
            'password': password,
            'email': email,
            'firstname': fname,
            'lastname': lname,
        };
        this.loadingService.showLoading();
        this.http.post(registrationApi, JSON.stringify(dataRegister), httpOptions)
            .subscribe(function (res) {
            _this.loadingService.stopLoading();
            localStorage.clear();
            if (res.code == "1002") {
                _this.dialogService.openAlert('Email đã tồn tại! Vui lòng sử dụng email khác.');
            }
            if (res.code == "1000") {
                _this.dialogService.openPrompt('Xác thực', 'Kiểm tra mã mã xác nhận đươc gửi trong mail của bạn!');
                _this.router.navigate(['login']);
            }
            if (res.code == "1103") {
                _this.dialogService.openAlert('Không thể gửi mã xác thực tới ' + dataRegister.email);
            }
            if (res.code == "1100") {
                _this.dialogService.openAlert('Tên đăng nhập ' + dataRegister.username + ' đã được sử dụng!');
            }
        });
        ;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _common_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__["DialogServiceService"],
            _common_loading_effect_service__WEBPACK_IMPORTED_MODULE_4__["LoadingEffectService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/common/dialog-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/common/dialog-service.service.ts ***!
  \***********************************************************/
/*! exports provided: DialogServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogServiceService", function() { return DialogServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/fesm5/covalent-core-dialogs.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var DialogServiceService = /** @class */ (function () {
    function DialogServiceService(dialogService, notify) {
        this.dialogService = dialogService;
        this.notify = notify;
    }
    DialogServiceService.prototype.openAlert = function (message) {
        this.dialogService.openAlert({
            message: message,
            disableClose:  true || false,
            // viewContainerRef: ViewContainerRef, //OPTIONAL
            title: 'Thông báo!',
            closeButton: 'Đóng',
            width: '450px',
        });
    };
    DialogServiceService.prototype.openPrompt = function (title, message) {
        return this.dialogService.openPrompt({
            message: message,
            disableClose:  true || false,
            // viewContainerRef: this.viewContainerRef, //OPTIONAL
            title: title,
            value: '',
            cancelButton: 'Huỷ',
            acceptButton: 'Đồng ý',
            width: '500px',
        });
    };
    DialogServiceService.prototype.showNotify = function (type, title, content) {
        this.notify.create(type, title, content);
    };
    DialogServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__["TdDialogService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"]])
    ], DialogServiceService);
    return DialogServiceService;
}());



/***/ }),

/***/ "./src/app/services/common/loading-effect.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/common/loading-effect.service.ts ***!
  \***********************************************************/
/*! exports provided: LoadingEffectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingEffectService", function() { return LoadingEffectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core/loading */ "./node_modules/@covalent/core/fesm5/covalent-core-loading.js");



var LoadingEffectService = /** @class */ (function () {
    function LoadingEffectService(loadingService) {
        this.loadingService = loadingService;
        this.loadingService.create({
            name: 'loading',
            mode: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingMode"].Indeterminate,
            type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingType"].Linear,
            color: 'warn',
        });
    }
    LoadingEffectService.prototype.showLoading = function () {
        this.loadingService.register('loading');
    };
    LoadingEffectService.prototype.stopLoading = function () {
        this.loadingService.resolve('loading');
    };
    LoadingEffectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["TdLoadingService"]])
    ], LoadingEffectService);
    return LoadingEffectService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Authorization": "Bearer " + localStorage.getItem('access_token'),
        "Content-Type": "application/json"
    })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getListProject = function () {
        var data = {
            'owner': localStorage.getItem('username'),
            'token': localStorage.getItem('access_token'),
            "status_id": "CREATED",
            "type": "PRIVATE"
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'project/listpro', data, httpOptions);
    };
    ProjectService.prototype.getDetailProject = function (projectId) {
        var project = {
            'projectId': projectId
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'project/detailPro', project, httpOptions);
    };
    ProjectService.prototype.addProject = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'project/addpro', data, httpOptions);
    };
    ProjectService.prototype.addTask = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'task/addtask', data, httpOptions);
    };
    ProjectService.prototype.updateTask = function (taskId, statusId) {
        var updateData = {
            "taskId": taskId,
            "statusId": statusId
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'project/updateTask', updateData);
    };
    ProjectService.prototype.addMember = function (projectId, memberId) {
        var addMem = {
            "projectId": projectId,
            "memberId": memberId
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + 'project/addMember', addMem, httpOptions);
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/user/user-info-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/user/user-info-service.service.ts ***!
  \************************************************************/
/*! exports provided: UserInfoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoServiceService", function() { return UserInfoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var server = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server;
var userInfoApi = server + "getUserDetailInfo";
var getStatusApi = server + "getUserDetailInfo";
var UserInfoServiceService = /** @class */ (function () {
    function UserInfoServiceService(http) {
        this.http = http;
    }
    UserInfoServiceService.prototype.getUserInfo = function () {
        //     let api = "https://thongtindoanhnghiep.co/api/city";
        //     const custom_http_option = {
        //    headers: new HttpHeaders({
        //      'Content-Type': 'application/x-www-form-urlencoded',
        //      'Access-Control-Allow-Origin' : '*',
        //      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        //  })};
        //  this.http.get<any>(api, custom_http_option).subscribe( res =>{
        //       alert(res)
        //     });
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
                "Content-Type": "application/json"
            })
        };
        var res;
        return this.http.post(userInfoApi, JSON.stringify({ "username": localStorage.getItem('username') }), httpOptions);
    };
    UserInfoServiceService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };
    ;
    UserInfoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserInfoServiceService);
    return UserInfoServiceService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  task works!\n</p>\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/user/header-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/user/header-interceptor.ts ***!
  \********************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_common_loading_effect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common/loading-effect.service */ "./src/app/services/common/loading-effect.service.ts");
/* harmony import */ var _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/dialog-service.service */ "./src/app/services/common/dialog-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor(loader, dialogService) {
        this.loader = loader;
        this.dialogService = dialogService;
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loader.showLoading();
        var token = localStorage.getItem('access_token');
        var clonedRequest = req.clone({
        // headers: req
        // 	.headers
        // 	.set('Authorization', token ? `Bearer ${ token}` : '')
        });
        return next.handle(clonedRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.loader.stopLoading();
            }
        }, function (err) {
            _this.handleAuthError(err);
        }));
    };
    // intercept(req : HttpRequest <any>, next : HttpHandler) : Observable <HttpEvent<any>> {
    // 	// Clone the request to add the new header
    // 	const token = new TokenStorage();
    // 	const tokenVal = token.getToken();
    // 	const clonedRequest = req.clone({
    // 	headers: req
    // 		.headers
    // 		.set('Authorization', tokenVal ? `Bearer ${ tokenVal}` : '')
    // });
    // Pass the cloned request instead of the original request to the next handle
    // return next.handle(clonedRequest);
    HeaderInterceptor.prototype.handleAuthError = function (error) {
        this.loader.stopLoading();
        // if (error.status == '401') {
        // 	this.dialogService.openAlert('Kiểm tra lại mật khẩu và email đang đăng nhập!')
        // }
    };
    HeaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_loading_effect_service__WEBPACK_IMPORTED_MODULE_3__["LoadingEffectService"],
            _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["DialogServiceService"]])
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .login-card {\n    width: 400px;\n    margin: 5% auto;\n  }\n  \n  .mat-card-title {\n    font-size: 18px;\n  }\n  \n  .mat-form-field{\n    font-size: 17px;\n  }\n  \n  .header-login{\n    display: flex;\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICBcbiAgLmxvZ2luLWNhcmQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGR7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5cbiAgLmhlYWRlci1sb2dpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<mat-card class=\"login-card\">\n  <mat-card-header>\n    <mat-card-title>Đăng nhập</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Tài khoản\" [(ngModel)]=\"username\" name=\"username\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Mật khẩu\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n        </mat-form-field></td>\n      </tr></table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"warn\">Đăng nhập</button>\n    <a [routerLink]=\"['/register']\"> hoặc đăng ký tài khoản!</a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");




// import {Au} from '../../services/auth-guard.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routes, authService) {
        this.routes = routes;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.authService.login(this.username, this.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n   \n  .full-width {\n    width: 100%;\n  }\n   \n  .example-icon {\n    padding: 0 14px;\n  }\n   \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n   \n  .login-card {\n    width: 600px;\n    margin: 5% auto;\n  }\n   \n  .mat-card-title {\n    font-size: 18px;\n  }\n   \n  .mat-form-field{\n    font-size: 17px;\n  }\n   \n  .header-login{\n    display: flex;\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICBcbiAgLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICBcbiAgLmxvZ2luLWNhcmQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGR7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5cbiAgLmhlYWRlci1sb2dpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card class=\"login-card\">\n  <mat-card-header>\n    <mat-card-title>Đăng kí</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"my-form\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Tên</mat-label>\n        <input matInput placeholder=\"First name\" name=\"fname\" [(ngModel)]=\"fname\"required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Họ</mat-label>\n        <input matInput placeholder=\"Last Name\" name=\"lname\" [(ngModel)]=\"lname\"required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n          <mat-label>Tên đăng nhập</mat-label>\n          <input matInput placeholder=\"Last Name\" name=\"username\" [(ngModel)]=\"username\"required>\n        </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" required>\n      </mat-form-field>\n      <!-- <md-error *ngIf=\"email\">\n          Email không hợp lệ\n          </md-error>  -->\n      <mat-form-field class=\"full-width\">\n        <mat-label>Địa chỉ</mat-label>\n        <input matInput placeholder=\"Address\" name=\"address\" [(ngModel)]=\"address\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Mật khẩu</mat-label>\n        <input matInput placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n          <mat-label>Nhập lại mật khẩu</mat-label>\n          <input matInput placeholder=\"Password\" name=\"passwordConf\" type=\"password\" [(ngModel)]=\"passwordConf\" required>\n        </mat-form-field>\n      <section class=\"example-section\">\n        <label class=\"example-margin\">Giới tính: </label>\n        <mat-radio-group [(ngModel)]=\"gender\" name=\"gender\" >\n          <mat-radio-button class=\"example-margin\" value=\"after\"> Nam </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"before\"> Nữ </mat-radio-button>\n        </mat-radio-group>\n      </section>\n      <mat-form-field>\n        <mat-label>Ngày sinh</mat-label>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Chọn ngày tháng\" [(ngModel)]=\"dateBirth\" name=\"dateBirth\" >\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions >\n    <button mat-raised-button (click)=\"register()\" color=\"warn\">Đăng kí</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common/dialog-service.service */ "./src/app/services/common/dialog-service.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, dialogService) {
        this.authService = authService;
        this.dialogService = dialogService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        if (this.password != this.passwordConf) {
            this.dialogService.openAlert('Hai mật khẩu không trùng nhau!');
        }
        else {
            this.authService.registration(this.username, this.password, this.email, this.fname, this.lname);
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"], _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__["DialogServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    min-width: 200px;\n    max-width: 400px;\n  }\n\n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cblxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Thông tin cá nhân</mat-card-title>\n    <mat-card-subtitle>namnguyen</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <!-- <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n          <mat-grid-tile\n              *ngFor=\"let tile of tiles\"\n              [colspan]=\"tile.cols\"\n              [rowspan]=\"tile.rows\"\n              [style.background]=\"tile.color\">\n            {{tile.text}}\n          </mat-grid-tile>\n        </mat-grid-list> -->\n    <mat-grid-list cols=\"3\" rowHeight=\"20px\">\n      <mat-grid-tile>\n        <label class=\"mat-body\">Tên đầy đủ: </label>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <p class=\"mat-body-strong\">Nguyễn Danh Nam</p>\n      </mat-grid-tile> \n      <mat-grid-tile>\n         <mat-icon>edit</mat-icon>\n        </mat-grid-tile> \n       </mat-grid-list>\n  </mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card-actions>\n      <div fxFlex></div>\n      <button mat-button>OK</button>\n      <button mat-button>ACTION 2</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user/user-detail/user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");




var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _common_module_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-module-ui.module */ "./src/app/common-module-ui.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserRoutingModule"],
                _common_module_ui_module__WEBPACK_IMPORTED_MODULE_6__["CommonModuleUi"],
            ],
            bootstrap: [],
            providers: [
                src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/workboard/workboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/workboard/workboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    width: 400px;\n    max-width: 100%;\n    margin: 0 25px 25px 0;\n    display: inline-block;\n    vertical-align: top;\n  }\n  \n  .example-list {\n    border: solid 1px #ccc;\n    min-height: 60px;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n    display: block;\n  }\n  \n  .example-box {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n  }\n  \n  .cdk-drag-preview {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .cdk-drag-placeholder {\n    opacity: 0;\n  }\n  \n  .cdk-drag-animating {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .example-box:last-child {\n    border: none;\n  }\n  \n  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .header{\n    font-size: 16px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2JvYXJkL3dvcmtib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjs7a0RBRThDO0VBQ2hEOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4REFBc0Q7SUFBdEQsc0RBQXNEO0lBQXRELDBHQUFzRDtFQUN4RDs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC93b3JrYm9hcmQvd29ya2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICAuZXhhbXBsZS1saXN0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG5cbiAgLmhlYWRlcntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/workboard/workboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/workboard/workboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar *ngIf=\"projectData\" class=\"header\" color='primary'>\n    <mat-icon >work</mat-icon>{{projectData.projectName}}</mat-toolbar>\n<!-- <cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"> -->\n    <div cdkDropListGroup >\n        <div class=\"example-container\">\n          <div class=\"example-box\">\n              <h3>Danh sách công việc</h3>\n              <button mat-mini-fab color=\"primary\" (click)=\"addTask()\" matTooltip=\"Thêm\">\n                <mat-icon>add</mat-icon>\n              </button>\n          </div>\n          <div\n            cdkDropList\n            [cdkDropListData]=\"todo\"\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\">\n            <div\n          [cdkDragDisabled]=\"true\"\n             class=\"example-box\" *ngFor=\"let item of todoTask\" cdkDrag>{{item.taskCode }} - {{item.taskName }} \n             <button mat-icon-button color='primary' (click)='completeTask(item.taskId)'>\n              <mat-icon color='primary' >check</mat-icon>\n          </button>\n              <button mat-icon-button color='primary' (click)='deleteTask(item.taskId)'>\n                <mat-icon color='warn' >delete</mat-icon>\n            </button>\n            </div>\n          </div>\n        </div>\n      \n        <div class=\"example-container\">\n          <div class=\"example-box\">\n              <h3>Hoàn thành</h3>\n              <!-- <button mat-mini-fab color=\"primary\" (click)=\"addTask()\" matTooltip=\"Thêm\">\n                <mat-icon>add</mat-icon>\n              </button> -->\n          </div>\n          <div\n            cdkDropList\n            [cdkDropListData]=\"done\"\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\">\n            <div\n            [cdkDragDisabled]=\"true\"\n             class=\"example-box\" *ngFor=\"let item of todoDone\" cdkDrag>{{item.taskCode }} - {{item.taskName }}</div>\n          </div>\n        </div>\n      </div>\n<!-- </cdk-virtual-scroll-viewport> -->\n\n<nz-modal [(nzVisible)]=\"isVisibleModalAddTask\" [nzTitle]=\"modalTitleAddTask\" [nzContent]=\"modalContentAddTask\" [nzFooter]=\"modalFooterAddTask\"\n  nzWidth=\"600\" nzHeight=\"600\" (nzOnCancel)=\"cancelModalAddPro()\">\n  <ng-template #modalTitleAddTask>\n    Thêm công việc\n  </ng-template>\n  <ng-template #modalContentAddTask>\n      <input nz-input placeholder=\"Tên công việc\" [(ngModel)]=\"taskName\" />\n      <br />\n      <br />\n      <!-- <input nz-input placeholder=\"Người thực hiện\" [(ngModel)]=\"assigned\" /> -->\n      <nz-select style=\"width: 200px;\" [(ngModel)]=\"assigned\" nzAllowClear nzPlaceHolder=\"Người thực hiện\">\n        <nz-option *ngFor=\"let member of listMember\" nzValue=\"{{member}}\" nzLabel=\"{{member}}\">\n        </nz-option>\n      </nz-select>\n      <br />\n      <br />\n      <input nz-input placeholder=\"Thời hạn\" [(ngModel)]=\"dueDate\" />\n      <!-- <nz-date-picker [(ngModel)]=\"dueDate\" ></nz-date-picker> -->\n      <br />\n      <br />\n      <input nz-input placeholder=\"Mô tả\" [(ngModel)]=\"descTask\" />\n    <!-- <app-address-map *ngIf=\"isVisibleModalMap\" [ownername]=\"ownername\" [area]=\"area\" [address]=\"address\" [lat]=\"lat\" [lng]=\"lng\" [image]=\"images\"> </app-address-map> -->\n  </ng-template>\n  <ng-template #modalFooterAddTask>\n      <button nz-button nzType=\"primary\" (click)=\"saveTask()\" >Thêm</button>\n    </ng-template>\n</nz-modal>"

/***/ }),

/***/ "./src/app/workboard/workboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/workboard/workboard.component.ts ***!
  \**************************************************/
/*! exports provided: WorkboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboardComponent", function() { return WorkboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/dialog-service.service */ "./src/app/services/common/dialog-service.service.ts");





var WorkboardComponent = /** @class */ (function () {
    function WorkboardComponent(route, router, projectService, notify) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.notify = notify;
        this.todoTask = [];
        this.todoDone = [];
        this.listMember = [];
        // for add task
        this.isVisibleModalAddTask = false;
    }
    WorkboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['project_id'];
            if (!_this.projectId)
                _this.router.navigate(['']);
            _this.getProjectData(_this.projectId);
        });
    };
    WorkboardComponent.prototype.getProjectData = function (projectId) {
        var _this = this;
        this.todoTask = [];
        this.todoDone = [];
        this.listMember = [];
        this.projectService.getDetailProject(projectId).subscribe(function (res) {
            _this.todoDone = [];
            _this.todoTask = [];
            _this.projectData = res.project;
            var listTask = res.listTask;
            // alert(res.projectlistMember)
            _this.listMember = _this.projectData.listMember.split(',');
            if (listTask) {
                // listTask.forEach( (task : any) =>{
                //   if(task.status == 'CREATED') {
                //     return true;
                //   }
                //   if(task.status == 'DONE'){
                //     this.todoDone.push(task);
                //     return false;
                //   }
                //   return false;
                // })
                _this.todoTask = listTask.filter(function (item) {
                    if (item.statusId == 'CREATED') {
                        return true;
                    }
                    if (item.statusId == 'DONE') {
                        _this.todoDone.push(item);
                        return false;
                    }
                    return false;
                });
            }
        });
    };
    WorkboardComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            // this.updateStatusTask(this.todoDone[event.previousIndex].taskId, "CREATED");
            // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            // alert('chuyen dan');
            // alert(this.todoTask[event.previousIndex].taskId);
            var x = this.todoDone.indexOf(this.todoDone[event.previousIndex]);
            if (x < 0) {
                // alert('tu ben created sang')
                this.updateStatusTask(this.todoTask[event.previousIndex].taskId, "DONE");
                // this.todoDone.push(this.todoTask[event.previousIndex].taskId);
            }
            else {
                // alert('tu ben done sang' + x);
                this.updateStatusTask(this.todoDone[event.previousIndex].taskId, "CREATED");
                // this.todoTask.push(this.todoDone[event.previousIndex].taskId);
            }
            // transferArrayItem(event.previousContainer.data,
            //                   event.container.data,
            //                   event.previousIndex,
            //                   event.currentIndex);
        }
    };
    WorkboardComponent.prototype.completeTask = function (taskId) {
        this.updateStatusTask(taskId, 'DONE');
    };
    WorkboardComponent.prototype.updateStatusTask = function (taskId, statusId) {
        var _this = this;
        this.projectService.updateTask(taskId, statusId).subscribe(function (res) {
            // window.location.reload();
            // this.todoDone = [];
            // this.todoTask = [];
            // this.ngOnInit()
            _this.getProjectData(_this.projectId);
        });
    };
    WorkboardComponent.prototype.addTask = function () {
        this.isVisibleModalAddTask = true;
    };
    WorkboardComponent.prototype.cancelModalAddPro = function () {
        this.isVisibleModalAddTask = false;
    };
    WorkboardComponent.prototype.saveTask = function () {
        var _this = this;
        if (this.taskName && this.assigned && this.descTask && this.dueDate) {
            this.isVisibleModalAddTask = false;
            var dataReq = {
                "project_id": this.projectId,
                "task_name": this.taskName,
                "assigned": this.assigned,
                "due_date": this.dueDate,
                "tag": "DEV",
                "description": this.descTask
            };
            this.projectService.addTask(dataReq).subscribe(function (res) {
                if (res.code == '1000') {
                    _this.ngOnInit();
                    _this.notify.showNotify('success', 'Thành công', 'Thêm công việc thành công!');
                }
                else {
                    _this.notify.showNotify('error', 'Lỗi ', 'Có lỗi khi thêm!');
                }
            });
        }
        else {
            this.notify.showNotify('error', 'Lỗi', 'Nhập đủ thông tin');
        }
    };
    WorkboardComponent.prototype.deleteTask = function (taskId) {
        this.updateStatusTask(taskId, 'DELETED');
    };
    WorkboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workboard',
            template: __webpack_require__(/*! ./workboard.component.html */ "./src/app/workboard/workboard.component.html"),
            styles: [__webpack_require__(/*! ./workboard.component.css */ "./src/app/workboard/workboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _services_common_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["DialogServiceService"]])
    ], WorkboardComponent);
    return WorkboardComponent;
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
    production: false,
    server: "http://localhost:9090/"
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

module.exports = __webpack_require__(/*! /Users/apple/Documents/HRMana-WebappAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map