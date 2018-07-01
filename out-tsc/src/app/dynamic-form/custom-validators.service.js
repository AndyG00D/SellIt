"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patterns_1 = require("./patterns");
var CustomValidatorsService = /** @class */ (function () {
    function CustomValidatorsService() {
    }
    CustomValidatorsService.prototype.confirm = function (control) {
        return function (c) {
            var fgValue1 = c.root.value[control];
            var fgValue2 = c.value;
            if (fgValue1 != fgValue2) {
                return { confirm: true };
            }
            return null;
        };
    };
    CustomValidatorsService.prototype.number = function (control) {
        if (!(patterns_1.patterns.number.test(control.value))) {
            return { number: true };
        }
        return null;
    };
    CustomValidatorsService.prototype.password = function (control) {
        if (!(patterns_1.patterns.number.test(control.value) && patterns_1.patterns.char.test(control.value))) {
            return { password: true };
        }
        return null;
    };
    CustomValidatorsService.prototype.email = function (control) {
        if (control.value == null) {
            return null;
        }
        if (!patterns_1.patterns.email.test(control.value)) {
            return { email: true };
        }
        return null;
    };
    CustomValidatorsService.prototype.existValue = function (options) {
        return function (c) {
            if (options.length)
                return null;
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                if (c.value === option.value)
                    return null;
            }
            return { existValue: true };
        };
    };
    CustomValidatorsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CustomValidatorsService.ctorParameters = function () { return []; };
    return CustomValidatorsService;
}());
exports.CustomValidatorsService = CustomValidatorsService;
//# sourceMappingURL=custom-validators.service.js.map