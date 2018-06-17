import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelComponent} from "./components/label/label.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormControlErrorsComponent} from "./components/form-control-errors/form-control-errors.component";
import {DynamicFormComponent} from "./dynamic-form.component";
import {DynamicFormDirective} from "./dynamic-form.directive";
import {InputTextComponent} from "./components/input-text/input-text.component";
import {InputBooleanComponent} from "./components/input-boolean/input-boolean.component";
import {InputNumberComponent} from "./components/input-number/input-number.component";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {SelectComponent} from "./components/select/select.component";
import {FormGroupComponent} from "./components/form-group/form-group.component";
import {ButtonComponent} from "./components/button/button.component";
import {DynamicFormService} from "./dynamic-form.service";
import {FormArrayComponent} from "./components/form-array/form-array.component";
import {InputFileComponent} from "./components/input-file/input-file.component";
import {SelectColorComponent} from "./components/select-color/select-color.component";
import {InputFileBase64Component} from "./components/input-file-base64/input-file-base64.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormDirective,
    LabelComponent,
    InputTextComponent,
    InputNumberComponent,
    InputBooleanComponent,
    TextareaComponent,
    SelectComponent,
    FormControlErrorsComponent,
    FormGroupComponent,
    ButtonComponent,
    FormArrayComponent,
    InputFileComponent,
    SelectColorComponent,
    InputFileBase64Component
  ],
  entryComponents: [
    LabelComponent,
    InputTextComponent,
    InputNumberComponent,
    InputBooleanComponent,
    TextareaComponent,
    SelectComponent,
    FormControlErrorsComponent,
    FormGroupComponent,
    ButtonComponent,
    FormArrayComponent,
    InputFileComponent,
    SelectColorComponent,
    InputFileBase64Component
  ],
  providers: [
    DynamicFormService
  ],
  exports: [
    DynamicFormComponent,
    FormControlErrorsComponent
  ]
})
export class DynamicFormModule {
}
