"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../../../core/services/product.service");
var product_images_service_1 = require("../../../core/services/product-images.service");
var base64_validators_service_1 = require("../../../core/services/base64-validators.service");
var ImagesUploaderComponent = /** @class */ (function () {
    function ImagesUploaderComponent(productService, productImagesService, base64ValidatorsService) {
        this.productService = productService;
        this.productImagesService = productImagesService;
        this.base64ValidatorsService = base64ValidatorsService;
        this.productId = null;
        this.uploadedImages = [];
        this.newImages = [];
    }
    ImagesUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.productId) {
            this.productImagesService.getImages(this.productId).subscribe(function (images) {
                return (_a = _this.uploadedImages).push.apply(_a, images);
                var _a;
            });
        }
    };
    ImagesUploaderComponent.prototype.onFileChange = function (event) {
        var _this = this;
        //files exist?
        if (!(event.target.files && event.target.files.length > 0))
            return;
        //File count less max limit upload files RestApi
        var ExistFilesCount = this.uploadedImages.length + this.newImages.length + event.target.files.length;
        if (!this.base64ValidatorsService.isValidCount(ExistFilesCount))
            return;
        var _loop_1 = function (file) {
            // is valid type?
            if (!this_1.base64ValidatorsService.isValidType(file))
                return "continue";
            // is valid size?
            if (!this_1.base64ValidatorsService.isValidSize(file))
                return "continue";
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.newImages.push(reader.result);
            };
        };
        var this_1 = this;
        for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
    };
    ImagesUploaderComponent.prototype.deleteNewImage = function (index) {
        this.newImages.splice(index, 1);
    };
    ImagesUploaderComponent.prototype.deleteUploadImage = function (index) {
        this.uploadedImages.splice(index, 1);
    };
    ImagesUploaderComponent.prototype.deleteRestImg = function (i, uploadedImage) {
        this.productImagesService.deleteImage(uploadedImage.pk, uploadedImage.advert).subscribe();
        this.deleteUploadImage(i);
    };
    ImagesUploaderComponent.prototype.uploadNewImage = function (index, newImage) {
        var _this = this;
        this.productImagesService.uploadImage(this.productId, newImage).subscribe(function (image) { return _this.uploadedImages.push(image); });
        this.deleteNewImage(index);
    };
    ImagesUploaderComponent.prototype.uploadNewImages = function (id) {
        var _this = this;
        if (id === void 0) { id = this.productId; }
        this.productImagesService.uploadImages(id, this.newImages).subscribe(function (image) {
            if (_this.productId) {
                _this.uploadedImages.push(image);
            }
            _this.newImages = [];
        });
    };
    ImagesUploaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-images-uploader',
                    templateUrl: './images-uploader.component.html',
                    styleUrls: ['./images-uploader.component.scss']
                },] },
    ];
    /** @nocollapse */
    ImagesUploaderComponent.ctorParameters = function () { return [
        { type: product_service_1.ProductService },
        { type: product_images_service_1.ProductImagesService },
        { type: base64_validators_service_1.Base64ValidatorsService }
    ]; };
    ImagesUploaderComponent.propDecorators = {
        productId: [{ type: core_1.Input }]
    };
    return ImagesUploaderComponent;
}());
exports.ImagesUploaderComponent = ImagesUploaderComponent;
//# sourceMappingURL=images-uploader.component.js.map