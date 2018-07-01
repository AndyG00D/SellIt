"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var Subject_1 = require("rxjs/internal/Subject");
var product_service_1 = require("../core/services/product.service");
var profile_service_1 = require("../core/services/profile.service");
var ProductDetailPageComponent = /** @class */ (function () {
    function ProductDetailPageComponent(dataProductsService, route, profileService) {
        var _this = this;
        this.dataProductsService = dataProductsService;
        this.route = route;
        this.profileService = profileService;
        this.loading$ = new BehaviorSubject_1.BehaviorSubject(true);
        this.destroy = new Subject_1.Subject();
        this.profileService.getUser().subscribe(function (user) { return _this.user = user; });
    }
    ProductDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (product) { return _this.product = product.data; });
    };
    ProductDetailPageComponent.prototype.isOwner = function () {
        return (this.user && this.user.id) === this.product.owner.id;
    };
    ProductDetailPageComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
        this.loading$.complete();
    };
    ProductDetailPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-detail-page',
                    templateUrl: './product-detail-page.component.html',
                    styleUrls: ['./product-detail-page.component.scss']
                },] },
    ];
    /** @nocollapse */
    ProductDetailPageComponent.ctorParameters = function () { return [
        { type: product_service_1.ProductService },
        { type: router_1.ActivatedRoute },
        { type: profile_service_1.ProfileService }
    ]; };
    return ProductDetailPageComponent;
}());
exports.ProductDetailPageComponent = ProductDetailPageComponent;
//# sourceMappingURL=product-detail-page.component.js.map