import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs/internal/Subject';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Product, Owner} from "../core/models/product";
import {DataProductsService} from "../core/services/data-products.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})

export class DetailPageComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public product: Product;

  //temp props of user
  public user: Owner = {
    id: 23,
    username: "zicrael",
    email: "13ccdd@gmail.com",
    first_name: "Can`t",
    last_name: "Stop",
    avatar: "http://light-it-04.tk/media/avatars/f9ed685d-818.jpg",
    location: null,
    color_scheme: "#7164ce",
    language: "en"
  };

  constructor(
    private dataProductsService: DataProductsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
        product => {
          this.product = product.data;
          console.log("product: " + JSON.stringify(product.data));
        },
        err => {
          console.log(err.message);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
}
