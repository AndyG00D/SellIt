import {Injectable, OnInit} from '@angular/core';
import {Product} from "./product";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataProductsService implements OnInit {

  _productsURL: string = 'http://light-it-04.tk/api/adverts/';
  isAlive: boolean = true;

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
        takeWhile(() => this.isAlive),
        map((response: Response) => {
          let res: Product[] = [];
          response["results"].forEach(item => res.push(new Product(item)));

          if (response["next"] == null) {
            this.stop();
            console.log('All of the products downloaded...')
          }
          return res;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

  public stop() {
    this.isAlive = false;
  }


}
