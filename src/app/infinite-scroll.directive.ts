import {Directive, ElementRef, Renderer2} from '@angular/core';
import {DataProductsService} from "./data-products.service";
// import {window} from "rxjs/operators";
// import {ProductListPageComponent} from "./product-list-page/product-list-page.component";
// import {Product} from "./product";

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
    console.log("1: " + this.element.nativeElement.scrollTop + "2: " + this.element.nativeElement.offsetHeight + '3 ' + this.element.nativeElement.scrollHeight);
    let elem = this.element.nativeElement;
    if (elem.scrollTop + elem.offsetHeight >= elem.scrollHeight) {
      setTimeout(this.dataProducts.addDataProducts(), 5000);
    }
  }
}

