import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CookieService} from 'ngx-cookie-service';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ProductAddPageComponent} from './product-add-page/product-add-page.component';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProductItemComponent} from './shared/components/product-item/product-item.component';
import {ProductService} from './core/services/product.service';
import {InfiniteScrollDirective} from './shared/directives/infinite-scroll.directive';
import {ScrollTopDirective} from './shared/directives/scroll-top.directive';
import {ButtonOnTopComponent} from './shared/components/button-on-top/button-on-top.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {SlideshowComponent} from './shared/components/slideshow/slideshow.component';
import {ChatComponent} from './shared/components/chat/chat.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormDemoPageComponent} from './dynamic-form-demo-page/dynamic-form-demo-page.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {MessagesComponent} from './shared/components/messages/messages.component';
import {HttpErrorHandler} from './core/services/http-error-handler.service';
import {MessageService} from './core/services/message.service';
import {SessionService} from './core/services/session.service';
import {ProfileService} from './core/services/profile.service';
import {AuthInterceptor} from './core/services/auth.interceptor';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';
import {GuestGuard} from './core/guards/guest.guard';
import {UserGuard} from './core/guards/user.guard';
import {AvatarComponent} from './shared/components/avatar/avatar.component';
import {UserNameComponent} from './shared/components/user-name/user-name.component';
import {AuthService} from './core/services/auth.service';
import {environment} from '../environments/environment';
import {ProductEditPageComponent} from './product-edit-page/product-edit-page.component';
import {DataProductResolver} from './core/product.resolve';
import {ImagesUploaderComponent} from './shared/components/images-uploader/images-uploader.component';
import {ProductImagesService} from './core/services/product-images.service';
import {Base64ValidatorsService} from './core/services/base64-validators.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductAddPageComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    LoginPageComponent,
    ProductAddPageComponent,
    ProductEditPageComponent,
    ProductItemComponent,
    ScrollTopDirective,
    InfiniteScrollDirective,
    ButtonOnTopComponent,
    NotFoundPageComponent,
    SlideshowComponent,
    ChatComponent,
    DynamicFormDemoPageComponent,
    MessagesComponent,
    ProfilePageComponent,
    AvatarComponent,
    UserNameComponent,
    ImagesUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormModule,
    SocialLoginModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    })
  ],
  providers: [
    AuthService,
    ProductService,
    DataProductResolver,
    MessageService,
    HttpErrorHandler,
    GuestGuard,
    UserGuard,
    CookieService,
    SessionService,
    ProfileService,
    ProductImagesService,
    Base64ValidatorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(environment.googleToken),
      },
    ]
  );
  return config;
}
