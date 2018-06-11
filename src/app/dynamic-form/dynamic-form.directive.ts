import {ComponentFactoryResolver, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef} from '@angular/core';
import {LabelComponent} from "./components/label/label.component";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {InputTextComponent} from "./components/input-text/input-text.component";
import {InputNumberComponent} from "./components/input-number/input-number.component";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {SelectComponent} from "./components/select/select.component";
import {FormControlConf} from "./dynamic-form.model";
import {NestedFieldComponent} from "./components/nested-field/nested-field.component";
import {InputBooleanComponent} from "./components/input-boolean/input-boolean.component";
import {ButtonComponent} from "./components/button/button.component";

@Directive({
  selector: '[dynamic-form]',
})
export class DynamicFormDirective implements OnInit, OnChanges {
  @Input() props;
  @Input() form: FormGroup;
  @Input() parentsFormGroup: string = '';

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

  addComponent(component: Type<any>, prop: FormControlConf = null) {
    // const newFactory = this.factoryResolver.resolveComponentFactory(component);
    // const newComponent = newFactory.create(this.container.parentInjector);
    // // const componentRef = this.container.insert(newComponent.hostView);
    // this.appRef.attachView(newComponent.hostView);
    // newComponent.instance['prop'] = prop;

    let componentFactory = this.factoryResolver.resolveComponentFactory(component);
    let componentRef = this.container.createComponent(componentFactory);
    if (prop !== null) {
      componentRef.instance['prop'] = prop;
    }
    //add context of current form
    if (this.form !== null) {
      componentRef.instance.form = this.form;
    }
    //add parents Form Group
    if (this.parentsFormGroup) {
      componentRef.instance.parentsFormGroup = this.parentsFormGroup + '.';
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
          this.addComponent(InputNumberComponent, prop);
          break;
        case 'checkbox':
        case 'radio':
          this.addComponent(InputBooleanComponent, prop);
          break;
        case 'textarea':
          this.addComponent(TextareaComponent, prop);
          break;
        case 'select':
          this.addComponent(SelectComponent, prop);
          break;
        case 'submit':
        case 'reset':
          this.addComponent(ButtonComponent, prop);
          break;
        case 'nested':
          this.addComponent(NestedFieldComponent, prop);
          break;
        case 'array':
          break;
        default:
          console.log('wrong type of control! ' + prop);
      }
    }
  }
}
