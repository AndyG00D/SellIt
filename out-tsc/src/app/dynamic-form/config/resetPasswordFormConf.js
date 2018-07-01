"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
exports.resetPasswordFormConf = [
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [forms_1.Validators.required],
        hideLabel: true,
        invertTheme: true
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Send message for reset pass',
    }
];
//# sourceMappingURL=resetPasswordFormConf.js.map