import {Directive, ElementRef, Renderer2} from '@angular/core';
import {DataProductsService} from "./data-products.service";


@Directive({
  selector: '[appInfiniteScroll]',
  host: {
    '(window:scroll)': 'whenScrolled()'
  }
})

export class InfiniteScrollDirective {

  constructor(private element: ElementRef, private renderer: Renderer2, private dataProducts: DataProductsService) {
  }

  whenScrolled() {
    if (window.scrollY + window.innerHeight + 100 > this.element.nativeElement.scrollHeight) {
      setTimeout(this.dataProducts.addDataProducts(), 5000);
    }
  }
}

