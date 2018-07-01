"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var operators_2 = require("rxjs/operators");
var api_urls_1 = require("../api-urls");
var http_error_handler_service_1 = require("./http-error-handler.service");
var message_service_1 = require("./message.service");
var ProductService = /** @class */ (function () {
    function ProductService(http, httpErrorHandler, messageService) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.messageService = messageService;
        this._isAlive = true;
        this.infoMsg = '';
        this.handleError = httpErrorHandler.createHandleError('Errors: ');
    }
    ProductService.prototype.ngOnInit = function () {
    };
    ProductService.prototype.getProducts = function (offset, limit) {
        var _this = this;
        var params = new http_1.HttpParams()
            .set('offset', offset.toString())
            .set('limit', limit.toString());
        return this.http.get(api_urls_1.apiUrls.products, { params: params })
            .pipe(operators_2.takeWhile(function () { return _this._isAlive; }), operators_1.map(function (response) {
            response.results.forEach(function (item) {
                _this._setNoImage(item);
            });
            if (response.next === null) {
                _this.stop();
                _this.messageService.addSuccess('All of the products downloaded...');
            }
            return response.results;
        }), operators_1.catchError(this.handleError('getProducts:', [])));
    };
    ProductService.prototype.stop = function () {
        this._isAlive = false;
    };
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        console.log(id);
        return this.http.get(api_urls_1.apiUrls.products + id + '/')
            .pipe(operators_1.map(function (product) {
            _this._setNoImage(product);
            return product;
        }, operators_1.catchError(this.handleError('getProduct:', []))));
    };
    ProductService.prototype.addProduct = function (newProduct) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.products, newProduct)
            .pipe(operators_1.tap(function (response) {
            _this.messageService.addSuccess('Created new product productId:' + response.pk);
            console.log('addProduct: ' + response);
        }), operators_1.catchError(this.handleError('addProduct:', [])));
    };
    ProductService.prototype.updateProduct = function (pk, newProduct) {
        var _this = this;
        return this.http.patch(api_urls_1.apiUrls.products + pk + '/', newProduct)
            .pipe(operators_1.tap(function (response) {
            _this.messageService.addSuccess('Update product id:' + response.pk);
            console.log('addProduct: ' + response);
        }), operators_1.catchError(this.handleError('updateProduct:', [])));
    };
    ProductService.prototype.deleteProduct = function (pk) {
        var _this = this;
        return this.http.delete(api_urls_1.apiUrls.products + pk + '/')
            .pipe(operators_1.tap(function () {
            _this.messageService.addSuccess('Delete product id:' + pk);
            console.log('addProduct: ' + pk);
        }), operators_1.catchError(this.handleError('deleteProduct:', [])));
    };
    ProductService.prototype.getLocations = function () {
        return this.http.get(api_urls_1.apiUrls.locations)
            .pipe(operators_1.map(function (response) {
            // console.log(JSON.stringify(response));
            var res = [];
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var item = response_1[_i];
                res.push({ label: item.name, value: item.id });
            }
            // console.log(JSON.stringify(res));
            return res;
        }), operators_1.catchError(this.handleError('getLocations:', [])));
    };
    ProductService.prototype._setNoImage = function (product) {
        if (product.images[0] === undefined) {
            product.images.push({
                pk: null,
                advert: null,
                file: api_urls_1.apiUrls.noImage
            });
        }
    };
    ProductService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: http_error_handler_service_1.HttpErrorHandler },
        { type: message_service_1.MessageService }
    ]; };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map