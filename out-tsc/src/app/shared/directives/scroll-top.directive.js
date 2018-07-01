"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScrollTopDirective = /** @class */ (function () {
    function ScrollTopDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ScrollTopDirective.prototype.whenScrolled = function () {
        if (window.pageYOffset < 100) {
            this.renderer.addClass(this.element.nativeElement, '_hide');
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, '_hide');
        }
    };
    ScrollTopDirective.prototype.onClick = function () {
        window.scroll({ top: 0, behavior: "smooth" });
    };
    ScrollTopDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.element.nativeElement, '_hide');
    };
    ScrollTopDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[appOnTop]',
                    host: {
                        '(window:scroll)': 'whenScrolled()',
                        '(click)': 'onClick()'
                    }
                },] },
    ];
    /** @nocollapse */
    ScrollTopDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 }
    ]; };
    return ScrollTopDirective;
}());
exports.ScrollTopDirective = ScrollTopDirective;
//# sourceMappingURL=scroll-top.directive.js.map