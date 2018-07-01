"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent() {
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        this.createSlides();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
    };
    SlideshowComponent.prototype.createSlides = function () {
        var _this = this;
        this.slides = [];
        this['images'].forEach(function (image) {
            _this.slides.push({ file: image.file, isActive: false });
        });
    };
    SlideshowComponent.prototype.onclickSlidesPrev = function () {
        this.showSlides(this.slideIndex += -1);
    };
    SlideshowComponent.prototype.onclickSlidesNext = function () {
        this.showSlides(this.slideIndex += 1);
    };
    SlideshowComponent.prototype.showSlides = function (n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].isActive = false;
        }
        this.slides[this.slideIndex - 1].isActive = true;
    };
    SlideshowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-slideshow',
                    templateUrl: './slideshow.component.html',
                    styleUrls: ['./slideshow.component.scss']
                },] },
    ];
    /** @nocollapse */
    SlideshowComponent.ctorParameters = function () { return []; };
    SlideshowComponent.propDecorators = {
        images: [{ type: core_1.Input }]
    };
    return SlideshowComponent;
}());
exports.SlideshowComponent = SlideshowComponent;
//# sourceMappingURL=slideshow.component.js.map