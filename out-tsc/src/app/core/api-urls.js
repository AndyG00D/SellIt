"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environments/environment");
var apiUrls = /** @class */ (function () {
    function apiUrls() {
    }
    apiUrls.products = environment_1.environment.apiBase + "/adverts/";
    apiUrls.reg = environment_1.environment.apiBase + "/registration/";
    apiUrls.login = environment_1.environment.apiBase + "/login/";
    apiUrls.logout = environment_1.environment.apiBase + "/logout/";
    apiUrls.verify = environment_1.environment.apiBase + "/verify-email/";
    apiUrls.profile = environment_1.environment.apiBase + "/profile/";
    apiUrls.google = environment_1.environment.apiBase + "/rest-auth/google/";
    apiUrls.changePassword = environment_1.environment.apiBase + "/password/change/";
    apiUrls.resetPassword = environment_1.environment.apiBase + "/password/reset/";
    apiUrls.resetConfirm = environment_1.environment.apiBase + "/password/reset/confirm/";
    apiUrls.locations = environment_1.environment.apiBase + "/locations/";
    apiUrls.profileProducts = environment_1.environment.apiBase + "/profile/adverts/";
    apiUrls.noImage = "/assets/img/No_image.png";
    apiUrls.noAvatar = "/assets/img/noavatar.png";
    return apiUrls;
}());
exports.apiUrls = apiUrls;
//# sourceMappingURL=api-urls.js.map