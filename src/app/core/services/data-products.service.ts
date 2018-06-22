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


@Injectable()
export class DataProductsService implements OnInit {

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

  public getDataProducts(offset: number, limit: number): Observable<Product[]> {
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
        catchError(this.handleError('getDataProducts:', []))
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
            return product;
          },
          catchError(this.handleError('getDataProduct:', []))
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

  public updateProduct(newProduct: Product) {
    return this.http.patch(apiUrls.products + newProduct.pk + '/', newProduct)
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

  public getImages(advert_pk: number) {
    return this.http.get(apiUrls.products + advert_pk + '/image/')
      .pipe(
        tap((response: Response) => {
          console.log('deleteProduct: ' + response);
        }),
        catchError(this.handleError('deleteProduct:', []))
      );
  }

  public addImage(advert_pk: number, file: string) {
    return this.http.post(apiUrls.products + advert_pk + '/image/', {'advert': advert_pk, 'file': file})
      .pipe(
        tap((image: Image) => {
          this.messageService.addSuccess('uploaded image id:' + image.pk);
          console.log('addImage: ' + image);

        }),
        catchError(this.handleError('addImage:', []))
      );
  }

  public addImages(advert_pk: number, images: string[]): Observable<any> {
    return from(images).pipe(
      concatMap((image: string) => this.addImage(advert_pk, image)),
      catchError(this.handleError('addImages:', []))
    )
  }


  public updateImage(id: number, advert_pk: number, file: string) {
    return this.http.patch(apiUrls.products + advert_pk + '/image/' + id, {'advert': advert_pk, 'file': file})
      .pipe(
        map((response: Response) => {
          console.log('updateImage: ' + response);
        }),
        catchError(this.handleError('updateImage:', []))
      );
  }


  public deleteImage(id: number, advert_pk: number) {
    return this.http.delete(apiUrls.products + advert_pk + '/image/' + id)
      .pipe(
        map((response: Response) => {
          console.log('deleteImage: ' + response);
        }),
        catchError(this.handleError('deleteImage:', []))
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
