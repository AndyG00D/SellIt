import {Component, OnInit, Input} from '@angular/core';
import {Image} from '../../../core/models/product';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

/**
 * View slide show of array images
 * @Input() images: Image[]; array of product images
 */
export class SlideshowComponent implements OnInit {

  @Input() images: Image[];
  public slides: { file: string, isActive: boolean }[];
  private slideIndex: number;

  constructor() {
  }

  ngOnInit() {
    this.createSlides();
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  /**
   * create new array slides based on images array
   * file - url of image
   * isActive - marker for shoving current image
   */
  private createSlides(): void {
    this.slides = [];
    this['images'].forEach((image) => {
      this.slides.push({file: image.file, isActive: false});
    });
  }

  public onclickSlidesPrev(): void {
    this.showSlides(this.slideIndex += -1);
  }

  public onclickSlidesNext(): void {
    this.showSlides(this.slideIndex += 1);
  }

  /**
   * Function control view slides by changing
   * marker isActive
   * @param {number} n - index of nex showing slide
   */
  private showSlides(n: number): void {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].isActive = false;
    }
    this.slides[this.slideIndex - 1].isActive = true;
  }

}
