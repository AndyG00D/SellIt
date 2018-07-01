"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormControlErrorsComponent = /** @class */ (function () {
    function FormControlErrorsComponent() {
        this.title = 'Field';
    }
    FormControlErrorsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-form-control-errors',
                    templateUrl: './form-control-errors.component.html'
                },] },
    ];
    /** @nocollapse */
    FormControlErrorsComponent.ctorParameters = function () { return []; };
    FormControlErrorsComponent.propDecorators = {
        errors: [{ type: core_1.Input }],
        title: [{ type: core_1.Input }]
    };
    return FormControlErrorsComponent;
}());
exports.FormControlErrorsComponent = FormControlErrorsComponent;
//# sourceMappingURL=form-control-errors.component.js.map