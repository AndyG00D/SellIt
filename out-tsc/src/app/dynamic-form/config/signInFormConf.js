"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
exports.signInFormConf = [
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'password',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Sign In',
    }
];
//# sourceMappingURL=signInFormConf.js.map