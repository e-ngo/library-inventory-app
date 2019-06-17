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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change/change.component */ "./src/app/change/change.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");






var routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'change', component: _change_change_component__WEBPACK_IMPORTED_MODULE_3__["ChangeComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-body fill\">\n  <header>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <a class=\"navbar-brand\" href=\"#\">Main Library Inventory</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/overview\">Overview</a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/search\">Search</a>\n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/change\">Change</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n\n  <router-outlet></router-outlet>\n\n  <footer class=\"page-footer font-small blue\">\n    <div class=\"footer-copyright text-center\">\n      Created by E\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-body {\n  background-color: #00485c; }\n\n.blue {\n  background-color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvRGVza3RvcC9Ob2RlUHJvamVjdHMvbGlicmFyeS1pbnZlbnRvcnktYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQXlCLEVBQUE7O0FBSzNCO0VBQ0Usc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hcHAtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ4NWM7XG59XG4ucGFnZS1mb290ZXIge1xuXG59XG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4iXX0= */"

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
        this.title = 'library-inventory-app';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _change_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change/change.component */ "./src/app/change/change.component.ts");








// declarations are internal dependencies.
// imports are external dependencies.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _change_change_component__WEBPACK_IMPORTED_MODULE_7__["ChangeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change/change.component.html":
/*!**********************************************!*\
  !*** ./src/app/change/change.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fill\">\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/change/change.component.scss":
/*!**********************************************!*\
  !*** ./src/app/change/change.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS9jaGFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/change/change.component.ts":
/*!********************************************!*\
  !*** ./src/app/change/change.component.ts ***!
  \********************************************/
/*! exports provided: ChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeComponent", function() { return ChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeComponent = /** @class */ (function () {
    function ChangeComponent() {
    }
    ChangeComponent.prototype.ngOnInit = function () {
    };
    ChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change',
            template: __webpack_require__(/*! ./change.component.html */ "./src/app/change/change.component.html"),
            styles: [__webpack_require__(/*! ./change.component.scss */ "./src/app/change/change.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangeComponent);
    return ChangeComponent;
}());



/***/ }),

/***/ "./src/app/item.ts":
/*!*************************!*\
  !*** ./src/app/item.ts ***!
  \*************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(name, room, quantity) {
        this.name = name;
        this.room = room;
        this.quantity = quantity;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/mock-items.ts":
/*!*******************************!*\
  !*** ./src/app/mock-items.ts ***!
  \*******************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/app/item.ts");

var items = [
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Keyboard", "Room 1", 10),
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Monitor", "Room 2", 1),
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Mouse", "Room 1", 50),
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Desktop", "Room 5", 0),
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Laptops", "Room 7", 2),
    new _item__WEBPACK_IMPORTED_MODULE_0__["Item"]("Keyboard", "Room 2", 2)
];


/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fill\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 filter-suggestions\">\n      <div class=\"col-sm-12 filter-title\">\n        <h4> Filter </h4>\n      </div>\n\n      <div class=\"col-sm-12 filter-body\">\n        <div class=\"form-title\">\n          <h5> Items </h5>\n\n        </div>\n        <div class=\"form-check\" *ngFor=\"let item of itemSet\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"{{item}}\" (click)=\"handleItemFilterClick(item)\">\n          <label class=\"form-check-label\" for=\"{{ item }}\">\n            {{ item }}\n          </label>\n        </div>\n\n        <div class=\"form-title\">\n          <h5> Rooms </h5>\n        </div>\n        <div class=\"form-check\" *ngFor=\"let room of roomSet\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"{{room}}\" (click)=\"handleRoomFilterClick(room)\">\n          <label class=\"form-check-label\" for=\"{{room}}\">\n            {{ room }}\n          </label>\n        </div>\n        <div class=\"col-sm-8 apply-button\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">Apply</button>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-8 items\">\n      <div class=\"col-sm-12 filter-title\">\n        <h4> Inventory </h4>\n      </div>\n\n      <div class=\"col-sm-12 filter-body\">\n\n\n        <table class=\"table\">\n\n          <thead>\n            <th scope=\"col\">Item</th>\n            <th scope=\"col\">Amount</th>\n            <th scope=\"col\">Room</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of items\">\n              <td>{{item.name}}</td>\n              <td>{{item.quantity}}</td>\n              <td>{{item.room}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/overview/overview.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-suggestions {\n  background-color: grey;\n  text-align: center; }\n\n.items {\n  background-color: green; }\n\n.apply-button {\n  align-items: center;\n  text-align: center;\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvRGVza3RvcC9Ob2RlUHJvamVjdHMvbGlicmFyeS1pbnZlbnRvcnktYXBwL3NyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zdWdnZXN0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW1zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uYXBwbHktYnV0dG9uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-items */ "./src/app/mock-items.ts");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
        this.items = _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"]; // Holds current state of items displayed
        this.itemSet = [];
        this.roomSet = [];
        this.filterSet = {
            itemsSet: [],
            roomsSet: []
        };
    }
    OverviewComponent.prototype.handleItemFilterClick = function (filterName) {
        var node = document.getElementById(filterName);
        console.log(node);
        if (node.checked) {
            this.filterSet.itemsSet.push(filterName);
        }
        else {
            this.filterSet.itemsSet.splice(this.filterSet.itemsSet.indexOf(filterName), 1);
        }
    };
    OverviewComponent.prototype.handleRoomFilterClick = function (filterName) {
        var node = document.getElementById(filterName);
        console.log(node);
        if (node.checked) {
            console.log("Checked");
            this.filterSet.roomsSet.push(filterName);
        }
        else {
            console.log("NOt checked");
            this.filterSet.roomsSet.splice(this.filterSet.roomsSet.indexOf(filterName), 1);
        }
    };
    OverviewComponent.prototype.apply = function () {
        this.renderItemView();
    };
    OverviewComponent.prototype.renderItemView = function () {
        console.log("Rendering item view on ");
        console.log(this.filterSet);
        var itemSet = this.filterSet.itemsSet;
        var roomSet = this.filterSet.roomsSet;
        if (this.filterSet.itemsSet.length == 0 && this.filterSet.roomsSet.length == 0) {
            console.log("Show everything");
            this.items = _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"];
            return;
        }
        var buildItems = [];
        for (var i = 0; i < _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"].length; i++) {
            if (this.inItemSet(_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].name) && this.inRoomSet(_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].room)) {
                buildItems.push(_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i]);
            }
        }
        console.log("Resulting set is");
        console.log(buildItems);
        this.items = buildItems;
    };
    OverviewComponent.prototype.inItemSet = function (itemName) {
        var itemSet = this.filterSet.itemsSet;
        if (itemSet.length == 0) {
            return true;
        }
        if (itemSet.indexOf(itemName) == -1) {
            return false;
        }
        return true;
    };
    OverviewComponent.prototype.inRoomSet = function (roomName) {
        var roomSet = this.filterSet.roomsSet;
        if (roomSet.length == 0) {
            return true;
        }
        if (roomSet.indexOf(roomName) == -1) {
            return false;
        }
        return true;
    };
    OverviewComponent.prototype.ngOnInit = function () {
        var itemSetObj = {};
        var roomSetObj = {};
        for (var i = 0; i < _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"].length; i++) {
            if (!itemSetObj[_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].name]) {
                this.itemSet.push(_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].name);
                itemSetObj[_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].name] = _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].name;
            }
            if (!roomSetObj[_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].room]) {
                this.roomSet.push(_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].room);
                roomSetObj[_mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].room] = _mock_items__WEBPACK_IMPORTED_MODULE_2__["items"][i].room;
            }
        }
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
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

module.exports = __webpack_require__(/*! /home/eric/Desktop/NodeProjects/library-inventory-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map