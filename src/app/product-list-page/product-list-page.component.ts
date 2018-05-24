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
  public products: Product[];
  private _offset: number;
  private _limit: number = 10;
  private _isLoadData: boolean;


  constructor(private dataProducts: DataProductsService) {
  }

  public ngOnInit() {
    this.products = [];
    this._offset = 0;
    this._addProducts();
  }

  public ngOnDestroy(): void {
    this.dataProducts.stop();
  }

  public loadProducts(isNextPage: boolean): void {
    if (isNextPage && this._isLoadData) {
      this._isLoadData = false;
      this._offset += this._limit;
      this._addProducts();
    }
  }

  private _addProducts() {
    this.dataProducts.getDataProducts(this._offset, this._limit)
      .subscribe((res: Product[]) => {
        // console.log('loading data:' + JSON.stringify(res));
        this.products.push(...res);
        this._isLoadData = true;
      });

  }


}
