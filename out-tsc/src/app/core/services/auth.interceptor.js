"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var session_service_1 = require("./session.service");
var operators_1 = require("rxjs/operators");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authHeader = "JWT " + this.sessionService.token;
        if (this.sessionService.token) {
            var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
            return next.handle(authReq).pipe(operators_1.tap(function (event) {
                if (event instanceof http_1.HttpResponse) {
                }
            }, function (err) {
                if (err instanceof http_1.HttpErrorResponse) {
                    if (err.status === 401) {
                        _this.authService.resetAuth();
                    }
                }
            }));
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthInterceptor.ctorParameters = function () { return [
        { type: session_service_1.SessionService },
        { type: auth_service_1.AuthService }
    ]; };
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map