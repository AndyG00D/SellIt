"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserNameComponent = /** @class */ (function () {
    function UserNameComponent() {
        this.name = 'User';
    }
    UserNameComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-user-name',
                    templateUrl: './user-name.component.html',
                    styleUrls: ['./user-name.component.scss']
                },] },
    ];
    /** @nocollapse */
    UserNameComponent.ctorParameters = function () { return []; };
    UserNameComponent.propDecorators = {
        user: [{ type: core_1.Input }]
    };
    return UserNameComponent;
}());
exports.UserNameComponent = UserNameComponent;
//# sourceMappingURL=user-name.component.js.map