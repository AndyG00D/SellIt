import {ComponentFactoryResolver, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef} from '@angular/core';
import {LabelComponent} from "./components/label/label.component";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {InputTextComponent} from "./components/input-text/input-text.component";
import {InputNumberComponent} from "./components/input-number/input-number.component";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {SelectComponent} from "./components/select/select.component";
import {FormControlConf} from "./dynamic-form.model";
import {FormGroupComponent} from "./components/form-group/form-group.component";
import {InputBooleanComponent} from "./components/input-boolean/input-boolean.component";
import {ButtonComponent} from "./components/button/button.component";
import {FormArrayComponent} from "./components/form-array/form-array.component";
import {InputFileComponent} from "./components/input-file/input-file.component";
import {SelectColorComponent} from "./components/select-color/select-color.component";
import {InputFileBase64Component} from "./components/input-file-base64/input-file-base64.component";
import {InputFileBase64MultiComponent} from "./components/input-file-multi-base64/input-file-multi-base64.component";

@Directive({
  selector: '[dynamic-form]',
})
export class DynamicFormDirective implements OnInit, OnChanges {
  @Input() props;
  @Input() form: FormGroup;

  constructor(private container: ViewContainerRef,
              private factoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.props) {
      this.createFormView(this.props);
    }
  }

  addComponent(component: Type<any>, prop: FormControlConf = null, formGroupKey: any = null) {
    let componentFactory = this.factoryResolver.resolveComponentFactory(component);
    let componentRef = this.container.createComponent(componentFactory);
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
  }

  createFormView(props: FormControlConf[]): void {

    for (let prop of props) {
      if (!prop.hideLabel && prop.type != 'submit' && prop.type != 'reset') {
        this.addComponent(LabelComponent, prop);
      }
      switch (prop.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'search':
        case 'tel':
          this.addComponent(InputTextComponent, prop);
          break;
        case 'number':
        case 'range':
        case 'color':
          this.addComponent(InputNumberComponent, prop);
          break;
        case 'file':
          this.addComponent(InputFileBase64Component, prop);
          break;
        case 'files':
          this.addComponent(InputFileBase64MultiComponent, prop);
          break;
        case 'checkbox':
        case 'radio':
          // this.addComponent(InputNumberComponent, prop);
          this.addComponent(InputBooleanComponent, prop);
          break;
        case 'textarea':
          this.addComponent(TextareaComponent, prop);
          break;
        case 'select':
          this.addComponent(SelectComponent, prop);
          break;
        case 'select-color':
          this.addComponent(SelectColorComponent, prop);
          break;
        case 'submit':
        case 'reset':
          this.addComponent(ButtonComponent, prop);
          break;
        case 'nested':
          this.addComponent(FormGroupComponent, prop, prop.key);
          break;
        case 'array':
          this.addComponent(FormArrayComponent, prop);
          break;
        default:
          console.log('wrong type of control! ' + prop);
      }
    }
  }
}
