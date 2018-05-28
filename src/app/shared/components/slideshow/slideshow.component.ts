import {Component, OnInit, Input} from '@angular/core';
import {Image} from "../../models/product";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
  slideIndex:number;
  slides: HTMLCollectionOf<Element>;
  @Input()  images: Image[];

  constructor() {
   }

  ngOnInit() {
    this.slideIndex = 1;
    this.slides = document.getElementsByClassName("slideshow__slide");
    this.showSlides(this.slideIndex);
  }

  plusSlidesPrev() {
    this.showSlides(this.slideIndex += -1);
  }

  plusSlidesNext() {
    this.showSlides(this.slideIndex += 1);
  }

  showSlides(n:number) {
    let i:number;
    if (n > this.slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.slides.length}
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].setAttribute("style", "display: none;");
    }
    this.slides[this.slideIndex-1].setAttribute("style", "display: block;");
  }

}
