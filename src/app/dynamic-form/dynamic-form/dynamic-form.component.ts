import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type, ComponentRef, OnChanges
} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {SignInFormComponent} from "../../shared/components/sign-in-form/sign-in-form.component";
import {LabelComponent} from "../label/label.component";
import {InputTextComponent} from "../input-text/input-text.component";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() props;
  // @ViewChild('elem') container: ViewContainerRef;
  // @ViewChild('container', { read: ViewContainerRef })
  // container: ViewContainerRef;
  // @ViewChild('inner')
  // viewContainerRef;

  form: FormGroup;

  HelloWorld;


  constructor(
    // private _renderer: Renderer2,
    private factoryResolver: ComponentFactoryResolver,
    //           public view: ViewContainerRef,
    //           private componentRef: ViewContainerRef
  ) {
    // this.viewContainerRef = view;
    // this.form = this.createForm(this.props);
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.createForm(this.props);
    // this.createFormView(this.props);
    // innerForm = SelectComponent;
    // this.addDynamicComponent();
    // this.loadComponent();
    // this.createComponent(SignInFormComponent);
    // this.createFormView(this.props)
  }

  ngOnChanges() {
    // if (this.props) {
    //   this.container.clear();
    //   this.props.forEach(controlConfig => {
    //     this.form.addControl(controlConfig.name, new FormControl());
    //     this.buildControl(controlConfig);
    //   });
    // }

    //   if (this.props) {
    //   this.form = this.createForm(this.props);
    // }
  }

//   private buildControl(controlConfig: DynamicControlConfig): void {
//     const factory = this.cfr.resolveComponentFactory(DynamicFormControlComponent);
//     const control = this.formContainer.createComponent(factory);
//     control.instance.controlConfig = controlConfig;
//     control.instance.formGroup = this.form;
//   }
// }


  ngAfterViewInit() {
    // this.createFormView(this.props);
  }

  // addDynamicComponent(component: Type<any>, prop = null, form = null) {
  //   // const newFactory = this.factoryResolver.resolveComponentFactory(component);
  //   // const newComponent = newFactory.create(this.container.parentInjector);
  //   // // const componentRef = this.container.insert(newComponent.hostView);
  //   // this.appRef.attachView(newComponent.hostView);
  //   // newComponent.instance['prop'] = prop;
  //
  //   let componentFactory = this.factoryResolver.resolveComponentFactory(component);
  //   let componentRef = this.container.createComponent(componentFactory);
  //   if (prop !== null) {
  //     componentRef.instance['prop'] = prop;
  //   }
  //   if (form !== null) {
  //     componentRef.instance.formGroup = form;
  //   }
  // }

  // createComponent(component: Type<any>, prop) {
  //   // this.container.clear();
  //   // const factory = this.componentFactoryResolver.resolveComponentFactory(SignInFormComponent);
  //   let factory = this.componentFactoryResolver.resolveComponentFactory(component);
  //   this.componentRef = this.container.createComponent(factory).instance.prop = prop;
  //   // this.componentRef.componentRef.instance.prop = prop;
  //
  //   // let container = this.adHost.container;
  //   // container.clear();
  //   //
  //   // let componentRef = container.createComponent(componentFactory);
  //   // (<AdComponent>componentRef.instance).props = adItem.props;
  // }
// -------------------------------------------------------

  // addDynamicComponent() {
  //   const factory = this.componentFactoryResolver.resolveComponentFactory(SignInFormComponent);
  //   const component = factory.create(this.container);
  //   this.container.insert(component);
  // }

  // setRootViewContainerRef(container) {
  //   this.rootViewContainer = container
  // }
// ---------------------------------------
//   loadComponent(component) {
  //
  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
  //
  //   this.container.clear();
  //
  //   // this.componentRef =
  //     this.container.createComponent(componentFactory);
  //   // (componentRef.instance).prop = adItem.props;
  // }

  // createFormView(conf): any {
  //   //   let formView = this._renderer.createElement('div');
  //   for (let prop of conf) {
  //     this.HelloWorld = {LabelComponent, prop};
  //     // this.createComponent(SignInFormComponent);
  //   }
  // }
  // switch (prop.type) {
  //   case 'text':
  //   case 'email':
  //   case 'password':
  //   case 'search':
  //   case 'tel':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   case 'number':
  //   case 'range':
  //   case 'checkbox':
  //   case 'radio':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   case 'textarea':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   case 'select':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   case 'nested':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   case 'area':
  //     alert( 'Да, и эти браузеры мы поддерживаем' );
  //     break;
  //   default:
  //     console.log('wrong type of control! ' +  prop);
  // }

  //   if (prop.type === 'nested') { // generate Nested Form
  //     const text = this._renderer.createText(prop.key);
  //     const li = this._renderer.createElement('li');
  //     const ul = this._renderer.createElement('ul');
  //     this._renderer.appendChild(ul, this.createFormView(prop.props));
  //     this._renderer.appendChild(li, ul);
  //     this._renderer.appendChild(formView, this._label.elementRef);
  //     // formGroup[prop.key] = this.createForm(prop.props);
  //     console.log(prop.key);
  //   } else if (prop.type === 'array') { // generate Form Array
  //     let items = [];
  //     const text = this._renderer.createText(prop.key);
  //     const li = this._renderer.createElement('li');
  //     const ul = this._renderer.createElement('ul');
  //     const item = this.createFormView(prop.props);
  //     for (let i = 0; i < prop.arrayLength; i++) {
  //       this._renderer.appendChild(ul, item);
  //     }
  //     this._renderer.appendChild(li, ul);
  //     this._renderer.appendChild(formView, this._label.elementRef);
  //   }
  //   else { // generate Form Control
  //     const text = this._renderer.createText(prop.key);
  //     const li = this._renderer.createElement('app-sign-in-form');
  //     // this._renderer.appendChild(li, text);
  //     this._renderer.appendChild(formView, li);
  //     // formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
  //     // console.log(prop.key);
  //   }
  // }
  //   // this._renderer.appendChild(this._elem.nativeElement, formGroup);
  // console.log('in function' + formView);
  // return formView;
  // }


  // setup the form
  createForm(props): FormGroup {
    const formGroup = {};
    for (let prop of props) {
      if (prop.type === 'nested') { // generate Nested Form
        formGroup[prop.key] = this.createForm(prop.conf);
      } else if (prop.type === 'array') { // generate Form Array
        let items = [];
        const item = this.createForm(prop.conf);
        for (let i = 0; i < prop.arrayLength; i++) {
          items.push(item);
        }
        formGroup[prop.key] = new FormArray(items);
      } else if (prop.type !== 'submit' || prop.type !== 'reset') { // generate Form Control
        formGroup[prop.key] = new FormControl(prop.value, prop.validators);
      }
    }
    return new FormGroup(formGroup);
  }


  // loadComponent() {
  //    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignInFormComponent);
  //
  //   // let container = this.adHost.container;
  //   // container.clear();
  //
  //   let componentRef = this.container.createComponent(componentFactory);
  //   componentRef.instance
  //   // (<AdComponent>componentRef.instance).props = adItem.props;
  //   // let container = this._elem;
  //   // // container.clear();
  //   //
  //   // let componentRef = container.createComponent(componentFactory);
  //   // this._elem.createComponent(componentFactory);
  //   // this._elem.createComponent(componentFactory).hostView;
  //   // (<AdComponent>componentRef.instance).props = adItem.props;
  // }

  // createFormView(props): any {
  //
  //   for (let prop of props) {
  //     this.addDynamicComponent(LabelComponent, prop);
  //     switch (prop.type) {
  //       case 'text':
  //       case 'email':
  //       case 'password':
  //       case 'search':
  //       case 'tel':
  //         this.addDynamicComponent(SelectComponent, prop, this.form);
  //         break;
  //       case 'number':
  //       case 'range':
  //       case 'checkbox':
  //       case 'radio':
  //         this.addDynamicComponent(SelectComponent, prop, this.form);
  //         break;
  //       case 'textarea':
  //
  //         break;
  //       case 'select':
  //
  //         break;
  //       case 'nested':
  //
  //         break;
  //       case 'area':
  //
  //         break;
  //       default:
  //         console.log('wrong type of control! ' + prop);
  //     }
  //   }
  //
  // }

  // addItem(): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.fg.get('items').push(this.createItem());
  // }

  // removeItem(i: number) {
  //   this.fg.get('items').removeAt(i);
  // }

  // private mapValidators(validators) {
  //   const formValidators = [];
  //
  //   if(validators) {
  //     for(const validation of Object.keys(validators)) {
  //       if(validation === 'required') {
  //         formValidators.push(Validators.required);
  //       } else if(validation === 'min') {
  //         formValidators.push(Validators.min(validators[validation]));
  //       }
  //     }
  //   }
  //
  //   return formValidators;
  // }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
