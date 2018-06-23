import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  host: {
    '(window:scroll)': 'whenScrolled()'
  }
})

export class InfiniteScrollDirective {

  constructor(private element: ElementRef) {
  }

  @Output() getNextPage = new EventEmitter<boolean>();

  whenScrolled() {
    if (window.scrollY + window.innerHeight + 100 > this.element.nativeElement.scrollHeight) {
      this.getNextPage.emit(true);
    }
  }
}

