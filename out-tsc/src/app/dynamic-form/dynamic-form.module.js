"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var label_component_1 = require("./components/label/label.component");
var forms_1 = require("@angular/forms");
var form_control_errors_component_1 = require("./components/form-control-errors/form-control-errors.component");
var dynamic_form_component_1 = require("./dynamic-form.component");
var dynamic_form_directive_1 = require("./dynamic-form.directive");
var input_text_component_1 = require("./components/input-text/input-text.component");
var input_boolean_component_1 = require("./components/input-boolean/input-boolean.component");
var input_number_component_1 = require("./components/input-number/input-number.component");
var textarea_component_1 = require("./components/textarea/textarea.component");
var select_component_1 = require("./components/select/select.component");
var form_group_component_1 = require("./components/form-group/form-group.component");
var button_component_1 = require("./components/button/button.component");
var dynamic_form_service_1 = require("./dynamic-form.service");
var form_array_component_1 = require("./components/form-array/form-array.component");
var select_color_component_1 = require("./components/select-color/select-color.component");
var input_file_base64_component_1 = require("./components/input-file-base64/input-file-base64.component");
var custom_validators_service_1 = require("./custom-validators.service");
var input_file_multi_base64_component_1 = require("./components/input-file-multi-base64/input-file-multi-base64.component");
var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.ReactiveFormsModule,
                    ],
                    declarations: [
                        dynamic_form_component_1.DynamicFormComponent,
                        dynamic_form_directive_1.DynamicFormDirective,
                        label_component_1.LabelComponent,
                        input_text_component_1.InputTextComponent,
                        input_number_component_1.InputNumberComponent,
                        input_boolean_component_1.InputBooleanComponent,
                        textarea_component_1.TextareaComponent,
                        select_component_1.SelectComponent,
                        form_control_errors_component_1.FormControlErrorsComponent,
                        form_group_component_1.FormGroupComponent,
                        button_component_1.ButtonComponent,
                        form_array_component_1.FormArrayComponent,
                        select_color_component_1.SelectColorComponent,
                        input_file_base64_component_1.InputFileBase64Component,
                        input_file_multi_base64_component_1.InputFileBase64MultiComponent
                    ],
                    entryComponents: [
                        label_component_1.LabelComponent,
                        input_text_component_1.InputTextComponent,
                        input_number_component_1.InputNumberComponent,
                        input_boolean_component_1.InputBooleanComponent,
                        textarea_component_1.TextareaComponent,
                        select_component_1.SelectComponent,
                        form_control_errors_component_1.FormControlErrorsComponent,
                        form_group_component_1.FormGroupComponent,
                        button_component_1.ButtonComponent,
                        form_array_component_1.FormArrayComponent,
                        select_color_component_1.SelectColorComponent,
                        input_file_base64_component_1.InputFileBase64Component,
                        input_file_multi_base64_component_1.InputFileBase64MultiComponent
                    ],
                    providers: [
                        dynamic_form_service_1.DynamicFormService,
                        custom_validators_service_1.CustomValidatorsService
                    ],
                    exports: [
                        dynamic_form_component_1.DynamicFormComponent,
                        form_control_errors_component_1.FormControlErrorsComponent
                    ]
                },] },
    ];
    return DynamicFormModule;
}());
exports.DynamicFormModule = DynamicFormModule;
//# sourceMappingURL=dynamic-form.module.js.map