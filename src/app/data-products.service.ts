import { Injectable, OnInit} from '@angular/core';
import { Product} from "./product";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataProductsService implements OnInit{

  constructor(private http: HttpClient) {
  }

  public ngOnInit(){
  }

  public getDataProducts(offset:number, limit:number): Observable<Product[]>{
    const params = new HttpParams()
    .set('offset', offset.toString())
    .set('limit', limit.toString());

    return this.http.get('http://light-it-04.tk/api/adverts/', {params})
      .pipe(
        map((response: Response)  => {
          let res: Product[] = [];
            response["results"].forEach(item => res.push(new Product(item)));
          return res;
        }),
          catchError(err => {
            console.log(err);
            return throwError(err);
          })
      )
  }

  // addDataProducts(){
  //   this._dataProducts.push(...this._tempDataProducts);
  // }

}
