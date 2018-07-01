"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var custom_validators_service_1 = require("./custom-validators.service");
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(customValidators) {
        this.customValidators = customValidators;
        this.submitted = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({});
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        // create Form model
        this.form = this.createForm(this.props);
        // set default form values
        if (this.data) {
            this.setFormData();
        }
    };
    // setup the form
    DynamicFormComponent.prototype.createForm = function (props) {
        var formGroup = {};
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            if (prop.type === 'nested') {
                formGroup[prop.key] = this.createForm(prop.conf);
            }
            else if (prop.type === 'array') {
                var items = [];
                var item = this.createForm(prop.conf);
                for (var i = 0; i < prop.arrayLength; i++) {
                    items.push(item);
                }
                formGroup[prop.key] = new forms_1.FormArray(items);
            }
            else if (prop.type != 'submit' && prop.type !== 'reset') {
                formGroup[prop.key] = new forms_1.FormControl(prop.value || '', this.getValidators(prop));
            }
        }
        return new forms_1.FormGroup(formGroup);
    };
    DynamicFormComponent.prototype.getValidators = function (prop) {
        var res;
        switch (prop.type) {
            case 'text':
                res = [forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)];
                break;
            case 'email':
                res = [forms_1.Validators.minLength(6), forms_1.Validators.maxLength(30), this.customValidators.email];
                break;
            case 'password':
                res = [forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20), this.customValidators.password];
                break;
            case 'search':
                res = [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(20)];
                break;
            case 'tel':
                res = [forms_1.Validators.minLength(6), forms_1.Validators.maxLength(13)];
                break;
            case 'number':
                res = [forms_1.Validators.min(1), forms_1.Validators.max(100000)];
                break;
            case 'range':
                res = [forms_1.Validators.min(1), forms_1.Validators.max(100000)];
                break;
            case 'color':
                res = [];
                break;
            case 'file':
                res = [forms_1.Validators.nullValidator];
                break;
            case 'checkbox':
                res = [];
                break;
            case 'radio':
                res = [this.customValidators.existValue(prop.options)];
                break;
            case 'textarea':
                res = [forms_1.Validators.minLength(4), forms_1.Validators.maxLength(400)];
                break;
            case 'select':
                res = [this.customValidators.existValue(prop.options)];
                break;
            case 'select-color':
                res = [this.customValidators.existValue(prop.options)];
                break;
        }
        if (prop.validators !== undefined) {
            res = res.concat(prop.validators);
        }
        return res;
    };
    DynamicFormComponent.prototype.setFormData = function () {
        for (var item in this.data)
            if (this.data[item] && this.form.get(item)) {
                this.form.get(item).patchValue(this.data[item]);
            }
    };
    DynamicFormComponent.prototype.markAllDirty = function (control) {
        if (control.hasOwnProperty('controls')) {
            control.markAsDirty(); // mark group
            var ctrl = control;
            for (var inner in ctrl.controls) {
                this.markAllDirty(ctrl.controls[inner]);
            }
        }
        else {
            (control).markAsDirty();
        }
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.markAllDirty(this.form);
        if (this.form.valid) {
            console.log('form submitted...');
            this.submitted.emit(this.form.value);
        }
    };
    DynamicFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-dynamic-form',
                    templateUrl: './dynamic-form.component.html',
                    styleUrls: ['./dynamic-form.component.scss']
                },] },
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = function () { return [
        { type: custom_validators_service_1.CustomValidatorsService }
    ]; };
    DynamicFormComponent.propDecorators = {
        props: [{ type: core_1.Input }],
        data: [{ type: core_1.Input }],
        submitted: [{ type: core_1.Output }]
    };
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map