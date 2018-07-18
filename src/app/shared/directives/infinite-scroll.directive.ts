import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  host: {
    '(window:scroll)': 'whenScrolled()'
  }
})

/**
 * Directive control scrolling on page
 * if scroll on bottop page generate
 * emit getNextPage for get new data
 * (uset on product list page)
 * @Output() getNextPage = new EventEmitter<boolean>();
 */
export class InfiniteScrollDirective {

  constructor(private element: ElementRef) {
  }

  @Output() getNextPage = new EventEmitter<boolean>();

  public whenScrolled() {
    if (window.scrollY + window.innerHeight + 100 > this.element.nativeElement.scrollHeight) {
      this.getNextPage.emit(true);
    }
  }
}

