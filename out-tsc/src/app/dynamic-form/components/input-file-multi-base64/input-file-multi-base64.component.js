"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var base64_validators_service_1 = require("../../../core/services/base64-validators.service");
var InputFileBase64MultiComponent = /** @class */ (function () {
    function InputFileBase64MultiComponent(base64ValidatorsService) {
        this.base64ValidatorsService = base64ValidatorsService;
    }
    InputFileBase64MultiComponent.prototype.onFileChange = function (event) {
        //files exist?
        if (!(event.target.files && event.target.files.length > 0))
            return;
        //File count less max limit upload files RestApi
        var ExistFilesCount = event.target.files.length;
        if (!this.base64ValidatorsService.isValidCount(ExistFilesCount))
            return;
        var res = [];
        var _loop_1 = function (file) {
            // is valid type?
            if (!this_1.base64ValidatorsService.isValidType(file))
                return "continue";
            // is valid size?
            if (!this_1.base64ValidatorsService.isValidSize(file))
                return "continue";
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                res.push(reader.result);
            };
        };
        var this_1 = this;
        for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
        this.form.get(this.prop.key).patchValue(res);
    };
    InputFileBase64MultiComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-input-file-base64',
                    templateUrl: './input-file-multi-base64.component.html'
                },] },
    ];
    /** @nocollapse */
    InputFileBase64MultiComponent.ctorParameters = function () { return [
        { type: base64_validators_service_1.Base64ValidatorsService }
    ]; };
    InputFileBase64MultiComponent.propDecorators = {
        prop: [{ type: core_1.Input }],
        form: [{ type: core_1.Input }]
    };
    return InputFileBase64MultiComponent;
}());
exports.InputFileBase64MultiComponent = InputFileBase64MultiComponent;
//# sourceMappingURL=input-file-multi-base64.component.js.map