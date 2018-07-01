"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
exports.productFormConf = [{
        key: 'theme',
        type: 'text',
        label: 'Theme',
        validators: [forms_1.Validators.required]
    },
    {
        key: 'text',
        type: 'text',
        label: 'Text',
    },
    {
        key: 'price',
        type: 'number',
        label: 'Price',
        validators: [forms_1.Validators.required]
    },
    {
        key: 'currency',
        value: '1',
        type: 'select',
        label: 'Currency',
        options: [
            { label: "USD", value: "1" }
        ]
    },
    {
        key: 'contract_price',
        type: 'checkbox',
        label: 'Contract Price',
    },
    {
        key: 'location',
        type: 'select',
        label: 'Location',
        value: '',
        options: [
            { label: "---", value: '' }
        ]
    },
    {
        key: 'is_active',
        type: 'checkbox',
        label: 'Active',
        value: true
    },
    {
        key: 'submit',
        type: 'submit',
        label: 'Save Product'
    }
];
//# sourceMappingURL=productFormConf.js.map