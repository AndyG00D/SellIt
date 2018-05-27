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
          let res: Product[] = [];

          response["results"].forEach(item => res.push(new Product(item)));

          if (response["next"] === null) {
            this.stop();
            this.infoMsg = 'All of the products downloaded...';
            console.log('All of the products downloaded...');
          }

          return res;
        }),
        catchError(error => {
          console.log(error.message || 'Server error');
          return throwError(error.message);
        }));
  }


  public stop() {
    this._isAlive = false;
  }


}
