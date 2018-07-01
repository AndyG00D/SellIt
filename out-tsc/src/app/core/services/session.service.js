"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_error_handler_service_1 = require("./http-error-handler.service");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var SessionService = /** @class */ (function () {
    function SessionService(http, httpErrorHandler, cookieService) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.cookieService = cookieService;
        this.handleError = httpErrorHandler.createHandleError('Errors: ');
    }
    Object.defineProperty(SessionService.prototype, "token", {
        get: function () {
            return this.cookieService.get('token');
        },
        set: function (value) {
            if (value === null) {
                this.cookieService.delete('token');
            }
            else {
                this.cookieService.set('token', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem("user"));
        },
        set: function (value) {
            if (value === null) {
                localStorage.removeItem('user');
            }
            else {
                localStorage.setItem("user", JSON.stringify(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    SessionService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SessionService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: http_error_handler_service_1.HttpErrorHandler },
        { type: ngx_cookie_service_1.CookieService }
    ]; };
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map