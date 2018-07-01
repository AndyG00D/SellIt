"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var session_service_1 = require("../services/session.service");
var message_service_1 = require("../services/message.service");
var UserGuard = /** @class */ (function () {
    function UserGuard(sessionService, router, messageService) {
        this.sessionService = sessionService;
        this.router = router;
        this.messageService = messageService;
    }
    UserGuard.prototype.canActivate = function (route, state) {
        if (this.sessionService.token) {
            return true;
        }
        else {
            this.messageService.addWarning('This page only for login Users!');
            this.router.navigate(['/login']);
            return false;
        }
    };
    UserGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserGuard.ctorParameters = function () { return [
        { type: session_service_1.SessionService },
        { type: router_1.Router },
        { type: message_service_1.MessageService }
    ]; };
    return UserGuard;
}());
exports.UserGuard = UserGuard;
//# sourceMappingURL=user.guard.js.map