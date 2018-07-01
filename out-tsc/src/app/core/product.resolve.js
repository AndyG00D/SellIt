"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
;
var product_service_1 = require("./services/product.service");
var DataProductResolver = /** @class */ (function () {
    function DataProductResolver(service) {
        this.service = service;
    }
    DataProductResolver.prototype.resolve = function (route, state) {
        // console.log('params: ' + JSON.stringify(route.url));
        return this.service.getProduct(route.params.id);
    };
    DataProductResolver.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DataProductResolver.ctorParameters = function () { return [
        { type: product_service_1.ProductService }
    ]; };
    return DataProductResolver;
}());
exports.DataProductResolver = DataProductResolver;
//# sourceMappingURL=product.resolve.js.map