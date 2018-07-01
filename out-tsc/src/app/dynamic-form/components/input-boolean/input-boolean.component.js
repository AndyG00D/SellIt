"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var InputBooleanComponent = /** @class */ (function () {
    function InputBooleanComponent() {
    }
    InputBooleanComponent.prototype.onChange = function () {
        this.isCheck = !this.isCheck;
        this.form.get(this.prop.key).patchValue(this.isCheck);
    };
    InputBooleanComponent.prototype.ngOnInit = function () {
        this.isCheck = !!this.form.get(this.prop.key).value;
        this.form.get(this.prop.key).patchValue(this.isCheck);
    };
    InputBooleanComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-input-text',
                    templateUrl: './input-boolean.component.html'
                },] },
    ];
    /** @nocollapse */
    InputBooleanComponent.ctorParameters = function () { return []; };
    InputBooleanComponent.propDecorators = {
        prop: [{ type: core_1.Input }],
        form: [{ type: core_1.Input }]
    };
    return InputBooleanComponent;
}());
exports.InputBooleanComponent = InputBooleanComponent;
//# sourceMappingURL=input-boolean.component.js.map