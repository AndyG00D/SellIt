"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_urls_1 = require("../../../core/api-urls");
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.img = api_urls_1.apiUrls.noAvatar;
    }
    AvatarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-avatar',
                    templateUrl: './avatar.component.html',
                    styleUrls: ['./avatar.component.scss']
                },] },
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return []; };
    AvatarComponent.propDecorators = {
        user: [{ type: core_1.Input }]
    };
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map