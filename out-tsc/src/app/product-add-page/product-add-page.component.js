"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_service_1 = require("../dynamic-form/dynamic-form.service");
var product_service_1 = require("../core/services/product.service");
var ProductAddPageComponent = /** @class */ (function () {
    function ProductAddPageComponent(dynamicFormService, dataProductsService) {
        this.dynamicFormService = dynamicFormService;
        this.dataProductsService = dataProductsService;
    }
    ProductAddPageComponent.prototype.ngOnInit = function () {
        this.getFormConfig();
    };
    ProductAddPageComponent.prototype.getFormConfig = function () {
        var _this = this;
        this.props = this.dynamicFormService.getFormConfig('product');
        this.dataProductsService.getLocations().subscribe(function (data) {
            for (var _i = 0, _a = _this.props; _i < _a.length; _i++) {
                var prop = _a[_i];
                if (prop.key === 'location') {
                    (_b = prop.options).push.apply(_b, data);
                }
            }
            var _b;
        });
    };
    ProductAddPageComponent.prototype.onAddProduct = function (event) {
        var _this = this;
        this.dataProductsService.addProduct(event).subscribe(function (data) { return _this.imagesLoader.uploadNewImages(data.pk); });
    };
    ProductAddPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-product-add-page',
                    templateUrl: './product-add-page.component.html',
                    styleUrls: ['./product-add-page.component.scss']
                },] },
    ];
    /** @nocollapse */
    ProductAddPageComponent.ctorParameters = function () { return [
        { type: dynamic_form_service_1.DynamicFormService },
        { type: product_service_1.ProductService }
    ]; };
    ProductAddPageComponent.propDecorators = {
        imagesLoader: [{ type: core_1.ViewChild, args: ['imagesUploader',] }]
    };
    return ProductAddPageComponent;
}());
exports.ProductAddPageComponent = ProductAddPageComponent;
//# sourceMappingURL=product-add-page.component.js.map