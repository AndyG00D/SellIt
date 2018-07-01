"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_page_component_1 = require("./not-found-page/not-found-page.component");
var product_list_page_component_1 = require("./product-list-page/product-list-page.component");
var product_detail_page_component_1 = require("./product-detail-page/product-detail-page.component");
var login_page_component_1 = require("./login-page/login-page.component");
var product_resolve_1 = require("./core/product.resolve");
var product_add_page_component_1 = require("./product-add-page/product-add-page.component");
var dynamic_form_demo_page_component_1 = require("./dynamic-form-demo-page/dynamic-form-demo-page.component");
var profile_page_component_1 = require("./profile-page/profile-page.component");
var guest_guard_1 = require("./core/guards/guest.guard");
var user_guard_1 = require("./core/guards/user.guard");
var product_edit_page_component_1 = require("./product-edit-page/product-edit-page.component");
var ɵ0 = product_resolve_1.DataProductResolver, ɵ1 = product_resolve_1.DataProductResolver;
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
var routes = [
    { path: 'products', component: product_list_page_component_1.ProductListPageComponent },
    { path: 'products/add', component: product_add_page_component_1.ProductAddPageComponent, canActivate: [user_guard_1.UserGuard] },
    { path: 'products/:id', component: product_detail_page_component_1.ProductDetailPageComponent, resolve: { data: ɵ0 } },
    { path: 'products/edit/:id', component: product_edit_page_component_1.ProductEditPageComponent, resolve: { data: ɵ1 }, canActivate: [user_guard_1.UserGuard] },
    { path: 'profile', component: profile_page_component_1.ProfilePageComponent, canActivate: [user_guard_1.UserGuard] },
    { path: 'login', component: login_page_component_1.LoginPageComponent, canActivate: [guest_guard_1.GuestGuard] },
    { path: 'demo', component: dynamic_form_demo_page_component_1.DynamicFormDemoPageComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', component: not_found_page_component_1.NotFoundPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                },] },
    ];
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map