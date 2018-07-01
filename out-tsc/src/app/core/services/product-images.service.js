"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var api_urls_1 = require("../api-urls");
var http_error_handler_service_1 = require("./http-error-handler.service");
var from_1 = require("rxjs/internal/observable/from");
var message_service_1 = require("./message.service");
var ProductImagesService = /** @class */ (function () {
    function ProductImagesService(http, httpErrorHandler, messageService) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.messageService = messageService;
        this.handleError = httpErrorHandler.createHandleError('Errors: ');
    }
    ProductImagesService.prototype.ngOnInit = function () {
    };
    ProductImagesService.prototype.getImages = function (advert_pk) {
        return this.http.get(api_urls_1.apiUrls.products + advert_pk + '/image/')
            .pipe(operators_1.tap(function (response) {
            console.log('deleteProduct: ' + response);
        }), operators_1.catchError(this.handleError('deleteProduct:', [])));
    };
    ProductImagesService.prototype.uploadImage = function (advert_pk, file) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.products + advert_pk + '/image/', { 'advert': advert_pk, 'file': file })
            .pipe(operators_1.tap(function (image) {
            _this.messageService.addSuccess('uploaded to server image productId:' + image.pk);
            console.log('uploadNewImage: ' + image);
        }), operators_1.catchError(this.handleError('uploadNewImage:', [])));
    };
    ProductImagesService.prototype.uploadImages = function (advert_pk, images) {
        var _this = this;
        return from_1.from(images).pipe(operators_1.concatMap(function (image) { return _this.uploadImage(advert_pk, image); }), operators_1.catchError(this.handleError('uploadNewImages:', [])));
    };
    ProductImagesService.prototype.updateImage = function (id, advert_pk, file) {
        return this.http.patch(api_urls_1.apiUrls.products + advert_pk + '/image/' + id, { 'advert': advert_pk, 'file': file })
            .pipe(operators_1.map(function (image) {
            console.log('updateImage: ' + image);
        }), operators_1.catchError(this.handleError('updateImage:', [])));
    };
    ProductImagesService.prototype.deleteImage = function (id, advert_pk) {
        var _this = this;
        return this.http.delete(api_urls_1.apiUrls.products + advert_pk + '/image/' + id)
            .pipe(operators_1.tap(function () {
            _this.messageService.addSuccess('deleted from server image productId:' + id);
            console.log('deleteImage: ' + id);
        }), operators_1.catchError(this.handleError('deleteImage:', [])));
    };
    ProductImagesService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ProductImagesService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: http_error_handler_service_1.HttpErrorHandler },
        { type: message_service_1.MessageService }
    ]; };
    return ProductImagesService;
}());
exports.ProductImagesService = ProductImagesService;
//# sourceMappingURL=product-images.service.js.map