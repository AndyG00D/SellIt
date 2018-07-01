"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./messages.component");
var i3 = require("../../../core/services/message.service");
var styles_MessagesComponent = [];
var RenderType_MessagesComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_MessagesComponent, data: {} });
exports.RenderType_MessagesComponent = RenderType_MessagesComponent;
function View_MessagesComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "alert alert-danger _full-width"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "alert-clearbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clearError() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵeld(3, 0, null, null, 2, "ol", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_2)), i0.ɵdid(5, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messagesError; _ck(_v, 5, 0, currVal_0); }, null); }
function View_MessagesComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "alert alert-warning _full-width"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "alert-clearbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clearWarning() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵeld(3, 0, null, null, 2, "ol", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_4)), i0.ɵdid(5, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messagesWarning; _ck(_v, 5, 0, currVal_0); }, null); }
function View_MessagesComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "alert alert-success _full-width"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "alert-clearbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clearSuccess() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵeld(3, 0, null, null, 2, "ol", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_6)), i0.ɵdid(5, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messagesSuccess; _ck(_v, 5, 0, currVal_0); }, null); }
function View_MessagesComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_3)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessagesComponent_5)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messagesError.length; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.messageService.messagesWarning.length; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.messageService.messagesSuccess.length; _ck(_v, 5, 0, currVal_2); }, null); }
exports.View_MessagesComponent_0 = View_MessagesComponent_0;
function View_MessagesComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-messages", [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)), i0.ɵdid(1, 49152, null, 0, i2.MessagesComponent, [i3.MessageService], null, null)], null, null); }
exports.View_MessagesComponent_Host_0 = View_MessagesComponent_Host_0;
var MessagesComponentNgFactory = i0.ɵccf("app-messages", i2.MessagesComponent, View_MessagesComponent_Host_0, {}, {}, []);
exports.MessagesComponentNgFactory = MessagesComponentNgFactory;
//# sourceMappingURL=messages.component.ngfactory.js.map