import {
  AfterContentChecked,
  AfterViewInit, ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  Input, OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import {LabelComponent} from "./label/label.component";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {InputTextComponent} from "./input-text/input-text.component";
import {InputNumberComponent} from "./input-number/input-number.component";
import {TextareaComponent} from "./textarea/textarea.component";
import {SelectComponent} from "./select/select.component";
import {FormControlConf} from "./dynamic-form.model.ts";
import {NestedFieldComponent} from "./nested-field/nested-field.component";

@Directive({
  selector: '[dynamic-form]',
})
export class DynamicFormDirective implements OnInit, AfterViewInit, AfterContentChecked, OnChanges {
  @Input() props;
  @Input() form: FormGroup;

  constructor(public container: ViewContainerRef,
              private factoryResolver: ComponentFactoryResolver,
              // private appRef: ApplicationRef
  ) {

  }


  addDynamicComponent(component: Type<any>, prop: FormControlConf = null, form: FormGroup = null) {
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
    if (form !== null) {
      componentRef.instance.form = form;
    }
  }

  ngOnInit() {
    // this.setRootViewContainerRef(this.container);
    // this.addDynamicTemplate();
    // this.addDynamicComponent(SelectComponent, this.props);
    // console.log('dynamic: ' + JSON.stringify(this.props));
    // this.form = this.createForm(this.props);

  }

  ngAfterViewInit() {
    // this.createFormView(this.props);
  }

  ngAfterContentChecked(){
    // setTimeout(() => {
    //   this.createFormView(this.props);
    // }, 10);
  }

  ngOnChanges() {
    if (this.props) {
      // setTimeout(() => {
        this.createFormView(this.props);
      // }, 1000);
    }
  }

  // setup the form
  // createForm(props): FormGroup {
  //   const formGroup = {};
  //   for (let prop of props) {
  //     if (prop.type === 'nested') { // generate Nested Form
  //       formGroup[prop.key] = this.createForm(prop.conf);
  //     } else if (prop.type === 'array') { // generate Form Array
  //       let items = [];
  //       const item = this.createForm(prop.conf);
  //       for (let i = 0; i < prop.arrayLength; i++) {
  //         items.push(item);
  //       }
  //       formGroup[prop.key] = new FormArray(items);
  //     }
  //     else { // generate Form Control
  //       formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
  //     }
  //   }
  //   return new FormGroup(formGroup);
  // }

  createFormView(props): any {

    for (let prop of props) {
      this.addDynamicComponent(LabelComponent, prop);
      switch (prop.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'search':
        case 'tel':
          this.addDynamicComponent(InputTextComponent, prop, this.form);
          break;
        case 'number':
        case 'range':
        case 'checkbox':
        case 'radio':
          this.addDynamicComponent(InputNumberComponent, prop, this.form);
          break;
        case 'textarea':
          this.addDynamicComponent(TextareaComponent, prop, this.form);
          break;
        case 'select':
          this.addDynamicComponent(SelectComponent, prop, this.form);
          break;
        case 'nested':
          this.addDynamicComponent(NestedFieldComponent, prop, this.form);
          break;
        case 'area':

          break;
        default:
          console.log('wrong type of control! ' + prop);
      }
      // this.addDynamicComponent(InputTextComponent, prop, this.form);
    }

  }


}
