import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf, optionsConf} from "../dynamic-form/dynamic-form.model";
import {AuthService as SocialAuthService} from "angular5-social-login";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../core/services/product.service";
import {Product} from "../core/models/product";
import {Observable} from "rxjs/Observable";
import {from} from "rxjs/internal/observable/from";
import {concat, concatMap, switchMap, takeUntil, takeWhile, tap} from "rxjs/operators";
import {Subject} from "rxjs/internal/Subject";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";


@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss']
})
export class ProductEditPageComponent implements OnInit, OnDestroy{
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public product: Product;

  public props: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private dataProductsService: ProductService,
              private route: ActivatedRoute) {

  }

  ngOnInit(){
    console.log("product: ");

    this.route.data.subscribe(
      product => {
        this.product = product.data;
        console.log("product: " + JSON.stringify(product.data));
      },
      err => {
        console.log(err.message);
      }
    );

    this.props = this.dynamicFormService.getFormConfig('product');
    this.dataProductsService.getLocations().subscribe(data =>{
      for(let prop of this.props){
        if(prop.key === 'location'){
          prop.options.push(...data);
        }
      }
    });

  }

  onAddProduct(event) {
    // let newProduct: Product;
    // let newImages: String[] = ;
    // for(let prop in event){
    //   if(prop === 'images'){
    //
    //   }
    // }

    // let images = new Array<string>(...event.images);
    // console.log(images);
    // delete event['images'];
    //
    // this.dataProductsService.addProduct(event).subscribe(
    //   (data: Product) =>  {
    //     this.dataProductsService.addImage(data.pk, images[0]).subscribe(
    //       img => console.log(img)
    //     );

    // http create -> swithMap ->  Observable From([img1, img2]) -- ignore img-> concatMap( 2nd send for img)-> resultSelector ->

    const images = event.images;
    delete event['images'];

    this.dataProductsService.updateProduct(this.product.pk, event).pipe(
      // takeWhile(() => !!images),
      // switchMap((val) => this.dataProductsService.addImages(val.pk, images))
    )
      .subscribe(data => console.log("dataProductsService done! " + data));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }


}



