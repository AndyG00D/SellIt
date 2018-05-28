import {Component, OnInit, Input} from '@angular/core';
import {Image} from "../../models/product";

interface SlideImage{
  file: string;
  isActive: boolean;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
  slideIndex:number;
  // slides: HTMLCollectionOf<Element>;
  @Input()  images: Image[];
  public slides: {file:string, isActive:boolean}[];


  constructor() {
    this.slides = [];
   }

  ngOnInit() {
    // if(this['images'] != null) {
    // console.log('images: ' + JSON.stringify(this.images));
      this['images'].forEach((image) => {
        this.slides.push({file: image.file, isActive:false});
        // console.log('slides: ' + index + ' ' + image.file);
        // this.slides[index].file = image.file;
        // this.slides[index].isActive = false;
      });
      // console.log('slides: ' +  this.slides);
    // }
    this.slideIndex = 1;
    // this.slides = document.getElementsByClassName("slideshow__slide");
    this.showSlides(this.slideIndex);
  }

  plusSlidesPrev() {
    this.showSlides(this.slideIndex += -1);
  }

  plusSlidesNext() {
    this.showSlides(this.slideIndex += 1);
  }

  showSlides(n:number) {
    if (n > this.slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.slides.length}
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].isActive = false;
    }
    this.slides[this.slideIndex-1].isActive = true;
    // ("style", "display: block;")
  }

}
