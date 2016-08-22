"use strict";
var router_1 = require('@angular/router');
var library_component_1 = require('./library/library.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    },
    { path: 'library', component: library_component_1.LibraryComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map