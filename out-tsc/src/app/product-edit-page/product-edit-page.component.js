"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_service_1 = require("../dynamic-form/dynamic-form.service");
var router_1 = require("@angular/router");
var product_service_1 = require("../core/services/product.service");
var Subject_1 = require("rxjs/internal/Subject");
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var profile_service_1 = require("../core/services/profile.service");
var message_service_1 = require("../core/services/message.service");
var ProductEditPageComponent = /** @class */ (function () {
    function ProductEditPageComponent(dynamicFormService, dataProductsService, route, router, messageService, profileService) {
        var _this = this;
        this.dynamicFormService = dynamicFormService;
        this.dataProductsService = dataProductsService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.profileService = profileService;
        this.loading$ = new BehaviorSubject_1.BehaviorSubject(true);
        this.destroy = new Subject_1.Subject();
        this.profileService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    }
    ProductEditPageComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.ownerProtect();
        this.getFormConfig();
    };
    ProductEditPageComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
        this.loading$.complete();
    };
    ProductEditPageComponent.prototype.getProduct = function () {
        var _this = this;
        this.route.data.subscribe(function (product) {
            _this.product = product.data;
        });
    };
    ProductEditPageComponent.prototype.ownerProtect = function () {
        if (this.user.id !== this.product.owner.id) {
            this.messageService.addWarning('You are not owner of this product! You can not edit it.');
            this.router.navigate(['/products/' + this.product.pk]);
        }
    };
    ProductEditPageComponent.prototype.getFormConfig = function () {
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
    ProductEditPageComponent.prototype.onUpdateProduct = function (event) {
        this.dataProductsService.updateProduct(this.product.pk, event).subscribe();
    };
    ProductEditPageComponent.prototype.onDeleteProduct = function () {
        var _this = this;
        this.dataProductsService.deleteProduct(this.product.pk).subscribe(function () { return _this.router.navigate(['/products']); });
    };
    ProductEditPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-product-edit-page',
                    templateUrl: './product-edit-page.component.html',
                    styleUrls: ['./product-edit-page.component.scss']
                },] },
    ];
    /** @nocollapse */
    ProductEditPageComponent.ctorParameters = function () { return [
        { type: dynamic_form_service_1.DynamicFormService },
        { type: product_service_1.ProductService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: message_service_1.MessageService },
        { type: profile_service_1.ProfileService }
    ]; };
    return ProductEditPageComponent;
}());
exports.ProductEditPageComponent = ProductEditPageComponent;
//# sourceMappingURL=product-edit-page.component.js.map