import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit  {
  slideIndex:number;
  slides: HTMLCollectionOf<Element>;
  constructor() {
    this.slideIndex = 1;
    this.slides = document.getElementsByClassName("slideshow__slide");
  }

  ngOnInit() {
    // document.addEventListener('DOMContentLoaded', () => {

    document.getElementsByClassName("slideshow__btn")[0].addEventListener('click', this.plusSlidesPrev.bind(this));
    document.getElementsByClassName("slideshow__btn_next")[0].addEventListener('click', this.plusSlidesNext.bind(this));
    // for (let i = 0; i < this.slides.length; i++) {
    //   window.console.log(this.slides[i]);
    //   this.slides[i].setAttribute("style", "display: none;");
    // }
    this.showSlides(this.slideIndex);
    // });

  }

  plusSlidesPrev() {
    this.showSlides(this.slideIndex += -1);
  }

  plusSlidesNext() {
    this.showSlides(this.slideIndex += 1);
  }

  showSlides(n:number) {
    // document.addEventListener('DOMContentLoaded', () => {
    let i:number;
    // let slides: HTMLCollectionOf<Element>;
    // slides = document.getElementsByClassName("slideshow__slide");
    if (n > this.slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.slides.length}
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].setAttribute("style", "display: none;");
      // this.slides.item(i).setAttribute("style", "display: none;");
    }
    this.slides[this.slideIndex-1].setAttribute("style", "display: block;");
    // this.slides.item(this.slideIndex-1).setAttribute("style", "display: block;");
    // });
  }

}
