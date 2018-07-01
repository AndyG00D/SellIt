"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var header_component_1 = require("./shared/components/header/header.component");
var footer_component_1 = require("./shared/components/footer/footer.component");
var product_add_page_component_1 = require("./product-add-page/product-add-page.component");
var product_list_page_component_1 = require("./product-list-page/product-list-page.component");
var product_detail_page_component_1 = require("./product-detail-page/product-detail-page.component");
var login_page_component_1 = require("./login-page/login-page.component");
var product_item_component_1 = require("./shared/components/product-item/product-item.component");
var product_service_1 = require("./core/services/product.service");
var infinite_scroll_directive_1 = require("./shared/directives/infinite-scroll.directive");
var scroll_top_directive_1 = require("./shared/directives/scroll-top.directive");
var button_on_top_component_1 = require("./shared/components/button-on-top/button-on-top.component");
var not_found_page_component_1 = require("./not-found-page/not-found-page.component");
var slideshow_component_1 = require("./shared/components/slideshow/slideshow.component");
var chat_component_1 = require("./shared/components/chat/chat.component");
var forms_1 = require("@angular/forms");
var dynamic_form_demo_page_component_1 = require("./dynamic-form-demo-page/dynamic-form-demo-page.component");
var dynamic_form_module_1 = require("./dynamic-form/dynamic-form.module");
var messages_component_1 = require("./shared/components/messages/messages.component");
var http_error_handler_service_1 = require("./core/services/http-error-handler.service");
var message_service_1 = require("./core/services/message.service");
var session_service_1 = require("./core/services/session.service");
var profile_service_1 = require("./core/services/profile.service");
var auth_interceptor_1 = require("./core/services/auth.interceptor");
var profile_page_component_1 = require("./profile-page/profile-page.component");
var angular5_social_login_1 = require("angular5-social-login");
var guest_guard_1 = require("./core/guards/guest.guard");
var user_guard_1 = require("./core/guards/user.guard");
var avatar_component_1 = require("./shared/components/avatar/avatar.component");
var user_name_component_1 = require("./shared/components/user-name/user-name.component");
var auth_service_1 = require("./core/services/auth.service");
var environment_1 = require("../environments/environment");
var product_edit_page_component_1 = require("./product-edit-page/product-edit-page.component");
var product_resolve_1 = require("./core/product.resolve");
var images_uploader_component_1 = require("./shared/components/images-uploader/images-uploader.component");
var product_images_service_1 = require("./core/services/product-images.service");
var base64_validators_service_1 = require("./core/services/base64-validators.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        header_component_1.HeaderComponent,
                        footer_component_1.FooterComponent,
                        product_add_page_component_1.ProductAddPageComponent,
                        product_list_page_component_1.ProductListPageComponent,
                        product_detail_page_component_1.ProductDetailPageComponent,
                        login_page_component_1.LoginPageComponent,
                        product_add_page_component_1.ProductAddPageComponent,
                        product_edit_page_component_1.ProductEditPageComponent,
                        product_item_component_1.ProductItemComponent,
                        scroll_top_directive_1.ScrollTopDirective,
                        infinite_scroll_directive_1.InfiniteScrollDirective,
                        button_on_top_component_1.ButtonOnTopComponent,
                        not_found_page_component_1.NotFoundPageComponent,
                        slideshow_component_1.SlideshowComponent,
                        chat_component_1.ChatComponent,
                        dynamic_form_demo_page_component_1.DynamicFormDemoPageComponent,
                        messages_component_1.MessagesComponent,
                        profile_page_component_1.ProfilePageComponent,
                        avatar_component_1.AvatarComponent,
                        user_name_component_1.UserNameComponent,
                        images_uploader_component_1.ImagesUploaderComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        app_routing_module_1.AppRoutingModule,
                        http_1.HttpClientModule,
                        forms_1.ReactiveFormsModule,
                        dynamic_form_module_1.DynamicFormModule,
                        angular5_social_login_1.SocialLoginModule,
                        http_1.HttpClientXsrfModule.withOptions({
                            cookieName: 'My-Xsrf-Cookie',
                            headerName: 'My-Xsrf-Header',
                        })
                    ],
                    providers: [
                        auth_service_1.AuthService,
                        product_service_1.ProductService,
                        product_resolve_1.DataProductResolver,
                        message_service_1.MessageService,
                        http_error_handler_service_1.HttpErrorHandler,
                        guest_guard_1.GuestGuard,
                        user_guard_1.UserGuard,
                        ngx_cookie_service_1.CookieService,
                        session_service_1.SessionService,
                        profile_service_1.ProfileService,
                        product_images_service_1.ProductImagesService,
                        base64_validators_service_1.Base64ValidatorsService,
                        {
                            provide: http_1.HTTP_INTERCEPTORS,
                            useClass: auth_interceptor_1.AuthInterceptor,
                            multi: true,
                        },
                        {
                            provide: angular5_social_login_1.AuthServiceConfig,
                            useFactory: getAuthServiceConfigs
                        }
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
// Configs
function getAuthServiceConfigs() {
    var config = new angular5_social_login_1.AuthServiceConfig([
        {
            id: angular5_social_login_1.GoogleLoginProvider.PROVIDER_ID,
            provider: new angular5_social_login_1.GoogleLoginProvider(environment_1.environment.googleToken),
        },
    ]);
    return config;
}
exports.getAuthServiceConfigs = getAuthServiceConfigs;
//# sourceMappingURL=app.module.js.map