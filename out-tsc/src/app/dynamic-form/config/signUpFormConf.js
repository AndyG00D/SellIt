"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var custom_validators_service_1 = require("../custom-validators.service");
exports.signUpFormConf = [
    {
        key: 'username',
        type: 'text',
        label: 'User Name',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'password1',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'password2',
        type: 'password',
        label: 'Confirm',
        validators: [forms_1.Validators.required, custom_validators_service_1.CustomValidatorsService.prototype.confirm('password1')],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Sign Up',
    }
];
//# sourceMappingURL=signUpFormConf.js.map