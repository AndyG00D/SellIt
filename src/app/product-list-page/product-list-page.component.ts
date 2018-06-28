import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from "../core/services/product.service";
import {Product} from "../core/models/product";
import {User} from "../core/models/user";
import {ProfileService} from "../core/services/profile.service";

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
  public user: User;


  constructor(private dataProducts: ProductService,
              private profileService: ProfileService)
  {
    this.profileService.getUser().subscribe((user) => {this.user = user});
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

  private getProducts(): void {
    this.dataProducts.getProducts(this._offset, this._limit)
      .subscribe((res: Product[]) => {
        this.products.push(...res);
        this.infoMsg = this.dataProducts.infoMsg;
        this._isLoadData = true;
      }
      )
  }


}
