import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile, tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private _authURL: string = 'http://light-it-04.tk/api/registration/';
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

    return this.http.get(this._authURL, {params})
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

  public getAuth(log: any) {
    const obj = {
      "username": "AndyG00D",
      "email": "achicunov+1@gmail.com",
      "password1": "aaaa123456789",
      "password2": "aaaa123456789"
    };

    return this.http.post(this._authURL, obj)
      .pipe(
      map((data) => {
          // this._setNoImage(product);
          // this._setNoAvatar(product);
          // return product;
        console.log('auth' + data);
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



  public getLogIn(log: any) {
    const obj = {
      "email": "achicunov+1@gmail.com",
      "password1": "aaaa123456789",
    };

    return this.http.post('http://light-it-04.tk/api/login/', log)
      .pipe(
      tap((data: any) => {
            // this._setNoImage(product);
            // this._setNoAvatar(product);
            // return product;
            console.log('auth: ' + data.data['token']);
            localStorage.setItem("token", data['token']);
          },
          catchError(error => {
            console.log(error.message || 'Server error');
            return throwError(error.message);
          })));
  }
}
