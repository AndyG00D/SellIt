"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_service_1 = require("../dynamic-form/dynamic-form.service");
var auth_service_1 = require("../core/services/auth.service");
var router_1 = require("@angular/router");
var angular5_social_login_1 = require("angular5-social-login");
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(dynamicFormService, authService, socialAuthService, router) {
        this.dynamicFormService = dynamicFormService;
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.currentForm = 'signIn';
        this.props = this.dynamicFormService.getFormConfig(this.currentForm);
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        for (var param in this.router.snapshot.queryParams) {
            //verify email
            switch (param) {
                case 'key':
                    this.authService.getVerifyEmail(this.router.snapshot.queryParams['key']).subscribe();
                    break;
                //verify Confirm reset password
                case 'uid':
                    this.changeForm('resetConfirm');
                    break;
                //load current form
                case 'form':
                    this.changeForm(this.router.snapshot.queryParams['form']);
                    break;
            }
        }
    };
    LoginPageComponent.prototype.changeForm = function (currentForm) {
        this.currentForm = currentForm;
        this.props = this.dynamicFormService.getFormConfig(this.currentForm);
    };
    LoginPageComponent.prototype.onSignIn = function (event) {
        this.authService.getLogIn(event).subscribe();
    };
    LoginPageComponent.prototype.onSignUp = function (event) {
        var _this = this;
        this.authService.getRegistration(event).subscribe(function () { return _this.changeForm('signIn'); });
    };
    LoginPageComponent.prototype.onResetPassword = function (event) {
        var _this = this;
        this.authService.getResetPassword(event).subscribe(function () { return _this.changeForm('signIn'); });
    };
    LoginPageComponent.prototype.onResetConfirm = function (event) {
        var _this = this;
        var params = __assign({}, event);
        params.uid = this.router.snapshot.queryParams['uid'];
        params.token = this.router.snapshot.queryParams['token'];
        this.authService.getResetConfirm(params).subscribe(function () { return _this.changeForm('signIn'); });
    };
    LoginPageComponent.prototype.onAuthGoogle = function () {
        this.authService.AuthGoogle();
    };
    LoginPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-login-page',
                    templateUrl: './login-page.component.html',
                    styleUrls: ['./login-page.component.scss']
                },] },
    ];
    /** @nocollapse */
    LoginPageComponent.ctorParameters = function () { return [
        { type: dynamic_form_service_1.DynamicFormService },
        { type: auth_service_1.AuthService },
        { type: angular5_social_login_1.AuthService },
        { type: router_1.ActivatedRoute }
    ]; };
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map