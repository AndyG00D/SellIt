import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
import {ProductImagesService} from "../core/services/product-images.service";


@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.scss']
})
export class ProductAddPageComponent implements OnInit {

  @ViewChild('imagesUploader') imagesLoader;
  public props: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private dataProductsService: ProductService,
              private productImagesService: ProductImagesService) {

  }

  ngOnInit() {
    this.props = this.dynamicFormService.getFormConfig('product');
    this.dataProductsService.getLocations().subscribe(data => {
      for (let prop of this.props) {
        if (prop.key === 'location') {
          prop.options.push(...data);
        }
      }
    });
  }

  onAddProduct(event) {
    // const images = event.images;
    // delete event['images'];

    this.dataProductsService.addProduct(event)
    //   .pipe(
    //   takeWhile(() => !!images),
    //   switchMap((val) => this.productImagesService.uploadNewImages(val.pk, images))
    // )
      .subscribe(data => {
        console.log("dataProductsService done! " + data);
        this.imagesLoader.uploadNewImages(data.pk);
      });
  }
}




