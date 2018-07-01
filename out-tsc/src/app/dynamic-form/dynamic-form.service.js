"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var productFormConf_1 = require("./config/productFormConf");
var demoFormConf_1 = require("./config/demoFormConf");
var signInFormConf_1 = require("./config/signInFormConf");
var signUpFormConf_1 = require("./config/signUpFormConf");
var profileFormConf_1 = require("./config/profileFormConf");
var resetPasswordFormConf_1 = require("./config/resetPasswordFormConf");
var resetConfirmFormConf_1 = require("./config/resetConfirmFormConf");
var i0 = require("@angular/core");
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService() {
    }
    DynamicFormService.prototype.ngOnInit = function () {
    };
    DynamicFormService.prototype.getFormConfig = function (name) {
        switch (name) {
            case 'product':
                return productFormConf_1.productFormConf;
            case 'demo':
                return demoFormConf_1.demoFormConf;
            case 'signIn':
                return signInFormConf_1.signInFormConf;
            case 'signUp':
                return signUpFormConf_1.signUpFormConf;
            case 'profile':
                return profileFormConf_1.profileFormConf;
            case 'avatar':
                return profileFormConf_1.avatarFormConf;
            case 'changePassword':
                return profileFormConf_1.changePasswordFormConf;
            case 'resetPassword':
                return resetPasswordFormConf_1.resetPasswordFormConf;
            case 'resetConfirm':
                return resetConfirmFormConf_1.resetConfirmFormConf;
            default:
                console.log('exist form config!');
                return null;
        }
    };
    DynamicFormService.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    DynamicFormService.ctorParameters = function () { return []; };
    DynamicFormService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(); }, token: DynamicFormService, providedIn: "root" });
    return DynamicFormService;
}());
exports.DynamicFormService = DynamicFormService;
//# sourceMappingURL=dynamic-form.service.js.map