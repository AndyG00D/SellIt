"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent() {
    }
    Object.defineProperty(FormArrayComponent.prototype, "formArray", {
        get: function () {
            return this.form.get(this.prop.key);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayComponent.prototype.removeItem = function (i) {
        this.formArray.removeAt(i);
    };
    FormArrayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-nested-field',
                    templateUrl: './form-array.component.html'
                },] },
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return []; };
    FormArrayComponent.propDecorators = {
        prop: [{ type: core_1.Input }],
        form: [{ type: core_1.Input }]
    };
    return FormArrayComponent;
}());
exports.FormArrayComponent = FormArrayComponent;
//# sourceMappingURL=form-array.component.js.map