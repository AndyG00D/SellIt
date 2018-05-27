import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appOnTop]',
  host: {
    '(window:scroll)': 'whenScrolled()',
    '(click)': 'onClick()'
  }
})

export class ScrollTopDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  whenScrolled() {
    if (window.pageYOffset < 100) {
      this.renderer.addClass(this.element.nativeElement, '_hide');
    } else {
      this.renderer.removeClass(this.element.nativeElement, '_hide');
    }
  }

  onClick() {
    window.scroll({top: 0, behavior: "smooth"});
  }

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, '_hide');
  }

}