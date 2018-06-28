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
export class ProductImagesService implements OnInit {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {
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

  public uploadImage(advert_pk: number, file: string) {
    return this.http.post(apiUrls.products + advert_pk + '/image/', {'advert': advert_pk, 'file': file})
      .pipe(
        tap((image: Image) => {
          this.messageService.addSuccess('uploaded to server image productId:' + image.pk);
          console.log('uploadNewImage: ' + image);

        }),
        catchError(this.handleError('uploadNewImage:', []))
      );
  }

  public uploadImages(advert_pk: number, images: string[]): Observable<any> {
    return from(images).pipe(
      concatMap((image: string) => this.uploadImage(advert_pk, image)),
      catchError(this.handleError('uploadNewImages:', []))
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


  public deleteImage(id: number, advert_pk: string) {
    return this.http.delete(apiUrls.products + advert_pk + '/image/' + id)
      .pipe(
        tap(() => {
          this.messageService.addSuccess('deleted from server image productId:' + id);
          console.log('deleteImage: ' + id);

        }),
        catchError(this.handleError('deleteImage:', []))
      );
  }

}
