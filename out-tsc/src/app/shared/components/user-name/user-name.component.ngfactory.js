"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./user-name.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("./user-name.component");
var styles_UserNameComponent = [i0.styles];
var RenderType_UserNameComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_UserNameComponent, data: {} });
exports.RenderType_UserNameComponent = RenderType_UserNameComponent;
function View_UserNameComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.user == null) ? null : _co.user.first_name); var currVal_1 = ((_co.user == null) ? null : _co.user.last_name); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_UserNameComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵted(0, null, [" ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.user == null) ? null : _co.user.username); _ck(_v, 0, 0, currVal_0); }); }
function View_UserNameComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_UserNameComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["username", 2]], null, 0, null, View_UserNameComponent_2))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.user == null) ? null : _co.user.first_name); var currVal_1 = i1.ɵnov(_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
exports.View_UserNameComponent_0 = View_UserNameComponent_0;
function View_UserNameComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-user-name", [], null, null, null, View_UserNameComponent_0, RenderType_UserNameComponent)), i1.ɵdid(1, 49152, null, 0, i3.UserNameComponent, [], null, null)], null, null); }
exports.View_UserNameComponent_Host_0 = View_UserNameComponent_Host_0;
var UserNameComponentNgFactory = i1.ɵccf("app-user-name", i3.UserNameComponent, View_UserNameComponent_Host_0, { user: "user" }, {}, []);
exports.UserNameComponentNgFactory = UserNameComponentNgFactory;
//# sourceMappingURL=user-name.component.ngfactory.js.map