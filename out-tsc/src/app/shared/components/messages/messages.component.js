"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var message_service_1 = require("../../../core/services/message.service");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-messages',
                    templateUrl: './messages.component.html'
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return [
        { type: message_service_1.MessageService }
    ]; };
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map