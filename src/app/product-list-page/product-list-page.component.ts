import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataProductsService} from "../data-products.service";
import {Product} from "../product";
import {InfiniteScrollDirective} from "../infinite-scroll.directive";


@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers: [DataProductsService, InfiniteScrollDirective]
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  products: Product[];
  offset: number;
  limit: number = 10;


  constructor(private dataProducts: DataProductsService) {
  }

  ngOnInit() {
    this.products = [];
    this.offset = 0;
    this.addProducts();
  }

  ngOnDestroy(): void {
    this.dataProducts.stop();
  }

  loadProducts(isNextPage) {
    if (isNextPage) {
      this.offset += this.limit;
      this.addProducts();
    }
  }

  addProducts(){
    this.dataProducts.getDataProducts(this.offset,this.limit)
      .subscribe((res: Product[]) => {
      console.log('loading data:' + res);
      this.products.push(...res);
    });

  }





}
