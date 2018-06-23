import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../../../core/models/user";
import {catchError, concatMap, map} from "rxjs/operators";
import {Image, Product} from "../../../core/models/product";
import {ProductService} from "../../../core/services/product.service";
import {environment} from "../../../../environments/environment";
import {from} from "rxjs/internal/observable/from";
import {Observable} from "rxjs/index";


@Component({
  selector: 'app-images-uploader',
  templateUrl: './images-uploader.component.html',
  styleUrls: ['./images-uploader.component.scss']

})
export class ImagesUploaderComponent {
  @Input() prop: any;
  @Input() uploadedImages = [];
  public newImages = [];


  constructor(private productService: ProductService) {
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      let res = [];
      let count = this.uploadedImages.length + this.newImages.length + event.target.files.length;
      if (count > 8) {
        alert("Too match files");
        return
      }
      for (let file of event.target.files) {
        if (!environment.imgType.includes(file.type)) {
          alert("Wrong Format of image");
          continue
        }
        if (file.size > environment.maxFileSize) {
          alert("File is too big!");
          continue
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.newImages.push(reader.result);
        };
      }
    }
  }

  deleteNewImage(i) {
    this.newImages.splice(i, 1);
  }

  deleteUploadImage(i) {
    this.uploadedImages.splice(i, 1);
  }

  deleteRestImg(i: number, image: Image) {
    this.productService.deleteImage(image.pk, image.advert).subscribe(
    );
    this.deleteUploadImage(i);
  }

  uploadImage(i, image) {
    this.productService.uploadImage(196, image).subscribe(
      image => this.uploadedImages.push(image)
    );
    this.deleteNewImage(i);
  }

  // public uploadImages(advert_pk: number, images: string[]) {
  //   return from(images).pipe(
  //     concatMap((image: string) => this.uploadImage(advert_pk, image)),
  //   )
  // }

}
