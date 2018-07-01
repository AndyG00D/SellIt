"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../../../core/services/auth.service");
var profile_service_1 = require("../../../core/services/profile.service");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, profileService) {
        var _this = this;
        this.authService = authService;
        this.profileService = profileService;
        this.profileService.getUser().subscribe(function (user) { _this.user = user; });
        if (this.user) {
            if (this.user.first_name)
                this.userName = this.user.first_name + ' ' + this.user.last_name;
            else if (this.user.username)
                this.userName = this.user.username;
            else
                this.userName = 'User';
        }
    }
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.getLogout().subscribe();
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.scss']
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService },
        { type: profile_service_1.ProfileService }
    ]; };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map