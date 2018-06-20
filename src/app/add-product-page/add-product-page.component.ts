import {Component, Input} from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {AuthService as SocialAuthService} from "angular5-social-login";
import {ActivatedRoute} from "@angular/router";
import {DataProductsService} from "../core/services/data-products.service";
import {Product} from "../core/models/product";

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent   {

  public props: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private dataProductsService:DataProductsService,
              private router: ActivatedRoute) {
    this.props = this.dynamicFormService.getFormConfig('product');
  }

  onAddProduct(event){
    // let newProduct: Product;
    // let newImages: String[] = ;
    // for(let prop in event){
    //   if(prop === 'images'){
    //
    //   }
    // }
    let images = new Array<string>(...event.images);
    console.log(images);
    delete event['images'];

    this.dataProductsService.addProduct(event).subscribe(
      (data: Product) =>  {
        this.dataProductsService.addImage(data.pk, images[0]).subscribe(
          img => console.log(img)
        );
      }
    );
  }

}
