"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var label_component_1 = require("./components/label/label.component");
var forms_1 = require("@angular/forms");
var input_text_component_1 = require("./components/input-text/input-text.component");
var input_number_component_1 = require("./components/input-number/input-number.component");
var textarea_component_1 = require("./components/textarea/textarea.component");
var select_component_1 = require("./components/select/select.component");
var form_group_component_1 = require("./components/form-group/form-group.component");
var input_boolean_component_1 = require("./components/input-boolean/input-boolean.component");
var button_component_1 = require("./components/button/button.component");
var form_array_component_1 = require("./components/form-array/form-array.component");
var select_color_component_1 = require("./components/select-color/select-color.component");
var input_file_base64_component_1 = require("./components/input-file-base64/input-file-base64.component");
var input_file_multi_base64_component_1 = require("./components/input-file-multi-base64/input-file-multi-base64.component");
var DynamicFormDirective = /** @class */ (function () {
    function DynamicFormDirective(container, factoryResolver) {
        this.container = container;
        this.factoryResolver = factoryResolver;
    }
    DynamicFormDirective.prototype.ngOnInit = function () {
    };
    DynamicFormDirective.prototype.ngOnChanges = function () {
        if (this.props) {
            this.createFormView(this.props);
        }
    };
    DynamicFormDirective.prototype.addComponent = function (component, prop, formGroupKey) {
        if (prop === void 0) { prop = null; }
        if (formGroupKey === void 0) { formGroupKey = null; }
        var componentFactory = this.factoryResolver.resolveComponentFactory(component);
        var componentRef = this.container.createComponent(componentFactory);
        if (prop !== null) {
            componentRef.instance['prop'] = prop;
        }
        //addError context of current form
        if (this.form !== null) {
            componentRef.instance.form = this.form;
        }
        //addError parents Form Group
        if (formGroupKey) {
            componentRef.instance.formGroupKey = formGroupKey;
        }
    };
    DynamicFormDirective.prototype.createFormView = function (props) {
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            if (!prop.hideLabel && prop.type != 'submit' && prop.type != 'reset') {
                this.addComponent(label_component_1.LabelComponent, prop);
            }
            switch (prop.type) {
                case 'text':
                case 'email':
                case 'password':
                case 'search':
                case 'tel':
                    this.addComponent(input_text_component_1.InputTextComponent, prop);
                    break;
                case 'number':
                case 'range':
                case 'color':
                    this.addComponent(input_number_component_1.InputNumberComponent, prop);
                    break;
                case 'file':
                    this.addComponent(input_file_base64_component_1.InputFileBase64Component, prop);
                    break;
                case 'files':
                    this.addComponent(input_file_multi_base64_component_1.InputFileBase64MultiComponent, prop);
                    break;
                case 'checkbox':
                case 'radio':
                    this.addComponent(input_boolean_component_1.InputBooleanComponent, prop);
                    break;
                case 'textarea':
                    this.addComponent(textarea_component_1.TextareaComponent, prop);
                    break;
                case 'select':
                    this.addComponent(select_component_1.SelectComponent, prop);
                    break;
                case 'select-color':
                    this.addComponent(select_color_component_1.SelectColorComponent, prop);
                    break;
                case 'submit':
                case 'reset':
                    this.addComponent(button_component_1.ButtonComponent, prop);
                    break;
                case 'nested':
                    this.addComponent(form_group_component_1.FormGroupComponent, prop, prop.key);
                    break;
                case 'array':
                    this.addComponent(form_array_component_1.FormArrayComponent, prop);
                    break;
                default:
                    console.log('wrong type of control! ' + prop);
            }
        }
    };
    DynamicFormDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dynamic-form]',
                },] },
    ];
    /** @nocollapse */
    DynamicFormDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef },
        { type: core_1.ComponentFactoryResolver }
    ]; };
    DynamicFormDirective.propDecorators = {
        props: [{ type: core_1.Input }],
        form: [{ type: core_1.Input }]
    };
    return DynamicFormDirective;
}());
exports.DynamicFormDirective = DynamicFormDirective;
//# sourceMappingURL=dynamic-form.directive.js.map