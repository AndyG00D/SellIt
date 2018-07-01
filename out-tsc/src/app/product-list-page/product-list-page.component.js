"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../core/services/product.service");
var profile_service_1 = require("../core/services/profile.service");
var ProductListPageComponent = /** @class */ (function () {
    function ProductListPageComponent(dataProducts, profileService) {
        var _this = this;
        this.dataProducts = dataProducts;
        this.profileService = profileService;
        this._limit = 12;
        this.profileService.getUser().subscribe(function (user) { _this.user = user; });
    }
    ProductListPageComponent.prototype.ngOnInit = function () {
        this.products = [];
        this._offset = 0;
        this.getProducts();
    };
    ProductListPageComponent.prototype.ngOnDestroy = function () {
        this.dataProducts.stop();
    };
    ProductListPageComponent.prototype.loadProducts = function (isNextPage) {
        if (isNextPage && this._isLoadData) {
            this._isLoadData = false;
            this._offset += this._limit;
            this.getProducts();
        }
    };
    ProductListPageComponent.prototype.getProducts = function () {
        var _this = this;
        this.dataProducts.getProducts(this._offset, this._limit)
            .subscribe(function (res) {
            (_a = _this.products).push.apply(_a, res);
            _this.infoMsg = _this.dataProducts.infoMsg;
            _this._isLoadData = true;
            var _a;
        });
    };
    ProductListPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-product-list-page',
                    templateUrl: './product-list-page.component.html',
                    styleUrls: ['./product-list-page.component.scss'],
                    providers: [product_service_1.ProductService],
                },] },
    ];
    /** @nocollapse */
    ProductListPageComponent.ctorParameters = function () { return [
        { type: product_service_1.ProductService },
        { type: profile_service_1.ProfileService }
    ]; };
    return ProductListPageComponent;
}());
exports.ProductListPageComponent = ProductListPageComponent;
//# sourceMappingURL=product-list-page.component.js.map