"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_service_1 = require("../dynamic-form/dynamic-form.service");
var profile_service_1 = require("../core/services/profile.service");
var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(service, profileService) {
        var _this = this;
        this.service = service;
        this.profileService = profileService;
        this.userProps = this.service.getFormConfig('profile');
        this.avatarProps = this.service.getFormConfig('avatar');
        this.passProps = this.service.getFormConfig('changePassword');
        this.profileService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    }
    ProfilePageComponent.prototype.onSubmit = function (event) {
        this.profileService.updateProfile(event).subscribe();
    };
    ProfilePageComponent.prototype.onChangePass = function (event) {
        this.profileService.getChangePassword(event).subscribe();
    };
    ProfilePageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-dynamic-form-demo-page',
                    templateUrl: './profile-page.component.html',
                    styleUrls: ['./profile-page.component.css']
                },] },
    ];
    /** @nocollapse */
    ProfilePageComponent.ctorParameters = function () { return [
        { type: dynamic_form_service_1.DynamicFormService },
        { type: profile_service_1.ProfileService }
    ]; };
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;
//# sourceMappingURL=profile-page.component.js.map