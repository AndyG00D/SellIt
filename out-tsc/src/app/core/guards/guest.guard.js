"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var session_service_1 = require("../services/session.service");
var message_service_1 = require("../services/message.service");
var GuestGuard = /** @class */ (function () {
    function GuestGuard(sessionService, router, messageService) {
        this.sessionService = sessionService;
        this.router = router;
        this.messageService = messageService;
    }
    GuestGuard.prototype.canActivate = function (route, state) {
        if (!this.sessionService.token) {
            return true;
        }
        else {
            this.messageService.addWarning('This is page only for guests!');
            this.router.navigate(['/products']);
            return false;
        }
    };
    GuestGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GuestGuard.ctorParameters = function () { return [
        { type: session_service_1.SessionService },
        { type: router_1.Router },
        { type: message_service_1.MessageService }
    ]; };
    return GuestGuard;
}());
exports.GuestGuard = GuestGuard;
//# sourceMappingURL=guest.guard.js.map