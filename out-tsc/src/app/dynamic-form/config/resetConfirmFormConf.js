"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var custom_validators_service_1 = require("../custom-validators.service");
exports.resetConfirmFormConf = [
    {
        key: 'new_password1',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'new_password2',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required, custom_validators_service_1.CustomValidatorsService.prototype.confirm('new_password1')],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Change Password',
    }
];
//# sourceMappingURL=resetConfirmFormConf.js.map