import {Component, OnInit} from '@angular/core';
import { DataProductsService } from "../data-products.service";
import { Product } from "../product";
import { InfiniteScrollDirective} from "../infinite-scroll.directive";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers:[DataProductsService, InfiniteScrollDirective ]
})
export class ProductListPageComponent implements OnInit    {
  products: Product[];

  constructor(private dataProducts: DataProductsService){
  }

  loadProducts(isNextPage){
    // this.products.push(...this.products);
    if(isNextPage) {
      this.dataProducts.addDataProducts();
    }
  }


  // whenScrolled(emit:Product) {
  //   this.loadProducts();
  // }

  // onCatch(emit:string) {
  //   console.log(emit);
  // }

  ngOnInit() {
    this.products = this.dataProducts.getDataProducts();
  }

}
