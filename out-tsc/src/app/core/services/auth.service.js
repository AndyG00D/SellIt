"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var api_urls_1 = require("../api-urls");
var http_error_handler_service_1 = require("./http-error-handler.service");
var router_1 = require("@angular/router");
var session_service_1 = require("./session.service");
var profile_service_1 = require("./profile.service");
var angular5_social_login_1 = require("angular5-social-login");
var message_service_1 = require("./message.service");
var AuthService = /** @class */ (function () {
    function AuthService(http, httpErrorHandler, messageService, router, sessionService, profileService, socialAuthService) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.messageService = messageService;
        this.router = router;
        this.sessionService = sessionService;
        this.profileService = profileService;
        this.socialAuthService = socialAuthService;
        this.handleError = httpErrorHandler.createHandleError('Errors: ');
    }
    AuthService.prototype.getLogIn = function (signInUser) {
        var _this = this;
        //   "email": "achicunov+1@gmail.com",
        //   "password1": "aaaa123456789",
        return this.http.post(api_urls_1.apiUrls.login, signInUser)
            .pipe(operators_1.tap(function (data) {
            _this.sessionService.token = data.token;
            _this.sessionService.user = data.user;
            _this.profileService.setUser(data.user);
            console.log("User sign in!");
            _this.router.navigate(['/products']);
        }), operators_1.catchError(this.handleError('getLogIn:', signInUser)));
    };
    AuthService.prototype.AuthGoogle = function () {
        var _this = this;
        var socialPlatformProvider = angular5_social_login_1.GoogleLoginProvider.PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.getRestAuthGoogle(userData).subscribe();
        });
    };
    AuthService.prototype.getRestAuthGoogle = function (params) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.google, { 'access_token': params.token })
            .pipe(operators_1.tap(function (data) {
            _this.sessionService.token = data.token;
            _this.sessionService.user = data.user;
            _this.profileService.setUser(data.user);
            console.log("Google sign in!");
            _this.router.navigate(['/products']);
        }), operators_1.catchError(this.handleError('getRestAuthGoogle:')));
    };
    AuthService.prototype.getRegistration = function (reg) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.reg, reg)
            .pipe(operators_1.tap(function (data) {
            if ('detail' in data) {
                _this.messageService.addSuccess(data.detail);
            }
        }), operators_1.catchError(this.handleError('Sign Up:', reg)));
    };
    AuthService.prototype.getVerifyEmail = function (key) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.verify, key)
            .pipe(operators_1.tap(function (data) {
            if ('detail' in data) {
                _this.messageService.addSuccess(data.detail);
            }
        }), operators_1.catchError(this.handleError('Verify Email:', key)));
    };
    AuthService.prototype.getResetPassword = function (email) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.resetPassword, email)
            .pipe(operators_1.tap(function (data) {
            if ('detail' in data) {
                _this.messageService.addSuccess(data.detail);
            }
        }), operators_1.catchError(this.handleError('getResetPassword:', email)));
    };
    AuthService.prototype.getResetConfirm = function (params) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.resetConfirm, params)
            .pipe(operators_1.tap(function (data) {
            if ('detail' in data) {
                _this.messageService.addSuccess(data.detail);
            }
        }), operators_1.catchError(this.handleError('getResetConfirm:', params)));
    };
    AuthService.prototype.resetAuth = function () {
        this.sessionService.token = null;
        this.sessionService.user = null;
        this.profileService.setUser(null);
        this.sessionService.token = null;
        this.router.navigate(['/products']);
    };
    AuthService.prototype.getLogout = function () {
        var _this = this;
        return this.http.get(api_urls_1.apiUrls.logout).pipe(operators_1.tap(function () {
            _this.resetAuth();
        }));
    };
    AuthService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: http_error_handler_service_1.HttpErrorHandler },
        { type: message_service_1.MessageService },
        { type: router_1.Router },
        { type: session_service_1.SessionService },
        { type: profile_service_1.ProfileService },
        { type: angular5_social_login_1.AuthService }
    ]; };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map