import {Injectable, OnInit} from '@angular/core';
import {Image} from '../models/product';
import {map, catchError, concatMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiUrls} from '../api-urls';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {from} from 'rxjs/internal/observable/from';
import {MessageService} from './message.service';

/**
 * service contains HTTP requests functions for working with product images on ResApi
 */
@Injectable()
export class ProductImagesService implements OnInit {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {
  }

  public getImages(advert_pk: number): Observable<Array<Image>> {
    return this.http.get(ApiUrls.products + advert_pk + '/image/')
      .pipe(
        tap((response: Image[]) => {
          console.log('getImages: ' + response);
        }),
        catchError(this.handleError('deleteProduct:', []))
      );
  }

  public uploadImage(advert_pk: number, file: string): Observable<any> {
    return this.http.post(ApiUrls.products + advert_pk + '/image/', {'advert': advert_pk, 'file': file})
      .pipe(
        tap((image: Image) => {
          this.messageService.addSuccess('uploaded to server image productId:' + image.pk);
        }),
        catchError(this.handleError('uploadNewImage:', []))
      );
  }

  public uploadImages(advert_pk: number, images: string[]): Observable<any> {
    return from(images).pipe(
      concatMap((image: string) => this.uploadImage(advert_pk, image)),
      catchError(this.handleError('uploadNewImages:', []))
    );
  }

  public updateImage(id: number, advert_pk: number, file: string): Observable<any> {
    return this.http.patch(ApiUrls.products + advert_pk + '/image/' + id, {'advert': advert_pk, 'file': file})
      .pipe(
        tap((image: Image) => {
          this.messageService.addSuccess('update on server image productId:' + image.pk);
        }),
        catchError(this.handleError('updateImage:', []))
      );
  }

  public deleteImage(id: number, advert_pk: string): Observable<any> {
    return this.http.delete(ApiUrls.products + advert_pk + '/image/' + id)
      .pipe(
        tap(() => {
          this.messageService.addSuccess('deleted from server image productId:' + id);
          console.log('deleteImage: ' + id);

        }),
        catchError(this.handleError('deleteImage:', []))
      );
  }

}
