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
 * service contains HTTP requests functions for working with product images on ResApi
 */
@Injectable()
export class CartService implements OnInit {

  public handleError: HandleError;
  // private currentBasket: number = null;
  private _cartSubject = new BehaviorSubject<Array<ProductInOrder>>([]);

  constructor(private http: HttpClient,
              private sessionService: SessionService,
              // private httpErrorHandler: HttpErrorHandler,
              // private messageService: MessageService
  ) {
    // this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {
  }

  public setCart(value: ProductInOrder[]): void {
    this._cartSubject.next(value);
    this.sessionService.cart = value;
  }

  public getCart(): Observable<Array<ProductInOrder>> {
    if (!this._cartSubject.value.length && this.sessionService.cart) {
      console.log('local');
      this._cartSubject.next(this.sessionService.cart);
    } else if (this.sessionService.token) {
      // this.getALLProducts().subscribe();
    }
    return this._cartSubject.asObservable().pipe(distinctUntilChanged(), share());
  }

  public addProductInCart(product: Product, count = 1) {
    const newCart: ProductInOrder[] = this._cartSubject.value;
    const existProductIndex = newCart.findIndex(data => data.product.pk === product.pk);
    if (existProductIndex === -1) {
      newCart.push({product: product, count: count});
    } else {
      newCart[existProductIndex].product = product;
      newCart[existProductIndex].count += count;
    }
    console.log(newCart);
    this.setCart(newCart);
  }

  public removeProductInCart(id: number) {
    const newCart: ProductInOrder[] = this._cartSubject.value
      .filter((item) => item.product.pk !== id);
    this.setCart(newCart);
  }
}
