"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormControlConf = /** @class */ (function () {
    function FormControlConf(options) {
        if (options === void 0) { options = {}; }
        this.key = options.key || '';
        this.type = options.type || '';
        this.label = options.label || '';
        this.value = options.value;
        this.validators = options.validators || [];
        this.options = options.options || [];
        this.conf = options.conf || [];
        this.arrayLength = options.arrayLength || 1;
        this.hideLabel = options.hideLabel || false;
        this.hideErrors = options.hideErrors || false;
        this.invertTheme = options.invertTheme || false;
    }
    return FormControlConf;
}());
exports.FormControlConf = FormControlConf;
//# sourceMappingURL=dynamic-form.model.js.map