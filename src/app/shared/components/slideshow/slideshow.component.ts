import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  slideIndex:number;
  slides: HTMLCollectionOf<Element>;
  constructor() {
    this.slideIndex = 1;
    this.slides = document.getElementsByClassName("slideshow__slide");
  }

  ngOnInit() {

    document.getElementsByClassName("slideshow__btn")[0].addEventListener('click', this.plusSlidesPrev.bind(this));
    document.getElementsByClassName("slideshow__btn_next")[0].addEventListener('click', this.plusSlidesNext.bind(this));
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
