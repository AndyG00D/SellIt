import {Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import {ApiUrls} from '../api-urls';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {OptionsConf} from '../../dynamic-form/dynamic-form.model';

/**
 * service contains HTTP requests functions for working with products (Adverts) on ResApi
 */
@Injectable()
export class ProductService implements OnInit {

  private _isAlive: boolean;
  public infoMsg: string;

  public handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
    this._isAlive = true;
    this.infoMsg = '';
  }

  public ngOnInit() {
  }

  public getProducts(offset: number, limit: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get(ApiUrls.products, {params})
      .pipe(
        takeWhile(() => this._isAlive),
        map((response: any) => {

          response.results.forEach(item => {
            this._setNoImage(item);
          });

          if (response.next === null) {
            this.stop();
            this.messageService.addSuccess('All of the products downloaded...');
          }

          return response.results;
        }),
        catchError(this.handleError('getProducts:', []))
      );
  }

  public stop(): void {
    this._isAlive = false;
  }

  public getProduct(id: number | string): Observable<Product> {
    console.log(id);
    return this.http.get<Product>(ApiUrls.products + id + '/')
      .pipe(
        map((product) => {
            this._setNoImage(product);
            return product;
          },
          catchError(this.handleError('getProduct:', []))
        )
      );
  }

  public addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(ApiUrls.products, newProduct)
      .pipe(
        tap((response: any) => {
          this.messageService.addSuccess('Created new product productId:' + response.pk);
        }),
        catchError(this.handleError('addProduct:', []))
      );
  }

  public updateProduct(pk: number, newProduct: Product): Observable<Product> {
    return this.http.patch(ApiUrls.products + pk + '/', newProduct)
      .pipe(
        tap((response: any) => {
          this.messageService.addSuccess('Update product id:' + response.pk);
        }),
        catchError(this.handleError('updateProduct:', []))
      );
  }

  public deleteProduct(pk: number): Observable<any> {
    return this.http.delete(ApiUrls.products + pk + '/')
      .pipe(
        tap(() => {
          this.messageService.addSuccess('Delete product id:' + pk);
        }),
        catchError(this.handleError('deleteProduct:', []))
      );
  }

  public getLocations(): Observable<Array<OptionsConf>> {
    return this.http.get(ApiUrls.locations)
      .pipe(
        map((response: any) => {
          const res: OptionsConf[] = [];
          for (const item of response) {
            res.push({label: item.name, value: item.id});
          }
          return res;
        }),
        catchError(this.handleError('getLocations:', []))
      );
  }

  private _setNoImage(product: Product): void {
    if (product.images[0] === undefined) {
      product.images.push({
        pk: null,
        advert: null,
        file: ApiUrls.noImage
      });
    }
  }

}
