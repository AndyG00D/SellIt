import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from "../core/services/product.service";
import {Product} from "../core/models/product";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers: [ProductService],
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  public products: Product[];
  private _offset: number;
  private _limit: number = 12;
  private _isLoadData: boolean;
  public infoMsg: string;


  constructor(private dataProducts: ProductService) {
  }

  public ngOnInit() {
    this.products = [];
    this._offset = 0;
     this.getProducts();
  }

  public ngOnDestroy(): void {
    this.dataProducts.stop();
  }

  public loadProducts(isNextPage: boolean): void {
    if (isNextPage && this._isLoadData) {
      this._isLoadData = false;
      this._offset += this._limit;
      this.getProducts();
    }
  }

  private getProducts() {
    this.dataProducts.getProducts(this._offset, this._limit)
      .subscribe((res: Product[]) => {
        // console.log('loading userProps:' + JSON.stringify(res));
        this.products.push(...res);
        this.infoMsg = this.dataProducts.infoMsg;
        this._isLoadData = true;
      }
      )
  }


}
