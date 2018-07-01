"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective(element) {
        this.element = element;
        this.getNextPage = new core_1.EventEmitter();
    }
    InfiniteScrollDirective.prototype.whenScrolled = function () {
        if (window.scrollY + window.innerHeight + 100 > this.element.nativeElement.scrollHeight) {
            this.getNextPage.emit(true);
        }
    };
    InfiniteScrollDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[appInfiniteScroll]',
                    host: {
                        '(window:scroll)': 'whenScrolled()'
                    }
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    InfiniteScrollDirective.propDecorators = {
        getNextPage: [{ type: core_1.Output }]
    };
    return InfiniteScrollDirective;
}());
exports.InfiniteScrollDirective = InfiniteScrollDirective;
//# sourceMappingURL=infinite-scroll.directive.js.map