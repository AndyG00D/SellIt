"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messagesError = [];
        this.messagesWarning = [];
        this.messagesSuccess = [];
    }
    // add messages
    MessageService.prototype.addError = function (message) {
        this.messagesError.push(message);
        console.log(message);
    };
    MessageService.prototype.addWarning = function (message) {
        this.messagesWarning.push(message);
        console.log(message);
    };
    MessageService.prototype.addSuccess = function (message) {
        this.messagesSuccess.push(message);
        console.log(message);
    };
    // clear messages
    MessageService.prototype.clearError = function () {
        this.messagesError = [];
    };
    MessageService.prototype.clearWarning = function () {
        this.messagesWarning = [];
    };
    MessageService.prototype.clearSuccess = function () {
        this.messagesSuccess = [];
    };
    MessageService.decorators = [
        { type: core_1.Injectable },
    ];
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map