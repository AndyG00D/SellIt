import {Injectable, OnInit} from '@angular/core';
import {Image, Product} from '../models/product';
import {map, catchError, concatMap, tap, distinctUntilChanged, share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiUrls} from '../api-urls';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {ProductInOrder} from '../models/product-in-order';
import {SessionService} from './session.service';

/**
 * service of user cart
 */
@Injectable()
export class CartService implements OnInit {

  // public handleError: HandleError;
  // private currentBasket: number = null;
  public _cartSubject: BehaviorSubject<ProductInOrder[]>;

  constructor(private sessionService: SessionService,
              // private http: HttpClient,
              // private httpErrorHandler: HttpErrorHandler,
              // private messageService: MessageService
  ) {
    // this.handleError = httpErrorHandler.createHandleError('Errors: ');
    this._cartSubject = new BehaviorSubject<ProductInOrder[]>(this.sessionService.cart || []);
  }

  public ngOnInit() {
  }

  public setCart(value: ProductInOrder[]): void {
    this._cartSubject.next(value);
    this.sessionService.cart = value;
  }

  public get cart$(): Observable<ProductInOrder[]> {
    // if (!this._cartSubject.value.length && this.sessionService.cart) {
    //   this._cartSubject.next(this.sessionService.cart);
    // } else {
      // if (this.sessionService.token) {
      // this.getALLProducts().subscribe();
    // }
    return this._cartSubject.asObservable().pipe(share());
  }

  public get totalOfCart$(): Observable<Number> {
    return this.cart$.pipe(map(data => {
      let total = 0;
      for (const item of data) {
        total += item.product.price * item.count;
      }
      return total;
    }));
  }

  public getProductIndex(product: Product): number {
    return this._cartSubject.value.findIndex(data => data.product.pk === product.pk);
  }

  public addProductInCart(product: Product) {
    const newCart: ProductInOrder[] = this._cartSubject.value;
    newCart.push({product: product, count: 1});
    this.setCart(newCart);
  }

  public addOneProductCountInCart(product: Product) {
    const newCart: ProductInOrder[] = this._cartSubject.value;
    const index = this.getProductIndex(product);
    newCart[index].count += 1;
    this.setCart(newCart);
  }

  public setProductCountInCart(product: Product, count: number) {
    const newCart: ProductInOrder[] = this._cartSubject.value;
    const index = this.getProductIndex(product);
    newCart[index].count = count;
    this.setCart(newCart);
  }

  public removeProductInCart(id: any) {
    const newCart: ProductInOrder[] = this._cartSubject.value
      .filter((item) => item.product.pk !== id);
    this.setCart(newCart);
  }

}
