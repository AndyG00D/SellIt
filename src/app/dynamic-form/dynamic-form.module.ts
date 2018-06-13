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
    FormArrayComponent
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
    FormArrayComponent
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
