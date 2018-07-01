"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_service_1 = require("../dynamic-form/dynamic-form.service");
var DynamicFormDemoPageComponent = /** @class */ (function () {
    function DynamicFormDemoPageComponent(service) {
        this.service = service;
        this.props = this.service.getFormConfig('demo');
    }
    DynamicFormDemoPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-dynamic-form-demo-page',
                    templateUrl: './dynamic-form-demo-page.component.html',
                    styleUrls: ['./dynamic-form-demo-page.component.css']
                },] },
    ];
    /** @nocollapse */
    DynamicFormDemoPageComponent.ctorParameters = function () { return [
        { type: dynamic_form_service_1.DynamicFormService }
    ]; };
    return DynamicFormDemoPageComponent;
}());
exports.DynamicFormDemoPageComponent = DynamicFormDemoPageComponent;
//# sourceMappingURL=dynamic-form-demo-page.component.js.map