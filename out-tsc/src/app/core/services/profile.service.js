"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var api_urls_1 = require("../api-urls");
var http_error_handler_service_1 = require("./http-error-handler.service");
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var session_service_1 = require("./session.service");
var message_service_1 = require("./message.service");
var router_1 = require("@angular/router");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, httpErrorHandler, messageService, router, sessionService) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.messageService = messageService;
        this.router = router;
        this.sessionService = sessionService;
        this._userSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.handleError = httpErrorHandler.createHandleError('Errors: ');
    }
    ProfileService.prototype.setUser = function (user) {
        this._userSubject.next(user);
    };
    ProfileService.prototype.getUser = function () {
        if (this.sessionService.token) {
            if (!this._userSubject.value && this.sessionService.user) {
                this._userSubject.next(this.sessionService.user);
            }
            else {
                this.getProfile().subscribe();
            }
        }
        else {
            this._userSubject.next(null);
        }
        return this._userSubject.asObservable().pipe(operators_1.distinctUntilChanged(), operators_1.share());
    };
    ProfileService.prototype.getProfile = function () {
        var _this = this;
        return this.http.get(api_urls_1.apiUrls.profile)
            .pipe(operators_1.tap(function (data) {
            _this.sessionService.user = data;
            _this._userSubject.next(data);
        }), operators_1.catchError(this.handleError('getProfile:')));
    };
    ProfileService.prototype.updateProfile = function (user) {
        var _this = this;
        return this.http.patch(api_urls_1.apiUrls.profile, user)
            .pipe(operators_1.tap(function (user) {
            if (_this._userSubject.value.username === user.username) {
                _this.sessionService.user = user;
                _this._userSubject.next(user);
                _this.messageService.addSuccess('User data was update');
            }
            else {
                _this.sessionService.token = null;
                _this.sessionService.user = null;
                _this._userSubject.next(null);
                _this.router.navigate(['/login']);
                _this.messageService.addWarning('Username was change. Need repeat sign in.');
            }
        }), operators_1.catchError(this.handleError('updateProfile:')));
    };
    ProfileService.prototype.getChangePassword = function (params) {
        var _this = this;
        return this.http.post(api_urls_1.apiUrls.changePassword, params)
            .pipe(operators_1.tap(function (response) {
            _this.messageService.addSuccess(response.detail);
        }), operators_1.catchError(this.handleError('getChangePassword:')));
    };
    ProfileService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: http_error_handler_service_1.HttpErrorHandler },
        { type: message_service_1.MessageService },
        { type: router_1.Router },
        { type: session_service_1.SessionService }
    ]; };
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map