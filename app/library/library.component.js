"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var material_view_1 = require('../material.view');
var LibraryComponent = (function (_super) {
    __extends(LibraryComponent, _super);
    function LibraryComponent() {
        _super.apply(this, arguments);
    }
    LibraryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/library/library.component.html'
        })
    ], LibraryComponent);
    return LibraryComponent;
}(material_view_1.MaterialView));
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=library.component.js.map