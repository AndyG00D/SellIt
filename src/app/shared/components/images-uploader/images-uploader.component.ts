import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from "../../../core/models/product";
import {ProductService} from "../../../core/services/product.service";
import {ProductImagesService} from "../../../core/services/product-images.service";
import {Base64ValidatorsService} from "../../../core/services/base64-validators.service";

@Component({
  selector: 'app-images-uploader',
  templateUrl: './images-uploader.component.html',
  styleUrls: ['./images-uploader.component.scss']

})
export class ImagesUploaderComponent implements OnInit {
  @Input() productId: number = null;

  public uploadedImages = [];
  public newImages: string[] = [];


  constructor(private productService: ProductService,
              private productImagesService: ProductImagesService,
              private base64ValidatorsService: Base64ValidatorsService) {
  }

  ngOnInit() {
    if (this.productId) {
      this.productImagesService.getImages(this.productId).subscribe(
        (images: Image[]) => this.uploadedImages.push(...images)
      );
    }
  }

  public onFileChange(event) {
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

  private deleteNewImage(index: number):void {
    this.newImages.splice(index, 1);
  }

  private deleteUploadImage(index: number):void {
    this.uploadedImages.splice(index, 1);
  }

  public deleteRestImg(i: number, uploadedImage: Image):void {
    this.productImagesService.deleteImage(uploadedImage.pk, uploadedImage.advert).subscribe();
    this.deleteUploadImage(i);
  }

  public uploadNewImage(index: number, newImage: string):void {
    this.productImagesService.uploadImage(this.productId, newImage).subscribe(
      image => this.uploadedImages.push(image)
    );
    this.deleteNewImage(index);
  }

  public uploadNewImages(id: number = this.productId):void {
    this.productImagesService.uploadImages(id, this.newImages).subscribe(
      image => {
        if (this.productId) {
          this.uploadedImages.push(image);
        }
        this.newImages = [];
      }
    );
  }

}
