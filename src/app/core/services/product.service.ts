import {Injectable, OnInit} from '@angular/core';
import {Image, Product} from "../models/product";
import {map, catchError, concatMap, tap} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {from} from "rxjs/internal/observable/from";
import {MessageService} from "./message.service";
import {optionsConf} from "../../dynamic-form/dynamic-form.model";


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

  public stop() {
    this._isAlive = false;
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(apiUrls.products + id.toString() + '/')
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
          this.messageService.addSuccess('Created new product id:' + response.pk);
          console.log('addProduct: ' + response);
        }),
        catchError(this.handleError('addProduct:', []))
      );
  }

  public updateProduct(pk: number, newProduct: Product) {
    return this.http.patch(apiUrls.products + pk + '/', newProduct)
      .pipe(
        map((response: Response) => {
          console.log('updateProduct: ' + response);
        }),
        catchError(this.handleError('updateProduct:', []))
      );
  }

  public deleteProduct(newProduct: Product) {
    return this.http.delete(apiUrls.products + newProduct.pk + '/')
      .pipe(
        map((response: Response) => {
          console.log('deleteProduct: ' + response);
        }),
        catchError(this.handleError('deleteProduct:', []))
      );
  }


  public getLocations(): Observable<Array<optionsConf>> {
    return this.http.get(apiUrls.locations)
      .pipe(
        map((response: any) => {
          // console.log(JSON.stringify(response));
          let res: optionsConf[] = [];
          for (let item of response) {
            res.push({label: item.name, value: item.id})
          }
          // console.log(JSON.stringify(res));
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
