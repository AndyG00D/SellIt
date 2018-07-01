"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patterns = /** @class */ (function () {
    function patterns() {
    }
    patterns.number = /[0-9]/;
    patterns.char = /[A-z]/;
    patterns.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return patterns;
}());
exports.patterns = patterns;
//# sourceMappingURL=patterns.js.map