"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var message_service_1 = require("./message.service");
/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body: " + JSON.stringify(error.error);
            // TODO: better job of transforming error for user consumption
            _this.messageService.addError(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return rxjs_1.of(result);
        };
    };
    HttpErrorHandler.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    HttpErrorHandler.ctorParameters = function () { return [
        { type: message_service_1.MessageService }
    ]; };
    return HttpErrorHandler;
}());
exports.HttpErrorHandler = HttpErrorHandler;
//# sourceMappingURL=http-error-handler.service.js.map