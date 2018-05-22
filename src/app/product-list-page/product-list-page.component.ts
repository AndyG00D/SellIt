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
    if(isNextPage) {
      this.dataProducts.addDataProducts();
    }
  }

  ngOnInit() {
    this.products = this.dataProducts.getDataProducts();
  }

}
