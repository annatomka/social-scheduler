var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var LibraryComponent = (function () {
    function LibraryComponent() {
    }
    LibraryComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>This is Library</h3><br/>\n\n\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-2\" for=\"ch1\">Touch sounds</label>\n        <div class=\"col-sm-10\">\n          <div class=\"checkbox\">\n            <label>\n              <input id=\"ch1\" type=\"checkbox\" checked=\"\">\n            </label>\n          </div>\n          <p class=\"help-block\">This shows the generic label variant.</p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\" for=\"ch3\">Vibrate on touch</label>\n        <div class=\"col-sm-10\">\n          <div class=\"checkbox\">\n            <label>\n              <input id=\"ch3\" type=\"checkbox\">\n            </label>\n          </div>\n          <p class=\"help-block\">This shows the <code>control-label</code> variant.</p>\n        </div>\n      </div>\n    </form>\n\n\n  "
        })
    ], LibraryComponent);
    return LibraryComponent;
})();
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=library.component.js.map