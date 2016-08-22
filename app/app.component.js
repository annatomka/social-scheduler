"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 class=\"header\">Awesome Social Schedulerer</h1>\n\n    <div class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-inverse-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Brand</a>\n    </div>\n    <div class=\"navbar-collapse collapse navbar-inverse-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"javascript:void(0)\">Library</a></li>\n        <li><a href=\"javascript:void(0)\">Schedule</a></li>\n        <li><a href=\"javascript:void(0)\">Discover</a></li>\n        <li class=\"dropdown\">\n          <a data-target=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown\n            <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"javascript:void(0)\">Action</a></li>\n            <li><a href=\"javascript:void(0)\">Another action</a></li>\n            <li><a href=\"javascript:void(0)\">Something else here</a></li>\n            <li class=\"divider\"></li>\n            <li class=\"dropdown-header\">Dropdown header</li>\n            <li><a href=\"javascript:void(0)\">Separated link</a></li>\n            <li><a href=\"javascript:void(0)\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control col-sm-8\" placeholder=\"Search\">\n        </div>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"javascript:void(0)\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"index.html\" data-target=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown\n            <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"javascript:void(0)\">Action</a></li>\n            <li><a href=\"javascript:void(0)\">Another action</a></li>\n            <li><a href=\"javascript:void(0)\">Something else here</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"javascript:void(0)\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n    <router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map