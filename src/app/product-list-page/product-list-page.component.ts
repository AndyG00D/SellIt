import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from '../core/services/product.service';
import {Product} from '../core/models/product';
import {User} from '../core/models/user';
import {ProfileService} from '../core/services/profile.service';
import {CartService} from '../core/services/cart.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * List of product:
 * loading more data when scroll down
 * Scroll top button
 * View special icon if auth user owner of product
 */
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers: [ProductService],
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  public products: Product[];
  private _offset: number;
  private readonly _limit: number = 12;
  private _isLoadData: boolean;
  public infoMsg: string;
  public user: User;
  private destroy$: Subject<void> = new Subject<void>();


  constructor(private dataProducts: ProductService,
              private profileService: ProfileService,
              private cartService: CartService) {
  }

  public ngOnInit() {
    this.profileService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });
    this.products = [];
    this._offset = 0;
    this.getProducts();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
      );
  }

  public onAddProduct(product: Product) {
    if (this.cartService.getProductIndex(product) !== -1) {
      this.cartService.addOneProductCountInCart(product);
    } else {
      this.cartService.addProductInCart(product);
    }
  }
}
