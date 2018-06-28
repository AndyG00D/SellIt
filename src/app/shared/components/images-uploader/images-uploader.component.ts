import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../../core/models/product";
import {ProductService} from "../../../core/services/product.service";
import {ProductImagesService} from "../../../core/services/product-images.service";
import {Base64ValidatorsService} from "../../../core/services/base64-validators.service";

@Component({
  selector: 'app-images-uploader',
  templateUrl: './images-uploader.component.html',
  styleUrls: ['./images-uploader.component.scss']

})
export class ImagesUploaderComponent implements OnInit{
  @Input() id: number = null;
  // @Input() uploadedImages = [];
  public uploadedImages = [];
  public newImages: string[] = [];


  constructor(private productService: ProductService,
              private productImagesService: ProductImagesService,
              private base64ValidatorsService: Base64ValidatorsService) {
  }

  ngOnInit(){
    if(this.id){
      this.productImagesService.getImages(this.id).subscribe(
        (images: Image[]) => this.uploadedImages.push(...images)
        // images => console.log(images)
      );
    }
  }

  onFileChange(event) {
    //files exist?
    if (!(event.target.files && event.target.files.length > 0)) return;
    //File count less max limit upload files RestApi
    let ExistFilesCount = this.uploadedImages.length + this.newImages.length + event.target.files.length;
    if (!this.base64ValidatorsService.isValidCount(ExistFilesCount)) return;

    for (let file of event.target.files) {
      // is valid type?
      if (!this.base64ValidatorsService.isValidType(file)) continue;
      // is valid size?
      if (!this.base64ValidatorsService.isValidSize(file)) continue;

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newImages.push(reader.result);
      };
    }
  }


  deleteNewImage(i) {
    this.newImages.splice(i, 1);
  }

  deleteUploadImage(i) {
    this.uploadedImages.splice(i, 1);
  }

  deleteRestImg(i
                  :
                  number, image
                  :
                  Image
  ) {
    this.productImagesService.deleteImage(image.pk, image.advert).subscribe(
    );
    this.deleteUploadImage(i);
  }

  uploadImage(i, image) {
    this.productImagesService.uploadImage(this.id, image).subscribe(
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
