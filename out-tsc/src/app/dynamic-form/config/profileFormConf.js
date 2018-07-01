"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_validators_service_1 = require("../custom-validators.service");
var forms_1 = require("@angular/forms");
exports.avatarFormConf = [
    {
        key: 'avatar',
        type: 'file',
        label: 'Avatar'
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Change Photo'
    }
];
exports.profileFormConf = [
    {
        key: 'username',
        type: 'text',
        label: 'User name',
    },
    {
        key: 'first_name',
        type: 'text',
        label: 'First Name',
    },
    {
        key: 'last_name',
        type: 'text',
        label: 'Last name',
    },
    {
        key: 'location',
        type: 'nested',
        label: 'Location',
        conf: [{
                key: 'name',
                type: 'text',
                label: 'Address',
                hideLabel: true
            }]
    },
    {
        key: 'color_scheme',
        label: 'Color Scheme',
        value: '',
        type: 'select-color',
        options: [
            { label: "(choose one)", value: '' },
            { label: "blue", value: '#00b3be' },
            { label: "red", value: '#d21212' },
            { label: "green", value: '#91d763' },
        ]
    },
    {
        key: 'language',
        label: 'Language',
        value: '',
        type: 'select',
        options: [
            { label: "(choose one)", value: '' },
            { label: "English", value: 'en' },
            { label: "Japan", value: 'ja' },
            { label: "France", value: 'fr' }
        ]
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Update User'
    },
];
exports.changePasswordFormConf = [
    {
        key: 'new_password1',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required]
    },
    {
        key: 'new_password2',
        type: 'password',
        label: 'Confirm',
        validators: [forms_1.Validators.required, custom_validators_service_1.CustomValidatorsService.prototype.confirm('new_password1')],
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Change Password',
    }
];
//# sourceMappingURL=profileFormConf.js.map