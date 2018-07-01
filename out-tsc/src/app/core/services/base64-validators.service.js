"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var message_service_1 = require("./message.service");
var environment_1 = require("../../../environments/environment");
var Base64ValidatorsService = /** @class */ (function () {
    function Base64ValidatorsService(messageService) {
        this.messageService = messageService;
    }
    Base64ValidatorsService.prototype.ngOnInit = function () {
    };
    // Validations
    Base64ValidatorsService.prototype.isValidType = function (file) {
        if (!environment_1.environment.imgFileType.includes(file.type)) {
            this.messageService.addError('Wrong type of file!');
            return false;
        }
        return true;
    };
    Base64ValidatorsService.prototype.isValidSize = function (file) {
        if (file.size > environment_1.environment.maxFileSize) {
            this.messageService.addError('File is too big!');
            return false;
        }
        return true;
    };
    Base64ValidatorsService.prototype.isValidCount = function (ExistFilesCount) {
        if (environment_1.environment.imgFileCount < ExistFilesCount) {
            this.messageService.addError("Max count of files " + environment_1.environment.imgFileCount + "!");
            return false;
        }
        return true;
    };
    Base64ValidatorsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Base64ValidatorsService.ctorParameters = function () { return [
        { type: message_service_1.MessageService }
    ]; };
    return Base64ValidatorsService;
}());
exports.Base64ValidatorsService = Base64ValidatorsService;
//# sourceMappingURL=base64-validators.service.js.map