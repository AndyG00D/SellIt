import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef, ComponentFactoryResolver, Type, TemplateRef, Input
} from '@angular/core';
import {LabelComponent} from "../label/label.component";
import {DynamicFormDirective} from "../dynamic-form.directive";

// import {C} from "@angular/core/src/render3";


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() props;
  // @ViewChild('elem', {read: ViewContainerRef}) container: ViewContainerRef;
  // @ViewChild(DynamicFormDirective) container: DynamicFormDirective;


  // constructor(private factoryResolver: ComponentFactoryResolver) {
  //
  // }
  //
  //
  // addDynamicComponent(component: Type<any>, props = null) {
  //   // const newFactory = this.factoryResolver.resolveComponentFactory(component);
  //   // const newComponent = newFactory.create(this.container.parentInjector);
  //   // this.container.insert(newComponent.hostView);
  //
  //   let componentFactory = this.factoryResolver.resolveComponentFactory(component);
  //   let componentRef = this.container.createComponent(componentFactory);
  //   // if( props !== null) {
  //   //   componentRef.instance['prop'] = props;
  //   // }
  // }

  // addDynamicTemplate() {
  //   // const newFactory = this.factoryResolver.resolveComponentFactory(component);
  //   // const newComponent = newFactory.create(this.container.parentInjector);
  //   // this.container.insert(newComponent.hostView);
  //
  //   let componentFactory = this.factoryResolver.resolveComponentFactory(this.temp);
  //   let componentRef = this.container.createEmbeddedView(template);
  //   let componentRef = this.container.createEmbeddedView(this.temp);
  //   // if( props !== null) {
  //   //   componentRef.instance['prop'] = props;
  //   // }
  // }


ngOnInit(){
  console.log('dynamic: '+ JSON.stringify(this.props));
//   // this.setRootViewContainerRef(this.container);
//   // this.addDynamicTemplate();
//   this.addDynamicComponent(SelectComponent, "2");
//   this.addDynamicComponent(SelectComponent, "4");
}

}
