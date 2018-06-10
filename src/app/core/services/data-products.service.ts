import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataProductsService implements OnInit {

  private _productsURL: string = 'http://light-it-04.tk/api/adverts/';
  private _noImageURL: string = 'https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6d/No_image.png/revision/latest?cb=20120417110152';
  private _noAvatarURL: string = 'http://bibka.org/templates/bibkanew/dleimages/noavatar.png';
  private _isAlive: boolean = true;
  public infoMsg: string = '';

  constructor(private http: HttpClient) {
  }

  public ngOnInit() {
  }

  public getDataProducts(offset: number, limit: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get(this._productsURL, {params})
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
        catchError(error => {
          console.log(error.message || 'Server error');
          return throwError(error.message);
        }));
  }


  public stop() {
    this._isAlive = false;
  }

  public getDataProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this._productsURL + id.toString() + '/').pipe(
      map((product) => {
          this._setNoImage(product);
          this._setNoAvatar(product);
          return product;
        },
        catchError(error => {
          console.log(error.message || 'Server error');
          return throwError(error.message);
        })));
  }

  private _setNoImage(product: Product): void {
    if (product.images[0] === undefined) {
      product.images.push({
        pk: null,
        advert: null,
        file: this._noImageURL
      });
    }
  }

  private _setNoAvatar(product: Product): void {
    if (product.owner.avatar == undefined) {
      product.owner.avatar = this._noAvatarURL;
    }
  }
}
