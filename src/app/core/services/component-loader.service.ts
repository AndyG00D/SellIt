import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';

@Injectable()

export class ComponentLoaderService {
  factoryResolver;
  rootViewContainer;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addDynamicComponent(component) {
    const factory = this.factoryResolver.resolveComponentFactory(component);
    const container = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(container.hostView)
  }
}
