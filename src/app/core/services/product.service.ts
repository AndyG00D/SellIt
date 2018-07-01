import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {map, catchError, tap} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';
import {takeWhile} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {MessageService} from "./message.service";
import {optionsConf} from "../../dynamic-form/dynamic-form.model";

/**
 * service contains HTTP requests functions for working with products (Adverts) on ResApi
 */
@Injectable()
export class ProductService implements OnInit {

  private _isAlive: boolean = true;
  public infoMsg: string = '';

  public handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {
  }

  public getProducts(offset: number, limit: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get(apiUrls.products, {params})
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
    return this.http.get<Product>(apiUrls.products + id + '/')
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
    return this.http.post<Product>(apiUrls.products, newProduct)
      .pipe(
        tap((response: any) => {
          this.messageService.addSuccess('Created new product productId:' + response.pk);
          console.log('addProduct: ' + response);
        }),
        catchError(this.handleError('addProduct:', []))
      );
  }

  public updateProduct(pk: number, newProduct: Product): Observable<Product> {
    return this.http.patch(apiUrls.products + pk + '/', newProduct)
      .pipe(
        tap((response: any) => {
          this.messageService.addSuccess('Update product id:' + response.pk);
          console.log('addProduct: ' + response);
        }),
        catchError(this.handleError('updateProduct:', []))
      );
  }

  public deleteProduct(pk: number): Observable<any> {
    return this.http.delete(apiUrls.products + pk + '/')
      .pipe(
        tap(() => {
          this.messageService.addSuccess('Delete product id:' + pk);
          console.log('addProduct: ' + pk);
        }),
        catchError(this.handleError('deleteProduct:', []))
      );
  }


  public getLocations(): Observable<Array<optionsConf>> {
    return this.http.get(apiUrls.locations)
      .pipe(
        map((response: any) => {
          let res: optionsConf[] = [];
          for (let item of response) {
            res.push({label: item.name, value: item.id})
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
        file: apiUrls.noImage
      });
    }
  }

}
