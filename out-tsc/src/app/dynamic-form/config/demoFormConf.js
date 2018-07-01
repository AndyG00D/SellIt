"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
exports.testNestedFormConf = [
    {
        key: 'field1',
        type: 'text',
        label: 'Field 1',
    },
    {
        key: 'field2',
        type: 'text',
        label: 'Field 2',
    }
];
exports.tesFormArrayConf = [
    {
        key: 'item',
        type: 'text',
        label: 'Item1'
    },
    {
        key: 'item2',
        type: 'text',
        label: 'Item2'
    },
    {
        key: 'nested',
        type: 'nested',
        label: 'Nested Group',
        conf: exports.testNestedFormConf
    }
];
exports.demoFormConf = [
    {
        key: 'number',
        type: 'number',
        label: 'Number',
    },
    {
        key: 'range',
        type: 'range',
        label: 'Range',
    },
    {
        key: 'text',
        type: 'text',
        label: 'Text',
    },
    {
        key: 'search',
        type: 'search',
        label: 'Search',
    },
    {
        key: 'tel',
        type: 'tel',
        label: 'Telephone',
    },
    {
        key: 'email',
        type: 'email',
        label: 'Email',
    },
    {
        key: 'password',
        type: 'password',
        label: 'Password',
        validators: [forms_1.Validators.required]
    },
    {
        key: 'checkbox',
        type: 'checkbox',
        label: 'Checkbox',
        options: [
            { label: "(choose one)", value: '' },
            { label: "Bolzano", value: '39100' },
            { label: "Meltina", value: '39010' },
            { label: "Appiano", value: '39057' }
        ]
    },
    {
        key: 'radio',
        type: 'radio',
        label: 'Radio',
        options: [
            { label: "(choose one)", value: '' },
            { label: "Bolzano", value: '39100' },
            { label: "Meltina", value: '39010' },
            { label: "Appiano", value: '39057' }
        ]
    },
    {
        key: 'textarea',
        type: 'textarea',
        label: 'Text Area',
    },
    {
        key: 'select',
        label: 'Select',
        value: '39010',
        type: 'select',
        options: [
            { label: "(choose one)", value: '' },
            { label: "Bolzano", value: '39100' },
            { label: "Meltina", value: '39010' },
            { label: "Appiano", value: '39057' }
        ]
    },
    {
        key: 'nested',
        type: 'nested',
        label: 'Nested Group',
        conf: exports.testNestedFormConf
    },
    {
        key: 'array',
        type: 'array',
        label: 'Form Array',
        conf: exports.tesFormArrayConf,
        arrayLength: 5
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Submit',
    },
    {
        key: 'reset',
        type: 'reset',
        label: 'Reset',
    },
];
//# sourceMappingURL=demoFormConf.js.map