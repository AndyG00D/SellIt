"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent() {
        this.isOwner = false;
    }
    ProductItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-product-item',
                    templateUrl: './product-item.component.html',
                    styleUrls: ['./product-item.component.scss']
                },] },
    ];
    /** @nocollapse */
    ProductItemComponent.ctorParameters = function () { return []; };
    ProductItemComponent.propDecorators = {
        product: [{ type: core_1.Input }],
        isOwner: [{ type: core_1.Input }]
    };
    return ProductItemComponent;
}());
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=product-item.component.js.map