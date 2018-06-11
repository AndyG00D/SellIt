import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";


@Injectable({
  providedIn: 'root'
})
export class DataProductsService implements OnInit {

  private _isAlive: boolean = true;
  public infoMsg: string = '';

  public handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {
  }

  public getDataProducts(offset: number, limit: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get(apiUrls.products, {params})
      .pipe(
        takeWhile(() => this._isAlive),
        map((response: Response) => {

          response['results'].forEach(item => {
            this._setNoImage(item);
          });

          if (response["next"] === null) {
            this.stop();
            this.infoMsg = 'All of the products downloaded...';
            console.log('All of the products downloaded...');
          }

          return response["results"];
        }),
        catchError(this.handleError('getDataProducts:', []))
        // catchError(error => {
        //   console.log(error.message || 'Server error');
        //   return throwError(error.message);
        // })
      );
  }


  public stop() {
    this._isAlive = false;
  }

  public getDataProduct(id: number): Observable<Product> {
    return this.http.get<Product>(apiUrls.products + id.toString() + '/')
      .pipe(
        map((product) => {
            this._setNoImage(product);
            this._setNoAvatar(product);
            return product;
          },
          catchError(this.handleError('getDataProduct:', []))
        )
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

  private _setNoAvatar(product: Product): void {
    if (product.owner.avatar == undefined) {
      product.owner.avatar = apiUrls.noAvatar;
    }
  }
}
