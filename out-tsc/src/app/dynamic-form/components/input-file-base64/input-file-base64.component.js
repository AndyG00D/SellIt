"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var base64_validators_service_1 = require("../../../core/services/base64-validators.service");
var InputFileBase64Component = /** @class */ (function () {
    function InputFileBase64Component(base64ValidatorsService) {
        this.base64ValidatorsService = base64ValidatorsService;
    }
    InputFileBase64Component.prototype.onFileChange = function (event) {
        var _this = this;
        // is valid type?
        if (!this.base64ValidatorsService.isValidType(event.target.files[0]))
            return;
        // is valid size?
        if (!this.base64ValidatorsService.isValidSize(event.target.files[0]))
            return;
        var reader = new FileReader();
        var file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.form.get(_this.prop.key).setValue(reader.result);
        };
    };
    InputFileBase64Component.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-input-file-base64',
                    templateUrl: './input-file-base64.component.html'
                },] },
    ];
    /** @nocollapse */
    InputFileBase64Component.ctorParameters = function () { return [
        { type: base64_validators_service_1.Base64ValidatorsService }
    ]; };
    InputFileBase64Component.propDecorators = {
        prop: [{ type: core_1.Input }],
        form: [{ type: core_1.Input }]
    };
    return InputFileBase64Component;
}());
exports.InputFileBase64Component = InputFileBase64Component;
//# sourceMappingURL=input-file-base64.component.js.map