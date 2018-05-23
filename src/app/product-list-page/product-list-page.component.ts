import {Component, OnInit} from '@angular/core';
import {DataProductsService} from "../data-products.service";
import {Product} from "../product";
import {InfiniteScrollDirective} from "../infinite-scroll.directive";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers: [DataProductsService, InfiniteScrollDirective]
})
export class ProductListPageComponent implements OnInit {
  products: Product[];
  // error:any;

  constructor(private dataProducts: DataProductsService) {
  }

  // loadProducts(isNextPage) {
    // if (isNextPage) {
    //   // this.dataProducts.addDataProducts();
    //   this.dataProducts.getDataProducts(11,10).subscribe((res: Product[]) => {
    //     this.products = res;
    //     console.log(this.products);
    //   });
    // }
  // }

  ngOnInit() {
    // this.products = this.dataProducts.getDataProducts();
    this.dataProducts.getDataProducts(1,2).subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
    });
  }

}
