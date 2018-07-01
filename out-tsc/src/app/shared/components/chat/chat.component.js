"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-chat',
                    templateUrl: './chat.component.html',
                    styleUrls: ['./chat.component.scss']
                },] },
    ];
    /** @nocollapse */
    ChatComponent.ctorParameters = function () { return []; };
    ChatComponent.propDecorators = {
        user: [{ type: core_1.Input }],
        owner: [{ type: core_1.Input }]
    };
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map